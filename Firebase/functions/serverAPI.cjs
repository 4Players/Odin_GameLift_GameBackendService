    
const FleetApi = require("@reneup9/odin_fleet_api");
const OdinAccessToken = "<your-aws-token>"
const configID = 0;
const appID = 0;
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


async function setServerStatus(ServerID,Status){
    const dockerApi =new FleetApi.DockerApi(config);    
    const dockerAutoscalingApi = new FleetApi.DockerServiceAutoscalingApi(config);
    const bAutoscalingEnabled = await autoscalingEnabled(ServerID,appID);
    if(bAutoscalingEnabled){
        switch (Status) {
            case "Available":
                await dockerAutoscalingApi.dockerServicesAutoscalingReady({dockerService:ServerID});
                break;
            case"Closed":
                await dockerAutoscalingApi.dockerServicesAutoscalingShutdown({dockerService:ServerID});
                break;
            case "Started":
                await dockerAutoscalingApi.dockerServicesAutoscalingAllocate({dockerService:ServerID});
                break;
            default:
                break;
        }
    }
    await dockerApi.dockerServicesMetadataUpdate({dockerService:ServerID,patchMetadataRequest:{metadata:{gamesSessionStatus:Status}}});
}


async function autoscalingEnabled(ServerID,appId){
    const dockerApi =new FleetApi.DockerApi(config);    
    console.log("ServerID "+ServerID);
    let ServerDetails = await dockerApi.getServerById({dockerService:ServerID,app: appId});
    return (ServerDetails !== undefined && ServerDetails.autoscaling.enabled);
}


async function stopServer(serverID){
    let dockerapi = new FleetApi.DockerServiceApi(config);
    await dockerapi.stopServer({dockerService:serverID});
}

module.exports = {
  autoscalingEnabled,
  stopServer,
  setServerStatus,
  appID
};