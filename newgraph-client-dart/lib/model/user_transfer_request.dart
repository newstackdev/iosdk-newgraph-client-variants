part of swagger.api;

class UserTransferRequest {
  
  String encryptedPayload = null;
  

  String payload = null;
  
  UserTransferRequest();

  @override
  String toString() {
    return 'UserTransferRequest[encryptedPayload=$encryptedPayload, payload=$payload, ]';
  }

  UserTransferRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    encryptedPayload =
        json['encryptedPayload']
    ;
    payload =
        json['payload']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'encryptedPayload': encryptedPayload,
      'payload': payload
     };
  }

  static List<UserTransferRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserTransferRequest>() : json.map((value) => new UserTransferRequest.fromJson(value)).toList();
  }

  static Map<String, UserTransferRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserTransferRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserTransferRequest.fromJson(value));
    }
    return map;
  }
}

