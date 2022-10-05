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
pub struct UserInvitationPagedListReadPublicResponseInvitation {
  #[serde(rename = "youtube")]
  youtube: Option<String>,
  #[serde(rename = "created")]
  created: Option<String>,
  #[serde(rename = "spotify")]
  spotify: Option<String>,
  #[serde(rename = "facebook")]
  facebook: Option<String>,
  #[serde(rename = "tumblr")]
  tumblr: Option<String>,
  #[serde(rename = "telegram")]
  telegram: Option<String>,
  #[serde(rename = "pinterest")]
  pinterest: Option<String>,
  #[serde(rename = "instagram")]
  instagram: Option<String>,
  #[serde(rename = "medium")]
  medium: Option<String>,
  #[serde(rename = "soundcloud")]
  soundcloud: Option<String>,
  #[serde(rename = "snapchat")]
  snapchat: Option<String>,
  #[serde(rename = "apple")]
  apple: Option<String>,
  #[serde(rename = "twitter")]
  twitter: Option<String>,
  #[serde(rename = "discord")]
  discord: Option<String>,
  #[serde(rename = "tiktok")]
  tiktok: Option<String>,
  #[serde(rename = "reddit")]
  reddit: Option<String>,
  #[serde(rename = "signal")]
  signal: Option<String>,
  #[serde(rename = "hash")]
  hash: Option<String>
}

impl UserInvitationPagedListReadPublicResponseInvitation {
  pub fn new() -> UserInvitationPagedListReadPublicResponseInvitation {
    UserInvitationPagedListReadPublicResponseInvitation {
      youtube: None,
      created: None,
      spotify: None,
      facebook: None,
      tumblr: None,
      telegram: None,
      pinterest: None,
      instagram: None,
      medium: None,
      soundcloud: None,
      snapchat: None,
      apple: None,
      twitter: None,
      discord: None,
      tiktok: None,
      reddit: None,
      signal: None,
      hash: None
    }
  }

  pub fn set_youtube(&mut self, youtube: String) {
    self.youtube = Some(youtube);
  }

  pub fn with_youtube(mut self, youtube: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.youtube = Some(youtube);
    self
  }

  pub fn youtube(&self) -> Option<&String> {
    self.youtube.as_ref()
  }

  pub fn reset_youtube(&mut self) {
    self.youtube = None;
  }

  pub fn set_created(&mut self, created: String) {
    self.created = Some(created);
  }

  pub fn with_created(mut self, created: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.created = Some(created);
    self
  }

  pub fn created(&self) -> Option<&String> {
    self.created.as_ref()
  }

  pub fn reset_created(&mut self) {
    self.created = None;
  }

  pub fn set_spotify(&mut self, spotify: String) {
    self.spotify = Some(spotify);
  }

  pub fn with_spotify(mut self, spotify: String) -> UserInvitationPagedListReadPublicResponseInvitation {
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

  pub fn with_facebook(mut self, facebook: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.facebook = Some(facebook);
    self
  }

  pub fn facebook(&self) -> Option<&String> {
    self.facebook.as_ref()
  }

  pub fn reset_facebook(&mut self) {
    self.facebook = None;
  }

  pub fn set_tumblr(&mut self, tumblr: String) {
    self.tumblr = Some(tumblr);
  }

  pub fn with_tumblr(mut self, tumblr: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.tumblr = Some(tumblr);
    self
  }

  pub fn tumblr(&self) -> Option<&String> {
    self.tumblr.as_ref()
  }

  pub fn reset_tumblr(&mut self) {
    self.tumblr = None;
  }

  pub fn set_telegram(&mut self, telegram: String) {
    self.telegram = Some(telegram);
  }

  pub fn with_telegram(mut self, telegram: String) -> UserInvitationPagedListReadPublicResponseInvitation {
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

  pub fn with_pinterest(mut self, pinterest: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.pinterest = Some(pinterest);
    self
  }

  pub fn pinterest(&self) -> Option<&String> {
    self.pinterest.as_ref()
  }

  pub fn reset_pinterest(&mut self) {
    self.pinterest = None;
  }

  pub fn set_instagram(&mut self, instagram: String) {
    self.instagram = Some(instagram);
  }

  pub fn with_instagram(mut self, instagram: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.instagram = Some(instagram);
    self
  }

  pub fn instagram(&self) -> Option<&String> {
    self.instagram.as_ref()
  }

  pub fn reset_instagram(&mut self) {
    self.instagram = None;
  }

  pub fn set_medium(&mut self, medium: String) {
    self.medium = Some(medium);
  }

  pub fn with_medium(mut self, medium: String) -> UserInvitationPagedListReadPublicResponseInvitation {
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

  pub fn with_soundcloud(mut self, soundcloud: String) -> UserInvitationPagedListReadPublicResponseInvitation {
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

  pub fn with_snapchat(mut self, snapchat: String) -> UserInvitationPagedListReadPublicResponseInvitation {
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

  pub fn with_apple(mut self, apple: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.apple = Some(apple);
    self
  }

  pub fn apple(&self) -> Option<&String> {
    self.apple.as_ref()
  }

  pub fn reset_apple(&mut self) {
    self.apple = None;
  }

  pub fn set_twitter(&mut self, twitter: String) {
    self.twitter = Some(twitter);
  }

  pub fn with_twitter(mut self, twitter: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.twitter = Some(twitter);
    self
  }

  pub fn twitter(&self) -> Option<&String> {
    self.twitter.as_ref()
  }

  pub fn reset_twitter(&mut self) {
    self.twitter = None;
  }

  pub fn set_discord(&mut self, discord: String) {
    self.discord = Some(discord);
  }

  pub fn with_discord(mut self, discord: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.discord = Some(discord);
    self
  }

  pub fn discord(&self) -> Option<&String> {
    self.discord.as_ref()
  }

  pub fn reset_discord(&mut self) {
    self.discord = None;
  }

  pub fn set_tiktok(&mut self, tiktok: String) {
    self.tiktok = Some(tiktok);
  }

  pub fn with_tiktok(mut self, tiktok: String) -> UserInvitationPagedListReadPublicResponseInvitation {
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

  pub fn with_reddit(mut self, reddit: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.reddit = Some(reddit);
    self
  }

  pub fn reddit(&self) -> Option<&String> {
    self.reddit.as_ref()
  }

  pub fn reset_reddit(&mut self) {
    self.reddit = None;
  }

  pub fn set_signal(&mut self, signal: String) {
    self.signal = Some(signal);
  }

  pub fn with_signal(mut self, signal: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.signal = Some(signal);
    self
  }

  pub fn signal(&self) -> Option<&String> {
    self.signal.as_ref()
  }

  pub fn reset_signal(&mut self) {
    self.signal = None;
  }

  pub fn set_hash(&mut self, hash: String) {
    self.hash = Some(hash);
  }

  pub fn with_hash(mut self, hash: String) -> UserInvitationPagedListReadPublicResponseInvitation {
    self.hash = Some(hash);
    self
  }

  pub fn hash(&self) -> Option<&String> {
    self.hash.as_ref()
  }

  pub fn reset_hash(&mut self) {
    self.hash = None;
  }

}


