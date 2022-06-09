part of swagger.api;

class UserPagedListReadPublicResponse {
  
  List<MoodPagedListReadPublicResponseAuthor> value = [];
  

  bool done = null;
  
  UserPagedListReadPublicResponse();

  @override
  String toString() {
    return 'UserPagedListReadPublicResponse[value=$value, done=$done, ]';
  }

  UserPagedListReadPublicResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
      MoodPagedListReadPublicResponseAuthor.listFromJson(json['value'])
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

  static List<UserPagedListReadPublicResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserPagedListReadPublicResponse>() : json.map((value) => new UserPagedListReadPublicResponse.fromJson(value)).toList();
  }

  static Map<String, UserPagedListReadPublicResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserPagedListReadPublicResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserPagedListReadPublicResponse.fromJson(value));
    }
    return map;
  }
}

