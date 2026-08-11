# AppLocationSettingApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appLocationSettingsMetadataDeleteAll**](AppLocationSettingApi.md#applocationsettingsmetadatadeleteall) | **DELETE** /v1/app-location-settings/{appLocationSetting}/metadata | Delete all metadata |
| [**appLocationSettingsMetadataDeleteKeys**](AppLocationSettingApi.md#applocationsettingsmetadatadeletekeys) | **DELETE** /v1/app-location-settings/{appLocationSetting}/metadata/keys | Delete metadata keys |
| [**appLocationSettingsMetadataSet**](AppLocationSettingApi.md#applocationsettingsmetadataset) | **PUT** /v1/app-location-settings/{appLocationSetting}/metadata | Set metadata |
| [**appLocationSettingsMetadataUpdate**](AppLocationSettingApi.md#applocationsettingsmetadataupdate) | **PATCH** /v1/app-location-settings/{appLocationSetting}/metadata | Update metadata |
| [**checkCapacity**](AppLocationSettingApi.md#checkcapacity) | **POST** /v1/apps/{app}/location-settings/capacity | Estimate the available capacity in a location based on a ServerConfig |
| [**createAppLocationSetting**](AppLocationSettingApi.md#createapplocationsetting) | **POST** /v1/apps/{app}/location-settings | Create a new location setting |
| [**deleteAppLocationSetting**](AppLocationSettingApi.md#deleteapplocationsetting) | **DELETE** /v1/app-location-settings/{appLocationSetting} | Delete a location setting |
| [**getAppLocationSettingById**](AppLocationSettingApi.md#getapplocationsettingbyid) | **GET** /v1/app-location-settings/{appLocationSetting} | Show a specific app location setting |
| [**getAppLocationSettings**](AppLocationSettingApi.md#getapplocationsettings) | **GET** /v1/apps/{app}/location-settings | Show all location settings |
| [**listServicesForAppLocationSetting**](AppLocationSettingApi.md#listservicesforapplocationsetting) | **GET** /v1/apps/{app}/location-settings/{appLocationSetting}/services | Show all services for a specific app location setting within a given app |
| [**startServersForAppLocationSetting**](AppLocationSettingApi.md#startserversforapplocationsetting) | **POST** /v1/app-location-settings/{appLocationSetting}/services/start | Start all services related to a specific app location setting |
| [**stopServersForAppLocationSetting**](AppLocationSettingApi.md#stopserversforapplocationsetting) | **POST** /v1/app-location-settings/{appLocationSetting}/services/stop | Stop all services related to a specific app location setting |
| [**updateAppLocationSetting**](AppLocationSettingApi.md#updateapplocationsettingoperation) | **PUT** /v1/app-location-settings/{appLocationSetting} | Update a location setting |



## appLocationSettingsMetadataDeleteAll

> GetAppLocationSettingById200Response appLocationSettingsMetadataDeleteAll(appLocationSetting)

Delete all metadata

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { AppLocationSettingsMetadataDeleteAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
  } satisfies AppLocationSettingsMetadataDeleteAllRequest;

  try {
    const data = await api.appLocationSettingsMetadataDeleteAll(body);
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

[**GetAppLocationSettingById200Response**](GetAppLocationSettingById200Response.md)

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


## appLocationSettingsMetadataDeleteKeys

> GetAppLocationSettingById200Response appLocationSettingsMetadataDeleteKeys(appLocationSetting, metadata)

Delete metadata keys

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { AppLocationSettingsMetadataDeleteKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
    // Array<string>
    metadata: ...,
  } satisfies AppLocationSettingsMetadataDeleteKeysRequest;

  try {
    const data = await api.appLocationSettingsMetadataDeleteKeys(body);
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
| **metadata** | `Array<string>` |  | |

### Return type

[**GetAppLocationSettingById200Response**](GetAppLocationSettingById200Response.md)

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
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appLocationSettingsMetadataSet

> GetAppLocationSettingById200Response appLocationSettingsMetadataSet(appLocationSetting, setAppLocationSettingMetadataRequest)

Set metadata

Replaces the entire metadata.

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { AppLocationSettingsMetadataSetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
    // SetAppLocationSettingMetadataRequest (optional)
    setAppLocationSettingMetadataRequest: ...,
  } satisfies AppLocationSettingsMetadataSetRequest;

  try {
    const data = await api.appLocationSettingsMetadataSet(body);
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
| **setAppLocationSettingMetadataRequest** | [SetAppLocationSettingMetadataRequest](SetAppLocationSettingMetadataRequest.md) |  | [Optional] |

### Return type

[**GetAppLocationSettingById200Response**](GetAppLocationSettingById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;AppLocationSetting&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appLocationSettingsMetadataUpdate

> GetAppLocationSettingById200Response appLocationSettingsMetadataUpdate(appLocationSetting, patchAppLocationSettingMetadataRequest)

Update metadata

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { AppLocationSettingsMetadataUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

  const body = {
    // number | The app location setting ID
    appLocationSetting: 56,
    // PatchAppLocationSettingMetadataRequest (optional)
    patchAppLocationSettingMetadataRequest: ...,
  } satisfies AppLocationSettingsMetadataUpdateRequest;

  try {
    const data = await api.appLocationSettingsMetadataUpdate(body);
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
| **patchAppLocationSettingMetadataRequest** | [PatchAppLocationSettingMetadataRequest](PatchAppLocationSettingMetadataRequest.md) |  | [Optional] |

### Return type

[**GetAppLocationSettingById200Response**](GetAppLocationSettingById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;AppLocationSetting&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## checkCapacity

> AppLocationSettingCapacity checkCapacity(app, checkCapacityAppLocationSettingRequest)

Estimate the available capacity in a location based on a ServerConfig

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { CheckCapacityRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

  const body = {
    // number | The app ID
    app: 56,
    // CheckCapacityAppLocationSettingRequest
    checkCapacityAppLocationSettingRequest: ...,
  } satisfies CheckCapacityRequest;

  try {
    const data = await api.checkCapacity(body);
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
| **checkCapacityAppLocationSettingRequest** | [CheckCapacityAppLocationSettingRequest](CheckCapacityAppLocationSettingRequest.md) |  | |

### Return type

[**AppLocationSettingCapacity**](AppLocationSettingCapacity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;AppLocationSettingCapacity&#x60; |  -  |
| **403** | Authorization error |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAppLocationSetting

> GetAppLocationSettingById200Response createAppLocationSetting(app, storeAppLocationSettingRequest)

Create a new location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { CreateAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

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

[**GetAppLocationSettingById200Response**](GetAppLocationSettingById200Response.md)

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
  AppLocationSettingApi,
} from '';
import type { DeleteAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

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

> GetAppLocationSettingById200Response getAppLocationSettingById(appLocationSetting)

Show a specific app location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { GetAppLocationSettingByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

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

[**GetAppLocationSettingById200Response**](GetAppLocationSettingById200Response.md)

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

> GetAppLocationSettings200Response getAppLocationSettings(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, filterMetadata)

Show all location settings

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { GetAppLocationSettingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<'-id' | 'id' | '-name' | 'name' | '-serverConfigId' | 'serverConfigId' | '-numInstances' | 'numInstances' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-maintenance' | 'maintenance' | '-locationCity' | 'locationCity' | '-locationCityDisplay' | 'locationCityDisplay' | '-locationContinent' | 'locationContinent' | '-locationCountry' | 'locationCountry' | '-serverConfigId' | 'serverConfigId' | '-serverConfigName' | 'serverConfigName' | '-serverConfigCommand' | 'serverConfigCommand' | '-serverConfigArgs' | 'serverConfigArgs' | '-serverConfigNotes' | 'serverConfigNotes' | '-serverConfigStatus' | 'serverConfigStatus' | '-serverConfigMaintenance' | 'serverConfigMaintenance' | '-serverConfigResourcePackageSlug' | 'serverConfigResourcePackageSlug'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
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
    // string | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
    filterMetadata: filterMetadata_example,
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
| **sort** | `-id`, `id`, `-name`, `name`, `-serverConfigId`, `serverConfigId`, `-numInstances`, `numInstances`, `-status`, `status`, `-statusMessage`, `statusMessage`, `-maintenance`, `maintenance`, `-locationCity`, `locationCity`, `-locationCityDisplay`, `locationCityDisplay`, `-locationContinent`, `locationContinent`, `-locationCountry`, `locationCountry`, `-serverConfigId`, `serverConfigId`, `-serverConfigName`, `serverConfigName`, `-serverConfigCommand`, `serverConfigCommand`, `-serverConfigArgs`, `serverConfigArgs`, `-serverConfigNotes`, `serverConfigNotes`, `-serverConfigStatus`, `serverConfigStatus`, `-serverConfigMaintenance`, `serverConfigMaintenance`, `-serverConfigResourcePackageSlug`, `serverConfigResourcePackageSlug` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] [Enum: -id, id, -name, name, -serverConfigId, serverConfigId, -numInstances, numInstances, -status, status, -statusMessage, statusMessage, -maintenance, maintenance, -locationCity, locationCity, -locationCityDisplay, locationCityDisplay, -locationContinent, locationContinent, -locationCountry, locationCountry, -serverConfigId, serverConfigId, -serverConfigName, serverConfigName, -serverConfigCommand, serverConfigCommand, -serverConfigArgs, serverConfigArgs, -serverConfigNotes, serverConfigNotes, -serverConfigStatus, serverConfigStatus, -serverConfigMaintenance, serverConfigMaintenance, -serverConfigResourcePackageSlug, serverConfigResourcePackageSlug] |
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
| **filterMetadata** | `string` | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | [Optional] [Defaults to `undefined`] |

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
  AppLocationSettingApi,
} from '';
import type { ListServicesForAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

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
  AppLocationSettingApi,
} from '';
import type { StartServersForAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

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
  AppLocationSettingApi,
} from '';
import type { StopServersForAppLocationSettingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

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

> GetAppLocationSettingById200Response updateAppLocationSetting(appLocationSetting, updateAppLocationSettingRequest)

Update a location setting

### Example

```ts
import {
  Configuration,
  AppLocationSettingApi,
} from '';
import type { UpdateAppLocationSettingOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AppLocationSettingApi();

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

[**GetAppLocationSettingById200Response**](GetAppLocationSettingById200Response.md)

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

