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
    /// MoodPagedListReadPublicResponseRel
    /// </summary>
    [DataContract]
    public partial class MoodPagedListReadPublicResponseRel :  IEquatable<MoodPagedListReadPublicResponseRel>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MoodPagedListReadPublicResponseRel" /> class.
        /// </summary>
        /// <param name="displayValue">displayValue.</param>
        /// <param name="score">score.</param>
        /// <param name="polygons">polygons.</param>
        /// <param name="source">source.</param>
        /// <param name="category">category.</param>
        public MoodPagedListReadPublicResponseRel(string displayValue = default(string), decimal? score = default(decimal?), string polygons = default(string), string source = default(string), string category = default(string))
        {
            this.DisplayValue = displayValue;
            this.Score = score;
            this.Polygons = polygons;
            this.Source = source;
            this.Category = category;
        }
        
        /// <summary>
        /// Gets or Sets DisplayValue
        /// </summary>
        [DataMember(Name="displayValue", EmitDefaultValue=false)]
        public string DisplayValue { get; set; }

        /// <summary>
        /// Gets or Sets Score
        /// </summary>
        [DataMember(Name="score", EmitDefaultValue=false)]
        public decimal? Score { get; set; }

        /// <summary>
        /// Gets or Sets Polygons
        /// </summary>
        [DataMember(Name="polygons", EmitDefaultValue=false)]
        public string Polygons { get; set; }

        /// <summary>
        /// Gets or Sets Source
        /// </summary>
        [DataMember(Name="source", EmitDefaultValue=false)]
        public string Source { get; set; }

        /// <summary>
        /// Gets or Sets Category
        /// </summary>
        [DataMember(Name="category", EmitDefaultValue=false)]
        public string Category { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MoodPagedListReadPublicResponseRel {\n");
            sb.Append("  DisplayValue: ").Append(DisplayValue).Append("\n");
            sb.Append("  Score: ").Append(Score).Append("\n");
            sb.Append("  Polygons: ").Append(Polygons).Append("\n");
            sb.Append("  Source: ").Append(Source).Append("\n");
            sb.Append("  Category: ").Append(Category).Append("\n");
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
            return this.Equals(input as MoodPagedListReadPublicResponseRel);
        }

        /// <summary>
        /// Returns true if MoodPagedListReadPublicResponseRel instances are equal
        /// </summary>
        /// <param name="input">Instance of MoodPagedListReadPublicResponseRel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MoodPagedListReadPublicResponseRel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DisplayValue == input.DisplayValue ||
                    (this.DisplayValue != null &&
                    this.DisplayValue.Equals(input.DisplayValue))
                ) && 
                (
                    this.Score == input.Score ||
                    (this.Score != null &&
                    this.Score.Equals(input.Score))
                ) && 
                (
                    this.Polygons == input.Polygons ||
                    (this.Polygons != null &&
                    this.Polygons.Equals(input.Polygons))
                ) && 
                (
                    this.Source == input.Source ||
                    (this.Source != null &&
                    this.Source.Equals(input.Source))
                ) && 
                (
                    this.Category == input.Category ||
                    (this.Category != null &&
                    this.Category.Equals(input.Category))
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
                if (this.DisplayValue != null)
                    hashCode = hashCode * 59 + this.DisplayValue.GetHashCode();
                if (this.Score != null)
                    hashCode = hashCode * 59 + this.Score.GetHashCode();
                if (this.Polygons != null)
                    hashCode = hashCode * 59 + this.Polygons.GetHashCode();
                if (this.Source != null)
                    hashCode = hashCode * 59 + this.Source.GetHashCode();
                if (this.Category != null)
                    hashCode = hashCode * 59 + this.Category.GetHashCode();
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
