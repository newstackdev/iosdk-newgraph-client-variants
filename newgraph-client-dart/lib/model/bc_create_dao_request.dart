part of swagger.api;

class BcCreateDaoRequest {
  
  String descr = null;
  

  String authprPrvKey = null;
  

  String author = null;
  

  String token = null;
  
  BcCreateDaoRequest();

  @override
  String toString() {
    return 'BcCreateDaoRequest[descr=$descr, authprPrvKey=$authprPrvKey, author=$author, token=$token, ]';
  }

  BcCreateDaoRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    descr =
        json['descr']
    ;
    authprPrvKey =
        json['authpr_prv_key']
    ;
    author =
        json['author']
    ;
    token =
        json['token']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'descr': descr,
      'authpr_prv_key': authprPrvKey,
      'author': author,
      'token': token
     };
  }

  static List<BcCreateDaoRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<BcCreateDaoRequest>() : json.map((value) => new BcCreateDaoRequest.fromJson(value)).toList();
  }

  static Map<String, BcCreateDaoRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, BcCreateDaoRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new BcCreateDaoRequest.fromJson(value));
    }
    return map;
  }
}

