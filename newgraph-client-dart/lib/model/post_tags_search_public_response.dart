part of swagger.api;

class PostTagsSearchPublicResponse {
  
  Object done = null;
  

  List<PostTagsSearchPublicResponseValue> value = [];
  
  PostTagsSearchPublicResponse();

  @override
  String toString() {
    return 'PostTagsSearchPublicResponse[done=$done, value=$value, ]';
  }

  PostTagsSearchPublicResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    done =
      
      
      new Object.fromJson(json['done'])
;
    value =
      PostTagsSearchPublicResponseValue.listFromJson(json['value'])
;
  }

  Map<String, dynamic> toJson() {
    return {
      'done': done,
      'value': value
     };
  }

  static List<PostTagsSearchPublicResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostTagsSearchPublicResponse>() : json.map((value) => new PostTagsSearchPublicResponse.fromJson(value)).toList();
  }

  static Map<String, PostTagsSearchPublicResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostTagsSearchPublicResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostTagsSearchPublicResponse.fromJson(value));
    }
    return map;
  }
}

