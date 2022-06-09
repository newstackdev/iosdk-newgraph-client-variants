part of swagger.api;

class BcDaoWidthdrawVoteDepositResponse {
  
  String txIDWithdrawVoteDeposit = null;
  
  BcDaoWidthdrawVoteDepositResponse();

  @override
  String toString() {
    return 'BcDaoWidthdrawVoteDepositResponse[txIDWithdrawVoteDeposit=$txIDWithdrawVoteDeposit, ]';
  }

  BcDaoWidthdrawVoteDepositResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    txIDWithdrawVoteDeposit =
        json['TxID_WithdrawVoteDeposit']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'TxID_WithdrawVoteDeposit': txIDWithdrawVoteDeposit
     };
  }

  static List<BcDaoWidthdrawVoteDepositResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcDaoWidthdrawVoteDepositResponse>() : json.map((value) => new BcDaoWidthdrawVoteDepositResponse.fromJson(value)).toList();
  }

  static Map<String, BcDaoWidthdrawVoteDepositResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcDaoWidthdrawVoteDepositResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcDaoWidthdrawVoteDepositResponse.fromJson(value));
    }
    return map;
  }
}

