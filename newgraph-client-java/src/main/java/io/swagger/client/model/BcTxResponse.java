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

/**
 * BcTxResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-06-09T15:29:41.671Z")
public class BcTxResponse {
  @SerializedName("TxID_createTpl")
  private String txIDCreateTpl = null;

  @SerializedName("TxID_createPool")
  private String txIDCreatePool = null;

  @SerializedName("TxID_createAcc")
  private String txIDCreateAcc = null;

  @SerializedName("TxID_createCol")
  private String txIDCreateCol = null;

  @SerializedName("TxID_createSch")
  private String txIDCreateSch = null;

  @SerializedName("TxID_stakeToPool")
  private String txIDStakeToPool = null;

  @SerializedName("TxID_mintAsset")
  private String txIDMintAsset = null;

  public BcTxResponse txIDCreateTpl(String txIDCreateTpl) {
    this.txIDCreateTpl = txIDCreateTpl;
    return this;
  }

   /**
   * Get txIDCreateTpl
   * @return txIDCreateTpl
  **/
  @ApiModelProperty(value = "")
  public String getTxIDCreateTpl() {
    return txIDCreateTpl;
  }

  public void setTxIDCreateTpl(String txIDCreateTpl) {
    this.txIDCreateTpl = txIDCreateTpl;
  }

  public BcTxResponse txIDCreatePool(String txIDCreatePool) {
    this.txIDCreatePool = txIDCreatePool;
    return this;
  }

   /**
   * Get txIDCreatePool
   * @return txIDCreatePool
  **/
  @ApiModelProperty(value = "")
  public String getTxIDCreatePool() {
    return txIDCreatePool;
  }

  public void setTxIDCreatePool(String txIDCreatePool) {
    this.txIDCreatePool = txIDCreatePool;
  }

  public BcTxResponse txIDCreateAcc(String txIDCreateAcc) {
    this.txIDCreateAcc = txIDCreateAcc;
    return this;
  }

   /**
   * Get txIDCreateAcc
   * @return txIDCreateAcc
  **/
  @ApiModelProperty(value = "")
  public String getTxIDCreateAcc() {
    return txIDCreateAcc;
  }

  public void setTxIDCreateAcc(String txIDCreateAcc) {
    this.txIDCreateAcc = txIDCreateAcc;
  }

  public BcTxResponse txIDCreateCol(String txIDCreateCol) {
    this.txIDCreateCol = txIDCreateCol;
    return this;
  }

   /**
   * Get txIDCreateCol
   * @return txIDCreateCol
  **/
  @ApiModelProperty(value = "")
  public String getTxIDCreateCol() {
    return txIDCreateCol;
  }

  public void setTxIDCreateCol(String txIDCreateCol) {
    this.txIDCreateCol = txIDCreateCol;
  }

  public BcTxResponse txIDCreateSch(String txIDCreateSch) {
    this.txIDCreateSch = txIDCreateSch;
    return this;
  }

   /**
   * Get txIDCreateSch
   * @return txIDCreateSch
  **/
  @ApiModelProperty(value = "")
  public String getTxIDCreateSch() {
    return txIDCreateSch;
  }

  public void setTxIDCreateSch(String txIDCreateSch) {
    this.txIDCreateSch = txIDCreateSch;
  }

  public BcTxResponse txIDStakeToPool(String txIDStakeToPool) {
    this.txIDStakeToPool = txIDStakeToPool;
    return this;
  }

   /**
   * Get txIDStakeToPool
   * @return txIDStakeToPool
  **/
  @ApiModelProperty(value = "")
  public String getTxIDStakeToPool() {
    return txIDStakeToPool;
  }

  public void setTxIDStakeToPool(String txIDStakeToPool) {
    this.txIDStakeToPool = txIDStakeToPool;
  }

  public BcTxResponse txIDMintAsset(String txIDMintAsset) {
    this.txIDMintAsset = txIDMintAsset;
    return this;
  }

   /**
   * Get txIDMintAsset
   * @return txIDMintAsset
  **/
  @ApiModelProperty(value = "")
  public String getTxIDMintAsset() {
    return txIDMintAsset;
  }

  public void setTxIDMintAsset(String txIDMintAsset) {
    this.txIDMintAsset = txIDMintAsset;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BcTxResponse bcTxResponse = (BcTxResponse) o;
    return Objects.equals(this.txIDCreateTpl, bcTxResponse.txIDCreateTpl) &&
        Objects.equals(this.txIDCreatePool, bcTxResponse.txIDCreatePool) &&
        Objects.equals(this.txIDCreateAcc, bcTxResponse.txIDCreateAcc) &&
        Objects.equals(this.txIDCreateCol, bcTxResponse.txIDCreateCol) &&
        Objects.equals(this.txIDCreateSch, bcTxResponse.txIDCreateSch) &&
        Objects.equals(this.txIDStakeToPool, bcTxResponse.txIDStakeToPool) &&
        Objects.equals(this.txIDMintAsset, bcTxResponse.txIDMintAsset);
  }

  @Override
  public int hashCode() {
    return Objects.hash(txIDCreateTpl, txIDCreatePool, txIDCreateAcc, txIDCreateCol, txIDCreateSch, txIDStakeToPool, txIDMintAsset);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BcTxResponse {\n");
    
    sb.append("    txIDCreateTpl: ").append(toIndentedString(txIDCreateTpl)).append("\n");
    sb.append("    txIDCreatePool: ").append(toIndentedString(txIDCreatePool)).append("\n");
    sb.append("    txIDCreateAcc: ").append(toIndentedString(txIDCreateAcc)).append("\n");
    sb.append("    txIDCreateCol: ").append(toIndentedString(txIDCreateCol)).append("\n");
    sb.append("    txIDCreateSch: ").append(toIndentedString(txIDCreateSch)).append("\n");
    sb.append("    txIDStakeToPool: ").append(toIndentedString(txIDStakeToPool)).append("\n");
    sb.append("    txIDMintAsset: ").append(toIndentedString(txIDMintAsset)).append("\n");
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

