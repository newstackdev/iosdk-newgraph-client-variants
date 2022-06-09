part of swagger.api;

class BcPoolCreateRequest {
  
  String owner = null;
  

  String ownerPrvActiveKey = null;
  

  String payer = null;
  
  BcPoolCreateRequest();

  @override
  String toString() {
    return 'BcPoolCreateRequest[owner=$owner, ownerPrvActiveKey=$ownerPrvActiveKey, payer=$payer, ]';
  }

  BcPoolCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    owner =
        json['owner']
    ;
    ownerPrvActiveKey =
        json['owner_prv_active_key']
    ;
    payer =
        json['payer']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'owner': owner,
      'owner_prv_active_key': ownerPrvActiveKey,
      'payer': payer
     };
  }

  static List<BcPoolCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcPoolCreateRequest>() : json.map((value) => new BcPoolCreateRequest.fromJson(value)).toList();
  }

  static Map<String, BcPoolCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcPoolCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcPoolCreateRequest.fromJson(value));
    }
    return map;
  }
}

