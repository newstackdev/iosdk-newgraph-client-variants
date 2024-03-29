/* 
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

/// ConfigureUserRequest : ConfigureUserRequest Model

#[allow(unused_imports)]
use serde_json::Value;

#[derive(Debug, Serialize, Deserialize)]
pub struct ConfigureUserRequest {
  #[serde(rename = "phone")]
  phone: Option<String>,
  #[serde(rename = "email")]
  email: Option<String>,
  #[serde(rename = "username")]
  username: Option<String>
}

impl ConfigureUserRequest {
  /// ConfigureUserRequest Model
  pub fn new() -> ConfigureUserRequest {
    ConfigureUserRequest {
      phone: None,
      email: None,
      username: None
    }
  }

  pub fn set_phone(&mut self, phone: String) {
    self.phone = Some(phone);
  }

  pub fn with_phone(mut self, phone: String) -> ConfigureUserRequest {
    self.phone = Some(phone);
    self
  }

  pub fn phone(&self) -> Option<&String> {
    self.phone.as_ref()
  }

  pub fn reset_phone(&mut self) {
    self.phone = None;
  }

  pub fn set_email(&mut self, email: String) {
    self.email = Some(email);
  }

  pub fn with_email(mut self, email: String) -> ConfigureUserRequest {
    self.email = Some(email);
    self
  }

  pub fn email(&self) -> Option<&String> {
    self.email.as_ref()
  }

  pub fn reset_email(&mut self) {
    self.email = None;
  }

  pub fn set_username(&mut self, username: String) {
    self.username = Some(username);
  }

  pub fn with_username(mut self, username: String) -> ConfigureUserRequest {
    self.username = Some(username);
    self
  }

  pub fn username(&self) -> Option<&String> {
    self.username.as_ref()
  }

  pub fn reset_username(&mut self) {
    self.username = None;
  }

}



