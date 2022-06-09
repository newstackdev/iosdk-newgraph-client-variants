part of swagger.api;

class BcAuthEthResponse {
  
  bool result = null;
  

  String signedAddr = null;
  

  String comment = null;
  

  String owningAddr = null;
  
  BcAuthEthResponse();

  @override
  String toString() {
    return 'BcAuthEthResponse[result=$result, signedAddr=$signedAddr, comment=$comment, owningAddr=$owningAddr, ]';
  }

  BcAuthEthResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    result =
        json['result']
    ;
    signedAddr =
        json['signedAddr']
    ;
    comment =
        json['comment']
    ;
    owningAddr =
        json['owningAddr']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'result': result,
      'signedAddr': signedAddr,
      'comment': comment,
      'owningAddr': owningAddr
     };
  }

  static List<BcAuthEthResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcAuthEthResponse>() : json.map((value) => new BcAuthEthResponse.fromJson(value)).toList();
  }

  static Map<String, BcAuthEthResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcAuthEthResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcAuthEthResponse.fromJson(value));
    }
    return map;
  }
}

