part of swagger.api;

class QueryParam {
  String name;
  String value;

  QueryParam(this.name, this.value);
}

class ApiClient {

  String basePath;
  var client = new BrowserClient();

  Map<String, String> _defaultHeaderMap = {};
  Map<String, Authentication> _authentications = {};

  final _RegList = new RegExp(r'^List<(.*)>$');
  final _RegMap = new RegExp(r'^Map<String,(.*)>$');

  ApiClient({this.basePath: "https://api-eu-dev.newgra.ph/v1"}) {
    // Setup authentications (key: authentication name, value: authentication).
    _authentications['lambdaAuthorizer'] = new ApiKeyAuth("header", "Authorization");
    _authentications['newgraph-api-eu-dev'] = new ApiKeyAuth("header", "Authorization");
  }

  void addDefaultHeader(String key, String value) {
     _defaultHeaderMap[key] = value;
  }

  dynamic _deserialize(dynamic value, String targetType) {
    try {
      switch (targetType) {
        case 'String':
          return '$value';
        case 'int':
          return value is int ? value : int.parse('$value');
        case 'bool':
          return value is bool ? value : '$value'.toLowerCase() == 'true';
        case 'double':
          return value is double ? value : double.parse('$value');
        case 'AnyResponse':
          return new AnyResponse.fromJson(value);
        case 'BcAccCreateRequest':
          return new BcAccCreateRequest.fromJson(value);
        case 'BcApproveDaoProposalRequest':
          return new BcApproveDaoProposalRequest.fromJson(value);
        case 'BcAuthEthRequest':
          return new BcAuthEthRequest.fromJson(value);
        case 'BcAuthEthResponse':
          return new BcAuthEthResponse.fromJson(value);
        case 'BcCollectionCreateRequest':
          return new BcCollectionCreateRequest.fromJson(value);
        case 'BcCollectionCreateRequestTemplateFields':
          return new BcCollectionCreateRequestTemplateFields.fromJson(value);
        case 'BcCreateDaoProposal':
          return new BcCreateDaoProposal.fromJson(value);
        case 'BcCreateDaoRequest':
          return new BcCreateDaoRequest.fromJson(value);
        case 'BcCreateDaoResponse':
          return new BcCreateDaoResponse.fromJson(value);
        case 'BcCreateWhitelistDaoProposal':
          return new BcCreateWhitelistDaoProposal.fromJson(value);
        case 'BcDaoProposalExecuteRequest':
          return new BcDaoProposalExecuteRequest.fromJson(value);
        case 'BcDaoProposalExecuteResponse':
          return new BcDaoProposalExecuteResponse.fromJson(value);
        case 'BcDaoProposalVoteRequest':
          return new BcDaoProposalVoteRequest.fromJson(value);
        case 'BcDaoProposalVoteResponse':
          return new BcDaoProposalVoteResponse.fromJson(value);
        case 'BcDaoProposalVoteResponseRows':
          return new BcDaoProposalVoteResponseRows.fromJson(value);
        case 'BcDaoWidthdrawVoteDepositRequest':
          return new BcDaoWidthdrawVoteDepositRequest.fromJson(value);
        case 'BcDaoWidthdrawVoteDepositResponse':
          return new BcDaoWidthdrawVoteDepositResponse.fromJson(value);
        case 'BcGetAccountInfo':
          return new BcGetAccountInfo.fromJson(value);
        case 'BcGetInfoResp':
          return new BcGetInfoResp.fromJson(value);
        case 'BcGetPoolInfo':
          return new BcGetPoolInfo.fromJson(value);
        case 'BcKeyPairCreateRequest':
          return new BcKeyPairCreateRequest.fromJson(value);
        case 'BcKeyPairCreateResponse':
          return new BcKeyPairCreateResponse.fromJson(value);
        case 'BcListDaoProposalsResponse':
          return new BcListDaoProposalsResponse.fromJson(value);
        case 'BcListDaoProposalsResponseRows':
          return new BcListDaoProposalsResponseRows.fromJson(value);
        case 'BcListDaoProposalsResponseVoteNo':
          return new BcListDaoProposalsResponseVoteNo.fromJson(value);
        case 'BcListDaoWhitelistResponse':
          return new BcListDaoWhitelistResponse.fromJson(value);
        case 'BcMintAssetRequest':
          return new BcMintAssetRequest.fromJson(value);
        case 'BcMintAssetRequestImmutableData':
          return new BcMintAssetRequestImmutableData.fromJson(value);
        case 'BcPoolCreateRequest':
          return new BcPoolCreateRequest.fromJson(value);
        case 'BcStakeMainDAORequest':
          return new BcStakeMainDAORequest.fromJson(value);
        case 'BcStakePoolRequest':
          return new BcStakePoolRequest.fromJson(value);
        case 'BcTxResponse':
          return new BcTxResponse.fromJson(value);
        case 'ConfigureUserRequest':
          return new ConfigureUserRequest.fromJson(value);
        case 'CreativeSearchResponse':
          return new CreativeSearchResponse.fromJson(value);
        case 'CreativeSearchResponseHits':
          return new CreativeSearchResponseHits.fromJson(value);
        case 'CreativeSearchResponseSource':
          return new CreativeSearchResponseSource.fromJson(value);
        case 'CreativeSearchResponseSourceMeta':
          return new CreativeSearchResponseSourceMeta.fromJson(value);
        case 'ErrorResponse':
          return new ErrorResponse.fromJson(value);
        case 'MoodAttachRequest':
          return new MoodAttachRequest.fromJson(value);
        case 'MoodCreateRequest':
          return new MoodCreateRequest.fromJson(value);
        case 'MoodCreateResponse':
          return new MoodCreateResponse.fromJson(value);
        case 'MoodListAttachedPostsResponse':
          return new MoodListAttachedPostsResponse.fromJson(value);
        case 'MoodPagedListReadPublicResponse':
          return new MoodPagedListReadPublicResponse.fromJson(value);
        case 'MoodPagedListReadPublicResponseAuthor':
          return new MoodPagedListReadPublicResponseAuthor.fromJson(value);
        case 'MoodPagedListReadPublicResponseMoods':
          return new MoodPagedListReadPublicResponseMoods.fromJson(value);
        case 'MoodPagedListReadPublicResponsePosts':
          return new MoodPagedListReadPublicResponsePosts.fromJson(value);
        case 'MoodPagedListReadPublicResponseRel':
          return new MoodPagedListReadPublicResponseRel.fromJson(value);
        case 'MoodPagedListReadPublicResponseTags':
          return new MoodPagedListReadPublicResponseTags.fromJson(value);
        case 'MoodPagedListReadPublicResponseValue':
          return new MoodPagedListReadPublicResponseValue.fromJson(value);
        case 'MoodReadResponse':
          return new MoodReadResponse.fromJson(value);
        case 'MoodUpdateRequest':
          return new MoodUpdateRequest.fromJson(value);
        case 'OkResponse':
          return new OkResponse.fromJson(value);
        case 'PagedRatedResponsePost':
          return new PagedRatedResponsePost.fromJson(value);
        case 'PagedRatedResponsePostValue':
          return new PagedRatedResponsePostValue.fromJson(value);
        case 'PagedRatedResponseUser':
          return new PagedRatedResponseUser.fromJson(value);
        case 'PagedRatedResponseUserRating':
          return new PagedRatedResponseUserRating.fromJson(value);
        case 'PagedRatedResponseUserValue':
          return new PagedRatedResponseUserValue.fromJson(value);
        case 'PaymentStripePaymentIntentCreateRequest':
          return new PaymentStripePaymentIntentCreateRequest.fromJson(value);
        case 'PaymentStripePaymentIntentCreateRequestItems':
          return new PaymentStripePaymentIntentCreateRequestItems.fromJson(value);
        case 'PaymentStripePaymentIntentCreateResponse':
          return new PaymentStripePaymentIntentCreateResponse.fromJson(value);
        case 'PaymentStripeWebhookRequest':
          return new PaymentStripeWebhookRequest.fromJson(value);
        case 'PaymentStripeWebhookRequestData':
          return new PaymentStripeWebhookRequestData.fromJson(value);
        case 'PostCreateRequest':
          return new PostCreateRequest.fromJson(value);
        case 'PostCreateResponse':
          return new PostCreateResponse.fromJson(value);
        case 'PostPagedListReadPublicResponse':
          return new PostPagedListReadPublicResponse.fromJson(value);
        case 'PostReadResponse':
          return new PostReadResponse.fromJson(value);
        case 'PostRemoteMetaProxyResponse':
          return new PostRemoteMetaProxyResponse.fromJson(value);
        case 'PostTagsSearchPublicResponse':
          return new PostTagsSearchPublicResponse.fromJson(value);
        case 'PostTagsSearchPublicResponseValue':
          return new PostTagsSearchPublicResponseValue.fromJson(value);
        case 'PostUpdateRequest':
          return new PostUpdateRequest.fromJson(value);
        case 'RatingUpdateRequest':
          return new RatingUpdateRequest.fromJson(value);
        case 'RatingUpdateResponse':
          return new RatingUpdateResponse.fromJson(value);
        case 'ReportUpdateRequest':
          return new ReportUpdateRequest.fromJson(value);
        case 'ReportUpdateResponse':
          return new ReportUpdateResponse.fromJson(value);
        case 'SyncContactsRequest':
          return new SyncContactsRequest.fromJson(value);
        case 'SyncContactsRequestContacts':
          return new SyncContactsRequestContacts.fromJson(value);
        case 'SyncContactsRequestPhones':
          return new SyncContactsRequestPhones.fromJson(value);
        case 'SyncContactsRequestPostalAddresses':
          return new SyncContactsRequestPostalAddresses.fromJson(value);
        case 'SyncContactsResponse':
          return new SyncContactsResponse.fromJson(value);
        case 'UploadRequest':
          return new UploadRequest.fromJson(value);
        case 'UploadRequestGeneric':
          return new UploadRequestGeneric.fromJson(value);
        case 'UploadResponse':
          return new UploadResponse.fromJson(value);
        case 'UserAvailabilityResponse':
          return new UserAvailabilityResponse.fromJson(value);
        case 'UserCreateRequest':
          return new UserCreateRequest.fromJson(value);
        case 'UserDeleteRequest':
          return new UserDeleteRequest.fromJson(value);
        case 'UserInvitationPagedListReadPublicResponse':
          return new UserInvitationPagedListReadPublicResponse.fromJson(value);
        case 'UserInvitationPagedListReadPublicResponseInvitation':
          return new UserInvitationPagedListReadPublicResponseInvitation.fromJson(value);
        case 'UserInvitationPagedListReadPublicResponseValue':
          return new UserInvitationPagedListReadPublicResponseValue.fromJson(value);
        case 'UserInvitationReadPublicResponse':
          return new UserInvitationReadPublicResponse.fromJson(value);
        case 'UserInviteRequest':
          return new UserInviteRequest.fromJson(value);
        case 'UserPagedListReadPublicResponse':
          return new UserPagedListReadPublicResponse.fromJson(value);
        case 'UserPreRegisterRequest':
          return new UserPreRegisterRequest.fromJson(value);
        case 'UserReadPrivateResponse':
          return new UserReadPrivateResponse.fromJson(value);
        case 'UserReadPublicResponse':
          return new UserReadPublicResponse.fromJson(value);
        case 'UserStakeRequest':
          return new UserStakeRequest.fromJson(value);
        case 'UserTransferRequest':
          return new UserTransferRequest.fromJson(value);
        case 'UserUpdateRequest':
          return new UserUpdateRequest.fromJson(value);
        case 'UserUploadRequest':
          return new UserUploadRequest.fromJson(value);
        default:
          {
            Match match;
            if (value is List &&
                (match = _RegList.firstMatch(targetType)) != null) {
              var newTargetType = match[1];
              return value.map((v) => _deserialize(v, newTargetType)).toList();
            } else if (value is Map &&
                (match = _RegMap.firstMatch(targetType)) != null) {
              var newTargetType = match[1];
              return new Map.fromIterables(value.keys,
                  value.values.map((v) => _deserialize(v, newTargetType)));
            }
          }
      }
    } catch (e, stack) {
      throw new ApiException.withInner(500, 'Exception during deserialization.', e, stack);
    }
    throw new ApiException(500, 'Could not find a suitable class for deserialization');
  }

  dynamic deserialize(String jsonVal, String targetType) {
    // Remove all spaces.  Necessary for reg expressions as well.
    targetType = targetType.replaceAll(' ', '');

    if (targetType == 'String') return jsonVal;

    var decodedJson = json.decode(jsonVal);
    return _deserialize(decodedJson, targetType);
  }

  String serialize(Object obj) {
    String serialized = '';
    if (obj == null) {
      serialized = '';
    } else {
      serialized = json.encode(obj);
    }
    return serialized;
  }

  // We don't use a Map<String, String> for queryParams.
  // If collectionFormat is 'multi' a key might appear multiple times.
  Future<Response> invokeAPI(String path,
                             String method,
                             Iterable<QueryParam> queryParams,
                             Object body,
                             Map<String, String> headerParams,
                             Map<String, String> formParams,
                             String contentType,
                             List<String> authNames) async {

    _updateParamsForAuth(authNames, queryParams, headerParams);

    var ps = queryParams.where((p) => p.value != null).map((p) => '${Uri.encodeComponent(p.name)}=${Uri.encodeComponent(p.value)}');
    String queryString = ps.isNotEmpty ?
                         '?' + ps.join('&') :
                         '';

    String url = basePath + path + queryString;

    headerParams.addAll(_defaultHeaderMap);
    headerParams['Content-Type'] = contentType;

    if(body is MultipartRequest) {
      var request = new MultipartRequest(method, Uri.parse(url));
      request.fields.addAll(body.fields);
      request.files.addAll(body.files);
      request.headers.addAll(body.headers);
      request.headers.addAll(headerParams);
      var response = await client.send(request);
      return Response.fromStream(response);
    } else {
      var msgBody = contentType == "application/x-www-form-urlencoded" ? formParams : serialize(body);
      switch(method) {
        case "POST":
          return client.post(url, headers: headerParams, body: msgBody);
        case "PUT":
          return client.put(url, headers: headerParams, body: msgBody);
        case "DELETE":
          return client.delete(url, headers: headerParams);
        case "PATCH":
          return client.patch(url, headers: headerParams, body: msgBody);
        default:
          return client.get(url, headers: headerParams);
      }
    }
  }

  /// Update query and header parameters based on authentication settings.
  /// @param authNames The authentications to apply
  void _updateParamsForAuth(List<String> authNames, List<QueryParam> queryParams, Map<String, String> headerParams) {
    authNames.forEach((authName) {
      Authentication auth = _authentications[authName];
      if (auth == null) throw new ArgumentError("Authentication undefined: " + authName);
      auth.applyToParams(queryParams, headerParams);
    });
  }

  void setAccessToken(String accessToken) {
    _authentications.forEach((key, auth) {
      if (auth is OAuth) {
        auth.setAccessToken(accessToken);
      }
    });
  }
}
