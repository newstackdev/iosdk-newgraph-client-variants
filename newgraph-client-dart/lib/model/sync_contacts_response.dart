part of swagger.api;

class SyncContactsResponse {
    SyncContactsResponse();

  @override
  String toString() {
    return 'SyncContactsResponse[]';
  }

  SyncContactsResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
  }

  Map<String, dynamic> toJson() {
    return {
     };
  }

  static List<SyncContactsResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<SyncContactsResponse>() : json.map((value) => new SyncContactsResponse.fromJson(value)).toList();
  }

  static Map<String, SyncContactsResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, SyncContactsResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new SyncContactsResponse.fromJson(value));
    }
    return map;
  }
}

