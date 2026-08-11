# DockerRegistryApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDockerRegistry**](DockerRegistryApi.md#createdockerregistry) | **POST** /v1/docker-registries | Create a new docker registry |
| [**deleteDockerRegistry**](DockerRegistryApi.md#deletedockerregistry) | **DELETE** /v1/docker-registries/{dockerRegistry} | Delete a specific docker registry |
| [**getDockerRegistries**](DockerRegistryApi.md#getdockerregistries) | **GET** /v1/docker-registries | Show all docker registries |
| [**getDockerRegistryById**](DockerRegistryApi.md#getdockerregistrybyid) | **GET** /v1/docker-registries/{dockerRegistry} | Display a specific docker registry |
| [**getTaggedImages**](DockerRegistryApi.md#gettaggedimages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images | List all available tagged images |
| [**refreshTaggedImages**](DockerRegistryApi.md#refreshtaggedimages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images/refresh | Refresh the cache for all available tagged images |
| [**updateDockerRegistry**](DockerRegistryApi.md#updatedockerregistryoperation) | **PUT** /v1/docker-registries/{dockerRegistry} | Update a specific docker registry |



## createDockerRegistry

> DockerRegistry createDockerRegistry(storeDockerRegistryRequest)

Create a new docker registry

### Example

```ts
import {
  Configuration,
  DockerRegistryApi,
} from '';
import type { CreateDockerRegistryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerRegistryApi();

  const body = {
    // StoreDockerRegistryRequest
    storeDockerRegistryRequest: ...,
  } satisfies CreateDockerRegistryRequest;

  try {
    const data = await api.createDockerRegistry(body);
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
| **storeDockerRegistryRequest** | [StoreDockerRegistryRequest](StoreDockerRegistryRequest.md) |  | |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDockerRegistry

> deleteDockerRegistry(dockerRegistry)

Delete a specific docker registry

### Example

```ts
import {
  Configuration,
  DockerRegistryApi,
} from '';
import type { DeleteDockerRegistryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerRegistryApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies DeleteDockerRegistryRequest;

  try {
    const data = await api.deleteDockerRegistry(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDockerRegistries

> GetDockerRegistries200Response getDockerRegistries(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization)

Show all docker registries

### Example

```ts
import {
  Configuration,
  DockerRegistryApi,
} from '';
import type { GetDockerRegistriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerRegistryApi();

  const body = {
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<string> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
    sort: ...,
    // number | Filter by id. (optional)
    filterId: 56,
    // string | Filter by type. (optional)
    filterType: filterType_example,
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterNamePartial: filterNamePartial_example,
    // string | Filter by url. (optional)
    filterUrl: filterUrl_example,
    // string | Filter by organization. (optional)
    filterOrganization: filterOrganization_example,
  } satisfies GetDockerRegistriesRequest;

  try {
    const data = await api.getDockerRegistries(body);
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
| **sort** | `Array<string>` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] |
| **filterId** | `number` | Filter by id. | [Optional] [Defaults to `undefined`] |
| **filterType** | `string` | Filter by type. | [Optional] [Defaults to `undefined`] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterUrl** | `string` | Filter by url. | [Optional] [Defaults to `undefined`] |
| **filterOrganization** | `string` | Filter by organization. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetDockerRegistries200Response**](GetDockerRegistries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;DockerRegistry&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDockerRegistryById

> DockerRegistry getDockerRegistryById(dockerRegistry)

Display a specific docker registry

### Example

```ts
import {
  Configuration,
  DockerRegistryApi,
} from '';
import type { GetDockerRegistryByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerRegistryApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies GetDockerRegistryByIdRequest;

  try {
    const data = await api.getDockerRegistryById(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTaggedImages

> GetTaggedImages200Response getTaggedImages(dockerRegistry)

List all available tagged images

### Example

```ts
import {
  Configuration,
  DockerRegistryApi,
} from '';
import type { GetTaggedImagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerRegistryApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies GetTaggedImagesRequest;

  try {
    const data = await api.getTaggedImages(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

[**GetTaggedImages200Response**](GetTaggedImages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshTaggedImages

> GetTaggedImages200Response refreshTaggedImages(dockerRegistry)

Refresh the cache for all available tagged images

### Example

```ts
import {
  Configuration,
  DockerRegistryApi,
} from '';
import type { RefreshTaggedImagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerRegistryApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies RefreshTaggedImagesRequest;

  try {
    const data = await api.refreshTaggedImages(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

[**GetTaggedImages200Response**](GetTaggedImages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDockerRegistry

> DockerRegistry updateDockerRegistry(dockerRegistry, updateDockerRegistryRequest)

Update a specific docker registry

### Example

```ts
import {
  Configuration,
  DockerRegistryApi,
} from '';
import type { UpdateDockerRegistryOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerRegistryApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
    // UpdateDockerRegistryRequest
    updateDockerRegistryRequest: ...,
  } satisfies UpdateDockerRegistryOperationRequest;

  try {
    const data = await api.updateDockerRegistry(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |
| **updateDockerRegistryRequest** | [UpdateDockerRegistryRequest](UpdateDockerRegistryRequest.md) |  | |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

