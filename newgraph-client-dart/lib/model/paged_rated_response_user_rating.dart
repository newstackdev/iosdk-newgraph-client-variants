part of swagger.api;

class PagedRatedResponseUserRating {
  
  String created = null;
  

  num value = null;
   // range from 0 to 100//

  String updated = null;
  
  PagedRatedResponseUserRating();

  @override
  String toString() {
    return 'PagedRatedResponseUserRating[created=$created, value=$value, updated=$updated, ]';
  }

  PagedRatedResponseUserRating.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    created =
        json['created']
    ;
    value =
        json['value']
    ;
    updated =
        json['updated']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'created': created,
      'value': value,
      'updated': updated
     };
  }

  static List<PagedRatedResponseUserRating> listFromJson(List<dynamic> json) {
    return json == null ? new List<PagedRatedResponseUserRating>() : json.map((value) => new PagedRatedResponseUserRating.fromJson(value)).toList();
  }

  static Map<String, PagedRatedResponseUserRating> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PagedRatedResponseUserRating>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PagedRatedResponseUserRating.fromJson(value));
    }
    return map;
  }
}

