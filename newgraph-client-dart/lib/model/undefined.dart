part of swagger.api;

class Undefined {
  
  String errorMessage = null;
  

  String errorCode = null;
  

  num statusCode = null;
  
  Undefined();

  @override
  String toString() {
    return 'Undefined[errorMessage=$errorMessage, errorCode=$errorCode, statusCode=$statusCode, ]';
  }

  Undefined.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    errorMessage =
        json['errorMessage']
    ;
    errorCode =
        json['errorCode']
    ;
    statusCode =
        json['statusCode']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'errorMessage': errorMessage,
      'errorCode': errorCode,
      'statusCode': statusCode
     };
  }

  static List<Undefined> listFromJson(List<dynamic> json) {
    return json == null ? new List<Undefined>() : json.map((value) => new Undefined.fromJson(value)).toList();
  }

  static Map<String, Undefined> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, Undefined>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new Undefined.fromJson(value));
    }
    return map;
  }
}

