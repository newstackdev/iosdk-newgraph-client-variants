part of swagger.api;

class PaymentStripePaymentIntentCreateRequest {
  
  List<PaymentStripePaymentIntentCreateRequestItems> items = [];
  

  String username = null;
  
  PaymentStripePaymentIntentCreateRequest();

  @override
  String toString() {
    return 'PaymentStripePaymentIntentCreateRequest[items=$items, username=$username, ]';
  }

  PaymentStripePaymentIntentCreateRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    items =
      PaymentStripePaymentIntentCreateRequestItems.listFromJson(json['items'])
;
    username =
        json['username']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'items': items,
      'username': username
     };
  }

  static List<PaymentStripePaymentIntentCreateRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<PaymentStripePaymentIntentCreateRequest>() : json.map((value) => new PaymentStripePaymentIntentCreateRequest.fromJson(value)).toList();
  }

  static Map<String, PaymentStripePaymentIntentCreateRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PaymentStripePaymentIntentCreateRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PaymentStripePaymentIntentCreateRequest.fromJson(value));
    }
    return map;
  }
}

