part of swagger.api;

class BcApproveDaoProposalRequest {
  
  String approver = null;
  

  String proposalAuthor = null;
  

  String proposalId = null;
  

  num daoId = null;
  

  String daoOwner = null;
  

  String approverPrvKey = null;
  
  BcApproveDaoProposalRequest();

  @override
  String toString() {
    return 'BcApproveDaoProposalRequest[approver=$approver, proposalAuthor=$proposalAuthor, proposalId=$proposalId, daoId=$daoId, daoOwner=$daoOwner, approverPrvKey=$approverPrvKey, ]';
  }

  BcApproveDaoProposalRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    approver =
        json['approver']
    ;
    proposalAuthor =
        json['proposal_author']
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
    approverPrvKey =
        json['approver_prv_key']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'approver': approver,
      'proposal_author': proposalAuthor,
      'proposal_id': proposalId,
      'dao_id': daoId,
      'dao_owner': daoOwner,
      'approver_prv_key': approverPrvKey
     };
  }

  static List<BcApproveDaoProposalRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcApproveDaoProposalRequest>() : json.map((value) => new BcApproveDaoProposalRequest.fromJson(value)).toList();
  }

  static Map<String, BcApproveDaoProposalRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcApproveDaoProposalRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcApproveDaoProposalRequest.fromJson(value));
    }
    return map;
  }
}

