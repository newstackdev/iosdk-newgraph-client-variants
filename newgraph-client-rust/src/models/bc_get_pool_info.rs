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
pub struct BcGetPoolInfo {
  #[serde(rename = "owner")]
  owner: String
}

impl BcGetPoolInfo {
  pub fn new(owner: String) -> BcGetPoolInfo {
    BcGetPoolInfo {
      owner: owner
    }
  }

  pub fn set_owner(&mut self, owner: String) {
    self.owner = owner;
  }

  pub fn with_owner(mut self, owner: String) -> BcGetPoolInfo {
    self.owner = owner;
    self
  }

  pub fn owner(&self) -> &String {
    &self.owner
  }


}



