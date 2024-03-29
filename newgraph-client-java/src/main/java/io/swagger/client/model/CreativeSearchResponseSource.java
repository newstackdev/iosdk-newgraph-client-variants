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
import io.swagger.client.model.CreativeSearchResponseSourceMeta;
import java.io.IOException;

/**
 * CreativeSearchResponseSource
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-10-05T17:10:47.666Z")
public class CreativeSearchResponseSource {
  @SerializedName("image")
  private String image = null;

  @SerializedName("meta")
  private CreativeSearchResponseSourceMeta meta = null;

  @SerializedName("aesthetics")
  private Object aesthetics = null;

  @SerializedName("content")
  private Object content = null;

  public CreativeSearchResponseSource image(String image) {
    this.image = image;
    return this;
  }

   /**
   * Get image
   * @return image
  **/
  @ApiModelProperty(value = "")
  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public CreativeSearchResponseSource meta(CreativeSearchResponseSourceMeta meta) {
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @ApiModelProperty(value = "")
  public CreativeSearchResponseSourceMeta getMeta() {
    return meta;
  }

  public void setMeta(CreativeSearchResponseSourceMeta meta) {
    this.meta = meta;
  }

  public CreativeSearchResponseSource aesthetics(Object aesthetics) {
    this.aesthetics = aesthetics;
    return this;
  }

   /**
   * Get aesthetics
   * @return aesthetics
  **/
  @ApiModelProperty(value = "")
  public Object getAesthetics() {
    return aesthetics;
  }

  public void setAesthetics(Object aesthetics) {
    this.aesthetics = aesthetics;
  }

  public CreativeSearchResponseSource content(Object content) {
    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @ApiModelProperty(value = "")
  public Object getContent() {
    return content;
  }

  public void setContent(Object content) {
    this.content = content;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreativeSearchResponseSource creativeSearchResponseSource = (CreativeSearchResponseSource) o;
    return Objects.equals(this.image, creativeSearchResponseSource.image) &&
        Objects.equals(this.meta, creativeSearchResponseSource.meta) &&
        Objects.equals(this.aesthetics, creativeSearchResponseSource.aesthetics) &&
        Objects.equals(this.content, creativeSearchResponseSource.content);
  }

  @Override
  public int hashCode() {
    return Objects.hash(image, meta, aesthetics, content);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreativeSearchResponseSource {\n");
    
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    aesthetics: ").append(toIndentedString(aesthetics)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
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

