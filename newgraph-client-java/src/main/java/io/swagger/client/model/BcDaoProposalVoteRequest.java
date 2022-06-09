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
 * BcDaoProposalVoteRequest Model
 */
@ApiModel(description = "BcDaoProposalVoteRequest Model")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-06-09T15:29:41.671Z")
public class BcDaoProposalVoteRequest {
  @SerializedName("proposal_type")
  private String proposalType = null;

  @SerializedName("quantity")
  private String quantity = null;

  @SerializedName("proposal_id")
  private String proposalId = null;

  @SerializedName("dao_id")
  private String daoId = null;

  @SerializedName("dao_owner")
  private String daoOwner = null;

  @SerializedName("voter")
  private String voter = null;

  @SerializedName("option")
  private String option = null;

  public BcDaoProposalVoteRequest proposalType(String proposalType) {
    this.proposalType = proposalType;
    return this;
  }

   /**
   * Get proposalType
   * @return proposalType
  **/
  @ApiModelProperty(value = "")
  public String getProposalType() {
    return proposalType;
  }

  public void setProposalType(String proposalType) {
    this.proposalType = proposalType;
  }

  public BcDaoProposalVoteRequest quantity(String quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Get quantity
   * @return quantity
  **/
  @ApiModelProperty(required = true, value = "")
  public String getQuantity() {
    return quantity;
  }

  public void setQuantity(String quantity) {
    this.quantity = quantity;
  }

  public BcDaoProposalVoteRequest proposalId(String proposalId) {
    this.proposalId = proposalId;
    return this;
  }

   /**
   * Get proposalId
   * @return proposalId
  **/
  @ApiModelProperty(required = true, value = "")
  public String getProposalId() {
    return proposalId;
  }

  public void setProposalId(String proposalId) {
    this.proposalId = proposalId;
  }

  public BcDaoProposalVoteRequest daoId(String daoId) {
    this.daoId = daoId;
    return this;
  }

   /**
   * Get daoId
   * @return daoId
  **/
  @ApiModelProperty(value = "")
  public String getDaoId() {
    return daoId;
  }

  public void setDaoId(String daoId) {
    this.daoId = daoId;
  }

  public BcDaoProposalVoteRequest daoOwner(String daoOwner) {
    this.daoOwner = daoOwner;
    return this;
  }

   /**
   * Get daoOwner
   * @return daoOwner
  **/
  @ApiModelProperty(value = "")
  public String getDaoOwner() {
    return daoOwner;
  }

  public void setDaoOwner(String daoOwner) {
    this.daoOwner = daoOwner;
  }

  public BcDaoProposalVoteRequest voter(String voter) {
    this.voter = voter;
    return this;
  }

   /**
   * Get voter
   * @return voter
  **/
  @ApiModelProperty(required = true, value = "")
  public String getVoter() {
    return voter;
  }

  public void setVoter(String voter) {
    this.voter = voter;
  }

  public BcDaoProposalVoteRequest option(String option) {
    this.option = option;
    return this;
  }

   /**
   * Get option
   * @return option
  **/
  @ApiModelProperty(required = true, value = "")
  public String getOption() {
    return option;
  }

  public void setOption(String option) {
    this.option = option;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BcDaoProposalVoteRequest bcDaoProposalVoteRequest = (BcDaoProposalVoteRequest) o;
    return Objects.equals(this.proposalType, bcDaoProposalVoteRequest.proposalType) &&
        Objects.equals(this.quantity, bcDaoProposalVoteRequest.quantity) &&
        Objects.equals(this.proposalId, bcDaoProposalVoteRequest.proposalId) &&
        Objects.equals(this.daoId, bcDaoProposalVoteRequest.daoId) &&
        Objects.equals(this.daoOwner, bcDaoProposalVoteRequest.daoOwner) &&
        Objects.equals(this.voter, bcDaoProposalVoteRequest.voter) &&
        Objects.equals(this.option, bcDaoProposalVoteRequest.option);
  }

  @Override
  public int hashCode() {
    return Objects.hash(proposalType, quantity, proposalId, daoId, daoOwner, voter, option);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BcDaoProposalVoteRequest {\n");
    
    sb.append("    proposalType: ").append(toIndentedString(proposalType)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    proposalId: ").append(toIndentedString(proposalId)).append("\n");
    sb.append("    daoId: ").append(toIndentedString(daoId)).append("\n");
    sb.append("    daoOwner: ").append(toIndentedString(daoOwner)).append("\n");
    sb.append("    voter: ").append(toIndentedString(voter)).append("\n");
    sb.append("    option: ").append(toIndentedString(option)).append("\n");
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

