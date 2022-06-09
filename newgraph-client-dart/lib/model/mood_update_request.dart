part of swagger.api;

class MoodUpdateRequest {
  
  num latitude = null;
  

  String description = null;
  

  String id = null;
  

  String title = null;
  

  num longitude = null;
  
  MoodUpdateRequest();

  @override
  String toString() {
    return 'MoodUpdateRequest[latitude=$latitude, description=$description, id=$id, title=$title, longitude=$longitude, ]';
  }

  MoodUpdateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    latitude =
        json['latitude']
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
      'latitude': latitude,
      'description': description,
      'id': id,
      'title': title,
      'longitude': longitude
     };
  }

  static List<MoodUpdateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodUpdateRequest>() : json.map((value) => new MoodUpdateRequest.fromJson(value)).toList();
  }

  static Map<String, MoodUpdateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodUpdateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodUpdateRequest.fromJson(value));
    }
    return map;
  }
}

