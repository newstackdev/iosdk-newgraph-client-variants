part of swagger.api;

class BcStakePoolRequest {
  
  String owner = null;
  

  String payerPrvKey = null;
  

  String amt = null;
  

  String payer = null;
  
  BcStakePoolRequest();

  @override
  String toString() {
    return 'BcStakePoolRequest[owner=$owner, payerPrvKey=$payerPrvKey, amt=$amt, payer=$payer, ]';
  }

  BcStakePoolRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    owner =
        json['owner']
    ;
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
      'owner': owner,
      'payer_prv_key': payerPrvKey,
      'amt': amt,
      'payer': payer
     };
  }

  static List<BcStakePoolRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcStakePoolRequest>() : json.map((value) => new BcStakePoolRequest.fromJson(value)).toList();
  }

  static Map<String, BcStakePoolRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcStakePoolRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcStakePoolRequest.fromJson(value));
    }
    return map;
  }
}

