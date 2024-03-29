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

/**
 * BcKeyPairCreateResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-10-05T17:10:47.666Z")
public class BcKeyPairCreateResponse {
  @SerializedName("prv_key")
  private String prvKey = null;

  @SerializedName("pub_key")
  private String pubKey = null;

  public BcKeyPairCreateResponse prvKey(String prvKey) {
    this.prvKey = prvKey;
    return this;
  }

   /**
   * Get prvKey
   * @return prvKey
  **/
  @ApiModelProperty(required = true, value = "")
  public String getPrvKey() {
    return prvKey;
  }

  public void setPrvKey(String prvKey) {
    this.prvKey = prvKey;
  }

  public BcKeyPairCreateResponse pubKey(String pubKey) {
    this.pubKey = pubKey;
    return this;
  }

   /**
   * Get pubKey
   * @return pubKey
  **/
  @ApiModelProperty(required = true, value = "")
  public String getPubKey() {
    return pubKey;
  }

  public void setPubKey(String pubKey) {
    this.pubKey = pubKey;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BcKeyPairCreateResponse bcKeyPairCreateResponse = (BcKeyPairCreateResponse) o;
    return Objects.equals(this.prvKey, bcKeyPairCreateResponse.prvKey) &&
        Objects.equals(this.pubKey, bcKeyPairCreateResponse.pubKey);
  }

  @Override
  public int hashCode() {
    return Objects.hash(prvKey, pubKey);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BcKeyPairCreateResponse {\n");
    
    sb.append("    prvKey: ").append(toIndentedString(prvKey)).append("\n");
    sb.append("    pubKey: ").append(toIndentedString(pubKey)).append("\n");
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

