part of swagger.api;

class SyncContactsRequestPostalAddresses {
  
  String country = null;
  

  String city = null;
  

  String street = null;
  

  String postcode = null;
  

  String label = null;
  

  String region = null;
  
  SyncContactsRequestPostalAddresses();

  @override
  String toString() {
    return 'SyncContactsRequestPostalAddresses[country=$country, city=$city, street=$street, postcode=$postcode, label=$label, region=$region, ]';
  }

  SyncContactsRequestPostalAddresses.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    country =
        json['country']
    ;
    city =
        json['city']
    ;
    street =
        json['street']
    ;
    postcode =
        json['postcode']
    ;
    label =
        json['label']
    ;
    region =
        json['region']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'country': country,
      'city': city,
      'street': street,
      'postcode': postcode,
      'label': label,
      'region': region
     };
  }

  static List<SyncContactsRequestPostalAddresses> listFromJson(List<dynamic> json) {
    return json == null ? new List<SyncContactsRequestPostalAddresses>() : json.map((value) => new SyncContactsRequestPostalAddresses.fromJson(value)).toList();
  }

  static Map<String, SyncContactsRequestPostalAddresses> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, SyncContactsRequestPostalAddresses>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new SyncContactsRequestPostalAddresses.fromJson(value));
    }
    return map;
  }
}

