/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const {GameLiftClient, SearchGameSessionsCommand, CreateGameSessionCommand,DescribeGameSessionPlacementCommand , TerminateGameSessionCommand, FleetCapacityExceededException, StartGameSessionPlacementCommand, CreatePlayerSessionCommand, StartMatchmakingCommand, DescribeMatchmakingCommand, StopMatchmakingCommand} = require('@aws-sdk/client-gamelift');
const admin = require('firebase-admin');
const { Timestamp } = require("firebase-admin/firestore");
const { gcloudProject } = require("firebase-functions/params");
admin.initializeApp();
const db = admin.firestore();

const AWSRegion = "<your-aws-region>";
const GCloudRegion = "<your-gcloud-region>";
const FleetID = "<your-fleet-id>";
const Location = "<your-custom-location>";

const gameLiftClient = new GameLiftClient({
    region:AWSRegion,
    credentials:{
        accessKeyId:"<your-access-key-id>",
        secretAccessKey:"<your-access-key>"
    }
});

exports.GameLiftSearchSessions = onRequest({region:GCloudRegion},async(req,res)=>{

    const SearchInput = {
        FleetId:FleetID,
        Location:Location,
    };
    //const command = new SearchGameSessionsCommand(SearchInput);
    //await executeCommand(res,command);

    const gameSessionDocs = await db.collection("GameSessions").get();

    let sessions = {
        GameSessions:[]
    };
    Timestamp.now().toMillis;
    for (let i = 0; i < gameSessionDocs.size; i++) {
        const element = gameSessionDocs.docs[i];
        let time = 0;
        if(element.get('Time') !== undefined){
            time = element.get('Time').toMillis();
        }
        sessions.GameSessions.push({
            Time:time,
            CreationTime:element.get('endTime'),
            GameSessionId:element.get('GameSessionId'),
            IpAddress:element.get('ipAddress'),
            Port:element.get('port'),
            Name:element.get('Name'),
        });
    }
    res.status(200).send(sessions);
    return;
});

exports.GameLiftCloseGameSession = onRequest({region:GCloudRegion},async (req, res) =>{

    if(req.body.GameSessionId === undefined){
        res.status(401).send("Missing GameSessionId");
        return;
    }

    const input = { // TerminateGameSessionInput
        GameSessionId: req.body.GameSessionId, // required
        TerminationMode: "TRIGGER_ON_PROCESS_TERMINATE", // required
    };
    const docs = await db.collection("GameSessions").where("gameSessionArn","==",input.GameSessionId).get();
    for(let i = 0; i < docs.size; i++){
        await docs.docs[i].ref.delete();
    }
    const command = new TerminateGameSessionCommand(input);
    await executeCommand(res,command);
});
exports.GameLiftQueueGameSession = onRequest({region:GCloudRegion},async (req,res) =>{
    if(req.body.SessionName === undefined){
        res.status(401).send("Missing SessionName");
        return;
    }
    if(req.body.PlacementId === undefined){
        res.status(401).send("Missing PlacementId");
        return;
    }
    const input = {
        PlacementId:req.body.PlacementId,
        GameSessionQueueName: "TestPlacement",
        MaximumPlayerSessionCount: Number(2),
        GameSessionName:req.body.SessionName
    };
    const command = new StartGameSessionPlacementCommand(input);
    await executeCommand(res,command);
});

exports.StartFlexMatch = onRequest({region:GCloudRegion},async (req,res)=>{
    if(req.body.PlayerData === undefined){
        res.status(401).send("Missing Playerdata");
        return;
    }
    if(req.body.Config === undefined){
        res.status(401).send("Missing Configuration");
        return;
    }
    const input = {
        ConfigurationName:req.body.Config,
        Players: req.body.PlayerData
    };
    const command = new StartMatchmakingCommand(input);
    await executeCommand(res,command);
});


exports.MatchmakingPlacement = onRequest({region:GCloudRegion},async (req,res)=>{
    const snsBody = JSON.parse(req.body);
    console.log(snsBody);
    const message = JSON.parse(snsBody.Message);
    const detail = message.detail;
    switch (detail.type) {
        case "MatchmakingSearching":
            var Tickets = detail.tickets;
            for(let i = 0; i < Tickets.length; i++){
                let element = Tickets[i];
                element.Status = "SEARCHING";
                element.timestamp = Timestamp.now();
                await db.collection('Matchmaking').doc(element.ticketId).create(element);
            }
            break;

        case "PotentialMatchCreated":
            var Tickets = detail.tickets;
            for(let i = 0; i < Tickets.length; i++){
                let element = Tickets[i];
                element.Status = "POTENTIAL_MATCH";
                element.timestamp = Timestamp.now();
                element.matchId = detail.matchId;
                element.acceptanceRequired = detail.acceptanceRequired;
                if(detail.acceptanceRequired == true){
                    await db.collection('Matchmaking').doc(element.ticketId).update(element);
                }                
            }
            break;

        case "MatchmakingSucceeded":
            var Tickets = detail.tickets;
            var gamesessionInfo = detail.gameSessionInfo;
            for(let i = 0; i < Tickets.length; i++){
                var element = Tickets[i];
                element.Status = "MATCHMAKING_SUCCESSFULL";
                element.timestamp = Timestamp.now();
                element.matchId = detail.matchId;
                element.ipAddress = gamesessionInfo.ipAddress;
                element.port = gamesessionInfo.port;
                element.gameSessionArn = gamesessionInfo.gameSessionArn;
                await db.collection('Matchmaking').doc(element.ticketId).update(element);
            }

            break;

        case "MatchmakingTimedOut":
            var Tickets = detail.tickets;
            for(let i = 0; i < Tickets.length; i++){
                var element = Tickets[i];
                element.Status = "TIMEOUT";
                element.timestamp = Timestamp.now();
                await db.collection('Matchmaking').doc(element.ticketId).update(element);
            }
            break;
        case "MatchmakingCancelled":
            var Tickets = detail.tickets;
            for(let i = 0; i < Tickets.length; i++){
                var element = Tickets[i];
                element.Status = "CANCELLED";
                element.timestamp = Timestamp.now();
                await db.collection('Matchmaking').doc(element.ticketId).update(element);
            }
        default:
            break;
    }
    return res.status(200).send("ok");
});

exports.GameLiftStopMatchmaking = onRequest({region:GCloudRegion},async (req, res)=>{
        if(req.body.TickeId === undefined){
        res.status(401).send("Missing TicketId");
        return;
    }
    const input = {
        TicketId:req.body.TickeId,
    };
    const command = new StopMatchmakingCommand(input);
    await executeCommand(res,command);
});


exports.GameLiftGameSessionQueued = onRequest({region:GCloudRegion},async (req,res)=>{
    const snsBody = JSON.parse(req.body);
    console.log(req.body);

    if(snsBody.Type === "SubscriptionConfirmation"){
        console.log('SubscriptionConfirmation')
        return res.status(200).send("ok");
    }
    console.log(`Typ:${snsBody.Type}`);
    if(snsBody.Type === 'Notification'){
        console.log('Notification');
        const message = JSON.parse(snsBody.Message);
        console.log(`MSG:${JSON.stringify(message)}`);
        var details = message.detail;
        console.log(`Detail:${details}`);
        if(details.type === "PlacementFulfilled"){
            details.Time = Timestamp.now();
            const input = { // DescribeGameSessionPlacementInput
                PlacementId: details.placementId, // required
            };
            const command = new DescribeGameSessionPlacementCommand(input);
                try {
                    const response = await gameLiftClient.send(command);
                    details.GameSessionId = response.GameSessionPlacement.GameSessionId;
                    details.Name = response.GameSessionPlacement.GameSessionName;
                    details.GameSessionArn = response.GameSessionPlacement.GameSessionArn;
                    details.CreationTime = response.GameSessionPlacement.EndTime;
                    details.MaximumPlayerSessionCount = response.GameSessionPlacement.MaximumPlayerSessionCount;
                    await db.collection('GameSessions').doc(details.placementId).create(details);
                    res.status(200).send(response); 
                    return;
                } catch (error) {
                    console.error(error);
                    if(error instanceof FleetCapacityExceededException){
                        res.status(403).send("FleetCapacityExceededException");
                    }else{
                        res.status(400).send("An error occured");
                    }
                    return;
                }
            
           //await db.ref(`GameSession/${details.placementId}`).update(details);
        }
    }
    return res.status(200).send("ok");
});


exports.GameLiftCreateGameSession = onRequest({region:GCloudRegion},async (req,res)=>{
    if(req.body.CreatorId === undefined){
        res.status(401).send("Missing CreatorId");
        return;
    }
    if(req.body.SessionName === undefined){
        res.status(401).send("Missing SessionName");
        return;
    }

    const input = {
        FleetId: FleetID,
        Location:Location,
        CreatorId:req.body.CreatorId,
        Name:req.body.SessionName,
        MaximumPlayerSessionCount:Number(2),
    };
    const command = new CreateGameSessionCommand(input);
    await executeCommand(res,command);
    return;
});

async function executeCommand(res,command){
    try {
        const response = await gameLiftClient.send(command);
        res.status(200).send(response); 
        return;
    } catch (error) {
        console.error(error);
        if(error instanceof FleetCapacityExceededException){
            res.status(403).send("FleetCapacityExceededException");
        }else{
            res.status(400).send("An error occured");
        }
        return;
    }
}
async function createPlayerSession(res,GameSessionId,PlayerId,PlayerData){
    var input = {
        GameSessionId: GameSessionId, 
        PlayerId: PlayerId, 
    };
    if(PlayerData !== undefined){
        input.PlayerData = PlayerData;
    }
    const command = new CreatePlayerSessionCommand(input);
    await executeCommand(res,command);
    return;
}

exports.GameLiftCheckMatchmakingTicket = onRequest({region:GCloudRegion},async(req,res) =>{

    if(req.body.TicketIds == undefined){
        res.status(403).send("Missing TicketIds");
        return;
    }
    if(req.body.TicketIds.length == 0){
        res.status(403).send("No TicketIds");
        return;
    }
    const ticketIds = req.body.TicketIds;
    const TicketPromises = [];
    for(let i = 0; i < ticketIds.length; i++){
        TicketPromises.push(db.collection('Matchmaking').doc(ticketIds[i]).get());
    }
    let Tickets = await Promise.all(TicketPromises);
    let result = {TicketList:[]};
    for (let i = 0; i < Tickets.length; i++) {
        const element = Tickets[i];
        result.TicketList.push(element.data())
    }
    return res.status(200).send(result); 
    
    /*var input = {
        TicketIds:req.body.TicketIds
    };
    const command = new DescribeMatchmakingCommand(input);
    await executeCommand(res,command);*/
});

exports.GameLiftCreatePlayerSession = onRequest({region:GCloudRegion},async (req,res)=>{
    if(req.body.PlayerID == undefined){
        res.status(401).send("Missing PlayerID");
        return;
    }
    if(req.body.GameSessionId === undefined){
        res.status(402).send("Missing GameSessionID");
        return;
    }
    await createPlayerSession(res,req.body.GameSessionId, req.body.PlayerID,req.body.PlayerData);
});

