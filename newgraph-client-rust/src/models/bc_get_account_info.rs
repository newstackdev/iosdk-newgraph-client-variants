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
pub struct BcGetAccountInfo {
  #[serde(rename = "owner")]
  owner: String,
  #[serde(rename = "contract")]
  contract: Option<String>
}

impl BcGetAccountInfo {
  pub fn new(owner: String) -> BcGetAccountInfo {
    BcGetAccountInfo {
      owner: owner,
      contract: None
    }
  }

  pub fn set_owner(&mut self, owner: String) {
    self.owner = owner;
  }

  pub fn with_owner(mut self, owner: String) -> BcGetAccountInfo {
    self.owner = owner;
    self
  }

  pub fn owner(&self) -> &String {
    &self.owner
  }


  pub fn set_contract(&mut self, contract: String) {
    self.contract = Some(contract);
  }

  pub fn with_contract(mut self, contract: String) -> BcGetAccountInfo {
    self.contract = Some(contract);
    self
  }

  pub fn contract(&self) -> Option<&String> {
    self.contract.as_ref()
  }

  pub fn reset_contract(&mut self) {
    self.contract = None;
  }

}



