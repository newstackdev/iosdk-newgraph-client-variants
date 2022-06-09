part of swagger.api;

class UserCreateRequest {
  
  String newcoinTicker = null;
  

  String youtube = null;
  

  String lastName = null;
  

  String consentPrivacyPolicy = null;
  

  String displayName = null;
  

  num latitude = null;
  

  String description = null;
  

  String tumblr = null;
  

  String instagram = null;
  

  String medium = null;
  

  String soundcloud = null;
  

  String snapchat = null;
  

  String apple = null;
  

  String consentTestgroup = null;
  

  String twitter = null;
  

  String legacyToken = null;
  

  String tiktok = null;
  

  String reddit = null;
  

  String signal = null;
  

  String email = null;
  

  num longitude = null;
  

  String website = null;
  

  String spotify = null;
  

  String facebook = null;
  

  String fullName = null;
  

  String telegram = null;
  

  String pinterest = null;
  

  String firstName = null;
  

  String discord = null;
  

  String phone = null;
  

  String consentEmail = null;
  

  String username = null;
  
  UserCreateRequest();

  @override
  String toString() {
    return 'UserCreateRequest[newcoinTicker=$newcoinTicker, youtube=$youtube, lastName=$lastName, consentPrivacyPolicy=$consentPrivacyPolicy, displayName=$displayName, latitude=$latitude, description=$description, tumblr=$tumblr, instagram=$instagram, medium=$medium, soundcloud=$soundcloud, snapchat=$snapchat, apple=$apple, consentTestgroup=$consentTestgroup, twitter=$twitter, legacyToken=$legacyToken, tiktok=$tiktok, reddit=$reddit, signal=$signal, email=$email, longitude=$longitude, website=$website, spotify=$spotify, facebook=$facebook, fullName=$fullName, telegram=$telegram, pinterest=$pinterest, firstName=$firstName, discord=$discord, phone=$phone, consentEmail=$consentEmail, username=$username, ]';
  }

  UserCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    newcoinTicker =
        json['newcoinTicker']
    ;
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
    consentTestgroup =
        json['consentTestgroup']
    ;
    twitter =
        json['twitter']
    ;
    legacyToken =
        json['legacyToken']
    ;
    tiktok =
        json['tiktok']
    ;
    reddit =
        json['reddit']
    ;
    signal =
        json['signal']
    ;
    email =
        json['email']
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
    phone =
        json['phone']
    ;
    consentEmail =
        json['consentEmail']
    ;
    username =
        json['username']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'newcoinTicker': newcoinTicker,
      'youtube': youtube,
      'lastName': lastName,
      'consentPrivacyPolicy': consentPrivacyPolicy,
      'displayName': displayName,
      'latitude': latitude,
      'description': description,
      'tumblr': tumblr,
      'instagram': instagram,
      'medium': medium,
      'soundcloud': soundcloud,
      'snapchat': snapchat,
      'apple': apple,
      'consentTestgroup': consentTestgroup,
      'twitter': twitter,
      'legacyToken': legacyToken,
      'tiktok': tiktok,
      'reddit': reddit,
      'signal': signal,
      'email': email,
      'longitude': longitude,
      'website': website,
      'spotify': spotify,
      'facebook': facebook,
      'fullName': fullName,
      'telegram': telegram,
      'pinterest': pinterest,
      'firstName': firstName,
      'discord': discord,
      'phone': phone,
      'consentEmail': consentEmail,
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

