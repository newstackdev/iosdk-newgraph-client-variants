part of swagger.api;

class PagedRatedResponseUser {
  
  List<PagedRatedResponseUserValue> value = [];
  

  bool done = null;
  
  PagedRatedResponseUser();

  @override
  String toString() {
    return 'PagedRatedResponseUser[value=$value, done=$done, ]';
  }

  PagedRatedResponseUser.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
      PagedRatedResponseUserValue.listFromJson(json['value'])
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

  static List<PagedRatedResponseUser> listFromJson(List<dynamic> json) {
    return json == null ? new List<PagedRatedResponseUser>() : json.map((value) => new PagedRatedResponseUser.fromJson(value)).toList();
  }

  static Map<String, PagedRatedResponseUser> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PagedRatedResponseUser>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PagedRatedResponseUser.fromJson(value));
    }
    return map;
  }
}

