part of swagger.api;

class PaymentStripePaymentIntentCreateRequestItems {
  
  String productId = null;
  

  String priceId = null;
  
  PaymentStripePaymentIntentCreateRequestItems();

  @override
  String toString() {
    return 'PaymentStripePaymentIntentCreateRequestItems[productId=$productId, priceId=$priceId, ]';
  }

  PaymentStripePaymentIntentCreateRequestItems.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    productId =
        json['productId']
    ;
    priceId =
        json['priceId']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'productId': productId,
      'priceId': priceId
     };
  }

  static List<PaymentStripePaymentIntentCreateRequestItems> listFromJson(List<dynamic> json) {
    return json == null ? new List<PaymentStripePaymentIntentCreateRequestItems>() : json.map((value) => new PaymentStripePaymentIntentCreateRequestItems.fromJson(value)).toList();
  }

  static Map<String, PaymentStripePaymentIntentCreateRequestItems> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PaymentStripePaymentIntentCreateRequestItems>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PaymentStripePaymentIntentCreateRequestItems.fromJson(value));
    }
    return map;
  }
}

