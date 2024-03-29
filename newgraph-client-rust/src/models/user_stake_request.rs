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
pub struct UserStakeRequest {
  #[serde(rename = "amount")]
  amount: String,
  #[serde(rename = "key")]
  key: Option<String>,
  #[serde(rename = "username")]
  username: String
}

impl UserStakeRequest {
  pub fn new(amount: String, username: String) -> UserStakeRequest {
    UserStakeRequest {
      amount: amount,
      key: None,
      username: username
    }
  }

  pub fn set_amount(&mut self, amount: String) {
    self.amount = amount;
  }

  pub fn with_amount(mut self, amount: String) -> UserStakeRequest {
    self.amount = amount;
    self
  }

  pub fn amount(&self) -> &String {
    &self.amount
  }


  pub fn set_key(&mut self, key: String) {
    self.key = Some(key);
  }

  pub fn with_key(mut self, key: String) -> UserStakeRequest {
    self.key = Some(key);
    self
  }

  pub fn key(&self) -> Option<&String> {
    self.key.as_ref()
  }

  pub fn reset_key(&mut self) {
    self.key = None;
  }

  pub fn set_username(&mut self, username: String) {
    self.username = username;
  }

  pub fn with_username(mut self, username: String) -> UserStakeRequest {
    self.username = username;
    self
  }

  pub fn username(&self) -> &String {
    &self.username
  }


}



