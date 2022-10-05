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
pub struct MoodPagedListReadPublicResponseValue {
  #[serde(rename = "created")]
  created: Option<String>,
  #[serde(rename = "author")]
  author: Option<::models::MoodPagedListReadPublicResponseAuthor>,
  #[serde(rename = "latitude")]
  latitude: Option<f32>,
  #[serde(rename = "description")]
  description: Option<String>,
  #[serde(rename = "aspectRatio")]
  aspect_ratio: Option<f32>,
  #[serde(rename = "title")]
  title: Option<String>,
  #[serde(rename = "posts")]
  posts: Option<Vec<::models::MoodPagedListReadPublicResponsePosts>>,
  #[serde(rename = "content")]
  content: Option<String>,
  #[serde(rename = "stakeToAccess")]
  stake_to_access: Option<f32>,
  #[serde(rename = "tags")]
  tags: Option<Vec<::models::MoodPagedListReadPublicResponseTags>>,
  #[serde(rename = "contentUrl")]
  content_url: Option<String>,
  #[serde(rename = "postsCount")]
  posts_count: Option<f32>,
  #[serde(rename = "blurHash")]
  blur_hash: Option<String>,
  #[serde(rename = "id")]
  id: Option<String>,
  #[serde(rename = "updated")]
  updated: Option<String>,
  #[serde(rename = "contentType")]
  content_type: Option<String>,
  #[serde(rename = "longitude")]
  longitude: Option<f32>
}

impl MoodPagedListReadPublicResponseValue {
  pub fn new() -> MoodPagedListReadPublicResponseValue {
    MoodPagedListReadPublicResponseValue {
      created: None,
      author: None,
      latitude: None,
      description: None,
      aspect_ratio: None,
      title: None,
      posts: None,
      content: None,
      stake_to_access: None,
      tags: None,
      content_url: None,
      posts_count: None,
      blur_hash: None,
      id: None,
      updated: None,
      content_type: None,
      longitude: None
    }
  }

  pub fn set_created(&mut self, created: String) {
    self.created = Some(created);
  }

  pub fn with_created(mut self, created: String) -> MoodPagedListReadPublicResponseValue {
    self.created = Some(created);
    self
  }

  pub fn created(&self) -> Option<&String> {
    self.created.as_ref()
  }

  pub fn reset_created(&mut self) {
    self.created = None;
  }

  pub fn set_author(&mut self, author: ::models::MoodPagedListReadPublicResponseAuthor) {
    self.author = Some(author);
  }

  pub fn with_author(mut self, author: ::models::MoodPagedListReadPublicResponseAuthor) -> MoodPagedListReadPublicResponseValue {
    self.author = Some(author);
    self
  }

  pub fn author(&self) -> Option<&::models::MoodPagedListReadPublicResponseAuthor> {
    self.author.as_ref()
  }

  pub fn reset_author(&mut self) {
    self.author = None;
  }

  pub fn set_latitude(&mut self, latitude: f32) {
    self.latitude = Some(latitude);
  }

  pub fn with_latitude(mut self, latitude: f32) -> MoodPagedListReadPublicResponseValue {
    self.latitude = Some(latitude);
    self
  }

  pub fn latitude(&self) -> Option<&f32> {
    self.latitude.as_ref()
  }

  pub fn reset_latitude(&mut self) {
    self.latitude = None;
  }

  pub fn set_description(&mut self, description: String) {
    self.description = Some(description);
  }

  pub fn with_description(mut self, description: String) -> MoodPagedListReadPublicResponseValue {
    self.description = Some(description);
    self
  }

  pub fn description(&self) -> Option<&String> {
    self.description.as_ref()
  }

  pub fn reset_description(&mut self) {
    self.description = None;
  }

  pub fn set_aspect_ratio(&mut self, aspect_ratio: f32) {
    self.aspect_ratio = Some(aspect_ratio);
  }

  pub fn with_aspect_ratio(mut self, aspect_ratio: f32) -> MoodPagedListReadPublicResponseValue {
    self.aspect_ratio = Some(aspect_ratio);
    self
  }

  pub fn aspect_ratio(&self) -> Option<&f32> {
    self.aspect_ratio.as_ref()
  }

  pub fn reset_aspect_ratio(&mut self) {
    self.aspect_ratio = None;
  }

  pub fn set_title(&mut self, title: String) {
    self.title = Some(title);
  }

  pub fn with_title(mut self, title: String) -> MoodPagedListReadPublicResponseValue {
    self.title = Some(title);
    self
  }

  pub fn title(&self) -> Option<&String> {
    self.title.as_ref()
  }

  pub fn reset_title(&mut self) {
    self.title = None;
  }

  pub fn set_posts(&mut self, posts: Vec<::models::MoodPagedListReadPublicResponsePosts>) {
    self.posts = Some(posts);
  }

  pub fn with_posts(mut self, posts: Vec<::models::MoodPagedListReadPublicResponsePosts>) -> MoodPagedListReadPublicResponseValue {
    self.posts = Some(posts);
    self
  }

  pub fn posts(&self) -> Option<&Vec<::models::MoodPagedListReadPublicResponsePosts>> {
    self.posts.as_ref()
  }

  pub fn reset_posts(&mut self) {
    self.posts = None;
  }

  pub fn set_content(&mut self, content: String) {
    self.content = Some(content);
  }

  pub fn with_content(mut self, content: String) -> MoodPagedListReadPublicResponseValue {
    self.content = Some(content);
    self
  }

  pub fn content(&self) -> Option<&String> {
    self.content.as_ref()
  }

  pub fn reset_content(&mut self) {
    self.content = None;
  }

  pub fn set_stake_to_access(&mut self, stake_to_access: f32) {
    self.stake_to_access = Some(stake_to_access);
  }

  pub fn with_stake_to_access(mut self, stake_to_access: f32) -> MoodPagedListReadPublicResponseValue {
    self.stake_to_access = Some(stake_to_access);
    self
  }

  pub fn stake_to_access(&self) -> Option<&f32> {
    self.stake_to_access.as_ref()
  }

  pub fn reset_stake_to_access(&mut self) {
    self.stake_to_access = None;
  }

  pub fn set_tags(&mut self, tags: Vec<::models::MoodPagedListReadPublicResponseTags>) {
    self.tags = Some(tags);
  }

  pub fn with_tags(mut self, tags: Vec<::models::MoodPagedListReadPublicResponseTags>) -> MoodPagedListReadPublicResponseValue {
    self.tags = Some(tags);
    self
  }

  pub fn tags(&self) -> Option<&Vec<::models::MoodPagedListReadPublicResponseTags>> {
    self.tags.as_ref()
  }

  pub fn reset_tags(&mut self) {
    self.tags = None;
  }

  pub fn set_content_url(&mut self, content_url: String) {
    self.content_url = Some(content_url);
  }

  pub fn with_content_url(mut self, content_url: String) -> MoodPagedListReadPublicResponseValue {
    self.content_url = Some(content_url);
    self
  }

  pub fn content_url(&self) -> Option<&String> {
    self.content_url.as_ref()
  }

  pub fn reset_content_url(&mut self) {
    self.content_url = None;
  }

  pub fn set_posts_count(&mut self, posts_count: f32) {
    self.posts_count = Some(posts_count);
  }

  pub fn with_posts_count(mut self, posts_count: f32) -> MoodPagedListReadPublicResponseValue {
    self.posts_count = Some(posts_count);
    self
  }

  pub fn posts_count(&self) -> Option<&f32> {
    self.posts_count.as_ref()
  }

  pub fn reset_posts_count(&mut self) {
    self.posts_count = None;
  }

  pub fn set_blur_hash(&mut self, blur_hash: String) {
    self.blur_hash = Some(blur_hash);
  }

  pub fn with_blur_hash(mut self, blur_hash: String) -> MoodPagedListReadPublicResponseValue {
    self.blur_hash = Some(blur_hash);
    self
  }

  pub fn blur_hash(&self) -> Option<&String> {
    self.blur_hash.as_ref()
  }

  pub fn reset_blur_hash(&mut self) {
    self.blur_hash = None;
  }

  pub fn set_id(&mut self, id: String) {
    self.id = Some(id);
  }

  pub fn with_id(mut self, id: String) -> MoodPagedListReadPublicResponseValue {
    self.id = Some(id);
    self
  }

  pub fn id(&self) -> Option<&String> {
    self.id.as_ref()
  }

  pub fn reset_id(&mut self) {
    self.id = None;
  }

  pub fn set_updated(&mut self, updated: String) {
    self.updated = Some(updated);
  }

  pub fn with_updated(mut self, updated: String) -> MoodPagedListReadPublicResponseValue {
    self.updated = Some(updated);
    self
  }

  pub fn updated(&self) -> Option<&String> {
    self.updated.as_ref()
  }

  pub fn reset_updated(&mut self) {
    self.updated = None;
  }

  pub fn set_content_type(&mut self, content_type: String) {
    self.content_type = Some(content_type);
  }

  pub fn with_content_type(mut self, content_type: String) -> MoodPagedListReadPublicResponseValue {
    self.content_type = Some(content_type);
    self
  }

  pub fn content_type(&self) -> Option<&String> {
    self.content_type.as_ref()
  }

  pub fn reset_content_type(&mut self) {
    self.content_type = None;
  }

  pub fn set_longitude(&mut self, longitude: f32) {
    self.longitude = Some(longitude);
  }

  pub fn with_longitude(mut self, longitude: f32) -> MoodPagedListReadPublicResponseValue {
    self.longitude = Some(longitude);
    self
  }

  pub fn longitude(&self) -> Option<&f32> {
    self.longitude.as_ref()
  }

  pub fn reset_longitude(&mut self) {
    self.longitude = None;
  }

}



