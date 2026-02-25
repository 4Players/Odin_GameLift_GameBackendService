    
const FleetApi = require("@reneup9/odin_fleet_api");

const OdinAccessToken = "<fleet-access-key>"
const configID = 362;
const appID = 483;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


let defaultConfig = FleetApi.DefaultConfig

var headers = {
    Authorization: `Bearer ${OdinAccessToken}`,
};
var config = {
    basePath: defaultConfig.basePath,
    headers: {...defaultConfig.headers, ...headers},
    fetchApi: defaultConfig.fetchApi,
    middleware: defaultConfig.middleware,
    queryParamsStringify: defaultConfig.queryParamsStringify,
    username: defaultConfig.username,
    password: defaultConfig.password,
    accessToken: OdinAccessToken,
    credentials: defaultConfig.credentials,
    apiKey: defaultConfig.apiKey,
};

class AsyncLock{
    constructor(){
        this._locked = false;
        this._waiters = [];
    }
    async aquire(){
        if(!this._locked){
            this._locked = true;
            return this._release.bind(this);
        }
        return new Promise(resolve => this._waiters.push(resolve)).then(()=> this._release.bind(this));
    }
    _release(){
        const next = this._waiters.shift();
        if(next) next();
        else this._locked = false;
    }

    async runLocked(func){
        const release = await this.aquire();
        try{
            return await func();
        }finally{
            release();
        }
    }
}
const createServerInstanceLock = new AsyncLock();
/**
 * Iterates through all server instances for a given App and collects all stopped/available instances.
 * @param appID ID of the Odin-Fleet app
 * @returns The IDs of the stopped/available server instances.
 */
async function getAvailableServerIdsForApp(appID){

    let dockerapi = new FleetApi.DockerServiceApi(config);
    const servers = await dockerapi.getServers({app:appID});
        
    let serverList = servers.data;
    let stoppedServersIds = [];
    let runningServerIds = [];
    let serverWithGameServer = [];
    for (let i = 0; i < serverList.length; i++) {
        const element = serverList[i];
        if(element.status == "stopped"){
            stoppedServersIds.push(element.id);
        }else if(element.metadata.gamesSessionStatus == "Available"){
            runningServerIds.push(element.id);
        }else if(element.metadata.gamesSessionStatus == "Started" || element.metadata.gamesSessionStatus == "Starting"){
            serverWithGameServer.push(element.id);  
        }            
    }
    return {stopped:stoppedServersIds,readyForGameSession:runningServerIds,withGameServer:serverWithGameServer,total:servers.data.length,totalRunning:runningServerIds.length +serverWithGameServer.length};

}

/**
 * Increases the minInstances of a given locationSetting by 1 and starts the new server instance.
 * @param locationSettingId ID of the locationSettings. A deployment target in the dashboard.
 */
async function createAndStartNewServerInstanceForApp(appId,locationSettingId,maxInstances){

        let locationApi = new FleetApi.AppLocationSettingApi(config);
        let dockerApi = new FleetApi.DockerApi(config);
        let servers = await dockerApi.getServers({app:appId,filterAppLocationSettingId:locationSettingId});
        let serverIDs = [];
        let initialServerCount = servers.data.length;
        let runningServers = 0;
        for (let i = 0; i < servers.data.length; i++) {
            const element = servers.data[i];
            if(element.status == "running"){
                runningServers++;
            }
            serverIDs.push(element.id);
        }
        if(runningServers >= maxInstances){
            return {newInstanceID:-1,runningServers:runningServers,serverCreated:false};
        }
        let locationSettings = await locationApi.getAppLocationSettingById({appLocationSetting:locationSettingId});
        if(locationSettings !==  undefined){
            try{
                await locationApi.updateAppLocationSetting({appLocationSetting:locationSettingId,updateAppLocationSettingRequest:{name:locationSettings.name,numInstances:locationSettings.numInstances+1}});
            }catch(e){
                return {newInstanceID:-2,runningServers:runningServers,serverCreated:false};
            }
            
            servers = await dockerApi.getServers({app:appId,filterAppLocationSettingId:locationSettingId});
            let Timeout = false;
            let deltaTime= 0;
            while(servers.data.length == initialServerCount && !Timeout){
                await sleep(200);
                deltaTime += 200;
                servers = await dockerApi.getServers({app:appId,filterAppLocationSettingId:locationSettingId});
                if(deltaTime >= 2000){
                    Timeout = true;
                }
            }
            const newInstances =[];
            for (let i = 0; i < servers.data.length; i++) {
                if(!serverIDs.includes(servers.data[i].id)){
                    await setGameSessionStatusForServer(servers.data[i].id,"Closed");
                    newInstances.push(servers.data[i].id);
                }
            }
            return {newInstanceID:newInstances,runningServers:servers.data.length,serverCreated:true};
        }
}

async function setGameSessionStatusForServer(ServerID,Status){
    const dockerApi =new FleetApi.DockerApi(config);    
    await dockerApi.dockerServicesMetadataUpdate({dockerService:ServerID,patchMetadataRequest:{metadata:{gamesSessionStatus:Status}}})
}

/**
 * Starts a server instance for a given id or finds the first available server instanve and starts that.
 * @param appID ID of the Odin-Fleet app
 * @param serverID ID of the Odin-Fleet server instance. If empty, gets the first available instance and uses that id.
 */
async function startAvailableServerInstanceForApp(appID, serverID){
    let dockerapi = new FleetApi.DockerServiceApi(config);
    let availableServerIds = [];
    if(serverID === undefined){
        availableServerIds = await getAvailableServerIdsForApp(appID);
        if(availableServerIds.length > 0){
            serverID = availableServerIds.readyForGameSession[0];
        }
    }
    await setGameSessionStatusForServer(serverID,"Closed");
    await dockerapi.startServer({dockerService:serverID});
    return serverID;
}

/**
 * Starts an available Server instance for an App or increases the amount of server instances by 1 and starts the new instance
 * @param appID ID of the Odin-Fleet app
 * @param locationSettingId ID of the locationSettings. A deployment target in the dashboard.
 */
async function startServerIfNeeded(appID, locationSettingId){

    let idleThreshhold = 0.0;
    let minimumIdleInstances = 0;
    let persistentIdle = false;
    let maxRunningInstances = 10;
    
    const configApi = new FleetApi.ServerConfigApi(config);
    const serverConfig = await configApi.getServerConfigById({serverConfig:configID});

    for(let i = 0;i < serverConfig.env.length; i++){
        const element = serverConfig.env[i];
        switch(element.key){
            case "idleThreshhold":{
                idleThreshhold = element.value;
            }
            case "minimumIdleInstances":{
                minimumIdleInstances = element.value;
            }
            case "persistentIdle":{
                persistentIdle = element.value;
            }
            case "maxRunningInstances":{
                maxRunningInstances = element.value;
            }
        }    
    }             
    return createServerInstanceLock.runLocked(async()=>{
        let availableServerIds = await getAvailableServerIdsForApp(appID);

        let minIdleInstancesNeeded = Math.floor(availableServerIds.withGameServer.length * idleThreshhold);

        if(availableServerIds.totalRunning >= maxRunningInstances){
            return {created:0, started: 0,available:availableServerIds.readyForGameSession.length};
        }
        if((minIdleInstancesNeeded < minimumIdleInstances) && persistentIdle){
            minIdleInstancesNeeded = minimumIdleInstances;
        }
        minIdleInstancesNeeded++;

        let newInstancesToCreate = 0;
        let existingInstancesToStart = 0;
        if(availableServerIds.readyForGameSession.length >= minIdleInstancesNeeded){
            return {created:0, started: 0,available:availableServerIds.readyForGameSession.length};// no instance needs to be started
        }
        if(availableServerIds.stopped.length >= minIdleInstancesNeeded){
            
            existingInstancesToStart = minIdleInstancesNeeded;
            if(availableServerIds.totalRunning.length + existingInstancesToStart > maxRunningInstances){
                existingInstancesToStart = maxRunningInstances-availableServerIds.totalRunning.length;
            }
        }else{
            existingInstancesToStart = availableServerIds.stopped.length;
            if(availableServerIds.totalRunning.length + existingInstancesToStart > maxRunningInstances){
                existingInstancesToStart = maxRunningInstances-availableServerIds.totalRunning.length;
            }
            newInstancesToCreate = Math.max(minIdleInstancesNeeded - existingInstancesToStart - availableServerIds.readyForGameSession.length,0);
        }
        const startedServerInstancePromises = [];
        for(let i = 0; i < existingInstancesToStart;i++){
            startedServerInstancePromises.push(await startAvailableServerInstanceForApp(appID, availableServerIds.stopped[i]));
        }
        const startedServerInstaceIds = await Promise.all(startedServerInstancePromises);
        const createServerInstancesPromises = [];
        for(let i = 0; i< newInstancesToCreate; i++){
            createServerInstancesPromises.push(await createAndStartNewServerInstanceForApp(appID,locationSettingId,maxRunningInstances));
        }
        const createdServerInstanceIds = await Promise.all(createServerInstancesPromises);
        let serverCreated = false;
        for(let i = 0; i< createdServerInstanceIds.length; i++){
            if(createdServerInstanceIds[i].serverCreated){
                serverCreated = true;
            }
        }
        return {created:createdServerInstanceIds, started: startedServerInstaceIds,available:availableServerIds.readyForGameSession.length,serverCreated:serverCreated};
    });
}


async function stopServer(serverID){
    let dockerapi = new FleetApi.DockerServiceApi(config);
    await dockerapi.stopServer({dockerService:serverID});
}

module.exports = {
  stopServer,
  startServerIfNeeded,
  setGameSessionStatusForServer,
  getAvailableServerIdsForApp,
  appID
};