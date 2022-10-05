part of swagger.api;

class RatingUpdateResponse {
  
  String created = null;
  

  String txIDMintAsset = null;
  

  num value = null;
   // range from 0 to 100//

  String updated = null;
  
  RatingUpdateResponse();

  @override
  String toString() {
    return 'RatingUpdateResponse[created=$created, txIDMintAsset=$txIDMintAsset, value=$value, updated=$updated, ]';
  }

  RatingUpdateResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    created =
        json['created']
    ;
    txIDMintAsset =
        json['TxID_mintAsset']
    ;
    value =
        json['value']
    ;
    updated =
        json['updated']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'created': created,
      'TxID_mintAsset': txIDMintAsset,
      'value': value,
      'updated': updated
     };
  }

  static List<RatingUpdateResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<RatingUpdateResponse>() : json.map((value) => new RatingUpdateResponse.fromJson(value)).toList();
  }

  static Map<String, RatingUpdateResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, RatingUpdateResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new RatingUpdateResponse.fromJson(value));
    }
    return map;
  }
}

