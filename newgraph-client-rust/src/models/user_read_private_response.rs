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
pub struct UserReadPrivateResponse {
  #[serde(rename = "powered")]
  powered: Option<f32>,
  #[serde(rename = "newcoinAccTx")]
  newcoin_acc_tx: Option<String>,
  #[serde(rename = "newcoinPoolId")]
  newcoin_pool_id: Option<String>,
  #[serde(rename = "aspectRatio")]
  aspect_ratio: Option<f32>,
  #[serde(rename = "instagram")]
  instagram: Option<String>,
  #[serde(rename = "newcoinActivePublicKey")]
  newcoin_active_public_key: Option<String>,
  #[serde(rename = "newcoinPublicKey")]
  newcoin_public_key: Option<String>,
  #[serde(rename = "powering")]
  powering: Option<f32>,
  #[serde(rename = "stripeUid")]
  stripe_uid: Option<String>,
  #[serde(rename = "twitter")]
  twitter: Option<String>,
  #[serde(rename = "newcoinOwnerPublicKey")]
  newcoin_owner_public_key: Option<String>,
  #[serde(rename = "tiktok")]
  tiktok: Option<String>,
  #[serde(rename = "reddit")]
  reddit: Option<String>,
  #[serde(rename = "id")]
  id: Option<String>,
  #[serde(rename = "contentType")]
  content_type: Option<String>,
  #[serde(rename = "signal")]
  signal: Option<String>,
  #[serde(rename = "longitude")]
  longitude: Option<f32>,
  #[serde(rename = "subscriptionExpiry")]
  subscription_expiry: Option<String>,
  #[serde(rename = "created")]
  created: Option<String>,
  #[serde(rename = "availableInvites")]
  available_invites: Option<f32>,
  #[serde(rename = "facebookId")]
  facebook_id: Option<String>,
  #[serde(rename = "newcoinPoolTx")]
  newcoin_pool_tx: Option<String>,
  #[serde(rename = "verifiedSocialIds")]
  verified_social_ids: Option<Vec<String>>,
  #[serde(rename = "firstName")]
  first_name: Option<String>,
  #[serde(rename = "license")]
  license: Option<String>,
  #[serde(rename = "discord")]
  discord: Option<String>,
  #[serde(rename = "phone")]
  phone: Option<String>,
  #[serde(rename = "updated")]
  updated: Option<String>,
  #[serde(rename = "status")]
  status: Option<String>,
  #[serde(rename = "newcoinTicker")]
  newcoin_ticker: Option<String>,
  #[serde(rename = "youtube")]
  youtube: Option<String>,
  #[serde(rename = "lastName")]
  last_name: Option<String>,
  #[serde(rename = "consentPrivacyPolicy")]
  consent_privacy_policy: Option<String>,
  #[serde(rename = "displayName")]
  display_name: Option<String>,
  #[serde(rename = "latitude")]
  latitude: Option<f32>,
  #[serde(rename = "description")]
  description: Option<String>,
  #[serde(rename = "tumblr")]
  tumblr: Option<String>,
  #[serde(rename = "medium")]
  medium: Option<String>,
  #[serde(rename = "soundcloud")]
  soundcloud: Option<String>,
  #[serde(rename = "snapchat")]
  snapchat: Option<String>,
  #[serde(rename = "apple")]
  apple: Option<String>,
  #[serde(rename = "consentTestgroup")]
  consent_testgroup: Option<String>,
  #[serde(rename = "newcoinPrivateKey")]
  newcoin_private_key: Option<String>,
  #[serde(rename = "subscriptionStatus")]
  subscription_status: Option<String>,
  #[serde(rename = "newcoinPublisherPrivateKey")]
  newcoin_publisher_private_key: Option<String>,
  #[serde(rename = "youtubeId")]
  youtube_id: Option<String>,
  #[serde(rename = "newcoinPoolStake")]
  newcoin_pool_stake: Option<f32>,
  #[serde(rename = "email")]
  email: Option<String>,
  #[serde(rename = "newcoinPublisherPublicKey")]
  newcoin_publisher_public_key: Option<String>,
  #[serde(rename = "website")]
  website: Option<String>,
  #[serde(rename = "spotify")]
  spotify: Option<String>,
  #[serde(rename = "facebook")]
  facebook: Option<String>,
  #[serde(rename = "fullName")]
  full_name: Option<String>,
  #[serde(rename = "telegram")]
  telegram: Option<String>,
  #[serde(rename = "pinterest")]
  pinterest: Option<String>,
  #[serde(rename = "contentUrl")]
  content_url: Option<String>,
  #[serde(rename = "blurHash")]
  blur_hash: Option<String>,
  #[serde(rename = "consentEmail")]
  consent_email: Option<String>,
  #[serde(rename = "username")]
  username: Option<String>
}

impl UserReadPrivateResponse {
  pub fn new() -> UserReadPrivateResponse {
    UserReadPrivateResponse {
      powered: None,
      newcoin_acc_tx: None,
      newcoin_pool_id: None,
      aspect_ratio: None,
      instagram: None,
      newcoin_active_public_key: None,
      newcoin_public_key: None,
      powering: None,
      stripe_uid: None,
      twitter: None,
      newcoin_owner_public_key: None,
      tiktok: None,
      reddit: None,
      id: None,
      content_type: None,
      signal: None,
      longitude: None,
      subscription_expiry: None,
      created: None,
      available_invites: None,
      facebook_id: None,
      newcoin_pool_tx: None,
      verified_social_ids: None,
      first_name: None,
      license: None,
      discord: None,
      phone: None,
      updated: None,
      status: None,
      newcoin_ticker: None,
      youtube: None,
      last_name: None,
      consent_privacy_policy: None,
      display_name: None,
      latitude: None,
      description: None,
      tumblr: None,
      medium: None,
      soundcloud: None,
      snapchat: None,
      apple: None,
      consent_testgroup: None,
      newcoin_private_key: None,
      subscription_status: None,
      newcoin_publisher_private_key: None,
      youtube_id: None,
      newcoin_pool_stake: None,
      email: None,
      newcoin_publisher_public_key: None,
      website: None,
      spotify: None,
      facebook: None,
      full_name: None,
      telegram: None,
      pinterest: None,
      content_url: None,
      blur_hash: None,
      consent_email: None,
      username: None
    }
  }

  pub fn set_powered(&mut self, powered: f32) {
    self.powered = Some(powered);
  }

  pub fn with_powered(mut self, powered: f32) -> UserReadPrivateResponse {
    self.powered = Some(powered);
    self
  }

  pub fn powered(&self) -> Option<&f32> {
    self.powered.as_ref()
  }

  pub fn reset_powered(&mut self) {
    self.powered = None;
  }

  pub fn set_newcoin_acc_tx(&mut self, newcoin_acc_tx: String) {
    self.newcoin_acc_tx = Some(newcoin_acc_tx);
  }

  pub fn with_newcoin_acc_tx(mut self, newcoin_acc_tx: String) -> UserReadPrivateResponse {
    self.newcoin_acc_tx = Some(newcoin_acc_tx);
    self
  }

  pub fn newcoin_acc_tx(&self) -> Option<&String> {
    self.newcoin_acc_tx.as_ref()
  }

  pub fn reset_newcoin_acc_tx(&mut self) {
    self.newcoin_acc_tx = None;
  }

  pub fn set_newcoin_pool_id(&mut self, newcoin_pool_id: String) {
    self.newcoin_pool_id = Some(newcoin_pool_id);
  }

  pub fn with_newcoin_pool_id(mut self, newcoin_pool_id: String) -> UserReadPrivateResponse {
    self.newcoin_pool_id = Some(newcoin_pool_id);
    self
  }

  pub fn newcoin_pool_id(&self) -> Option<&String> {
    self.newcoin_pool_id.as_ref()
  }

  pub fn reset_newcoin_pool_id(&mut self) {
    self.newcoin_pool_id = None;
  }

  pub fn set_aspect_ratio(&mut self, aspect_ratio: f32) {
    self.aspect_ratio = Some(aspect_ratio);
  }

  pub fn with_aspect_ratio(mut self, aspect_ratio: f32) -> UserReadPrivateResponse {
    self.aspect_ratio = Some(aspect_ratio);
    self
  }

  pub fn aspect_ratio(&self) -> Option<&f32> {
    self.aspect_ratio.as_ref()
  }

  pub fn reset_aspect_ratio(&mut self) {
    self.aspect_ratio = None;
  }

  pub fn set_instagram(&mut self, instagram: String) {
    self.instagram = Some(instagram);
  }

  pub fn with_instagram(mut self, instagram: String) -> UserReadPrivateResponse {
    self.instagram = Some(instagram);
    self
  }

  pub fn instagram(&self) -> Option<&String> {
    self.instagram.as_ref()
  }

  pub fn reset_instagram(&mut self) {
    self.instagram = None;
  }

  pub fn set_newcoin_active_public_key(&mut self, newcoin_active_public_key: String) {
    self.newcoin_active_public_key = Some(newcoin_active_public_key);
  }

  pub fn with_newcoin_active_public_key(mut self, newcoin_active_public_key: String) -> UserReadPrivateResponse {
    self.newcoin_active_public_key = Some(newcoin_active_public_key);
    self
  }

  pub fn newcoin_active_public_key(&self) -> Option<&String> {
    self.newcoin_active_public_key.as_ref()
  }

  pub fn reset_newcoin_active_public_key(&mut self) {
    self.newcoin_active_public_key = None;
  }

  pub fn set_newcoin_public_key(&mut self, newcoin_public_key: String) {
    self.newcoin_public_key = Some(newcoin_public_key);
  }

  pub fn with_newcoin_public_key(mut self, newcoin_public_key: String) -> UserReadPrivateResponse {
    self.newcoin_public_key = Some(newcoin_public_key);
    self
  }

  pub fn newcoin_public_key(&self) -> Option<&String> {
    self.newcoin_public_key.as_ref()
  }

  pub fn reset_newcoin_public_key(&mut self) {
    self.newcoin_public_key = None;
  }

  pub fn set_powering(&mut self, powering: f32) {
    self.powering = Some(powering);
  }

  pub fn with_powering(mut self, powering: f32) -> UserReadPrivateResponse {
    self.powering = Some(powering);
    self
  }

  pub fn powering(&self) -> Option<&f32> {
    self.powering.as_ref()
  }

  pub fn reset_powering(&mut self) {
    self.powering = None;
  }

  pub fn set_stripe_uid(&mut self, stripe_uid: String) {
    self.stripe_uid = Some(stripe_uid);
  }

  pub fn with_stripe_uid(mut self, stripe_uid: String) -> UserReadPrivateResponse {
    self.stripe_uid = Some(stripe_uid);
    self
  }

  pub fn stripe_uid(&self) -> Option<&String> {
    self.stripe_uid.as_ref()
  }

  pub fn reset_stripe_uid(&mut self) {
    self.stripe_uid = None;
  }

  pub fn set_twitter(&mut self, twitter: String) {
    self.twitter = Some(twitter);
  }

  pub fn with_twitter(mut self, twitter: String) -> UserReadPrivateResponse {
    self.twitter = Some(twitter);
    self
  }

  pub fn twitter(&self) -> Option<&String> {
    self.twitter.as_ref()
  }

  pub fn reset_twitter(&mut self) {
    self.twitter = None;
  }

  pub fn set_newcoin_owner_public_key(&mut self, newcoin_owner_public_key: String) {
    self.newcoin_owner_public_key = Some(newcoin_owner_public_key);
  }

  pub fn with_newcoin_owner_public_key(mut self, newcoin_owner_public_key: String) -> UserReadPrivateResponse {
    self.newcoin_owner_public_key = Some(newcoin_owner_public_key);
    self
  }

  pub fn newcoin_owner_public_key(&self) -> Option<&String> {
    self.newcoin_owner_public_key.as_ref()
  }

  pub fn reset_newcoin_owner_public_key(&mut self) {
    self.newcoin_owner_public_key = None;
  }

  pub fn set_tiktok(&mut self, tiktok: String) {
    self.tiktok = Some(tiktok);
  }

  pub fn with_tiktok(mut self, tiktok: String) -> UserReadPrivateResponse {
    self.tiktok = Some(tiktok);
    self
  }

  pub fn tiktok(&self) -> Option<&String> {
    self.tiktok.as_ref()
  }

  pub fn reset_tiktok(&mut self) {
    self.tiktok = None;
  }

  pub fn set_reddit(&mut self, reddit: String) {
    self.reddit = Some(reddit);
  }

  pub fn with_reddit(mut self, reddit: String) -> UserReadPrivateResponse {
    self.reddit = Some(reddit);
    self
  }

  pub fn reddit(&self) -> Option<&String> {
    self.reddit.as_ref()
  }

  pub fn reset_reddit(&mut self) {
    self.reddit = None;
  }

  pub fn set_id(&mut self, id: String) {
    self.id = Some(id);
  }

  pub fn with_id(mut self, id: String) -> UserReadPrivateResponse {
    self.id = Some(id);
    self
  }

  pub fn id(&self) -> Option<&String> {
    self.id.as_ref()
  }

  pub fn reset_id(&mut self) {
    self.id = None;
  }

  pub fn set_content_type(&mut self, content_type: String) {
    self.content_type = Some(content_type);
  }

  pub fn with_content_type(mut self, content_type: String) -> UserReadPrivateResponse {
    self.content_type = Some(content_type);
    self
  }

  pub fn content_type(&self) -> Option<&String> {
    self.content_type.as_ref()
  }

  pub fn reset_content_type(&mut self) {
    self.content_type = None;
  }

  pub fn set_signal(&mut self, signal: String) {
    self.signal = Some(signal);
  }

  pub fn with_signal(mut self, signal: String) -> UserReadPrivateResponse {
    self.signal = Some(signal);
    self
  }

  pub fn signal(&self) -> Option<&String> {
    self.signal.as_ref()
  }

  pub fn reset_signal(&mut self) {
    self.signal = None;
  }

  pub fn set_longitude(&mut self, longitude: f32) {
    self.longitude = Some(longitude);
  }

  pub fn with_longitude(mut self, longitude: f32) -> UserReadPrivateResponse {
    self.longitude = Some(longitude);
    self
  }

  pub fn longitude(&self) -> Option<&f32> {
    self.longitude.as_ref()
  }

  pub fn reset_longitude(&mut self) {
    self.longitude = None;
  }

  pub fn set_subscription_expiry(&mut self, subscription_expiry: String) {
    self.subscription_expiry = Some(subscription_expiry);
  }

  pub fn with_subscription_expiry(mut self, subscription_expiry: String) -> UserReadPrivateResponse {
    self.subscription_expiry = Some(subscription_expiry);
    self
  }

  pub fn subscription_expiry(&self) -> Option<&String> {
    self.subscription_expiry.as_ref()
  }

  pub fn reset_subscription_expiry(&mut self) {
    self.subscription_expiry = None;
  }

  pub fn set_created(&mut self, created: String) {
    self.created = Some(created);
  }

  pub fn with_created(mut self, created: String) -> UserReadPrivateResponse {
    self.created = Some(created);
    self
  }

  pub fn created(&self) -> Option<&String> {
    self.created.as_ref()
  }

  pub fn reset_created(&mut self) {
    self.created = None;
  }

  pub fn set_available_invites(&mut self, available_invites: f32) {
    self.available_invites = Some(available_invites);
  }

  pub fn with_available_invites(mut self, available_invites: f32) -> UserReadPrivateResponse {
    self.available_invites = Some(available_invites);
    self
  }

  pub fn available_invites(&self) -> Option<&f32> {
    self.available_invites.as_ref()
  }

  pub fn reset_available_invites(&mut self) {
    self.available_invites = None;
  }

  pub fn set_facebook_id(&mut self, facebook_id: String) {
    self.facebook_id = Some(facebook_id);
  }

  pub fn with_facebook_id(mut self, facebook_id: String) -> UserReadPrivateResponse {
    self.facebook_id = Some(facebook_id);
    self
  }

  pub fn facebook_id(&self) -> Option<&String> {
    self.facebook_id.as_ref()
  }

  pub fn reset_facebook_id(&mut self) {
    self.facebook_id = None;
  }

  pub fn set_newcoin_pool_tx(&mut self, newcoin_pool_tx: String) {
    self.newcoin_pool_tx = Some(newcoin_pool_tx);
  }

  pub fn with_newcoin_pool_tx(mut self, newcoin_pool_tx: String) -> UserReadPrivateResponse {
    self.newcoin_pool_tx = Some(newcoin_pool_tx);
    self
  }

  pub fn newcoin_pool_tx(&self) -> Option<&String> {
    self.newcoin_pool_tx.as_ref()
  }

  pub fn reset_newcoin_pool_tx(&mut self) {
    self.newcoin_pool_tx = None;
  }

  pub fn set_verified_social_ids(&mut self, verified_social_ids: Vec<String>) {
    self.verified_social_ids = Some(verified_social_ids);
  }

  pub fn with_verified_social_ids(mut self, verified_social_ids: Vec<String>) -> UserReadPrivateResponse {
    self.verified_social_ids = Some(verified_social_ids);
    self
  }

  pub fn verified_social_ids(&self) -> Option<&Vec<String>> {
    self.verified_social_ids.as_ref()
  }

  pub fn reset_verified_social_ids(&mut self) {
    self.verified_social_ids = None;
  }

  pub fn set_first_name(&mut self, first_name: String) {
    self.first_name = Some(first_name);
  }

  pub fn with_first_name(mut self, first_name: String) -> UserReadPrivateResponse {
    self.first_name = Some(first_name);
    self
  }

  pub fn first_name(&self) -> Option<&String> {
    self.first_name.as_ref()
  }

  pub fn reset_first_name(&mut self) {
    self.first_name = None;
  }

  pub fn set_license(&mut self, license: String) {
    self.license = Some(license);
  }

  pub fn with_license(mut self, license: String) -> UserReadPrivateResponse {
    self.license = Some(license);
    self
  }

  pub fn license(&self) -> Option<&String> {
    self.license.as_ref()
  }

  pub fn reset_license(&mut self) {
    self.license = None;
  }

  pub fn set_discord(&mut self, discord: String) {
    self.discord = Some(discord);
  }

  pub fn with_discord(mut self, discord: String) -> UserReadPrivateResponse {
    self.discord = Some(discord);
    self
  }

  pub fn discord(&self) -> Option<&String> {
    self.discord.as_ref()
  }

  pub fn reset_discord(&mut self) {
    self.discord = None;
  }

  pub fn set_phone(&mut self, phone: String) {
    self.phone = Some(phone);
  }

  pub fn with_phone(mut self, phone: String) -> UserReadPrivateResponse {
    self.phone = Some(phone);
    self
  }

  pub fn phone(&self) -> Option<&String> {
    self.phone.as_ref()
  }

  pub fn reset_phone(&mut self) {
    self.phone = None;
  }

  pub fn set_updated(&mut self, updated: String) {
    self.updated = Some(updated);
  }

  pub fn with_updated(mut self, updated: String) -> UserReadPrivateResponse {
    self.updated = Some(updated);
    self
  }

  pub fn updated(&self) -> Option<&String> {
    self.updated.as_ref()
  }

  pub fn reset_updated(&mut self) {
    self.updated = None;
  }

  pub fn set_status(&mut self, status: String) {
    self.status = Some(status);
  }

  pub fn with_status(mut self, status: String) -> UserReadPrivateResponse {
    self.status = Some(status);
    self
  }

  pub fn status(&self) -> Option<&String> {
    self.status.as_ref()
  }

  pub fn reset_status(&mut self) {
    self.status = None;
  }

  pub fn set_newcoin_ticker(&mut self, newcoin_ticker: String) {
    self.newcoin_ticker = Some(newcoin_ticker);
  }

  pub fn with_newcoin_ticker(mut self, newcoin_ticker: String) -> UserReadPrivateResponse {
    self.newcoin_ticker = Some(newcoin_ticker);
    self
  }

  pub fn newcoin_ticker(&self) -> Option<&String> {
    self.newcoin_ticker.as_ref()
  }

  pub fn reset_newcoin_ticker(&mut self) {
    self.newcoin_ticker = None;
  }

  pub fn set_youtube(&mut self, youtube: String) {
    self.youtube = Some(youtube);
  }

  pub fn with_youtube(mut self, youtube: String) -> UserReadPrivateResponse {
    self.youtube = Some(youtube);
    self
  }

  pub fn youtube(&self) -> Option<&String> {
    self.youtube.as_ref()
  }

  pub fn reset_youtube(&mut self) {
    self.youtube = None;
  }

  pub fn set_last_name(&mut self, last_name: String) {
    self.last_name = Some(last_name);
  }

  pub fn with_last_name(mut self, last_name: String) -> UserReadPrivateResponse {
    self.last_name = Some(last_name);
    self
  }

  pub fn last_name(&self) -> Option<&String> {
    self.last_name.as_ref()
  }

  pub fn reset_last_name(&mut self) {
    self.last_name = None;
  }

  pub fn set_consent_privacy_policy(&mut self, consent_privacy_policy: String) {
    self.consent_privacy_policy = Some(consent_privacy_policy);
  }

  pub fn with_consent_privacy_policy(mut self, consent_privacy_policy: String) -> UserReadPrivateResponse {
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

  pub fn with_display_name(mut self, display_name: String) -> UserReadPrivateResponse {
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

  pub fn with_latitude(mut self, latitude: f32) -> UserReadPrivateResponse {
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

  pub fn with_description(mut self, description: String) -> UserReadPrivateResponse {
    self.description = Some(description);
    self
  }

  pub fn description(&self) -> Option<&String> {
    self.description.as_ref()
  }

  pub fn reset_description(&mut self) {
    self.description = None;
  }

  pub fn set_tumblr(&mut self, tumblr: String) {
    self.tumblr = Some(tumblr);
  }

  pub fn with_tumblr(mut self, tumblr: String) -> UserReadPrivateResponse {
    self.tumblr = Some(tumblr);
    self
  }

  pub fn tumblr(&self) -> Option<&String> {
    self.tumblr.as_ref()
  }

  pub fn reset_tumblr(&mut self) {
    self.tumblr = None;
  }

  pub fn set_medium(&mut self, medium: String) {
    self.medium = Some(medium);
  }

  pub fn with_medium(mut self, medium: String) -> UserReadPrivateResponse {
    self.medium = Some(medium);
    self
  }

  pub fn medium(&self) -> Option<&String> {
    self.medium.as_ref()
  }

  pub fn reset_medium(&mut self) {
    self.medium = None;
  }

  pub fn set_soundcloud(&mut self, soundcloud: String) {
    self.soundcloud = Some(soundcloud);
  }

  pub fn with_soundcloud(mut self, soundcloud: String) -> UserReadPrivateResponse {
    self.soundcloud = Some(soundcloud);
    self
  }

  pub fn soundcloud(&self) -> Option<&String> {
    self.soundcloud.as_ref()
  }

  pub fn reset_soundcloud(&mut self) {
    self.soundcloud = None;
  }

  pub fn set_snapchat(&mut self, snapchat: String) {
    self.snapchat = Some(snapchat);
  }

  pub fn with_snapchat(mut self, snapchat: String) -> UserReadPrivateResponse {
    self.snapchat = Some(snapchat);
    self
  }

  pub fn snapchat(&self) -> Option<&String> {
    self.snapchat.as_ref()
  }

  pub fn reset_snapchat(&mut self) {
    self.snapchat = None;
  }

  pub fn set_apple(&mut self, apple: String) {
    self.apple = Some(apple);
  }

  pub fn with_apple(mut self, apple: String) -> UserReadPrivateResponse {
    self.apple = Some(apple);
    self
  }

  pub fn apple(&self) -> Option<&String> {
    self.apple.as_ref()
  }

  pub fn reset_apple(&mut self) {
    self.apple = None;
  }

  pub fn set_consent_testgroup(&mut self, consent_testgroup: String) {
    self.consent_testgroup = Some(consent_testgroup);
  }

  pub fn with_consent_testgroup(mut self, consent_testgroup: String) -> UserReadPrivateResponse {
    self.consent_testgroup = Some(consent_testgroup);
    self
  }

  pub fn consent_testgroup(&self) -> Option<&String> {
    self.consent_testgroup.as_ref()
  }

  pub fn reset_consent_testgroup(&mut self) {
    self.consent_testgroup = None;
  }

  pub fn set_newcoin_private_key(&mut self, newcoin_private_key: String) {
    self.newcoin_private_key = Some(newcoin_private_key);
  }

  pub fn with_newcoin_private_key(mut self, newcoin_private_key: String) -> UserReadPrivateResponse {
    self.newcoin_private_key = Some(newcoin_private_key);
    self
  }

  pub fn newcoin_private_key(&self) -> Option<&String> {
    self.newcoin_private_key.as_ref()
  }

  pub fn reset_newcoin_private_key(&mut self) {
    self.newcoin_private_key = None;
  }

  pub fn set_subscription_status(&mut self, subscription_status: String) {
    self.subscription_status = Some(subscription_status);
  }

  pub fn with_subscription_status(mut self, subscription_status: String) -> UserReadPrivateResponse {
    self.subscription_status = Some(subscription_status);
    self
  }

  pub fn subscription_status(&self) -> Option<&String> {
    self.subscription_status.as_ref()
  }

  pub fn reset_subscription_status(&mut self) {
    self.subscription_status = None;
  }

  pub fn set_newcoin_publisher_private_key(&mut self, newcoin_publisher_private_key: String) {
    self.newcoin_publisher_private_key = Some(newcoin_publisher_private_key);
  }

  pub fn with_newcoin_publisher_private_key(mut self, newcoin_publisher_private_key: String) -> UserReadPrivateResponse {
    self.newcoin_publisher_private_key = Some(newcoin_publisher_private_key);
    self
  }

  pub fn newcoin_publisher_private_key(&self) -> Option<&String> {
    self.newcoin_publisher_private_key.as_ref()
  }

  pub fn reset_newcoin_publisher_private_key(&mut self) {
    self.newcoin_publisher_private_key = None;
  }

  pub fn set_youtube_id(&mut self, youtube_id: String) {
    self.youtube_id = Some(youtube_id);
  }

  pub fn with_youtube_id(mut self, youtube_id: String) -> UserReadPrivateResponse {
    self.youtube_id = Some(youtube_id);
    self
  }

  pub fn youtube_id(&self) -> Option<&String> {
    self.youtube_id.as_ref()
  }

  pub fn reset_youtube_id(&mut self) {
    self.youtube_id = None;
  }

  pub fn set_newcoin_pool_stake(&mut self, newcoin_pool_stake: f32) {
    self.newcoin_pool_stake = Some(newcoin_pool_stake);
  }

  pub fn with_newcoin_pool_stake(mut self, newcoin_pool_stake: f32) -> UserReadPrivateResponse {
    self.newcoin_pool_stake = Some(newcoin_pool_stake);
    self
  }

  pub fn newcoin_pool_stake(&self) -> Option<&f32> {
    self.newcoin_pool_stake.as_ref()
  }

  pub fn reset_newcoin_pool_stake(&mut self) {
    self.newcoin_pool_stake = None;
  }

  pub fn set_email(&mut self, email: String) {
    self.email = Some(email);
  }

  pub fn with_email(mut self, email: String) -> UserReadPrivateResponse {
    self.email = Some(email);
    self
  }

  pub fn email(&self) -> Option<&String> {
    self.email.as_ref()
  }

  pub fn reset_email(&mut self) {
    self.email = None;
  }

  pub fn set_newcoin_publisher_public_key(&mut self, newcoin_publisher_public_key: String) {
    self.newcoin_publisher_public_key = Some(newcoin_publisher_public_key);
  }

  pub fn with_newcoin_publisher_public_key(mut self, newcoin_publisher_public_key: String) -> UserReadPrivateResponse {
    self.newcoin_publisher_public_key = Some(newcoin_publisher_public_key);
    self
  }

  pub fn newcoin_publisher_public_key(&self) -> Option<&String> {
    self.newcoin_publisher_public_key.as_ref()
  }

  pub fn reset_newcoin_publisher_public_key(&mut self) {
    self.newcoin_publisher_public_key = None;
  }

  pub fn set_website(&mut self, website: String) {
    self.website = Some(website);
  }

  pub fn with_website(mut self, website: String) -> UserReadPrivateResponse {
    self.website = Some(website);
    self
  }

  pub fn website(&self) -> Option<&String> {
    self.website.as_ref()
  }

  pub fn reset_website(&mut self) {
    self.website = None;
  }

  pub fn set_spotify(&mut self, spotify: String) {
    self.spotify = Some(spotify);
  }

  pub fn with_spotify(mut self, spotify: String) -> UserReadPrivateResponse {
    self.spotify = Some(spotify);
    self
  }

  pub fn spotify(&self) -> Option<&String> {
    self.spotify.as_ref()
  }

  pub fn reset_spotify(&mut self) {
    self.spotify = None;
  }

  pub fn set_facebook(&mut self, facebook: String) {
    self.facebook = Some(facebook);
  }

  pub fn with_facebook(mut self, facebook: String) -> UserReadPrivateResponse {
    self.facebook = Some(facebook);
    self
  }

  pub fn facebook(&self) -> Option<&String> {
    self.facebook.as_ref()
  }

  pub fn reset_facebook(&mut self) {
    self.facebook = None;
  }

  pub fn set_full_name(&mut self, full_name: String) {
    self.full_name = Some(full_name);
  }

  pub fn with_full_name(mut self, full_name: String) -> UserReadPrivateResponse {
    self.full_name = Some(full_name);
    self
  }

  pub fn full_name(&self) -> Option<&String> {
    self.full_name.as_ref()
  }

  pub fn reset_full_name(&mut self) {
    self.full_name = None;
  }

  pub fn set_telegram(&mut self, telegram: String) {
    self.telegram = Some(telegram);
  }

  pub fn with_telegram(mut self, telegram: String) -> UserReadPrivateResponse {
    self.telegram = Some(telegram);
    self
  }

  pub fn telegram(&self) -> Option<&String> {
    self.telegram.as_ref()
  }

  pub fn reset_telegram(&mut self) {
    self.telegram = None;
  }

  pub fn set_pinterest(&mut self, pinterest: String) {
    self.pinterest = Some(pinterest);
  }

  pub fn with_pinterest(mut self, pinterest: String) -> UserReadPrivateResponse {
    self.pinterest = Some(pinterest);
    self
  }

  pub fn pinterest(&self) -> Option<&String> {
    self.pinterest.as_ref()
  }

  pub fn reset_pinterest(&mut self) {
    self.pinterest = None;
  }

  pub fn set_content_url(&mut self, content_url: String) {
    self.content_url = Some(content_url);
  }

  pub fn with_content_url(mut self, content_url: String) -> UserReadPrivateResponse {
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

  pub fn with_blur_hash(mut self, blur_hash: String) -> UserReadPrivateResponse {
    self.blur_hash = Some(blur_hash);
    self
  }

  pub fn blur_hash(&self) -> Option<&String> {
    self.blur_hash.as_ref()
  }

  pub fn reset_blur_hash(&mut self) {
    self.blur_hash = None;
  }

  pub fn set_consent_email(&mut self, consent_email: String) {
    self.consent_email = Some(consent_email);
  }

  pub fn with_consent_email(mut self, consent_email: String) -> UserReadPrivateResponse {
    self.consent_email = Some(consent_email);
    self
  }

  pub fn consent_email(&self) -> Option<&String> {
    self.consent_email.as_ref()
  }

  pub fn reset_consent_email(&mut self) {
    self.consent_email = None;
  }

  pub fn set_username(&mut self, username: String) {
    self.username = Some(username);
  }

  pub fn with_username(mut self, username: String) -> UserReadPrivateResponse {
    self.username = Some(username);
    self
  }

  pub fn username(&self) -> Option<&String> {
    self.username.as_ref()
  }

  pub fn reset_username(&mut self) {
    self.username = None;
  }

}



