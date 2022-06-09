part of swagger.api;

class BcListDaoProposalsResponse {
  
  Object more = null;
  

  String daoId = null;
  

  String nextKey = null;
  

  List<BcListDaoProposalsResponseRows> rows = [];
  
  BcListDaoProposalsResponse();

  @override
  String toString() {
    return 'BcListDaoProposalsResponse[more=$more, daoId=$daoId, nextKey=$nextKey, rows=$rows, ]';
  }

  BcListDaoProposalsResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    more =
      
      
      new Object.fromJson(json['more'])
;
    daoId =
        json['dao_id']
    ;
    nextKey =
        json['next_key']
    ;
    rows =
      BcListDaoProposalsResponseRows.listFromJson(json['rows'])
;
  }

  Map<String, dynamic> toJson() {
    return {
      'more': more,
      'dao_id': daoId,
      'next_key': nextKey,
      'rows': rows
     };
  }

  static List<BcListDaoProposalsResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcListDaoProposalsResponse>() : json.map((value) => new BcListDaoProposalsResponse.fromJson(value)).toList();
  }

  static Map<String, BcListDaoProposalsResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcListDaoProposalsResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcListDaoProposalsResponse.fromJson(value));
    }
    return map;
  }
}

