part of swagger.api;

class BcTxResponse {
  
  String txIDCreateTpl = null;
  

  String txIDCreatePool = null;
  

  String txIDCreateAcc = null;
  

  String txIDCreateCol = null;
  

  String txIDCreateSch = null;
  

  String txIDStakeToPool = null;
  

  String txIDMintAsset = null;
  
  BcTxResponse();

  @override
  String toString() {
    return 'BcTxResponse[txIDCreateTpl=$txIDCreateTpl, txIDCreatePool=$txIDCreatePool, txIDCreateAcc=$txIDCreateAcc, txIDCreateCol=$txIDCreateCol, txIDCreateSch=$txIDCreateSch, txIDStakeToPool=$txIDStakeToPool, txIDMintAsset=$txIDMintAsset, ]';
  }

  BcTxResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    txIDCreateTpl =
        json['TxID_createTpl']
    ;
    txIDCreatePool =
        json['TxID_createPool']
    ;
    txIDCreateAcc =
        json['TxID_createAcc']
    ;
    txIDCreateCol =
        json['TxID_createCol']
    ;
    txIDCreateSch =
        json['TxID_createSch']
    ;
    txIDStakeToPool =
        json['TxID_stakeToPool']
    ;
    txIDMintAsset =
        json['TxID_mintAsset']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'TxID_createTpl': txIDCreateTpl,
      'TxID_createPool': txIDCreatePool,
      'TxID_createAcc': txIDCreateAcc,
      'TxID_createCol': txIDCreateCol,
      'TxID_createSch': txIDCreateSch,
      'TxID_stakeToPool': txIDStakeToPool,
      'TxID_mintAsset': txIDMintAsset
     };
  }

  static List<BcTxResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcTxResponse>() : json.map((value) => new BcTxResponse.fromJson(value)).toList();
  }

  static Map<String, BcTxResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcTxResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcTxResponse.fromJson(value));
    }
    return map;
  }
}

