part of swagger.api;

class PostRemoteMetaProxyResponse {
  
  String text = null;
  

  num status = null;
  
  PostRemoteMetaProxyResponse();

  @override
  String toString() {
    return 'PostRemoteMetaProxyResponse[text=$text, status=$status, ]';
  }

  PostRemoteMetaProxyResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    text =
        json['text']
    ;
    status =
        json['status']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'text': text,
      'status': status
     };
  }

  static List<PostRemoteMetaProxyResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<PostRemoteMetaProxyResponse>() : json.map((value) => new PostRemoteMetaProxyResponse.fromJson(value)).toList();
  }

  static Map<String, PostRemoteMetaProxyResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PostRemoteMetaProxyResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PostRemoteMetaProxyResponse.fromJson(value));
    }
    return map;
  }
}

