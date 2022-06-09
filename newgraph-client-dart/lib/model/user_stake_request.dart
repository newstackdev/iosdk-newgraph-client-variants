part of swagger.api;

class UserStakeRequest {
  
  String amount = null;
  

  String key = null;
  

  String username = null;
  
  UserStakeRequest();

  @override
  String toString() {
    return 'UserStakeRequest[amount=$amount, key=$key, username=$username, ]';
  }

  UserStakeRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    amount =
        json['amount']
    ;
    key =
        json['key']
    ;
    username =
        json['username']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'amount': amount,
      'key': key,
      'username': username
     };
  }

  static List<UserStakeRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserStakeRequest>() : json.map((value) => new UserStakeRequest.fromJson(value)).toList();
  }

  static Map<String, UserStakeRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserStakeRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserStakeRequest.fromJson(value));
    }
    return map;
  }
}

