part of swagger.api;

class CreativeSearchResponseSource {
  
  String image = null;
  

  CreativeSearchResponseSourceMeta meta = null;
  

  Object aesthetics = null;
  

  Object content = null;
  
  CreativeSearchResponseSource();

  @override
  String toString() {
    return 'CreativeSearchResponseSource[image=$image, meta=$meta, aesthetics=$aesthetics, content=$content, ]';
  }

  CreativeSearchResponseSource.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    image =
        json['image']
    ;
    meta =
      
      
      new CreativeSearchResponseSourceMeta.fromJson(json['meta'])
;
    aesthetics =
      
      
      new Object.fromJson(json['aesthetics'])
;
    content =
      
      
      new Object.fromJson(json['content'])
;
  }

  Map<String, dynamic> toJson() {
    return {
      'image': image,
      'meta': meta,
      'aesthetics': aesthetics,
      'content': content
     };
  }

  static List<CreativeSearchResponseSource> listFromJson(List<dynamic> json) {
    return json == null ? new List<CreativeSearchResponseSource>() : json.map((value) => new CreativeSearchResponseSource.fromJson(value)).toList();
  }

  static Map<String, CreativeSearchResponseSource> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, CreativeSearchResponseSource>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new CreativeSearchResponseSource.fromJson(value));
    }
    return map;
  }
}

