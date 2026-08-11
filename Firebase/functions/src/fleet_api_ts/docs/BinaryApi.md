# BinaryApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**binariesMetadataDeleteAll**](BinaryApi.md#binariesmetadatadeleteall) | **DELETE** /v1/binaries/{binary}/metadata | Delete all metadata |
| [**binariesMetadataDeleteKeys**](BinaryApi.md#binariesmetadatadeletekeys) | **DELETE** /v1/binaries/{binary}/metadata/keys | Delete metadata keys |
| [**binariesMetadataSet**](BinaryApi.md#binariesmetadataset) | **PUT** /v1/binaries/{binary}/metadata | Set metadata |
| [**binariesMetadataUpdate**](BinaryApi.md#binariesmetadataupdate) | **PATCH** /v1/binaries/{binary}/metadata | Update metadata |
| [**createBinary**](BinaryApi.md#createbinary) | **POST** /v1/apps/{app}/binaries | Create a binary and the related entity |
| [**deleteBinary**](BinaryApi.md#deletebinary) | **DELETE** /v1/binaries/{binary} | Delete a specified binary |
| [**deleteUnusedBinaries**](BinaryApi.md#deleteunusedbinaries) | **DELETE** /v1/apps/{app}/binaries/unused | Delete all unused binaries |
| [**getBinaries**](BinaryApi.md#getbinaries) | **GET** /v1/apps/{app}/binaries | Show all binaries |
| [**getBinaryById**](BinaryApi.md#getbinarybyid) | **GET** /v1/binaries/{binary} | Show a specific binary |
| [**refreshBinary**](BinaryApi.md#refreshbinary) | **PUT** /v1/binaries/{binary}/refresh | Refresh a binary and the related entity |
| [**startServersForBinary**](BinaryApi.md#startserversforbinary) | **POST** /v1/binaries/{binary}/services/start | Start all services related to a specific binary |
| [**stopServersForBinary**](BinaryApi.md#stopserversforbinary) | **POST** /v1/binaries/{binary}/services/stop | Stop all services related to a specific binary |
| [**updateBinary**](BinaryApi.md#updatebinaryoperation) | **PUT** /v1/binaries/{binary} | Update a binary and the related entity |



## binariesMetadataDeleteAll

> BinariesMetadataSet200Response binariesMetadataDeleteAll(binary)

Delete all metadata

### Example

```ts
import {
  Configuration,
  BinaryApi,
} from '';
import type { BinariesMetadataDeleteAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

  const body = {
    // number | The binary ID
    binary: 56,
  } satisfies BinariesMetadataDeleteAllRequest;

  try {
    const data = await api.binariesMetadataDeleteAll(body);
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

[**BinariesMetadataSet200Response**](BinariesMetadataSet200Response.md)

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


## binariesMetadataDeleteKeys

> BinariesMetadataSet200Response binariesMetadataDeleteKeys(binary, metadata)

Delete metadata keys

### Example

```ts
import {
  Configuration,
  BinaryApi,
} from '';
import type { BinariesMetadataDeleteKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

  const body = {
    // number | The binary ID
    binary: 56,
    // Array<string>
    metadata: ...,
  } satisfies BinariesMetadataDeleteKeysRequest;

  try {
    const data = await api.binariesMetadataDeleteKeys(body);
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
| **metadata** | `Array<string>` |  | |

### Return type

[**BinariesMetadataSet200Response**](BinariesMetadataSet200Response.md)

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
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## binariesMetadataSet

> BinariesMetadataSet200Response binariesMetadataSet(binary, setBinaryMetadataRequest)

Set metadata

Replaces the entire metadata.

### Example

```ts
import {
  Configuration,
  BinaryApi,
} from '';
import type { BinariesMetadataSetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

  const body = {
    // number | The binary ID
    binary: 56,
    // SetBinaryMetadataRequest (optional)
    setBinaryMetadataRequest: ...,
  } satisfies BinariesMetadataSetRequest;

  try {
    const data = await api.binariesMetadataSet(body);
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
| **setBinaryMetadataRequest** | [SetBinaryMetadataRequest](SetBinaryMetadataRequest.md) |  | [Optional] |

### Return type

[**BinariesMetadataSet200Response**](BinariesMetadataSet200Response.md)

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


## binariesMetadataUpdate

> BinariesMetadataSet200Response binariesMetadataUpdate(binary, patchBinaryMetadataRequest)

Update metadata

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example

```ts
import {
  Configuration,
  BinaryApi,
} from '';
import type { BinariesMetadataUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

  const body = {
    // number | The binary ID
    binary: 56,
    // PatchBinaryMetadataRequest (optional)
    patchBinaryMetadataRequest: ...,
  } satisfies BinariesMetadataUpdateRequest;

  try {
    const data = await api.binariesMetadataUpdate(body);
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
| **patchBinaryMetadataRequest** | [PatchBinaryMetadataRequest](PatchBinaryMetadataRequest.md) |  | [Optional] |

### Return type

[**BinariesMetadataSet200Response**](BinariesMetadataSet200Response.md)

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


## createBinary

> Binary createBinary(app, storeBinaryRequest)

Create a binary and the related entity

### Example

```ts
import {
  Configuration,
  BinaryApi,
} from '';
import type { CreateBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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
  BinaryApi,
} from '';
import type { DeleteBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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
  BinaryApi,
} from '';
import type { DeleteUnusedBinariesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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

> GetBinaries200Response getBinaries(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, filterMetadata)

Show all binaries

### Example

```ts
import {
  Configuration,
  BinaryApi,
} from '';
import type { GetBinariesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<'-id' | 'id' | '-name' | 'name' | '-version' | 'version' | '-type' | 'type' | '-os' | 'os' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-progress' | 'progress' | '-progressMessage' | 'progressMessage' | '-inUse' | 'inUse'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
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
    // string | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
    filterMetadata: filterMetadata_example,
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
| **sort** | `-id`, `id`, `-name`, `name`, `-version`, `version`, `-type`, `type`, `-os`, `os`, `-status`, `status`, `-statusMessage`, `statusMessage`, `-progress`, `progress`, `-progressMessage`, `progressMessage`, `-inUse`, `inUse` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] [Enum: -id, id, -name, name, -version, version, -type, type, -os, os, -status, status, -statusMessage, statusMessage, -progress, progress, -progressMessage, progressMessage, -inUse, inUse] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterVersion** | `string` | Filter by version. | [Optional] [Defaults to `undefined`] |
| **filterType** | `string` | Filter by type. | [Optional] [Defaults to `undefined`] |
| **filterOs** | `string` | Filter by operating system. | [Optional] [Defaults to `undefined`] |
| **filterMaintenance** | `boolean` | Filter by maintenance status. | [Optional] [Defaults to `undefined`] |
| **filterStatus** | `string` | Filter by status. | [Optional] [Defaults to `undefined`] |
| **filterInUse** | `boolean` | Filter by in use flag. | [Optional] [Defaults to `undefined`] |
| **filterMetadata** | `string` | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | [Optional] [Defaults to `undefined`] |

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
  BinaryApi,
} from '';
import type { GetBinaryByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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
  BinaryApi,
} from '';
import type { RefreshBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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
  BinaryApi,
} from '';
import type { StartServersForBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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
  BinaryApi,
} from '';
import type { StopServersForBinaryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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
  BinaryApi,
} from '';
import type { UpdateBinaryOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BinaryApi();

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

