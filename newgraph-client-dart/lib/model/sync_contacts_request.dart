part of swagger.api;

class SyncContactsRequest {
  
  List<SyncContactsRequestContacts> contacts = [];
  
  SyncContactsRequest();

  @override
  String toString() {
    return 'SyncContactsRequest[contacts=$contacts, ]';
  }

  SyncContactsRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contacts =
      SyncContactsRequestContacts.listFromJson(json['contacts'])
;
  }

  Map<String, dynamic> toJson() {
    return {
      'contacts': contacts
     };
  }

  static List<SyncContactsRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<SyncContactsRequest>() : json.map((value) => new SyncContactsRequest.fromJson(value)).toList();
  }

  static Map<String, SyncContactsRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, SyncContactsRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new SyncContactsRequest.fromJson(value));
    }
    return map;
  }
}

