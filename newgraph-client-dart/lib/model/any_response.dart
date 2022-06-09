part of swagger.api;

class AnyResponse {
    AnyResponse();

  @override
  String toString() {
    return 'AnyResponse[]';
  }

  AnyResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
  }

  Map<String, dynamic> toJson() {
    return {
     };
  }

  static List<AnyResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<AnyResponse>() : json.map((value) => new AnyResponse.fromJson(value)).toList();
  }

  static Map<String, AnyResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, AnyResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new AnyResponse.fromJson(value));
    }
    return map;
  }
}

