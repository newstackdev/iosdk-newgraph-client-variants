part of swagger.api;

class OkResponse {
  
  bool ok = null;
  
  OkResponse();

  @override
  String toString() {
    return 'OkResponse[ok=$ok, ]';
  }

  OkResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    ok =
        json['ok']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'ok': ok
     };
  }

  static List<OkResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<OkResponse>() : json.map((value) => new OkResponse.fromJson(value)).toList();
  }

  static Map<String, OkResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, OkResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new OkResponse.fromJson(value));
    }
    return map;
  }
}

