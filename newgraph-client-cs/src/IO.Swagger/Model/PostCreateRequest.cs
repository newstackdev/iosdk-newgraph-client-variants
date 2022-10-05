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
    /// PostCreateRequest
    /// </summary>
    [DataContract]
    public partial class PostCreateRequest :  IEquatable<PostCreateRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PostCreateRequest" /> class.
        /// </summary>
        /// <param name="license">license.</param>
        /// <param name="doMint">doMint.</param>
        /// <param name="description">description.</param>
        /// <param name="embed">embed.</param>
        /// <param name="title">title.</param>
        /// <param name="contentType">contentType.</param>
        /// <param name="content">content.</param>
        public PostCreateRequest(string license = default(string), string doMint = default(string), string description = default(string), string embed = default(string), string title = default(string), string contentType = default(string), string content = default(string))
        {
            this.License = license;
            this.DoMint = doMint;
            this.Description = description;
            this.Embed = embed;
            this.Title = title;
            this.ContentType = contentType;
            this.Content = content;
        }
        
        /// <summary>
        /// Gets or Sets License
        /// </summary>
        [DataMember(Name="license", EmitDefaultValue=false)]
        public string License { get; set; }

        /// <summary>
        /// Gets or Sets DoMint
        /// </summary>
        [DataMember(Name="doMint", EmitDefaultValue=false)]
        public string DoMint { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Embed
        /// </summary>
        [DataMember(Name="embed", EmitDefaultValue=false)]
        public string Embed { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name="title", EmitDefaultValue=false)]
        public string Title { get; set; }

        /// <summary>
        /// Gets or Sets ContentType
        /// </summary>
        [DataMember(Name="contentType", EmitDefaultValue=false)]
        public string ContentType { get; set; }

        /// <summary>
        /// Gets or Sets Content
        /// </summary>
        [DataMember(Name="content", EmitDefaultValue=false)]
        public string Content { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PostCreateRequest {\n");
            sb.Append("  License: ").Append(License).Append("\n");
            sb.Append("  DoMint: ").Append(DoMint).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Embed: ").Append(Embed).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  ContentType: ").Append(ContentType).Append("\n");
            sb.Append("  Content: ").Append(Content).Append("\n");
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
            return this.Equals(input as PostCreateRequest);
        }

        /// <summary>
        /// Returns true if PostCreateRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of PostCreateRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PostCreateRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.License == input.License ||
                    (this.License != null &&
                    this.License.Equals(input.License))
                ) && 
                (
                    this.DoMint == input.DoMint ||
                    (this.DoMint != null &&
                    this.DoMint.Equals(input.DoMint))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Embed == input.Embed ||
                    (this.Embed != null &&
                    this.Embed.Equals(input.Embed))
                ) && 
                (
                    this.Title == input.Title ||
                    (this.Title != null &&
                    this.Title.Equals(input.Title))
                ) && 
                (
                    this.ContentType == input.ContentType ||
                    (this.ContentType != null &&
                    this.ContentType.Equals(input.ContentType))
                ) && 
                (
                    this.Content == input.Content ||
                    (this.Content != null &&
                    this.Content.Equals(input.Content))
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
                if (this.License != null)
                    hashCode = hashCode * 59 + this.License.GetHashCode();
                if (this.DoMint != null)
                    hashCode = hashCode * 59 + this.DoMint.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Embed != null)
                    hashCode = hashCode * 59 + this.Embed.GetHashCode();
                if (this.Title != null)
                    hashCode = hashCode * 59 + this.Title.GetHashCode();
                if (this.ContentType != null)
                    hashCode = hashCode * 59 + this.ContentType.GetHashCode();
                if (this.Content != null)
                    hashCode = hashCode * 59 + this.Content.GetHashCode();
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
