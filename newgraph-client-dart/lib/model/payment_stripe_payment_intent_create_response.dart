part of swagger.api;

class PaymentStripePaymentIntentCreateResponse {
  
  String clientSecret = null;
  
  PaymentStripePaymentIntentCreateResponse();

  @override
  String toString() {
    return 'PaymentStripePaymentIntentCreateResponse[clientSecret=$clientSecret, ]';
  }

  PaymentStripePaymentIntentCreateResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    clientSecret =
        json['client_secret']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'client_secret': clientSecret
     };
  }

  static List<PaymentStripePaymentIntentCreateResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<PaymentStripePaymentIntentCreateResponse>() : json.map((value) => new PaymentStripePaymentIntentCreateResponse.fromJson(value)).toList();
  }

  static Map<String, PaymentStripePaymentIntentCreateResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PaymentStripePaymentIntentCreateResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PaymentStripePaymentIntentCreateResponse.fromJson(value));
    }
    return map;
  }
}

