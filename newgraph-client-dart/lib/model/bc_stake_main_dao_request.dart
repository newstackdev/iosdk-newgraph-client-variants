part of swagger.api;

class BcStakeMainDAORequest {
  
  String payerPrvKey = null;
  

  String amt = null;
  

  String payer = null;
  
  BcStakeMainDAORequest();

  @override
  String toString() {
    return 'BcStakeMainDAORequest[payerPrvKey=$payerPrvKey, amt=$amt, payer=$payer, ]';
  }

  BcStakeMainDAORequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    payerPrvKey =
        json['payer_prv_key']
    ;
    amt =
        json['amt']
    ;
    payer =
        json['payer']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'payer_prv_key': payerPrvKey,
      'amt': amt,
      'payer': payer
     };
  }

  static List<BcStakeMainDAORequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcStakeMainDAORequest>() : json.map((value) => new BcStakeMainDAORequest.fromJson(value)).toList();
  }

  static Map<String, BcStakeMainDAORequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcStakeMainDAORequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcStakeMainDAORequest.fromJson(value));
    }
    return map;
  }
}

