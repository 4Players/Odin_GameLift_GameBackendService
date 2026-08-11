
# ServerConfig


## Properties

Name | Type
------------ | -------------
`id` | number
`binaryId` | number
`appId` | number
`name` | string
`command` | string
`args` | string
`notes` | string
`status` | [ServerConfigStatus](ServerConfigStatus.md)
`statusMessage` | string
`maintenance` | boolean
`resourcePackageSlug` | string
`inUse` | boolean
`dnsServiceEnabled` | boolean
`restartPolicy` | [RestartPolicy](RestartPolicy.md)
`env` | [Array&lt;EnvironmentVariableDefinition&gt;](EnvironmentVariableDefinition.md)
`mounts` | [Array&lt;Mount&gt;](Mount.md)
`ports` | [Array&lt;PortDefinition&gt;](PortDefinition.md)
`configFiles` | [Array&lt;ConfigFile&gt;](ConfigFile.md)
`secretFiles` | [Array&lt;SecretFile&gt;](SecretFile.md)
`binary` | [Binary](Binary.md)
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { ServerConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "binaryId": null,
  "appId": null,
  "name": null,
  "command": null,
  "args": null,
  "notes": null,
  "status": null,
  "statusMessage": null,
  "maintenance": null,
  "resourcePackageSlug": null,
  "inUse": null,
  "dnsServiceEnabled": null,
  "restartPolicy": null,
  "env": null,
  "mounts": null,
  "ports": null,
  "configFiles": null,
  "secretFiles": null,
  "binary": null,
  "metadata": null,
} satisfies ServerConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServerConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


