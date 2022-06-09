part of swagger.api;

class ReportUpdateRequest {
  
  String reason = null;
  

  String targetId = null;
  

  String comment = null;
  
  ReportUpdateRequest();

  @override
  String toString() {
    return 'ReportUpdateRequest[reason=$reason, targetId=$targetId, comment=$comment, ]';
  }

  ReportUpdateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    reason =
        json['reason']
    ;
    targetId =
        json['targetId']
    ;
    comment =
        json['comment']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'reason': reason,
      'targetId': targetId,
      'comment': comment
     };
  }

  static List<ReportUpdateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<ReportUpdateRequest>() : json.map((value) => new ReportUpdateRequest.fromJson(value)).toList();
  }

  static Map<String, ReportUpdateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, ReportUpdateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new ReportUpdateRequest.fromJson(value));
    }
    return map;
  }
}

