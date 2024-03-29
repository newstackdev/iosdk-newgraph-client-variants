/*
 * newgraph-api-eu-dev
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * UserReadPrivateResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-10-05T17:10:47.666Z")
public class UserReadPrivateResponse {
  @SerializedName("powered")
  private BigDecimal powered = null;

  @SerializedName("newcoinAccTx")
  private String newcoinAccTx = null;

  @SerializedName("newcoinPoolId")
  private String newcoinPoolId = null;

  @SerializedName("aspectRatio")
  private BigDecimal aspectRatio = null;

  @SerializedName("instagram")
  private String instagram = null;

  @SerializedName("newcoinActivePublicKey")
  private String newcoinActivePublicKey = null;

  @SerializedName("newcoinPublicKey")
  private String newcoinPublicKey = null;

  @SerializedName("powering")
  private BigDecimal powering = null;

  @SerializedName("stripeUid")
  private String stripeUid = null;

  @SerializedName("twitter")
  private String twitter = null;

  @SerializedName("newcoinOwnerPublicKey")
  private String newcoinOwnerPublicKey = null;

  @SerializedName("tiktok")
  private String tiktok = null;

  @SerializedName("reddit")
  private String reddit = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("contentType")
  private String contentType = null;

  @SerializedName("signal")
  private String signal = null;

  @SerializedName("longitude")
  private BigDecimal longitude = null;

  @SerializedName("subscriptionExpiry")
  private String subscriptionExpiry = null;

  @SerializedName("created")
  private String created = null;

  @SerializedName("availableInvites")
  private BigDecimal availableInvites = null;

  @SerializedName("facebookId")
  private String facebookId = null;

  @SerializedName("newcoinPoolTx")
  private String newcoinPoolTx = null;

  @SerializedName("verifiedSocialIds")
  private List<String> verifiedSocialIds = null;

  @SerializedName("firstName")
  private String firstName = null;

  @SerializedName("license")
  private String license = null;

  @SerializedName("discord")
  private String discord = null;

  @SerializedName("phone")
  private String phone = null;

  @SerializedName("updated")
  private String updated = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("newcoinTicker")
  private String newcoinTicker = null;

  @SerializedName("youtube")
  private String youtube = null;

  @SerializedName("lastName")
  private String lastName = null;

  @SerializedName("consentPrivacyPolicy")
  private String consentPrivacyPolicy = null;

  @SerializedName("displayName")
  private String displayName = null;

  @SerializedName("latitude")
  private BigDecimal latitude = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("tumblr")
  private String tumblr = null;

  @SerializedName("medium")
  private String medium = null;

  @SerializedName("soundcloud")
  private String soundcloud = null;

  @SerializedName("snapchat")
  private String snapchat = null;

  @SerializedName("apple")
  private String apple = null;

  @SerializedName("consentTestgroup")
  private String consentTestgroup = null;

  @SerializedName("newcoinPrivateKey")
  private String newcoinPrivateKey = null;

  @SerializedName("subscriptionStatus")
  private String subscriptionStatus = null;

  @SerializedName("newcoinPublisherPrivateKey")
  private String newcoinPublisherPrivateKey = null;

  @SerializedName("youtubeId")
  private String youtubeId = null;

  @SerializedName("newcoinPoolStake")
  private BigDecimal newcoinPoolStake = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("newcoinPublisherPublicKey")
  private String newcoinPublisherPublicKey = null;

  @SerializedName("website")
  private String website = null;

  @SerializedName("spotify")
  private String spotify = null;

  @SerializedName("facebook")
  private String facebook = null;

  @SerializedName("fullName")
  private String fullName = null;

  @SerializedName("telegram")
  private String telegram = null;

  @SerializedName("pinterest")
  private String pinterest = null;

  @SerializedName("contentUrl")
  private String contentUrl = null;

  @SerializedName("blurHash")
  private String blurHash = null;

  @SerializedName("consentEmail")
  private String consentEmail = null;

  @SerializedName("username")
  private String username = null;

  public UserReadPrivateResponse powered(BigDecimal powered) {
    this.powered = powered;
    return this;
  }

   /**
   * Get powered
   * @return powered
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getPowered() {
    return powered;
  }

  public void setPowered(BigDecimal powered) {
    this.powered = powered;
  }

  public UserReadPrivateResponse newcoinAccTx(String newcoinAccTx) {
    this.newcoinAccTx = newcoinAccTx;
    return this;
  }

   /**
   * Get newcoinAccTx
   * @return newcoinAccTx
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinAccTx() {
    return newcoinAccTx;
  }

  public void setNewcoinAccTx(String newcoinAccTx) {
    this.newcoinAccTx = newcoinAccTx;
  }

  public UserReadPrivateResponse newcoinPoolId(String newcoinPoolId) {
    this.newcoinPoolId = newcoinPoolId;
    return this;
  }

   /**
   * Get newcoinPoolId
   * @return newcoinPoolId
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinPoolId() {
    return newcoinPoolId;
  }

  public void setNewcoinPoolId(String newcoinPoolId) {
    this.newcoinPoolId = newcoinPoolId;
  }

  public UserReadPrivateResponse aspectRatio(BigDecimal aspectRatio) {
    this.aspectRatio = aspectRatio;
    return this;
  }

   /**
   * Get aspectRatio
   * @return aspectRatio
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getAspectRatio() {
    return aspectRatio;
  }

  public void setAspectRatio(BigDecimal aspectRatio) {
    this.aspectRatio = aspectRatio;
  }

  public UserReadPrivateResponse instagram(String instagram) {
    this.instagram = instagram;
    return this;
  }

   /**
   * Get instagram
   * @return instagram
  **/
  @ApiModelProperty(value = "")
  public String getInstagram() {
    return instagram;
  }

  public void setInstagram(String instagram) {
    this.instagram = instagram;
  }

  public UserReadPrivateResponse newcoinActivePublicKey(String newcoinActivePublicKey) {
    this.newcoinActivePublicKey = newcoinActivePublicKey;
    return this;
  }

   /**
   * Get newcoinActivePublicKey
   * @return newcoinActivePublicKey
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinActivePublicKey() {
    return newcoinActivePublicKey;
  }

  public void setNewcoinActivePublicKey(String newcoinActivePublicKey) {
    this.newcoinActivePublicKey = newcoinActivePublicKey;
  }

  public UserReadPrivateResponse newcoinPublicKey(String newcoinPublicKey) {
    this.newcoinPublicKey = newcoinPublicKey;
    return this;
  }

   /**
   * Get newcoinPublicKey
   * @return newcoinPublicKey
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinPublicKey() {
    return newcoinPublicKey;
  }

  public void setNewcoinPublicKey(String newcoinPublicKey) {
    this.newcoinPublicKey = newcoinPublicKey;
  }

  public UserReadPrivateResponse powering(BigDecimal powering) {
    this.powering = powering;
    return this;
  }

   /**
   * Get powering
   * @return powering
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getPowering() {
    return powering;
  }

  public void setPowering(BigDecimal powering) {
    this.powering = powering;
  }

  public UserReadPrivateResponse stripeUid(String stripeUid) {
    this.stripeUid = stripeUid;
    return this;
  }

   /**
   * Get stripeUid
   * @return stripeUid
  **/
  @ApiModelProperty(value = "")
  public String getStripeUid() {
    return stripeUid;
  }

  public void setStripeUid(String stripeUid) {
    this.stripeUid = stripeUid;
  }

  public UserReadPrivateResponse twitter(String twitter) {
    this.twitter = twitter;
    return this;
  }

   /**
   * Get twitter
   * @return twitter
  **/
  @ApiModelProperty(value = "")
  public String getTwitter() {
    return twitter;
  }

  public void setTwitter(String twitter) {
    this.twitter = twitter;
  }

  public UserReadPrivateResponse newcoinOwnerPublicKey(String newcoinOwnerPublicKey) {
    this.newcoinOwnerPublicKey = newcoinOwnerPublicKey;
    return this;
  }

   /**
   * Get newcoinOwnerPublicKey
   * @return newcoinOwnerPublicKey
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinOwnerPublicKey() {
    return newcoinOwnerPublicKey;
  }

  public void setNewcoinOwnerPublicKey(String newcoinOwnerPublicKey) {
    this.newcoinOwnerPublicKey = newcoinOwnerPublicKey;
  }

  public UserReadPrivateResponse tiktok(String tiktok) {
    this.tiktok = tiktok;
    return this;
  }

   /**
   * Get tiktok
   * @return tiktok
  **/
  @ApiModelProperty(value = "")
  public String getTiktok() {
    return tiktok;
  }

  public void setTiktok(String tiktok) {
    this.tiktok = tiktok;
  }

  public UserReadPrivateResponse reddit(String reddit) {
    this.reddit = reddit;
    return this;
  }

   /**
   * Get reddit
   * @return reddit
  **/
  @ApiModelProperty(value = "")
  public String getReddit() {
    return reddit;
  }

  public void setReddit(String reddit) {
    this.reddit = reddit;
  }

  public UserReadPrivateResponse id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public UserReadPrivateResponse contentType(String contentType) {
    this.contentType = contentType;
    return this;
  }

   /**
   * Get contentType
   * @return contentType
  **/
  @ApiModelProperty(value = "")
  public String getContentType() {
    return contentType;
  }

  public void setContentType(String contentType) {
    this.contentType = contentType;
  }

  public UserReadPrivateResponse signal(String signal) {
    this.signal = signal;
    return this;
  }

   /**
   * Get signal
   * @return signal
  **/
  @ApiModelProperty(value = "")
  public String getSignal() {
    return signal;
  }

  public void setSignal(String signal) {
    this.signal = signal;
  }

  public UserReadPrivateResponse longitude(BigDecimal longitude) {
    this.longitude = longitude;
    return this;
  }

   /**
   * Get longitude
   * @return longitude
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getLongitude() {
    return longitude;
  }

  public void setLongitude(BigDecimal longitude) {
    this.longitude = longitude;
  }

  public UserReadPrivateResponse subscriptionExpiry(String subscriptionExpiry) {
    this.subscriptionExpiry = subscriptionExpiry;
    return this;
  }

   /**
   * Get subscriptionExpiry
   * @return subscriptionExpiry
  **/
  @ApiModelProperty(value = "")
  public String getSubscriptionExpiry() {
    return subscriptionExpiry;
  }

  public void setSubscriptionExpiry(String subscriptionExpiry) {
    this.subscriptionExpiry = subscriptionExpiry;
  }

  public UserReadPrivateResponse created(String created) {
    this.created = created;
    return this;
  }

   /**
   * Get created
   * @return created
  **/
  @ApiModelProperty(value = "")
  public String getCreated() {
    return created;
  }

  public void setCreated(String created) {
    this.created = created;
  }

  public UserReadPrivateResponse availableInvites(BigDecimal availableInvites) {
    this.availableInvites = availableInvites;
    return this;
  }

   /**
   * Get availableInvites
   * @return availableInvites
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getAvailableInvites() {
    return availableInvites;
  }

  public void setAvailableInvites(BigDecimal availableInvites) {
    this.availableInvites = availableInvites;
  }

  public UserReadPrivateResponse facebookId(String facebookId) {
    this.facebookId = facebookId;
    return this;
  }

   /**
   * Get facebookId
   * @return facebookId
  **/
  @ApiModelProperty(value = "")
  public String getFacebookId() {
    return facebookId;
  }

  public void setFacebookId(String facebookId) {
    this.facebookId = facebookId;
  }

  public UserReadPrivateResponse newcoinPoolTx(String newcoinPoolTx) {
    this.newcoinPoolTx = newcoinPoolTx;
    return this;
  }

   /**
   * Get newcoinPoolTx
   * @return newcoinPoolTx
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinPoolTx() {
    return newcoinPoolTx;
  }

  public void setNewcoinPoolTx(String newcoinPoolTx) {
    this.newcoinPoolTx = newcoinPoolTx;
  }

  public UserReadPrivateResponse verifiedSocialIds(List<String> verifiedSocialIds) {
    this.verifiedSocialIds = verifiedSocialIds;
    return this;
  }

  public UserReadPrivateResponse addVerifiedSocialIdsItem(String verifiedSocialIdsItem) {
    if (this.verifiedSocialIds == null) {
      this.verifiedSocialIds = new ArrayList<String>();
    }
    this.verifiedSocialIds.add(verifiedSocialIdsItem);
    return this;
  }

   /**
   * Get verifiedSocialIds
   * @return verifiedSocialIds
  **/
  @ApiModelProperty(value = "")
  public List<String> getVerifiedSocialIds() {
    return verifiedSocialIds;
  }

  public void setVerifiedSocialIds(List<String> verifiedSocialIds) {
    this.verifiedSocialIds = verifiedSocialIds;
  }

  public UserReadPrivateResponse firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @ApiModelProperty(value = "")
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public UserReadPrivateResponse license(String license) {
    this.license = license;
    return this;
  }

   /**
   * Get license
   * @return license
  **/
  @ApiModelProperty(value = "")
  public String getLicense() {
    return license;
  }

  public void setLicense(String license) {
    this.license = license;
  }

  public UserReadPrivateResponse discord(String discord) {
    this.discord = discord;
    return this;
  }

   /**
   * Get discord
   * @return discord
  **/
  @ApiModelProperty(value = "")
  public String getDiscord() {
    return discord;
  }

  public void setDiscord(String discord) {
    this.discord = discord;
  }

  public UserReadPrivateResponse phone(String phone) {
    this.phone = phone;
    return this;
  }

   /**
   * Get phone
   * @return phone
  **/
  @ApiModelProperty(value = "")
  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public UserReadPrivateResponse updated(String updated) {
    this.updated = updated;
    return this;
  }

   /**
   * Get updated
   * @return updated
  **/
  @ApiModelProperty(value = "")
  public String getUpdated() {
    return updated;
  }

  public void setUpdated(String updated) {
    this.updated = updated;
  }

  public UserReadPrivateResponse status(String status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(value = "")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public UserReadPrivateResponse newcoinTicker(String newcoinTicker) {
    this.newcoinTicker = newcoinTicker;
    return this;
  }

   /**
   * Get newcoinTicker
   * @return newcoinTicker
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinTicker() {
    return newcoinTicker;
  }

  public void setNewcoinTicker(String newcoinTicker) {
    this.newcoinTicker = newcoinTicker;
  }

  public UserReadPrivateResponse youtube(String youtube) {
    this.youtube = youtube;
    return this;
  }

   /**
   * Get youtube
   * @return youtube
  **/
  @ApiModelProperty(value = "")
  public String getYoutube() {
    return youtube;
  }

  public void setYoutube(String youtube) {
    this.youtube = youtube;
  }

  public UserReadPrivateResponse lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @ApiModelProperty(value = "")
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public UserReadPrivateResponse consentPrivacyPolicy(String consentPrivacyPolicy) {
    this.consentPrivacyPolicy = consentPrivacyPolicy;
    return this;
  }

   /**
   * Get consentPrivacyPolicy
   * @return consentPrivacyPolicy
  **/
  @ApiModelProperty(value = "")
  public String getConsentPrivacyPolicy() {
    return consentPrivacyPolicy;
  }

  public void setConsentPrivacyPolicy(String consentPrivacyPolicy) {
    this.consentPrivacyPolicy = consentPrivacyPolicy;
  }

  public UserReadPrivateResponse displayName(String displayName) {
    this.displayName = displayName;
    return this;
  }

   /**
   * Get displayName
   * @return displayName
  **/
  @ApiModelProperty(value = "")
  public String getDisplayName() {
    return displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }

  public UserReadPrivateResponse latitude(BigDecimal latitude) {
    this.latitude = latitude;
    return this;
  }

   /**
   * Get latitude
   * @return latitude
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getLatitude() {
    return latitude;
  }

  public void setLatitude(BigDecimal latitude) {
    this.latitude = latitude;
  }

  public UserReadPrivateResponse description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(value = "")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public UserReadPrivateResponse tumblr(String tumblr) {
    this.tumblr = tumblr;
    return this;
  }

   /**
   * Get tumblr
   * @return tumblr
  **/
  @ApiModelProperty(value = "")
  public String getTumblr() {
    return tumblr;
  }

  public void setTumblr(String tumblr) {
    this.tumblr = tumblr;
  }

  public UserReadPrivateResponse medium(String medium) {
    this.medium = medium;
    return this;
  }

   /**
   * Get medium
   * @return medium
  **/
  @ApiModelProperty(value = "")
  public String getMedium() {
    return medium;
  }

  public void setMedium(String medium) {
    this.medium = medium;
  }

  public UserReadPrivateResponse soundcloud(String soundcloud) {
    this.soundcloud = soundcloud;
    return this;
  }

   /**
   * Get soundcloud
   * @return soundcloud
  **/
  @ApiModelProperty(value = "")
  public String getSoundcloud() {
    return soundcloud;
  }

  public void setSoundcloud(String soundcloud) {
    this.soundcloud = soundcloud;
  }

  public UserReadPrivateResponse snapchat(String snapchat) {
    this.snapchat = snapchat;
    return this;
  }

   /**
   * Get snapchat
   * @return snapchat
  **/
  @ApiModelProperty(value = "")
  public String getSnapchat() {
    return snapchat;
  }

  public void setSnapchat(String snapchat) {
    this.snapchat = snapchat;
  }

  public UserReadPrivateResponse apple(String apple) {
    this.apple = apple;
    return this;
  }

   /**
   * Get apple
   * @return apple
  **/
  @ApiModelProperty(value = "")
  public String getApple() {
    return apple;
  }

  public void setApple(String apple) {
    this.apple = apple;
  }

  public UserReadPrivateResponse consentTestgroup(String consentTestgroup) {
    this.consentTestgroup = consentTestgroup;
    return this;
  }

   /**
   * Get consentTestgroup
   * @return consentTestgroup
  **/
  @ApiModelProperty(value = "")
  public String getConsentTestgroup() {
    return consentTestgroup;
  }

  public void setConsentTestgroup(String consentTestgroup) {
    this.consentTestgroup = consentTestgroup;
  }

  public UserReadPrivateResponse newcoinPrivateKey(String newcoinPrivateKey) {
    this.newcoinPrivateKey = newcoinPrivateKey;
    return this;
  }

   /**
   * Get newcoinPrivateKey
   * @return newcoinPrivateKey
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinPrivateKey() {
    return newcoinPrivateKey;
  }

  public void setNewcoinPrivateKey(String newcoinPrivateKey) {
    this.newcoinPrivateKey = newcoinPrivateKey;
  }

  public UserReadPrivateResponse subscriptionStatus(String subscriptionStatus) {
    this.subscriptionStatus = subscriptionStatus;
    return this;
  }

   /**
   * Get subscriptionStatus
   * @return subscriptionStatus
  **/
  @ApiModelProperty(value = "")
  public String getSubscriptionStatus() {
    return subscriptionStatus;
  }

  public void setSubscriptionStatus(String subscriptionStatus) {
    this.subscriptionStatus = subscriptionStatus;
  }

  public UserReadPrivateResponse newcoinPublisherPrivateKey(String newcoinPublisherPrivateKey) {
    this.newcoinPublisherPrivateKey = newcoinPublisherPrivateKey;
    return this;
  }

   /**
   * Get newcoinPublisherPrivateKey
   * @return newcoinPublisherPrivateKey
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinPublisherPrivateKey() {
    return newcoinPublisherPrivateKey;
  }

  public void setNewcoinPublisherPrivateKey(String newcoinPublisherPrivateKey) {
    this.newcoinPublisherPrivateKey = newcoinPublisherPrivateKey;
  }

  public UserReadPrivateResponse youtubeId(String youtubeId) {
    this.youtubeId = youtubeId;
    return this;
  }

   /**
   * Get youtubeId
   * @return youtubeId
  **/
  @ApiModelProperty(value = "")
  public String getYoutubeId() {
    return youtubeId;
  }

  public void setYoutubeId(String youtubeId) {
    this.youtubeId = youtubeId;
  }

  public UserReadPrivateResponse newcoinPoolStake(BigDecimal newcoinPoolStake) {
    this.newcoinPoolStake = newcoinPoolStake;
    return this;
  }

   /**
   * Get newcoinPoolStake
   * @return newcoinPoolStake
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getNewcoinPoolStake() {
    return newcoinPoolStake;
  }

  public void setNewcoinPoolStake(BigDecimal newcoinPoolStake) {
    this.newcoinPoolStake = newcoinPoolStake;
  }

  public UserReadPrivateResponse email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(value = "")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public UserReadPrivateResponse newcoinPublisherPublicKey(String newcoinPublisherPublicKey) {
    this.newcoinPublisherPublicKey = newcoinPublisherPublicKey;
    return this;
  }

   /**
   * Get newcoinPublisherPublicKey
   * @return newcoinPublisherPublicKey
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinPublisherPublicKey() {
    return newcoinPublisherPublicKey;
  }

  public void setNewcoinPublisherPublicKey(String newcoinPublisherPublicKey) {
    this.newcoinPublisherPublicKey = newcoinPublisherPublicKey;
  }

  public UserReadPrivateResponse website(String website) {
    this.website = website;
    return this;
  }

   /**
   * Get website
   * @return website
  **/
  @ApiModelProperty(value = "")
  public String getWebsite() {
    return website;
  }

  public void setWebsite(String website) {
    this.website = website;
  }

  public UserReadPrivateResponse spotify(String spotify) {
    this.spotify = spotify;
    return this;
  }

   /**
   * Get spotify
   * @return spotify
  **/
  @ApiModelProperty(value = "")
  public String getSpotify() {
    return spotify;
  }

  public void setSpotify(String spotify) {
    this.spotify = spotify;
  }

  public UserReadPrivateResponse facebook(String facebook) {
    this.facebook = facebook;
    return this;
  }

   /**
   * Get facebook
   * @return facebook
  **/
  @ApiModelProperty(value = "")
  public String getFacebook() {
    return facebook;
  }

  public void setFacebook(String facebook) {
    this.facebook = facebook;
  }

  public UserReadPrivateResponse fullName(String fullName) {
    this.fullName = fullName;
    return this;
  }

   /**
   * Get fullName
   * @return fullName
  **/
  @ApiModelProperty(value = "")
  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public UserReadPrivateResponse telegram(String telegram) {
    this.telegram = telegram;
    return this;
  }

   /**
   * Get telegram
   * @return telegram
  **/
  @ApiModelProperty(value = "")
  public String getTelegram() {
    return telegram;
  }

  public void setTelegram(String telegram) {
    this.telegram = telegram;
  }

  public UserReadPrivateResponse pinterest(String pinterest) {
    this.pinterest = pinterest;
    return this;
  }

   /**
   * Get pinterest
   * @return pinterest
  **/
  @ApiModelProperty(value = "")
  public String getPinterest() {
    return pinterest;
  }

  public void setPinterest(String pinterest) {
    this.pinterest = pinterest;
  }

  public UserReadPrivateResponse contentUrl(String contentUrl) {
    this.contentUrl = contentUrl;
    return this;
  }

   /**
   * Get contentUrl
   * @return contentUrl
  **/
  @ApiModelProperty(value = "")
  public String getContentUrl() {
    return contentUrl;
  }

  public void setContentUrl(String contentUrl) {
    this.contentUrl = contentUrl;
  }

  public UserReadPrivateResponse blurHash(String blurHash) {
    this.blurHash = blurHash;
    return this;
  }

   /**
   * Get blurHash
   * @return blurHash
  **/
  @ApiModelProperty(value = "")
  public String getBlurHash() {
    return blurHash;
  }

  public void setBlurHash(String blurHash) {
    this.blurHash = blurHash;
  }

  public UserReadPrivateResponse consentEmail(String consentEmail) {
    this.consentEmail = consentEmail;
    return this;
  }

   /**
   * Get consentEmail
   * @return consentEmail
  **/
  @ApiModelProperty(value = "")
  public String getConsentEmail() {
    return consentEmail;
  }

  public void setConsentEmail(String consentEmail) {
    this.consentEmail = consentEmail;
  }

  public UserReadPrivateResponse username(String username) {
    this.username = username;
    return this;
  }

   /**
   * Get username
   * @return username
  **/
  @ApiModelProperty(value = "")
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserReadPrivateResponse userReadPrivateResponse = (UserReadPrivateResponse) o;
    return Objects.equals(this.powered, userReadPrivateResponse.powered) &&
        Objects.equals(this.newcoinAccTx, userReadPrivateResponse.newcoinAccTx) &&
        Objects.equals(this.newcoinPoolId, userReadPrivateResponse.newcoinPoolId) &&
        Objects.equals(this.aspectRatio, userReadPrivateResponse.aspectRatio) &&
        Objects.equals(this.instagram, userReadPrivateResponse.instagram) &&
        Objects.equals(this.newcoinActivePublicKey, userReadPrivateResponse.newcoinActivePublicKey) &&
        Objects.equals(this.newcoinPublicKey, userReadPrivateResponse.newcoinPublicKey) &&
        Objects.equals(this.powering, userReadPrivateResponse.powering) &&
        Objects.equals(this.stripeUid, userReadPrivateResponse.stripeUid) &&
        Objects.equals(this.twitter, userReadPrivateResponse.twitter) &&
        Objects.equals(this.newcoinOwnerPublicKey, userReadPrivateResponse.newcoinOwnerPublicKey) &&
        Objects.equals(this.tiktok, userReadPrivateResponse.tiktok) &&
        Objects.equals(this.reddit, userReadPrivateResponse.reddit) &&
        Objects.equals(this.id, userReadPrivateResponse.id) &&
        Objects.equals(this.contentType, userReadPrivateResponse.contentType) &&
        Objects.equals(this.signal, userReadPrivateResponse.signal) &&
        Objects.equals(this.longitude, userReadPrivateResponse.longitude) &&
        Objects.equals(this.subscriptionExpiry, userReadPrivateResponse.subscriptionExpiry) &&
        Objects.equals(this.created, userReadPrivateResponse.created) &&
        Objects.equals(this.availableInvites, userReadPrivateResponse.availableInvites) &&
        Objects.equals(this.facebookId, userReadPrivateResponse.facebookId) &&
        Objects.equals(this.newcoinPoolTx, userReadPrivateResponse.newcoinPoolTx) &&
        Objects.equals(this.verifiedSocialIds, userReadPrivateResponse.verifiedSocialIds) &&
        Objects.equals(this.firstName, userReadPrivateResponse.firstName) &&
        Objects.equals(this.license, userReadPrivateResponse.license) &&
        Objects.equals(this.discord, userReadPrivateResponse.discord) &&
        Objects.equals(this.phone, userReadPrivateResponse.phone) &&
        Objects.equals(this.updated, userReadPrivateResponse.updated) &&
        Objects.equals(this.status, userReadPrivateResponse.status) &&
        Objects.equals(this.newcoinTicker, userReadPrivateResponse.newcoinTicker) &&
        Objects.equals(this.youtube, userReadPrivateResponse.youtube) &&
        Objects.equals(this.lastName, userReadPrivateResponse.lastName) &&
        Objects.equals(this.consentPrivacyPolicy, userReadPrivateResponse.consentPrivacyPolicy) &&
        Objects.equals(this.displayName, userReadPrivateResponse.displayName) &&
        Objects.equals(this.latitude, userReadPrivateResponse.latitude) &&
        Objects.equals(this.description, userReadPrivateResponse.description) &&
        Objects.equals(this.tumblr, userReadPrivateResponse.tumblr) &&
        Objects.equals(this.medium, userReadPrivateResponse.medium) &&
        Objects.equals(this.soundcloud, userReadPrivateResponse.soundcloud) &&
        Objects.equals(this.snapchat, userReadPrivateResponse.snapchat) &&
        Objects.equals(this.apple, userReadPrivateResponse.apple) &&
        Objects.equals(this.consentTestgroup, userReadPrivateResponse.consentTestgroup) &&
        Objects.equals(this.newcoinPrivateKey, userReadPrivateResponse.newcoinPrivateKey) &&
        Objects.equals(this.subscriptionStatus, userReadPrivateResponse.subscriptionStatus) &&
        Objects.equals(this.newcoinPublisherPrivateKey, userReadPrivateResponse.newcoinPublisherPrivateKey) &&
        Objects.equals(this.youtubeId, userReadPrivateResponse.youtubeId) &&
        Objects.equals(this.newcoinPoolStake, userReadPrivateResponse.newcoinPoolStake) &&
        Objects.equals(this.email, userReadPrivateResponse.email) &&
        Objects.equals(this.newcoinPublisherPublicKey, userReadPrivateResponse.newcoinPublisherPublicKey) &&
        Objects.equals(this.website, userReadPrivateResponse.website) &&
        Objects.equals(this.spotify, userReadPrivateResponse.spotify) &&
        Objects.equals(this.facebook, userReadPrivateResponse.facebook) &&
        Objects.equals(this.fullName, userReadPrivateResponse.fullName) &&
        Objects.equals(this.telegram, userReadPrivateResponse.telegram) &&
        Objects.equals(this.pinterest, userReadPrivateResponse.pinterest) &&
        Objects.equals(this.contentUrl, userReadPrivateResponse.contentUrl) &&
        Objects.equals(this.blurHash, userReadPrivateResponse.blurHash) &&
        Objects.equals(this.consentEmail, userReadPrivateResponse.consentEmail) &&
        Objects.equals(this.username, userReadPrivateResponse.username);
  }

  @Override
  public int hashCode() {
    return Objects.hash(powered, newcoinAccTx, newcoinPoolId, aspectRatio, instagram, newcoinActivePublicKey, newcoinPublicKey, powering, stripeUid, twitter, newcoinOwnerPublicKey, tiktok, reddit, id, contentType, signal, longitude, subscriptionExpiry, created, availableInvites, facebookId, newcoinPoolTx, verifiedSocialIds, firstName, license, discord, phone, updated, status, newcoinTicker, youtube, lastName, consentPrivacyPolicy, displayName, latitude, description, tumblr, medium, soundcloud, snapchat, apple, consentTestgroup, newcoinPrivateKey, subscriptionStatus, newcoinPublisherPrivateKey, youtubeId, newcoinPoolStake, email, newcoinPublisherPublicKey, website, spotify, facebook, fullName, telegram, pinterest, contentUrl, blurHash, consentEmail, username);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserReadPrivateResponse {\n");
    
    sb.append("    powered: ").append(toIndentedString(powered)).append("\n");
    sb.append("    newcoinAccTx: ").append(toIndentedString(newcoinAccTx)).append("\n");
    sb.append("    newcoinPoolId: ").append(toIndentedString(newcoinPoolId)).append("\n");
    sb.append("    aspectRatio: ").append(toIndentedString(aspectRatio)).append("\n");
    sb.append("    instagram: ").append(toIndentedString(instagram)).append("\n");
    sb.append("    newcoinActivePublicKey: ").append(toIndentedString(newcoinActivePublicKey)).append("\n");
    sb.append("    newcoinPublicKey: ").append(toIndentedString(newcoinPublicKey)).append("\n");
    sb.append("    powering: ").append(toIndentedString(powering)).append("\n");
    sb.append("    stripeUid: ").append(toIndentedString(stripeUid)).append("\n");
    sb.append("    twitter: ").append(toIndentedString(twitter)).append("\n");
    sb.append("    newcoinOwnerPublicKey: ").append(toIndentedString(newcoinOwnerPublicKey)).append("\n");
    sb.append("    tiktok: ").append(toIndentedString(tiktok)).append("\n");
    sb.append("    reddit: ").append(toIndentedString(reddit)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
    sb.append("    signal: ").append(toIndentedString(signal)).append("\n");
    sb.append("    longitude: ").append(toIndentedString(longitude)).append("\n");
    sb.append("    subscriptionExpiry: ").append(toIndentedString(subscriptionExpiry)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    availableInvites: ").append(toIndentedString(availableInvites)).append("\n");
    sb.append("    facebookId: ").append(toIndentedString(facebookId)).append("\n");
    sb.append("    newcoinPoolTx: ").append(toIndentedString(newcoinPoolTx)).append("\n");
    sb.append("    verifiedSocialIds: ").append(toIndentedString(verifiedSocialIds)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    license: ").append(toIndentedString(license)).append("\n");
    sb.append("    discord: ").append(toIndentedString(discord)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    updated: ").append(toIndentedString(updated)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    newcoinTicker: ").append(toIndentedString(newcoinTicker)).append("\n");
    sb.append("    youtube: ").append(toIndentedString(youtube)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    consentPrivacyPolicy: ").append(toIndentedString(consentPrivacyPolicy)).append("\n");
    sb.append("    displayName: ").append(toIndentedString(displayName)).append("\n");
    sb.append("    latitude: ").append(toIndentedString(latitude)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tumblr: ").append(toIndentedString(tumblr)).append("\n");
    sb.append("    medium: ").append(toIndentedString(medium)).append("\n");
    sb.append("    soundcloud: ").append(toIndentedString(soundcloud)).append("\n");
    sb.append("    snapchat: ").append(toIndentedString(snapchat)).append("\n");
    sb.append("    apple: ").append(toIndentedString(apple)).append("\n");
    sb.append("    consentTestgroup: ").append(toIndentedString(consentTestgroup)).append("\n");
    sb.append("    newcoinPrivateKey: ").append(toIndentedString(newcoinPrivateKey)).append("\n");
    sb.append("    subscriptionStatus: ").append(toIndentedString(subscriptionStatus)).append("\n");
    sb.append("    newcoinPublisherPrivateKey: ").append(toIndentedString(newcoinPublisherPrivateKey)).append("\n");
    sb.append("    youtubeId: ").append(toIndentedString(youtubeId)).append("\n");
    sb.append("    newcoinPoolStake: ").append(toIndentedString(newcoinPoolStake)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    newcoinPublisherPublicKey: ").append(toIndentedString(newcoinPublisherPublicKey)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
    sb.append("    spotify: ").append(toIndentedString(spotify)).append("\n");
    sb.append("    facebook: ").append(toIndentedString(facebook)).append("\n");
    sb.append("    fullName: ").append(toIndentedString(fullName)).append("\n");
    sb.append("    telegram: ").append(toIndentedString(telegram)).append("\n");
    sb.append("    pinterest: ").append(toIndentedString(pinterest)).append("\n");
    sb.append("    contentUrl: ").append(toIndentedString(contentUrl)).append("\n");
    sb.append("    blurHash: ").append(toIndentedString(blurHash)).append("\n");
    sb.append("    consentEmail: ").append(toIndentedString(consentEmail)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

