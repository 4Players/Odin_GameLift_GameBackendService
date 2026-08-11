
# DockerRegistry


## Properties

Name | Type
------------ | -------------
`id` | number
`type` | [DockerRegistryType](DockerRegistryType.md)
`name` | string
`username` | string
`password` | string
`url` | string
`accessToken` | string
`instanceUrl` | string
`organization` | boolean
`awsAccessKey` | string
`awsSecretAccessKey` | string
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { DockerRegistry } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "name": null,
  "username": null,
  "password": null,
  "url": null,
  "accessToken": null,
  "instanceUrl": null,
  "organization": null,
  "awsAccessKey": null,
  "awsSecretAccessKey": null,
  "metadata": null,
} satisfies DockerRegistry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DockerRegistry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


