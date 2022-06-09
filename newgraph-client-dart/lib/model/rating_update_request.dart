part of swagger.api;

class RatingUpdateRequest {
  
  String targetId = null;
  

  String contextType = null;
  

  String contextValue = null;
  

  num value = null;
   // range from 0 to 100//
  RatingUpdateRequest();

  @override
  String toString() {
    return 'RatingUpdateRequest[targetId=$targetId, contextType=$contextType, contextValue=$contextValue, value=$value, ]';
  }

  RatingUpdateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    targetId =
        json['targetId']
    ;
    contextType =
        json['contextType']
    ;
    contextValue =
        json['contextValue']
    ;
    value =
        json['value']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'targetId': targetId,
      'contextType': contextType,
      'contextValue': contextValue,
      'value': value
     };
  }

  static List<RatingUpdateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<RatingUpdateRequest>() : json.map((value) => new RatingUpdateRequest.fromJson(value)).toList();
  }

  static Map<String, RatingUpdateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, RatingUpdateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new RatingUpdateRequest.fromJson(value));
    }
    return map;
  }
}

