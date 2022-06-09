part of swagger.api;

class PostUpdateRequest {
  
  String license = null;
  

  num latitude = null;
  

  bool doMint = null;
  

  String description = null;
  

  String id = null;
  

  String title = null;
  

  num longitude = null;
  
  PostUpdateRequest();

  @override
  String toString() {
    return 'PostUpdateRequest[license=$license, latitude=$latitude, doMint=$doMint, description=$description, id=$id, title=$title, longitude=$longitude, ]';
  }

  PostUpdateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    license =
        json['license']
    ;
    latitude =
        json['latitude']
    ;
    doMint =
        json['doMint']
    ;
    description =
        json['description']
    ;
    id =
        json['id']
    ;
    title =
        json['title']
    ;
    longitude =
        json['longitude']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'license': license,
      'latitude': latitude,
      'doMint': doMint,
      'description': description,
      'id': id,
      'title': title,
      'longitude': longitude
     };
  }

  static List<PostUpdateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostUpdateRequest>() : json.map((value) => new PostUpdateRequest.fromJson(value)).toList();
  }

  static Map<String, PostUpdateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostUpdateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostUpdateRequest.fromJson(value));
    }
    return map;
  }
}

