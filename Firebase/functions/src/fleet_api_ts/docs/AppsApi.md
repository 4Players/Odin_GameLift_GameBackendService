# AppsApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApp**](AppsApi.md#createapp) | **POST** /v1/apps | Create an app |
| [**deleteApp**](AppsApi.md#deleteapp) | **DELETE** /v1/apps/{app} | Delete a specific app |
| [**deleteUnusedApps**](AppsApi.md#deleteunusedapps) | **DELETE** /v1/apps/unused | Delete all unused apps |
| [**getAppById**](AppsApi.md#getappbyid) | **GET** /v1/apps/{app} | Show a specific app |
| [**getAppWallets**](AppsApi.md#getappwallets) | **GET** /v1/apps/{app}/wallets | Show all wallets for a specific app |
| [**getApps**](AppsApi.md#getapps) | **GET** /v1/apps | Show all apps |
| [**startServersForApp**](AppsApi.md#startserversforapp) | **POST** /v1/apps/{app}/services/start | Start all services related to a specific app |
| [**stopServersForApp**](AppsApi.md#stopserversforapp) | **POST** /v1/apps/{app}/services/stop | Stop all services related to a specific app |
| [**updateAppById**](AppsApi.md#updateappbyid) | **PUT** /v1/apps/{app} | Update a specific app |



## createApp

> App createApp(storeAppRequest)

Create an app

### Example

```ts
import {
  Configuration,
  AppsApi,
} from '';
import type { CreateAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

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
  AppsApi,
} from '';
import type { DeleteAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

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
  AppsApi,
} from '';
import type { DeleteUnusedAppsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

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
  AppsApi,
} from '';
import type { GetAppByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

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
  AppsApi,
} from '';
import type { GetAppWalletsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<string> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
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
| **sort** | `Array<string>` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] |
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

> GetApps200Response getApps(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse)

Show all apps

### Example

```ts
import {
  Configuration,
  AppsApi,
} from '';
import type { GetAppsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

  const body = {
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<string> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
    sort: ...,
    // number | Filter by id. (optional)
    filterId: 56,
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterNamePartial: filterNamePartial_example,
    // boolean | Filter by in use flag. (optional)
    filterInUse: true,
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
| **sort** | `Array<string>` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] |
| **filterId** | `number` | Filter by id. | [Optional] [Defaults to `undefined`] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterInUse** | `boolean` | Filter by in use flag. | [Optional] [Defaults to `undefined`] |

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
  AppsApi,
} from '';
import type { StartServersForAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

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
  AppsApi,
} from '';
import type { StopServersForAppRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

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
  AppsApi,
} from '';
import type { UpdateAppByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppsApi();

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

