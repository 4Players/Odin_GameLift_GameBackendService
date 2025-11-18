/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const {GameLiftClient, SearchGameSessionsCommand, CreateGameSessionCommand, TerminateGameSessionCommand, FleetCapacityExceededException} = require('@aws-sdk/client-gamelift');


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
    const command = new SearchGameSessionsCommand(SearchInput);
    await executeCommand(res,command);
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
    const command = new TerminateGameSessionCommand(input);
    await executeCommand(res,command);
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
async function createPlayerSession(GameSessionId,PlayerId,PlayerData){
    var input = {
        GameSessionId: GameSessionId, 
        PlayerId: PlayerId, 
    };
    if(PlayerData !== undefined){
        input.PlayerData = PlayerData;
    }
    const command = new CreateGameSessionCommand(input);
    await executeCommand(res,command);
    return;
}

exports.GameLiftCreatePlayerSession = onRequest({region:GCloudRegion},async (req,res)=>{
    if(req.body.PlayerID == undefined){
        res.status(401).send("Missing PlayerID");
        return;
    }
    if(req.body.GameSessionId === undefined){
        res.status(402).send("Missing GameSessionID");
        return;
    }
    await createPlayerSession(req.body.GameSessionId, req.body.PlayerID,req.body.PlayerData);
});

