part of swagger.api;

class BcCreateDaoResponse {
  
  String txIDCreateDao = null;
  

  String daoId = null;
  
  BcCreateDaoResponse();

  @override
  String toString() {
    return 'BcCreateDaoResponse[txIDCreateDao=$txIDCreateDao, daoId=$daoId, ]';
  }

  BcCreateDaoResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    txIDCreateDao =
        json['TxID_createDao']
    ;
    daoId =
        json['dao_id']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'TxID_createDao': txIDCreateDao,
      'dao_id': daoId
     };
  }

  static List<BcCreateDaoResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcCreateDaoResponse>() : json.map((value) => new BcCreateDaoResponse.fromJson(value)).toList();
  }

  static Map<String, BcCreateDaoResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcCreateDaoResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcCreateDaoResponse.fromJson(value));
    }
    return map;
  }
}

