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
import java.io.IOException;
import java.math.BigDecimal;

/**
 * PostUpdateRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-06-09T15:29:41.671Z")
public class PostUpdateRequest {
  @SerializedName("license")
  private String license = null;

  @SerializedName("latitude")
  private BigDecimal latitude = null;

  @SerializedName("doMint")
  private Boolean doMint = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("title")
  private String title = null;

  @SerializedName("longitude")
  private BigDecimal longitude = null;

  public PostUpdateRequest license(String license) {
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

  public PostUpdateRequest latitude(BigDecimal latitude) {
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

  public PostUpdateRequest doMint(Boolean doMint) {
    this.doMint = doMint;
    return this;
  }

   /**
   * Get doMint
   * @return doMint
  **/
  @ApiModelProperty(value = "")
  public Boolean isDoMint() {
    return doMint;
  }

  public void setDoMint(Boolean doMint) {
    this.doMint = doMint;
  }

  public PostUpdateRequest description(String description) {
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

  public PostUpdateRequest id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(required = true, value = "")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public PostUpdateRequest title(String title) {
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

  public PostUpdateRequest longitude(BigDecimal longitude) {
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
    PostUpdateRequest postUpdateRequest = (PostUpdateRequest) o;
    return Objects.equals(this.license, postUpdateRequest.license) &&
        Objects.equals(this.latitude, postUpdateRequest.latitude) &&
        Objects.equals(this.doMint, postUpdateRequest.doMint) &&
        Objects.equals(this.description, postUpdateRequest.description) &&
        Objects.equals(this.id, postUpdateRequest.id) &&
        Objects.equals(this.title, postUpdateRequest.title) &&
        Objects.equals(this.longitude, postUpdateRequest.longitude);
  }

  @Override
  public int hashCode() {
    return Objects.hash(license, latitude, doMint, description, id, title, longitude);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PostUpdateRequest {\n");
    
    sb.append("    license: ").append(toIndentedString(license)).append("\n");
    sb.append("    latitude: ").append(toIndentedString(latitude)).append("\n");
    sb.append("    doMint: ").append(toIndentedString(doMint)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
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

