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
pub struct PagedRatedResponsePostValue {
  #[serde(rename = "coverContentUrl")]
  cover_content_url: Option<String>,
  #[serde(rename = "moodId")]
  mood_id: Option<String>,
  #[serde(rename = "created")]
  created: Option<String>,
  #[serde(rename = "author")]
  author: Option<::models::MoodPagedListReadPublicResponseAuthor>,
  #[serde(rename = "latitude")]
  latitude: Option<f32>,
  #[serde(rename = "moods")]
  moods: Option<Vec<::models::MoodPagedListReadPublicResponseMoods>>,
  #[serde(rename = "rating")]
  rating: Option<::models::PagedRatedResponseUserRating>,
  #[serde(rename = "description")]
  description: Option<String>,
  #[serde(rename = "aspectRatio")]
  aspect_ratio: Option<f32>,
  #[serde(rename = "title")]
  title: Option<String>,
  #[serde(rename = "content")]
  content: Option<String>,
  #[serde(rename = "tags")]
  tags: Option<Vec<::models::MoodPagedListReadPublicResponseTags>>,
  #[serde(rename = "license")]
  license: Option<String>,
  #[serde(rename = "contentUrl")]
  content_url: Option<String>,
  #[serde(rename = "blurHash")]
  blur_hash: Option<String>,
  #[serde(rename = "newcoinMintTx")]
  newcoin_mint_tx: Option<String>,
  #[serde(rename = "id")]
  id: Option<String>,
  #[serde(rename = "embed")]
  embed: Option<String>,
  #[serde(rename = "updated")]
  updated: Option<String>,
  #[serde(rename = "contentType")]
  content_type: Option<String>,
  #[serde(rename = "longitude")]
  longitude: Option<f32>
}

impl PagedRatedResponsePostValue {
  pub fn new() -> PagedRatedResponsePostValue {
    PagedRatedResponsePostValue {
      cover_content_url: None,
      mood_id: None,
      created: None,
      author: None,
      latitude: None,
      moods: None,
      rating: None,
      description: None,
      aspect_ratio: None,
      title: None,
      content: None,
      tags: None,
      license: None,
      content_url: None,
      blur_hash: None,
      newcoin_mint_tx: None,
      id: None,
      embed: None,
      updated: None,
      content_type: None,
      longitude: None
    }
  }

  pub fn set_cover_content_url(&mut self, cover_content_url: String) {
    self.cover_content_url = Some(cover_content_url);
  }

  pub fn with_cover_content_url(mut self, cover_content_url: String) -> PagedRatedResponsePostValue {
    self.cover_content_url = Some(cover_content_url);
    self
  }

  pub fn cover_content_url(&self) -> Option<&String> {
    self.cover_content_url.as_ref()
  }

  pub fn reset_cover_content_url(&mut self) {
    self.cover_content_url = None;
  }

  pub fn set_mood_id(&mut self, mood_id: String) {
    self.mood_id = Some(mood_id);
  }

  pub fn with_mood_id(mut self, mood_id: String) -> PagedRatedResponsePostValue {
    self.mood_id = Some(mood_id);
    self
  }

  pub fn mood_id(&self) -> Option<&String> {
    self.mood_id.as_ref()
  }

  pub fn reset_mood_id(&mut self) {
    self.mood_id = None;
  }

  pub fn set_created(&mut self, created: String) {
    self.created = Some(created);
  }

  pub fn with_created(mut self, created: String) -> PagedRatedResponsePostValue {
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

  pub fn with_author(mut self, author: ::models::MoodPagedListReadPublicResponseAuthor) -> PagedRatedResponsePostValue {
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

  pub fn with_latitude(mut self, latitude: f32) -> PagedRatedResponsePostValue {
    self.latitude = Some(latitude);
    self
  }

  pub fn latitude(&self) -> Option<&f32> {
    self.latitude.as_ref()
  }

  pub fn reset_latitude(&mut self) {
    self.latitude = None;
  }

  pub fn set_moods(&mut self, moods: Vec<::models::MoodPagedListReadPublicResponseMoods>) {
    self.moods = Some(moods);
  }

  pub fn with_moods(mut self, moods: Vec<::models::MoodPagedListReadPublicResponseMoods>) -> PagedRatedResponsePostValue {
    self.moods = Some(moods);
    self
  }

  pub fn moods(&self) -> Option<&Vec<::models::MoodPagedListReadPublicResponseMoods>> {
    self.moods.as_ref()
  }

  pub fn reset_moods(&mut self) {
    self.moods = None;
  }

  pub fn set_rating(&mut self, rating: ::models::PagedRatedResponseUserRating) {
    self.rating = Some(rating);
  }

  pub fn with_rating(mut self, rating: ::models::PagedRatedResponseUserRating) -> PagedRatedResponsePostValue {
    self.rating = Some(rating);
    self
  }

  pub fn rating(&self) -> Option<&::models::PagedRatedResponseUserRating> {
    self.rating.as_ref()
  }

  pub fn reset_rating(&mut self) {
    self.rating = None;
  }

  pub fn set_description(&mut self, description: String) {
    self.description = Some(description);
  }

  pub fn with_description(mut self, description: String) -> PagedRatedResponsePostValue {
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

  pub fn with_aspect_ratio(mut self, aspect_ratio: f32) -> PagedRatedResponsePostValue {
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

  pub fn with_title(mut self, title: String) -> PagedRatedResponsePostValue {
    self.title = Some(title);
    self
  }

  pub fn title(&self) -> Option<&String> {
    self.title.as_ref()
  }

  pub fn reset_title(&mut self) {
    self.title = None;
  }

  pub fn set_content(&mut self, content: String) {
    self.content = Some(content);
  }

  pub fn with_content(mut self, content: String) -> PagedRatedResponsePostValue {
    self.content = Some(content);
    self
  }

  pub fn content(&self) -> Option<&String> {
    self.content.as_ref()
  }

  pub fn reset_content(&mut self) {
    self.content = None;
  }

  pub fn set_tags(&mut self, tags: Vec<::models::MoodPagedListReadPublicResponseTags>) {
    self.tags = Some(tags);
  }

  pub fn with_tags(mut self, tags: Vec<::models::MoodPagedListReadPublicResponseTags>) -> PagedRatedResponsePostValue {
    self.tags = Some(tags);
    self
  }

  pub fn tags(&self) -> Option<&Vec<::models::MoodPagedListReadPublicResponseTags>> {
    self.tags.as_ref()
  }

  pub fn reset_tags(&mut self) {
    self.tags = None;
  }

  pub fn set_license(&mut self, license: String) {
    self.license = Some(license);
  }

  pub fn with_license(mut self, license: String) -> PagedRatedResponsePostValue {
    self.license = Some(license);
    self
  }

  pub fn license(&self) -> Option<&String> {
    self.license.as_ref()
  }

  pub fn reset_license(&mut self) {
    self.license = None;
  }

  pub fn set_content_url(&mut self, content_url: String) {
    self.content_url = Some(content_url);
  }

  pub fn with_content_url(mut self, content_url: String) -> PagedRatedResponsePostValue {
    self.content_url = Some(content_url);
    self
  }

  pub fn content_url(&self) -> Option<&String> {
    self.content_url.as_ref()
  }

  pub fn reset_content_url(&mut self) {
    self.content_url = None;
  }

  pub fn set_blur_hash(&mut self, blur_hash: String) {
    self.blur_hash = Some(blur_hash);
  }

  pub fn with_blur_hash(mut self, blur_hash: String) -> PagedRatedResponsePostValue {
    self.blur_hash = Some(blur_hash);
    self
  }

  pub fn blur_hash(&self) -> Option<&String> {
    self.blur_hash.as_ref()
  }

  pub fn reset_blur_hash(&mut self) {
    self.blur_hash = None;
  }

  pub fn set_newcoin_mint_tx(&mut self, newcoin_mint_tx: String) {
    self.newcoin_mint_tx = Some(newcoin_mint_tx);
  }

  pub fn with_newcoin_mint_tx(mut self, newcoin_mint_tx: String) -> PagedRatedResponsePostValue {
    self.newcoin_mint_tx = Some(newcoin_mint_tx);
    self
  }

  pub fn newcoin_mint_tx(&self) -> Option<&String> {
    self.newcoin_mint_tx.as_ref()
  }

  pub fn reset_newcoin_mint_tx(&mut self) {
    self.newcoin_mint_tx = None;
  }

  pub fn set_id(&mut self, id: String) {
    self.id = Some(id);
  }

  pub fn with_id(mut self, id: String) -> PagedRatedResponsePostValue {
    self.id = Some(id);
    self
  }

  pub fn id(&self) -> Option<&String> {
    self.id.as_ref()
  }

  pub fn reset_id(&mut self) {
    self.id = None;
  }

  pub fn set_embed(&mut self, embed: String) {
    self.embed = Some(embed);
  }

  pub fn with_embed(mut self, embed: String) -> PagedRatedResponsePostValue {
    self.embed = Some(embed);
    self
  }

  pub fn embed(&self) -> Option<&String> {
    self.embed.as_ref()
  }

  pub fn reset_embed(&mut self) {
    self.embed = None;
  }

  pub fn set_updated(&mut self, updated: String) {
    self.updated = Some(updated);
  }

  pub fn with_updated(mut self, updated: String) -> PagedRatedResponsePostValue {
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

  pub fn with_content_type(mut self, content_type: String) -> PagedRatedResponsePostValue {
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

  pub fn with_longitude(mut self, longitude: f32) -> PagedRatedResponsePostValue {
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



