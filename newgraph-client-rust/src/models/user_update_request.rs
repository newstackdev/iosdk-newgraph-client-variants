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
pub struct UserUpdateRequest {
  #[serde(rename = "lastName")]
  last_name: Option<String>,
  #[serde(rename = "website")]
  website: Option<String>,
  #[serde(rename = "consentPrivacyPolicy")]
  consent_privacy_policy: Option<String>,
  #[serde(rename = "displayName")]
  display_name: Option<String>,
  #[serde(rename = "latitude")]
  latitude: Option<f32>,
  #[serde(rename = "newcoinCreateAccount")]
  newcoin_create_account: Option<String>,
  #[serde(rename = "fullName")]
  full_name: Option<String>,
  #[serde(rename = "tumblr")]
  tumblr: Option<String>,
  #[serde(rename = "description")]
  description: Option<String>,
  #[serde(rename = "instagram")]
  instagram: Option<String>,
  #[serde(rename = "soundcloud")]
  soundcloud: Option<String>,
  #[serde(rename = "firstName")]
  first_name: Option<String>,
  #[serde(rename = "twitter")]
  twitter: Option<String>,
  #[serde(rename = "tiktok")]
  tiktok: Option<String>,
  #[serde(rename = "id")]
  id: String,
  #[serde(rename = "consentEmail")]
  consent_email: Option<String>,
  #[serde(rename = "longitude")]
  longitude: Option<f32>
}

impl UserUpdateRequest {
  pub fn new(id: String) -> UserUpdateRequest {
    UserUpdateRequest {
      last_name: None,
      website: None,
      consent_privacy_policy: None,
      display_name: None,
      latitude: None,
      newcoin_create_account: None,
      full_name: None,
      tumblr: None,
      description: None,
      instagram: None,
      soundcloud: None,
      first_name: None,
      twitter: None,
      tiktok: None,
      id: id,
      consent_email: None,
      longitude: None
    }
  }

  pub fn set_last_name(&mut self, last_name: String) {
    self.last_name = Some(last_name);
  }

  pub fn with_last_name(mut self, last_name: String) -> UserUpdateRequest {
    self.last_name = Some(last_name);
    self
  }

  pub fn last_name(&self) -> Option<&String> {
    self.last_name.as_ref()
  }

  pub fn reset_last_name(&mut self) {
    self.last_name = None;
  }

  pub fn set_website(&mut self, website: String) {
    self.website = Some(website);
  }

  pub fn with_website(mut self, website: String) -> UserUpdateRequest {
    self.website = Some(website);
    self
  }

  pub fn website(&self) -> Option<&String> {
    self.website.as_ref()
  }

  pub fn reset_website(&mut self) {
    self.website = None;
  }

  pub fn set_consent_privacy_policy(&mut self, consent_privacy_policy: String) {
    self.consent_privacy_policy = Some(consent_privacy_policy);
  }

  pub fn with_consent_privacy_policy(mut self, consent_privacy_policy: String) -> UserUpdateRequest {
    self.consent_privacy_policy = Some(consent_privacy_policy);
    self
  }

  pub fn consent_privacy_policy(&self) -> Option<&String> {
    self.consent_privacy_policy.as_ref()
  }

  pub fn reset_consent_privacy_policy(&mut self) {
    self.consent_privacy_policy = None;
  }

  pub fn set_display_name(&mut self, display_name: String) {
    self.display_name = Some(display_name);
  }

  pub fn with_display_name(mut self, display_name: String) -> UserUpdateRequest {
    self.display_name = Some(display_name);
    self
  }

  pub fn display_name(&self) -> Option<&String> {
    self.display_name.as_ref()
  }

  pub fn reset_display_name(&mut self) {
    self.display_name = None;
  }

  pub fn set_latitude(&mut self, latitude: f32) {
    self.latitude = Some(latitude);
  }

  pub fn with_latitude(mut self, latitude: f32) -> UserUpdateRequest {
    self.latitude = Some(latitude);
    self
  }

  pub fn latitude(&self) -> Option<&f32> {
    self.latitude.as_ref()
  }

  pub fn reset_latitude(&mut self) {
    self.latitude = None;
  }

  pub fn set_newcoin_create_account(&mut self, newcoin_create_account: String) {
    self.newcoin_create_account = Some(newcoin_create_account);
  }

  pub fn with_newcoin_create_account(mut self, newcoin_create_account: String) -> UserUpdateRequest {
    self.newcoin_create_account = Some(newcoin_create_account);
    self
  }

  pub fn newcoin_create_account(&self) -> Option<&String> {
    self.newcoin_create_account.as_ref()
  }

  pub fn reset_newcoin_create_account(&mut self) {
    self.newcoin_create_account = None;
  }

  pub fn set_full_name(&mut self, full_name: String) {
    self.full_name = Some(full_name);
  }

  pub fn with_full_name(mut self, full_name: String) -> UserUpdateRequest {
    self.full_name = Some(full_name);
    self
  }

  pub fn full_name(&self) -> Option<&String> {
    self.full_name.as_ref()
  }

  pub fn reset_full_name(&mut self) {
    self.full_name = None;
  }

  pub fn set_tumblr(&mut self, tumblr: String) {
    self.tumblr = Some(tumblr);
  }

  pub fn with_tumblr(mut self, tumblr: String) -> UserUpdateRequest {
    self.tumblr = Some(tumblr);
    self
  }

  pub fn tumblr(&self) -> Option<&String> {
    self.tumblr.as_ref()
  }

  pub fn reset_tumblr(&mut self) {
    self.tumblr = None;
  }

  pub fn set_description(&mut self, description: String) {
    self.description = Some(description);
  }

  pub fn with_description(mut self, description: String) -> UserUpdateRequest {
    self.description = Some(description);
    self
  }

  pub fn description(&self) -> Option<&String> {
    self.description.as_ref()
  }

  pub fn reset_description(&mut self) {
    self.description = None;
  }

  pub fn set_instagram(&mut self, instagram: String) {
    self.instagram = Some(instagram);
  }

  pub fn with_instagram(mut self, instagram: String) -> UserUpdateRequest {
    self.instagram = Some(instagram);
    self
  }

  pub fn instagram(&self) -> Option<&String> {
    self.instagram.as_ref()
  }

  pub fn reset_instagram(&mut self) {
    self.instagram = None;
  }

  pub fn set_soundcloud(&mut self, soundcloud: String) {
    self.soundcloud = Some(soundcloud);
  }

  pub fn with_soundcloud(mut self, soundcloud: String) -> UserUpdateRequest {
    self.soundcloud = Some(soundcloud);
    self
  }

  pub fn soundcloud(&self) -> Option<&String> {
    self.soundcloud.as_ref()
  }

  pub fn reset_soundcloud(&mut self) {
    self.soundcloud = None;
  }

  pub fn set_first_name(&mut self, first_name: String) {
    self.first_name = Some(first_name);
  }

  pub fn with_first_name(mut self, first_name: String) -> UserUpdateRequest {
    self.first_name = Some(first_name);
    self
  }

  pub fn first_name(&self) -> Option<&String> {
    self.first_name.as_ref()
  }

  pub fn reset_first_name(&mut self) {
    self.first_name = None;
  }

  pub fn set_twitter(&mut self, twitter: String) {
    self.twitter = Some(twitter);
  }

  pub fn with_twitter(mut self, twitter: String) -> UserUpdateRequest {
    self.twitter = Some(twitter);
    self
  }

  pub fn twitter(&self) -> Option<&String> {
    self.twitter.as_ref()
  }

  pub fn reset_twitter(&mut self) {
    self.twitter = None;
  }

  pub fn set_tiktok(&mut self, tiktok: String) {
    self.tiktok = Some(tiktok);
  }

  pub fn with_tiktok(mut self, tiktok: String) -> UserUpdateRequest {
    self.tiktok = Some(tiktok);
    self
  }

  pub fn tiktok(&self) -> Option<&String> {
    self.tiktok.as_ref()
  }

  pub fn reset_tiktok(&mut self) {
    self.tiktok = None;
  }

  pub fn set_id(&mut self, id: String) {
    self.id = id;
  }

  pub fn with_id(mut self, id: String) -> UserUpdateRequest {
    self.id = id;
    self
  }

  pub fn id(&self) -> &String {
    &self.id
  }


  pub fn set_consent_email(&mut self, consent_email: String) {
    self.consent_email = Some(consent_email);
  }

  pub fn with_consent_email(mut self, consent_email: String) -> UserUpdateRequest {
    self.consent_email = Some(consent_email);
    self
  }

  pub fn consent_email(&self) -> Option<&String> {
    self.consent_email.as_ref()
  }

  pub fn reset_consent_email(&mut self) {
    self.consent_email = None;
  }

  pub fn set_longitude(&mut self, longitude: f32) {
    self.longitude = Some(longitude);
  }

  pub fn with_longitude(mut self, longitude: f32) -> UserUpdateRequest {
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


