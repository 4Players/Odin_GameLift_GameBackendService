# BinariesApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBinary**](BinariesApi.md#createbinary) | **POST** /v1/apps/{app}/binaries | Create a binary and the related entity |
| [**deleteBinary**](BinariesApi.md#deletebinary) | **DELETE** /v1/binaries/{binary} | Delete a specified binary |
| [**deleteUnusedBinaries**](BinariesApi.md#deleteunusedbinaries) | **DELETE** /v1/apps/{app}/binaries/unused | Delete all unused binaries |
| [**getBinaries**](BinariesApi.md#getbinaries) | **GET** /v1/apps/{app}/binaries | Show all binaries |
| [**getBinaryById**](BinariesApi.md#getbinarybyid) | **GET** /v1/binaries/{binary} | Show a specific binary |
| [**refreshBinary**](BinariesApi.md#refreshbinary) | **PUT** /v1/binaries/{binary}/refresh | Refresh a binary and the related entity |
| [**startServersForBinary**](BinariesApi.md#startserversforbinary) | **POST** /v1/binaries/{binary}/services/start | Start all services related to a specific binary |
| [**stopServersForBinary**](BinariesApi.md#stopserversforbinary) | **POST** /v1/binaries/{binary}/services/stop | Stop all services related to a specific binary |
| [**updateBinary**](BinariesApi.md#updatebinaryoperation) | **PUT** /v1/binaries/{binary} | Update a binary and the related entity |



## createBinary

> Binary createBinary(app, storeBinaryRequest)

Create a binary and the related entity

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { CreateBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The app ID
    app: 56,
    // StoreBinaryRequest
    storeBinaryRequest: ...,
  } satisfies CreateBinaryRequest;

  try {
    const data = await api.createBinary(body);
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
| **app** | `number` | The app ID | [Defaults to `undefined`] |
| **storeBinaryRequest** | [StoreBinaryRequest](StoreBinaryRequest.md) |  | |

### Return type

[**Binary**](Binary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Binary&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBinary

> deleteBinary(binary)

Delete a specified binary

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { DeleteBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The binary ID
    binary: 56,
  } satisfies DeleteBinaryRequest;

  try {
    const data = await api.deleteBinary(body);
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
| **binary** | `number` | The binary ID | [Defaults to `undefined`] |

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


## deleteUnusedBinaries

> deleteUnusedBinaries(app)

Delete all unused binaries

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { DeleteUnusedBinariesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The app ID
    app: 56,
  } satisfies DeleteUnusedBinariesRequest;

  try {
    const data = await api.deleteUnusedBinaries(body);
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
| **app** | `number` | The app ID | [Defaults to `undefined`] |

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
| **202** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBinaries

> GetBinaries200Response getBinaries(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse)

Show all binaries

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { GetBinariesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<string> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
    sort: ...,
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterNamePartial: filterNamePartial_example,
    // string | Filter by version. (optional)
    filterVersion: filterVersion_example,
    // string | Filter by type. (optional)
    filterType: filterType_example,
    // string | Filter by operating system. (optional)
    filterOs: filterOs_example,
    // boolean | Filter by maintenance status. (optional)
    filterMaintenance: true,
    // string | Filter by status. (optional)
    filterStatus: filterStatus_example,
    // boolean | Filter by in use flag. (optional)
    filterInUse: true,
  } satisfies GetBinariesRequest;

  try {
    const data = await api.getBinaries(body);
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
| **app** | `number` | The app ID | [Defaults to `undefined`] |
| **perPage** | `number` | The number of items to be shown per page. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Specifies the page number to retrieve in the paginated results. | [Optional] [Defaults to `undefined`] |
| **sort** | `Array<string>` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterVersion** | `string` | Filter by version. | [Optional] [Defaults to `undefined`] |
| **filterType** | `string` | Filter by type. | [Optional] [Defaults to `undefined`] |
| **filterOs** | `string` | Filter by operating system. | [Optional] [Defaults to `undefined`] |
| **filterMaintenance** | `boolean` | Filter by maintenance status. | [Optional] [Defaults to `undefined`] |
| **filterStatus** | `string` | Filter by status. | [Optional] [Defaults to `undefined`] |
| **filterInUse** | `boolean` | Filter by in use flag. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBinaries200Response**](GetBinaries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;Binary&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBinaryById

> Binary getBinaryById(binary)

Show a specific binary

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { GetBinaryByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The binary ID
    binary: 56,
  } satisfies GetBinaryByIdRequest;

  try {
    const data = await api.getBinaryById(body);
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
| **binary** | `number` | The binary ID | [Defaults to `undefined`] |

### Return type

[**Binary**](Binary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Binary&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshBinary

> Binary refreshBinary(binary)

Refresh a binary and the related entity

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { RefreshBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The binary ID
    binary: 56,
  } satisfies RefreshBinaryRequest;

  try {
    const data = await api.refreshBinary(body);
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
| **binary** | `number` | The binary ID | [Defaults to `undefined`] |

### Return type

[**Binary**](Binary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | &#x60;Binary&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startServersForBinary

> startServersForBinary(binary)

Start all services related to a specific binary

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { StartServersForBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The binary ID
    binary: 56,
  } satisfies StartServersForBinaryRequest;

  try {
    const data = await api.startServersForBinary(body);
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
| **binary** | `number` | The binary ID | [Defaults to `undefined`] |

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
| **202** |  |  -  |
| **404** | Not found |  -  |
| **403** | Authorization error |  -  |
| **401** | Unauthenticated |  -  |
| **402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stopServersForBinary

> stopServersForBinary(binary)

Stop all services related to a specific binary

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { StopServersForBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The binary ID
    binary: 56,
  } satisfies StopServersForBinaryRequest;

  try {
    const data = await api.stopServersForBinary(body);
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
| **binary** | `number` | The binary ID | [Defaults to `undefined`] |

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
| **202** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateBinary

> Binary updateBinary(binary, updateBinaryRequest)

Update a binary and the related entity

### Example

```ts
import {
  Configuration,
  BinariesApi,
} from '';
import type { UpdateBinaryOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinariesApi();

  const body = {
    // number | The binary ID
    binary: 56,
    // UpdateBinaryRequest
    updateBinaryRequest: ...,
  } satisfies UpdateBinaryOperationRequest;

  try {
    const data = await api.updateBinary(body);
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
| **binary** | `number` | The binary ID | [Defaults to `undefined`] |
| **updateBinaryRequest** | [UpdateBinaryRequest](UpdateBinaryRequest.md) |  | |

### Return type

[**Binary**](Binary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Binary&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

