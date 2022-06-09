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
pub struct SyncContactsRequest {
  #[serde(rename = "contacts")]
  contacts: Option<Vec<::models::SyncContactsRequestContacts>>
}

impl SyncContactsRequest {
  pub fn new() -> SyncContactsRequest {
    SyncContactsRequest {
      contacts: None
    }
  }

  pub fn set_contacts(&mut self, contacts: Vec<::models::SyncContactsRequestContacts>) {
    self.contacts = Some(contacts);
  }

  pub fn with_contacts(mut self, contacts: Vec<::models::SyncContactsRequestContacts>) -> SyncContactsRequest {
    self.contacts = Some(contacts);
    self
  }

  pub fn contacts(&self) -> Option<&Vec<::models::SyncContactsRequestContacts>> {
    self.contacts.as_ref()
  }

  pub fn reset_contacts(&mut self) {
    self.contacts = None;
  }

}



