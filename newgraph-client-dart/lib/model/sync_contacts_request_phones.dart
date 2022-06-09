part of swagger.api;

class SyncContactsRequestPhones {
  
  String label = null;
  

  String value = null;
  
  SyncContactsRequestPhones();

  @override
  String toString() {
    return 'SyncContactsRequestPhones[label=$label, value=$value, ]';
  }

  SyncContactsRequestPhones.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    label =
        json['label']
    ;
    value =
        json['value']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'label': label,
      'value': value
     };
  }

  static List<SyncContactsRequestPhones> listFromJson(List<dynamic> json) {
    return json == null ? new List<SyncContactsRequestPhones>() : json.map((value) => new SyncContactsRequestPhones.fromJson(value)).toList();
  }

  static Map<String, SyncContactsRequestPhones> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, SyncContactsRequestPhones>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new SyncContactsRequestPhones.fromJson(value));
    }
    return map;
  }
}

