part of swagger.api;

class UserInviteRequest {
  
  String phone = null;
  

  String fullName = null;
  

  String email = null;
  
  UserInviteRequest();

  @override
  String toString() {
    return 'UserInviteRequest[phone=$phone, fullName=$fullName, email=$email, ]';
  }

  UserInviteRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    phone =
        json['phone']
    ;
    fullName =
        json['fullName']
    ;
    email =
        json['email']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'phone': phone,
      'fullName': fullName,
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

