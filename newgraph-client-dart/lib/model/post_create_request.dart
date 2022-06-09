part of swagger.api;

class PostCreateRequest {
  
  String license = null;
  

  String doMint = null;
  

  String description = null;
  

  String title = null;
  

  String contentType = null;
  

  String content = null;
  
  PostCreateRequest();

  @override
  String toString() {
    return 'PostCreateRequest[license=$license, doMint=$doMint, description=$description, title=$title, contentType=$contentType, content=$content, ]';
  }

  PostCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    license =
        json['license']
    ;
    doMint =
        json['doMint']
    ;
    description =
        json['description']
    ;
    title =
        json['title']
    ;
    contentType =
        json['contentType']
    ;
    content =
        json['content']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'license': license,
      'doMint': doMint,
      'description': description,
      'title': title,
      'contentType': contentType,
      'content': content
     };
  }

  static List<PostCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostCreateRequest>() : json.map((value) => new PostCreateRequest.fromJson(value)).toList();
  }

  static Map<String, PostCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostCreateRequest.fromJson(value));
    }
    return map;
  }
}

