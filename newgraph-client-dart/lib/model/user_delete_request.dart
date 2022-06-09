part of swagger.api;

class UserDeleteRequest {
  
  String phone = null;
  

  String email = null;
  
  UserDeleteRequest();

  @override
  String toString() {
    return 'UserDeleteRequest[phone=$phone, email=$email, ]';
  }

  UserDeleteRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    phone =
        json['phone']
    ;
    email =
        json['email']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'phone': phone,
      'email': email
     };
  }

  static List<UserDeleteRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserDeleteRequest>() : json.map((value) => new UserDeleteRequest.fromJson(value)).toList();
  }

  static Map<String, UserDeleteRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserDeleteRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserDeleteRequest.fromJson(value));
    }
    return map;
  }
}

