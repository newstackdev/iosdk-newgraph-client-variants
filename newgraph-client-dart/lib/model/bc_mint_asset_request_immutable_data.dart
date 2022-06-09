part of swagger.api;

class BcMintAssetRequestImmutableData {
  
  List<String> value = [];
  

  String key = null;
  
  BcMintAssetRequestImmutableData();

  @override
  String toString() {
    return 'BcMintAssetRequestImmutableData[value=$value, key=$key, ]';
  }

  BcMintAssetRequestImmutableData.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    value =
        (json['value'] as List).map((item) => item as String).toList()
    ;
    key =
        json['key']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'value': value,
      'key': key
     };
  }

  static List<BcMintAssetRequestImmutableData> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcMintAssetRequestImmutableData>() : json.map((value) => new BcMintAssetRequestImmutableData.fromJson(value)).toList();
  }

  static Map<String, BcMintAssetRequestImmutableData> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcMintAssetRequestImmutableData>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcMintAssetRequestImmutableData.fromJson(value));
    }
    return map;
  }
}

