# DockerApi

All URIs are relative to *https://fleet.4players.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkServerDns**](DockerApi.md#checkserverdns) | **GET** /v1/apps/{app}/services/{dockerService}/dns | Check URL reachability for service DNS URLs |
| [**createBackup**](DockerApi.md#createbackup) | **POST** /v1/services/{dockerService}/backup | Create service backup |
| [**createDockerRegistry**](DockerApi.md#createdockerregistry) | **POST** /v1/docker-registries | Create a new docker registry |
| [**deleteDockerRegistry**](DockerApi.md#deletedockerregistry) | **DELETE** /v1/docker-registries/{dockerRegistry} | Delete a specific docker registry |
| [**dockerRegistriesMetadataDeleteAll**](DockerApi.md#dockerregistriesmetadatadeleteall) | **DELETE** /v1/docker-registries/{dockerRegistry}/metadata | Delete all metadata |
| [**dockerRegistriesMetadataDeleteKeys**](DockerApi.md#dockerregistriesmetadatadeletekeys) | **DELETE** /v1/docker-registries/{dockerRegistry}/metadata/keys | Delete metadata keys |
| [**dockerRegistriesMetadataSet**](DockerApi.md#dockerregistriesmetadataset) | **PUT** /v1/docker-registries/{dockerRegistry}/metadata | Set metadata |
| [**dockerRegistriesMetadataUpdate**](DockerApi.md#dockerregistriesmetadataupdate) | **PATCH** /v1/docker-registries/{dockerRegistry}/metadata | Update metadata |
| [**dockerServicesAutoscalingAllocate**](DockerApi.md#dockerservicesautoscalingallocate) | **POST** /v1/services/{dockerService}/autoscaling/allocate | Set autoscaling status to allocated |
| [**dockerServicesAutoscalingHealth**](DockerApi.md#dockerservicesautoscalinghealth) | **POST** /v1/services/{dockerService}/autoscaling/health | Record an autoscaling heartbeat |
| [**dockerServicesAutoscalingReady**](DockerApi.md#dockerservicesautoscalingready) | **POST** /v1/services/{dockerService}/autoscaling/ready | Set autoscaling status to ready |
| [**dockerServicesAutoscalingShutdown**](DockerApi.md#dockerservicesautoscalingshutdown) | **POST** /v1/services/{dockerService}/autoscaling/shutdown | Set autoscaling status to shutdown |
| [**dockerServicesMetadataDeleteAll**](DockerApi.md#dockerservicesmetadatadeleteall) | **DELETE** /v1/services/{dockerService}/metadata | Delete all service metadata |
| [**dockerServicesMetadataDeleteKeys**](DockerApi.md#dockerservicesmetadatadeletekeys) | **DELETE** /v1/services/{dockerService}/metadata/keys | Delete service metadata keys |
| [**dockerServicesMetadataSet**](DockerApi.md#dockerservicesmetadataset) | **PUT** /v1/services/{dockerService}/metadata | Set service metadata |
| [**dockerServicesMetadataUpdate**](DockerApi.md#dockerservicesmetadataupdate) | **PATCH** /v1/services/{dockerService}/metadata | Update service metadata |
| [**downloadServerLogs**](DockerApi.md#downloadserverlogs) | **GET** /v1/services/{dockerService}/logs/download | Download service logs |
| [**getBackups**](DockerApi.md#getbackups) | **GET** /v1/services/{dockerService}/backups | List service backups |
| [**getDockerRegistries**](DockerApi.md#getdockerregistries) | **GET** /v1/docker-registries | Show all docker registries |
| [**getDockerRegistryById**](DockerApi.md#getdockerregistrybyid) | **GET** /v1/docker-registries/{dockerRegistry} | Display a specific docker registry |
| [**getLatestBackup**](DockerApi.md#getlatestbackup) | **GET** /v1/services/{dockerService}/backup | Get latest service backup |
| [**getServerBackupDownloadUrl**](DockerApi.md#getserverbackupdownloadurl) | **GET** /v1/services/{dockerService}/backup/download | Get service backup download URL |
| [**getServerById**](DockerApi.md#getserverbyid) | **GET** /v1/apps/{app}/services/{dockerService} | Display a specific service |
| [**getServerLogs**](DockerApi.md#getserverlogs) | **GET** /v1/services/{dockerService}/logs | Get service logs |
| [**getServers**](DockerApi.md#getservers) | **GET** /v1/apps/{app}/services | List services |
| [**getTaggedImages**](DockerApi.md#gettaggedimages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images | List all available tagged images |
| [**refreshTaggedImages**](DockerApi.md#refreshtaggedimages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images/refresh | Refresh the cache for all available tagged images |
| [**restartServer**](DockerApi.md#restartserver) | **POST** /v1/services/{dockerService}/restart | Restart service |
| [**restoreBackup**](DockerApi.md#restorebackup) | **POST** /v1/services/{dockerService}/restore | Restore latest service backup |
| [**startServer**](DockerApi.md#startserver) | **POST** /v1/services/{dockerService}/start | Start service |
| [**stopServer**](DockerApi.md#stopserver) | **POST** /v1/services/{dockerService}/stop | Stop service |
| [**updateDockerRegistry**](DockerApi.md#updatedockerregistryoperation) | **PUT** /v1/docker-registries/{dockerRegistry} | Update a specific docker registry |



## checkServerDns

> Array&lt;DockerServiceDnsReachable&gt; checkServerDns(app, dockerService)

Check URL reachability for service DNS URLs

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { CheckServerDnsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The docker service ID
    dockerService: 56,
  } satisfies CheckServerDnsRequest;

  try {
    const data = await api.checkServerDns(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;DockerServiceDnsReachable&gt;**](DockerServiceDnsReachable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of &#x60;DockerServiceDnsReachable&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBackup

> createBackup(dockerService, createBackupDockerServiceRequest)

Create service backup

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { CreateBackupRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
    // CreateBackupDockerServiceRequest
    createBackupDockerServiceRequest: ...,
  } satisfies CreateBackupRequest;

  try {
    const data = await api.createBackup(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |
| **createBackupDockerServiceRequest** | [CreateBackupDockerServiceRequest](CreateBackupDockerServiceRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** |  |  -  |
| **404** | Not found |  -  |
| **403** | Authorization error |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createDockerRegistry

> DockerRegistry createDockerRegistry(storeDockerRegistryRequest)

Create a new docker registry

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { CreateDockerRegistryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // StoreDockerRegistryRequest
    storeDockerRegistryRequest: ...,
  } satisfies CreateDockerRegistryRequest;

  try {
    const data = await api.createDockerRegistry(body);
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
| **storeDockerRegistryRequest** | [StoreDockerRegistryRequest](StoreDockerRegistryRequest.md) |  | |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDockerRegistry

> deleteDockerRegistry(dockerRegistry)

Delete a specific docker registry

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DeleteDockerRegistryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies DeleteDockerRegistryRequest;

  try {
    const data = await api.deleteDockerRegistry(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

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


## dockerRegistriesMetadataDeleteAll

> DockerRegistry dockerRegistriesMetadataDeleteAll(dockerRegistry)

Delete all metadata

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerRegistriesMetadataDeleteAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies DockerRegistriesMetadataDeleteAllRequest;

  try {
    const data = await api.dockerRegistriesMetadataDeleteAll(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerRegistriesMetadataDeleteKeys

> DockerRegistry dockerRegistriesMetadataDeleteKeys(dockerRegistry, metadata)

Delete metadata keys

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerRegistriesMetadataDeleteKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
    // Array<string>
    metadata: ...,
  } satisfies DockerRegistriesMetadataDeleteKeysRequest;

  try {
    const data = await api.dockerRegistriesMetadataDeleteKeys(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |
| **metadata** | `Array<string>` |  | |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerRegistriesMetadataSet

> DockerRegistry dockerRegistriesMetadataSet(dockerRegistry, setDockerRegistryMetadataRequest)

Set metadata

Replaces the entire metadata.

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerRegistriesMetadataSetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
    // SetDockerRegistryMetadataRequest (optional)
    setDockerRegistryMetadataRequest: ...,
  } satisfies DockerRegistriesMetadataSetRequest;

  try {
    const data = await api.dockerRegistriesMetadataSet(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |
| **setDockerRegistryMetadataRequest** | [SetDockerRegistryMetadataRequest](SetDockerRegistryMetadataRequest.md) |  | [Optional] |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerRegistriesMetadataUpdate

> DockerRegistry dockerRegistriesMetadataUpdate(dockerRegistry, patchDockerRegistryMetadataRequest)

Update metadata

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerRegistriesMetadataUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
    // PatchDockerRegistryMetadataRequest (optional)
    patchDockerRegistryMetadataRequest: ...,
  } satisfies DockerRegistriesMetadataUpdateRequest;

  try {
    const data = await api.dockerRegistriesMetadataUpdate(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |
| **patchDockerRegistryMetadataRequest** | [PatchDockerRegistryMetadataRequest](PatchDockerRegistryMetadataRequest.md) |  | [Optional] |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesAutoscalingAllocate

> dockerServicesAutoscalingAllocate(dockerService)

Set autoscaling status to allocated

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesAutoscalingAllocateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies DockerServicesAutoscalingAllocateRequest;

  try {
    const data = await api.dockerServicesAutoscalingAllocate(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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
| **409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesAutoscalingHealth

> dockerServicesAutoscalingHealth(dockerService)

Record an autoscaling heartbeat

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesAutoscalingHealthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies DockerServicesAutoscalingHealthRequest;

  try {
    const data = await api.dockerServicesAutoscalingHealth(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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
| **409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesAutoscalingReady

> dockerServicesAutoscalingReady(dockerService)

Set autoscaling status to ready

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesAutoscalingReadyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies DockerServicesAutoscalingReadyRequest;

  try {
    const data = await api.dockerServicesAutoscalingReady(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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
| **409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesAutoscalingShutdown

> dockerServicesAutoscalingShutdown(dockerService)

Set autoscaling status to shutdown

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesAutoscalingShutdownRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies DockerServicesAutoscalingShutdownRequest;

  try {
    const data = await api.dockerServicesAutoscalingShutdown(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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
| **409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesMetadataDeleteAll

> Server dockerServicesMetadataDeleteAll(dockerService)

Delete all service metadata

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesMetadataDeleteAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies DockerServicesMetadataDeleteAllRequest;

  try {
    const data = await api.dockerServicesMetadataDeleteAll(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Server&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesMetadataDeleteKeys

> Server dockerServicesMetadataDeleteKeys(dockerService, metadata)

Delete service metadata keys

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesMetadataDeleteKeysRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
    // Array<string>
    metadata: ...,
  } satisfies DockerServicesMetadataDeleteKeysRequest;

  try {
    const data = await api.dockerServicesMetadataDeleteKeys(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |
| **metadata** | `Array<string>` |  | |

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Server&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesMetadataSet

> Server dockerServicesMetadataSet(dockerService, setMetadataRequest)

Set service metadata

Replaces the entire metadata set with only the values provided in the request.

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesMetadataSetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
    // SetMetadataRequest (optional)
    setMetadataRequest: ...,
  } satisfies DockerServicesMetadataSetRequest;

  try {
    const data = await api.dockerServicesMetadataSet(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |
| **setMetadataRequest** | [SetMetadataRequest](SetMetadataRequest.md) |  | [Optional] |

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Server&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dockerServicesMetadataUpdate

> Server dockerServicesMetadataUpdate(dockerService, patchMetadataRequest)

Update service metadata

Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DockerServicesMetadataUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
    // PatchMetadataRequest (optional)
    patchMetadataRequest: ...,
  } satisfies DockerServicesMetadataUpdateRequest;

  try {
    const data = await api.dockerServicesMetadataUpdate(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |
| **patchMetadataRequest** | [PatchMetadataRequest](PatchMetadataRequest.md) |  | [Optional] |

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Server&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadServerLogs

> ServiceLogs downloadServerLogs(dockerService, streamSource)

Download service logs

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { DownloadServerLogsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
    // 'stdout' | 'stderr' | Only return logs filtered by stream source like stdout or stderr. (optional)
    streamSource: streamSource_example,
  } satisfies DownloadServerLogsRequest;

  try {
    const data = await api.downloadServerLogs(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |
| **streamSource** | `stdout`, `stderr` | Only return logs filtered by stream source like stdout or stderr. | [Optional] [Defaults to `undefined`] [Enum: stdout, stderr] |

### Return type

[**ServiceLogs**](ServiceLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServiceLogs&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBackups

> GetBackups200Response getBackups(dockerService, perPage, page, sort, filterName, filterArchiveName)

List service backups

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetBackupsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<'-name' | 'name' | '-archiveName' | 'archiveName' | '-createdAt' | 'createdAt' | '-restoredAt' | 'restoredAt'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  ``` sort[]=name sort[]=-archiveName ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=name&sort[]=-archiveName ``` (optional)
    sort: ...,
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by archive name. (optional)
    filterArchiveName: filterArchiveName_example,
  } satisfies GetBackupsRequest;

  try {
    const data = await api.getBackups(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |
| **perPage** | `number` | The number of items to be shown per page. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Specifies the page number to retrieve in the paginated results. | [Optional] [Defaults to `undefined`] |
| **sort** | `-name`, `name`, `-archiveName`, `archiveName`, `-createdAt`, `createdAt`, `-restoredAt`, `restoredAt` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60; | [Optional] [Enum: -name, name, -archiveName, archiveName, -createdAt, createdAt, -restoredAt, restoredAt] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterArchiveName** | `string` | Filter by archive name. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBackups200Response**](GetBackups200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;DockerBackup&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDockerRegistries

> GetDockerRegistries200Response getDockerRegistries(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, filterMetadata)

Show all docker registries

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetDockerRegistriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // Array<'-id' | 'id' | '-type' | 'type' | '-name' | 'name' | '-url' | 'url' | '-organization' | 'organization'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
    sort: ...,
    // number | Filter by id. (optional)
    filterId: 56,
    // string | Filter by type. (optional)
    filterType: filterType_example,
    // string | Filter by name. (optional)
    filterName: filterName_example,
    // string | Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterNamePartial: filterNamePartial_example,
    // string | Filter by url. (optional)
    filterUrl: filterUrl_example,
    // string | Filter by organization. (optional)
    filterOrganization: filterOrganization_example,
    // string | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
    filterMetadata: filterMetadata_example,
  } satisfies GetDockerRegistriesRequest;

  try {
    const data = await api.getDockerRegistries(body);
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
| **sort** | `-id`, `id`, `-type`, `type`, `-name`, `name`, `-url`, `url`, `-organization`, `organization` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | [Optional] [Enum: -id, id, -type, type, -name, name, -url, url, -organization, organization] |
| **filterId** | `number` | Filter by id. | [Optional] [Defaults to `undefined`] |
| **filterType** | `string` | Filter by type. | [Optional] [Defaults to `undefined`] |
| **filterName** | `string` | Filter by name. | [Optional] [Defaults to `undefined`] |
| **filterNamePartial** | `string` | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterUrl** | `string` | Filter by url. | [Optional] [Defaults to `undefined`] |
| **filterOrganization** | `string` | Filter by organization. | [Optional] [Defaults to `undefined`] |
| **filterMetadata** | `string` | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetDockerRegistries200Response**](GetDockerRegistries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;DockerRegistry&#x60; |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDockerRegistryById

> DockerRegistry getDockerRegistryById(dockerRegistry)

Display a specific docker registry

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetDockerRegistryByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies GetDockerRegistryByIdRequest;

  try {
    const data = await api.getDockerRegistryById(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLatestBackup

> Backup getLatestBackup(dockerService)

Get latest service backup

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetLatestBackupRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies GetLatestBackupRequest;

  try {
    const data = await api.getLatestBackup(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

### Return type

[**Backup**](Backup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Backup&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServerBackupDownloadUrl

> BackupDownload getServerBackupDownloadUrl(dockerService)

Get service backup download URL

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetServerBackupDownloadUrlRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies GetServerBackupDownloadUrlRequest;

  try {
    const data = await api.getServerBackupDownloadUrl(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

### Return type

[**BackupDownload**](BackupDownload.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;BackupDownload&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServerById

> Server getServerById(app, dockerService)

Display a specific service

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetServerByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The docker service ID
    dockerService: 56,
  } satisfies GetServerByIdRequest;

  try {
    const data = await api.getServerById(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

### Return type

[**Server**](Server.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;Server&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServerLogs

> ServiceLogs getServerLogs(dockerService, limit, direction, streamSource)

Get service logs

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetServerLogsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
    // number | The max number of entries to return. Default: 100 (optional)
    limit: 56,
    // string | Determines the sort order of logs. Supported values are forward or backward. Default: forward (optional)
    direction: direction_example,
    // 'stdout' | 'stderr' | Only return logs filtered by stream source like stdout or stderr. Default: null (optional)
    streamSource: streamSource_example,
  } satisfies GetServerLogsRequest;

  try {
    const data = await api.getServerLogs(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |
| **limit** | `number` | The max number of entries to return. Default: 100 | [Optional] [Defaults to `undefined`] |
| **direction** | `string` | Determines the sort order of logs. Supported values are forward or backward. Default: forward | [Optional] [Defaults to `undefined`] |
| **streamSource** | `stdout`, `stderr` | Only return logs filtered by stream source like stdout or stderr. Default: null | [Optional] [Defaults to `undefined`] [Enum: stdout, stderr] |

### Return type

[**ServiceLogs**](ServiceLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;ServiceLogs&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServers

> GetServers200Response getServers(app, perPage, page, filterStatus, filterAppLocationSettingId, filterAutoscalingEnabled, filterServerConfigId, filterServerConfigName, filterServerConfigNamePartial, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterIsBackupable, filterIsRestorable, filterIsPending, filterIsNotFound, filterIsHealthy, filterBinaryId, filterIsStopped, filterMetadata, sort)

List services

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetServersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The app ID
    app: 56,
    // number | The number of items to be shown per page. (optional)
    perPage: 56,
    // number | Specifies the page number to retrieve in the paginated results. (optional)
    page: 56,
    // string | Filter by status. (optional)
    filterStatus: filterStatus_example,
    // number | Filter by AppLocationSetting ID. (optional)
    filterAppLocationSettingId: 56,
    // boolean | Filter by whether the service belongs to an autoscaled AppLocationSetting. (optional)
    filterAutoscalingEnabled: true,
    // number | Filter by ServerConfig ID. (optional)
    filterServerConfigId: 56,
    // string | Filter by ServerConfig name. (optional)
    filterServerConfigName: filterServerConfigName_example,
    // string | Filter by ServerConfig name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
    filterServerConfigNamePartial: filterServerConfigNamePartial_example,
    // string | Filter by location city. (optional)
    filterLocationCity: filterLocationCity_example,
    // string | Filter by location city display name. (optional)
    filterLocationCityDisplay: filterLocationCityDisplay_example,
    // string | Filter by location continent. (optional)
    filterLocationContinent: filterLocationContinent_example,
    // string | Filter by location country. (optional)
    filterLocationCountry: filterLocationCountry_example,
    // boolean | Filter by whether the service can be backed up. (optional)
    filterIsBackupable: true,
    // boolean | Filter by whether the service can be restored. (optional)
    filterIsRestorable: true,
    // boolean | Filter by whether the service is pending (not running) due to insufficient resources on the node. (optional)
    filterIsPending: true,
    // boolean | Filter by whether the service is not found/missing in the cluster. (optional)
    filterIsNotFound: true,
    // boolean | Filter by whether the service is currently in an overall healthy state. (optional)
    filterIsHealthy: true,
    // number | Filter by Binary ID. (optional)
    filterBinaryId: 56,
    // boolean | Filter by whether the service is currenctly stopped. (optional)
    filterIsStopped: true,
    // string | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
    filterMetadata: filterMetadata_example,
    // Array<'-id' | 'id' | '-instance' | 'instance' | '-status' | 'status' | '-status_message' | 'status_message' | '-serverConfigId' | 'serverConfigId' | '-serverConfigName' | 'serverConfigName' | '-appLocationSettingId' | 'appLocationSettingId' | '-name' | 'name' | '-locationCity' | 'locationCity' | '-locationCityDisplay' | 'locationCityDisplay' | '-locationContinent' | 'locationContinent' | '-locationCountry' | 'locationCountry' | 'isBackupable' | '-isBackupable' | 'isRestorable' | '-isRestorable' | 'isPending' | '-isPending' | 'isNotFound' | '-isNotFound' | 'isHealthy' | '-isHealthy' | 'isStopped' | '-isStopped' | '-createdAt' | 'createdAt' | '-updatedAt' | 'updatedAt'> | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  ``` sort[]=id sort[]=-instance ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-instance ``` (optional)
    sort: ...,
  } satisfies GetServersRequest;

  try {
    const data = await api.getServers(body);
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
| **filterStatus** | `string` | Filter by status. | [Optional] [Defaults to `undefined`] |
| **filterAppLocationSettingId** | `number` | Filter by AppLocationSetting ID. | [Optional] [Defaults to `undefined`] |
| **filterAutoscalingEnabled** | `boolean` | Filter by whether the service belongs to an autoscaled AppLocationSetting. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigId** | `number` | Filter by ServerConfig ID. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigName** | `string` | Filter by ServerConfig name. | [Optional] [Defaults to `undefined`] |
| **filterServerConfigNamePartial** | `string` | Filter by ServerConfig name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | [Optional] [Defaults to `undefined`] |
| **filterLocationCity** | `string` | Filter by location city. | [Optional] [Defaults to `undefined`] |
| **filterLocationCityDisplay** | `string` | Filter by location city display name. | [Optional] [Defaults to `undefined`] |
| **filterLocationContinent** | `string` | Filter by location continent. | [Optional] [Defaults to `undefined`] |
| **filterLocationCountry** | `string` | Filter by location country. | [Optional] [Defaults to `undefined`] |
| **filterIsBackupable** | `boolean` | Filter by whether the service can be backed up. | [Optional] [Defaults to `undefined`] |
| **filterIsRestorable** | `boolean` | Filter by whether the service can be restored. | [Optional] [Defaults to `undefined`] |
| **filterIsPending** | `boolean` | Filter by whether the service is pending (not running) due to insufficient resources on the node. | [Optional] [Defaults to `undefined`] |
| **filterIsNotFound** | `boolean` | Filter by whether the service is not found/missing in the cluster. | [Optional] [Defaults to `undefined`] |
| **filterIsHealthy** | `boolean` | Filter by whether the service is currently in an overall healthy state. | [Optional] [Defaults to `undefined`] |
| **filterBinaryId** | `number` | Filter by Binary ID. | [Optional] [Defaults to `undefined`] |
| **filterIsStopped** | `boolean` | Filter by whether the service is currenctly stopped. | [Optional] [Defaults to `undefined`] |
| **filterMetadata** | `string` | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | [Optional] [Defaults to `undefined`] |
| **sort** | `-id`, `id`, `-instance`, `instance`, `-status`, `status`, `-status_message`, `status_message`, `-serverConfigId`, `serverConfigId`, `-serverConfigName`, `serverConfigName`, `-appLocationSettingId`, `appLocationSettingId`, `-name`, `name`, `-locationCity`, `locationCity`, `-locationCityDisplay`, `locationCityDisplay`, `-locationContinent`, `locationContinent`, `-locationCountry`, `locationCountry`, `isBackupable`, `-isBackupable`, `isRestorable`, `-isRestorable`, `isPending`, `-isPending`, `isNotFound`, `-isNotFound`, `isHealthy`, `-isHealthy`, `isStopped`, `-isStopped`, `-createdAt`, `createdAt`, `-updatedAt`, `updatedAt` | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60; | [Optional] [Enum: -id, id, -instance, instance, -status, status, -status_message, status_message, -serverConfigId, serverConfigId, -serverConfigName, serverConfigName, -appLocationSettingId, appLocationSettingId, -name, name, -locationCity, locationCity, -locationCityDisplay, locationCityDisplay, -locationContinent, locationContinent, -locationCountry, locationCountry, isBackupable, -isBackupable, isRestorable, -isRestorable, isPending, -isPending, isNotFound, -isNotFound, isHealthy, -isHealthy, isStopped, -isStopped, -createdAt, createdAt, -updatedAt, updatedAt] |

### Return type

[**GetServers200Response**](GetServers200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated set of &#x60;CustomDockerService&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTaggedImages

> GetTaggedImages200Response getTaggedImages(dockerRegistry)

List all available tagged images

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { GetTaggedImagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies GetTaggedImagesRequest;

  try {
    const data = await api.getTaggedImages(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

[**GetTaggedImages200Response**](GetTaggedImages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshTaggedImages

> GetTaggedImages200Response refreshTaggedImages(dockerRegistry)

Refresh the cache for all available tagged images

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { RefreshTaggedImagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
  } satisfies RefreshTaggedImagesRequest;

  try {
    const data = await api.refreshTaggedImages(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |

### Return type

[**GetTaggedImages200Response**](GetTaggedImages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restartServer

> restartServer(dockerService)

Restart service

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { RestartServerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies RestartServerRequest;

  try {
    const data = await api.restartServer(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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


## restoreBackup

> restoreBackup(dockerService)

Restore latest service backup

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { RestoreBackupRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies RestoreBackupRequest;

  try {
    const data = await api.restoreBackup(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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


## startServer

> startServer(dockerService)

Start service

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { StartServerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies StartServerRequest;

  try {
    const data = await api.startServer(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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


## stopServer

> stopServer(dockerService)

Stop service

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { StopServerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker service ID
    dockerService: 56,
  } satisfies StopServerRequest;

  try {
    const data = await api.stopServer(body);
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
| **dockerService** | `number` | The docker service ID | [Defaults to `undefined`] |

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


## updateDockerRegistry

> DockerRegistry updateDockerRegistry(dockerRegistry, updateDockerRegistryRequest)

Update a specific docker registry

### Example

```ts
import {
  Configuration,
  DockerApi,
} from '';
import type { UpdateDockerRegistryOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DockerApi();

  const body = {
    // number | The docker registry ID
    dockerRegistry: 56,
    // UpdateDockerRegistryRequest
    updateDockerRegistryRequest: ...,
  } satisfies UpdateDockerRegistryOperationRequest;

  try {
    const data = await api.updateDockerRegistry(body);
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
| **dockerRegistry** | `number` | The docker registry ID | [Defaults to `undefined`] |
| **updateDockerRegistryRequest** | [UpdateDockerRegistryRequest](UpdateDockerRegistryRequest.md) |  | |

### Return type

[**DockerRegistry**](DockerRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &#x60;DockerRegistry&#x60; |  -  |
| **404** | Not found |  -  |
| **401** | Unauthenticated |  -  |
| **422** | Validation error |  -  |
| **403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

