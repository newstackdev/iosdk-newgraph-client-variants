part of swagger.api;

class MoodListAttachedPostsResponse {
  
  List<MoodCreateResponsePosts> value = [];
  

  bool done = null;
  
  MoodListAttachedPostsResponse();

  @override
  String toString() {
    return 'MoodListAttachedPostsResponse[value=$value, done=$done, ]';
  }

  MoodListAttachedPostsResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
      MoodCreateResponsePosts.listFromJson(json['value'])
;
    done =
        json['done']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'value': value,
      'done': done
     };
  }

  static List<MoodListAttachedPostsResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodListAttachedPostsResponse>() : json.map((value) => new MoodListAttachedPostsResponse.fromJson(value)).toList();
  }

  static Map<String, MoodListAttachedPostsResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodListAttachedPostsResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodListAttachedPostsResponse.fromJson(value));
    }
    return map;
  }
}

