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
pub struct MoodPagedListReadPublicResponseRel {
  #[serde(rename = "displayValue")]
  display_value: Option<String>,
  #[serde(rename = "score")]
  score: Option<f32>,
  #[serde(rename = "polygons")]
  polygons: Option<String>,
  #[serde(rename = "source")]
  source: Option<String>,
  #[serde(rename = "category")]
  category: Option<String>
}

impl MoodPagedListReadPublicResponseRel {
  pub fn new() -> MoodPagedListReadPublicResponseRel {
    MoodPagedListReadPublicResponseRel {
      display_value: None,
      score: None,
      polygons: None,
      source: None,
      category: None
    }
  }

  pub fn set_display_value(&mut self, display_value: String) {
    self.display_value = Some(display_value);
  }

  pub fn with_display_value(mut self, display_value: String) -> MoodPagedListReadPublicResponseRel {
    self.display_value = Some(display_value);
    self
  }

  pub fn display_value(&self) -> Option<&String> {
    self.display_value.as_ref()
  }

  pub fn reset_display_value(&mut self) {
    self.display_value = None;
  }

  pub fn set_score(&mut self, score: f32) {
    self.score = Some(score);
  }

  pub fn with_score(mut self, score: f32) -> MoodPagedListReadPublicResponseRel {
    self.score = Some(score);
    self
  }

  pub fn score(&self) -> Option<&f32> {
    self.score.as_ref()
  }

  pub fn reset_score(&mut self) {
    self.score = None;
  }

  pub fn set_polygons(&mut self, polygons: String) {
    self.polygons = Some(polygons);
  }

  pub fn with_polygons(mut self, polygons: String) -> MoodPagedListReadPublicResponseRel {
    self.polygons = Some(polygons);
    self
  }

  pub fn polygons(&self) -> Option<&String> {
    self.polygons.as_ref()
  }

  pub fn reset_polygons(&mut self) {
    self.polygons = None;
  }

  pub fn set_source(&mut self, source: String) {
    self.source = Some(source);
  }

  pub fn with_source(mut self, source: String) -> MoodPagedListReadPublicResponseRel {
    self.source = Some(source);
    self
  }

  pub fn source(&self) -> Option<&String> {
    self.source.as_ref()
  }

  pub fn reset_source(&mut self) {
    self.source = None;
  }

  pub fn set_category(&mut self, category: String) {
    self.category = Some(category);
  }

  pub fn with_category(mut self, category: String) -> MoodPagedListReadPublicResponseRel {
    self.category = Some(category);
    self
  }

  pub fn category(&self) -> Option<&String> {
    self.category.as_ref()
  }

  pub fn reset_category(&mut self) {
    self.category = None;
  }

}



