# TemplatesApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMinecraftTemplate**](TemplatesApi.md#createminecrafttemplate) | **POST** /v1/templates/apps/minecraft | Create a Minecraft template app |
| [**createOpenClawTemplate**](TemplatesApi.md#createopenclawtemplate) | **POST** /v1/templates/apps/openclaw | Create an OpenClaw template app |
| [**createPalworldTemplate**](TemplatesApi.md#createpalworldtemplate) | **POST** /v1/templates/apps/palworld | Create a Palworld template app |



## createMinecraftTemplate

> App createMinecraftTemplate(storeMinecraftTemplateRequest)

Create a Minecraft template app

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { CreateMinecraftTemplateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TemplatesApi();

  const body = {
    // StoreMinecraftTemplateRequest (optional)
    storeMinecraftTemplateRequest: ...,
  } satisfies CreateMinecraftTemplateRequest;

  try {
    const data = await api.createMinecraftTemplate(body);
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


## createOpenClawTemplate

> TemplateAppResult createOpenClawTemplate(storeOpenClawTemplateRequest)

Create an OpenClaw template app

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { CreateOpenClawTemplateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TemplatesApi();

  const body = {
    // StoreOpenClawTemplateRequest (optional)
    storeOpenClawTemplateRequest: ...,
  } satisfies CreateOpenClawTemplateRequest;

  try {
    const data = await api.createOpenClawTemplate(body);
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
| **storeOpenClawTemplateRequest** | [StoreOpenClawTemplateRequest](StoreOpenClawTemplateRequest.md) |  | [Optional] |

### Return type

[**TemplateAppResult**](TemplateAppResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;TemplateAppResult&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |
| **404** | Payment project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPalworldTemplate

> App createPalworldTemplate(storePalworldTemplateRequest)

Create a Palworld template app

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '';
import type { CreatePalworldTemplateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TemplatesApi();

  const body = {
    // StorePalworldTemplateRequest (optional)
    storePalworldTemplateRequest: ...,
  } satisfies CreatePalworldTemplateRequest;

  try {
    const data = await api.createPalworldTemplate(body);
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

