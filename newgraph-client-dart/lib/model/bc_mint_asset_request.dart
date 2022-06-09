part of swagger.api;

class BcMintAssetRequest {
  
  List<BcMintAssetRequestImmutableData> immutableData = [];
  

  String tplName = null;
  

  String payerPrvKey = null;
  

  String creator = null;
  

  String schName = null;
  

  List<BcMintAssetRequestImmutableData> mutableData = [];
  

  String colName = null;
  

  String payer = null;
  

  String payerPublicKey = null;
  
  BcMintAssetRequest();

  @override
  String toString() {
    return 'BcMintAssetRequest[immutableData=$immutableData, tplName=$tplName, payerPrvKey=$payerPrvKey, creator=$creator, schName=$schName, mutableData=$mutableData, colName=$colName, payer=$payer, payerPublicKey=$payerPublicKey, ]';
  }

  BcMintAssetRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    immutableData =
      BcMintAssetRequestImmutableData.listFromJson(json['immutable_data'])
;
    tplName =
        json['tpl_name']
    ;
    payerPrvKey =
        json['payer_prv_key']
    ;
    creator =
        json['creator']
    ;
    schName =
        json['sch_name']
    ;
    mutableData =
      BcMintAssetRequestImmutableData.listFromJson(json['mutable_data'])
;
    colName =
        json['col_name']
    ;
    payer =
        json['payer']
    ;
    payerPublicKey =
        json['payer_public_key']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'immutable_data': immutableData,
      'tpl_name': tplName,
      'payer_prv_key': payerPrvKey,
      'creator': creator,
      'sch_name': schName,
      'mutable_data': mutableData,
      'col_name': colName,
      'payer': payer,
      'payer_public_key': payerPublicKey
     };
  }

  static List<BcMintAssetRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcMintAssetRequest>() : json.map((value) => new BcMintAssetRequest.fromJson(value)).toList();
  }

  static Map<String, BcMintAssetRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcMintAssetRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcMintAssetRequest.fromJson(value));
    }
    return map;
  }
}

