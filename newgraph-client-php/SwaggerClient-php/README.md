# SwaggerClient-php
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

This PHP package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2022-10-04T15:34:01Z
- Build package: io.swagger.codegen.languages.PhpClientCodegen

## Requirements

PHP 5.5 and later

## Installation & Usage
### Composer

To install the bindings via [Composer](http://getcomposer.org/), add the following to `composer.json`:

```
{
  "repositories": [
    {
      "type": "git",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
    require_once('/path/to/SwaggerClient-php/vendor/autoload.php');
```

## Tests

To run the unit tests:

```
composer install
./vendor/bin/phpunit
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$path = "path_example"; // string | 

try {
    $apiInstance->authCallbackPathGet($path);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->authCallbackPathGet: ', $e->getMessage(), PHP_EOL;
}

?>
```

## Documentation for API Endpoints

All URIs are relative to *https://api-eu-dev.newgra.ph/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**authCallbackPathGet**](docs/Api/DefaultApi.md#authcallbackpathget) | **GET** /auth/callback/{path+} | 
*DefaultApi* | [**authCallbackPathOptions**](docs/Api/DefaultApi.md#authcallbackpathoptions) | **OPTIONS** /auth/callback/{path+} | 
*DefaultApi* | [**authProviderPathGet**](docs/Api/DefaultApi.md#authproviderpathget) | **GET** /auth/provider/{path+} | 
*DefaultApi* | [**authProviderPathOptions**](docs/Api/DefaultApi.md#authproviderpathoptions) | **OPTIONS** /auth/provider/{path+} | 
*DefaultApi* | [**folderGet**](docs/Api/DefaultApi.md#folderget) | **GET** /folder | 
*DefaultApi* | [**folderOptions**](docs/Api/DefaultApi.md#folderoptions) | **OPTIONS** /folder | 
*DefaultApi* | [**infoAuthGet**](docs/Api/DefaultApi.md#infoauthget) | **GET** /info-auth | 
*DefaultApi* | [**infoAuthOptions**](docs/Api/DefaultApi.md#infoauthoptions) | **OPTIONS** /info-auth | 
*DefaultApi* | [**infoGet**](docs/Api/DefaultApi.md#infoget) | **GET** /info | 
*DefaultApi* | [**infoOptions**](docs/Api/DefaultApi.md#infooptions) | **OPTIONS** /info | 
*DefaultApi* | [**moodAttachPostOptions**](docs/Api/DefaultApi.md#moodattachpostoptions) | **OPTIONS** /mood/attach/post | 
*DefaultApi* | [**moodAttachPostPut**](docs/Api/DefaultApi.md#moodattachpostput) | **PUT** /mood/attach/post | 
*DefaultApi* | [**moodGet**](docs/Api/DefaultApi.md#moodget) | **GET** /mood | 
*DefaultApi* | [**moodListTopGet**](docs/Api/DefaultApi.md#moodlisttopget) | **GET** /mood/list/top | 
*DefaultApi* | [**moodListTopOptions**](docs/Api/DefaultApi.md#moodlisttopoptions) | **OPTIONS** /mood/list/top | 
*DefaultApi* | [**moodOptions**](docs/Api/DefaultApi.md#moodoptions) | **OPTIONS** /mood | 
*DefaultApi* | [**moodPost**](docs/Api/DefaultApi.md#moodpost) | **POST** /mood | 
*DefaultApi* | [**moodPostsGet**](docs/Api/DefaultApi.md#moodpostsget) | **GET** /mood/posts | 
*DefaultApi* | [**moodPostsOptions**](docs/Api/DefaultApi.md#moodpostsoptions) | **OPTIONS** /mood/posts | 
*DefaultApi* | [**moodPut**](docs/Api/DefaultApi.md#moodput) | **PUT** /mood | 
*DefaultApi* | [**moodRateOptions**](docs/Api/DefaultApi.md#moodrateoptions) | **OPTIONS** /mood/rate | 
*DefaultApi* | [**moodRatePost**](docs/Api/DefaultApi.md#moodratepost) | **POST** /mood/rate | 
*DefaultApi* | [**moodUploadOptions**](docs/Api/DefaultApi.md#mooduploadoptions) | **OPTIONS** /mood/upload | 
*DefaultApi* | [**moodUploadPost**](docs/Api/DefaultApi.md#mooduploadpost) | **POST** /mood/upload | 
*DefaultApi* | [**newcoinBcaccopenOptions**](docs/Api/DefaultApi.md#newcoinbcaccopenoptions) | **OPTIONS** /newcoin/bcaccopen | 
*DefaultApi* | [**newcoinBcaccopenPost**](docs/Api/DefaultApi.md#newcoinbcaccopenpost) | **POST** /newcoin/bcaccopen | 
*DefaultApi* | [**newcoinBcauthethOptions**](docs/Api/DefaultApi.md#newcoinbcauthethoptions) | **OPTIONS** /newcoin/bcautheth | 
*DefaultApi* | [**newcoinBcauthethPost**](docs/Api/DefaultApi.md#newcoinbcauthethpost) | **POST** /newcoin/bcautheth | 
*DefaultApi* | [**newcoinBccolcreateOptions**](docs/Api/DefaultApi.md#newcoinbccolcreateoptions) | **OPTIONS** /newcoin/bccolcreate | 
*DefaultApi* | [**newcoinBccolcreatePost**](docs/Api/DefaultApi.md#newcoinbccolcreatepost) | **POST** /newcoin/bccolcreate | 
*DefaultApi* | [**newcoinBcgetaccOptions**](docs/Api/DefaultApi.md#newcoinbcgetaccoptions) | **OPTIONS** /newcoin/bcgetacc | 
*DefaultApi* | [**newcoinBcgetaccPost**](docs/Api/DefaultApi.md#newcoinbcgetaccpost) | **POST** /newcoin/bcgetacc | 
*DefaultApi* | [**newcoinBcgetpoolOptions**](docs/Api/DefaultApi.md#newcoinbcgetpooloptions) | **OPTIONS** /newcoin/bcgetpool | 
*DefaultApi* | [**newcoinBcgetpoolPost**](docs/Api/DefaultApi.md#newcoinbcgetpoolpost) | **POST** /newcoin/bcgetpool | 
*DefaultApi* | [**newcoinBckeypairOptions**](docs/Api/DefaultApi.md#newcoinbckeypairoptions) | **OPTIONS** /newcoin/bckeypair | 
*DefaultApi* | [**newcoinBckeypairPost**](docs/Api/DefaultApi.md#newcoinbckeypairpost) | **POST** /newcoin/bckeypair | 
*DefaultApi* | [**newcoinBcmaindaodldunstakeOptions**](docs/Api/DefaultApi.md#newcoinbcmaindaodldunstakeoptions) | **OPTIONS** /newcoin/bcmaindaodldunstake | 
*DefaultApi* | [**newcoinBcmaindaodldunstakePost**](docs/Api/DefaultApi.md#newcoinbcmaindaodldunstakepost) | **POST** /newcoin/bcmaindaodldunstake | 
*DefaultApi* | [**newcoinBcmaindaoinstunstakeOptions**](docs/Api/DefaultApi.md#newcoinbcmaindaoinstunstakeoptions) | **OPTIONS** /newcoin/bcmaindaoinstunstake | 
*DefaultApi* | [**newcoinBcmaindaoinstunstakePost**](docs/Api/DefaultApi.md#newcoinbcmaindaoinstunstakepost) | **POST** /newcoin/bcmaindaoinstunstake | 
*DefaultApi* | [**newcoinBcmaindaostakeOptions**](docs/Api/DefaultApi.md#newcoinbcmaindaostakeoptions) | **OPTIONS** /newcoin/bcmaindaostake | 
*DefaultApi* | [**newcoinBcmaindaostakePost**](docs/Api/DefaultApi.md#newcoinbcmaindaostakepost) | **POST** /newcoin/bcmaindaostake | 
*DefaultApi* | [**newcoinBcmintassetOptions**](docs/Api/DefaultApi.md#newcoinbcmintassetoptions) | **OPTIONS** /newcoin/bcmintasset | 
*DefaultApi* | [**newcoinBcmintassetPost**](docs/Api/DefaultApi.md#newcoinbcmintassetpost) | **POST** /newcoin/bcmintasset | 
*DefaultApi* | [**newcoinBcpoolcreateOptions**](docs/Api/DefaultApi.md#newcoinbcpoolcreateoptions) | **OPTIONS** /newcoin/bcpoolcreate | 
*DefaultApi* | [**newcoinBcpoolcreatePost**](docs/Api/DefaultApi.md#newcoinbcpoolcreatepost) | **POST** /newcoin/bcpoolcreate | 
*DefaultApi* | [**newcoinBcpoolstakeOptions**](docs/Api/DefaultApi.md#newcoinbcpoolstakeoptions) | **OPTIONS** /newcoin/bcpoolstake | 
*DefaultApi* | [**newcoinBcpoolstakePost**](docs/Api/DefaultApi.md#newcoinbcpoolstakepost) | **POST** /newcoin/bcpoolstake | 
*DefaultApi* | [**newcoinDaoCreateOptions**](docs/Api/DefaultApi.md#newcoindaocreateoptions) | **OPTIONS** /newcoin/dao/create | 
*DefaultApi* | [**newcoinDaoCreatePost**](docs/Api/DefaultApi.md#newcoindaocreatepost) | **POST** /newcoin/dao/create | 
*DefaultApi* | [**newcoinDaoProposalApproveOptions**](docs/Api/DefaultApi.md#newcoindaoproposalapproveoptions) | **OPTIONS** /newcoin/dao/proposal/approve | 
*DefaultApi* | [**newcoinDaoProposalApprovePost**](docs/Api/DefaultApi.md#newcoindaoproposalapprovepost) | **POST** /newcoin/dao/proposal/approve | 
*DefaultApi* | [**newcoinDaoProposalExecuteOptions**](docs/Api/DefaultApi.md#newcoindaoproposalexecuteoptions) | **OPTIONS** /newcoin/dao/proposal/execute | 
*DefaultApi* | [**newcoinDaoProposalExecutePost**](docs/Api/DefaultApi.md#newcoindaoproposalexecutepost) | **POST** /newcoin/dao/proposal/execute | 
*DefaultApi* | [**newcoinDaoProposalListGet**](docs/Api/DefaultApi.md#newcoindaoproposallistget) | **GET** /newcoin/dao/proposal/list | 
*DefaultApi* | [**newcoinDaoProposalListOptions**](docs/Api/DefaultApi.md#newcoindaoproposallistoptions) | **OPTIONS** /newcoin/dao/proposal/list | 
*DefaultApi* | [**newcoinDaoProposalOptions**](docs/Api/DefaultApi.md#newcoindaoproposaloptions) | **OPTIONS** /newcoin/dao/proposal | 
*DefaultApi* | [**newcoinDaoProposalPost**](docs/Api/DefaultApi.md#newcoindaoproposalpost) | **POST** /newcoin/dao/proposal | 
*DefaultApi* | [**newcoinDaoProposalVoteOptions**](docs/Api/DefaultApi.md#newcoindaoproposalvoteoptions) | **OPTIONS** /newcoin/dao/proposal/vote | 
*DefaultApi* | [**newcoinDaoProposalVotePost**](docs/Api/DefaultApi.md#newcoindaoproposalvotepost) | **POST** /newcoin/dao/proposal/vote | 
*DefaultApi* | [**newcoinDaoProposalVotesGet**](docs/Api/DefaultApi.md#newcoindaoproposalvotesget) | **GET** /newcoin/dao/proposal/votes | 
*DefaultApi* | [**newcoinDaoProposalVotesOptions**](docs/Api/DefaultApi.md#newcoindaoproposalvotesoptions) | **OPTIONS** /newcoin/dao/proposal/votes | 
*DefaultApi* | [**newcoinDaoProposalWhitelistApproveOptions**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistapproveoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/approve | 
*DefaultApi* | [**newcoinDaoProposalWhitelistApprovePost**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistapprovepost) | **POST** /newcoin/dao/proposal-whitelist/approve | 
*DefaultApi* | [**newcoinDaoProposalWhitelistExecuteOptions**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistexecuteoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/execute | 
*DefaultApi* | [**newcoinDaoProposalWhitelistExecutePost**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistexecutepost) | **POST** /newcoin/dao/proposal-whitelist/execute | 
*DefaultApi* | [**newcoinDaoProposalWhitelistListGet**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistlistget) | **GET** /newcoin/dao/proposal-whitelist/list | 
*DefaultApi* | [**newcoinDaoProposalWhitelistListOptions**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistlistoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist/list | 
*DefaultApi* | [**newcoinDaoProposalWhitelistOptions**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistoptions) | **OPTIONS** /newcoin/dao/proposal-whitelist | 
*DefaultApi* | [**newcoinDaoProposalWhitelistPost**](docs/Api/DefaultApi.md#newcoindaoproposalwhitelistpost) | **POST** /newcoin/dao/proposal-whitelist | 
*DefaultApi* | [**newcoinDaoWhitelistGet**](docs/Api/DefaultApi.md#newcoindaowhitelistget) | **GET** /newcoin/dao/whitelist | 
*DefaultApi* | [**newcoinDaoWhitelistOptions**](docs/Api/DefaultApi.md#newcoindaowhitelistoptions) | **OPTIONS** /newcoin/dao/whitelist | 
*DefaultApi* | [**newcoinDaoWithdrawVoteDepositOptions**](docs/Api/DefaultApi.md#newcoindaowithdrawvotedepositoptions) | **OPTIONS** /newcoin/dao/withdrawVoteDeposit | 
*DefaultApi* | [**newcoinDaoWithdrawVoteDepositPost**](docs/Api/DefaultApi.md#newcoindaowithdrawvotedepositpost) | **POST** /newcoin/dao/withdrawVoteDeposit | 
*DefaultApi* | [**paymentStripeIntentOptions**](docs/Api/DefaultApi.md#paymentstripeintentoptions) | **OPTIONS** /payment/stripe/intent | 
*DefaultApi* | [**paymentStripeIntentPost**](docs/Api/DefaultApi.md#paymentstripeintentpost) | **POST** /payment/stripe/intent | 
*DefaultApi* | [**paymentStripeSubscriptionPaymentOptions**](docs/Api/DefaultApi.md#paymentstripesubscriptionpaymentoptions) | **OPTIONS** /payment/stripe/subscription/payment | 
*DefaultApi* | [**paymentStripeSubscriptionPaymentPost**](docs/Api/DefaultApi.md#paymentstripesubscriptionpaymentpost) | **POST** /payment/stripe/subscription/payment | 
*DefaultApi* | [**paymentStripeWebhookOptions**](docs/Api/DefaultApi.md#paymentstripewebhookoptions) | **OPTIONS** /payment/stripe/webhook | 
*DefaultApi* | [**paymentStripeWebhookPost**](docs/Api/DefaultApi.md#paymentstripewebhookpost) | **POST** /payment/stripe/webhook | 
*DefaultApi* | [**postGet**](docs/Api/DefaultApi.md#postget) | **GET** /post | 
*DefaultApi* | [**postListSearchGet**](docs/Api/DefaultApi.md#postlistsearchget) | **GET** /post/list/search | 
*DefaultApi* | [**postListSearchOptions**](docs/Api/DefaultApi.md#postlistsearchoptions) | **OPTIONS** /post/list/search | 
*DefaultApi* | [**postListTagsSearchGet**](docs/Api/DefaultApi.md#postlisttagssearchget) | **GET** /post/list/tags-search | 
*DefaultApi* | [**postListTagsSearchOptions**](docs/Api/DefaultApi.md#postlisttagssearchoptions) | **OPTIONS** /post/list/tags-search | 
*DefaultApi* | [**postListTopGet**](docs/Api/DefaultApi.md#postlisttopget) | **GET** /post/list/top | 
*DefaultApi* | [**postListTopOptions**](docs/Api/DefaultApi.md#postlisttopoptions) | **OPTIONS** /post/list/top | 
*DefaultApi* | [**postOptions**](docs/Api/DefaultApi.md#postoptions) | **OPTIONS** /post | 
*DefaultApi* | [**postPost**](docs/Api/DefaultApi.md#postpost) | **POST** /post | 
*DefaultApi* | [**postPut**](docs/Api/DefaultApi.md#postput) | **PUT** /post | 
*DefaultApi* | [**postRateOptions**](docs/Api/DefaultApi.md#postrateoptions) | **OPTIONS** /post/rate | 
*DefaultApi* | [**postRatePost**](docs/Api/DefaultApi.md#postratepost) | **POST** /post/rate | 
*DefaultApi* | [**postReportOptions**](docs/Api/DefaultApi.md#postreportoptions) | **OPTIONS** /post/report | 
*DefaultApi* | [**postReportPost**](docs/Api/DefaultApi.md#postreportpost) | **POST** /post/report | 
*DefaultApi* | [**postUploadOptions**](docs/Api/DefaultApi.md#postuploadoptions) | **OPTIONS** /post/upload | 
*DefaultApi* | [**postUploadPost**](docs/Api/DefaultApi.md#postuploadpost) | **POST** /post/upload | 
*DefaultApi* | [**postUtilsRemoteMetaProxyGet**](docs/Api/DefaultApi.md#postutilsremotemetaproxyget) | **GET** /post/utils/remote-meta-proxy | 
*DefaultApi* | [**postUtilsRemoteMetaProxyOptions**](docs/Api/DefaultApi.md#postutilsremotemetaproxyoptions) | **OPTIONS** /post/utils/remote-meta-proxy | 
*DefaultApi* | [**searchCreativeGet**](docs/Api/DefaultApi.md#searchcreativeget) | **GET** /search/creative | 
*DefaultApi* | [**searchCreativeOptions**](docs/Api/DefaultApi.md#searchcreativeoptions) | **OPTIONS** /search/creative | 
*DefaultApi* | [**testUtilsUserConfigureImportedOptions**](docs/Api/DefaultApi.md#testutilsuserconfigureimportedoptions) | **OPTIONS** /test-utils/user/configure/imported | 
*DefaultApi* | [**testUtilsUserConfigureImportedPost**](docs/Api/DefaultApi.md#testutilsuserconfigureimportedpost) | **POST** /test-utils/user/configure/imported | 
*DefaultApi* | [**testUtilsUserConfigureImportedWhitelistedOptions**](docs/Api/DefaultApi.md#testutilsuserconfigureimportedwhitelistedoptions) | **OPTIONS** /test-utils/user/configure/imported-whitelisted | 
*DefaultApi* | [**testUtilsUserConfigureImportedWhitelistedPost**](docs/Api/DefaultApi.md#testutilsuserconfigureimportedwhitelistedpost) | **POST** /test-utils/user/configure/imported-whitelisted | 
*DefaultApi* | [**testUtilsUserConfigureInvitedOptions**](docs/Api/DefaultApi.md#testutilsuserconfigureinvitedoptions) | **OPTIONS** /test-utils/user/configure/invited | 
*DefaultApi* | [**testUtilsUserConfigureInvitedPost**](docs/Api/DefaultApi.md#testutilsuserconfigureinvitedpost) | **POST** /test-utils/user/configure/invited | 
*DefaultApi* | [**uploadNodeOptions**](docs/Api/DefaultApi.md#uploadnodeoptions) | **OPTIONS** /upload/node | 
*DefaultApi* | [**uploadNodePost**](docs/Api/DefaultApi.md#uploadnodepost) | **POST** /upload/node | 
*DefaultApi* | [**userActivityStreamGet**](docs/Api/DefaultApi.md#useractivitystreamget) | **GET** /user/activityStream | 
*DefaultApi* | [**userActivityStreamOptions**](docs/Api/DefaultApi.md#useractivitystreamoptions) | **OPTIONS** /user/activityStream | 
*DefaultApi* | [**userAvailabilityGet**](docs/Api/DefaultApi.md#useravailabilityget) | **GET** /user/availability | 
*DefaultApi* | [**userAvailabilityOptions**](docs/Api/DefaultApi.md#useravailabilityoptions) | **OPTIONS** /user/availability | 
*DefaultApi* | [**userCurrentGet**](docs/Api/DefaultApi.md#usercurrentget) | **GET** /user/current | 
*DefaultApi* | [**userCurrentOptions**](docs/Api/DefaultApi.md#usercurrentoptions) | **OPTIONS** /user/current | 
*DefaultApi* | [**userDelete**](docs/Api/DefaultApi.md#userdelete) | **DELETE** /user | 
*DefaultApi* | [**userGet**](docs/Api/DefaultApi.md#userget) | **GET** /user | 
*DefaultApi* | [**userInviteHashGet**](docs/Api/DefaultApi.md#userinvitehashget) | **GET** /user/invite/hash | 
*DefaultApi* | [**userInviteHashOptions**](docs/Api/DefaultApi.md#userinvitehashoptions) | **OPTIONS** /user/invite/hash | 
*DefaultApi* | [**userInviteOptions**](docs/Api/DefaultApi.md#userinviteoptions) | **OPTIONS** /user/invite | 
*DefaultApi* | [**userInvitePost**](docs/Api/DefaultApi.md#userinvitepost) | **POST** /user/invite | 
*DefaultApi* | [**userInviteesGet**](docs/Api/DefaultApi.md#userinviteesget) | **GET** /user/invitees | 
*DefaultApi* | [**userInviteesOptions**](docs/Api/DefaultApi.md#userinviteesoptions) | **OPTIONS** /user/invitees | 
*DefaultApi* | [**userInvitorGet**](docs/Api/DefaultApi.md#userinvitorget) | **GET** /user/invitor | 
*DefaultApi* | [**userInvitorOptions**](docs/Api/DefaultApi.md#userinvitoroptions) | **OPTIONS** /user/invitor | 
*DefaultApi* | [**userListSearchGet**](docs/Api/DefaultApi.md#userlistsearchget) | **GET** /user/list/search | 
*DefaultApi* | [**userListSearchOptions**](docs/Api/DefaultApi.md#userlistsearchoptions) | **OPTIONS** /user/list/search | 
*DefaultApi* | [**userListTopGet**](docs/Api/DefaultApi.md#userlisttopget) | **GET** /user/list/top | 
*DefaultApi* | [**userListTopOptions**](docs/Api/DefaultApi.md#userlisttopoptions) | **OPTIONS** /user/list/top | 
*DefaultApi* | [**userMoodsGet**](docs/Api/DefaultApi.md#usermoodsget) | **GET** /user/moods | 
*DefaultApi* | [**userMoodsOptions**](docs/Api/DefaultApi.md#usermoodsoptions) | **OPTIONS** /user/moods | 
*DefaultApi* | [**userOptions**](docs/Api/DefaultApi.md#useroptions) | **OPTIONS** /user | 
*DefaultApi* | [**userPost**](docs/Api/DefaultApi.md#userpost) | **POST** /user | 
*DefaultApi* | [**userPreregisterOptions**](docs/Api/DefaultApi.md#userpreregisteroptions) | **OPTIONS** /user/preregister | 
*DefaultApi* | [**userPreregisterPost**](docs/Api/DefaultApi.md#userpreregisterpost) | **POST** /user/preregister | 
*DefaultApi* | [**userPut**](docs/Api/DefaultApi.md#userput) | **PUT** /user | 
*DefaultApi* | [**userRatedInGet**](docs/Api/DefaultApi.md#userratedinget) | **GET** /user/rated/in | 
*DefaultApi* | [**userRatedInOptions**](docs/Api/DefaultApi.md#userratedinoptions) | **OPTIONS** /user/rated/in | 
*DefaultApi* | [**userRatedOutPostsGet**](docs/Api/DefaultApi.md#userratedoutpostsget) | **GET** /user/rated/out/posts | 
*DefaultApi* | [**userRatedOutPostsOptions**](docs/Api/DefaultApi.md#userratedoutpostsoptions) | **OPTIONS** /user/rated/out/posts | 
*DefaultApi* | [**userRatedOutUsersGet**](docs/Api/DefaultApi.md#userratedoutusersget) | **GET** /user/rated/out/users | 
*DefaultApi* | [**userRatedOutUsersOptions**](docs/Api/DefaultApi.md#userratedoutusersoptions) | **OPTIONS** /user/rated/out/users | 
*DefaultApi* | [**userStakeOptions**](docs/Api/DefaultApi.md#userstakeoptions) | **OPTIONS** /user/stake | 
*DefaultApi* | [**userStakePost**](docs/Api/DefaultApi.md#userstakepost) | **POST** /user/stake | 
*DefaultApi* | [**userSyncContactsOptions**](docs/Api/DefaultApi.md#usersynccontactsoptions) | **OPTIONS** /user/syncContacts | 
*DefaultApi* | [**userSyncContactsPost**](docs/Api/DefaultApi.md#usersynccontactspost) | **POST** /user/syncContacts | 
*DefaultApi* | [**userTransferOptions**](docs/Api/DefaultApi.md#usertransferoptions) | **OPTIONS** /user/transfer | 
*DefaultApi* | [**userTransferPost**](docs/Api/DefaultApi.md#usertransferpost) | **POST** /user/transfer | 
*DefaultApi* | [**userUploadOptions**](docs/Api/DefaultApi.md#useruploadoptions) | **OPTIONS** /user/upload | 
*DefaultApi* | [**userUploadPost**](docs/Api/DefaultApi.md#useruploadpost) | **POST** /user/upload | 
*DefaultApi* | [**userUserRateOptions**](docs/Api/DefaultApi.md#useruserrateoptions) | **OPTIONS** /user/userRate | 
*DefaultApi* | [**userUserRatePost**](docs/Api/DefaultApi.md#useruserratepost) | **POST** /user/userRate | 


## Documentation For Models

 - [AnyResponse](docs/Model/AnyResponse.md)
 - [BcAccCreateRequest](docs/Model/BcAccCreateRequest.md)
 - [BcApproveDaoProposalRequest](docs/Model/BcApproveDaoProposalRequest.md)
 - [BcAuthEthRequest](docs/Model/BcAuthEthRequest.md)
 - [BcAuthEthResponse](docs/Model/BcAuthEthResponse.md)
 - [BcCollectionCreateRequest](docs/Model/BcCollectionCreateRequest.md)
 - [BcCollectionCreateRequestTemplateFields](docs/Model/BcCollectionCreateRequestTemplateFields.md)
 - [BcCreateDaoProposal](docs/Model/BcCreateDaoProposal.md)
 - [BcCreateDaoRequest](docs/Model/BcCreateDaoRequest.md)
 - [BcCreateDaoResponse](docs/Model/BcCreateDaoResponse.md)
 - [BcCreateWhitelistDaoProposal](docs/Model/BcCreateWhitelistDaoProposal.md)
 - [BcDaoProposalExecuteRequest](docs/Model/BcDaoProposalExecuteRequest.md)
 - [BcDaoProposalExecuteResponse](docs/Model/BcDaoProposalExecuteResponse.md)
 - [BcDaoProposalVoteRequest](docs/Model/BcDaoProposalVoteRequest.md)
 - [BcDaoProposalVoteResponse](docs/Model/BcDaoProposalVoteResponse.md)
 - [BcDaoProposalVoteResponseRows](docs/Model/BcDaoProposalVoteResponseRows.md)
 - [BcDaoWidthdrawVoteDepositRequest](docs/Model/BcDaoWidthdrawVoteDepositRequest.md)
 - [BcDaoWidthdrawVoteDepositResponse](docs/Model/BcDaoWidthdrawVoteDepositResponse.md)
 - [BcGetAccountInfo](docs/Model/BcGetAccountInfo.md)
 - [BcGetInfoResp](docs/Model/BcGetInfoResp.md)
 - [BcGetPoolInfo](docs/Model/BcGetPoolInfo.md)
 - [BcKeyPairCreateRequest](docs/Model/BcKeyPairCreateRequest.md)
 - [BcKeyPairCreateResponse](docs/Model/BcKeyPairCreateResponse.md)
 - [BcListDaoProposalsResponse](docs/Model/BcListDaoProposalsResponse.md)
 - [BcListDaoProposalsResponseRows](docs/Model/BcListDaoProposalsResponseRows.md)
 - [BcListDaoProposalsResponseVoteNo](docs/Model/BcListDaoProposalsResponseVoteNo.md)
 - [BcListDaoWhitelistResponse](docs/Model/BcListDaoWhitelistResponse.md)
 - [BcMintAssetRequest](docs/Model/BcMintAssetRequest.md)
 - [BcMintAssetRequestImmutableData](docs/Model/BcMintAssetRequestImmutableData.md)
 - [BcPoolCreateRequest](docs/Model/BcPoolCreateRequest.md)
 - [BcStakeMainDAORequest](docs/Model/BcStakeMainDAORequest.md)
 - [BcStakePoolRequest](docs/Model/BcStakePoolRequest.md)
 - [BcTxResponse](docs/Model/BcTxResponse.md)
 - [ConfigureUserRequest](docs/Model/ConfigureUserRequest.md)
 - [CreativeSearchResponse](docs/Model/CreativeSearchResponse.md)
 - [CreativeSearchResponseHits](docs/Model/CreativeSearchResponseHits.md)
 - [CreativeSearchResponseSource](docs/Model/CreativeSearchResponseSource.md)
 - [CreativeSearchResponseSourceMeta](docs/Model/CreativeSearchResponseSourceMeta.md)
 - [ErrorResponse](docs/Model/ErrorResponse.md)
 - [MoodAttachRequest](docs/Model/MoodAttachRequest.md)
 - [MoodCreateRequest](docs/Model/MoodCreateRequest.md)
 - [MoodCreateResponse](docs/Model/MoodCreateResponse.md)
 - [MoodListAttachedPostsResponse](docs/Model/MoodListAttachedPostsResponse.md)
 - [MoodPagedListReadPublicResponse](docs/Model/MoodPagedListReadPublicResponse.md)
 - [MoodPagedListReadPublicResponseAuthor](docs/Model/MoodPagedListReadPublicResponseAuthor.md)
 - [MoodPagedListReadPublicResponseMoods](docs/Model/MoodPagedListReadPublicResponseMoods.md)
 - [MoodPagedListReadPublicResponsePosts](docs/Model/MoodPagedListReadPublicResponsePosts.md)
 - [MoodPagedListReadPublicResponseRel](docs/Model/MoodPagedListReadPublicResponseRel.md)
 - [MoodPagedListReadPublicResponseTags](docs/Model/MoodPagedListReadPublicResponseTags.md)
 - [MoodPagedListReadPublicResponseValue](docs/Model/MoodPagedListReadPublicResponseValue.md)
 - [MoodReadResponse](docs/Model/MoodReadResponse.md)
 - [MoodUpdateRequest](docs/Model/MoodUpdateRequest.md)
 - [OkResponse](docs/Model/OkResponse.md)
 - [PagedRatedResponsePost](docs/Model/PagedRatedResponsePost.md)
 - [PagedRatedResponsePostValue](docs/Model/PagedRatedResponsePostValue.md)
 - [PagedRatedResponseUser](docs/Model/PagedRatedResponseUser.md)
 - [PagedRatedResponseUserRating](docs/Model/PagedRatedResponseUserRating.md)
 - [PagedRatedResponseUserValue](docs/Model/PagedRatedResponseUserValue.md)
 - [PaymentStripePaymentIntentCreateRequest](docs/Model/PaymentStripePaymentIntentCreateRequest.md)
 - [PaymentStripePaymentIntentCreateRequestItems](docs/Model/PaymentStripePaymentIntentCreateRequestItems.md)
 - [PaymentStripePaymentIntentCreateResponse](docs/Model/PaymentStripePaymentIntentCreateResponse.md)
 - [PaymentStripeWebhookRequest](docs/Model/PaymentStripeWebhookRequest.md)
 - [PaymentStripeWebhookRequestData](docs/Model/PaymentStripeWebhookRequestData.md)
 - [PostCreateRequest](docs/Model/PostCreateRequest.md)
 - [PostCreateResponse](docs/Model/PostCreateResponse.md)
 - [PostPagedListReadPublicResponse](docs/Model/PostPagedListReadPublicResponse.md)
 - [PostReadResponse](docs/Model/PostReadResponse.md)
 - [PostRemoteMetaProxyResponse](docs/Model/PostRemoteMetaProxyResponse.md)
 - [PostTagsSearchPublicResponse](docs/Model/PostTagsSearchPublicResponse.md)
 - [PostTagsSearchPublicResponseValue](docs/Model/PostTagsSearchPublicResponseValue.md)
 - [PostUpdateRequest](docs/Model/PostUpdateRequest.md)
 - [RatingUpdateRequest](docs/Model/RatingUpdateRequest.md)
 - [RatingUpdateResponse](docs/Model/RatingUpdateResponse.md)
 - [ReportUpdateRequest](docs/Model/ReportUpdateRequest.md)
 - [ReportUpdateResponse](docs/Model/ReportUpdateResponse.md)
 - [SyncContactsRequest](docs/Model/SyncContactsRequest.md)
 - [SyncContactsRequestContacts](docs/Model/SyncContactsRequestContacts.md)
 - [SyncContactsRequestPhones](docs/Model/SyncContactsRequestPhones.md)
 - [SyncContactsRequestPostalAddresses](docs/Model/SyncContactsRequestPostalAddresses.md)
 - [SyncContactsResponse](docs/Model/SyncContactsResponse.md)
 - [UploadRequest](docs/Model/UploadRequest.md)
 - [UploadRequestGeneric](docs/Model/UploadRequestGeneric.md)
 - [UploadResponse](docs/Model/UploadResponse.md)
 - [UserAvailabilityResponse](docs/Model/UserAvailabilityResponse.md)
 - [UserCreateRequest](docs/Model/UserCreateRequest.md)
 - [UserDeleteRequest](docs/Model/UserDeleteRequest.md)
 - [UserInvitationPagedListReadPublicResponse](docs/Model/UserInvitationPagedListReadPublicResponse.md)
 - [UserInvitationPagedListReadPublicResponseInvitation](docs/Model/UserInvitationPagedListReadPublicResponseInvitation.md)
 - [UserInvitationPagedListReadPublicResponseValue](docs/Model/UserInvitationPagedListReadPublicResponseValue.md)
 - [UserInvitationReadPublicResponse](docs/Model/UserInvitationReadPublicResponse.md)
 - [UserInviteRequest](docs/Model/UserInviteRequest.md)
 - [UserPagedListReadPublicResponse](docs/Model/UserPagedListReadPublicResponse.md)
 - [UserPreRegisterRequest](docs/Model/UserPreRegisterRequest.md)
 - [UserReadPrivateResponse](docs/Model/UserReadPrivateResponse.md)
 - [UserReadPublicResponse](docs/Model/UserReadPublicResponse.md)
 - [UserStakeRequest](docs/Model/UserStakeRequest.md)
 - [UserTransferRequest](docs/Model/UserTransferRequest.md)
 - [UserUpdateRequest](docs/Model/UserUpdateRequest.md)
 - [UserUploadRequest](docs/Model/UserUploadRequest.md)


## Documentation For Authorization


## lambdaAuthorizer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

## newgraph-api-eu-dev

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author




