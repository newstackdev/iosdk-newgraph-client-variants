/* 
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-06-09T06:13:03Z
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


#[allow(unused_imports)]
use serde_json::Value;

#[derive(Debug, Serialize, Deserialize)]
pub struct BcStakePoolRequest {
  #[serde(rename = "owner")]
  owner: String,
  #[serde(rename = "payer_prv_key")]
  payer_prv_key: String,
  #[serde(rename = "amt")]
  amt: String,
  #[serde(rename = "payer")]
  payer: String
}

impl BcStakePoolRequest {
  pub fn new(owner: String, payer_prv_key: String, amt: String, payer: String) -> BcStakePoolRequest {
    BcStakePoolRequest {
      owner: owner,
      payer_prv_key: payer_prv_key,
      amt: amt,
      payer: payer
    }
  }

  pub fn set_owner(&mut self, owner: String) {
    self.owner = owner;
  }

  pub fn with_owner(mut self, owner: String) -> BcStakePoolRequest {
    self.owner = owner;
    self
  }

  pub fn owner(&self) -> &String {
    &self.owner
  }


  pub fn set_payer_prv_key(&mut self, payer_prv_key: String) {
    self.payer_prv_key = payer_prv_key;
  }

  pub fn with_payer_prv_key(mut self, payer_prv_key: String) -> BcStakePoolRequest {
    self.payer_prv_key = payer_prv_key;
    self
  }

  pub fn payer_prv_key(&self) -> &String {
    &self.payer_prv_key
  }


  pub fn set_amt(&mut self, amt: String) {
    self.amt = amt;
  }

  pub fn with_amt(mut self, amt: String) -> BcStakePoolRequest {
    self.amt = amt;
    self
  }

  pub fn amt(&self) -> &String {
    &self.amt
  }


  pub fn set_payer(&mut self, payer: String) {
    self.payer = payer;
  }

  pub fn with_payer(mut self, payer: String) -> BcStakePoolRequest {
    self.payer = payer;
    self
  }

  pub fn payer(&self) -> &String {
    &self.payer
  }


}



