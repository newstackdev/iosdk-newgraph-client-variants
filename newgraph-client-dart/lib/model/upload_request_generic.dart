part of swagger.api;

class UploadRequestGeneric {
  
  String filename = null;
  

  String targetId = null;
  

  String contentType = null;
  
  UploadRequestGeneric();

  @override
  String toString() {
    return 'UploadRequestGeneric[filename=$filename, targetId=$targetId, contentType=$contentType, ]';
  }

  UploadRequestGeneric.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    filename =
        json['filename']
    ;
    targetId =
        json['targetId']
    ;
    contentType =
        json['contentType']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'filename': filename,
      'targetId': targetId,
      'contentType': contentType
     };
  }

  static List<UploadRequestGeneric> listFromJson(List<dynamic> json) {
    return json == null ? new List<UploadRequestGeneric>() : json.map((value) => new UploadRequestGeneric.fromJson(value)).toList();
  }

  static Map<String, UploadRequestGeneric> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UploadRequestGeneric>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UploadRequestGeneric.fromJson(value));
    }
    return map;
  }
}

