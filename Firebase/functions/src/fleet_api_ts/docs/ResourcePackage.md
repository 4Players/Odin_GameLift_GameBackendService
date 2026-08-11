
# ResourcePackage


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`slug` | string
`type` | [ResourcePackageType](ResourcePackageType.md)
`cpuLimit` | number
`memoryLimitBytes` | number
`memoryLimitMiB` | number
`memoryLimitFileSizeString` | string

## Example

```typescript
import type { ResourcePackage } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "slug": null,
  "type": null,
  "cpuLimit": null,
  "memoryLimitBytes": null,
  "memoryLimitMiB": null,
  "memoryLimitFileSizeString": null,
} satisfies ResourcePackage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResourcePackage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


