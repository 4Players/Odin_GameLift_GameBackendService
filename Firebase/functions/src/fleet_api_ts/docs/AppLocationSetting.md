
# AppLocationSetting


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`appId` | number
`serverConfigId` | number
`numInstances` | number
`autoScalerEnabled` | boolean
`autoScalerMin` | number
`autoScalerMax` | number
`status` | [AppLocationSettingStatus](AppLocationSettingStatus.md)
`statusMessage` | string
`maintenance` | boolean
`inUse` | boolean
`placement` | [Placement](Placement.md)
`serverConfig` | [ServerConfig](ServerConfig.md)

## Example

```typescript
import type { AppLocationSetting } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "appId": null,
  "serverConfigId": null,
  "numInstances": null,
  "autoScalerEnabled": null,
  "autoScalerMin": null,
  "autoScalerMax": null,
  "status": null,
  "statusMessage": null,
  "maintenance": null,
  "inUse": null,
  "placement": null,
  "serverConfig": null,
} satisfies AppLocationSetting

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AppLocationSetting
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


