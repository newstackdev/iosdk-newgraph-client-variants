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
pub struct RatingUpdateRequest {
  #[serde(rename = "targetId")]
  target_id: Option<String>,
  #[serde(rename = "contextType")]
  context_type: Option<String>,
  #[serde(rename = "contextValue")]
  context_value: Option<String>,
  #[serde(rename = "value")]
  value: f32
}

impl RatingUpdateRequest {
  pub fn new(value: f32) -> RatingUpdateRequest {
    RatingUpdateRequest {
      target_id: None,
      context_type: None,
      context_value: None,
      value: value
    }
  }

  pub fn set_target_id(&mut self, target_id: String) {
    self.target_id = Some(target_id);
  }

  pub fn with_target_id(mut self, target_id: String) -> RatingUpdateRequest {
    self.target_id = Some(target_id);
    self
  }

  pub fn target_id(&self) -> Option<&String> {
    self.target_id.as_ref()
  }

  pub fn reset_target_id(&mut self) {
    self.target_id = None;
  }

  pub fn set_context_type(&mut self, context_type: String) {
    self.context_type = Some(context_type);
  }

  pub fn with_context_type(mut self, context_type: String) -> RatingUpdateRequest {
    self.context_type = Some(context_type);
    self
  }

  pub fn context_type(&self) -> Option<&String> {
    self.context_type.as_ref()
  }

  pub fn reset_context_type(&mut self) {
    self.context_type = None;
  }

  pub fn set_context_value(&mut self, context_value: String) {
    self.context_value = Some(context_value);
  }

  pub fn with_context_value(mut self, context_value: String) -> RatingUpdateRequest {
    self.context_value = Some(context_value);
    self
  }

  pub fn context_value(&self) -> Option<&String> {
    self.context_value.as_ref()
  }

  pub fn reset_context_value(&mut self) {
    self.context_value = None;
  }

  pub fn set_value(&mut self, value: f32) {
    self.value = value;
  }

  pub fn with_value(mut self, value: f32) -> RatingUpdateRequest {
    self.value = value;
    self
  }

  pub fn value(&self) -> &f32 {
    &self.value
  }


}



