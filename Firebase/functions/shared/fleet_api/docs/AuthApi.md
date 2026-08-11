# OdinFleetApi.AuthApi

All URIs are relative to *https://fleet.4players.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthToken**](AuthApi.md#getAuthToken) | **POST** /v1/auth/token | Get token
[**refreshAuthToken**](AuthApi.md#refreshAuthToken) | **PUT** /v1/auth/token | Refresh token



## getAuthToken

> Auth getAuthToken(authRequest)

Get token

Authenticates the user based on the user&#39;s email, password, and session ID. If the user is authenticated successfully, it returns the user&#39;s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.

### Example

```javascript
import OdinFleetApi from 'odin_fleet_api';

let apiInstance = new OdinFleetApi.AuthApi();
let authRequest = new OdinFleetApi.AuthRequest(); // AuthRequest | 
apiInstance.getAuthToken(authRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authRequest** | [**AuthRequest**](AuthRequest.md)|  | 

### Return type

[**Auth**](Auth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshAuthToken

> Auth refreshAuthToken()

Refresh token

### Example

```javascript
import OdinFleetApi from 'odin_fleet_api';

let apiInstance = new OdinFleetApi.AuthApi();
apiInstance.refreshAuthToken((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Auth**](Auth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

