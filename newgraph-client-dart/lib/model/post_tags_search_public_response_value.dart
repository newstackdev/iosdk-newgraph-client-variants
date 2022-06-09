part of swagger.api;

class PostTagsSearchPublicResponseValue {
  
  String created = null;
  

  String tag = null;
  
  PostTagsSearchPublicResponseValue();

  @override
  String toString() {
    return 'PostTagsSearchPublicResponseValue[created=$created, tag=$tag, ]';
  }

  PostTagsSearchPublicResponseValue.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    created =
        json['created']
    ;
    tag =
        json['tag']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'created': created,
      'tag': tag
     };
  }

  static List<PostTagsSearchPublicResponseValue> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostTagsSearchPublicResponseValue>() : json.map((value) => new PostTagsSearchPublicResponseValue.fromJson(value)).toList();
  }

  static Map<String, PostTagsSearchPublicResponseValue> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostTagsSearchPublicResponseValue>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostTagsSearchPublicResponseValue.fromJson(value));
    }
    return map;
  }
}

