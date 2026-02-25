# DockerNodeApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLocations**](DockerNodeApi.md#getlocations) | **GET** /v1/nodes/locations | Show a unique listing of locations based on active and ready worker nodes |



## getLocations

> GetLocations200Response getLocations(perPage, page)

Show a unique listing of locations based on active and ready worker nodes

### Example

```ts
import {
  Configuration,
  DockerNodeApi,
} from '';
import type { GetLocationsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerNodeApi();

  const body = {
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
  } satisfies GetLocationsRequest;

  try {
    const data = await api.getLocations(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **perPage** | `number` | The number of items to be shown per page. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Specifies the page number to retrieve in the paginated results. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLocations200Response**](GetLocations200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;Location&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

