# AppApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appsMetadataDeleteAll**](AppApi.md#appsmetadatadeleteall) | **DELETE** /v1/apps/{app}/metadata | Delete all metadata |
| [**appsMetadataDeleteKeys**](AppApi.md#appsmetadatadeletekeys) | **DELETE** /v1/apps/{app}/metadata/keys | Delete metadata keys |
| [**appsMetadataSet**](AppApi.md#appsmetadataset) | **PUT** /v1/apps/{app}/metadata | Set metadata |
| [**appsMetadataUpdate**](AppApi.md#appsmetadataupdate) | **PATCH** /v1/apps/{app}/metadata | Update metadata |
| [**createApp**](AppApi.md#createapp) | **POST** /v1/apps | Create an app |
| [**deleteApp**](AppApi.md#deleteapp) | **DELETE** /v1/apps/{app} | Delete a specific app |
| [**deleteUnusedApps**](AppApi.md#deleteunusedapps) | **DELETE** /v1/apps/unused | Delete all unused apps |
| [**getAppById**](AppApi.md#getappbyid) | **GET** /v1/apps/{app} | Show a specific app |
| [**getAppWallets**](AppApi.md#getappwallets) | **GET** /v1/apps/{app}/wallets | Show all wallets for a specific app |
| [**getApps**](AppApi.md#getapps) | **GET** /v1/apps | Show all apps |
| [**startServersForApp**](AppApi.md#startserversforapp) | **POST** /v1/apps/{app}/services/start | Start all services related to a specific app |
| [**stopServersForApp**](AppApi.md#stopserversforapp) | **POST** /v1/apps/{app}/services/stop | Stop all services related to a specific app |
| [**updateAppById**](AppApi.md#updateappbyid) | **PUT** /v1/apps/{app} | Update a specific app |



## appsMetadataDeleteAll

> App appsMetadataDeleteAll(app)

Delete all metadata

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { AppsMetadataDeleteAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
  } satisfies AppsMetadataDeleteAllRequest;

  try {
    const data = await api.appsMetadataDeleteAll(body);
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

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;App&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appsMetadataDeleteKeys

> App appsMetadataDeleteKeys(app, metadata)

Delete metadata keys

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { AppsMetadataDeleteKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
    // Array<string>
    metadata: ...,
  } satisfies AppsMetadataDeleteKeysRequest;

  try {
    const data = await api.appsMetadataDeleteKeys(body);
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
| **metadata** | `Array<string>` |  | |

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;App&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appsMetadataSet

> App appsMetadataSet(app, setAppMetadataRequest)

Set metadata

Replaces the entire metadata.

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { AppsMetadataSetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
    // SetAppMetadataRequest (optional)
    setAppMetadataRequest: ...,
  } satisfies AppsMetadataSetRequest;

  try {
    const data = await api.appsMetadataSet(body);
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
| **setAppMetadataRequest** | [SetAppMetadataRequest](SetAppMetadataRequest.md) |  | [Optional] |

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;App&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appsMetadataUpdate

> App appsMetadataUpdate(app, patchAppMetadataRequest)

Update metadata

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { AppsMetadataUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
    // PatchAppMetadataRequest (optional)
    patchAppMetadataRequest: ...,
  } satisfies AppsMetadataUpdateRequest;

  try {
    const data = await api.appsMetadataUpdate(body);
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
| **patchAppMetadataRequest** | [PatchAppMetadataRequest](PatchAppMetadataRequest.md) |  | [Optional] |

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;App&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createApp

> App createApp(storeAppRequest)

Create an app

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { CreateAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // StoreAppRequest
    storeAppRequest: ...,
  } satisfies CreateAppRequest;

  try {
    const data = await api.createApp(body);
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
| **storeAppRequest** | [StoreAppRequest](StoreAppRequest.md) |  | |

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;App&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteApp

> deleteApp(app)

Delete a specific app

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { DeleteAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
  } satisfies DeleteAppRequest;

  try {
    const data = await api.deleteApp(body);
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


## deleteUnusedApps

> deleteUnusedApps()

Delete all unused apps

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { DeleteUnusedAppsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  try {
    const data = await api.deleteUnusedApps();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAppById

> App getAppById(app)

Show a specific app

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { GetAppByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
  } satisfies GetAppByIdRequest;

  try {
    const data = await api.getAppById(body);
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

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;App&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAppWallets

> GetAppWallets200Response getAppWallets(app, perPage, page, sort, filterId, filterBalance)

Show all wallets for a specific app

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { GetAppWalletsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<'-id' | 'id' | '-balance' | 'balance'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
    sort: ...,
    // number | Filter by id. (optional)
    filterId: 56,
    // number | Filter by balance. (optional)
    filterBalance: 8.14,
  } satisfies GetAppWalletsRequest;

  try {
    const data = await api.getAppWallets(body);
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
| **sort** | `-id`, `id`, `-balance`, `balance` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] [Enum: -id, id, -balance, balance] |
| **filterId** | `number` | Filter by id. | [Optional] [Defaults to `undefined`] |
| **filterBalance** | `number` | Filter by balance. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAppWallets200Response**](GetAppWallets200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;Wallet&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApps

> GetApps200Response getApps(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, filterMetadata)

Show all apps

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { GetAppsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<'-id' | 'id' | '-name' | 'name' | '-inUse' | 'inUse'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
    sort: ...,
    // number | Filter by id. (optional)
    filterId: 56,
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterNamePartial: filterNamePartial_example,
    // boolean | Filter by in use flag. (optional)
    filterInUse: true,
    // string | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
    filterMetadata: filterMetadata_example,
  } satisfies GetAppsRequest;

  try {
    const data = await api.getApps(body);
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
| **sort** | `-id`, `id`, `-name`, `name`, `-inUse`, `inUse` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] [Enum: -id, id, -name, name, -inUse, inUse] |
| **filterId** | `number` | Filter by id. | [Optional] [Defaults to `undefined`] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterInUse** | `boolean` | Filter by in use flag. | [Optional] [Defaults to `undefined`] |
| **filterMetadata** | `string` | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApps200Response**](GetApps200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;App&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startServersForApp

> startServersForApp(app)

Start all services related to a specific app

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { StartServersForAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
  } satisfies StartServersForAppRequest;

  try {
    const data = await api.startServersForApp(body);
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
| **403** | Authorization error |  -  |
| **401** | Unauthenticated |  -  |
| **402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stopServersForApp

> stopServersForApp(app)

Stop all services related to a specific app

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { StopServersForAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
  } satisfies StopServersForAppRequest;

  try {
    const data = await api.stopServersForApp(body);
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


## updateAppById

> App updateAppById(app, updateAppRequest)

Update a specific app

### Example

```ts
import {
  Configuration,
  AppApi,
} from '';
import type { UpdateAppByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppApi();

  const body = {
    // number | The app ID
    app: 56,
    // UpdateAppRequest
    updateAppRequest: ...,
  } satisfies UpdateAppByIdRequest;

  try {
    const data = await api.updateAppById(body);
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
| **updateAppRequest** | [UpdateAppRequest](UpdateAppRequest.md) |  | |

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;App&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

