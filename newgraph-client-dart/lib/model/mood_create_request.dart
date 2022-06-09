part of swagger.api;

class MoodCreateRequest {
  
  num latitude = null;
  

  String description = null;
  

  String title = null;
  

  num longitude = null;
  
  MoodCreateRequest();

  @override
  String toString() {
    return 'MoodCreateRequest[latitude=$latitude, description=$description, title=$title, longitude=$longitude, ]';
  }

  MoodCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    latitude =
        json['latitude']
    ;
    description =
        json['description']
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
      'latitude': latitude,
      'description': description,
      'title': title,
      'longitude': longitude
     };
  }

  static List<MoodCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodCreateRequest>() : json.map((value) => new MoodCreateRequest.fromJson(value)).toList();
  }

  static Map<String, MoodCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodCreateRequest.fromJson(value));
    }
    return map;
  }
}

