part of swagger.api;

class BcKeyPairCreateResponse {
  
  String prvKey = null;
  

  String pubKey = null;
  
  BcKeyPairCreateResponse();

  @override
  String toString() {
    return 'BcKeyPairCreateResponse[prvKey=$prvKey, pubKey=$pubKey, ]';
  }

  BcKeyPairCreateResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    prvKey =
        json['prv_key']
    ;
    pubKey =
        json['pub_key']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'prv_key': prvKey,
      'pub_key': pubKey
     };
  }

  static List<BcKeyPairCreateResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcKeyPairCreateResponse>() : json.map((value) => new BcKeyPairCreateResponse.fromJson(value)).toList();
  }

  static Map<String, BcKeyPairCreateResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcKeyPairCreateResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcKeyPairCreateResponse.fromJson(value));
    }
    return map;
  }
}

