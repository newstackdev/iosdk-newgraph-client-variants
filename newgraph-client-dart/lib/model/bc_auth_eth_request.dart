part of swagger.api;

class BcAuthEthRequest {
  
  String nftIndex = null;
  

  String collectionAddress = null;
  

  String address = null;
  

  String signature = null;
  

  String nonce = null;
  

  String timestamp = null;
  
  BcAuthEthRequest();

  @override
  String toString() {
    return 'BcAuthEthRequest[nftIndex=$nftIndex, collectionAddress=$collectionAddress, address=$address, signature=$signature, nonce=$nonce, timestamp=$timestamp, ]';
  }

  BcAuthEthRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    nftIndex =
        json['nftIndex']
    ;
    collectionAddress =
        json['collectionAddress']
    ;
    address =
        json['address']
    ;
    signature =
        json['signature']
    ;
    nonce =
        json['nonce']
    ;
    timestamp =
        json['timestamp']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'nftIndex': nftIndex,
      'collectionAddress': collectionAddress,
      'address': address,
      'signature': signature,
      'nonce': nonce,
      'timestamp': timestamp
     };
  }

  static List<BcAuthEthRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcAuthEthRequest>() : json.map((value) => new BcAuthEthRequest.fromJson(value)).toList();
  }

  static Map<String, BcAuthEthRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcAuthEthRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcAuthEthRequest.fromJson(value));
    }
    return map;
  }
}

