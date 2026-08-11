# NodesApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLocations**](NodesApi.md#getlocations) | **GET** /v1/nodes/locations | Show a unique listing of locations based on active and ready worker nodes |
| [**requestLocation**](NodesApi.md#requestlocation) | **POST** /v1/nodes/locations/request | Submit a new location request |



## getLocations

> GetLocations200Response getLocations(perPage, page)

Show a unique listing of locations based on active and ready worker nodes

### Example

```ts
import {
  Configuration,
  NodesApi,
} from '';
import type { GetLocationsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodesApi();

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
| **200** | Paginated set of &#x60;LocationIndex&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestLocation

> requestLocation(occupiedLocationRequest)

Submit a new location request

### Example

```ts
import {
  Configuration,
  NodesApi,
} from '';
import type { RequestLocationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new NodesApi();

  const body = {
    // OccupiedLocationRequest
    occupiedLocationRequest: ...,
  } satisfies RequestLocationRequest;

  try {
    const data = await api.requestLocation(body);
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
| **occupiedLocationRequest** | [OccupiedLocationRequest](OccupiedLocationRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** |  |  -  |
| **422** | Validation error |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |
| **429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

