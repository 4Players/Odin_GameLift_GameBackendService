
# SteamBranch


## Properties

Name | Type
------------ | -------------
`name` | string
`buildid` | number
`pwdrequired` | boolean
`description` | string
`timeupdated` | number

## Example

```typescript
import type { SteamBranch } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "buildid": null,
  "pwdrequired": null,
  "description": null,
  "timeupdated": null,
} satisfies SteamBranch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SteamBranch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


