part of swagger.api;

class MoodPagedListReadPublicResponseRel {
  
  String displayValue = null;
  

  num score = null;
  

  String polygons = null;
  

  String source = null;
  

  String category = null;
  
  MoodPagedListReadPublicResponseRel();

  @override
  String toString() {
    return 'MoodPagedListReadPublicResponseRel[displayValue=$displayValue, score=$score, polygons=$polygons, source=$source, category=$category, ]';
  }

  MoodPagedListReadPublicResponseRel.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    displayValue =
        json['displayValue']
    ;
    score =
        json['score']
    ;
    polygons =
        json['polygons']
    ;
    source =
        json['source']
    ;
    category =
        json['category']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'displayValue': displayValue,
      'score': score,
      'polygons': polygons,
      'source': source,
      'category': category
     };
  }

  static List<MoodPagedListReadPublicResponseRel> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodPagedListReadPublicResponseRel>() : json.map((value) => new MoodPagedListReadPublicResponseRel.fromJson(value)).toList();
  }

  static Map<String, MoodPagedListReadPublicResponseRel> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodPagedListReadPublicResponseRel>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodPagedListReadPublicResponseRel.fromJson(value));
    }
    return map;
  }
}

