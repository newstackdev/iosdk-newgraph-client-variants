part of swagger.api;

class BcDaoProposalExecuteResponse {
  
  String txIDExecuteDaoProposal = null;
  
  BcDaoProposalExecuteResponse();

  @override
  String toString() {
    return 'BcDaoProposalExecuteResponse[txIDExecuteDaoProposal=$txIDExecuteDaoProposal, ]';
  }

  BcDaoProposalExecuteResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    txIDExecuteDaoProposal =
        json['TxID_executeDaoProposal']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'TxID_executeDaoProposal': txIDExecuteDaoProposal
     };
  }

  static List<BcDaoProposalExecuteResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcDaoProposalExecuteResponse>() : json.map((value) => new BcDaoProposalExecuteResponse.fromJson(value)).toList();
  }

  static Map<String, BcDaoProposalExecuteResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcDaoProposalExecuteResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcDaoProposalExecuteResponse.fromJson(value));
    }
    return map;
  }
}

