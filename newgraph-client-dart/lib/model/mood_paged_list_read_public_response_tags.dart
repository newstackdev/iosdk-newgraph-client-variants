part of swagger.api;

class MoodPagedListReadPublicResponseTags {
  
  List<MoodPagedListReadPublicResponseRel> rel = [];
  

  String id = null;
  

  String value = null;
  
  MoodPagedListReadPublicResponseTags();

  @override
  String toString() {
    return 'MoodPagedListReadPublicResponseTags[rel=$rel, id=$id, value=$value, ]';
  }

  MoodPagedListReadPublicResponseTags.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    rel =
      MoodPagedListReadPublicResponseRel.listFromJson(json['_rel'])
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

  static List<MoodPagedListReadPublicResponseTags> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodPagedListReadPublicResponseTags>() : json.map((value) => new MoodPagedListReadPublicResponseTags.fromJson(value)).toList();
  }

  static Map<String, MoodPagedListReadPublicResponseTags> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodPagedListReadPublicResponseTags>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodPagedListReadPublicResponseTags.fromJson(value));
    }
    return map;
  }
}

