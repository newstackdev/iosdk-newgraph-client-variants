part of swagger.api;

class UserPreRegisterRequest {
  
  String consentTestgroup = null;
  

  String consentPrivacyPolicy = null;
  

  String phone = null;
  

  String fullName = null;
  

  String consentEmail = null;
  

  String email = null;
  
  UserPreRegisterRequest();

  @override
  String toString() {
    return 'UserPreRegisterRequest[consentTestgroup=$consentTestgroup, consentPrivacyPolicy=$consentPrivacyPolicy, phone=$phone, fullName=$fullName, consentEmail=$consentEmail, email=$email, ]';
  }

  UserPreRegisterRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    consentTestgroup =
        json['consentTestgroup']
    ;
    consentPrivacyPolicy =
        json['consentPrivacyPolicy']
    ;
    phone =
        json['phone']
    ;
    fullName =
        json['fullName']
    ;
    consentEmail =
        json['consentEmail']
    ;
    email =
        json['email']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'consentTestgroup': consentTestgroup,
      'consentPrivacyPolicy': consentPrivacyPolicy,
      'phone': phone,
      'fullName': fullName,
      'consentEmail': consentEmail,
      'email': email
     };
  }

  static List<UserPreRegisterRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserPreRegisterRequest>() : json.map((value) => new UserPreRegisterRequest.fromJson(value)).toList();
  }

  static Map<String, UserPreRegisterRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserPreRegisterRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserPreRegisterRequest.fromJson(value));
    }
    return map;
  }
}

