part of swagger.api;

class UserInvitationPagedListReadPublicResponse {
  
  List<UserInvitationPagedListReadPublicResponseValue> value = [];
  

  bool done = null;
  
  UserInvitationPagedListReadPublicResponse();

  @override
  String toString() {
    return 'UserInvitationPagedListReadPublicResponse[value=$value, done=$done, ]';
  }

  UserInvitationPagedListReadPublicResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
      UserInvitationPagedListReadPublicResponseValue.listFromJson(json['value'])
;
    done =
        json['done']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'value': value,
      'done': done
     };
  }

  static List<UserInvitationPagedListReadPublicResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserInvitationPagedListReadPublicResponse>() : json.map((value) => new UserInvitationPagedListReadPublicResponse.fromJson(value)).toList();
  }

  static Map<String, UserInvitationPagedListReadPublicResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserInvitationPagedListReadPublicResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserInvitationPagedListReadPublicResponse.fromJson(value));
    }
    return map;
  }
}

