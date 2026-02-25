# TemplateAppApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**templateAppMinecraftStore**](TemplateAppApi.md#templateappminecraftstore) | **POST** /v1/templates/apps/minecraft | Create a Minecraft template app |
| [**templateAppPalworldStore**](TemplateAppApi.md#templateapppalworldstore) | **POST** /v1/templates/apps/palworld | Create a Palworld template app |



## templateAppMinecraftStore

> App templateAppMinecraftStore(storeMinecraftTemplateRequest)

Create a Minecraft template app

### Example

```ts
import {
  Configuration,
  TemplateAppApi,
} from '';
import type { TemplateAppMinecraftStoreRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TemplateAppApi();

  const body = {
    // StoreMinecraftTemplateRequest (optional)
    storeMinecraftTemplateRequest: ...,
  } satisfies TemplateAppMinecraftStoreRequest;

  try {
    const data = await api.templateAppMinecraftStore(body);
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
| **storeMinecraftTemplateRequest** | [StoreMinecraftTemplateRequest](StoreMinecraftTemplateRequest.md) |  | [Optional] |

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


## templateAppPalworldStore

> App templateAppPalworldStore(storePalworldTemplateRequest)

Create a Palworld template app

### Example

```ts
import {
  Configuration,
  TemplateAppApi,
} from '';
import type { TemplateAppPalworldStoreRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TemplateAppApi();

  const body = {
    // StorePalworldTemplateRequest (optional)
    storePalworldTemplateRequest: ...,
  } satisfies TemplateAppPalworldStoreRequest;

  try {
    const data = await api.templateAppPalworldStore(body);
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
| **storePalworldTemplateRequest** | [StorePalworldTemplateRequest](StorePalworldTemplateRequest.md) |  | [Optional] |

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

