
# App


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`inUse` | boolean
`billingState` | [AppBillingState](AppBillingState.md)
`maintenance` | boolean
`status` | [AppStatus](AppStatus.md)
`statusMessage` | string

## Example

```typescript
import type { App } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "inUse": null,
  "billingState": null,
  "maintenance": null,
  "status": null,
  "statusMessage": null,
} satisfies App

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as App
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


