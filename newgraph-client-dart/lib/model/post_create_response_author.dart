part of swagger.api;

class PostCreateResponseAuthor {
  
  String newcoinTicker = null;
  

  num powered = null;
  

  String displayName = null;
  

  String newcoinAccTx = null;
  

  num latitude = null;
  

  String tumblr = null;
  

  String description = null;
  

  String newcoinPoolId = null;
  

  num aspectRatio = null;
  

  String instagram = null;
  

  String soundcloud = null;
  

  String newcoinActivePublicKey = null;
  

  String newcoinPublicKey = null;
  

  num powering = null;
  

  String twitter = null;
  

  String newcoinOwnerPublicKey = null;
  

  String tiktok = null;
  

  String id = null;
  

  num newcoinPoolStake = null;
  

  String contentType = null;
  

  num longitude = null;
  

  String newcoinPublisherPublicKey = null;
  

  String website = null;
  

  String created = null;
  

  String fullName = null;
  

  String newcoinPoolTx = null;
  

  String license = null;
  

  String contentUrl = null;
  

  String blurHash = null;
  

  String consentEmail = null;
  

  String updated = null;
  

  String username = null;
  
  PostCreateResponseAuthor();

  @override
  String toString() {
    return 'PostCreateResponseAuthor[newcoinTicker=$newcoinTicker, powered=$powered, displayName=$displayName, newcoinAccTx=$newcoinAccTx, latitude=$latitude, tumblr=$tumblr, description=$description, newcoinPoolId=$newcoinPoolId, aspectRatio=$aspectRatio, instagram=$instagram, soundcloud=$soundcloud, newcoinActivePublicKey=$newcoinActivePublicKey, newcoinPublicKey=$newcoinPublicKey, powering=$powering, twitter=$twitter, newcoinOwnerPublicKey=$newcoinOwnerPublicKey, tiktok=$tiktok, id=$id, newcoinPoolStake=$newcoinPoolStake, contentType=$contentType, longitude=$longitude, newcoinPublisherPublicKey=$newcoinPublisherPublicKey, website=$website, created=$created, fullName=$fullName, newcoinPoolTx=$newcoinPoolTx, license=$license, contentUrl=$contentUrl, blurHash=$blurHash, consentEmail=$consentEmail, updated=$updated, username=$username, ]';
  }

  PostCreateResponseAuthor.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    newcoinTicker =
        json['newcoinTicker']
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
    tumblr =
        json['tumblr']
    ;
    description =
        json['description']
    ;
    newcoinPoolId =
        json['newcoinPoolId']
    ;
    aspectRatio =
        json['aspectRatio']
    ;
    instagram =
        json['instagram']
    ;
    soundcloud =
        json['soundcloud']
    ;
    newcoinActivePublicKey =
        json['newcoinActivePublicKey']
    ;
    newcoinPublicKey =
        json['newcoinPublicKey']
    ;
    powering =
        json['powering']
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
    id =
        json['id']
    ;
    newcoinPoolStake =
        json['newcoinPoolStake']
    ;
    contentType =
        json['contentType']
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
    fullName =
        json['fullName']
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
      'powered': powered,
      'displayName': displayName,
      'newcoinAccTx': newcoinAccTx,
      'latitude': latitude,
      'tumblr': tumblr,
      'description': description,
      'newcoinPoolId': newcoinPoolId,
      'aspectRatio': aspectRatio,
      'instagram': instagram,
      'soundcloud': soundcloud,
      'newcoinActivePublicKey': newcoinActivePublicKey,
      'newcoinPublicKey': newcoinPublicKey,
      'powering': powering,
      'twitter': twitter,
      'newcoinOwnerPublicKey': newcoinOwnerPublicKey,
      'tiktok': tiktok,
      'id': id,
      'newcoinPoolStake': newcoinPoolStake,
      'contentType': contentType,
      'longitude': longitude,
      'newcoinPublisherPublicKey': newcoinPublisherPublicKey,
      'website': website,
      'created': created,
      'fullName': fullName,
      'newcoinPoolTx': newcoinPoolTx,
      'license': license,
      'contentUrl': contentUrl,
      'blurHash': blurHash,
      'consentEmail': consentEmail,
      'updated': updated,
      'username': username
     };
  }

  static List<PostCreateResponseAuthor> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostCreateResponseAuthor>() : json.map((value) => new PostCreateResponseAuthor.fromJson(value)).toList();
  }

  static Map<String, PostCreateResponseAuthor> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostCreateResponseAuthor>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostCreateResponseAuthor.fromJson(value));
    }
    return map;
  }
}

