part of swagger.api;

class BcGetPoolInfo {
  
  String owner = null;
  
  BcGetPoolInfo();

  @override
  String toString() {
    return 'BcGetPoolInfo[owner=$owner, ]';
  }

  BcGetPoolInfo.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    owner =
        json['owner']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'owner': owner
     };
  }

  static List<BcGetPoolInfo> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcGetPoolInfo>() : json.map((value) => new BcGetPoolInfo.fromJson(value)).toList();
  }

  static Map<String, BcGetPoolInfo> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcGetPoolInfo>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcGetPoolInfo.fromJson(value));
    }
    return map;
  }
}

