part of swagger.api;

class BcCollectionCreateRequest {
  
  num mktFee = null;
  

  String templateName = null;
  

  List<BcCollectionCreateRequestTemplateFields> templateFields = [];
  

  bool xferable = null;
  

  num maxSupply = null;
  

  bool allowNotify = null;
  

  bool burnable = null;
  

  String schemaName = null;
  

  List<BcCollectionCreateRequestTemplateFields> schemaFields = [];
  

  String user = null;
  

  String userPrvActiveKey = null;
  

  String collectionName = null;
  
  BcCollectionCreateRequest();

  @override
  String toString() {
    return 'BcCollectionCreateRequest[mktFee=$mktFee, templateName=$templateName, templateFields=$templateFields, xferable=$xferable, maxSupply=$maxSupply, allowNotify=$allowNotify, burnable=$burnable, schemaName=$schemaName, schemaFields=$schemaFields, user=$user, userPrvActiveKey=$userPrvActiveKey, collectionName=$collectionName, ]';
  }

  BcCollectionCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    mktFee =
        json['mkt_fee']
    ;
    templateName =
        json['template_name']
    ;
    templateFields =
      BcCollectionCreateRequestTemplateFields.listFromJson(json['template_fields'])
;
    xferable =
        json['xferable']
    ;
    maxSupply =
        json['max_supply']
    ;
    allowNotify =
        json['allow_notify']
    ;
    burnable =
        json['burnable']
    ;
    schemaName =
        json['schema_name']
    ;
    schemaFields =
      BcCollectionCreateRequestTemplateFields.listFromJson(json['schema_fields'])
;
    user =
        json['user']
    ;
    userPrvActiveKey =
        json['user_prv_active_key']
    ;
    collectionName =
        json['collection_name']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'mkt_fee': mktFee,
      'template_name': templateName,
      'template_fields': templateFields,
      'xferable': xferable,
      'max_supply': maxSupply,
      'allow_notify': allowNotify,
      'burnable': burnable,
      'schema_name': schemaName,
      'schema_fields': schemaFields,
      'user': user,
      'user_prv_active_key': userPrvActiveKey,
      'collection_name': collectionName
     };
  }

  static List<BcCollectionCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcCollectionCreateRequest>() : json.map((value) => new BcCollectionCreateRequest.fromJson(value)).toList();
  }

  static Map<String, BcCollectionCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcCollectionCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcCollectionCreateRequest.fromJson(value));
    }
    return map;
  }
}

