part of swagger.api;

class UserInvitationPagedListReadPublicResponseInvitation {
  
  String youtube = null;
  

  String created = null;
  

  String spotify = null;
  

  String facebook = null;
  

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
  

  String tiktok = null;
  

  String reddit = null;
  

  String signal = null;
  

  String hash = null;
  
  UserInvitationPagedListReadPublicResponseInvitation();

  @override
  String toString() {
    return 'UserInvitationPagedListReadPublicResponseInvitation[youtube=$youtube, created=$created, spotify=$spotify, facebook=$facebook, tumblr=$tumblr, telegram=$telegram, pinterest=$pinterest, instagram=$instagram, medium=$medium, soundcloud=$soundcloud, snapchat=$snapchat, apple=$apple, twitter=$twitter, discord=$discord, tiktok=$tiktok, reddit=$reddit, signal=$signal, hash=$hash, ]';
  }

  UserInvitationPagedListReadPublicResponseInvitation.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    youtube =
        json['youtube']
    ;
    created =
        json['created']
    ;
    spotify =
        json['spotify']
    ;
    facebook =
        json['facebook']
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
    tiktok =
        json['tiktok']
    ;
    reddit =
        json['reddit']
    ;
    signal =
        json['signal']
    ;
    hash =
        json['hash']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'youtube': youtube,
      'created': created,
      'spotify': spotify,
      'facebook': facebook,
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
      'tiktok': tiktok,
      'reddit': reddit,
      'signal': signal,
      'hash': hash
     };
  }

  static List<UserInvitationPagedListReadPublicResponseInvitation> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserInvitationPagedListReadPublicResponseInvitation>() : json.map((value) => new UserInvitationPagedListReadPublicResponseInvitation.fromJson(value)).toList();
  }

  static Map<String, UserInvitationPagedListReadPublicResponseInvitation> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserInvitationPagedListReadPublicResponseInvitation>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserInvitationPagedListReadPublicResponseInvitation.fromJson(value));
    }
    return map;
  }
}

