# ResourcePackageApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getResourcePackageById**](ResourcePackageApi.md#getresourcepackagebyid) | **GET** /v1/resource-packages/{resourcePackage} | Show a specified resource package |
| [**getResourcePackages**](ResourcePackageApi.md#getresourcepackages) | **GET** /v1/resource-packages | Show all available resource packages |



## getResourcePackageById

> ResourcePackage getResourcePackageById(resourcePackage)

Show a specified resource package

### Example

```ts
import {
  Configuration,
  ResourcePackageApi,
} from '';
import type { GetResourcePackageByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ResourcePackageApi();

  const body = {
    // number | The resource package ID
    resourcePackage: 56,
  } satisfies GetResourcePackageByIdRequest;

  try {
    const data = await api.getResourcePackageById(body);
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
| **resourcePackage** | `number` | The resource package ID | [Defaults to `undefined`] |

### Return type

[**ResourcePackage**](ResourcePackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Package&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getResourcePackages

> GetResourcePackages200Response getResourcePackages(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterMemoryLimitMiB)

Show all available resource packages

### Example

```ts
import {
  Configuration,
  ResourcePackageApi,
} from '';
import type { GetResourcePackagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ResourcePackageApi();

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
    // string | Filter by slug. (optional)
    filterSlug: filterSlug_example,
    // string | Filter by type. (optional)
    filterType: filterType_example,
    // number | Filter by CPU limit. Maps to the `cpu_limit` column. (optional)
    filterCpuLimit: 56,
    // number | Filter by memory limit in MiB. Maps to the `memory_limit_mebibytes` column. (optional)
    filterMemoryLimitMiB: 56,
  } satisfies GetResourcePackagesRequest;

  try {
    const data = await api.getResourcePackages(body);
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
| **filterSlug** | `string` | Filter by slug. | [Optional] [Defaults to `undefined`] |
| **filterType** | `string` | Filter by type. | [Optional] [Defaults to `undefined`] |
| **filterCpuLimit** | `number` | Filter by CPU limit. Maps to the &#x60;cpu_limit&#x60; column. | [Optional] [Defaults to `undefined`] |
| **filterMemoryLimitMiB** | `number` | Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetResourcePackages200Response**](GetResourcePackages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;Package&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

