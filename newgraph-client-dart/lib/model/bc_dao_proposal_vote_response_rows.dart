part of swagger.api;

class BcDaoProposalVoteResponseRows {
  
  String proposalType = null;
  

  BcListDaoProposalsResponseVoteNo quantity = null;
  

  num proposalId = null;
  

  num daoId = null;
  

  String id = null;
  

  String lockEndDate = null;
  
  BcDaoProposalVoteResponseRows();

  @override
  String toString() {
    return 'BcDaoProposalVoteResponseRows[proposalType=$proposalType, quantity=$quantity, proposalId=$proposalId, daoId=$daoId, id=$id, lockEndDate=$lockEndDate, ]';
  }

  BcDaoProposalVoteResponseRows.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    proposalType =
        json['proposal_type']
    ;
    quantity =
      
      
      new BcListDaoProposalsResponseVoteNo.fromJson(json['quantity'])
;
    proposalId =
        json['proposal_id']
    ;
    daoId =
        json['dao_id']
    ;
    id =
        json['id']
    ;
    lockEndDate =
        json['lock_end_date']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'proposal_type': proposalType,
      'quantity': quantity,
      'proposal_id': proposalId,
      'dao_id': daoId,
      'id': id,
      'lock_end_date': lockEndDate
     };
  }

  static List<BcDaoProposalVoteResponseRows> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcDaoProposalVoteResponseRows>() : json.map((value) => new BcDaoProposalVoteResponseRows.fromJson(value)).toList();
  }

  static Map<String, BcDaoProposalVoteResponseRows> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcDaoProposalVoteResponseRows>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcDaoProposalVoteResponseRows.fromJson(value));
    }
    return map;
  }
}

