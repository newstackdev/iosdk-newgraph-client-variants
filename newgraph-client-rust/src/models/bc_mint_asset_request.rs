/* 
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-05-20T13:39:48Z
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


#[allow(unused_imports)]
use serde_json::Value;

#[derive(Debug, Serialize, Deserialize)]
pub struct BcMintAssetRequest {
  #[serde(rename = "immutable_data")]
  immutable_data: Option<Vec<::models::BcMintAssetRequestImmutableData>>,
  #[serde(rename = "tpl_name")]
  tpl_name: Option<String>,
  #[serde(rename = "payer_prv_key")]
  payer_prv_key: String,
  #[serde(rename = "creator")]
  creator: String,
  #[serde(rename = "sch_name")]
  sch_name: Option<String>,
  #[serde(rename = "mutable_data")]
  mutable_data: Option<Vec<::models::BcMintAssetRequestImmutableData>>,
  #[serde(rename = "col_name")]
  col_name: Option<String>,
  #[serde(rename = "payer")]
  payer: String,
  #[serde(rename = "payer_public_key")]
  payer_public_key: String
}

impl BcMintAssetRequest {
  pub fn new(payer_prv_key: String, creator: String, payer: String, payer_public_key: String) -> BcMintAssetRequest {
    BcMintAssetRequest {
      immutable_data: None,
      tpl_name: None,
      payer_prv_key: payer_prv_key,
      creator: creator,
      sch_name: None,
      mutable_data: None,
      col_name: None,
      payer: payer,
      payer_public_key: payer_public_key
    }
  }

  pub fn set_immutable_data(&mut self, immutable_data: Vec<::models::BcMintAssetRequestImmutableData>) {
    self.immutable_data = Some(immutable_data);
  }

  pub fn with_immutable_data(mut self, immutable_data: Vec<::models::BcMintAssetRequestImmutableData>) -> BcMintAssetRequest {
    self.immutable_data = Some(immutable_data);
    self
  }

  pub fn immutable_data(&self) -> Option<&Vec<::models::BcMintAssetRequestImmutableData>> {
    self.immutable_data.as_ref()
  }

  pub fn reset_immutable_data(&mut self) {
    self.immutable_data = None;
  }

  pub fn set_tpl_name(&mut self, tpl_name: String) {
    self.tpl_name = Some(tpl_name);
  }

  pub fn with_tpl_name(mut self, tpl_name: String) -> BcMintAssetRequest {
    self.tpl_name = Some(tpl_name);
    self
  }

  pub fn tpl_name(&self) -> Option<&String> {
    self.tpl_name.as_ref()
  }

  pub fn reset_tpl_name(&mut self) {
    self.tpl_name = None;
  }

  pub fn set_payer_prv_key(&mut self, payer_prv_key: String) {
    self.payer_prv_key = payer_prv_key;
  }

  pub fn with_payer_prv_key(mut self, payer_prv_key: String) -> BcMintAssetRequest {
    self.payer_prv_key = payer_prv_key;
    self
  }

  pub fn payer_prv_key(&self) -> &String {
    &self.payer_prv_key
  }


  pub fn set_creator(&mut self, creator: String) {
    self.creator = creator;
  }

  pub fn with_creator(mut self, creator: String) -> BcMintAssetRequest {
    self.creator = creator;
    self
  }

  pub fn creator(&self) -> &String {
    &self.creator
  }


  pub fn set_sch_name(&mut self, sch_name: String) {
    self.sch_name = Some(sch_name);
  }

  pub fn with_sch_name(mut self, sch_name: String) -> BcMintAssetRequest {
    self.sch_name = Some(sch_name);
    self
  }

  pub fn sch_name(&self) -> Option<&String> {
    self.sch_name.as_ref()
  }

  pub fn reset_sch_name(&mut self) {
    self.sch_name = None;
  }

  pub fn set_mutable_data(&mut self, mutable_data: Vec<::models::BcMintAssetRequestImmutableData>) {
    self.mutable_data = Some(mutable_data);
  }

  pub fn with_mutable_data(mut self, mutable_data: Vec<::models::BcMintAssetRequestImmutableData>) -> BcMintAssetRequest {
    self.mutable_data = Some(mutable_data);
    self
  }

  pub fn mutable_data(&self) -> Option<&Vec<::models::BcMintAssetRequestImmutableData>> {
    self.mutable_data.as_ref()
  }

  pub fn reset_mutable_data(&mut self) {
    self.mutable_data = None;
  }

  pub fn set_col_name(&mut self, col_name: String) {
    self.col_name = Some(col_name);
  }

  pub fn with_col_name(mut self, col_name: String) -> BcMintAssetRequest {
    self.col_name = Some(col_name);
    self
  }

  pub fn col_name(&self) -> Option<&String> {
    self.col_name.as_ref()
  }

  pub fn reset_col_name(&mut self) {
    self.col_name = None;
  }

  pub fn set_payer(&mut self, payer: String) {
    self.payer = payer;
  }

  pub fn with_payer(mut self, payer: String) -> BcMintAssetRequest {
    self.payer = payer;
    self
  }

  pub fn payer(&self) -> &String {
    &self.payer
  }


  pub fn set_payer_public_key(&mut self, payer_public_key: String) {
    self.payer_public_key = payer_public_key;
  }

  pub fn with_payer_public_key(mut self, payer_public_key: String) -> BcMintAssetRequest {
    self.payer_public_key = payer_public_key;
    self
  }

  pub fn payer_public_key(&self) -> &String {
    &self.payer_public_key
  }


}


