part of swagger.api;

class ReportUpdateResponse {
  
  num id = null;
  
  ReportUpdateResponse();

  @override
  String toString() {
    return 'ReportUpdateResponse[id=$id, ]';
  }

  ReportUpdateResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id =
        json['id']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id
     };
  }

  static List<ReportUpdateResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<ReportUpdateResponse>() : json.map((value) => new ReportUpdateResponse.fromJson(value)).toList();
  }

  static Map<String, ReportUpdateResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, ReportUpdateResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new ReportUpdateResponse.fromJson(value));
    }
    return map;
  }
}

