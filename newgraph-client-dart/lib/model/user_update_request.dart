part of swagger.api;

class UserUpdateRequest {
  
  String lastName = null;
  

  String website = null;
  

  String consentPrivacyPolicy = null;
  

  String displayName = null;
  

  num latitude = null;
  

  String newcoinCreateAccount = null;
  

  String fullName = null;
  

  String tumblr = null;
  

  String description = null;
  

  String instagram = null;
  

  String soundcloud = null;
  

  String firstName = null;
  

  String twitter = null;
  

  String tiktok = null;
  

  String id = null;
  

  String consentEmail = null;
  

  num longitude = null;
  
  UserUpdateRequest();

  @override
  String toString() {
    return 'UserUpdateRequest[lastName=$lastName, website=$website, consentPrivacyPolicy=$consentPrivacyPolicy, displayName=$displayName, latitude=$latitude, newcoinCreateAccount=$newcoinCreateAccount, fullName=$fullName, tumblr=$tumblr, description=$description, instagram=$instagram, soundcloud=$soundcloud, firstName=$firstName, twitter=$twitter, tiktok=$tiktok, id=$id, consentEmail=$consentEmail, longitude=$longitude, ]';
  }

  UserUpdateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
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
    newcoinCreateAccount =
        json['newcoinCreateAccount']
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
    tiktok =
        json['tiktok']
    ;
    id =
        json['id']
    ;
    consentEmail =
        json['consentEmail']
    ;
    longitude =
        json['longitude']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'lastName': lastName,
      'website': website,
      'consentPrivacyPolicy': consentPrivacyPolicy,
      'displayName': displayName,
      'latitude': latitude,
      'newcoinCreateAccount': newcoinCreateAccount,
      'fullName': fullName,
      'tumblr': tumblr,
      'description': description,
      'instagram': instagram,
      'soundcloud': soundcloud,
      'firstName': firstName,
      'twitter': twitter,
      'tiktok': tiktok,
      'id': id,
      'consentEmail': consentEmail,
      'longitude': longitude
     };
  }

  static List<UserUpdateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserUpdateRequest>() : json.map((value) => new UserUpdateRequest.fromJson(value)).toList();
  }

  static Map<String, UserUpdateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserUpdateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserUpdateRequest.fromJson(value));
    }
    return map;
  }
}

