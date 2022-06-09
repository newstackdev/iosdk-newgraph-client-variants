# swagger.api.DefaultApi

## Load the API package
```dart
import 'package:swagger/api.dart';
```

All URIs are relative to *https://api-eu-dev.newlife.io/creator*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authCallbackPathGet**](DefaultApi.md#authCallbackPathGet) | **GET** /auth/callback/{path+} | 
[**authCallbackPathOptions**](DefaultApi.md#authCallbackPathOptions) | **OPTIONS** /auth/callback/{path+} | 
[**authProviderPathGet**](DefaultApi.md#authProviderPathGet) | **GET** /auth/provider/{path+} | 
[**authProviderPathOptions**](DefaultApi.md#authProviderPathOptions) | **OPTIONS** /auth/provider/{path+} | 
[**folderGet**](DefaultApi.md#folderGet) | **GET** /folder | 
[**folderOptions**](DefaultApi.md#folderOptions) | **OPTIONS** /folder | 
[**infoAuthGet**](DefaultApi.md#infoAuthGet) | **GET** /info-auth | 
[**infoAuthOptions**](DefaultApi.md#infoAuthOptions) | **OPTIONS** /info-auth | 
[**infoGet**](DefaultApi.md#infoGet) | **GET** /info | 
[**infoOptions**](DefaultApi.md#infoOptions) | **OPTIONS** /info | 
[**moodAttachPostOptions**](DefaultApi.md#moodAttachPostOptions) | **OPTIONS** /mood/attach/post | 
[**moodAttachPostPut**](DefaultApi.md#moodAttachPostPut) | **PUT** /mood/attach/post | 
[**moodGet**](DefaultApi.md#moodGet) | **GET** /mood | 
[**moodListTopGet**](DefaultApi.md#moodListTopGet) | **GET** /mood/list/top | 
[**moodListTopOptions**](DefaultApi.md#moodListTopOptions) | **OPTIONS** /mood/list/top | 
[**moodOptions**](DefaultApi.md#moodOptions) | **OPTIONS** /mood | 
[**moodPost**](DefaultApi.md#moodPost) | **POST** /mood | 
[**moodPostsGet**](DefaultApi.md#moodPostsGet) | **GET** /mood/posts | 
[**moodPostsOptions**](DefaultApi.md#moodPostsOptions) | **OPTIONS** /mood/posts | 
[**moodPut**](DefaultApi.md#moodPut) | **PUT** /mood | 
[**moodRateOptions**](DefaultApi.md#moodRateOptions) | **OPTIONS** /mood/rate | 
[**moodRatePost**](DefaultApi.md#moodRatePost) | **POST** /mood/rate | 
[**moodUploadOptions**](DefaultApi.md#moodUploadOptions) | **OPTIONS** /mood/upload | 
[**moodUploadPost**](DefaultApi.md#moodUploadPost) | **POST** /mood/upload | 
[**newcoinBcaccopenOptions**](DefaultApi.md#newcoinBcaccopenOptions) | **OPTIONS** /newcoin/bcaccopen | 
[**newcoinBcaccopenPost**](DefaultApi.md#newcoinBcaccopenPost) | **POST** /newcoin/bcaccopen | 
[**newcoinBcauthethOptions**](DefaultApi.md#newcoinBcauthethOptions) | **OPTIONS** /newcoin/bcautheth | 
[**newcoinBcauthethPost**](DefaultApi.md#newcoinBcauthethPost) | **POST** /newcoin/bcautheth | 
[**newcoinBccolcreateOptions**](DefaultApi.md#newcoinBccolcreateOptions) | **OPTIONS** /newcoin/bccolcreate | 
[**newcoinBccolcreatePost**](DefaultApi.md#newcoinBccolcreatePost) | **POST** /newcoin/bccolcreate | 
[**newcoinBcgetaccOptions**](DefaultApi.md#newcoinBcgetaccOptions) | **OPTIONS** /newcoin/bcgetacc | 
[**newcoinBcgetaccPost**](DefaultApi.md#newcoinBcgetaccPost) | **POST** /newcoin/bcgetacc | 
[**newcoinBcgetpoolOptions**](DefaultApi.md#newcoinBcgetpoolOptions) | **OPTIONS** /newcoin/bcgetpool | 
[**newcoinBcgetpoolPost**](DefaultApi.md#newcoinBcgetpoolPost) | **POST** /newcoin/bcgetpool | 
[**newcoinBckeypairOptions**](DefaultApi.md#newcoinBckeypairOptions) | **OPTIONS** /newcoin/bckeypair | 
[**newcoinBckeypairPost**](DefaultApi.md#newcoinBckeypairPost) | **POST** /newcoin/bckeypair | 
[**newcoinBcmaindaodldunstakeOptions**](DefaultApi.md#newcoinBcmaindaodldunstakeOptions) | **OPTIONS** /newcoin/bcmaindaodldunstake | 
[**newcoinBcmaindaodldunstakePost**](DefaultApi.md#newcoinBcmaindaodldunstakePost) | **POST** /newcoin/bcmaindaodldunstake | 
[**newcoinBcmaindaoinstunstakeOptions**](DefaultApi.md#newcoinBcmaindaoinstunstakeOptions) | **OPTIONS** /newcoin/bcmaindaoinstunstake | 
[**newcoinBcmaindaoinstunstakePost**](DefaultApi.md#newcoinBcmaindaoinstunstakePost) | **POST** /newcoin/bcmaindaoinstunstake | 
[**newcoinBcmaindaostakeOptions**](DefaultApi.md#newcoinBcmaindaostakeOptions) | **OPTIONS** /newcoin/bcmaindaostake | 
[**newcoinBcmaindaostakePost**](DefaultApi.md#newcoinBcmaindaostakePost) | **POST** /newcoin/bcmaindaostake | 
[**newcoinBcmintassetOptions**](DefaultApi.md#newcoinBcmintassetOptions) | **OPTIONS** /newcoin/bcmintasset | 
[**newcoinBcmintassetPost**](DefaultApi.md#newcoinBcmintassetPost) | **POST** /newcoin/bcmintasset | 
[**newcoinBcpoolcreateOptions**](DefaultApi.md#newcoinBcpoolcreateOptions) | **OPTIONS** /newcoin/bcpoolcreate | 
[**newcoinBcpoolcreatePost**](DefaultApi.md#newcoinBcpoolcreatePost) | **POST** /newcoin/bcpoolcreate | 
[**newcoinBcpoolstakeOptions**](DefaultApi.md#newcoinBcpoolstakeOptions) | **OPTIONS** /newcoin/bcpoolstake | 
[**newcoinBcpoolstakePost**](DefaultApi.md#newcoinBcpoolstakePost) | **POST** /newcoin/bcpoolstake | 
[**newcoinDaoCreateOptions**](DefaultApi.md#newcoinDaoCreateOptions) | **OPTIONS** /newcoin/dao/create | 
[**newcoinDaoCreatePost**](DefaultApi.md#newcoinDaoCreatePost) | **POST** /newcoin/dao/create | 
[**newcoinDaoProposalApproveOptions**](DefaultApi.md#newcoinDaoProposalApproveOptions) | **OPTIONS** /newcoin/dao/proposal/approve | 
[**newcoinDaoProposalApprovePost**](DefaultApi.md#newcoinDaoProposalApprovePost) | **POST** /newcoin/dao/proposal/approve | 
[**newcoinDaoProposalExecuteOptions**](DefaultApi.md#newcoinDaoProposalExecuteOptions) | **OPTIONS** /newcoin/dao/proposal/execute | 
[**newcoinDaoProposalExecutePost**](DefaultApi.md#newcoinDaoProposalExecutePost) | **POST** /newcoin/dao/proposal/execute | 
[**newcoinDaoProposalListGet**](DefaultApi.md#newcoinDaoProposalListGet) | **GET** /newcoin/dao/proposal/list | 
[**newcoinDaoProposalListOptions**](DefaultApi.md#newcoinDaoProposalListOptions) | **OPTIONS** /newcoin/dao/proposal/list | 
[**newcoinDaoProposalOptions**](DefaultApi.md#newcoinDaoProposalOptions) | **OPTIONS** /newcoin/dao/proposal | 
[**newcoinDaoProposalPost**](DefaultApi.md#newcoinDaoProposalPost) | **POST** /newcoin/dao/proposal | 
[**newcoinDaoProposalVoteOptions**](DefaultApi.md#newcoinDaoProposalVoteOptions) | **OPTIONS** /newcoin/dao/proposal/vote | 
[**newcoinDaoProposalVotePost**](DefaultApi.md#newcoinDaoProposalVotePost) | **POST** /newcoin/dao/proposal/vote | 
[**newcoinDaoProposalVotesGet**](DefaultApi.md#newcoinDaoProposalVotesGet) | **GET** /newcoin/dao/proposal/votes | 
[**newcoinDaoProposalVotesOptions**](DefaultApi.md#newcoinDaoProposalVotesOptions) | **OPTIONS** /newcoin/dao/proposal/votes | 
[**newcoinDaoProposalWhitelistApproveOptions**](DefaultApi.md#newcoinDaoProposalWhitelistApproveOptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/approve | 
[**newcoinDaoProposalWhitelistApprovePost**](DefaultApi.md#newcoinDaoProposalWhitelistApprovePost) | **POST** /newcoin/dao/proposal-whitelist/approve | 
[**newcoinDaoProposalWhitelistExecuteOptions**](DefaultApi.md#newcoinDaoProposalWhitelistExecuteOptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/execute | 
[**newcoinDaoProposalWhitelistExecutePost**](DefaultApi.md#newcoinDaoProposalWhitelistExecutePost) | **POST** /newcoin/dao/proposal-whitelist/execute | 
[**newcoinDaoProposalWhitelistListGet**](DefaultApi.md#newcoinDaoProposalWhitelistListGet) | **GET** /newcoin/dao/proposal-whitelist/list | 
[**newcoinDaoProposalWhitelistListOptions**](DefaultApi.md#newcoinDaoProposalWhitelistListOptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/list | 
[**newcoinDaoProposalWhitelistOptions**](DefaultApi.md#newcoinDaoProposalWhitelistOptions) | **OPTIONS** /newcoin/dao/proposal-whitelist | 
[**newcoinDaoProposalWhitelistPost**](DefaultApi.md#newcoinDaoProposalWhitelistPost) | **POST** /newcoin/dao/proposal-whitelist | 
[**newcoinDaoWhitelistGet**](DefaultApi.md#newcoinDaoWhitelistGet) | **GET** /newcoin/dao/whitelist | 
[**newcoinDaoWhitelistOptions**](DefaultApi.md#newcoinDaoWhitelistOptions) | **OPTIONS** /newcoin/dao/whitelist | 
[**newcoinDaoWithdrawVoteDepositOptions**](DefaultApi.md#newcoinDaoWithdrawVoteDepositOptions) | **OPTIONS** /newcoin/dao/withdrawVoteDeposit | 
[**newcoinDaoWithdrawVoteDepositPost**](DefaultApi.md#newcoinDaoWithdrawVoteDepositPost) | **POST** /newcoin/dao/withdrawVoteDeposit | 
[**paymentStripeIntentOptions**](DefaultApi.md#paymentStripeIntentOptions) | **OPTIONS** /payment/stripe/intent | 
[**paymentStripeIntentPost**](DefaultApi.md#paymentStripeIntentPost) | **POST** /payment/stripe/intent | 
[**paymentStripeSubscriptionPaymentOptions**](DefaultApi.md#paymentStripeSubscriptionPaymentOptions) | **OPTIONS** /payment/stripe/subscription/payment | 
[**paymentStripeSubscriptionPaymentPost**](DefaultApi.md#paymentStripeSubscriptionPaymentPost) | **POST** /payment/stripe/subscription/payment | 
[**paymentStripeWebhookOptions**](DefaultApi.md#paymentStripeWebhookOptions) | **OPTIONS** /payment/stripe/webhook | 
[**paymentStripeWebhookPost**](DefaultApi.md#paymentStripeWebhookPost) | **POST** /payment/stripe/webhook | 
[**postGet**](DefaultApi.md#postGet) | **GET** /post | 
[**postListSearchGet**](DefaultApi.md#postListSearchGet) | **GET** /post/list/search | 
[**postListSearchOptions**](DefaultApi.md#postListSearchOptions) | **OPTIONS** /post/list/search | 
[**postListTagsSearchGet**](DefaultApi.md#postListTagsSearchGet) | **GET** /post/list/tags-search | 
[**postListTagsSearchOptions**](DefaultApi.md#postListTagsSearchOptions) | **OPTIONS** /post/list/tags-search | 
[**postListTopGet**](DefaultApi.md#postListTopGet) | **GET** /post/list/top | 
[**postListTopOptions**](DefaultApi.md#postListTopOptions) | **OPTIONS** /post/list/top | 
[**postOptions**](DefaultApi.md#postOptions) | **OPTIONS** /post | 
[**postPost**](DefaultApi.md#postPost) | **POST** /post | 
[**postPut**](DefaultApi.md#postPut) | **PUT** /post | 
[**postRateOptions**](DefaultApi.md#postRateOptions) | **OPTIONS** /post/rate | 
[**postRatePost**](DefaultApi.md#postRatePost) | **POST** /post/rate | 
[**postReportOptions**](DefaultApi.md#postReportOptions) | **OPTIONS** /post/report | 
[**postReportPost**](DefaultApi.md#postReportPost) | **POST** /post/report | 
[**postUploadOptions**](DefaultApi.md#postUploadOptions) | **OPTIONS** /post/upload | 
[**postUploadPost**](DefaultApi.md#postUploadPost) | **POST** /post/upload | 
[**postUtilsRemoteMetaProxyGet**](DefaultApi.md#postUtilsRemoteMetaProxyGet) | **GET** /post/utils/remote-meta-proxy | 
[**postUtilsRemoteMetaProxyOptions**](DefaultApi.md#postUtilsRemoteMetaProxyOptions) | **OPTIONS** /post/utils/remote-meta-proxy | 
[**searchCreativeGet**](DefaultApi.md#searchCreativeGet) | **GET** /search/creative | 
[**searchCreativeOptions**](DefaultApi.md#searchCreativeOptions) | **OPTIONS** /search/creative | 
[**uploadNodeOptions**](DefaultApi.md#uploadNodeOptions) | **OPTIONS** /upload/node | 
[**uploadNodePost**](DefaultApi.md#uploadNodePost) | **POST** /upload/node | 
[**userActivityStreamGet**](DefaultApi.md#userActivityStreamGet) | **GET** /user/activityStream | 
[**userActivityStreamOptions**](DefaultApi.md#userActivityStreamOptions) | **OPTIONS** /user/activityStream | 
[**userAvailabilityGet**](DefaultApi.md#userAvailabilityGet) | **GET** /user/availability | 
[**userAvailabilityOptions**](DefaultApi.md#userAvailabilityOptions) | **OPTIONS** /user/availability | 
[**userCurrentGet**](DefaultApi.md#userCurrentGet) | **GET** /user/current | 
[**userCurrentOptions**](DefaultApi.md#userCurrentOptions) | **OPTIONS** /user/current | 
[**userDelete**](DefaultApi.md#userDelete) | **DELETE** /user | 
[**userGet**](DefaultApi.md#userGet) | **GET** /user | 
[**userInviteOptions**](DefaultApi.md#userInviteOptions) | **OPTIONS** /user/invite | 
[**userInvitePost**](DefaultApi.md#userInvitePost) | **POST** /user/invite | 
[**userListSearchGet**](DefaultApi.md#userListSearchGet) | **GET** /user/list/search | 
[**userListSearchOptions**](DefaultApi.md#userListSearchOptions) | **OPTIONS** /user/list/search | 
[**userListTopGet**](DefaultApi.md#userListTopGet) | **GET** /user/list/top | 
[**userListTopOptions**](DefaultApi.md#userListTopOptions) | **OPTIONS** /user/list/top | 
[**userMoodsGet**](DefaultApi.md#userMoodsGet) | **GET** /user/moods | 
[**userMoodsOptions**](DefaultApi.md#userMoodsOptions) | **OPTIONS** /user/moods | 
[**userOptions**](DefaultApi.md#userOptions) | **OPTIONS** /user | 
[**userPost**](DefaultApi.md#userPost) | **POST** /user | 
[**userPreregisterOptions**](DefaultApi.md#userPreregisterOptions) | **OPTIONS** /user/preregister | 
[**userPreregisterPost**](DefaultApi.md#userPreregisterPost) | **POST** /user/preregister | 
[**userPut**](DefaultApi.md#userPut) | **PUT** /user | 
[**userRatedInGet**](DefaultApi.md#userRatedInGet) | **GET** /user/rated/in | 
[**userRatedInOptions**](DefaultApi.md#userRatedInOptions) | **OPTIONS** /user/rated/in | 
[**userRatedOutPostsGet**](DefaultApi.md#userRatedOutPostsGet) | **GET** /user/rated/out/posts | 
[**userRatedOutPostsOptions**](DefaultApi.md#userRatedOutPostsOptions) | **OPTIONS** /user/rated/out/posts | 
[**userRatedOutUsersGet**](DefaultApi.md#userRatedOutUsersGet) | **GET** /user/rated/out/users | 
[**userRatedOutUsersOptions**](DefaultApi.md#userRatedOutUsersOptions) | **OPTIONS** /user/rated/out/users | 
[**userStakeOptions**](DefaultApi.md#userStakeOptions) | **OPTIONS** /user/stake | 
[**userStakePost**](DefaultApi.md#userStakePost) | **POST** /user/stake | 
[**userSyncContactsOptions**](DefaultApi.md#userSyncContactsOptions) | **OPTIONS** /user/syncContacts | 
[**userSyncContactsPost**](DefaultApi.md#userSyncContactsPost) | **POST** /user/syncContacts | 
[**userUploadOptions**](DefaultApi.md#userUploadOptions) | **OPTIONS** /user/upload | 
[**userUploadPost**](DefaultApi.md#userUploadPost) | **POST** /user/upload | 
[**userUserRateOptions**](DefaultApi.md#userUserRateOptions) | **OPTIONS** /user/userRate | 
[**userUserRatePost**](DefaultApi.md#userUserRatePost) | **POST** /user/userRate | 


# **authCallbackPathGet**
> authCallbackPathGet(path)



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();
var path = path_example; // String | 

try { 
    api_instance.authCallbackPathGet(path);
} catch (e) {
    print("Exception when calling DefaultApi->authCallbackPathGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authCallbackPathOptions**
> authCallbackPathOptions(path)



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();
var path = path_example; // String | 

try { 
    api_instance.authCallbackPathOptions(path);
} catch (e) {
    print("Exception when calling DefaultApi->authCallbackPathOptions: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authProviderPathGet**
> authProviderPathGet(path)



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();
var path = path_example; // String | 

try { 
    api_instance.authProviderPathGet(path);
} catch (e) {
    print("Exception when calling DefaultApi->authProviderPathGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authProviderPathOptions**
> authProviderPathOptions(path)



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();
var path = path_example; // String | 

try { 
    api_instance.authProviderPathOptions(path);
} catch (e) {
    print("Exception when calling DefaultApi->authProviderPathOptions: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **folderGet**
> MoodReadResponse folderGet(id)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 

try { 
    var result = api_instance.folderGet(id);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->folderGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 

### Return type

[**MoodReadResponse**](MoodReadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **folderOptions**
> folderOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.folderOptions();
} catch (e) {
    print("Exception when calling DefaultApi->folderOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **infoAuthGet**
> infoAuthGet()



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();

try { 
    api_instance.infoAuthGet();
} catch (e) {
    print("Exception when calling DefaultApi->infoAuthGet: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **infoAuthOptions**
> infoAuthOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.infoAuthOptions();
} catch (e) {
    print("Exception when calling DefaultApi->infoAuthOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **infoGet**
> infoGet()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.infoGet();
} catch (e) {
    print("Exception when calling DefaultApi->infoGet: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **infoOptions**
> infoOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.infoOptions();
} catch (e) {
    print("Exception when calling DefaultApi->infoOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodAttachPostOptions**
> moodAttachPostOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.moodAttachPostOptions();
} catch (e) {
    print("Exception when calling DefaultApi->moodAttachPostOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodAttachPostPut**
> PostReadResponse moodAttachPostPut(moodAttachRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var moodAttachRequest = new MoodAttachRequest(); // MoodAttachRequest | 

try { 
    var result = api_instance.moodAttachPostPut(moodAttachRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodAttachPostPut: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moodAttachRequest** | [**MoodAttachRequest**](MoodAttachRequest.md)|  | 

### Return type

[**PostReadResponse**](PostReadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodGet**
> MoodReadResponse moodGet(id)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 

try { 
    var result = api_instance.moodGet(id);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 

### Return type

[**MoodReadResponse**](MoodReadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodListTopGet**
> MoodPagedListReadPublicResponse moodListTopGet(direction, contentType, page, orderBy)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var direction = direction_example; // String | 
var contentType = contentType_example; // String | 
var page = page_example; // String | 
var orderBy = orderBy_example; // String | 

try { 
    var result = api_instance.moodListTopGet(direction, contentType, page, orderBy);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodListTopGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**MoodPagedListReadPublicResponse**](MoodPagedListReadPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodListTopOptions**
> moodListTopOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.moodListTopOptions();
} catch (e) {
    print("Exception when calling DefaultApi->moodListTopOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodOptions**
> moodOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.moodOptions();
} catch (e) {
    print("Exception when calling DefaultApi->moodOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodPost**
> MoodCreateResponse moodPost(moodCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var moodCreateRequest = new MoodCreateRequest(); // MoodCreateRequest | 

try { 
    var result = api_instance.moodPost(moodCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moodCreateRequest** | [**MoodCreateRequest**](MoodCreateRequest.md)|  | 

### Return type

[**MoodCreateResponse**](MoodCreateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodPostsGet**
> MoodListAttachedPostsResponse moodPostsGet(id, page)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 
var page = page_example; // String | 

try { 
    var result = api_instance.moodPostsGet(id, page);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodPostsGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 

### Return type

[**MoodListAttachedPostsResponse**](MoodListAttachedPostsResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodPostsOptions**
> moodPostsOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.moodPostsOptions();
} catch (e) {
    print("Exception when calling DefaultApi->moodPostsOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodPut**
> MoodReadResponse moodPut(moodUpdateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var moodUpdateRequest = new MoodUpdateRequest(); // MoodUpdateRequest | 

try { 
    var result = api_instance.moodPut(moodUpdateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodPut: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moodUpdateRequest** | [**MoodUpdateRequest**](MoodUpdateRequest.md)|  | 

### Return type

[**MoodReadResponse**](MoodReadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodRateOptions**
> moodRateOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.moodRateOptions();
} catch (e) {
    print("Exception when calling DefaultApi->moodRateOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodRatePost**
> RatingUpdateResponse moodRatePost(ratingUpdateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var ratingUpdateRequest = new RatingUpdateRequest(); // RatingUpdateRequest | 

try { 
    var result = api_instance.moodRatePost(ratingUpdateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodRatePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingUpdateRequest** | [**RatingUpdateRequest**](RatingUpdateRequest.md)|  | 

### Return type

[**RatingUpdateResponse**](RatingUpdateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodUploadOptions**
> moodUploadOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.moodUploadOptions();
} catch (e) {
    print("Exception when calling DefaultApi->moodUploadOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moodUploadPost**
> UploadResponse moodUploadPost(uploadRequestGeneric)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var uploadRequestGeneric = new UploadRequestGeneric(); // UploadRequestGeneric | 

try { 
    var result = api_instance.moodUploadPost(uploadRequestGeneric);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->moodUploadPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadRequestGeneric** | [**UploadRequestGeneric**](UploadRequestGeneric.md)|  | 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcaccopenOptions**
> newcoinBcaccopenOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcaccopenOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcaccopenOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcaccopenPost**
> BcTxResponse newcoinBcaccopenPost(bcAccCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcAccCreateRequest = new BcAccCreateRequest(); // BcAccCreateRequest | 

try { 
    var result = api_instance.newcoinBcaccopenPost(bcAccCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcaccopenPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcAccCreateRequest** | [**BcAccCreateRequest**](BcAccCreateRequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcauthethOptions**
> newcoinBcauthethOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcauthethOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcauthethOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcauthethPost**
> BcAuthEthResponse newcoinBcauthethPost(bcAuthEthRequest)



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();
var bcAuthEthRequest = new BcAuthEthRequest(); // BcAuthEthRequest | 

try { 
    var result = api_instance.newcoinBcauthethPost(bcAuthEthRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcauthethPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcAuthEthRequest** | [**BcAuthEthRequest**](BcAuthEthRequest.md)|  | 

### Return type

[**BcAuthEthResponse**](BcAuthEthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBccolcreateOptions**
> newcoinBccolcreateOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBccolcreateOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBccolcreateOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBccolcreatePost**
> BcTxResponse newcoinBccolcreatePost(bcCollectionCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcCollectionCreateRequest = new BcCollectionCreateRequest(); // BcCollectionCreateRequest | 

try { 
    var result = api_instance.newcoinBccolcreatePost(bcCollectionCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBccolcreatePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcCollectionCreateRequest** | [**BcCollectionCreateRequest**](BcCollectionCreateRequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcgetaccOptions**
> newcoinBcgetaccOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcgetaccOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcgetaccOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcgetaccPost**
> BcGetInfoResp newcoinBcgetaccPost(bcGetAccountInfo)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcGetAccountInfo = new BcGetAccountInfo(); // BcGetAccountInfo | 

try { 
    var result = api_instance.newcoinBcgetaccPost(bcGetAccountInfo);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcgetaccPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcGetAccountInfo** | [**BcGetAccountInfo**](BcGetAccountInfo.md)|  | 

### Return type

[**BcGetInfoResp**](BcGetInfoResp.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcgetpoolOptions**
> newcoinBcgetpoolOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcgetpoolOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcgetpoolOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcgetpoolPost**
> BcGetInfoResp newcoinBcgetpoolPost(bcGetPoolInfo)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcGetPoolInfo = new BcGetPoolInfo(); // BcGetPoolInfo | 

try { 
    var result = api_instance.newcoinBcgetpoolPost(bcGetPoolInfo);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcgetpoolPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcGetPoolInfo** | [**BcGetPoolInfo**](BcGetPoolInfo.md)|  | 

### Return type

[**BcGetInfoResp**](BcGetInfoResp.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBckeypairOptions**
> newcoinBckeypairOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBckeypairOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBckeypairOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBckeypairPost**
> BcKeyPairCreateResponse newcoinBckeypairPost(bcKeyPairCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcKeyPairCreateRequest = new BcKeyPairCreateRequest(); // BcKeyPairCreateRequest | 

try { 
    var result = api_instance.newcoinBckeypairPost(bcKeyPairCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBckeypairPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcKeyPairCreateRequest** | [**BcKeyPairCreateRequest**](BcKeyPairCreateRequest.md)|  | 

### Return type

[**BcKeyPairCreateResponse**](BcKeyPairCreateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmaindaodldunstakeOptions**
> newcoinBcmaindaodldunstakeOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcmaindaodldunstakeOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmaindaodldunstakeOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmaindaodldunstakePost**
> BcTxResponse newcoinBcmaindaodldunstakePost(bcStakeMainDAORequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcStakeMainDAORequest = new BcStakeMainDAORequest(); // BcStakeMainDAORequest | 

try { 
    var result = api_instance.newcoinBcmaindaodldunstakePost(bcStakeMainDAORequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmaindaodldunstakePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcStakeMainDAORequest** | [**BcStakeMainDAORequest**](BcStakeMainDAORequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmaindaoinstunstakeOptions**
> newcoinBcmaindaoinstunstakeOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcmaindaoinstunstakeOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmaindaoinstunstakeOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmaindaoinstunstakePost**
> BcTxResponse newcoinBcmaindaoinstunstakePost(bcStakePoolRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcStakePoolRequest = new BcStakePoolRequest(); // BcStakePoolRequest | 

try { 
    var result = api_instance.newcoinBcmaindaoinstunstakePost(bcStakePoolRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmaindaoinstunstakePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcStakePoolRequest** | [**BcStakePoolRequest**](BcStakePoolRequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmaindaostakeOptions**
> newcoinBcmaindaostakeOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcmaindaostakeOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmaindaostakeOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmaindaostakePost**
> BcTxResponse newcoinBcmaindaostakePost(bcStakeMainDAORequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcStakeMainDAORequest = new BcStakeMainDAORequest(); // BcStakeMainDAORequest | 

try { 
    var result = api_instance.newcoinBcmaindaostakePost(bcStakeMainDAORequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmaindaostakePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcStakeMainDAORequest** | [**BcStakeMainDAORequest**](BcStakeMainDAORequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmintassetOptions**
> newcoinBcmintassetOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcmintassetOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmintassetOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcmintassetPost**
> BcTxResponse newcoinBcmintassetPost(bcMintAssetRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcMintAssetRequest = new BcMintAssetRequest(); // BcMintAssetRequest | 

try { 
    var result = api_instance.newcoinBcmintassetPost(bcMintAssetRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcmintassetPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcMintAssetRequest** | [**BcMintAssetRequest**](BcMintAssetRequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcpoolcreateOptions**
> newcoinBcpoolcreateOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcpoolcreateOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcpoolcreateOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcpoolcreatePost**
> BcTxResponse newcoinBcpoolcreatePost(bcPoolCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcPoolCreateRequest = new BcPoolCreateRequest(); // BcPoolCreateRequest | 

try { 
    var result = api_instance.newcoinBcpoolcreatePost(bcPoolCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcpoolcreatePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcPoolCreateRequest** | [**BcPoolCreateRequest**](BcPoolCreateRequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcpoolstakeOptions**
> newcoinBcpoolstakeOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinBcpoolstakeOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcpoolstakeOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinBcpoolstakePost**
> BcTxResponse newcoinBcpoolstakePost(bcStakePoolRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcStakePoolRequest = new BcStakePoolRequest(); // BcStakePoolRequest | 

try { 
    var result = api_instance.newcoinBcpoolstakePost(bcStakePoolRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinBcpoolstakePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcStakePoolRequest** | [**BcStakePoolRequest**](BcStakePoolRequest.md)|  | 

### Return type

[**BcTxResponse**](BcTxResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoCreateOptions**
> newcoinDaoCreateOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoCreateOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoCreateOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoCreatePost**
> BcCreateDaoResponse newcoinDaoCreatePost(bcCreateDaoRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcCreateDaoRequest = new BcCreateDaoRequest(); // BcCreateDaoRequest | 

try { 
    var result = api_instance.newcoinDaoCreatePost(bcCreateDaoRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoCreatePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcCreateDaoRequest** | [**BcCreateDaoRequest**](BcCreateDaoRequest.md)|  | 

### Return type

[**BcCreateDaoResponse**](BcCreateDaoResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalApproveOptions**
> newcoinDaoProposalApproveOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalApproveOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalApproveOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalApprovePost**
> newcoinDaoProposalApprovePost(bcApproveDaoProposalRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcApproveDaoProposalRequest = new BcApproveDaoProposalRequest(); // BcApproveDaoProposalRequest | 

try { 
    api_instance.newcoinDaoProposalApprovePost(bcApproveDaoProposalRequest);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalApprovePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcApproveDaoProposalRequest** | [**BcApproveDaoProposalRequest**](BcApproveDaoProposalRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalExecuteOptions**
> newcoinDaoProposalExecuteOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalExecuteOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalExecuteOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalExecutePost**
> BcDaoProposalExecuteResponse newcoinDaoProposalExecutePost(bcDaoProposalExecuteRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcDaoProposalExecuteRequest = new BcDaoProposalExecuteRequest(); // BcDaoProposalExecuteRequest | 

try { 
    var result = api_instance.newcoinDaoProposalExecutePost(bcDaoProposalExecuteRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalExecutePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcDaoProposalExecuteRequest** | [**BcDaoProposalExecuteRequest**](BcDaoProposalExecuteRequest.md)|  | 

### Return type

[**BcDaoProposalExecuteResponse**](BcDaoProposalExecuteResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalListGet**
> BcListDaoProposalsResponse newcoinDaoProposalListGet(reverse, proposalAuthor, daoOwner, daoId, limit, lowerBound, upperBound, id)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var reverse = reverse_example; // String | 
var proposalAuthor = proposalAuthor_example; // String | 
var daoOwner = daoOwner_example; // String | 
var daoId = daoId_example; // String | 
var limit = limit_example; // String | 
var lowerBound = lowerBound_example; // String | 
var upperBound = upperBound_example; // String | 
var id = id_example; // String | 

try { 
    var result = api_instance.newcoinDaoProposalListGet(reverse, proposalAuthor, daoOwner, daoId, limit, lowerBound, upperBound, id);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalListGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reverse** | **String**|  | [optional] 
 **proposalAuthor** | **String**|  | [optional] 
 **daoOwner** | **String**|  | [optional] 
 **daoId** | **String**|  | [optional] 
 **limit** | **String**|  | [optional] 
 **lowerBound** | **String**|  | [optional] 
 **upperBound** | **String**|  | [optional] 
 **id** | **String**|  | [optional] 

### Return type

[**BcListDaoProposalsResponse**](BcListDaoProposalsResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalListOptions**
> newcoinDaoProposalListOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalListOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalListOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalOptions**
> newcoinDaoProposalOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalPost**
> newcoinDaoProposalPost(bcCreateDaoProposal)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcCreateDaoProposal = new BcCreateDaoProposal(); // BcCreateDaoProposal | 

try { 
    api_instance.newcoinDaoProposalPost(bcCreateDaoProposal);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcCreateDaoProposal** | [**BcCreateDaoProposal**](BcCreateDaoProposal.md)|  | 

### Return type

void (empty response body)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalVoteOptions**
> newcoinDaoProposalVoteOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalVoteOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalVoteOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalVotePost**
> BcListDaoProposalsResponse newcoinDaoProposalVotePost(bcDaoProposalVoteRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcDaoProposalVoteRequest = new BcDaoProposalVoteRequest(); // BcDaoProposalVoteRequest | 

try { 
    var result = api_instance.newcoinDaoProposalVotePost(bcDaoProposalVoteRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalVotePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcDaoProposalVoteRequest** | [**BcDaoProposalVoteRequest**](BcDaoProposalVoteRequest.md)|  | 

### Return type

[**BcListDaoProposalsResponse**](BcListDaoProposalsResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalVotesGet**
> BcDaoProposalVoteResponse newcoinDaoProposalVotesGet(reverse, limit, upperBound, voter, lowerBound, voteId)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var reverse = reverse_example; // String | 
var limit = limit_example; // String | 
var upperBound = upperBound_example; // String | 
var voter = voter_example; // String | 
var lowerBound = lowerBound_example; // String | 
var voteId = voteId_example; // String | 

try { 
    var result = api_instance.newcoinDaoProposalVotesGet(reverse, limit, upperBound, voter, lowerBound, voteId);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalVotesGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reverse** | **String**|  | [optional] 
 **limit** | **String**|  | [optional] 
 **upperBound** | **String**|  | [optional] 
 **voter** | **String**|  | [optional] 
 **lowerBound** | **String**|  | [optional] 
 **voteId** | **String**|  | [optional] 

### Return type

[**BcDaoProposalVoteResponse**](BcDaoProposalVoteResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalVotesOptions**
> newcoinDaoProposalVotesOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalVotesOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalVotesOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistApproveOptions**
> newcoinDaoProposalWhitelistApproveOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalWhitelistApproveOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistApproveOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistApprovePost**
> newcoinDaoProposalWhitelistApprovePost(bcApproveDaoProposalRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcApproveDaoProposalRequest = new BcApproveDaoProposalRequest(); // BcApproveDaoProposalRequest | 

try { 
    api_instance.newcoinDaoProposalWhitelistApprovePost(bcApproveDaoProposalRequest);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistApprovePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcApproveDaoProposalRequest** | [**BcApproveDaoProposalRequest**](BcApproveDaoProposalRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistExecuteOptions**
> newcoinDaoProposalWhitelistExecuteOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalWhitelistExecuteOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistExecuteOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistExecutePost**
> BcDaoProposalExecuteResponse newcoinDaoProposalWhitelistExecutePost(bcDaoProposalExecuteRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcDaoProposalExecuteRequest = new BcDaoProposalExecuteRequest(); // BcDaoProposalExecuteRequest | 

try { 
    var result = api_instance.newcoinDaoProposalWhitelistExecutePost(bcDaoProposalExecuteRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistExecutePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcDaoProposalExecuteRequest** | [**BcDaoProposalExecuteRequest**](BcDaoProposalExecuteRequest.md)|  | 

### Return type

[**BcDaoProposalExecuteResponse**](BcDaoProposalExecuteResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistListGet**
> BcListDaoProposalsResponse newcoinDaoProposalWhitelistListGet(reverse, proposalAuthor, daoOwner, daoId, limit, lowerBound, upperBound, id)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var reverse = reverse_example; // String | 
var proposalAuthor = proposalAuthor_example; // String | 
var daoOwner = daoOwner_example; // String | 
var daoId = daoId_example; // String | 
var limit = limit_example; // String | 
var lowerBound = lowerBound_example; // String | 
var upperBound = upperBound_example; // String | 
var id = id_example; // String | 

try { 
    var result = api_instance.newcoinDaoProposalWhitelistListGet(reverse, proposalAuthor, daoOwner, daoId, limit, lowerBound, upperBound, id);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistListGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reverse** | **String**|  | [optional] 
 **proposalAuthor** | **String**|  | [optional] 
 **daoOwner** | **String**|  | [optional] 
 **daoId** | **String**|  | [optional] 
 **limit** | **String**|  | [optional] 
 **lowerBound** | **String**|  | [optional] 
 **upperBound** | **String**|  | [optional] 
 **id** | **String**|  | [optional] 

### Return type

[**BcListDaoProposalsResponse**](BcListDaoProposalsResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistListOptions**
> newcoinDaoProposalWhitelistListOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalWhitelistListOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistListOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistOptions**
> newcoinDaoProposalWhitelistOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoProposalWhitelistOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoProposalWhitelistPost**
> newcoinDaoProposalWhitelistPost(bcCreateWhitelistDaoProposal)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcCreateWhitelistDaoProposal = new BcCreateWhitelistDaoProposal(); // BcCreateWhitelistDaoProposal | 

try { 
    api_instance.newcoinDaoProposalWhitelistPost(bcCreateWhitelistDaoProposal);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoProposalWhitelistPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcCreateWhitelistDaoProposal** | [**BcCreateWhitelistDaoProposal**](BcCreateWhitelistDaoProposal.md)|  | 

### Return type

void (empty response body)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoWhitelistGet**
> BcListDaoWhitelistResponse newcoinDaoWhitelistGet(reverse, daoOwner, daoId, limit, upperBound, lowerBound)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var reverse = reverse_example; // String | 
var daoOwner = daoOwner_example; // String | 
var daoId = daoId_example; // String | 
var limit = limit_example; // String | 
var upperBound = upperBound_example; // String | 
var lowerBound = lowerBound_example; // String | 

try { 
    var result = api_instance.newcoinDaoWhitelistGet(reverse, daoOwner, daoId, limit, upperBound, lowerBound);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoWhitelistGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reverse** | **String**|  | [optional] 
 **daoOwner** | **String**|  | [optional] 
 **daoId** | **String**|  | [optional] 
 **limit** | **String**|  | [optional] 
 **upperBound** | **String**|  | [optional] 
 **lowerBound** | **String**|  | [optional] 

### Return type

[**BcListDaoWhitelistResponse**](BcListDaoWhitelistResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoWhitelistOptions**
> newcoinDaoWhitelistOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoWhitelistOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoWhitelistOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoWithdrawVoteDepositOptions**
> newcoinDaoWithdrawVoteDepositOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.newcoinDaoWithdrawVoteDepositOptions();
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoWithdrawVoteDepositOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newcoinDaoWithdrawVoteDepositPost**
> BcDaoWidthdrawVoteDepositResponse newcoinDaoWithdrawVoteDepositPost(bcDaoWidthdrawVoteDepositRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var bcDaoWidthdrawVoteDepositRequest = new BcDaoWidthdrawVoteDepositRequest(); // BcDaoWidthdrawVoteDepositRequest | 

try { 
    var result = api_instance.newcoinDaoWithdrawVoteDepositPost(bcDaoWidthdrawVoteDepositRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->newcoinDaoWithdrawVoteDepositPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bcDaoWidthdrawVoteDepositRequest** | [**BcDaoWidthdrawVoteDepositRequest**](BcDaoWidthdrawVoteDepositRequest.md)|  | 

### Return type

[**BcDaoWidthdrawVoteDepositResponse**](BcDaoWidthdrawVoteDepositResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentStripeIntentOptions**
> paymentStripeIntentOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.paymentStripeIntentOptions();
} catch (e) {
    print("Exception when calling DefaultApi->paymentStripeIntentOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentStripeIntentPost**
> PaymentStripePaymentIntentCreateResponse paymentStripeIntentPost(paymentStripePaymentIntentCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var paymentStripePaymentIntentCreateRequest = new PaymentStripePaymentIntentCreateRequest(); // PaymentStripePaymentIntentCreateRequest | 

try { 
    var result = api_instance.paymentStripeIntentPost(paymentStripePaymentIntentCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->paymentStripeIntentPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentStripePaymentIntentCreateRequest** | [**PaymentStripePaymentIntentCreateRequest**](PaymentStripePaymentIntentCreateRequest.md)|  | 

### Return type

[**PaymentStripePaymentIntentCreateResponse**](PaymentStripePaymentIntentCreateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentStripeSubscriptionPaymentOptions**
> paymentStripeSubscriptionPaymentOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.paymentStripeSubscriptionPaymentOptions();
} catch (e) {
    print("Exception when calling DefaultApi->paymentStripeSubscriptionPaymentOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentStripeSubscriptionPaymentPost**
> paymentStripeSubscriptionPaymentPost()



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();

try { 
    api_instance.paymentStripeSubscriptionPaymentPost();
} catch (e) {
    print("Exception when calling DefaultApi->paymentStripeSubscriptionPaymentPost: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentStripeWebhookOptions**
> paymentStripeWebhookOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.paymentStripeWebhookOptions();
} catch (e) {
    print("Exception when calling DefaultApi->paymentStripeWebhookOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentStripeWebhookPost**
> paymentStripeWebhookPost(paymentStripeWebhookRequest)



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();
var paymentStripeWebhookRequest = new PaymentStripeWebhookRequest(); // PaymentStripeWebhookRequest | 

try { 
    api_instance.paymentStripeWebhookPost(paymentStripeWebhookRequest);
} catch (e) {
    print("Exception when calling DefaultApi->paymentStripeWebhookPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentStripeWebhookRequest** | [**PaymentStripeWebhookRequest**](PaymentStripeWebhookRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGet**
> PostReadResponse postGet(id)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 

try { 
    var result = api_instance.postGet(id);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 

### Return type

[**PostReadResponse**](PostReadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postListSearchGet**
> PostPagedListReadPublicResponse postListSearchGet(direction, contentType, page, orderBy, q)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var direction = direction_example; // String | 
var contentType = contentType_example; // String | 
var page = page_example; // String | 
var orderBy = orderBy_example; // String | 
var q = q_example; // String | 

try { 
    var result = api_instance.postListSearchGet(direction, contentType, page, orderBy, q);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postListSearchGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **q** | **String**|  | [optional] 

### Return type

[**PostPagedListReadPublicResponse**](PostPagedListReadPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postListSearchOptions**
> postListSearchOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postListSearchOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postListSearchOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postListTagsSearchGet**
> PostTagsSearchPublicResponse postListTagsSearchGet(direction, contentType, page, orderBy, q)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var direction = direction_example; // String | 
var contentType = contentType_example; // String | 
var page = page_example; // String | 
var orderBy = orderBy_example; // String | 
var q = q_example; // String | 

try { 
    var result = api_instance.postListTagsSearchGet(direction, contentType, page, orderBy, q);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postListTagsSearchGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **q** | **String**|  | [optional] 

### Return type

[**PostTagsSearchPublicResponse**](PostTagsSearchPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postListTagsSearchOptions**
> postListTagsSearchOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postListTagsSearchOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postListTagsSearchOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postListTopGet**
> PostPagedListReadPublicResponse postListTopGet(direction, contentType, page, orderBy)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var direction = direction_example; // String | 
var contentType = contentType_example; // String | 
var page = page_example; // String | 
var orderBy = orderBy_example; // String | 

try { 
    var result = api_instance.postListTopGet(direction, contentType, page, orderBy);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postListTopGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**PostPagedListReadPublicResponse**](PostPagedListReadPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postListTopOptions**
> postListTopOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postListTopOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postListTopOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postOptions**
> postOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPost**
> PostCreateResponse postPost(postCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var postCreateRequest = new PostCreateRequest(); // PostCreateRequest | 

try { 
    var result = api_instance.postPost(postCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postCreateRequest** | [**PostCreateRequest**](PostCreateRequest.md)|  | 

### Return type

[**PostCreateResponse**](PostCreateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPut**
> PostReadResponse postPut(postUpdateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var postUpdateRequest = new PostUpdateRequest(); // PostUpdateRequest | 

try { 
    var result = api_instance.postPut(postUpdateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postPut: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUpdateRequest** | [**PostUpdateRequest**](PostUpdateRequest.md)|  | 

### Return type

[**PostReadResponse**](PostReadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRateOptions**
> postRateOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postRateOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postRateOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRatePost**
> RatingUpdateResponse postRatePost(ratingUpdateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var ratingUpdateRequest = new RatingUpdateRequest(); // RatingUpdateRequest | 

try { 
    var result = api_instance.postRatePost(ratingUpdateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postRatePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingUpdateRequest** | [**RatingUpdateRequest**](RatingUpdateRequest.md)|  | 

### Return type

[**RatingUpdateResponse**](RatingUpdateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postReportOptions**
> postReportOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postReportOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postReportOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postReportPost**
> ReportUpdateResponse postReportPost(reportUpdateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var reportUpdateRequest = new ReportUpdateRequest(); // ReportUpdateRequest | 

try { 
    var result = api_instance.postReportPost(reportUpdateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postReportPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportUpdateRequest** | [**ReportUpdateRequest**](ReportUpdateRequest.md)|  | 

### Return type

[**ReportUpdateResponse**](ReportUpdateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUploadOptions**
> postUploadOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postUploadOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postUploadOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUploadPost**
> UploadResponse postUploadPost(uploadRequestGeneric)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var uploadRequestGeneric = new UploadRequestGeneric(); // UploadRequestGeneric | 

try { 
    var result = api_instance.postUploadPost(uploadRequestGeneric);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postUploadPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadRequestGeneric** | [**UploadRequestGeneric**](UploadRequestGeneric.md)|  | 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUtilsRemoteMetaProxyGet**
> PostRemoteMetaProxyResponse postUtilsRemoteMetaProxyGet(url)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var url = url_example; // String | 

try { 
    var result = api_instance.postUtilsRemoteMetaProxyGet(url);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->postUtilsRemoteMetaProxyGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**|  | [optional] 

### Return type

[**PostRemoteMetaProxyResponse**](PostRemoteMetaProxyResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUtilsRemoteMetaProxyOptions**
> postUtilsRemoteMetaProxyOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.postUtilsRemoteMetaProxyOptions();
} catch (e) {
    print("Exception when calling DefaultApi->postUtilsRemoteMetaProxyOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCreativeGet**
> CreativeSearchResponse searchCreativeGet(aesthetics, tags, page)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var aesthetics = aesthetics_example; // String | 
var tags = tags_example; // String | 
var page = page_example; // String | 

try { 
    var result = api_instance.searchCreativeGet(aesthetics, tags, page);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->searchCreativeGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aesthetics** | **String**|  | [optional] 
 **tags** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 

### Return type

[**CreativeSearchResponse**](CreativeSearchResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCreativeOptions**
> searchCreativeOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.searchCreativeOptions();
} catch (e) {
    print("Exception when calling DefaultApi->searchCreativeOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadNodeOptions**
> uploadNodeOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.uploadNodeOptions();
} catch (e) {
    print("Exception when calling DefaultApi->uploadNodeOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadNodePost**
> UploadResponse uploadNodePost(uploadRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var uploadRequest = new UploadRequest(); // UploadRequest | 

try { 
    var result = api_instance.uploadNodePost(uploadRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->uploadNodePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadRequest** | [**UploadRequest**](UploadRequest.md)|  | 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userActivityStreamGet**
> AnyResponse userActivityStreamGet(after, limit)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var after = after_example; // String | 
var limit = limit_example; // String | 

try { 
    var result = api_instance.userActivityStreamGet(after, limit);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userActivityStreamGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **String**|  | [optional] 
 **limit** | **String**|  | [optional] 

### Return type

[**AnyResponse**](AnyResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userActivityStreamOptions**
> userActivityStreamOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userActivityStreamOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userActivityStreamOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userAvailabilityGet**
> UserAvailabilityResponse userAvailabilityGet(username)



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();
var username = username_example; // String | 

try { 
    var result = api_instance.userAvailabilityGet(username);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userAvailabilityGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | [optional] 

### Return type

[**UserAvailabilityResponse**](UserAvailabilityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userAvailabilityOptions**
> userAvailabilityOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userAvailabilityOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userAvailabilityOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userCurrentGet**
> UserReadPrivateResponse userCurrentGet()



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();

try { 
    var result = api_instance.userCurrentGet();
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userCurrentGet: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserReadPrivateResponse**](UserReadPrivateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userCurrentOptions**
> userCurrentOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userCurrentOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userCurrentOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userDelete**
> OkResponse userDelete(userDeleteRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var userDeleteRequest = new UserDeleteRequest(); // UserDeleteRequest | 

try { 
    var result = api_instance.userDelete(userDeleteRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userDelete: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDeleteRequest** | [**UserDeleteRequest**](UserDeleteRequest.md)|  | 

### Return type

[**OkResponse**](OkResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userGet**
> UserReadPublicResponse userGet(username, id)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var username = username_example; // String | 
var id = id_example; // String | 

try { 
    var result = api_instance.userGet(username, id);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | [optional] 
 **id** | **String**|  | [optional] 

### Return type

[**UserReadPublicResponse**](UserReadPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInviteOptions**
> userInviteOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userInviteOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userInviteOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInvitePost**
> OkResponse userInvitePost(userInviteRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var userInviteRequest = new UserInviteRequest(); // UserInviteRequest | 

try { 
    var result = api_instance.userInvitePost(userInviteRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userInvitePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInviteRequest** | [**UserInviteRequest**](UserInviteRequest.md)|  | 

### Return type

[**OkResponse**](OkResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userListSearchGet**
> UserPagedListReadPublicResponse userListSearchGet(direction, contentType, page, orderBy, q)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var direction = direction_example; // String | 
var contentType = contentType_example; // String | 
var page = page_example; // String | 
var orderBy = orderBy_example; // String | 
var q = q_example; // String | 

try { 
    var result = api_instance.userListSearchGet(direction, contentType, page, orderBy, q);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userListSearchGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **q** | **String**|  | [optional] 

### Return type

[**UserPagedListReadPublicResponse**](UserPagedListReadPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userListSearchOptions**
> userListSearchOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userListSearchOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userListSearchOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userListTopGet**
> UserPagedListReadPublicResponse userListTopGet(direction, contentType, page, orderBy)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var direction = direction_example; // String | 
var contentType = contentType_example; // String | 
var page = page_example; // String | 
var orderBy = orderBy_example; // String | 

try { 
    var result = api_instance.userListTopGet(direction, contentType, page, orderBy);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userListTopGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**UserPagedListReadPublicResponse**](UserPagedListReadPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userListTopOptions**
> userListTopOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userListTopOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userListTopOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userMoodsGet**
> MoodPagedListReadPublicResponse userMoodsGet(id, page)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 
var page = page_example; // String | 

try { 
    var result = api_instance.userMoodsGet(id, page);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userMoodsGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 

### Return type

[**MoodPagedListReadPublicResponse**](MoodPagedListReadPublicResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userMoodsOptions**
> userMoodsOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userMoodsOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userMoodsOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userOptions**
> userOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userPost**
> UserReadPrivateResponse userPost(userCreateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var userCreateRequest = new UserCreateRequest(); // UserCreateRequest | 

try { 
    var result = api_instance.userPost(userCreateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateRequest** | [**UserCreateRequest**](UserCreateRequest.md)|  | 

### Return type

[**UserReadPrivateResponse**](UserReadPrivateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userPreregisterOptions**
> userPreregisterOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userPreregisterOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userPreregisterOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userPreregisterPost**
> UserReadPrivateResponse userPreregisterPost(userPreRegisterRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var userPreRegisterRequest = new UserPreRegisterRequest(); // UserPreRegisterRequest | 

try { 
    var result = api_instance.userPreregisterPost(userPreRegisterRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userPreregisterPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userPreRegisterRequest** | [**UserPreRegisterRequest**](UserPreRegisterRequest.md)|  | 

### Return type

[**UserReadPrivateResponse**](UserReadPrivateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userPut**
> UserReadPrivateResponse userPut(userUpdateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var userUpdateRequest = new UserUpdateRequest(); // UserUpdateRequest | 

try { 
    var result = api_instance.userPut(userUpdateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userPut: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdateRequest** | [**UserUpdateRequest**](UserUpdateRequest.md)|  | 

### Return type

[**UserReadPrivateResponse**](UserReadPrivateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userRatedInGet**
> PagedRatedResponseUser userRatedInGet(id, page)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 
var page = page_example; // String | 

try { 
    var result = api_instance.userRatedInGet(id, page);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userRatedInGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 

### Return type

[**PagedRatedResponseUser**](PagedRatedResponseUser.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userRatedInOptions**
> userRatedInOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userRatedInOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userRatedInOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userRatedOutPostsGet**
> PagedRatedResponsePost userRatedOutPostsGet(id, page)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 
var page = page_example; // String | 

try { 
    var result = api_instance.userRatedOutPostsGet(id, page);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userRatedOutPostsGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 

### Return type

[**PagedRatedResponsePost**](PagedRatedResponsePost.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userRatedOutPostsOptions**
> userRatedOutPostsOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userRatedOutPostsOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userRatedOutPostsOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userRatedOutUsersGet**
> PagedRatedResponseUser userRatedOutUsersGet(id, page)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var id = id_example; // String | 
var page = page_example; // String | 

try { 
    var result = api_instance.userRatedOutUsersGet(id, page);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userRatedOutUsersGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 

### Return type

[**PagedRatedResponseUser**](PagedRatedResponseUser.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userRatedOutUsersOptions**
> userRatedOutUsersOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userRatedOutUsersOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userRatedOutUsersOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userStakeOptions**
> userStakeOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userStakeOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userStakeOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userStakePost**
> AnyResponse userStakePost(userStakeRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var userStakeRequest = new UserStakeRequest(); // UserStakeRequest | 

try { 
    var result = api_instance.userStakePost(userStakeRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userStakePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userStakeRequest** | [**UserStakeRequest**](UserStakeRequest.md)|  | 

### Return type

[**AnyResponse**](AnyResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userSyncContactsOptions**
> userSyncContactsOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userSyncContactsOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userSyncContactsOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userSyncContactsPost**
> SyncContactsResponse userSyncContactsPost(syncContactsRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var syncContactsRequest = new SyncContactsRequest(); // SyncContactsRequest | 

try { 
    var result = api_instance.userSyncContactsPost(syncContactsRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userSyncContactsPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **syncContactsRequest** | [**SyncContactsRequest**](SyncContactsRequest.md)|  | 

### Return type

[**SyncContactsResponse**](SyncContactsResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userUploadOptions**
> userUploadOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userUploadOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userUploadOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userUploadPost**
> UploadResponse userUploadPost(userUploadRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var userUploadRequest = new UserUploadRequest(); // UserUploadRequest | 

try { 
    var result = api_instance.userUploadPost(userUploadRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userUploadPost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUploadRequest** | [**UserUploadRequest**](UserUploadRequest.md)|  | 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userUserRateOptions**
> userUserRateOptions()



### Example 
```dart
import 'package:swagger/api.dart';

var api_instance = new DefaultApi();

try { 
    api_instance.userUserRateOptions();
} catch (e) {
    print("Exception when calling DefaultApi->userUserRateOptions: $e\n");
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userUserRatePost**
> RatingUpdateResponse userUserRatePost(ratingUpdateRequest)



### Example 
```dart
import 'package:swagger/api.dart';
// TODO Configure API key authorization: newlife-creator-api-eu-dev
//swagger.api.Configuration.apiKey{'Authorization'} = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//swagger.api.Configuration.apiKeyPrefix{'Authorization'} = "Bearer";

var api_instance = new DefaultApi();
var ratingUpdateRequest = new RatingUpdateRequest(); // RatingUpdateRequest | 

try { 
    var result = api_instance.userUserRatePost(ratingUpdateRequest);
    print(result);
} catch (e) {
    print("Exception when calling DefaultApi->userUserRatePost: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingUpdateRequest** | [**RatingUpdateRequest**](RatingUpdateRequest.md)|  | 

### Return type

[**RatingUpdateResponse**](RatingUpdateResponse.md)

### Authorization

[newlife-creator-api-eu-dev](../README.md#newlife-creator-api-eu-dev)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

