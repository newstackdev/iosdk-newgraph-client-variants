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
    /// MoodPagedListReadPublicResponse
    /// </summary>
    [DataContract]
    public partial class MoodPagedListReadPublicResponse :  IEquatable<MoodPagedListReadPublicResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MoodPagedListReadPublicResponse" /> class.
        /// </summary>
        /// <param name="value">value.</param>
        /// <param name="done">done.</param>
        public MoodPagedListReadPublicResponse(List<MoodPagedListReadPublicResponseValue> value = default(List<MoodPagedListReadPublicResponseValue>), bool? done = default(bool?))
        {
            this.Value = value;
            this.Done = done;
        }
        
        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public List<MoodPagedListReadPublicResponseValue> Value { get; set; }

        /// <summary>
        /// Gets or Sets Done
        /// </summary>
        [DataMember(Name="done", EmitDefaultValue=false)]
        public bool? Done { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MoodPagedListReadPublicResponse {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Done: ").Append(Done).Append("\n");
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
            return this.Equals(input as MoodPagedListReadPublicResponse);
        }

        /// <summary>
        /// Returns true if MoodPagedListReadPublicResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of MoodPagedListReadPublicResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MoodPagedListReadPublicResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Value == input.Value ||
                    this.Value != null &&
                    this.Value.SequenceEqual(input.Value)
                ) && 
                (
                    this.Done == input.Done ||
                    (this.Done != null &&
                    this.Done.Equals(input.Done))
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
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
                if (this.Done != null)
                    hashCode = hashCode * 59 + this.Done.GetHashCode();
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
