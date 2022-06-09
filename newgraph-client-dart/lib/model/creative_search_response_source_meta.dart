part of swagger.api;

class CreativeSearchResponseSourceMeta {
  
  String date = null;
  

  String summary = null;
  

  int id = null;
  

  String blogName = null;
  

  List<String> tags = [];
  

  String shortUrl = null;
  
  CreativeSearchResponseSourceMeta();

  @override
  String toString() {
    return 'CreativeSearchResponseSourceMeta[date=$date, summary=$summary, id=$id, blogName=$blogName, tags=$tags, shortUrl=$shortUrl, ]';
  }

  CreativeSearchResponseSourceMeta.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    date =
        json['date']
    ;
    summary =
        json['summary']
    ;
    id =
        json['id']
    ;
    blogName =
        json['blog_name']
    ;
    tags =
        (json['tags'] as List).map((item) => item as String).toList()
    ;
    shortUrl =
        json['short_url']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'date': date,
      'summary': summary,
      'id': id,
      'blog_name': blogName,
      'tags': tags,
      'short_url': shortUrl
     };
  }

  static List<CreativeSearchResponseSourceMeta> listFromJson(List<dynamic> json) {
    return json == null ? new List<CreativeSearchResponseSourceMeta>() : json.map((value) => new CreativeSearchResponseSourceMeta.fromJson(value)).toList();
  }

  static Map<String, CreativeSearchResponseSourceMeta> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, CreativeSearchResponseSourceMeta>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new CreativeSearchResponseSourceMeta.fromJson(value));
    }
    return map;
  }
}

