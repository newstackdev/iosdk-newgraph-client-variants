part of swagger.api;

class PaymentStripeWebhookRequestData {
  
  Object object = null;
  
  PaymentStripeWebhookRequestData();

  @override
  String toString() {
    return 'PaymentStripeWebhookRequestData[object=$object, ]';
  }

  PaymentStripeWebhookRequestData.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    object =
      
      
      new Object.fromJson(json['object'])
;
  }

  Map<String, dynamic> toJson() {
    return {
      'object': object
     };
  }

  static List<PaymentStripeWebhookRequestData> listFromJson(List<dynamic> json) {
    return json == null ? new List<PaymentStripeWebhookRequestData>() : json.map((value) => new PaymentStripeWebhookRequestData.fromJson(value)).toList();
  }

  static Map<String, PaymentStripeWebhookRequestData> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PaymentStripeWebhookRequestData>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PaymentStripeWebhookRequestData.fromJson(value));
    }
    return map;
  }
}

