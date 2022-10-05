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
    /// RatingUpdateResponse
    /// </summary>
    [DataContract]
    public partial class RatingUpdateResponse :  IEquatable<RatingUpdateResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RatingUpdateResponse" /> class.
        /// </summary>
        /// <param name="created">created.</param>
        /// <param name="txIDMintAsset">txIDMintAsset.</param>
        /// <param name="value">value.</param>
        /// <param name="updated">updated.</param>
        public RatingUpdateResponse(string created = default(string), string txIDMintAsset = default(string), decimal? value = default(decimal?), string updated = default(string))
        {
            this.Created = created;
            this.TxIDMintAsset = txIDMintAsset;
            this.Value = value;
            this.Updated = updated;
        }
        
        /// <summary>
        /// Gets or Sets Created
        /// </summary>
        [DataMember(Name="created", EmitDefaultValue=false)]
        public string Created { get; set; }

        /// <summary>
        /// Gets or Sets TxIDMintAsset
        /// </summary>
        [DataMember(Name="TxID_mintAsset", EmitDefaultValue=false)]
        public string TxIDMintAsset { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public decimal? Value { get; set; }

        /// <summary>
        /// Gets or Sets Updated
        /// </summary>
        [DataMember(Name="updated", EmitDefaultValue=false)]
        public string Updated { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RatingUpdateResponse {\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  TxIDMintAsset: ").Append(TxIDMintAsset).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Updated: ").Append(Updated).Append("\n");
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
            return this.Equals(input as RatingUpdateResponse);
        }

        /// <summary>
        /// Returns true if RatingUpdateResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of RatingUpdateResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RatingUpdateResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.TxIDMintAsset == input.TxIDMintAsset ||
                    (this.TxIDMintAsset != null &&
                    this.TxIDMintAsset.Equals(input.TxIDMintAsset))
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.Updated == input.Updated ||
                    (this.Updated != null &&
                    this.Updated.Equals(input.Updated))
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
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
                if (this.TxIDMintAsset != null)
                    hashCode = hashCode * 59 + this.TxIDMintAsset.GetHashCode();
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
                if (this.Updated != null)
                    hashCode = hashCode * 59 + this.Updated.GetHashCode();
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
            // Value (decimal?) maximum
            if(this.Value > (decimal?)100)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Value, must be a value less than or equal to 100.", new [] { "Value" });
            }

            // Value (decimal?) minimum
            if(this.Value < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Value, must be a value greater than or equal to 0.", new [] { "Value" });
            }

            yield break;
        }
    }

}
