
# StoreBinaryRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`version` | string
`type` | [BinaryType](BinaryType.md)
`os` | [OperatingSystem](OperatingSystem.md)
`steam` | [CreateUpdateSteam](CreateUpdateSteam.md)
`dockerImage` | [CreateUpdateDockerImage](CreateUpdateDockerImage.md)

## Example

```typescript
import type { StoreBinaryRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "version": null,
  "type": null,
  "os": null,
  "steam": null,
  "dockerImage": null,
} satisfies StoreBinaryRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoreBinaryRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


