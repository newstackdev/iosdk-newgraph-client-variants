part of swagger.api;

class BcListDaoProposalsResponseVoteNo {
  
  String quantity = null;
  

  String contract = null;
  
  BcListDaoProposalsResponseVoteNo();

  @override
  String toString() {
    return 'BcListDaoProposalsResponseVoteNo[quantity=$quantity, contract=$contract, ]';
  }

  BcListDaoProposalsResponseVoteNo.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    quantity =
        json['quantity']
    ;
    contract =
        json['contract']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'quantity': quantity,
      'contract': contract
     };
  }

  static List<BcListDaoProposalsResponseVoteNo> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcListDaoProposalsResponseVoteNo>() : json.map((value) => new BcListDaoProposalsResponseVoteNo.fromJson(value)).toList();
  }

  static Map<String, BcListDaoProposalsResponseVoteNo> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcListDaoProposalsResponseVoteNo>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcListDaoProposalsResponseVoteNo.fromJson(value));
    }
    return map;
  }
}

