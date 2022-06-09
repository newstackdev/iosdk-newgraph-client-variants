part of swagger.api;

class CreativeSearchResponse {
  
  List<CreativeSearchResponseHits> hits = [];
  
  CreativeSearchResponse();

  @override
  String toString() {
    return 'CreativeSearchResponse[hits=$hits, ]';
  }

  CreativeSearchResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    hits =
      CreativeSearchResponseHits.listFromJson(json['hits'])
;
  }

  Map<String, dynamic> toJson() {
    return {
      'hits': hits
     };
  }

  static List<CreativeSearchResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<CreativeSearchResponse>() : json.map((value) => new CreativeSearchResponse.fromJson(value)).toList();
  }

  static Map<String, CreativeSearchResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, CreativeSearchResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new CreativeSearchResponse.fromJson(value));
    }
    return map;
  }
}

