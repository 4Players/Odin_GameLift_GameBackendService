# AppLocationSettingsApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAppLocationSetting**](AppLocationSettingsApi.md#createapplocationsetting) | **POST** /v1/apps/{app}/location-settings | Create a new location setting |
| [**deleteAppLocationSetting**](AppLocationSettingsApi.md#deleteapplocationsetting) | **DELETE** /v1/app-location-settings/{appLocationSetting} | Delete a location setting |
| [**getAppLocationSettingById**](AppLocationSettingsApi.md#getapplocationsettingbyid) | **GET** /v1/app-location-settings/{appLocationSetting} | Show a specific app location setting |
| [**getAppLocationSettings**](AppLocationSettingsApi.md#getapplocationsettings) | **GET** /v1/apps/{app}/location-settings | Show all location settings |
| [**listServicesForAppLocationSetting**](AppLocationSettingsApi.md#listservicesforapplocationsetting) | **GET** /v1/apps/{app}/location-settings/{appLocationSetting}/services | Show all services for a specific app location setting within a given app |
| [**startServersForAppLocationSetting**](AppLocationSettingsApi.md#startserversforapplocationsetting) | **POST** /v1/app-location-settings/{appLocationSetting}/services/start | Start all services related to a specific app location setting |
| [**stopServersForAppLocationSetting**](AppLocationSettingsApi.md#stopserversforapplocationsetting) | **POST** /v1/app-location-settings/{appLocationSetting}/services/stop | Stop all services related to a specific app location setting |
| [**updateAppLocationSetting**](AppLocationSettingsApi.md#updateapplocationsettingoperation) | **PUT** /v1/app-location-settings/{appLocationSetting} | Update a location setting |



## createAppLocationSetting

> AppLocationSetting createAppLocationSetting(app, storeAppLocationSettingRequest)

Create a new location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { CreateAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

  const body = {
    // number | The app ID
    app: 56,
    // StoreAppLocationSettingRequest
    storeAppLocationSettingRequest: ...,
  } satisfies CreateAppLocationSettingRequest;

  try {
    const data = await api.createAppLocationSetting(body);
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
| **storeAppLocationSettingRequest** | [StoreAppLocationSettingRequest](StoreAppLocationSettingRequest.md) |  | |

### Return type

[**AppLocationSetting**](AppLocationSetting.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;AppLocationSetting&#x60; |  -  |
| **403** | Authorization error |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAppLocationSetting

> deleteAppLocationSetting(appLocationSetting)

Delete a location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { DeleteAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
  } satisfies DeleteAppLocationSettingRequest;

  try {
    const data = await api.deleteAppLocationSetting(body);
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
| **appLocationSetting** | `number` | The app location setting ID | [Defaults to `undefined`] |

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


## getAppLocationSettingById

> AppLocationSetting getAppLocationSettingById(appLocationSetting)

Show a specific app location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { GetAppLocationSettingByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
  } satisfies GetAppLocationSettingByIdRequest;

  try {
    const data = await api.getAppLocationSettingById(body);
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
| **appLocationSetting** | `number` | The app location setting ID | [Defaults to `undefined`] |

### Return type

[**AppLocationSetting**](AppLocationSetting.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;AppLocationSetting&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAppLocationSettings

> GetAppLocationSettings200Response getAppLocationSettings(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug)

Show all location settings

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { GetAppLocationSettingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

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
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterNamePartial: filterNamePartial_example,
    // number | Filter by ServerConfig ID. (optional)
    filterServerConfigId: 56,
    // number | Filter by number of instances. (optional)
    filterNumInstances: 56,
    // string | Filter by status. (optional)
    filterStatus: filterStatus_example,
    // boolean | Filter by maintenance. (optional)
    filterMaintenance: true,
    // string | Filter by location city. (optional)
    filterLocationCity: filterLocationCity_example,
    // string | Filter by location city display name. (optional)
    filterLocationCityDisplay: filterLocationCityDisplay_example,
    // string | Filter by location continent. (optional)
    filterLocationContinent: filterLocationContinent_example,
    // string | Filter by location country. (optional)
    filterLocationCountry: filterLocationCountry_example,
    // string | Filter by ServerConfig name. (optional)
    filterServerConfigName: filterServerConfigName_example,
    // string | Filter by ServerConfig command. (optional)
    filterServerConfigCommand: filterServerConfigCommand_example,
    // string | Filter by ServerConfig arguments. (optional)
    filterServerConfigArgs: filterServerConfigArgs_example,
    // string | Filter by ServerConfig notes. (optional)
    filterServerConfigNotes: filterServerConfigNotes_example,
    // string | Filter by ServerConfig status. (optional)
    filterServerConfigStatus: filterServerConfigStatus_example,
    // boolean | Filter by ServerConfig maintenance. (optional)
    filterServerConfigMaintenance: true,
    // string | Filter by ServerConfig resource package slug. (optional)
    filterServerConfigResourcePackageSlug: filterServerConfigResourcePackageSlug_example,
  } satisfies GetAppLocationSettingsRequest;

  try {
    const data = await api.getAppLocationSettings(body);
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
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigId** | `number` | Filter by ServerConfig ID. | [Optional] [Defaults to `undefined`] |
| **filterNumInstances** | `number` | Filter by number of instances. | [Optional] [Defaults to `undefined`] |
| **filterStatus** | `string` | Filter by status. | [Optional] [Defaults to `undefined`] |
| **filterMaintenance** | `boolean` | Filter by maintenance. | [Optional] [Defaults to `undefined`] |
| **filterLocationCity** | `string` | Filter by location city. | [Optional] [Defaults to `undefined`] |
| **filterLocationCityDisplay** | `string` | Filter by location city display name. | [Optional] [Defaults to `undefined`] |
| **filterLocationContinent** | `string` | Filter by location continent. | [Optional] [Defaults to `undefined`] |
| **filterLocationCountry** | `string` | Filter by location country. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigName** | `string` | Filter by ServerConfig name. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigCommand** | `string` | Filter by ServerConfig command. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigArgs** | `string` | Filter by ServerConfig arguments. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigNotes** | `string` | Filter by ServerConfig notes. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigStatus** | `string` | Filter by ServerConfig status. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigMaintenance** | `boolean` | Filter by ServerConfig maintenance. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigResourcePackageSlug** | `string` | Filter by ServerConfig resource package slug. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAppLocationSettings200Response**](GetAppLocationSettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;AppLocationSetting&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listServicesForAppLocationSetting

> Array&lt;Server&gt; listServicesForAppLocationSetting(app, appLocationSetting)

Show all services for a specific app location setting within a given app

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { ListServicesForAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The app location setting ID
    appLocationSetting: 56,
  } satisfies ListServicesForAppLocationSettingRequest;

  try {
    const data = await api.listServicesForAppLocationSetting(body);
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
| **appLocationSetting** | `number` | The app location setting ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;Server&gt;**](Server.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of &#x60;CustomDockerService&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startServersForAppLocationSetting

> startServersForAppLocationSetting(appLocationSetting)

Start all services related to a specific app location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { StartServersForAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
  } satisfies StartServersForAppLocationSettingRequest;

  try {
    const data = await api.startServersForAppLocationSetting(body);
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
| **appLocationSetting** | `number` | The app location setting ID | [Defaults to `undefined`] |

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


## stopServersForAppLocationSetting

> stopServersForAppLocationSetting(appLocationSetting)

Stop all services related to a specific app location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { StopServersForAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
  } satisfies StopServersForAppLocationSettingRequest;

  try {
    const data = await api.stopServersForAppLocationSetting(body);
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
| **appLocationSetting** | `number` | The app location setting ID | [Defaults to `undefined`] |

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


## updateAppLocationSetting

> AppLocationSetting updateAppLocationSetting(appLocationSetting, updateAppLocationSettingRequest)

Update a location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingsApi,
} from '';
import type { UpdateAppLocationSettingOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingsApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
    // UpdateAppLocationSettingRequest
    updateAppLocationSettingRequest: ...,
  } satisfies UpdateAppLocationSettingOperationRequest;

  try {
    const data = await api.updateAppLocationSetting(body);
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
| **appLocationSetting** | `number` | The app location setting ID | [Defaults to `undefined`] |
| **updateAppLocationSettingRequest** | [UpdateAppLocationSettingRequest](UpdateAppLocationSettingRequest.md) |  | |

### Return type

[**AppLocationSetting**](AppLocationSetting.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;AppLocationSetting&#x60; |  -  |
| **403** | Authorization error |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

