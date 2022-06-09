part of swagger.api;

class BcDaoProposalVoteResponse {
  
  String daoId = null;
  

  Object more = null;
  

  String nextKey = null;
  

  List<BcDaoProposalVoteResponseRows> rows = [];
  
  BcDaoProposalVoteResponse();

  @override
  String toString() {
    return 'BcDaoProposalVoteResponse[daoId=$daoId, more=$more, nextKey=$nextKey, rows=$rows, ]';
  }

  BcDaoProposalVoteResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    daoId =
        json['daoId']
    ;
    more =
      
      
      new Object.fromJson(json['more'])
;
    nextKey =
        json['next_key']
    ;
    rows =
      BcDaoProposalVoteResponseRows.listFromJson(json['rows'])
;
  }

  Map<String, dynamic> toJson() {
    return {
      'daoId': daoId,
      'more': more,
      'next_key': nextKey,
      'rows': rows
     };
  }

  static List<BcDaoProposalVoteResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcDaoProposalVoteResponse>() : json.map((value) => new BcDaoProposalVoteResponse.fromJson(value)).toList();
  }

  static Map<String, BcDaoProposalVoteResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcDaoProposalVoteResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcDaoProposalVoteResponse.fromJson(value));
    }
    return map;
  }
}

