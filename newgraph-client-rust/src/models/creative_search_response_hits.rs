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
pub struct CreativeSearchResponseHits {
  #[serde(rename = "_source")]
  _source: Option<::models::CreativeSearchResponseSource>,
  #[serde(rename = "_id")]
  _id: Option<String>
}

impl CreativeSearchResponseHits {
  pub fn new() -> CreativeSearchResponseHits {
    CreativeSearchResponseHits {
      _source: None,
      _id: None
    }
  }

  pub fn set__source(&mut self, _source: ::models::CreativeSearchResponseSource) {
    self._source = Some(_source);
  }

  pub fn with__source(mut self, _source: ::models::CreativeSearchResponseSource) -> CreativeSearchResponseHits {
    self._source = Some(_source);
    self
  }

  pub fn _source(&self) -> Option<&::models::CreativeSearchResponseSource> {
    self._source.as_ref()
  }

  pub fn reset__source(&mut self) {
    self._source = None;
  }

  pub fn set__id(&mut self, _id: String) {
    self._id = Some(_id);
  }

  pub fn with__id(mut self, _id: String) -> CreativeSearchResponseHits {
    self._id = Some(_id);
    self
  }

  pub fn _id(&self) -> Option<&String> {
    self._id.as_ref()
  }

  pub fn reset__id(&mut self) {
    self._id = None;
  }

}


