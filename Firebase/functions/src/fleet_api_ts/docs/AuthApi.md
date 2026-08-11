# AuthApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAuthToken**](AuthApi.md#getauthtoken) | **POST** /v1/auth/token | Get token |
| [**getAuthTokenViaFsid**](AuthApi.md#getauthtokenviafsid) | **POST** /v1/auth/token/fsid | Get token via fsid |
| [**refreshAuthToken**](AuthApi.md#refreshauthtoken) | **PUT** /v1/auth/token | Refresh token |



## getAuthToken

> Auth getAuthToken(authRequest)

Get token

Authenticates the user based on the user\&#39;s email, password, and session ID. If the user is authenticated successfully, it returns the user\&#39;s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { GetAuthTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthRequest
    authRequest: ...,
  } satisfies GetAuthTokenRequest;

  try {
    const data = await api.getAuthToken(body);
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
| **authRequest** | [AuthRequest](AuthRequest.md) |  | |

### Return type

[**Auth**](Auth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Auth&#x60; |  -  |
| **404** | Not found |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuthTokenViaFsid

> Auth getAuthTokenViaFsid(authFsidRequest)

Get token via fsid

Authenticates the user based on the Fusion Session ID (fsid). If the user is authenticated successfully, it returns the user\&#39;s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { GetAuthTokenViaFsidRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthFsidRequest
    authFsidRequest: ...,
  } satisfies GetAuthTokenViaFsidRequest;

  try {
    const data = await api.getAuthTokenViaFsid(body);
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
| **authFsidRequest** | [AuthFsidRequest](AuthFsidRequest.md) |  | |

### Return type

[**Auth**](Auth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Auth&#x60; |  -  |
| **403** | An error |  -  |
| **422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshAuthToken

> Auth refreshAuthToken()

Refresh token

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { RefreshAuthTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  try {
    const data = await api.refreshAuthToken();
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

[**Auth**](Auth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Auth&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

