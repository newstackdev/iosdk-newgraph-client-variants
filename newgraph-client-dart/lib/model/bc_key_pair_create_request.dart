part of swagger.api;

class BcKeyPairCreateRequest {
    BcKeyPairCreateRequest();

  @override
  String toString() {
    return 'BcKeyPairCreateRequest[]';
  }

  BcKeyPairCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
  }

  Map<String, dynamic> toJson() {
    return {
     };
  }

  static List<BcKeyPairCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcKeyPairCreateRequest>() : json.map((value) => new BcKeyPairCreateRequest.fromJson(value)).toList();
  }

  static Map<String, BcKeyPairCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcKeyPairCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcKeyPairCreateRequest.fromJson(value));
    }
    return map;
  }
}

