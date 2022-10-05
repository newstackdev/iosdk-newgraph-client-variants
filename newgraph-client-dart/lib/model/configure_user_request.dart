part of swagger.api;

class ConfigureUserRequest {
  
  String phone = null;
  

  String email = null;
  

  String username = null;
  
  ConfigureUserRequest();

  @override
  String toString() {
    return 'ConfigureUserRequest[phone=$phone, email=$email, username=$username, ]';
  }

  ConfigureUserRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    phone =
        json['phone']
    ;
    email =
        json['email']
    ;
    username =
        json['username']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'phone': phone,
      'email': email,
      'username': username
     };
  }

  static List<ConfigureUserRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<ConfigureUserRequest>() : json.map((value) => new ConfigureUserRequest.fromJson(value)).toList();
  }

  static Map<String, ConfigureUserRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, ConfigureUserRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new ConfigureUserRequest.fromJson(value));
    }
    return map;
  }
}

