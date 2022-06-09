part of swagger.api;

class PagedRatedResponsePostTags {
  
  List<PagedRatedResponsePostRel> rel = [];
  

  String id = null;
  

  String value = null;
  
  PagedRatedResponsePostTags();

  @override
  String toString() {
    return 'PagedRatedResponsePostTags[rel=$rel, id=$id, value=$value, ]';
  }

  PagedRatedResponsePostTags.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    rel =
      PagedRatedResponsePostRel.listFromJson(json['_rel'])
;
    id =
        json['id']
    ;
    value =
        json['value']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      '_rel': rel,
      'id': id,
      'value': value
     };
  }

  static List<PagedRatedResponsePostTags> listFromJson(List<dynamic> json) {
    return json == null ? new List<PagedRatedResponsePostTags>() : json.map((value) => new PagedRatedResponsePostTags.fromJson(value)).toList();
  }

  static Map<String, PagedRatedResponsePostTags> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PagedRatedResponsePostTags>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PagedRatedResponsePostTags.fromJson(value));
    }
    return map;
  }
}

