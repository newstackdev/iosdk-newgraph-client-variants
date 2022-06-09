part of swagger.api;

class UserCreateRequest {
  
  String newcoinTicker = null;
  

  String lastName = null;
  

  String website = null;
  

  String consentPrivacyPolicy = null;
  

  String displayName = null;
  

  num latitude = null;
  

  String fullName = null;
  

  String tumblr = null;
  

  String description = null;
  

  String instagram = null;
  

  String soundcloud = null;
  

  String firstName = null;
  

  String twitter = null;
  

  String consentTestgroup = null;
  

  String phone = null;
  

  String tiktok = null;
  

  String legacyToken = null;
  

  String consentEmail = null;
  

  String email = null;
  

  num longitude = null;
  

  String username = null;
  
  UserCreateRequest();

  @override
  String toString() {
    return 'UserCreateRequest[newcoinTicker=$newcoinTicker, lastName=$lastName, website=$website, consentPrivacyPolicy=$consentPrivacyPolicy, displayName=$displayName, latitude=$latitude, fullName=$fullName, tumblr=$tumblr, description=$description, instagram=$instagram, soundcloud=$soundcloud, firstName=$firstName, twitter=$twitter, consentTestgroup=$consentTestgroup, phone=$phone, tiktok=$tiktok, legacyToken=$legacyToken, consentEmail=$consentEmail, email=$email, longitude=$longitude, username=$username, ]';
  }

  UserCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    newcoinTicker =
        json['newcoinTicker']
    ;
    lastName =
        json['lastName']
    ;
    website =
        json['website']
    ;
    consentPrivacyPolicy =
        json['consentPrivacyPolicy']
    ;
    displayName =
        json['displayName']
    ;
    latitude =
        json['latitude']
    ;
    fullName =
        json['fullName']
    ;
    tumblr =
        json['tumblr']
    ;
    description =
        json['description']
    ;
    instagram =
        json['instagram']
    ;
    soundcloud =
        json['soundcloud']
    ;
    firstName =
        json['firstName']
    ;
    twitter =
        json['twitter']
    ;
    consentTestgroup =
        json['consentTestgroup']
    ;
    phone =
        json['phone']
    ;
    tiktok =
        json['tiktok']
    ;
    legacyToken =
        json['legacyToken']
    ;
    consentEmail =
        json['consentEmail']
    ;
    email =
        json['email']
    ;
    longitude =
        json['longitude']
    ;
    username =
        json['username']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'newcoinTicker': newcoinTicker,
      'lastName': lastName,
      'website': website,
      'consentPrivacyPolicy': consentPrivacyPolicy,
      'displayName': displayName,
      'latitude': latitude,
      'fullName': fullName,
      'tumblr': tumblr,
      'description': description,
      'instagram': instagram,
      'soundcloud': soundcloud,
      'firstName': firstName,
      'twitter': twitter,
      'consentTestgroup': consentTestgroup,
      'phone': phone,
      'tiktok': tiktok,
      'legacyToken': legacyToken,
      'consentEmail': consentEmail,
      'email': email,
      'longitude': longitude,
      'username': username
     };
  }

  static List<UserCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserCreateRequest>() : json.map((value) => new UserCreateRequest.fromJson(value)).toList();
  }

  static Map<String, UserCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserCreateRequest.fromJson(value));
    }
    return map;
  }
}

