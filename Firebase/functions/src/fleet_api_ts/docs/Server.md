
# Server


## Properties

Name | Type
------------ | -------------
`id` | number
`appLocationSettingId` | number
`instance` | number
`serverConfigId` | number
`serverConfigName` | string
`name` | string
`status` | string
`statusMessage` | string
`dns` | string
`isBackupable` | boolean
`isRestorable` | boolean
`isPending` | boolean
`isNotFound` | boolean
`isHealthy` | boolean
`isStopped` | boolean
`maintenance` | boolean
`ports` | [Array&lt;Port&gt;](Port.md)
`env` | [{ [key: string]: EnvironmentVariable; }](EnvironmentVariable.md)
`restartPolicy` | [RestartPolicy](RestartPolicy.md)
`node` | [Node](Node.md)
`location` | [Location](Location.md)
`resources` | [ResourcePackage](ResourcePackage.md)
`backups` | [Array&lt;Backup&gt;](Backup.md)
`autoscaling` | [DockerServiceAutoscaling](DockerServiceAutoscaling.md)
`metadata` | { [key: string]: any; }
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Server } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "appLocationSettingId": null,
  "instance": null,
  "serverConfigId": null,
  "serverConfigName": null,
  "name": null,
  "status": null,
  "statusMessage": null,
  "dns": null,
  "isBackupable": null,
  "isRestorable": null,
  "isPending": null,
  "isNotFound": null,
  "isHealthy": null,
  "isStopped": null,
  "maintenance": null,
  "ports": null,
  "env": null,
  "restartPolicy": null,
  "node": null,
  "location": null,
  "resources": null,
  "backups": null,
  "autoscaling": null,
  "metadata": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Server

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Server
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


