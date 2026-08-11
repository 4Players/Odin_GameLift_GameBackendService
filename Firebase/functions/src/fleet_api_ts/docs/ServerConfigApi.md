# ServerConfigApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createServerConfig**](ServerConfigApi.md#createserverconfig) | **POST** /v1/apps/{app}/configs | Create a new server config |
| [**deleteServerConfig**](ServerConfigApi.md#deleteserverconfig) | **DELETE** /v1/server-configs/{serverConfig} | Delete a specific server config |
| [**deleteUnusedServerConfigs**](ServerConfigApi.md#deleteunusedserverconfigs) | **DELETE** /v1/apps/{app}/configs/unused | Delete all unused server configs |
| [**getServerConfigById**](ServerConfigApi.md#getserverconfigbyid) | **GET** /v1/server-configs/{serverConfig} | Show a specific server config |
| [**getServerConfigs**](ServerConfigApi.md#getserverconfigs) | **GET** /v1/apps/{app}/configs | Show all server configs |
| [**serverConfigsMetadataDeleteAll**](ServerConfigApi.md#serverconfigsmetadatadeleteall) | **DELETE** /v1/server-configs/{serverConfig}/metadata | Delete all metadata |
| [**serverConfigsMetadataDeleteKeys**](ServerConfigApi.md#serverconfigsmetadatadeletekeys) | **DELETE** /v1/server-configs/{serverConfig}/metadata/keys | Delete metadata keys |
| [**serverConfigsMetadataSet**](ServerConfigApi.md#serverconfigsmetadataset) | **PUT** /v1/server-configs/{serverConfig}/metadata | Set metadata |
| [**serverConfigsMetadataUpdate**](ServerConfigApi.md#serverconfigsmetadataupdate) | **PATCH** /v1/server-configs/{serverConfig}/metadata | Update metadata |
| [**startServersForServerConfig**](ServerConfigApi.md#startserversforserverconfig) | **POST** /v1/server-configs/{serverConfig}/services/start | Start all services related to a specific server config |
| [**stopServersForServerConfig**](ServerConfigApi.md#stopserversforserverconfig) | **POST** /v1/server-configs/{serverConfig}/services/stop | Stop all services related to a specific server config |
| [**updateServerConfig**](ServerConfigApi.md#updateserverconfigoperation) | **PUT** /v1/server-configs/{serverConfig} | Update a server config |



## createServerConfig

> ServerConfig createServerConfig(app, storeServerConfigRequest)

Create a new server config

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { CreateServerConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The app ID
    app: 56,
    // StoreServerConfigRequest
    storeServerConfigRequest: ...,
  } satisfies CreateServerConfigRequest;

  try {
    const data = await api.createServerConfig(body);
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
| **storeServerConfigRequest** | [StoreServerConfigRequest](StoreServerConfigRequest.md) |  | |

### Return type

[**ServerConfig**](ServerConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteServerConfig

> deleteServerConfig(serverConfig)

Delete a specific server config

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { DeleteServerConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
  } satisfies DeleteServerConfigRequest;

  try {
    const data = await api.deleteServerConfig(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |

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


## deleteUnusedServerConfigs

> deleteUnusedServerConfigs(app)

Delete all unused server configs

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { DeleteUnusedServerConfigsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The app ID
    app: 56,
  } satisfies DeleteUnusedServerConfigsRequest;

  try {
    const data = await api.deleteUnusedServerConfigs(body);
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


## getServerConfigById

> GetServerConfigById200Response getServerConfigById(serverConfig)

Show a specific server config

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { GetServerConfigByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
  } satisfies GetServerConfigByIdRequest;

  try {
    const data = await api.getServerConfigById(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |

### Return type

[**GetServerConfigById200Response**](GetServerConfigById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServerConfigs

> GetServerConfigs200Response getServerConfigs(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterDnsServiceEnabled, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, filterMetadata)

Show all server configs

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { GetServerConfigsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<'-id' | 'id' | '-binaryId' | 'binaryId' | '-name' | 'name' | '-command' | 'command' | '-args' | 'args' | '-notes' | 'notes' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-maintenance' | 'maintenance' | '-dnsServiceEnabled' | 'dnsServiceEnabled' | '-resourcePackageSlug' | 'resourcePackageSlug' | '-inUse' | 'inUse' | 'binaryId' | '-binaryId' | 'binaryName' | '-binaryName' | 'binaryVersion' | '-binaryVersion' | 'binaryType' | '-binaryType' | 'binaryOs' | '-binaryOs'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
    sort: ...,
    // number | Filter by id. (optional)
    filterId: 56,
    // number | Filter by binary id. (optional)
    filterBinaryId: 56,
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterNamePartial: filterNamePartial_example,
    // string | Filter by command. (optional)
    filterCommand: filterCommand_example,
    // string | Filter by arguments. (optional)
    filterArgs: filterArgs_example,
    // string | Filter by notes. (optional)
    filterNotes: filterNotes_example,
    // string | Filter by status. (optional)
    filterStatus: filterStatus_example,
    // boolean | Filter by maintenance status. (optional)
    filterMaintenance: true,
    // boolean | Filter by service-level DNS flag. (optional)
    filterDnsServiceEnabled: true,
    // string | Filter by resource package slug. (optional)
    filterResourcePackageSlug: filterResourcePackageSlug_example,
    // boolean | Filter by in use flag. (optional)
    filterInUse: true,
    // string | Filter by binary name. (optional)
    filterBinaryName: filterBinaryName_example,
    // string | Filter by binary version. (optional)
    filterBinaryVersion: filterBinaryVersion_example,
    // string | Filter by binary type. (optional)
    filterBinaryType: filterBinaryType_example,
    // string | Filter by binary operating system. (optional)
    filterBinaryOs: filterBinaryOs_example,
    // string | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
    filterMetadata: filterMetadata_example,
  } satisfies GetServerConfigsRequest;

  try {
    const data = await api.getServerConfigs(body);
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
| **sort** | `-id`, `id`, `-binaryId`, `binaryId`, `-name`, `name`, `-command`, `command`, `-args`, `args`, `-notes`, `notes`, `-status`, `status`, `-statusMessage`, `statusMessage`, `-maintenance`, `maintenance`, `-dnsServiceEnabled`, `dnsServiceEnabled`, `-resourcePackageSlug`, `resourcePackageSlug`, `-inUse`, `inUse`, `binaryId`, `-binaryId`, `binaryName`, `-binaryName`, `binaryVersion`, `-binaryVersion`, `binaryType`, `-binaryType`, `binaryOs`, `-binaryOs` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] [Enum: -id, id, -binaryId, binaryId, -name, name, -command, command, -args, args, -notes, notes, -status, status, -statusMessage, statusMessage, -maintenance, maintenance, -dnsServiceEnabled, dnsServiceEnabled, -resourcePackageSlug, resourcePackageSlug, -inUse, inUse, binaryId, -binaryId, binaryName, -binaryName, binaryVersion, -binaryVersion, binaryType, -binaryType, binaryOs, -binaryOs] |
| **filterId** | `number` | Filter by id. | [Optional] [Defaults to `undefined`] |
| **filterBinaryId** | `number` | Filter by binary id. | [Optional] [Defaults to `undefined`] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterCommand** | `string` | Filter by command. | [Optional] [Defaults to `undefined`] |
| **filterArgs** | `string` | Filter by arguments. | [Optional] [Defaults to `undefined`] |
| **filterNotes** | `string` | Filter by notes. | [Optional] [Defaults to `undefined`] |
| **filterStatus** | `string` | Filter by status. | [Optional] [Defaults to `undefined`] |
| **filterMaintenance** | `boolean` | Filter by maintenance status. | [Optional] [Defaults to `undefined`] |
| **filterDnsServiceEnabled** | `boolean` | Filter by service-level DNS flag. | [Optional] [Defaults to `undefined`] |
| **filterResourcePackageSlug** | `string` | Filter by resource package slug. | [Optional] [Defaults to `undefined`] |
| **filterInUse** | `boolean` | Filter by in use flag. | [Optional] [Defaults to `undefined`] |
| **filterBinaryName** | `string` | Filter by binary name. | [Optional] [Defaults to `undefined`] |
| **filterBinaryVersion** | `string` | Filter by binary version. | [Optional] [Defaults to `undefined`] |
| **filterBinaryType** | `string` | Filter by binary type. | [Optional] [Defaults to `undefined`] |
| **filterBinaryOs** | `string` | Filter by binary operating system. | [Optional] [Defaults to `undefined`] |
| **filterMetadata** | `string` | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetServerConfigs200Response**](GetServerConfigs200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## serverConfigsMetadataDeleteAll

> GetServerConfigById200Response serverConfigsMetadataDeleteAll(serverConfig)

Delete all metadata

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { ServerConfigsMetadataDeleteAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
  } satisfies ServerConfigsMetadataDeleteAllRequest;

  try {
    const data = await api.serverConfigsMetadataDeleteAll(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |

### Return type

[**GetServerConfigById200Response**](GetServerConfigById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## serverConfigsMetadataDeleteKeys

> GetServerConfigById200Response serverConfigsMetadataDeleteKeys(serverConfig, metadata)

Delete metadata keys

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { ServerConfigsMetadataDeleteKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
    // Array<string>
    metadata: ...,
  } satisfies ServerConfigsMetadataDeleteKeysRequest;

  try {
    const data = await api.serverConfigsMetadataDeleteKeys(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |
| **metadata** | `Array<string>` |  | |

### Return type

[**GetServerConfigById200Response**](GetServerConfigById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## serverConfigsMetadataSet

> GetServerConfigById200Response serverConfigsMetadataSet(serverConfig, setServerConfigMetadataRequest)

Set metadata

Replaces the entire metadata.

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { ServerConfigsMetadataSetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
    // SetServerConfigMetadataRequest (optional)
    setServerConfigMetadataRequest: ...,
  } satisfies ServerConfigsMetadataSetRequest;

  try {
    const data = await api.serverConfigsMetadataSet(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |
| **setServerConfigMetadataRequest** | [SetServerConfigMetadataRequest](SetServerConfigMetadataRequest.md) |  | [Optional] |

### Return type

[**GetServerConfigById200Response**](GetServerConfigById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## serverConfigsMetadataUpdate

> GetServerConfigById200Response serverConfigsMetadataUpdate(serverConfig, patchServerConfigMetadataRequest)

Update metadata

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { ServerConfigsMetadataUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
    // PatchServerConfigMetadataRequest (optional)
    patchServerConfigMetadataRequest: ...,
  } satisfies ServerConfigsMetadataUpdateRequest;

  try {
    const data = await api.serverConfigsMetadataUpdate(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |
| **patchServerConfigMetadataRequest** | [PatchServerConfigMetadataRequest](PatchServerConfigMetadataRequest.md) |  | [Optional] |

### Return type

[**GetServerConfigById200Response**](GetServerConfigById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startServersForServerConfig

> startServersForServerConfig(serverConfig)

Start all services related to a specific server config

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { StartServersForServerConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
  } satisfies StartServersForServerConfigRequest;

  try {
    const data = await api.startServersForServerConfig(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |

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


## stopServersForServerConfig

> stopServersForServerConfig(serverConfig)

Stop all services related to a specific server config

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { StopServersForServerConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
  } satisfies StopServersForServerConfigRequest;

  try {
    const data = await api.stopServersForServerConfig(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |

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


## updateServerConfig

> ServerConfig updateServerConfig(serverConfig, updateServerConfigRequest)

Update a server config

### Example

```ts
import {
  Configuration,
  ServerConfigApi,
} from '';
import type { UpdateServerConfigOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServerConfigApi();

  const body = {
    // number | The server config ID
    serverConfig: 56,
    // UpdateServerConfigRequest
    updateServerConfigRequest: ...,
  } satisfies UpdateServerConfigOperationRequest;

  try {
    const data = await api.updateServerConfig(body);
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
| **serverConfig** | `number` | The server config ID | [Defaults to `undefined`] |
| **updateServerConfigRequest** | [UpdateServerConfigRequest](UpdateServerConfigRequest.md) |  | |

### Return type

[**ServerConfig**](ServerConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServerConfig&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

