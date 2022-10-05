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
pub struct PagedRatedResponseUserRating {
  #[serde(rename = "created")]
  created: Option<String>,
  #[serde(rename = "TxID_mintAsset")]
  tx_id_mint_asset: Option<String>,
  #[serde(rename = "value")]
  value: Option<f32>,
  #[serde(rename = "updated")]
  updated: Option<String>
}

impl PagedRatedResponseUserRating {
  pub fn new() -> PagedRatedResponseUserRating {
    PagedRatedResponseUserRating {
      created: None,
      tx_id_mint_asset: None,
      value: None,
      updated: None
    }
  }

  pub fn set_created(&mut self, created: String) {
    self.created = Some(created);
  }

  pub fn with_created(mut self, created: String) -> PagedRatedResponseUserRating {
    self.created = Some(created);
    self
  }

  pub fn created(&self) -> Option<&String> {
    self.created.as_ref()
  }

  pub fn reset_created(&mut self) {
    self.created = None;
  }

  pub fn set_tx_id_mint_asset(&mut self, tx_id_mint_asset: String) {
    self.tx_id_mint_asset = Some(tx_id_mint_asset);
  }

  pub fn with_tx_id_mint_asset(mut self, tx_id_mint_asset: String) -> PagedRatedResponseUserRating {
    self.tx_id_mint_asset = Some(tx_id_mint_asset);
    self
  }

  pub fn tx_id_mint_asset(&self) -> Option<&String> {
    self.tx_id_mint_asset.as_ref()
  }

  pub fn reset_tx_id_mint_asset(&mut self) {
    self.tx_id_mint_asset = None;
  }

  pub fn set_value(&mut self, value: f32) {
    self.value = Some(value);
  }

  pub fn with_value(mut self, value: f32) -> PagedRatedResponseUserRating {
    self.value = Some(value);
    self
  }

  pub fn value(&self) -> Option<&f32> {
    self.value.as_ref()
  }

  pub fn reset_value(&mut self) {
    self.value = None;
  }

  pub fn set_updated(&mut self, updated: String) {
    self.updated = Some(updated);
  }

  pub fn with_updated(mut self, updated: String) -> PagedRatedResponseUserRating {
    self.updated = Some(updated);
    self
  }

  pub fn updated(&self) -> Option<&String> {
    self.updated.as_ref()
  }

  pub fn reset_updated(&mut self) {
    self.updated = None;
  }

}



