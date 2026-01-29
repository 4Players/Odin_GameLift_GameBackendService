
# OdinFleet GameLift Backend Service

This repository provides a minimal backend service that works together with the Unreal Engine dedicated server described in the accompanying Odin_Gamelift project:
https://github.com/4Players/OdinFleet_GameLift_Unreal

The backend exposes secure HTTP endpoints for creating, searching, and managing GameLift game sessions. Since GameLift credentials should never be embedded in the game client, this service acts as the gateway between the client and Amazon GameLift Anywhere. It uses the AWS GameLift Client SDK to issue commands such as `SearchGameSessions`, `CreateGameSession`, and `TerminateGameSession`.

The implementation is designed for Google Cloud Functions, but can be adapted to any Node.js-based serverless or containerized environment. Together with the main Odin_Gamelift repository, this backend forms a complete example of how to combine Odin Fleet's dedicated server hosting with GameLift's matchmaking and session management capabilities.

## Accessing Other Versions

Specific versions are available via the following branches and tags:

* **FlexMatch Integration:** Use the `main` branch (tag [`v2-aws-flexmatch-matchmaking`](https://github.com/4Players/Odin_GameLift_GameBackendService/releases/tag/v2-aws-flexmatch-matchmaking)) for the [FlexMatch guide](https://docs.4players.io/fleet/guides/gamelift-flexmatch/).
* **GameLift Anywhere Integration:** Use the `aws-gamelift-anywhere` branch (tag [`v1-aws-gamelift-anywhere-guide`](https://github.com/4Players/Odin_GameLift_GameBackendService/releases/tag/v1-aws-gamelift-anywhere-guide)) for the [Anywhere guide](https://docs.4players.io/fleet/guides/gamelift-anywhere/).

## Why ODIN Fleet?

[Odin Fleet](https://odin.4players.io/fleet/) is a managed hosting platform for running dedicated game servers at scale. It provides on-demand server instances, automatic deployment via Docker images, and integrated monitoring. By running your dedicated server on Odin Fleet and connecting it to GameLift Anywhere, you can use Odin Fleet for compute while relying on GameLift for matchmaking, session management, and player orchestration.

## More Information and Documentation

For detailed guides on setting up the AWS environment and configuring your ODIN server fleets, check the following:

- [More Information on ODIN Fleet](https://docs.4players.io/fleet/)
- [ODIN Fleet and AWS GameLift Anywhere integration guide](https://docs.4players.io/fleet/guides/gamelift-anywhere/)
- [ODIN Fleet and FlexMatch integration guide](https://docs.4players.io/fleet/guides/gamelift-flexmatch/)