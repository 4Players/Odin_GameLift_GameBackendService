
# SteamLauncher


## Properties

Name | Type
------------ | -------------
`executable` | string
`arguments` | string
`osarch` | string
`oslist` | string
`realm` | string
`betakey` | string
`description` | string

## Example

```typescript
import type { SteamLauncher } from ''

// TODO: Update the object below with actual values
const example = {
  "executable": null,
  "arguments": null,
  "osarch": null,
  "oslist": null,
  "realm": null,
  "betakey": null,
  "description": null,
} satisfies SteamLauncher

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SteamLauncher
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


