part of swagger.api;

class BcCollectionCreateRequestTemplateFields {
  
  String name = null;
  

  String type = null;
  
  BcCollectionCreateRequestTemplateFields();

  @override
  String toString() {
    return 'BcCollectionCreateRequestTemplateFields[name=$name, type=$type, ]';
  }

  BcCollectionCreateRequestTemplateFields.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    name =
        json['name']
    ;
    type =
        json['type']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'type': type
     };
  }

  static List<BcCollectionCreateRequestTemplateFields> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcCollectionCreateRequestTemplateFields>() : json.map((value) => new BcCollectionCreateRequestTemplateFields.fromJson(value)).toList();
  }

  static Map<String, BcCollectionCreateRequestTemplateFields> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcCollectionCreateRequestTemplateFields>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcCollectionCreateRequestTemplateFields.fromJson(value));
    }
    return map;
  }
}

