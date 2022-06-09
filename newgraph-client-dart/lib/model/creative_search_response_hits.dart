part of swagger.api;

class CreativeSearchResponseHits {
  
  CreativeSearchResponseSource source = null;
  

  String id = null;
  
  CreativeSearchResponseHits();

  @override
  String toString() {
    return 'CreativeSearchResponseHits[source=$source, id=$id, ]';
  }

  CreativeSearchResponseHits.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    source =
      
      
      new CreativeSearchResponseSource.fromJson(json['_source'])
;
    id =
        json['_id']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      '_source': source,
      '_id': id
     };
  }

  static List<CreativeSearchResponseHits> listFromJson(List<dynamic> json) {
    return json == null ? new List<CreativeSearchResponseHits>() : json.map((value) => new CreativeSearchResponseHits.fromJson(value)).toList();
  }

  static Map<String, CreativeSearchResponseHits> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, CreativeSearchResponseHits>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new CreativeSearchResponseHits.fromJson(value));
    }
    return map;
  }
}

