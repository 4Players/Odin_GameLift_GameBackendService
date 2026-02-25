
# PortDefinition


## Properties

Name | Type
------------ | -------------
`name` | string
`protocols` | [Array&lt;Protocol&gt;](Protocol.md)
`targetPort` | number

## Example

```typescript
import type { PortDefinition } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "protocols": null,
  "targetPort": null,
} satisfies PortDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


