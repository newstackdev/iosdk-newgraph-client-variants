/* 
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


#[allow(unused_imports)]
use serde_json::Value;

#[derive(Debug, Serialize, Deserialize)]
pub struct PaymentStripeWebhookRequestData {
  #[serde(rename = "object")]
  object: Option<Value>
}

impl PaymentStripeWebhookRequestData {
  pub fn new() -> PaymentStripeWebhookRequestData {
    PaymentStripeWebhookRequestData {
      object: None
    }
  }

  pub fn set_object(&mut self, object: Value) {
    self.object = Some(object);
  }

  pub fn with_object(mut self, object: Value) -> PaymentStripeWebhookRequestData {
    self.object = Some(object);
    self
  }

  pub fn object(&self) -> Option<&Value> {
    self.object.as_ref()
  }

  pub fn reset_object(&mut self) {
    self.object = None;
  }

}



