part of swagger.api;

class MoodPagedListReadPublicResponse {
  
  List<MoodPagedListReadPublicResponseValue> value = [];
  

  bool done = null;
  
  MoodPagedListReadPublicResponse();

  @override
  String toString() {
    return 'MoodPagedListReadPublicResponse[value=$value, done=$done, ]';
  }

  MoodPagedListReadPublicResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
      MoodPagedListReadPublicResponseValue.listFromJson(json['value'])
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

  static List<MoodPagedListReadPublicResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<MoodPagedListReadPublicResponse>() : json.map((value) => new MoodPagedListReadPublicResponse.fromJson(value)).toList();
  }

  static Map<String, MoodPagedListReadPublicResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MoodPagedListReadPublicResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MoodPagedListReadPublicResponse.fromJson(value));
    }
    return map;
  }
}

