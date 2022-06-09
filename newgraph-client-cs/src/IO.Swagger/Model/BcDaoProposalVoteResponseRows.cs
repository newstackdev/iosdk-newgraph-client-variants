/* 
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-06-09T06:13:03Z
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// BcDaoProposalVoteResponseRows
    /// </summary>
    [DataContract]
    public partial class BcDaoProposalVoteResponseRows :  IEquatable<BcDaoProposalVoteResponseRows>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BcDaoProposalVoteResponseRows" /> class.
        /// </summary>
        /// <param name="proposalType">proposalType.</param>
        /// <param name="quantity">quantity.</param>
        /// <param name="proposalId">proposalId.</param>
        /// <param name="daoId">daoId.</param>
        /// <param name="id">id.</param>
        public BcDaoProposalVoteResponseRows(string proposalType = default(string), BcListDaoProposalsResponseVoteNo quantity = default(BcListDaoProposalsResponseVoteNo), decimal? proposalId = default(decimal?), decimal? daoId = default(decimal?), string id = default(string))
        {
            this.ProposalType = proposalType;
            this.Quantity = quantity;
            this.ProposalId = proposalId;
            this.DaoId = daoId;
            this.Id = id;
        }
        
        /// <summary>
        /// Gets or Sets ProposalType
        /// </summary>
        [DataMember(Name="proposal_type", EmitDefaultValue=false)]
        public string ProposalType { get; set; }

        /// <summary>
        /// Gets or Sets Quantity
        /// </summary>
        [DataMember(Name="quantity", EmitDefaultValue=false)]
        public BcListDaoProposalsResponseVoteNo Quantity { get; set; }

        /// <summary>
        /// Gets or Sets ProposalId
        /// </summary>
        [DataMember(Name="proposal_id", EmitDefaultValue=false)]
        public decimal? ProposalId { get; set; }

        /// <summary>
        /// Gets or Sets DaoId
        /// </summary>
        [DataMember(Name="dao_id", EmitDefaultValue=false)]
        public decimal? DaoId { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public string Id { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BcDaoProposalVoteResponseRows {\n");
            sb.Append("  ProposalType: ").Append(ProposalType).Append("\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
            sb.Append("  ProposalId: ").Append(ProposalId).Append("\n");
            sb.Append("  DaoId: ").Append(DaoId).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as BcDaoProposalVoteResponseRows);
        }

        /// <summary>
        /// Returns true if BcDaoProposalVoteResponseRows instances are equal
        /// </summary>
        /// <param name="input">Instance of BcDaoProposalVoteResponseRows to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BcDaoProposalVoteResponseRows input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ProposalType == input.ProposalType ||
                    (this.ProposalType != null &&
                    this.ProposalType.Equals(input.ProposalType))
                ) && 
                (
                    this.Quantity == input.Quantity ||
                    (this.Quantity != null &&
                    this.Quantity.Equals(input.Quantity))
                ) && 
                (
                    this.ProposalId == input.ProposalId ||
                    (this.ProposalId != null &&
                    this.ProposalId.Equals(input.ProposalId))
                ) && 
                (
                    this.DaoId == input.DaoId ||
                    (this.DaoId != null &&
                    this.DaoId.Equals(input.DaoId))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ProposalType != null)
                    hashCode = hashCode * 59 + this.ProposalType.GetHashCode();
                if (this.Quantity != null)
                    hashCode = hashCode * 59 + this.Quantity.GetHashCode();
                if (this.ProposalId != null)
                    hashCode = hashCode * 59 + this.ProposalId.GetHashCode();
                if (this.DaoId != null)
                    hashCode = hashCode * 59 + this.DaoId.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
