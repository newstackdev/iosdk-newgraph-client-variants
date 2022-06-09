part of swagger.api;

class ErrorResponse {
  
  String errorMessage = null;
  

  String errorCode = null;
  

  num statusCode = null;
  
  ErrorResponse();

  @override
  String toString() {
    return 'ErrorResponse[errorMessage=$errorMessage, errorCode=$errorCode, statusCode=$statusCode, ]';
  }

  ErrorResponse.fromJson(Map<String, dynamic> json) {
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

  static List<ErrorResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<ErrorResponse>() : json.map((value) => new ErrorResponse.fromJson(value)).toList();
  }

  static Map<String, ErrorResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, ErrorResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new ErrorResponse.fromJson(value));
    }
    return map;
  }
}

