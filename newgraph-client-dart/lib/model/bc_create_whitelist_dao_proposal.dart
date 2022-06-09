part of swagger.api;

class BcCreateWhitelistDaoProposal {
  
  String quantity = null;
  

  String proposer = null;
  

  String voteStart = null;
  

  String daoId = null;
  

  String daoOwner = null;
  

  String voteEnd = null;
  

  String user = null;
  

  String proposerPrvKey = null;
  
  BcCreateWhitelistDaoProposal();

  @override
  String toString() {
    return 'BcCreateWhitelistDaoProposal[quantity=$quantity, proposer=$proposer, voteStart=$voteStart, daoId=$daoId, daoOwner=$daoOwner, voteEnd=$voteEnd, user=$user, proposerPrvKey=$proposerPrvKey, ]';
  }

  BcCreateWhitelistDaoProposal.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    quantity =
        json['quantity']
    ;
    proposer =
        json['proposer']
    ;
    voteStart =
        json['vote_start']
    ;
    daoId =
        json['dao_id']
    ;
    daoOwner =
        json['dao_owner']
    ;
    voteEnd =
        json['vote_end']
    ;
    user =
        json['user']
    ;
    proposerPrvKey =
        json['proposer_prv_key']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'quantity': quantity,
      'proposer': proposer,
      'vote_start': voteStart,
      'dao_id': daoId,
      'dao_owner': daoOwner,
      'vote_end': voteEnd,
      'user': user,
      'proposer_prv_key': proposerPrvKey
     };
  }

  static List<BcCreateWhitelistDaoProposal> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcCreateWhitelistDaoProposal>() : json.map((value) => new BcCreateWhitelistDaoProposal.fromJson(value)).toList();
  }

  static Map<String, BcCreateWhitelistDaoProposal> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcCreateWhitelistDaoProposal>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcCreateWhitelistDaoProposal.fromJson(value));
    }
    return map;
  }
}

