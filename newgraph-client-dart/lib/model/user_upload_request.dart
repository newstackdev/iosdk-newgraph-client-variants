part of swagger.api;

class UserUploadRequest {
  
  String filename = null;
  

  String contentType = null;
  
  UserUploadRequest();

  @override
  String toString() {
    return 'UserUploadRequest[filename=$filename, contentType=$contentType, ]';
  }

  UserUploadRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    filename =
        json['filename']
    ;
    contentType =
        json['contentType']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'filename': filename,
      'contentType': contentType
     };
  }

  static List<UserUploadRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserUploadRequest>() : json.map((value) => new UserUploadRequest.fromJson(value)).toList();
  }

  static Map<String, UserUploadRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserUploadRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserUploadRequest.fromJson(value));
    }
    return map;
  }
}

