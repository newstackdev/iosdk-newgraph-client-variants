part of swagger.api;

class BcListDaoWhitelistResponse {
    BcListDaoWhitelistResponse();

  @override
  String toString() {
    return 'BcListDaoWhitelistResponse[]';
  }

  BcListDaoWhitelistResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
  }

  Map<String, dynamic> toJson() {
    return {
     };
  }

  static List<BcListDaoWhitelistResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcListDaoWhitelistResponse>() : json.map((value) => new BcListDaoWhitelistResponse.fromJson(value)).toList();
  }

  static Map<String, BcListDaoWhitelistResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcListDaoWhitelistResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcListDaoWhitelistResponse.fromJson(value));
    }
    return map;
  }
}

