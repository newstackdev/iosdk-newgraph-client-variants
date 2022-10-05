part of swagger.api;

class BcAuthEthRequest {
  
  String encryptedPayload = null;
  

  String payload = null;
  
  BcAuthEthRequest();

  @override
  String toString() {
    return 'BcAuthEthRequest[encryptedPayload=$encryptedPayload, payload=$payload, ]';
  }

  BcAuthEthRequest.fromJson(Map<String, dynamic> json) {
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

  static List<BcAuthEthRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcAuthEthRequest>() : json.map((value) => new BcAuthEthRequest.fromJson(value)).toList();
  }

  static Map<String, BcAuthEthRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcAuthEthRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcAuthEthRequest.fromJson(value));
    }
    return map;
  }
}

