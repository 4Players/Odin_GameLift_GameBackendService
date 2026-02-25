
# Backup


## Properties

Name | Type
------------ | -------------
`name` | string
`archiveName` | string
`createdAt` | Date
`restoredAt` | Date

## Example

```typescript
import type { Backup } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "archiveName": null,
  "createdAt": null,
  "restoredAt": null,
} satisfies Backup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Backup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


