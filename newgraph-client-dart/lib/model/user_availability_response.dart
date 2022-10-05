part of swagger.api;

class UserAvailabilityResponse {
  
  String offer = null;
  

  bool available = null;
  
  UserAvailabilityResponse();

  @override
  String toString() {
    return 'UserAvailabilityResponse[offer=$offer, available=$available, ]';
  }

  UserAvailabilityResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    offer =
        json['offer']
    ;
    available =
        json['available']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'offer': offer,
      'available': available
     };
  }

  static List<UserAvailabilityResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<UserAvailabilityResponse>() : json.map((value) => new UserAvailabilityResponse.fromJson(value)).toList();
  }

  static Map<String, UserAvailabilityResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, UserAvailabilityResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new UserAvailabilityResponse.fromJson(value));
    }
    return map;
  }
}

