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
pub struct PostRemoteMetaProxyResponse {
  #[serde(rename = "text")]
  text: Option<String>,
  #[serde(rename = "status")]
  status: Option<f32>
}

impl PostRemoteMetaProxyResponse {
  pub fn new() -> PostRemoteMetaProxyResponse {
    PostRemoteMetaProxyResponse {
      text: None,
      status: None
    }
  }

  pub fn set_text(&mut self, text: String) {
    self.text = Some(text);
  }

  pub fn with_text(mut self, text: String) -> PostRemoteMetaProxyResponse {
    self.text = Some(text);
    self
  }

  pub fn text(&self) -> Option<&String> {
    self.text.as_ref()
  }

  pub fn reset_text(&mut self) {
    self.text = None;
  }

  pub fn set_status(&mut self, status: f32) {
    self.status = Some(status);
  }

  pub fn with_status(mut self, status: f32) -> PostRemoteMetaProxyResponse {
    self.status = Some(status);
    self
  }

  pub fn status(&self) -> Option<&f32> {
    self.status.as_ref()
  }

  pub fn reset_status(&mut self) {
    self.status = None;
  }

}



