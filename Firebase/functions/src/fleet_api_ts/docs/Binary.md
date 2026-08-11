
# Binary


## Properties

Name | Type
------------ | -------------
`id` | number
`appId` | number
`name` | string
`version` | string
`type` | [BinaryType](BinaryType.md)
`os` | [OperatingSystem](OperatingSystem.md)
`maintenance` | boolean
`status` | [BinaryStatus](BinaryStatus.md)
`statusMessage` | string
`progress` | number
`progressMessage` | string
`inUse` | boolean
`dockerImage` | [DockerImage](DockerImage.md)
`steam` | [Steam](Steam.md)

## Example

```typescript
import type { Binary } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "appId": null,
  "name": null,
  "version": null,
  "type": null,
  "os": null,
  "maintenance": null,
  "status": null,
  "statusMessage": null,
  "progress": null,
  "progressMessage": null,
  "inUse": null,
  "dockerImage": null,
  "steam": null,
} satisfies Binary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Binary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


