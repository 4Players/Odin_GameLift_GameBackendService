
# StoreServerConfigRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`args` | string
`command` | string
`notes` | string
`binaryId` | number
`resourcePackageSlug` | string
`dnsServiceEnabled` | boolean
`configFiles` | [Array&lt;ConfigFile&gt;](ConfigFile.md)
`secretFiles` | [Array&lt;SecretFile&gt;](SecretFile.md)
`restartPolicy` | [RestartPolicy](RestartPolicy.md)
`env` | [Array&lt;EnvironmentVariableDefinition&gt;](EnvironmentVariableDefinition.md)
`mounts` | [Array&lt;Mount&gt;](Mount.md)
`ports` | [Array&lt;PortDefinitionRequest&gt;](PortDefinitionRequest.md)

## Example

```typescript
import type { StoreServerConfigRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "args": null,
  "command": null,
  "notes": null,
  "binaryId": null,
  "resourcePackageSlug": null,
  "dnsServiceEnabled": null,
  "configFiles": null,
  "secretFiles": null,
  "restartPolicy": null,
  "env": null,
  "mounts": null,
  "ports": null,
} satisfies StoreServerConfigRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoreServerConfigRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


