part of swagger.api;

class PostPagedListReadPublicResponse {
  
  List<MoodPagedListReadPublicResponsePosts> value = [];
  

  bool done = null;
  
  PostPagedListReadPublicResponse();

  @override
  String toString() {
    return 'PostPagedListReadPublicResponse[value=$value, done=$done, ]';
  }

  PostPagedListReadPublicResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
      MoodPagedListReadPublicResponsePosts.listFromJson(json['value'])
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

  static List<PostPagedListReadPublicResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostPagedListReadPublicResponse>() : json.map((value) => new PostPagedListReadPublicResponse.fromJson(value)).toList();
  }

  static Map<String, PostPagedListReadPublicResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostPagedListReadPublicResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostPagedListReadPublicResponse.fromJson(value));
    }
    return map;
  }
}

