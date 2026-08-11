
# EnvironmentVariableDefinition


## Properties

Name | Type
------------ | -------------
`type` | [EnvironmentVariableType](EnvironmentVariableType.md)
`key` | string
`value` | string
`variable` | string

## Example

```typescript
import type { EnvironmentVariableDefinition } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "key": null,
  "value": null,
  "variable": null,
} satisfies EnvironmentVariableDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnvironmentVariableDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


