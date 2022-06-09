part of swagger.api;

class UploadRequest {
  
  String filename = null;
  

  String targetId = null;
  

  String targetModel = null;
  

  String contentType = null;
  
  UploadRequest();

  @override
  String toString() {
    return 'UploadRequest[filename=$filename, targetId=$targetId, targetModel=$targetModel, contentType=$contentType, ]';
  }

  UploadRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    filename =
        json['filename']
    ;
    targetId =
        json['targetId']
    ;
    targetModel =
        json['targetModel']
    ;
    contentType =
        json['contentType']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'filename': filename,
      'targetId': targetId,
      'targetModel': targetModel,
      'contentType': contentType
     };
  }

  static List<UploadRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<UploadRequest>() : json.map((value) => new UploadRequest.fromJson(value)).toList();
  }

  static Map<String, UploadRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UploadRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UploadRequest.fromJson(value));
    }
    return map;
  }
}

