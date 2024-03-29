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
pub struct UserTransferRequest {
  #[serde(rename = "encryptedPayload")]
  encrypted_payload: Option<String>,
  #[serde(rename = "payload")]
  payload: Option<String>
}

impl UserTransferRequest {
  pub fn new() -> UserTransferRequest {
    UserTransferRequest {
      encrypted_payload: None,
      payload: None
    }
  }

  pub fn set_encrypted_payload(&mut self, encrypted_payload: String) {
    self.encrypted_payload = Some(encrypted_payload);
  }

  pub fn with_encrypted_payload(mut self, encrypted_payload: String) -> UserTransferRequest {
    self.encrypted_payload = Some(encrypted_payload);
    self
  }

  pub fn encrypted_payload(&self) -> Option<&String> {
    self.encrypted_payload.as_ref()
  }

  pub fn reset_encrypted_payload(&mut self) {
    self.encrypted_payload = None;
  }

  pub fn set_payload(&mut self, payload: String) {
    self.payload = Some(payload);
  }

  pub fn with_payload(mut self, payload: String) -> UserTransferRequest {
    self.payload = Some(payload);
    self
  }

  pub fn payload(&self) -> Option<&String> {
    self.payload.as_ref()
  }

  pub fn reset_payload(&mut self) {
    self.payload = None;
  }

}



