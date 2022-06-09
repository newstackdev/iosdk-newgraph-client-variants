part of swagger.api;

class PagedRatedResponsePost {
  
  List<PagedRatedResponsePostValue> value = [];
  

  bool done = null;
  
  PagedRatedResponsePost();

  @override
  String toString() {
    return 'PagedRatedResponsePost[value=$value, done=$done, ]';
  }

  PagedRatedResponsePost.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
      PagedRatedResponsePostValue.listFromJson(json['value'])
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

  static List<PagedRatedResponsePost> listFromJson(List<dynamic> json) {
    return json == null ? new List<PagedRatedResponsePost>() : json.map((value) => new PagedRatedResponsePost.fromJson(value)).toList();
  }

  static Map<String, PagedRatedResponsePost> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PagedRatedResponsePost>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PagedRatedResponsePost.fromJson(value));
    }
    return map;
  }
}

