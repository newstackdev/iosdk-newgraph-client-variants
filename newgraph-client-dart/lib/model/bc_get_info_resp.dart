part of swagger.api;

class BcGetInfoResp {
    BcGetInfoResp();

  @override
  String toString() {
    return 'BcGetInfoResp[]';
  }

  BcGetInfoResp.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
  }

  Map<String, dynamic> toJson() {
    return {
     };
  }

  static List<BcGetInfoResp> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcGetInfoResp>() : json.map((value) => new BcGetInfoResp.fromJson(value)).toList();
  }

  static Map<String, BcGetInfoResp> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcGetInfoResp>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcGetInfoResp.fromJson(value));
    }
    return map;
  }
}

