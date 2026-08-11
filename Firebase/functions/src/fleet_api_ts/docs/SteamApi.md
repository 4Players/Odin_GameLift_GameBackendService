# SteamApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**steamGetBranches**](SteamApi.md#steamgetbranches) | **GET** /v1/binaries/steam/branches | Get branches for a specific steamworks app ID |
| [**steamGetLauncher**](SteamApi.md#steamgetlauncher) | **GET** /v1/binaries/steam/launchers | Get launchers for a specific steamworks app ID, optionally filtered by OS |



## steamGetBranches

> Array&lt;SteamBranch&gt; steamGetBranches(appId)

Get branches for a specific steamworks app ID

### Example

```ts
import {
  Configuration,
  SteamApi,
} from '';
import type { SteamGetBranchesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SteamApi();

  const body = {
    // number | The steamworks app id
    appId: 56,
  } satisfies SteamGetBranchesRequest;

  try {
    const data = await api.steamGetBranches(body);
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
| **appId** | `number` | The steamworks app id | [Defaults to `undefined`] |

### Return type

[**Array&lt;SteamBranch&gt;**](SteamBranch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of &#x60;SteamBranch&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## steamGetLauncher

> Array&lt;SteamLauncher&gt; steamGetLauncher(appId, os)

Get launchers for a specific steamworks app ID, optionally filtered by OS

### Example

```ts
import {
  Configuration,
  SteamApi,
} from '';
import type { SteamGetLauncherRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SteamApi();

  const body = {
    // number | The steamworks app id
    appId: 56,
    // OperatingSystem | The operating system of the binary (optional)
    os: ...,
  } satisfies SteamGetLauncherRequest;

  try {
    const data = await api.steamGetLauncher(body);
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
| **appId** | `number` | The steamworks app id | [Defaults to `undefined`] |
| **os** | `OperatingSystem` | The operating system of the binary | [Optional] [Defaults to `undefined`] [Enum: windows, linux] |

### Return type

[**Array&lt;SteamLauncher&gt;**](SteamLauncher.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of &#x60;SteamLauncher&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

