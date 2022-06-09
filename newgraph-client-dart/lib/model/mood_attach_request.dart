part of swagger.api;

class MoodAttachRequest {
  
  String targetId = null;
  

  String id = null;
  
  MoodAttachRequest();

  @override
  String toString() {
    return 'MoodAttachRequest[targetId=$targetId, id=$id, ]';
  }

  MoodAttachRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    targetId =
        json['targetId']
    ;
    id =
        json['id']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'targetId': targetId,
      'id': id
     };
  }

  static List<MoodAttachRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodAttachRequest>() : json.map((value) => new MoodAttachRequest.fromJson(value)).toList();
  }

  static Map<String, MoodAttachRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodAttachRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodAttachRequest.fromJson(value));
    }
    return map;
  }
}

