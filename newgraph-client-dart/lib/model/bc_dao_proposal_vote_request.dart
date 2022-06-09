part of swagger.api;

class BcDaoProposalVoteRequest {
  
  String proposalType = null;
  

  String quantity = null;
  

  String proposalId = null;
  

  String daoId = null;
  

  String daoOwner = null;
  

  String voter = null;
  

  String option = null;
  
  BcDaoProposalVoteRequest();

  @override
  String toString() {
    return 'BcDaoProposalVoteRequest[proposalType=$proposalType, quantity=$quantity, proposalId=$proposalId, daoId=$daoId, daoOwner=$daoOwner, voter=$voter, option=$option, ]';
  }

  BcDaoProposalVoteRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    proposalType =
        json['proposal_type']
    ;
    quantity =
        json['quantity']
    ;
    proposalId =
        json['proposal_id']
    ;
    daoId =
        json['dao_id']
    ;
    daoOwner =
        json['dao_owner']
    ;
    voter =
        json['voter']
    ;
    option =
        json['option']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'proposal_type': proposalType,
      'quantity': quantity,
      'proposal_id': proposalId,
      'dao_id': daoId,
      'dao_owner': daoOwner,
      'voter': voter,
      'option': option
     };
  }

  static List<BcDaoProposalVoteRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcDaoProposalVoteRequest>() : json.map((value) => new BcDaoProposalVoteRequest.fromJson(value)).toList();
  }

  static Map<String, BcDaoProposalVoteRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcDaoProposalVoteRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcDaoProposalVoteRequest.fromJson(value));
    }
    return map;
  }
}

