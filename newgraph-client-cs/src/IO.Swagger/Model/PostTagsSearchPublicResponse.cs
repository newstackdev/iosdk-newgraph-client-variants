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
    /// PostTagsSearchPublicResponse
    /// </summary>
    [DataContract]
    public partial class PostTagsSearchPublicResponse :  IEquatable<PostTagsSearchPublicResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PostTagsSearchPublicResponse" /> class.
        /// </summary>
        /// <param name="done">done.</param>
        /// <param name="value">value.</param>
        public PostTagsSearchPublicResponse(bool? done = default(bool?), List<PostTagsSearchPublicResponseValue> value = default(List<PostTagsSearchPublicResponseValue>))
        {
            this.Done = done;
            this.Value = value;
        }
        
        /// <summary>
        /// Gets or Sets Done
        /// </summary>
        [DataMember(Name="done", EmitDefaultValue=false)]
        public bool? Done { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public List<PostTagsSearchPublicResponseValue> Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PostTagsSearchPublicResponse {\n");
            sb.Append("  Done: ").Append(Done).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
            return this.Equals(input as PostTagsSearchPublicResponse);
        }

        /// <summary>
        /// Returns true if PostTagsSearchPublicResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of PostTagsSearchPublicResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PostTagsSearchPublicResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Done == input.Done ||
                    (this.Done != null &&
                    this.Done.Equals(input.Done))
                ) && 
                (
                    this.Value == input.Value ||
                    this.Value != null &&
                    this.Value.SequenceEqual(input.Value)
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
                if (this.Done != null)
                    hashCode = hashCode * 59 + this.Done.GetHashCode();
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
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
