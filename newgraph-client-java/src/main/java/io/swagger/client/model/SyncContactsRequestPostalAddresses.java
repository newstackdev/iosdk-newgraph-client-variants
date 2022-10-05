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
 * SyncContactsRequestPostalAddresses
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-10-05T17:10:47.666Z")
public class SyncContactsRequestPostalAddresses {
  @SerializedName("country")
  private String country = null;

  @SerializedName("city")
  private String city = null;

  @SerializedName("street")
  private String street = null;

  @SerializedName("postcode")
  private String postcode = null;

  @SerializedName("label")
  private String label = null;

  @SerializedName("region")
  private String region = null;

  public SyncContactsRequestPostalAddresses country(String country) {
    this.country = country;
    return this;
  }

   /**
   * Get country
   * @return country
  **/
  @ApiModelProperty(value = "")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public SyncContactsRequestPostalAddresses city(String city) {
    this.city = city;
    return this;
  }

   /**
   * Get city
   * @return city
  **/
  @ApiModelProperty(value = "")
  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public SyncContactsRequestPostalAddresses street(String street) {
    this.street = street;
    return this;
  }

   /**
   * Get street
   * @return street
  **/
  @ApiModelProperty(value = "")
  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public SyncContactsRequestPostalAddresses postcode(String postcode) {
    this.postcode = postcode;
    return this;
  }

   /**
   * Get postcode
   * @return postcode
  **/
  @ApiModelProperty(value = "")
  public String getPostcode() {
    return postcode;
  }

  public void setPostcode(String postcode) {
    this.postcode = postcode;
  }

  public SyncContactsRequestPostalAddresses label(String label) {
    this.label = label;
    return this;
  }

   /**
   * Get label
   * @return label
  **/
  @ApiModelProperty(value = "")
  public String getLabel() {
    return label;
  }

  public void setLabel(String label) {
    this.label = label;
  }

  public SyncContactsRequestPostalAddresses region(String region) {
    this.region = region;
    return this;
  }

   /**
   * Get region
   * @return region
  **/
  @ApiModelProperty(value = "")
  public String getRegion() {
    return region;
  }

  public void setRegion(String region) {
    this.region = region;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SyncContactsRequestPostalAddresses syncContactsRequestPostalAddresses = (SyncContactsRequestPostalAddresses) o;
    return Objects.equals(this.country, syncContactsRequestPostalAddresses.country) &&
        Objects.equals(this.city, syncContactsRequestPostalAddresses.city) &&
        Objects.equals(this.street, syncContactsRequestPostalAddresses.street) &&
        Objects.equals(this.postcode, syncContactsRequestPostalAddresses.postcode) &&
        Objects.equals(this.label, syncContactsRequestPostalAddresses.label) &&
        Objects.equals(this.region, syncContactsRequestPostalAddresses.region);
  }

  @Override
  public int hashCode() {
    return Objects.hash(country, city, street, postcode, label, region);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SyncContactsRequestPostalAddresses {\n");
    
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("    street: ").append(toIndentedString(street)).append("\n");
    sb.append("    postcode: ").append(toIndentedString(postcode)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
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

