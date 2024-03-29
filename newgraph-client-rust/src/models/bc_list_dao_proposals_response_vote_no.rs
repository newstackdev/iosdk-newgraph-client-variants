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
pub struct BcListDaoProposalsResponseVoteNo {
  #[serde(rename = "quantity")]
  quantity: Option<String>,
  #[serde(rename = "contract")]
  contract: Option<String>
}

impl BcListDaoProposalsResponseVoteNo {
  pub fn new() -> BcListDaoProposalsResponseVoteNo {
    BcListDaoProposalsResponseVoteNo {
      quantity: None,
      contract: None
    }
  }

  pub fn set_quantity(&mut self, quantity: String) {
    self.quantity = Some(quantity);
  }

  pub fn with_quantity(mut self, quantity: String) -> BcListDaoProposalsResponseVoteNo {
    self.quantity = Some(quantity);
    self
  }

  pub fn quantity(&self) -> Option<&String> {
    self.quantity.as_ref()
  }

  pub fn reset_quantity(&mut self) {
    self.quantity = None;
  }

  pub fn set_contract(&mut self, contract: String) {
    self.contract = Some(contract);
  }

  pub fn with_contract(mut self, contract: String) -> BcListDaoProposalsResponseVoteNo {
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



