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
pub struct BcAuthEthRequest {
  #[serde(rename = "nftIndex")]
  nft_index: String,
  #[serde(rename = "collectionAddress")]
  collection_address: String,
  #[serde(rename = "address")]
  address: String,
  #[serde(rename = "signature")]
  signature: String,
  #[serde(rename = "nonce")]
  nonce: Option<String>,
  #[serde(rename = "timestamp")]
  timestamp: String
}

impl BcAuthEthRequest {
  pub fn new(nft_index: String, collection_address: String, address: String, signature: String, timestamp: String) -> BcAuthEthRequest {
    BcAuthEthRequest {
      nft_index: nft_index,
      collection_address: collection_address,
      address: address,
      signature: signature,
      nonce: None,
      timestamp: timestamp
    }
  }

  pub fn set_nft_index(&mut self, nft_index: String) {
    self.nft_index = nft_index;
  }

  pub fn with_nft_index(mut self, nft_index: String) -> BcAuthEthRequest {
    self.nft_index = nft_index;
    self
  }

  pub fn nft_index(&self) -> &String {
    &self.nft_index
  }


  pub fn set_collection_address(&mut self, collection_address: String) {
    self.collection_address = collection_address;
  }

  pub fn with_collection_address(mut self, collection_address: String) -> BcAuthEthRequest {
    self.collection_address = collection_address;
    self
  }

  pub fn collection_address(&self) -> &String {
    &self.collection_address
  }


  pub fn set_address(&mut self, address: String) {
    self.address = address;
  }

  pub fn with_address(mut self, address: String) -> BcAuthEthRequest {
    self.address = address;
    self
  }

  pub fn address(&self) -> &String {
    &self.address
  }


  pub fn set_signature(&mut self, signature: String) {
    self.signature = signature;
  }

  pub fn with_signature(mut self, signature: String) -> BcAuthEthRequest {
    self.signature = signature;
    self
  }

  pub fn signature(&self) -> &String {
    &self.signature
  }


  pub fn set_nonce(&mut self, nonce: String) {
    self.nonce = Some(nonce);
  }

  pub fn with_nonce(mut self, nonce: String) -> BcAuthEthRequest {
    self.nonce = Some(nonce);
    self
  }

  pub fn nonce(&self) -> Option<&String> {
    self.nonce.as_ref()
  }

  pub fn reset_nonce(&mut self) {
    self.nonce = None;
  }

  pub fn set_timestamp(&mut self, timestamp: String) {
    self.timestamp = timestamp;
  }

  pub fn with_timestamp(mut self, timestamp: String) -> BcAuthEthRequest {
    self.timestamp = timestamp;
    self
  }

  pub fn timestamp(&self) -> &String {
    &self.timestamp
  }


}



