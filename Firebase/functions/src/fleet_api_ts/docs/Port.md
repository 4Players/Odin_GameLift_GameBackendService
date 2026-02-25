
# Port


## Properties

Name | Type
------------ | -------------
`name` | string
`protocol` | [Protocol](Protocol.md)
`targetPort` | number
`publishedPort` | number

## Example

```typescript
import type { Port } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "protocol": null,
  "targetPort": null,
  "publishedPort": null,
} satisfies Port

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Port
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


