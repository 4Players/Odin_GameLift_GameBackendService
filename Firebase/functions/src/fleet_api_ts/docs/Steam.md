
# Steam


## Properties

Name | Type
------------ | -------------
`steamAppId` | number
`branch` | string
`password` | string
`command` | string
`steamcmdUsername` | string
`steamcmdPassword` | string
`headful` | boolean
`requestLicense` | boolean
`runtime` | [SteamRuntime](SteamRuntime.md)
`additionalPackages` | string
`unpublished` | boolean
`inUse` | boolean

## Example

```typescript
import type { Steam } from ''

// TODO: Update the object below with actual values
const example = {
  "steamAppId": null,
  "branch": null,
  "password": null,
  "command": null,
  "steamcmdUsername": null,
  "steamcmdPassword": null,
  "headful": null,
  "requestLicense": null,
  "runtime": null,
  "additionalPackages": null,
  "unpublished": null,
  "inUse": null,
} satisfies Steam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Steam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


