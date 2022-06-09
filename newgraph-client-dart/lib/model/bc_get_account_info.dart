part of swagger.api;

class BcGetAccountInfo {
  
  String owner = null;
  

  String contract = null;
  
  BcGetAccountInfo();

  @override
  String toString() {
    return 'BcGetAccountInfo[owner=$owner, contract=$contract, ]';
  }

  BcGetAccountInfo.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    owner =
        json['owner']
    ;
    contract =
        json['contract']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'owner': owner,
      'contract': contract
     };
  }

  static List<BcGetAccountInfo> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcGetAccountInfo>() : json.map((value) => new BcGetAccountInfo.fromJson(value)).toList();
  }

  static Map<String, BcGetAccountInfo> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcGetAccountInfo>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcGetAccountInfo.fromJson(value));
    }
    return map;
  }
}

