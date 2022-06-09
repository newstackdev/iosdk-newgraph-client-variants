part of swagger.api;

class UploadResponse {
  
  String filename = null;
  

  String key = null;
  

  String url = null;
  
  UploadResponse();

  @override
  String toString() {
    return 'UploadResponse[filename=$filename, key=$key, url=$url, ]';
  }

  UploadResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    filename =
        json['filename']
    ;
    key =
        json['key']
    ;
    url =
        json['url']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'filename': filename,
      'key': key,
      'url': url
     };
  }

  static List<UploadResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<UploadResponse>() : json.map((value) => new UploadResponse.fromJson(value)).toList();
  }

  static Map<String, UploadResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UploadResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UploadResponse.fromJson(value));
    }
    return map;
  }
}

