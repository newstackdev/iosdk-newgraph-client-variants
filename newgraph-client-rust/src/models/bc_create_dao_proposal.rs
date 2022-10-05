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
pub struct BcCreateDaoProposal {
  #[serde(rename = "summary")]
  summary: Option<String>,
  #[serde(rename = "vote_start")]
  vote_start: Option<String>,
  #[serde(rename = "dao_id")]
  dao_id: Option<String>,
  #[serde(rename = "dao_owner")]
  dao_owner: Option<String>,
  #[serde(rename = "vote_end")]
  vote_end: Option<String>,
  #[serde(rename = "title")]
  title: Option<String>,
  #[serde(rename = "url")]
  url: Option<String>
}

impl BcCreateDaoProposal {
  pub fn new() -> BcCreateDaoProposal {
    BcCreateDaoProposal {
      summary: None,
      vote_start: None,
      dao_id: None,
      dao_owner: None,
      vote_end: None,
      title: None,
      url: None
    }
  }

  pub fn set_summary(&mut self, summary: String) {
    self.summary = Some(summary);
  }

  pub fn with_summary(mut self, summary: String) -> BcCreateDaoProposal {
    self.summary = Some(summary);
    self
  }

  pub fn summary(&self) -> Option<&String> {
    self.summary.as_ref()
  }

  pub fn reset_summary(&mut self) {
    self.summary = None;
  }

  pub fn set_vote_start(&mut self, vote_start: String) {
    self.vote_start = Some(vote_start);
  }

  pub fn with_vote_start(mut self, vote_start: String) -> BcCreateDaoProposal {
    self.vote_start = Some(vote_start);
    self
  }

  pub fn vote_start(&self) -> Option<&String> {
    self.vote_start.as_ref()
  }

  pub fn reset_vote_start(&mut self) {
    self.vote_start = None;
  }

  pub fn set_dao_id(&mut self, dao_id: String) {
    self.dao_id = Some(dao_id);
  }

  pub fn with_dao_id(mut self, dao_id: String) -> BcCreateDaoProposal {
    self.dao_id = Some(dao_id);
    self
  }

  pub fn dao_id(&self) -> Option<&String> {
    self.dao_id.as_ref()
  }

  pub fn reset_dao_id(&mut self) {
    self.dao_id = None;
  }

  pub fn set_dao_owner(&mut self, dao_owner: String) {
    self.dao_owner = Some(dao_owner);
  }

  pub fn with_dao_owner(mut self, dao_owner: String) -> BcCreateDaoProposal {
    self.dao_owner = Some(dao_owner);
    self
  }

  pub fn dao_owner(&self) -> Option<&String> {
    self.dao_owner.as_ref()
  }

  pub fn reset_dao_owner(&mut self) {
    self.dao_owner = None;
  }

  pub fn set_vote_end(&mut self, vote_end: String) {
    self.vote_end = Some(vote_end);
  }

  pub fn with_vote_end(mut self, vote_end: String) -> BcCreateDaoProposal {
    self.vote_end = Some(vote_end);
    self
  }

  pub fn vote_end(&self) -> Option<&String> {
    self.vote_end.as_ref()
  }

  pub fn reset_vote_end(&mut self) {
    self.vote_end = None;
  }

  pub fn set_title(&mut self, title: String) {
    self.title = Some(title);
  }

  pub fn with_title(mut self, title: String) -> BcCreateDaoProposal {
    self.title = Some(title);
    self
  }

  pub fn title(&self) -> Option<&String> {
    self.title.as_ref()
  }

  pub fn reset_title(&mut self) {
    self.title = None;
  }

  pub fn set_url(&mut self, url: String) {
    self.url = Some(url);
  }

  pub fn with_url(mut self, url: String) -> BcCreateDaoProposal {
    self.url = Some(url);
    self
  }

  pub fn url(&self) -> Option<&String> {
    self.url.as_ref()
  }

  pub fn reset_url(&mut self) {
    self.url = None;
  }

}



