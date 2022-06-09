/*
 * newlife-creator-api-eu-dev
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-06-09T06:13:03Z
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
import io.swagger.client.model.PagedRatedResponsePostAuthor;
import io.swagger.client.model.PagedRatedResponsePostMoods;
import io.swagger.client.model.PagedRatedResponsePostTags;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * MoodCreateResponsePosts
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-06-09T15:29:41.671Z")
public class MoodCreateResponsePosts {
  @SerializedName("coverContentUrl")
  private String coverContentUrl = null;

  @SerializedName("moodId")
  private String moodId = null;

  @SerializedName("created")
  private String created = null;

  @SerializedName("author")
  private PagedRatedResponsePostAuthor author = null;

  @SerializedName("latitude")
  private BigDecimal latitude = null;

  @SerializedName("moods")
  private List<PagedRatedResponsePostMoods> moods = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("aspectRatio")
  private BigDecimal aspectRatio = null;

  @SerializedName("title")
  private String title = null;

  @SerializedName("content")
  private String content = null;

  @SerializedName("tags")
  private List<PagedRatedResponsePostTags> tags = null;

  @SerializedName("license")
  private String license = null;

  @SerializedName("contentUrl")
  private String contentUrl = null;

  @SerializedName("blurHash")
  private String blurHash = null;

  @SerializedName("newcoinMintTx")
  private String newcoinMintTx = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("consentEmail")
  private String consentEmail = null;

  @SerializedName("updated")
  private String updated = null;

  @SerializedName("contentType")
  private String contentType = null;

  @SerializedName("longitude")
  private BigDecimal longitude = null;

  public MoodCreateResponsePosts coverContentUrl(String coverContentUrl) {
    this.coverContentUrl = coverContentUrl;
    return this;
  }

   /**
   * Get coverContentUrl
   * @return coverContentUrl
  **/
  @ApiModelProperty(value = "")
  public String getCoverContentUrl() {
    return coverContentUrl;
  }

  public void setCoverContentUrl(String coverContentUrl) {
    this.coverContentUrl = coverContentUrl;
  }

  public MoodCreateResponsePosts moodId(String moodId) {
    this.moodId = moodId;
    return this;
  }

   /**
   * Get moodId
   * @return moodId
  **/
  @ApiModelProperty(value = "")
  public String getMoodId() {
    return moodId;
  }

  public void setMoodId(String moodId) {
    this.moodId = moodId;
  }

  public MoodCreateResponsePosts created(String created) {
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

  public MoodCreateResponsePosts author(PagedRatedResponsePostAuthor author) {
    this.author = author;
    return this;
  }

   /**
   * Get author
   * @return author
  **/
  @ApiModelProperty(value = "")
  public PagedRatedResponsePostAuthor getAuthor() {
    return author;
  }

  public void setAuthor(PagedRatedResponsePostAuthor author) {
    this.author = author;
  }

  public MoodCreateResponsePosts latitude(BigDecimal latitude) {
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

  public MoodCreateResponsePosts moods(List<PagedRatedResponsePostMoods> moods) {
    this.moods = moods;
    return this;
  }

  public MoodCreateResponsePosts addMoodsItem(PagedRatedResponsePostMoods moodsItem) {
    if (this.moods == null) {
      this.moods = new ArrayList<PagedRatedResponsePostMoods>();
    }
    this.moods.add(moodsItem);
    return this;
  }

   /**
   * Get moods
   * @return moods
  **/
  @ApiModelProperty(value = "")
  public List<PagedRatedResponsePostMoods> getMoods() {
    return moods;
  }

  public void setMoods(List<PagedRatedResponsePostMoods> moods) {
    this.moods = moods;
  }

  public MoodCreateResponsePosts description(String description) {
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

  public MoodCreateResponsePosts aspectRatio(BigDecimal aspectRatio) {
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

  public MoodCreateResponsePosts title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @ApiModelProperty(value = "")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public MoodCreateResponsePosts content(String content) {
    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @ApiModelProperty(value = "")
  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public MoodCreateResponsePosts tags(List<PagedRatedResponsePostTags> tags) {
    this.tags = tags;
    return this;
  }

  public MoodCreateResponsePosts addTagsItem(PagedRatedResponsePostTags tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<PagedRatedResponsePostTags>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @ApiModelProperty(value = "")
  public List<PagedRatedResponsePostTags> getTags() {
    return tags;
  }

  public void setTags(List<PagedRatedResponsePostTags> tags) {
    this.tags = tags;
  }

  public MoodCreateResponsePosts license(String license) {
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

  public MoodCreateResponsePosts contentUrl(String contentUrl) {
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

  public MoodCreateResponsePosts blurHash(String blurHash) {
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

  public MoodCreateResponsePosts newcoinMintTx(String newcoinMintTx) {
    this.newcoinMintTx = newcoinMintTx;
    return this;
  }

   /**
   * Get newcoinMintTx
   * @return newcoinMintTx
  **/
  @ApiModelProperty(value = "")
  public String getNewcoinMintTx() {
    return newcoinMintTx;
  }

  public void setNewcoinMintTx(String newcoinMintTx) {
    this.newcoinMintTx = newcoinMintTx;
  }

  public MoodCreateResponsePosts id(String id) {
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

  public MoodCreateResponsePosts consentEmail(String consentEmail) {
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

  public MoodCreateResponsePosts updated(String updated) {
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

  public MoodCreateResponsePosts contentType(String contentType) {
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

  public MoodCreateResponsePosts longitude(BigDecimal longitude) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MoodCreateResponsePosts moodCreateResponsePosts = (MoodCreateResponsePosts) o;
    return Objects.equals(this.coverContentUrl, moodCreateResponsePosts.coverContentUrl) &&
        Objects.equals(this.moodId, moodCreateResponsePosts.moodId) &&
        Objects.equals(this.created, moodCreateResponsePosts.created) &&
        Objects.equals(this.author, moodCreateResponsePosts.author) &&
        Objects.equals(this.latitude, moodCreateResponsePosts.latitude) &&
        Objects.equals(this.moods, moodCreateResponsePosts.moods) &&
        Objects.equals(this.description, moodCreateResponsePosts.description) &&
        Objects.equals(this.aspectRatio, moodCreateResponsePosts.aspectRatio) &&
        Objects.equals(this.title, moodCreateResponsePosts.title) &&
        Objects.equals(this.content, moodCreateResponsePosts.content) &&
        Objects.equals(this.tags, moodCreateResponsePosts.tags) &&
        Objects.equals(this.license, moodCreateResponsePosts.license) &&
        Objects.equals(this.contentUrl, moodCreateResponsePosts.contentUrl) &&
        Objects.equals(this.blurHash, moodCreateResponsePosts.blurHash) &&
        Objects.equals(this.newcoinMintTx, moodCreateResponsePosts.newcoinMintTx) &&
        Objects.equals(this.id, moodCreateResponsePosts.id) &&
        Objects.equals(this.consentEmail, moodCreateResponsePosts.consentEmail) &&
        Objects.equals(this.updated, moodCreateResponsePosts.updated) &&
        Objects.equals(this.contentType, moodCreateResponsePosts.contentType) &&
        Objects.equals(this.longitude, moodCreateResponsePosts.longitude);
  }

  @Override
  public int hashCode() {
    return Objects.hash(coverContentUrl, moodId, created, author, latitude, moods, description, aspectRatio, title, content, tags, license, contentUrl, blurHash, newcoinMintTx, id, consentEmail, updated, contentType, longitude);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MoodCreateResponsePosts {\n");
    
    sb.append("    coverContentUrl: ").append(toIndentedString(coverContentUrl)).append("\n");
    sb.append("    moodId: ").append(toIndentedString(moodId)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    author: ").append(toIndentedString(author)).append("\n");
    sb.append("    latitude: ").append(toIndentedString(latitude)).append("\n");
    sb.append("    moods: ").append(toIndentedString(moods)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    aspectRatio: ").append(toIndentedString(aspectRatio)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    license: ").append(toIndentedString(license)).append("\n");
    sb.append("    contentUrl: ").append(toIndentedString(contentUrl)).append("\n");
    sb.append("    blurHash: ").append(toIndentedString(blurHash)).append("\n");
    sb.append("    newcoinMintTx: ").append(toIndentedString(newcoinMintTx)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    consentEmail: ").append(toIndentedString(consentEmail)).append("\n");
    sb.append("    updated: ").append(toIndentedString(updated)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
    sb.append("    longitude: ").append(toIndentedString(longitude)).append("\n");
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

