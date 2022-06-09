part of swagger.api;

class PagedRatedResponsePostRel {
  
  num score = null;
  

  String source = null;
  

  String category = null;
  
  PagedRatedResponsePostRel();

  @override
  String toString() {
    return 'PagedRatedResponsePostRel[score=$score, source=$source, category=$category, ]';
  }

  PagedRatedResponsePostRel.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    score =
        json['score']
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
      'score': score,
      'source': source,
      'category': category
     };
  }

  static List<PagedRatedResponsePostRel> listFromJson(List<dynamic> json) {
    return json == null ? new List<PagedRatedResponsePostRel>() : json.map((value) => new PagedRatedResponsePostRel.fromJson(value)).toList();
  }

  static Map<String, PagedRatedResponsePostRel> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PagedRatedResponsePostRel>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PagedRatedResponsePostRel.fromJson(value));
    }
    return map;
  }
}

