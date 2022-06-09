part of swagger.api;

class UserUpdateRequest {
  
  String youtube = null;
  

  String lastName = null;
  

  String consentPrivacyPolicy = null;
  

  String displayName = null;
  

  num latitude = null;
  

  String newcoinCreateAccount = null;
  

  String description = null;
  

  String tumblr = null;
  

  String instagram = null;
  

  String medium = null;
  

  String soundcloud = null;
  

  String snapchat = null;
  

  String apple = null;
  

  String twitter = null;
  

  String tiktok = null;
  

  String reddit = null;
  

  String id = null;
  

  String signal = null;
  

  num longitude = null;
  

  String website = null;
  

  String spotify = null;
  

  String facebook = null;
  

  String fullName = null;
  

  String telegram = null;
  

  String pinterest = null;
  

  String firstName = null;
  

  String discord = null;
  

  String consentEmail = null;
  
  UserUpdateRequest();

  @override
  String toString() {
    return 'UserUpdateRequest[youtube=$youtube, lastName=$lastName, consentPrivacyPolicy=$consentPrivacyPolicy, displayName=$displayName, latitude=$latitude, newcoinCreateAccount=$newcoinCreateAccount, description=$description, tumblr=$tumblr, instagram=$instagram, medium=$medium, soundcloud=$soundcloud, snapchat=$snapchat, apple=$apple, twitter=$twitter, tiktok=$tiktok, reddit=$reddit, id=$id, signal=$signal, longitude=$longitude, website=$website, spotify=$spotify, facebook=$facebook, fullName=$fullName, telegram=$telegram, pinterest=$pinterest, firstName=$firstName, discord=$discord, consentEmail=$consentEmail, ]';
  }

  UserUpdateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    youtube =
        json['youtube']
    ;
    lastName =
        json['lastName']
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
    description =
        json['description']
    ;
    tumblr =
        json['tumblr']
    ;
    instagram =
        json['instagram']
    ;
    medium =
        json['medium']
    ;
    soundcloud =
        json['soundcloud']
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
    tiktok =
        json['tiktok']
    ;
    reddit =
        json['reddit']
    ;
    id =
        json['id']
    ;
    signal =
        json['signal']
    ;
    longitude =
        json['longitude']
    ;
    website =
        json['website']
    ;
    spotify =
        json['spotify']
    ;
    facebook =
        json['facebook']
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
    firstName =
        json['firstName']
    ;
    discord =
        json['discord']
    ;
    consentEmail =
        json['consentEmail']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'youtube': youtube,
      'lastName': lastName,
      'consentPrivacyPolicy': consentPrivacyPolicy,
      'displayName': displayName,
      'latitude': latitude,
      'newcoinCreateAccount': newcoinCreateAccount,
      'description': description,
      'tumblr': tumblr,
      'instagram': instagram,
      'medium': medium,
      'soundcloud': soundcloud,
      'snapchat': snapchat,
      'apple': apple,
      'twitter': twitter,
      'tiktok': tiktok,
      'reddit': reddit,
      'id': id,
      'signal': signal,
      'longitude': longitude,
      'website': website,
      'spotify': spotify,
      'facebook': facebook,
      'fullName': fullName,
      'telegram': telegram,
      'pinterest': pinterest,
      'firstName': firstName,
      'discord': discord,
      'consentEmail': consentEmail
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

