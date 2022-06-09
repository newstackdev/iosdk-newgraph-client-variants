part of swagger.api;

class PaymentStripeWebhookRequest {
  
  Object request = null;
  

  bool livemode = null;
  

  PaymentStripeWebhookRequestData data = null;
  

  int created = null;
  

  String id = null;
  

  String type = null;
  

  String apiVersion = null;
  

  int pendingWebhooks = null;
  

  String object = null;
  
  PaymentStripeWebhookRequest();

  @override
  String toString() {
    return 'PaymentStripeWebhookRequest[request=$request, livemode=$livemode, data=$data, created=$created, id=$id, type=$type, apiVersion=$apiVersion, pendingWebhooks=$pendingWebhooks, object=$object, ]';
  }

  PaymentStripeWebhookRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    request =
      
      
      new Object.fromJson(json['request'])
;
    livemode =
        json['livemode']
    ;
    data =
      
      
      new PaymentStripeWebhookRequestData.fromJson(json['data'])
;
    created =
        json['created']
    ;
    id =
        json['id']
    ;
    type =
        json['type']
    ;
    apiVersion =
        json['api_version']
    ;
    pendingWebhooks =
        json['pending_webhooks']
    ;
    object =
        json['object']
    ;
  }

  Map<String, dynamic> toJson() {
    return {
      'request': request,
      'livemode': livemode,
      'data': data,
      'created': created,
      'id': id,
      'type': type,
      'api_version': apiVersion,
      'pending_webhooks': pendingWebhooks,
      'object': object
     };
  }

  static List<PaymentStripeWebhookRequest> listFromJson(List<dynamic> json) {
    return json == null ? new List<PaymentStripeWebhookRequest>() : json.map((value) => new PaymentStripeWebhookRequest.fromJson(value)).toList();
  }

  static Map<String, PaymentStripeWebhookRequest> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PaymentStripeWebhookRequest>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PaymentStripeWebhookRequest.fromJson(value));
    }
    return map;
  }
}

