part of swagger.api;

class BcAccCreateRequest {
  
  String newaccPubActiveKey = null;
  

  String newaccPubOwnerKey = null;
  

  String payerPrvKey = null;
  

  bool xfer = null;
  

  String stakeCpu = null;
  

  String newUser = null;
  

  num stakeRam = null;
  

  String payer = null;
  

  String stakeNet = null;
  
  BcAccCreateRequest();

  @override
  String toString() {
    return 'BcAccCreateRequest[newaccPubActiveKey=$newaccPubActiveKey, newaccPubOwnerKey=$newaccPubOwnerKey, payerPrvKey=$payerPrvKey, xfer=$xfer, stakeCpu=$stakeCpu, newUser=$newUser, stakeRam=$stakeRam, payer=$payer, stakeNet=$stakeNet, ]';
  }

  BcAccCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    newaccPubActiveKey =
        json['newacc_pub_active_key']
    ;
    newaccPubOwnerKey =
        json['newacc_pub_owner_key']
    ;
    payerPrvKey =
        json['payer_prv_key']
    ;
    xfer =
        json['xfer']
    ;
    stakeCpu =
        json['stake_cpu']
    ;
    newUser =
        json['newUser']
    ;
    stakeRam =
        json['stake_ram']
    ;
    payer =
        json['payer']
    ;
    stakeNet =
        json['stake_net']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'newacc_pub_active_key': newaccPubActiveKey,
      'newacc_pub_owner_key': newaccPubOwnerKey,
      'payer_prv_key': payerPrvKey,
      'xfer': xfer,
      'stake_cpu': stakeCpu,
      'newUser': newUser,
      'stake_ram': stakeRam,
      'payer': payer,
      'stake_net': stakeNet
     };
  }

  static List<BcAccCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcAccCreateRequest>() : json.map((value) => new BcAccCreateRequest.fromJson(value)).toList();
  }

  static Map<String, BcAccCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcAccCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcAccCreateRequest.fromJson(value));
    }
    return map;
  }
}

