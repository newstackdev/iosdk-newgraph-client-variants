part of swagger.api;

class UserInviteRequest {
  
  String youtube = null;
  

  String spotify = null;
  

  String facebook = null;
  

  String fullName = null;
  

  String tumblr = null;
  

  String telegram = null;
  

  String pinterest = null;
  

  String instagram = null;
  

  String medium = null;
  

  String soundcloud = null;
  

  String snapchat = null;
  

  String apple = null;
  

  String twitter = null;
  

  String discord = null;
  

  String phone = null;
  

  String tiktok = null;
  

  String reddit = null;
  

  String signal = null;
  

  String email = null;
  
  UserInviteRequest();

  @override
  String toString() {
    return 'UserInviteRequest[youtube=$youtube, spotify=$spotify, facebook=$facebook, fullName=$fullName, tumblr=$tumblr, telegram=$telegram, pinterest=$pinterest, instagram=$instagram, medium=$medium, soundcloud=$soundcloud, snapchat=$snapchat, apple=$apple, twitter=$twitter, discord=$discord, phone=$phone, tiktok=$tiktok, reddit=$reddit, signal=$signal, email=$email, ]';
  }

  UserInviteRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    youtube =
        json['youtube']
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
    tumblr =
        json['tumblr']
    ;
    telegram =
        json['telegram']
    ;
    pinterest =
        json['pinterest']
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
    discord =
        json['discord']
    ;
    phone =
        json['phone']
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
  }

  Map<String, dynamic> toJson() {
    return {
      'youtube': youtube,
      'spotify': spotify,
      'facebook': facebook,
      'fullName': fullName,
      'tumblr': tumblr,
      'telegram': telegram,
      'pinterest': pinterest,
      'instagram': instagram,
      'medium': medium,
      'soundcloud': soundcloud,
      'snapchat': snapchat,
      'apple': apple,
      'twitter': twitter,
      'discord': discord,
      'phone': phone,
      'tiktok': tiktok,
      'reddit': reddit,
      'signal': signal,
      'email': email
     };
  }

  static List<UserInviteRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserInviteRequest>() : json.map((value) => new UserInviteRequest.fromJson(value)).toList();
  }

  static Map<String, UserInviteRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserInviteRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserInviteRequest.fromJson(value));
    }
    return map;
  }
}

