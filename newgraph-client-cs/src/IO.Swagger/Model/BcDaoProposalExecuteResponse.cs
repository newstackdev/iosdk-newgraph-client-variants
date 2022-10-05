/* 
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
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
    /// BcDaoProposalExecuteResponse
    /// </summary>
    [DataContract]
    public partial class BcDaoProposalExecuteResponse :  IEquatable<BcDaoProposalExecuteResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BcDaoProposalExecuteResponse" /> class.
        /// </summary>
        /// <param name="txIDExecuteDaoProposal">txIDExecuteDaoProposal.</param>
        public BcDaoProposalExecuteResponse(string txIDExecuteDaoProposal = default(string))
        {
            this.TxIDExecuteDaoProposal = txIDExecuteDaoProposal;
        }
        
        /// <summary>
        /// Gets or Sets TxIDExecuteDaoProposal
        /// </summary>
        [DataMember(Name="TxID_executeDaoProposal", EmitDefaultValue=false)]
        public string TxIDExecuteDaoProposal { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BcDaoProposalExecuteResponse {\n");
            sb.Append("  TxIDExecuteDaoProposal: ").Append(TxIDExecuteDaoProposal).Append("\n");
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
            return this.Equals(input as BcDaoProposalExecuteResponse);
        }

        /// <summary>
        /// Returns true if BcDaoProposalExecuteResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of BcDaoProposalExecuteResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BcDaoProposalExecuteResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.TxIDExecuteDaoProposal == input.TxIDExecuteDaoProposal ||
                    (this.TxIDExecuteDaoProposal != null &&
                    this.TxIDExecuteDaoProposal.Equals(input.TxIDExecuteDaoProposal))
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
                if (this.TxIDExecuteDaoProposal != null)
                    hashCode = hashCode * 59 + this.TxIDExecuteDaoProposal.GetHashCode();
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
