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
    /// CreativeSearchResponseSourceMeta
    /// </summary>
    [DataContract]
    public partial class CreativeSearchResponseSourceMeta :  IEquatable<CreativeSearchResponseSourceMeta>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreativeSearchResponseSourceMeta" /> class.
        /// </summary>
        /// <param name="date">date.</param>
        /// <param name="summary">summary.</param>
        /// <param name="id">id.</param>
        /// <param name="blogName">blogName.</param>
        /// <param name="tags">tags.</param>
        /// <param name="shortUrl">shortUrl.</param>
        public CreativeSearchResponseSourceMeta(string date = default(string), string summary = default(string), int? id = default(int?), string blogName = default(string), List<string> tags = default(List<string>), string shortUrl = default(string))
        {
            this.Date = date;
            this.Summary = summary;
            this.Id = id;
            this.BlogName = blogName;
            this.Tags = tags;
            this.ShortUrl = shortUrl;
        }
        
        /// <summary>
        /// Gets or Sets Date
        /// </summary>
        [DataMember(Name="date", EmitDefaultValue=false)]
        public string Date { get; set; }

        /// <summary>
        /// Gets or Sets Summary
        /// </summary>
        [DataMember(Name="summary", EmitDefaultValue=false)]
        public string Summary { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets BlogName
        /// </summary>
        [DataMember(Name="blog_name", EmitDefaultValue=false)]
        public string BlogName { get; set; }

        /// <summary>
        /// Gets or Sets Tags
        /// </summary>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets ShortUrl
        /// </summary>
        [DataMember(Name="short_url", EmitDefaultValue=false)]
        public string ShortUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreativeSearchResponseSourceMeta {\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  Summary: ").Append(Summary).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  BlogName: ").Append(BlogName).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  ShortUrl: ").Append(ShortUrl).Append("\n");
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
            return this.Equals(input as CreativeSearchResponseSourceMeta);
        }

        /// <summary>
        /// Returns true if CreativeSearchResponseSourceMeta instances are equal
        /// </summary>
        /// <param name="input">Instance of CreativeSearchResponseSourceMeta to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreativeSearchResponseSourceMeta input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.Summary == input.Summary ||
                    (this.Summary != null &&
                    this.Summary.Equals(input.Summary))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.BlogName == input.BlogName ||
                    (this.BlogName != null &&
                    this.BlogName.Equals(input.BlogName))
                ) && 
                (
                    this.Tags == input.Tags ||
                    this.Tags != null &&
                    this.Tags.SequenceEqual(input.Tags)
                ) && 
                (
                    this.ShortUrl == input.ShortUrl ||
                    (this.ShortUrl != null &&
                    this.ShortUrl.Equals(input.ShortUrl))
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
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                if (this.Summary != null)
                    hashCode = hashCode * 59 + this.Summary.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.BlogName != null)
                    hashCode = hashCode * 59 + this.BlogName.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.ShortUrl != null)
                    hashCode = hashCode * 59 + this.ShortUrl.GetHashCode();
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
