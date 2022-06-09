part of swagger.api;

class BcDaoWidthdrawVoteDepositRequest {
  
  String voteId = null;
  
  BcDaoWidthdrawVoteDepositRequest();

  @override
  String toString() {
    return 'BcDaoWidthdrawVoteDepositRequest[voteId=$voteId, ]';
  }

  BcDaoWidthdrawVoteDepositRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    voteId =
        json['vote_id']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'vote_id': voteId
     };
  }

  static List<BcDaoWidthdrawVoteDepositRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcDaoWidthdrawVoteDepositRequest>() : json.map((value) => new BcDaoWidthdrawVoteDepositRequest.fromJson(value)).toList();
  }

  static Map<String, BcDaoWidthdrawVoteDepositRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcDaoWidthdrawVoteDepositRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcDaoWidthdrawVoteDepositRequest.fromJson(value));
    }
    return map;
  }
}

