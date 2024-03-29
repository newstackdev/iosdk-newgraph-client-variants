# IO.Swagger - the C# library for the newgraph-api-eu-dev

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

This C# SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2022-10-04T15:34:01Z
- SDK version: 1.0.0
- Build package: io.swagger.codegen.languages.CSharpClientCodegen

<a name="frameworks-supported"></a>
## Frameworks supported
- .NET 4.0 or later
- Windows Phone 7.1 (Mango)

<a name="dependencies"></a>
## Dependencies
- [RestSharp](https://www.nuget.org/packages/RestSharp) - 105.1.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 7.0.0 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.2.0 or later

The DLLs included in the package may not be the latest version. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
```

NOTE: RestSharp versions greater than 105.1.0 have a bug which causes file uploads to fail. See [RestSharp#742](https://github.com/restsharp/RestSharp/issues/742)

<a name="installation"></a>
## Installation
Run the following command to generate the DLL
- [Mac/Linux] `/bin/sh build.sh`
- [Windows] `build.bat`

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;
```
<a name="packaging"></a>
## Packaging

A `.nuspec` is included with the project. You can follow the Nuget quickstart to [create](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#create-the-package) and [publish](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#publish-the-package) packages.

This `.nuspec` uses placeholders from the `.csproj`, so build the `.csproj` directly:

```
nuget pack -Build -OutputDirectory out IO.Swagger.csproj
```

Then, publish to a [local feed](https://docs.microsoft.com/en-us/nuget/hosting-packages/local-feeds) or [other host](https://docs.microsoft.com/en-us/nuget/hosting-packages/overview) and consume the new package via Nuget as usual.

<a name="getting-started"></a>
## Getting Started

```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Example
    {
        public void main()
        {

            var apiInstance = new DefaultApi();
            var path = path_example;  // string | 

            try
            {
                apiInstance.AuthCallbackPathGet(path);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.AuthCallbackPathGet: " + e.Message );
            }

        }
    }
}
```

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api-eu-dev.newgra.ph/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**AuthCallbackPathGet**](docs/DefaultApi.md#authcallbackpathget) | **GET** /auth/callback/{path+} | 
*DefaultApi* | [**AuthCallbackPathOptions**](docs/DefaultApi.md#authcallbackpathoptions) | **OPTIONS** /auth/callback/{path+} | 
*DefaultApi* | [**AuthProviderPathGet**](docs/DefaultApi.md#authproviderpathget) | **GET** /auth/provider/{path+} | 
*DefaultApi* | [**AuthProviderPathOptions**](docs/DefaultApi.md#authproviderpathoptions) | **OPTIONS** /auth/provider/{path+} | 
*DefaultApi* | [**FolderGet**](docs/DefaultApi.md#folderget) | **GET** /folder | 
*DefaultApi* | [**FolderOptions**](docs/DefaultApi.md#folderoptions) | **OPTIONS** /folder | 
*DefaultApi* | [**InfoAuthGet**](docs/DefaultApi.md#infoauthget) | **GET** /info-auth | 
*DefaultApi* | [**InfoAuthOptions**](docs/DefaultApi.md#infoauthoptions) | **OPTIONS** /info-auth | 
*DefaultApi* | [**InfoGet**](docs/DefaultApi.md#infoget) | **GET** /info | 
*DefaultApi* | [**InfoOptions**](docs/DefaultApi.md#infooptions) | **OPTIONS** /info | 
*DefaultApi* | [**MoodAttachPostOptions**](docs/DefaultApi.md#moodattachpostoptions) | **OPTIONS** /mood/attach/post | 
*DefaultApi* | [**MoodAttachPostPut**](docs/DefaultApi.md#moodattachpostput) | **PUT** /mood/attach/post | 
*DefaultApi* | [**MoodGet**](docs/DefaultApi.md#moodget) | **GET** /mood | 
*DefaultApi* | [**MoodListTopGet**](docs/DefaultApi.md#moodlisttopget) | **GET** /mood/list/top | 
*DefaultApi* | [**MoodListTopOptions**](docs/DefaultApi.md#moodlisttopoptions) | **OPTIONS** /mood/list/top | 
*DefaultApi* | [**MoodOptions**](docs/DefaultApi.md#moodoptions) | **OPTIONS** /mood | 
*DefaultApi* | [**MoodPost**](docs/DefaultApi.md#moodpost) | **POST** /mood | 
*DefaultApi* | [**MoodPostsGet**](docs/DefaultApi.md#moodpostsget) | **GET** /mood/posts | 
*DefaultApi* | [**MoodPostsOptions**](docs/DefaultApi.md#moodpostsoptions) | **OPTIONS** /mood/posts | 
*DefaultApi* | [**MoodPut**](docs/DefaultApi.md#moodput) | **PUT** /mood | 
*DefaultApi* | [**MoodRateOptions**](docs/DefaultApi.md#moodrateoptions) | **OPTIONS** /mood/rate | 
*DefaultApi* | [**MoodRatePost**](docs/DefaultApi.md#moodratepost) | **POST** /mood/rate | 
*DefaultApi* | [**MoodUploadOptions**](docs/DefaultApi.md#mooduploadoptions) | **OPTIONS** /mood/upload | 
*DefaultApi* | [**MoodUploadPost**](docs/DefaultApi.md#mooduploadpost) | **POST** /mood/upload | 
*DefaultApi* | [**NewcoinBcaccopenOptions**](docs/DefaultApi.md#newcoinbcaccopenoptions) | **OPTIONS** /newcoin/bcaccopen | 
*DefaultApi* | [**NewcoinBcaccopenPost**](docs/DefaultApi.md#newcoinbcaccopenpost) | **POST** /newcoin/bcaccopen | 
*DefaultApi* | [**NewcoinBcauthethOptions**](docs/DefaultApi.md#newcoinbcauthethoptions) | **OPTIONS** /newcoin/bcautheth | 
*DefaultApi* | [**NewcoinBcauthethPost**](docs/DefaultApi.md#newcoinbcauthethpost) | **POST** /newcoin/bcautheth | 
*DefaultApi* | [**NewcoinBccolcreateOptions**](docs/DefaultApi.md#newcoinbccolcreateoptions) | **OPTIONS** /newcoin/bccolcreate | 
*DefaultApi* | [**NewcoinBccolcreatePost**](docs/DefaultApi.md#newcoinbccolcreatepost) | **POST** /newcoin/bccolcreate | 
*DefaultApi* | [**NewcoinBcgetaccOptions**](docs/DefaultApi.md#newcoinbcgetaccoptions) | **OPTIONS** /newcoin/bcgetacc | 
*DefaultApi* | [**NewcoinBcgetaccPost**](docs/DefaultApi.md#newcoinbcgetaccpost) | **POST** /newcoin/bcgetacc | 
*DefaultApi* | [**NewcoinBcgetpoolOptions**](docs/DefaultApi.md#newcoinbcgetpooloptions) | **OPTIONS** /newcoin/bcgetpool | 
*DefaultApi* | [**NewcoinBcgetpoolPost**](docs/DefaultApi.md#newcoinbcgetpoolpost) | **POST** /newcoin/bcgetpool | 
*DefaultApi* | [**NewcoinBckeypairOptions**](docs/DefaultApi.md#newcoinbckeypairoptions) | **OPTIONS** /newcoin/bckeypair | 
*DefaultApi* | [**NewcoinBckeypairPost**](docs/DefaultApi.md#newcoinbckeypairpost) | **POST** /newcoin/bckeypair | 
*DefaultApi* | [**NewcoinBcmaindaodldunstakeOptions**](docs/DefaultApi.md#newcoinbcmaindaodldunstakeoptions) | **OPTIONS** /newcoin/bcmaindaodldunstake | 
*DefaultApi* | [**NewcoinBcmaindaodldunstakePost**](docs/DefaultApi.md#newcoinbcmaindaodldunstakepost) | **POST** /newcoin/bcmaindaodldunstake | 
*DefaultApi* | [**NewcoinBcmaindaoinstunstakeOptions**](docs/DefaultApi.md#newcoinbcmaindaoinstunstakeoptions) | **OPTIONS** /newcoin/bcmaindaoinstunstake | 
*DefaultApi* | [**NewcoinBcmaindaoinstunstakePost**](docs/DefaultApi.md#newcoinbcmaindaoinstunstakepost) | **POST** /newcoin/bcmaindaoinstunstake | 
*DefaultApi* | [**NewcoinBcmaindaostakeOptions**](docs/DefaultApi.md#newcoinbcmaindaostakeoptions) | **OPTIONS** /newcoin/bcmaindaostake | 
*DefaultApi* | [**NewcoinBcmaindaostakePost**](docs/DefaultApi.md#newcoinbcmaindaostakepost) | **POST** /newcoin/bcmaindaostake | 
*DefaultApi* | [**NewcoinBcmintassetOptions**](docs/DefaultApi.md#newcoinbcmintassetoptions) | **OPTIONS** /newcoin/bcmintasset | 
*DefaultApi* | [**NewcoinBcmintassetPost**](docs/DefaultApi.md#newcoinbcmintassetpost) | **POST** /newcoin/bcmintasset | 
*DefaultApi* | [**NewcoinBcpoolcreateOptions**](docs/DefaultApi.md#newcoinbcpoolcreateoptions) | **OPTIONS** /newcoin/bcpoolcreate | 
*DefaultApi* | [**NewcoinBcpoolcreatePost**](docs/DefaultApi.md#newcoinbcpoolcreatepost) | **POST** /newcoin/bcpoolcreate | 
*DefaultApi* | [**NewcoinBcpoolstakeOptions**](docs/DefaultApi.md#newcoinbcpoolstakeoptions) | **OPTIONS** /newcoin/bcpoolstake | 
*DefaultApi* | [**NewcoinBcpoolstakePost**](docs/DefaultApi.md#newcoinbcpoolstakepost) | **POST** /newcoin/bcpoolstake | 
*DefaultApi* | [**NewcoinDaoCreateOptions**](docs/DefaultApi.md#newcoindaocreateoptions) | **OPTIONS** /newcoin/dao/create | 
*DefaultApi* | [**NewcoinDaoCreatePost**](docs/DefaultApi.md#newcoindaocreatepost) | **POST** /newcoin/dao/create | 
*DefaultApi* | [**NewcoinDaoProposalApproveOptions**](docs/DefaultApi.md#newcoindaoproposalapproveoptions) | **OPTIONS** /newcoin/dao/proposal/approve | 
*DefaultApi* | [**NewcoinDaoProposalApprovePost**](docs/DefaultApi.md#newcoindaoproposalapprovepost) | **POST** /newcoin/dao/proposal/approve | 
*DefaultApi* | [**NewcoinDaoProposalExecuteOptions**](docs/DefaultApi.md#newcoindaoproposalexecuteoptions) | **OPTIONS** /newcoin/dao/proposal/execute | 
*DefaultApi* | [**NewcoinDaoProposalExecutePost**](docs/DefaultApi.md#newcoindaoproposalexecutepost) | **POST** /newcoin/dao/proposal/execute | 
*DefaultApi* | [**NewcoinDaoProposalListGet**](docs/DefaultApi.md#newcoindaoproposallistget) | **GET** /newcoin/dao/proposal/list | 
*DefaultApi* | [**NewcoinDaoProposalListOptions**](docs/DefaultApi.md#newcoindaoproposallistoptions) | **OPTIONS** /newcoin/dao/proposal/list | 
*DefaultApi* | [**NewcoinDaoProposalOptions**](docs/DefaultApi.md#newcoindaoproposaloptions) | **OPTIONS** /newcoin/dao/proposal | 
*DefaultApi* | [**NewcoinDaoProposalPost**](docs/DefaultApi.md#newcoindaoproposalpost) | **POST** /newcoin/dao/proposal | 
*DefaultApi* | [**NewcoinDaoProposalVoteOptions**](docs/DefaultApi.md#newcoindaoproposalvoteoptions) | **OPTIONS** /newcoin/dao/proposal/vote | 
*DefaultApi* | [**NewcoinDaoProposalVotePost**](docs/DefaultApi.md#newcoindaoproposalvotepost) | **POST** /newcoin/dao/proposal/vote | 
*DefaultApi* | [**NewcoinDaoProposalVotesGet**](docs/DefaultApi.md#newcoindaoproposalvotesget) | **GET** /newcoin/dao/proposal/votes | 
*DefaultApi* | [**NewcoinDaoProposalVotesOptions**](docs/DefaultApi.md#newcoindaoproposalvotesoptions) | **OPTIONS** /newcoin/dao/proposal/votes | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistApproveOptions**](docs/DefaultApi.md#newcoindaoproposalwhitelistapproveoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/approve | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistApprovePost**](docs/DefaultApi.md#newcoindaoproposalwhitelistapprovepost) | **POST** /newcoin/dao/proposal-whitelist/approve | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistExecuteOptions**](docs/DefaultApi.md#newcoindaoproposalwhitelistexecuteoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/execute | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistExecutePost**](docs/DefaultApi.md#newcoindaoproposalwhitelistexecutepost) | **POST** /newcoin/dao/proposal-whitelist/execute | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistListGet**](docs/DefaultApi.md#newcoindaoproposalwhitelistlistget) | **GET** /newcoin/dao/proposal-whitelist/list | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistListOptions**](docs/DefaultApi.md#newcoindaoproposalwhitelistlistoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/list | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistOptions**](docs/DefaultApi.md#newcoindaoproposalwhitelistoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist | 
*DefaultApi* | [**NewcoinDaoProposalWhitelistPost**](docs/DefaultApi.md#newcoindaoproposalwhitelistpost) | **POST** /newcoin/dao/proposal-whitelist | 
*DefaultApi* | [**NewcoinDaoWhitelistGet**](docs/DefaultApi.md#newcoindaowhitelistget) | **GET** /newcoin/dao/whitelist | 
*DefaultApi* | [**NewcoinDaoWhitelistOptions**](docs/DefaultApi.md#newcoindaowhitelistoptions) | **OPTIONS** /newcoin/dao/whitelist | 
*DefaultApi* | [**NewcoinDaoWithdrawVoteDepositOptions**](docs/DefaultApi.md#newcoindaowithdrawvotedepositoptions) | **OPTIONS** /newcoin/dao/withdrawVoteDeposit | 
*DefaultApi* | [**NewcoinDaoWithdrawVoteDepositPost**](docs/DefaultApi.md#newcoindaowithdrawvotedepositpost) | **POST** /newcoin/dao/withdrawVoteDeposit | 
*DefaultApi* | [**PaymentStripeIntentOptions**](docs/DefaultApi.md#paymentstripeintentoptions) | **OPTIONS** /payment/stripe/intent | 
*DefaultApi* | [**PaymentStripeIntentPost**](docs/DefaultApi.md#paymentstripeintentpost) | **POST** /payment/stripe/intent | 
*DefaultApi* | [**PaymentStripeSubscriptionPaymentOptions**](docs/DefaultApi.md#paymentstripesubscriptionpaymentoptions) | **OPTIONS** /payment/stripe/subscription/payment | 
*DefaultApi* | [**PaymentStripeSubscriptionPaymentPost**](docs/DefaultApi.md#paymentstripesubscriptionpaymentpost) | **POST** /payment/stripe/subscription/payment | 
*DefaultApi* | [**PaymentStripeWebhookOptions**](docs/DefaultApi.md#paymentstripewebhookoptions) | **OPTIONS** /payment/stripe/webhook | 
*DefaultApi* | [**PaymentStripeWebhookPost**](docs/DefaultApi.md#paymentstripewebhookpost) | **POST** /payment/stripe/webhook | 
*DefaultApi* | [**PostGet**](docs/DefaultApi.md#postget) | **GET** /post | 
*DefaultApi* | [**PostListSearchGet**](docs/DefaultApi.md#postlistsearchget) | **GET** /post/list/search | 
*DefaultApi* | [**PostListSearchOptions**](docs/DefaultApi.md#postlistsearchoptions) | **OPTIONS** /post/list/search | 
*DefaultApi* | [**PostListTagsSearchGet**](docs/DefaultApi.md#postlisttagssearchget) | **GET** /post/list/tags-search | 
*DefaultApi* | [**PostListTagsSearchOptions**](docs/DefaultApi.md#postlisttagssearchoptions) | **OPTIONS** /post/list/tags-search | 
*DefaultApi* | [**PostListTopGet**](docs/DefaultApi.md#postlisttopget) | **GET** /post/list/top | 
*DefaultApi* | [**PostListTopOptions**](docs/DefaultApi.md#postlisttopoptions) | **OPTIONS** /post/list/top | 
*DefaultApi* | [**PostOptions**](docs/DefaultApi.md#postoptions) | **OPTIONS** /post | 
*DefaultApi* | [**PostPost**](docs/DefaultApi.md#postpost) | **POST** /post | 
*DefaultApi* | [**PostPut**](docs/DefaultApi.md#postput) | **PUT** /post | 
*DefaultApi* | [**PostRateOptions**](docs/DefaultApi.md#postrateoptions) | **OPTIONS** /post/rate | 
*DefaultApi* | [**PostRatePost**](docs/DefaultApi.md#postratepost) | **POST** /post/rate | 
*DefaultApi* | [**PostReportOptions**](docs/DefaultApi.md#postreportoptions) | **OPTIONS** /post/report | 
*DefaultApi* | [**PostReportPost**](docs/DefaultApi.md#postreportpost) | **POST** /post/report | 
*DefaultApi* | [**PostUploadOptions**](docs/DefaultApi.md#postuploadoptions) | **OPTIONS** /post/upload | 
*DefaultApi* | [**PostUploadPost**](docs/DefaultApi.md#postuploadpost) | **POST** /post/upload | 
*DefaultApi* | [**PostUtilsRemoteMetaProxyGet**](docs/DefaultApi.md#postutilsremotemetaproxyget) | **GET** /post/utils/remote-meta-proxy | 
*DefaultApi* | [**PostUtilsRemoteMetaProxyOptions**](docs/DefaultApi.md#postutilsremotemetaproxyoptions) | **OPTIONS** /post/utils/remote-meta-proxy | 
*DefaultApi* | [**SearchCreativeGet**](docs/DefaultApi.md#searchcreativeget) | **GET** /search/creative | 
*DefaultApi* | [**SearchCreativeOptions**](docs/DefaultApi.md#searchcreativeoptions) | **OPTIONS** /search/creative | 
*DefaultApi* | [**TestUtilsUserConfigureImportedOptions**](docs/DefaultApi.md#testutilsuserconfigureimportedoptions) | **OPTIONS** /test-utils/user/configure/imported | 
*DefaultApi* | [**TestUtilsUserConfigureImportedPost**](docs/DefaultApi.md#testutilsuserconfigureimportedpost) | **POST** /test-utils/user/configure/imported | 
*DefaultApi* | [**TestUtilsUserConfigureImportedWhitelistedOptions**](docs/DefaultApi.md#testutilsuserconfigureimportedwhitelistedoptions) | **OPTIONS** /test-utils/user/configure/imported-whitelisted | 
*DefaultApi* | [**TestUtilsUserConfigureImportedWhitelistedPost**](docs/DefaultApi.md#testutilsuserconfigureimportedwhitelistedpost) | **POST** /test-utils/user/configure/imported-whitelisted | 
*DefaultApi* | [**TestUtilsUserConfigureInvitedOptions**](docs/DefaultApi.md#testutilsuserconfigureinvitedoptions) | **OPTIONS** /test-utils/user/configure/invited | 
*DefaultApi* | [**TestUtilsUserConfigureInvitedPost**](docs/DefaultApi.md#testutilsuserconfigureinvitedpost) | **POST** /test-utils/user/configure/invited | 
*DefaultApi* | [**UploadNodeOptions**](docs/DefaultApi.md#uploadnodeoptions) | **OPTIONS** /upload/node | 
*DefaultApi* | [**UploadNodePost**](docs/DefaultApi.md#uploadnodepost) | **POST** /upload/node | 
*DefaultApi* | [**UserActivityStreamGet**](docs/DefaultApi.md#useractivitystreamget) | **GET** /user/activityStream | 
*DefaultApi* | [**UserActivityStreamOptions**](docs/DefaultApi.md#useractivitystreamoptions) | **OPTIONS** /user/activityStream | 
*DefaultApi* | [**UserAvailabilityGet**](docs/DefaultApi.md#useravailabilityget) | **GET** /user/availability | 
*DefaultApi* | [**UserAvailabilityOptions**](docs/DefaultApi.md#useravailabilityoptions) | **OPTIONS** /user/availability | 
*DefaultApi* | [**UserCurrentGet**](docs/DefaultApi.md#usercurrentget) | **GET** /user/current | 
*DefaultApi* | [**UserCurrentOptions**](docs/DefaultApi.md#usercurrentoptions) | **OPTIONS** /user/current | 
*DefaultApi* | [**UserDelete**](docs/DefaultApi.md#userdelete) | **DELETE** /user | 
*DefaultApi* | [**UserGet**](docs/DefaultApi.md#userget) | **GET** /user | 
*DefaultApi* | [**UserInviteHashGet**](docs/DefaultApi.md#userinvitehashget) | **GET** /user/invite/hash | 
*DefaultApi* | [**UserInviteHashOptions**](docs/DefaultApi.md#userinvitehashoptions) | **OPTIONS** /user/invite/hash | 
*DefaultApi* | [**UserInviteOptions**](docs/DefaultApi.md#userinviteoptions) | **OPTIONS** /user/invite | 
*DefaultApi* | [**UserInvitePost**](docs/DefaultApi.md#userinvitepost) | **POST** /user/invite | 
*DefaultApi* | [**UserInviteesGet**](docs/DefaultApi.md#userinviteesget) | **GET** /user/invitees | 
*DefaultApi* | [**UserInviteesOptions**](docs/DefaultApi.md#userinviteesoptions) | **OPTIONS** /user/invitees | 
*DefaultApi* | [**UserInvitorGet**](docs/DefaultApi.md#userinvitorget) | **GET** /user/invitor | 
*DefaultApi* | [**UserInvitorOptions**](docs/DefaultApi.md#userinvitoroptions) | **OPTIONS** /user/invitor | 
*DefaultApi* | [**UserListSearchGet**](docs/DefaultApi.md#userlistsearchget) | **GET** /user/list/search | 
*DefaultApi* | [**UserListSearchOptions**](docs/DefaultApi.md#userlistsearchoptions) | **OPTIONS** /user/list/search | 
*DefaultApi* | [**UserListTopGet**](docs/DefaultApi.md#userlisttopget) | **GET** /user/list/top | 
*DefaultApi* | [**UserListTopOptions**](docs/DefaultApi.md#userlisttopoptions) | **OPTIONS** /user/list/top | 
*DefaultApi* | [**UserMoodsGet**](docs/DefaultApi.md#usermoodsget) | **GET** /user/moods | 
*DefaultApi* | [**UserMoodsOptions**](docs/DefaultApi.md#usermoodsoptions) | **OPTIONS** /user/moods | 
*DefaultApi* | [**UserOptions**](docs/DefaultApi.md#useroptions) | **OPTIONS** /user | 
*DefaultApi* | [**UserPost**](docs/DefaultApi.md#userpost) | **POST** /user | 
*DefaultApi* | [**UserPreregisterOptions**](docs/DefaultApi.md#userpreregisteroptions) | **OPTIONS** /user/preregister | 
*DefaultApi* | [**UserPreregisterPost**](docs/DefaultApi.md#userpreregisterpost) | **POST** /user/preregister | 
*DefaultApi* | [**UserPut**](docs/DefaultApi.md#userput) | **PUT** /user | 
*DefaultApi* | [**UserRatedInGet**](docs/DefaultApi.md#userratedinget) | **GET** /user/rated/in | 
*DefaultApi* | [**UserRatedInOptions**](docs/DefaultApi.md#userratedinoptions) | **OPTIONS** /user/rated/in | 
*DefaultApi* | [**UserRatedOutPostsGet**](docs/DefaultApi.md#userratedoutpostsget) | **GET** /user/rated/out/posts | 
*DefaultApi* | [**UserRatedOutPostsOptions**](docs/DefaultApi.md#userratedoutpostsoptions) | **OPTIONS** /user/rated/out/posts | 
*DefaultApi* | [**UserRatedOutUsersGet**](docs/DefaultApi.md#userratedoutusersget) | **GET** /user/rated/out/users | 
*DefaultApi* | [**UserRatedOutUsersOptions**](docs/DefaultApi.md#userratedoutusersoptions) | **OPTIONS** /user/rated/out/users | 
*DefaultApi* | [**UserStakeOptions**](docs/DefaultApi.md#userstakeoptions) | **OPTIONS** /user/stake | 
*DefaultApi* | [**UserStakePost**](docs/DefaultApi.md#userstakepost) | **POST** /user/stake | 
*DefaultApi* | [**UserSyncContactsOptions**](docs/DefaultApi.md#usersynccontactsoptions) | **OPTIONS** /user/syncContacts | 
*DefaultApi* | [**UserSyncContactsPost**](docs/DefaultApi.md#usersynccontactspost) | **POST** /user/syncContacts | 
*DefaultApi* | [**UserTransferOptions**](docs/DefaultApi.md#usertransferoptions) | **OPTIONS** /user/transfer | 
*DefaultApi* | [**UserTransferPost**](docs/DefaultApi.md#usertransferpost) | **POST** /user/transfer | 
*DefaultApi* | [**UserUploadOptions**](docs/DefaultApi.md#useruploadoptions) | **OPTIONS** /user/upload | 
*DefaultApi* | [**UserUploadPost**](docs/DefaultApi.md#useruploadpost) | **POST** /user/upload | 
*DefaultApi* | [**UserUserRateOptions**](docs/DefaultApi.md#useruserrateoptions) | **OPTIONS** /user/userRate | 
*DefaultApi* | [**UserUserRatePost**](docs/DefaultApi.md#useruserratepost) | **POST** /user/userRate | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.AnyResponse](docs/AnyResponse.md)
 - [Model.BcAccCreateRequest](docs/BcAccCreateRequest.md)
 - [Model.BcApproveDaoProposalRequest](docs/BcApproveDaoProposalRequest.md)
 - [Model.BcAuthEthRequest](docs/BcAuthEthRequest.md)
 - [Model.BcAuthEthResponse](docs/BcAuthEthResponse.md)
 - [Model.BcCollectionCreateRequest](docs/BcCollectionCreateRequest.md)
 - [Model.BcCollectionCreateRequestTemplateFields](docs/BcCollectionCreateRequestTemplateFields.md)
 - [Model.BcCreateDaoProposal](docs/BcCreateDaoProposal.md)
 - [Model.BcCreateDaoRequest](docs/BcCreateDaoRequest.md)
 - [Model.BcCreateDaoResponse](docs/BcCreateDaoResponse.md)
 - [Model.BcCreateWhitelistDaoProposal](docs/BcCreateWhitelistDaoProposal.md)
 - [Model.BcDaoProposalExecuteRequest](docs/BcDaoProposalExecuteRequest.md)
 - [Model.BcDaoProposalExecuteResponse](docs/BcDaoProposalExecuteResponse.md)
 - [Model.BcDaoProposalVoteRequest](docs/BcDaoProposalVoteRequest.md)
 - [Model.BcDaoProposalVoteResponse](docs/BcDaoProposalVoteResponse.md)
 - [Model.BcDaoProposalVoteResponseRows](docs/BcDaoProposalVoteResponseRows.md)
 - [Model.BcDaoWidthdrawVoteDepositRequest](docs/BcDaoWidthdrawVoteDepositRequest.md)
 - [Model.BcDaoWidthdrawVoteDepositResponse](docs/BcDaoWidthdrawVoteDepositResponse.md)
 - [Model.BcGetAccountInfo](docs/BcGetAccountInfo.md)
 - [Model.BcGetInfoResp](docs/BcGetInfoResp.md)
 - [Model.BcGetPoolInfo](docs/BcGetPoolInfo.md)
 - [Model.BcKeyPairCreateRequest](docs/BcKeyPairCreateRequest.md)
 - [Model.BcKeyPairCreateResponse](docs/BcKeyPairCreateResponse.md)
 - [Model.BcListDaoProposalsResponse](docs/BcListDaoProposalsResponse.md)
 - [Model.BcListDaoProposalsResponseRows](docs/BcListDaoProposalsResponseRows.md)
 - [Model.BcListDaoProposalsResponseVoteNo](docs/BcListDaoProposalsResponseVoteNo.md)
 - [Model.BcListDaoWhitelistResponse](docs/BcListDaoWhitelistResponse.md)
 - [Model.BcMintAssetRequest](docs/BcMintAssetRequest.md)
 - [Model.BcMintAssetRequestImmutableData](docs/BcMintAssetRequestImmutableData.md)
 - [Model.BcPoolCreateRequest](docs/BcPoolCreateRequest.md)
 - [Model.BcStakeMainDAORequest](docs/BcStakeMainDAORequest.md)
 - [Model.BcStakePoolRequest](docs/BcStakePoolRequest.md)
 - [Model.BcTxResponse](docs/BcTxResponse.md)
 - [Model.ConfigureUserRequest](docs/ConfigureUserRequest.md)
 - [Model.CreativeSearchResponse](docs/CreativeSearchResponse.md)
 - [Model.CreativeSearchResponseHits](docs/CreativeSearchResponseHits.md)
 - [Model.CreativeSearchResponseSource](docs/CreativeSearchResponseSource.md)
 - [Model.CreativeSearchResponseSourceMeta](docs/CreativeSearchResponseSourceMeta.md)
 - [Model.ErrorResponse](docs/ErrorResponse.md)
 - [Model.MoodAttachRequest](docs/MoodAttachRequest.md)
 - [Model.MoodCreateRequest](docs/MoodCreateRequest.md)
 - [Model.MoodCreateResponse](docs/MoodCreateResponse.md)
 - [Model.MoodListAttachedPostsResponse](docs/MoodListAttachedPostsResponse.md)
 - [Model.MoodPagedListReadPublicResponse](docs/MoodPagedListReadPublicResponse.md)
 - [Model.MoodPagedListReadPublicResponseAuthor](docs/MoodPagedListReadPublicResponseAuthor.md)
 - [Model.MoodPagedListReadPublicResponseMoods](docs/MoodPagedListReadPublicResponseMoods.md)
 - [Model.MoodPagedListReadPublicResponsePosts](docs/MoodPagedListReadPublicResponsePosts.md)
 - [Model.MoodPagedListReadPublicResponseRel](docs/MoodPagedListReadPublicResponseRel.md)
 - [Model.MoodPagedListReadPublicResponseTags](docs/MoodPagedListReadPublicResponseTags.md)
 - [Model.MoodPagedListReadPublicResponseValue](docs/MoodPagedListReadPublicResponseValue.md)
 - [Model.MoodReadResponse](docs/MoodReadResponse.md)
 - [Model.MoodUpdateRequest](docs/MoodUpdateRequest.md)
 - [Model.OkResponse](docs/OkResponse.md)
 - [Model.PagedRatedResponsePost](docs/PagedRatedResponsePost.md)
 - [Model.PagedRatedResponsePostValue](docs/PagedRatedResponsePostValue.md)
 - [Model.PagedRatedResponseUser](docs/PagedRatedResponseUser.md)
 - [Model.PagedRatedResponseUserRating](docs/PagedRatedResponseUserRating.md)
 - [Model.PagedRatedResponseUserValue](docs/PagedRatedResponseUserValue.md)
 - [Model.PaymentStripePaymentIntentCreateRequest](docs/PaymentStripePaymentIntentCreateRequest.md)
 - [Model.PaymentStripePaymentIntentCreateRequestItems](docs/PaymentStripePaymentIntentCreateRequestItems.md)
 - [Model.PaymentStripePaymentIntentCreateResponse](docs/PaymentStripePaymentIntentCreateResponse.md)
 - [Model.PaymentStripeWebhookRequest](docs/PaymentStripeWebhookRequest.md)
 - [Model.PaymentStripeWebhookRequestData](docs/PaymentStripeWebhookRequestData.md)
 - [Model.PostCreateRequest](docs/PostCreateRequest.md)
 - [Model.PostCreateResponse](docs/PostCreateResponse.md)
 - [Model.PostPagedListReadPublicResponse](docs/PostPagedListReadPublicResponse.md)
 - [Model.PostReadResponse](docs/PostReadResponse.md)
 - [Model.PostRemoteMetaProxyResponse](docs/PostRemoteMetaProxyResponse.md)
 - [Model.PostTagsSearchPublicResponse](docs/PostTagsSearchPublicResponse.md)
 - [Model.PostTagsSearchPublicResponseValue](docs/PostTagsSearchPublicResponseValue.md)
 - [Model.PostUpdateRequest](docs/PostUpdateRequest.md)
 - [Model.RatingUpdateRequest](docs/RatingUpdateRequest.md)
 - [Model.RatingUpdateResponse](docs/RatingUpdateResponse.md)
 - [Model.ReportUpdateRequest](docs/ReportUpdateRequest.md)
 - [Model.ReportUpdateResponse](docs/ReportUpdateResponse.md)
 - [Model.SyncContactsRequest](docs/SyncContactsRequest.md)
 - [Model.SyncContactsRequestContacts](docs/SyncContactsRequestContacts.md)
 - [Model.SyncContactsRequestPhones](docs/SyncContactsRequestPhones.md)
 - [Model.SyncContactsRequestPostalAddresses](docs/SyncContactsRequestPostalAddresses.md)
 - [Model.SyncContactsResponse](docs/SyncContactsResponse.md)
 - [Model.UploadRequest](docs/UploadRequest.md)
 - [Model.UploadRequestGeneric](docs/UploadRequestGeneric.md)
 - [Model.UploadResponse](docs/UploadResponse.md)
 - [Model.UserAvailabilityResponse](docs/UserAvailabilityResponse.md)
 - [Model.UserCreateRequest](docs/UserCreateRequest.md)
 - [Model.UserDeleteRequest](docs/UserDeleteRequest.md)
 - [Model.UserInvitationPagedListReadPublicResponse](docs/UserInvitationPagedListReadPublicResponse.md)
 - [Model.UserInvitationPagedListReadPublicResponseInvitation](docs/UserInvitationPagedListReadPublicResponseInvitation.md)
 - [Model.UserInvitationPagedListReadPublicResponseValue](docs/UserInvitationPagedListReadPublicResponseValue.md)
 - [Model.UserInvitationReadPublicResponse](docs/UserInvitationReadPublicResponse.md)
 - [Model.UserInviteRequest](docs/UserInviteRequest.md)
 - [Model.UserPagedListReadPublicResponse](docs/UserPagedListReadPublicResponse.md)
 - [Model.UserPreRegisterRequest](docs/UserPreRegisterRequest.md)
 - [Model.UserReadPrivateResponse](docs/UserReadPrivateResponse.md)
 - [Model.UserReadPublicResponse](docs/UserReadPublicResponse.md)
 - [Model.UserStakeRequest](docs/UserStakeRequest.md)
 - [Model.UserTransferRequest](docs/UserTransferRequest.md)
 - [Model.UserUpdateRequest](docs/UserUpdateRequest.md)
 - [Model.UserUploadRequest](docs/UserUploadRequest.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="lambdaAuthorizer"></a>
### lambdaAuthorizer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

<a name="newgraph-api-eu-dev"></a>
### newgraph-api-eu-dev

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

