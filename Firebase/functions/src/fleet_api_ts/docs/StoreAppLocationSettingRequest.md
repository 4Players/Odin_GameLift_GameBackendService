
# StoreAppLocationSettingRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`serverConfigId` | number
`numInstances` | number
`placement` | [CreateUpdatePlacement](CreateUpdatePlacement.md)
`password` | string

## Example

```typescript
import type { StoreAppLocationSettingRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "serverConfigId": null,
  "numInstances": null,
  "placement": null,
  "password": null,
} satisfies StoreAppLocationSettingRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoreAppLocationSettingRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


