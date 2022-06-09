part of swagger.api;

class BcDaoProposalExecuteRequest {
  
  String proposalAuthor = null;
  

  num proposalId = null;
  

  String daoId = null;
  

  String daoOwner = null;
  

  String exec = null;
  

  String execPrvKey = null;
  
  BcDaoProposalExecuteRequest();

  @override
  String toString() {
    return 'BcDaoProposalExecuteRequest[proposalAuthor=$proposalAuthor, proposalId=$proposalId, daoId=$daoId, daoOwner=$daoOwner, exec=$exec, execPrvKey=$execPrvKey, ]';
  }

  BcDaoProposalExecuteRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
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
    exec =
        json['exec']
    ;
    execPrvKey =
        json['exec_prv_key']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'proposal_author': proposalAuthor,
      'proposal_id': proposalId,
      'dao_id': daoId,
      'dao_owner': daoOwner,
      'exec': exec,
      'exec_prv_key': execPrvKey
     };
  }

  static List<BcDaoProposalExecuteRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcDaoProposalExecuteRequest>() : json.map((value) => new BcDaoProposalExecuteRequest.fromJson(value)).toList();
  }

  static Map<String, BcDaoProposalExecuteRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcDaoProposalExecuteRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcDaoProposalExecuteRequest.fromJson(value));
    }
    return map;
  }
}

