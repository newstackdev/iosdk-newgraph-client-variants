part of swagger.api;

class UserInvitationReadPublicResponse {
  
  String newcoinTicker = null;
  

  String youtube = null;
  

  num powered = null;
  

  String displayName = null;
  

  String newcoinAccTx = null;
  

  num latitude = null;
  

  String description = null;
  

  String newcoinPoolId = null;
  

  String tumblr = null;
  

  num aspectRatio = null;
  

  String instagram = null;
  

  String medium = null;
  

  String newcoinActivePublicKey = null;
  

  String soundcloud = null;
  

  String newcoinPublicKey = null;
  

  num powering = null;
  

  String snapchat = null;
  

  String apple = null;
  

  String twitter = null;
  

  String newcoinOwnerPublicKey = null;
  

  String tiktok = null;
  

  String reddit = null;
  

  String youtubeId = null;
  

  String id = null;
  

  num newcoinPoolStake = null;
  

  String contentType = null;
  

  String signal = null;
  

  num longitude = null;
  

  String newcoinPublisherPublicKey = null;
  

  String website = null;
  

  String created = null;
  

  UserInvitationPagedListReadPublicResponseInvitation invitation = null;
  

  String spotify = null;
  

  String facebook = null;
  

  String facebookId = null;
  

  String fullName = null;
  

  String telegram = null;
  

  String pinterest = null;
  

  List<String> verifiedSocialIds = [];
  

  String newcoinPoolTx = null;
  

  String license = null;
  

  String contentUrl = null;
  

  String discord = null;
  

  String blurHash = null;
  

  String consentEmail = null;
  

  String updated = null;
  

  String username = null;
  
  UserInvitationReadPublicResponse();

  @override
  String toString() {
    return 'UserInvitationReadPublicResponse[newcoinTicker=$newcoinTicker, youtube=$youtube, powered=$powered, displayName=$displayName, newcoinAccTx=$newcoinAccTx, latitude=$latitude, description=$description, newcoinPoolId=$newcoinPoolId, tumblr=$tumblr, aspectRatio=$aspectRatio, instagram=$instagram, medium=$medium, newcoinActivePublicKey=$newcoinActivePublicKey, soundcloud=$soundcloud, newcoinPublicKey=$newcoinPublicKey, powering=$powering, snapchat=$snapchat, apple=$apple, twitter=$twitter, newcoinOwnerPublicKey=$newcoinOwnerPublicKey, tiktok=$tiktok, reddit=$reddit, youtubeId=$youtubeId, id=$id, newcoinPoolStake=$newcoinPoolStake, contentType=$contentType, signal=$signal, longitude=$longitude, newcoinPublisherPublicKey=$newcoinPublisherPublicKey, website=$website, created=$created, invitation=$invitation, spotify=$spotify, facebook=$facebook, facebookId=$facebookId, fullName=$fullName, telegram=$telegram, pinterest=$pinterest, verifiedSocialIds=$verifiedSocialIds, newcoinPoolTx=$newcoinPoolTx, license=$license, contentUrl=$contentUrl, discord=$discord, blurHash=$blurHash, consentEmail=$consentEmail, updated=$updated, username=$username, ]';
  }

  UserInvitationReadPublicResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    newcoinTicker =
        json['newcoinTicker']
    ;
    youtube =
        json['youtube']
    ;
    powered =
        json['powered']
    ;
    displayName =
        json['displayName']
    ;
    newcoinAccTx =
        json['newcoinAccTx']
    ;
    latitude =
        json['latitude']
    ;
    description =
        json['description']
    ;
    newcoinPoolId =
        json['newcoinPoolId']
    ;
    tumblr =
        json['tumblr']
    ;
    aspectRatio =
        json['aspectRatio']
    ;
    instagram =
        json['instagram']
    ;
    medium =
        json['medium']
    ;
    newcoinActivePublicKey =
        json['newcoinActivePublicKey']
    ;
    soundcloud =
        json['soundcloud']
    ;
    newcoinPublicKey =
        json['newcoinPublicKey']
    ;
    powering =
        json['powering']
    ;
    snapchat =
        json['snapchat']
    ;
    apple =
        json['apple']
    ;
    twitter =
        json['twitter']
    ;
    newcoinOwnerPublicKey =
        json['newcoinOwnerPublicKey']
    ;
    tiktok =
        json['tiktok']
    ;
    reddit =
        json['reddit']
    ;
    youtubeId =
        json['youtubeId']
    ;
    id =
        json['id']
    ;
    newcoinPoolStake =
        json['newcoinPoolStake']
    ;
    contentType =
        json['contentType']
    ;
    signal =
        json['signal']
    ;
    longitude =
        json['longitude']
    ;
    newcoinPublisherPublicKey =
        json['newcoinPublisherPublicKey']
    ;
    website =
        json['website']
    ;
    created =
        json['created']
    ;
    invitation =
      
      
      new UserInvitationPagedListReadPublicResponseInvitation.fromJson(json['invitation'])
;
    spotify =
        json['spotify']
    ;
    facebook =
        json['facebook']
    ;
    facebookId =
        json['facebookId']
    ;
    fullName =
        json['fullName']
    ;
    telegram =
        json['telegram']
    ;
    pinterest =
        json['pinterest']
    ;
    verifiedSocialIds =
        (json['verifiedSocialIds'] as List).map((item) => item as String).toList()
    ;
    newcoinPoolTx =
        json['newcoinPoolTx']
    ;
    license =
        json['license']
    ;
    contentUrl =
        json['contentUrl']
    ;
    discord =
        json['discord']
    ;
    blurHash =
        json['blurHash']
    ;
    consentEmail =
        json['consentEmail']
    ;
    updated =
        json['updated']
    ;
    username =
        json['username']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'newcoinTicker': newcoinTicker,
      'youtube': youtube,
      'powered': powered,
      'displayName': displayName,
      'newcoinAccTx': newcoinAccTx,
      'latitude': latitude,
      'description': description,
      'newcoinPoolId': newcoinPoolId,
      'tumblr': tumblr,
      'aspectRatio': aspectRatio,
      'instagram': instagram,
      'medium': medium,
      'newcoinActivePublicKey': newcoinActivePublicKey,
      'soundcloud': soundcloud,
      'newcoinPublicKey': newcoinPublicKey,
      'powering': powering,
      'snapchat': snapchat,
      'apple': apple,
      'twitter': twitter,
      'newcoinOwnerPublicKey': newcoinOwnerPublicKey,
      'tiktok': tiktok,
      'reddit': reddit,
      'youtubeId': youtubeId,
      'id': id,
      'newcoinPoolStake': newcoinPoolStake,
      'contentType': contentType,
      'signal': signal,
      'longitude': longitude,
      'newcoinPublisherPublicKey': newcoinPublisherPublicKey,
      'website': website,
      'created': created,
      'invitation': invitation,
      'spotify': spotify,
      'facebook': facebook,
      'facebookId': facebookId,
      'fullName': fullName,
      'telegram': telegram,
      'pinterest': pinterest,
      'verifiedSocialIds': verifiedSocialIds,
      'newcoinPoolTx': newcoinPoolTx,
      'license': license,
      'contentUrl': contentUrl,
      'discord': discord,
      'blurHash': blurHash,
      'consentEmail': consentEmail,
      'updated': updated,
      'username': username
     };
  }

  static List<UserInvitationReadPublicResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserInvitationReadPublicResponse>() : json.map((value) => new UserInvitationReadPublicResponse.fromJson(value)).toList();
  }

  static Map<String, UserInvitationReadPublicResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserInvitationReadPublicResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserInvitationReadPublicResponse.fromJson(value));
    }
    return map;
  }
}

