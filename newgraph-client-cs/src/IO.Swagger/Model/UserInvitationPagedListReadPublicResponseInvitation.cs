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
    /// UserInvitationPagedListReadPublicResponseInvitation
    /// </summary>
    [DataContract]
    public partial class UserInvitationPagedListReadPublicResponseInvitation :  IEquatable<UserInvitationPagedListReadPublicResponseInvitation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserInvitationPagedListReadPublicResponseInvitation" /> class.
        /// </summary>
        /// <param name="youtube">youtube.</param>
        /// <param name="created">created.</param>
        /// <param name="spotify">spotify.</param>
        /// <param name="facebook">facebook.</param>
        /// <param name="tumblr">tumblr.</param>
        /// <param name="telegram">telegram.</param>
        /// <param name="pinterest">pinterest.</param>
        /// <param name="instagram">instagram.</param>
        /// <param name="medium">medium.</param>
        /// <param name="soundcloud">soundcloud.</param>
        /// <param name="snapchat">snapchat.</param>
        /// <param name="apple">apple.</param>
        /// <param name="twitter">twitter.</param>
        /// <param name="discord">discord.</param>
        /// <param name="tiktok">tiktok.</param>
        /// <param name="reddit">reddit.</param>
        /// <param name="signal">signal.</param>
        /// <param name="hash">hash.</param>
        public UserInvitationPagedListReadPublicResponseInvitation(string youtube = default(string), string created = default(string), string spotify = default(string), string facebook = default(string), string tumblr = default(string), string telegram = default(string), string pinterest = default(string), string instagram = default(string), string medium = default(string), string soundcloud = default(string), string snapchat = default(string), string apple = default(string), string twitter = default(string), string discord = default(string), string tiktok = default(string), string reddit = default(string), string signal = default(string), string hash = default(string))
        {
            this.Youtube = youtube;
            this.Created = created;
            this.Spotify = spotify;
            this.Facebook = facebook;
            this.Tumblr = tumblr;
            this.Telegram = telegram;
            this.Pinterest = pinterest;
            this.Instagram = instagram;
            this.Medium = medium;
            this.Soundcloud = soundcloud;
            this.Snapchat = snapchat;
            this.Apple = apple;
            this.Twitter = twitter;
            this.Discord = discord;
            this.Tiktok = tiktok;
            this.Reddit = reddit;
            this.Signal = signal;
            this.Hash = hash;
        }
        
        /// <summary>
        /// Gets or Sets Youtube
        /// </summary>
        [DataMember(Name="youtube", EmitDefaultValue=false)]
        public string Youtube { get; set; }

        /// <summary>
        /// Gets or Sets Created
        /// </summary>
        [DataMember(Name="created", EmitDefaultValue=false)]
        public string Created { get; set; }

        /// <summary>
        /// Gets or Sets Spotify
        /// </summary>
        [DataMember(Name="spotify", EmitDefaultValue=false)]
        public string Spotify { get; set; }

        /// <summary>
        /// Gets or Sets Facebook
        /// </summary>
        [DataMember(Name="facebook", EmitDefaultValue=false)]
        public string Facebook { get; set; }

        /// <summary>
        /// Gets or Sets Tumblr
        /// </summary>
        [DataMember(Name="tumblr", EmitDefaultValue=false)]
        public string Tumblr { get; set; }

        /// <summary>
        /// Gets or Sets Telegram
        /// </summary>
        [DataMember(Name="telegram", EmitDefaultValue=false)]
        public string Telegram { get; set; }

        /// <summary>
        /// Gets or Sets Pinterest
        /// </summary>
        [DataMember(Name="pinterest", EmitDefaultValue=false)]
        public string Pinterest { get; set; }

        /// <summary>
        /// Gets or Sets Instagram
        /// </summary>
        [DataMember(Name="instagram", EmitDefaultValue=false)]
        public string Instagram { get; set; }

        /// <summary>
        /// Gets or Sets Medium
        /// </summary>
        [DataMember(Name="medium", EmitDefaultValue=false)]
        public string Medium { get; set; }

        /// <summary>
        /// Gets or Sets Soundcloud
        /// </summary>
        [DataMember(Name="soundcloud", EmitDefaultValue=false)]
        public string Soundcloud { get; set; }

        /// <summary>
        /// Gets or Sets Snapchat
        /// </summary>
        [DataMember(Name="snapchat", EmitDefaultValue=false)]
        public string Snapchat { get; set; }

        /// <summary>
        /// Gets or Sets Apple
        /// </summary>
        [DataMember(Name="apple", EmitDefaultValue=false)]
        public string Apple { get; set; }

        /// <summary>
        /// Gets or Sets Twitter
        /// </summary>
        [DataMember(Name="twitter", EmitDefaultValue=false)]
        public string Twitter { get; set; }

        /// <summary>
        /// Gets or Sets Discord
        /// </summary>
        [DataMember(Name="discord", EmitDefaultValue=false)]
        public string Discord { get; set; }

        /// <summary>
        /// Gets or Sets Tiktok
        /// </summary>
        [DataMember(Name="tiktok", EmitDefaultValue=false)]
        public string Tiktok { get; set; }

        /// <summary>
        /// Gets or Sets Reddit
        /// </summary>
        [DataMember(Name="reddit", EmitDefaultValue=false)]
        public string Reddit { get; set; }

        /// <summary>
        /// Gets or Sets Signal
        /// </summary>
        [DataMember(Name="signal", EmitDefaultValue=false)]
        public string Signal { get; set; }

        /// <summary>
        /// Gets or Sets Hash
        /// </summary>
        [DataMember(Name="hash", EmitDefaultValue=false)]
        public string Hash { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UserInvitationPagedListReadPublicResponseInvitation {\n");
            sb.Append("  Youtube: ").Append(Youtube).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Spotify: ").Append(Spotify).Append("\n");
            sb.Append("  Facebook: ").Append(Facebook).Append("\n");
            sb.Append("  Tumblr: ").Append(Tumblr).Append("\n");
            sb.Append("  Telegram: ").Append(Telegram).Append("\n");
            sb.Append("  Pinterest: ").Append(Pinterest).Append("\n");
            sb.Append("  Instagram: ").Append(Instagram).Append("\n");
            sb.Append("  Medium: ").Append(Medium).Append("\n");
            sb.Append("  Soundcloud: ").Append(Soundcloud).Append("\n");
            sb.Append("  Snapchat: ").Append(Snapchat).Append("\n");
            sb.Append("  Apple: ").Append(Apple).Append("\n");
            sb.Append("  Twitter: ").Append(Twitter).Append("\n");
            sb.Append("  Discord: ").Append(Discord).Append("\n");
            sb.Append("  Tiktok: ").Append(Tiktok).Append("\n");
            sb.Append("  Reddit: ").Append(Reddit).Append("\n");
            sb.Append("  Signal: ").Append(Signal).Append("\n");
            sb.Append("  Hash: ").Append(Hash).Append("\n");
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
            return this.Equals(input as UserInvitationPagedListReadPublicResponseInvitation);
        }

        /// <summary>
        /// Returns true if UserInvitationPagedListReadPublicResponseInvitation instances are equal
        /// </summary>
        /// <param name="input">Instance of UserInvitationPagedListReadPublicResponseInvitation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserInvitationPagedListReadPublicResponseInvitation input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Youtube == input.Youtube ||
                    (this.Youtube != null &&
                    this.Youtube.Equals(input.Youtube))
                ) && 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.Spotify == input.Spotify ||
                    (this.Spotify != null &&
                    this.Spotify.Equals(input.Spotify))
                ) && 
                (
                    this.Facebook == input.Facebook ||
                    (this.Facebook != null &&
                    this.Facebook.Equals(input.Facebook))
                ) && 
                (
                    this.Tumblr == input.Tumblr ||
                    (this.Tumblr != null &&
                    this.Tumblr.Equals(input.Tumblr))
                ) && 
                (
                    this.Telegram == input.Telegram ||
                    (this.Telegram != null &&
                    this.Telegram.Equals(input.Telegram))
                ) && 
                (
                    this.Pinterest == input.Pinterest ||
                    (this.Pinterest != null &&
                    this.Pinterest.Equals(input.Pinterest))
                ) && 
                (
                    this.Instagram == input.Instagram ||
                    (this.Instagram != null &&
                    this.Instagram.Equals(input.Instagram))
                ) && 
                (
                    this.Medium == input.Medium ||
                    (this.Medium != null &&
                    this.Medium.Equals(input.Medium))
                ) && 
                (
                    this.Soundcloud == input.Soundcloud ||
                    (this.Soundcloud != null &&
                    this.Soundcloud.Equals(input.Soundcloud))
                ) && 
                (
                    this.Snapchat == input.Snapchat ||
                    (this.Snapchat != null &&
                    this.Snapchat.Equals(input.Snapchat))
                ) && 
                (
                    this.Apple == input.Apple ||
                    (this.Apple != null &&
                    this.Apple.Equals(input.Apple))
                ) && 
                (
                    this.Twitter == input.Twitter ||
                    (this.Twitter != null &&
                    this.Twitter.Equals(input.Twitter))
                ) && 
                (
                    this.Discord == input.Discord ||
                    (this.Discord != null &&
                    this.Discord.Equals(input.Discord))
                ) && 
                (
                    this.Tiktok == input.Tiktok ||
                    (this.Tiktok != null &&
                    this.Tiktok.Equals(input.Tiktok))
                ) && 
                (
                    this.Reddit == input.Reddit ||
                    (this.Reddit != null &&
                    this.Reddit.Equals(input.Reddit))
                ) && 
                (
                    this.Signal == input.Signal ||
                    (this.Signal != null &&
                    this.Signal.Equals(input.Signal))
                ) && 
                (
                    this.Hash == input.Hash ||
                    (this.Hash != null &&
                    this.Hash.Equals(input.Hash))
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
                if (this.Youtube != null)
                    hashCode = hashCode * 59 + this.Youtube.GetHashCode();
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
                if (this.Spotify != null)
                    hashCode = hashCode * 59 + this.Spotify.GetHashCode();
                if (this.Facebook != null)
                    hashCode = hashCode * 59 + this.Facebook.GetHashCode();
                if (this.Tumblr != null)
                    hashCode = hashCode * 59 + this.Tumblr.GetHashCode();
                if (this.Telegram != null)
                    hashCode = hashCode * 59 + this.Telegram.GetHashCode();
                if (this.Pinterest != null)
                    hashCode = hashCode * 59 + this.Pinterest.GetHashCode();
                if (this.Instagram != null)
                    hashCode = hashCode * 59 + this.Instagram.GetHashCode();
                if (this.Medium != null)
                    hashCode = hashCode * 59 + this.Medium.GetHashCode();
                if (this.Soundcloud != null)
                    hashCode = hashCode * 59 + this.Soundcloud.GetHashCode();
                if (this.Snapchat != null)
                    hashCode = hashCode * 59 + this.Snapchat.GetHashCode();
                if (this.Apple != null)
                    hashCode = hashCode * 59 + this.Apple.GetHashCode();
                if (this.Twitter != null)
                    hashCode = hashCode * 59 + this.Twitter.GetHashCode();
                if (this.Discord != null)
                    hashCode = hashCode * 59 + this.Discord.GetHashCode();
                if (this.Tiktok != null)
                    hashCode = hashCode * 59 + this.Tiktok.GetHashCode();
                if (this.Reddit != null)
                    hashCode = hashCode * 59 + this.Reddit.GetHashCode();
                if (this.Signal != null)
                    hashCode = hashCode * 59 + this.Signal.GetHashCode();
                if (this.Hash != null)
                    hashCode = hashCode * 59 + this.Hash.GetHashCode();
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
