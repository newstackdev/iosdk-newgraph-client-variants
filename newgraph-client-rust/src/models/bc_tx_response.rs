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
pub struct BcTxResponse {
  #[serde(rename = "TxID_createTpl")]
  tx_id_create_tpl: Option<String>,
  #[serde(rename = "TxID_createPool")]
  tx_id_create_pool: Option<String>,
  #[serde(rename = "TxID_createAcc")]
  tx_id_create_acc: Option<String>,
  #[serde(rename = "TxID_createCol")]
  tx_id_create_col: Option<String>,
  #[serde(rename = "TxID_createSch")]
  tx_id_create_sch: Option<String>,
  #[serde(rename = "TxID_stakeToPool")]
  tx_id_stake_to_pool: Option<String>,
  #[serde(rename = "TxID_mintAsset")]
  tx_id_mint_asset: Option<String>
}

impl BcTxResponse {
  pub fn new() -> BcTxResponse {
    BcTxResponse {
      tx_id_create_tpl: None,
      tx_id_create_pool: None,
      tx_id_create_acc: None,
      tx_id_create_col: None,
      tx_id_create_sch: None,
      tx_id_stake_to_pool: None,
      tx_id_mint_asset: None
    }
  }

  pub fn set_tx_id_create_tpl(&mut self, tx_id_create_tpl: String) {
    self.tx_id_create_tpl = Some(tx_id_create_tpl);
  }

  pub fn with_tx_id_create_tpl(mut self, tx_id_create_tpl: String) -> BcTxResponse {
    self.tx_id_create_tpl = Some(tx_id_create_tpl);
    self
  }

  pub fn tx_id_create_tpl(&self) -> Option<&String> {
    self.tx_id_create_tpl.as_ref()
  }

  pub fn reset_tx_id_create_tpl(&mut self) {
    self.tx_id_create_tpl = None;
  }

  pub fn set_tx_id_create_pool(&mut self, tx_id_create_pool: String) {
    self.tx_id_create_pool = Some(tx_id_create_pool);
  }

  pub fn with_tx_id_create_pool(mut self, tx_id_create_pool: String) -> BcTxResponse {
    self.tx_id_create_pool = Some(tx_id_create_pool);
    self
  }

  pub fn tx_id_create_pool(&self) -> Option<&String> {
    self.tx_id_create_pool.as_ref()
  }

  pub fn reset_tx_id_create_pool(&mut self) {
    self.tx_id_create_pool = None;
  }

  pub fn set_tx_id_create_acc(&mut self, tx_id_create_acc: String) {
    self.tx_id_create_acc = Some(tx_id_create_acc);
  }

  pub fn with_tx_id_create_acc(mut self, tx_id_create_acc: String) -> BcTxResponse {
    self.tx_id_create_acc = Some(tx_id_create_acc);
    self
  }

  pub fn tx_id_create_acc(&self) -> Option<&String> {
    self.tx_id_create_acc.as_ref()
  }

  pub fn reset_tx_id_create_acc(&mut self) {
    self.tx_id_create_acc = None;
  }

  pub fn set_tx_id_create_col(&mut self, tx_id_create_col: String) {
    self.tx_id_create_col = Some(tx_id_create_col);
  }

  pub fn with_tx_id_create_col(mut self, tx_id_create_col: String) -> BcTxResponse {
    self.tx_id_create_col = Some(tx_id_create_col);
    self
  }

  pub fn tx_id_create_col(&self) -> Option<&String> {
    self.tx_id_create_col.as_ref()
  }

  pub fn reset_tx_id_create_col(&mut self) {
    self.tx_id_create_col = None;
  }

  pub fn set_tx_id_create_sch(&mut self, tx_id_create_sch: String) {
    self.tx_id_create_sch = Some(tx_id_create_sch);
  }

  pub fn with_tx_id_create_sch(mut self, tx_id_create_sch: String) -> BcTxResponse {
    self.tx_id_create_sch = Some(tx_id_create_sch);
    self
  }

  pub fn tx_id_create_sch(&self) -> Option<&String> {
    self.tx_id_create_sch.as_ref()
  }

  pub fn reset_tx_id_create_sch(&mut self) {
    self.tx_id_create_sch = None;
  }

  pub fn set_tx_id_stake_to_pool(&mut self, tx_id_stake_to_pool: String) {
    self.tx_id_stake_to_pool = Some(tx_id_stake_to_pool);
  }

  pub fn with_tx_id_stake_to_pool(mut self, tx_id_stake_to_pool: String) -> BcTxResponse {
    self.tx_id_stake_to_pool = Some(tx_id_stake_to_pool);
    self
  }

  pub fn tx_id_stake_to_pool(&self) -> Option<&String> {
    self.tx_id_stake_to_pool.as_ref()
  }

  pub fn reset_tx_id_stake_to_pool(&mut self) {
    self.tx_id_stake_to_pool = None;
  }

  pub fn set_tx_id_mint_asset(&mut self, tx_id_mint_asset: String) {
    self.tx_id_mint_asset = Some(tx_id_mint_asset);
  }

  pub fn with_tx_id_mint_asset(mut self, tx_id_mint_asset: String) -> BcTxResponse {
    self.tx_id_mint_asset = Some(tx_id_mint_asset);
    self
  }

  pub fn tx_id_mint_asset(&self) -> Option<&String> {
    self.tx_id_mint_asset.as_ref()
  }

  pub fn reset_tx_id_mint_asset(&mut self) {
    self.tx_id_mint_asset = None;
  }

}



