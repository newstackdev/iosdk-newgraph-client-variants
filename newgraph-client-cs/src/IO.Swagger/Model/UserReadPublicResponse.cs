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
    /// UserReadPublicResponse
    /// </summary>
    [DataContract]
    public partial class UserReadPublicResponse :  IEquatable<UserReadPublicResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserReadPublicResponse" /> class.
        /// </summary>
        /// <param name="newcoinTicker">newcoinTicker.</param>
        /// <param name="youtube">youtube.</param>
        /// <param name="powered">powered.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="newcoinAccTx">newcoinAccTx.</param>
        /// <param name="latitude">latitude.</param>
        /// <param name="description">description.</param>
        /// <param name="newcoinPoolId">newcoinPoolId.</param>
        /// <param name="tumblr">tumblr.</param>
        /// <param name="aspectRatio">aspectRatio.</param>
        /// <param name="instagram">instagram.</param>
        /// <param name="medium">medium.</param>
        /// <param name="newcoinActivePublicKey">newcoinActivePublicKey.</param>
        /// <param name="soundcloud">soundcloud.</param>
        /// <param name="newcoinPublicKey">newcoinPublicKey.</param>
        /// <param name="powering">powering.</param>
        /// <param name="snapchat">snapchat.</param>
        /// <param name="apple">apple.</param>
        /// <param name="twitter">twitter.</param>
        /// <param name="newcoinOwnerPublicKey">newcoinOwnerPublicKey.</param>
        /// <param name="tiktok">tiktok.</param>
        /// <param name="reddit">reddit.</param>
        /// <param name="youtubeId">youtubeId.</param>
        /// <param name="id">id.</param>
        /// <param name="newcoinPoolStake">newcoinPoolStake.</param>
        /// <param name="contentType">contentType.</param>
        /// <param name="signal">signal.</param>
        /// <param name="longitude">longitude.</param>
        /// <param name="newcoinPublisherPublicKey">newcoinPublisherPublicKey.</param>
        /// <param name="website">website.</param>
        /// <param name="created">created.</param>
        /// <param name="spotify">spotify.</param>
        /// <param name="facebook">facebook.</param>
        /// <param name="facebookId">facebookId.</param>
        /// <param name="fullName">fullName.</param>
        /// <param name="telegram">telegram.</param>
        /// <param name="pinterest">pinterest.</param>
        /// <param name="verifiedSocialIds">verifiedSocialIds.</param>
        /// <param name="newcoinPoolTx">newcoinPoolTx.</param>
        /// <param name="license">license.</param>
        /// <param name="contentUrl">contentUrl.</param>
        /// <param name="discord">discord.</param>
        /// <param name="blurHash">blurHash.</param>
        /// <param name="consentEmail">consentEmail.</param>
        /// <param name="updated">updated.</param>
        /// <param name="username">username.</param>
        public UserReadPublicResponse(string newcoinTicker = default(string), string youtube = default(string), decimal? powered = default(decimal?), string displayName = default(string), string newcoinAccTx = default(string), decimal? latitude = default(decimal?), string description = default(string), string newcoinPoolId = default(string), string tumblr = default(string), decimal? aspectRatio = default(decimal?), string instagram = default(string), string medium = default(string), string newcoinActivePublicKey = default(string), string soundcloud = default(string), string newcoinPublicKey = default(string), decimal? powering = default(decimal?), string snapchat = default(string), string apple = default(string), string twitter = default(string), string newcoinOwnerPublicKey = default(string), string tiktok = default(string), string reddit = default(string), string youtubeId = default(string), string id = default(string), decimal? newcoinPoolStake = default(decimal?), string contentType = default(string), string signal = default(string), decimal? longitude = default(decimal?), string newcoinPublisherPublicKey = default(string), string website = default(string), string created = default(string), string spotify = default(string), string facebook = default(string), string facebookId = default(string), string fullName = default(string), string telegram = default(string), string pinterest = default(string), List<string> verifiedSocialIds = default(List<string>), string newcoinPoolTx = default(string), string license = default(string), string contentUrl = default(string), string discord = default(string), string blurHash = default(string), string consentEmail = default(string), string updated = default(string), string username = default(string))
        {
            this.NewcoinTicker = newcoinTicker;
            this.Youtube = youtube;
            this.Powered = powered;
            this.DisplayName = displayName;
            this.NewcoinAccTx = newcoinAccTx;
            this.Latitude = latitude;
            this.Description = description;
            this.NewcoinPoolId = newcoinPoolId;
            this.Tumblr = tumblr;
            this.AspectRatio = aspectRatio;
            this.Instagram = instagram;
            this.Medium = medium;
            this.NewcoinActivePublicKey = newcoinActivePublicKey;
            this.Soundcloud = soundcloud;
            this.NewcoinPublicKey = newcoinPublicKey;
            this.Powering = powering;
            this.Snapchat = snapchat;
            this.Apple = apple;
            this.Twitter = twitter;
            this.NewcoinOwnerPublicKey = newcoinOwnerPublicKey;
            this.Tiktok = tiktok;
            this.Reddit = reddit;
            this.YoutubeId = youtubeId;
            this.Id = id;
            this.NewcoinPoolStake = newcoinPoolStake;
            this.ContentType = contentType;
            this.Signal = signal;
            this.Longitude = longitude;
            this.NewcoinPublisherPublicKey = newcoinPublisherPublicKey;
            this.Website = website;
            this.Created = created;
            this.Spotify = spotify;
            this.Facebook = facebook;
            this.FacebookId = facebookId;
            this.FullName = fullName;
            this.Telegram = telegram;
            this.Pinterest = pinterest;
            this.VerifiedSocialIds = verifiedSocialIds;
            this.NewcoinPoolTx = newcoinPoolTx;
            this.License = license;
            this.ContentUrl = contentUrl;
            this.Discord = discord;
            this.BlurHash = blurHash;
            this.ConsentEmail = consentEmail;
            this.Updated = updated;
            this.Username = username;
        }
        
        /// <summary>
        /// Gets or Sets NewcoinTicker
        /// </summary>
        [DataMember(Name="newcoinTicker", EmitDefaultValue=false)]
        public string NewcoinTicker { get; set; }

        /// <summary>
        /// Gets or Sets Youtube
        /// </summary>
        [DataMember(Name="youtube", EmitDefaultValue=false)]
        public string Youtube { get; set; }

        /// <summary>
        /// Gets or Sets Powered
        /// </summary>
        [DataMember(Name="powered", EmitDefaultValue=false)]
        public decimal? Powered { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name="displayName", EmitDefaultValue=false)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets NewcoinAccTx
        /// </summary>
        [DataMember(Name="newcoinAccTx", EmitDefaultValue=false)]
        public string NewcoinAccTx { get; set; }

        /// <summary>
        /// Gets or Sets Latitude
        /// </summary>
        [DataMember(Name="latitude", EmitDefaultValue=false)]
        public decimal? Latitude { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets NewcoinPoolId
        /// </summary>
        [DataMember(Name="newcoinPoolId", EmitDefaultValue=false)]
        public string NewcoinPoolId { get; set; }

        /// <summary>
        /// Gets or Sets Tumblr
        /// </summary>
        [DataMember(Name="tumblr", EmitDefaultValue=false)]
        public string Tumblr { get; set; }

        /// <summary>
        /// Gets or Sets AspectRatio
        /// </summary>
        [DataMember(Name="aspectRatio", EmitDefaultValue=false)]
        public decimal? AspectRatio { get; set; }

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
        /// Gets or Sets NewcoinActivePublicKey
        /// </summary>
        [DataMember(Name="newcoinActivePublicKey", EmitDefaultValue=false)]
        public string NewcoinActivePublicKey { get; set; }

        /// <summary>
        /// Gets or Sets Soundcloud
        /// </summary>
        [DataMember(Name="soundcloud", EmitDefaultValue=false)]
        public string Soundcloud { get; set; }

        /// <summary>
        /// Gets or Sets NewcoinPublicKey
        /// </summary>
        [DataMember(Name="newcoinPublicKey", EmitDefaultValue=false)]
        public string NewcoinPublicKey { get; set; }

        /// <summary>
        /// Gets or Sets Powering
        /// </summary>
        [DataMember(Name="powering", EmitDefaultValue=false)]
        public decimal? Powering { get; set; }

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
        /// Gets or Sets NewcoinOwnerPublicKey
        /// </summary>
        [DataMember(Name="newcoinOwnerPublicKey", EmitDefaultValue=false)]
        public string NewcoinOwnerPublicKey { get; set; }

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
        /// Gets or Sets YoutubeId
        /// </summary>
        [DataMember(Name="youtubeId", EmitDefaultValue=false)]
        public string YoutubeId { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets NewcoinPoolStake
        /// </summary>
        [DataMember(Name="newcoinPoolStake", EmitDefaultValue=false)]
        public decimal? NewcoinPoolStake { get; set; }

        /// <summary>
        /// Gets or Sets ContentType
        /// </summary>
        [DataMember(Name="contentType", EmitDefaultValue=false)]
        public string ContentType { get; set; }

        /// <summary>
        /// Gets or Sets Signal
        /// </summary>
        [DataMember(Name="signal", EmitDefaultValue=false)]
        public string Signal { get; set; }

        /// <summary>
        /// Gets or Sets Longitude
        /// </summary>
        [DataMember(Name="longitude", EmitDefaultValue=false)]
        public decimal? Longitude { get; set; }

        /// <summary>
        /// Gets or Sets NewcoinPublisherPublicKey
        /// </summary>
        [DataMember(Name="newcoinPublisherPublicKey", EmitDefaultValue=false)]
        public string NewcoinPublisherPublicKey { get; set; }

        /// <summary>
        /// Gets or Sets Website
        /// </summary>
        [DataMember(Name="website", EmitDefaultValue=false)]
        public string Website { get; set; }

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
        /// Gets or Sets FacebookId
        /// </summary>
        [DataMember(Name="facebookId", EmitDefaultValue=false)]
        public string FacebookId { get; set; }

        /// <summary>
        /// Gets or Sets FullName
        /// </summary>
        [DataMember(Name="fullName", EmitDefaultValue=false)]
        public string FullName { get; set; }

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
        /// Gets or Sets VerifiedSocialIds
        /// </summary>
        [DataMember(Name="verifiedSocialIds", EmitDefaultValue=false)]
        public List<string> VerifiedSocialIds { get; set; }

        /// <summary>
        /// Gets or Sets NewcoinPoolTx
        /// </summary>
        [DataMember(Name="newcoinPoolTx", EmitDefaultValue=false)]
        public string NewcoinPoolTx { get; set; }

        /// <summary>
        /// Gets or Sets License
        /// </summary>
        [DataMember(Name="license", EmitDefaultValue=false)]
        public string License { get; set; }

        /// <summary>
        /// Gets or Sets ContentUrl
        /// </summary>
        [DataMember(Name="contentUrl", EmitDefaultValue=false)]
        public string ContentUrl { get; set; }

        /// <summary>
        /// Gets or Sets Discord
        /// </summary>
        [DataMember(Name="discord", EmitDefaultValue=false)]
        public string Discord { get; set; }

        /// <summary>
        /// Gets or Sets BlurHash
        /// </summary>
        [DataMember(Name="blurHash", EmitDefaultValue=false)]
        public string BlurHash { get; set; }

        /// <summary>
        /// Gets or Sets ConsentEmail
        /// </summary>
        [DataMember(Name="consentEmail", EmitDefaultValue=false)]
        public string ConsentEmail { get; set; }

        /// <summary>
        /// Gets or Sets Updated
        /// </summary>
        [DataMember(Name="updated", EmitDefaultValue=false)]
        public string Updated { get; set; }

        /// <summary>
        /// Gets or Sets Username
        /// </summary>
        [DataMember(Name="username", EmitDefaultValue=false)]
        public string Username { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UserReadPublicResponse {\n");
            sb.Append("  NewcoinTicker: ").Append(NewcoinTicker).Append("\n");
            sb.Append("  Youtube: ").Append(Youtube).Append("\n");
            sb.Append("  Powered: ").Append(Powered).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  NewcoinAccTx: ").Append(NewcoinAccTx).Append("\n");
            sb.Append("  Latitude: ").Append(Latitude).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  NewcoinPoolId: ").Append(NewcoinPoolId).Append("\n");
            sb.Append("  Tumblr: ").Append(Tumblr).Append("\n");
            sb.Append("  AspectRatio: ").Append(AspectRatio).Append("\n");
            sb.Append("  Instagram: ").Append(Instagram).Append("\n");
            sb.Append("  Medium: ").Append(Medium).Append("\n");
            sb.Append("  NewcoinActivePublicKey: ").Append(NewcoinActivePublicKey).Append("\n");
            sb.Append("  Soundcloud: ").Append(Soundcloud).Append("\n");
            sb.Append("  NewcoinPublicKey: ").Append(NewcoinPublicKey).Append("\n");
            sb.Append("  Powering: ").Append(Powering).Append("\n");
            sb.Append("  Snapchat: ").Append(Snapchat).Append("\n");
            sb.Append("  Apple: ").Append(Apple).Append("\n");
            sb.Append("  Twitter: ").Append(Twitter).Append("\n");
            sb.Append("  NewcoinOwnerPublicKey: ").Append(NewcoinOwnerPublicKey).Append("\n");
            sb.Append("  Tiktok: ").Append(Tiktok).Append("\n");
            sb.Append("  Reddit: ").Append(Reddit).Append("\n");
            sb.Append("  YoutubeId: ").Append(YoutubeId).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  NewcoinPoolStake: ").Append(NewcoinPoolStake).Append("\n");
            sb.Append("  ContentType: ").Append(ContentType).Append("\n");
            sb.Append("  Signal: ").Append(Signal).Append("\n");
            sb.Append("  Longitude: ").Append(Longitude).Append("\n");
            sb.Append("  NewcoinPublisherPublicKey: ").Append(NewcoinPublisherPublicKey).Append("\n");
            sb.Append("  Website: ").Append(Website).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Spotify: ").Append(Spotify).Append("\n");
            sb.Append("  Facebook: ").Append(Facebook).Append("\n");
            sb.Append("  FacebookId: ").Append(FacebookId).Append("\n");
            sb.Append("  FullName: ").Append(FullName).Append("\n");
            sb.Append("  Telegram: ").Append(Telegram).Append("\n");
            sb.Append("  Pinterest: ").Append(Pinterest).Append("\n");
            sb.Append("  VerifiedSocialIds: ").Append(VerifiedSocialIds).Append("\n");
            sb.Append("  NewcoinPoolTx: ").Append(NewcoinPoolTx).Append("\n");
            sb.Append("  License: ").Append(License).Append("\n");
            sb.Append("  ContentUrl: ").Append(ContentUrl).Append("\n");
            sb.Append("  Discord: ").Append(Discord).Append("\n");
            sb.Append("  BlurHash: ").Append(BlurHash).Append("\n");
            sb.Append("  ConsentEmail: ").Append(ConsentEmail).Append("\n");
            sb.Append("  Updated: ").Append(Updated).Append("\n");
            sb.Append("  Username: ").Append(Username).Append("\n");
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
            return this.Equals(input as UserReadPublicResponse);
        }

        /// <summary>
        /// Returns true if UserReadPublicResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of UserReadPublicResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserReadPublicResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.NewcoinTicker == input.NewcoinTicker ||
                    (this.NewcoinTicker != null &&
                    this.NewcoinTicker.Equals(input.NewcoinTicker))
                ) && 
                (
                    this.Youtube == input.Youtube ||
                    (this.Youtube != null &&
                    this.Youtube.Equals(input.Youtube))
                ) && 
                (
                    this.Powered == input.Powered ||
                    (this.Powered != null &&
                    this.Powered.Equals(input.Powered))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.NewcoinAccTx == input.NewcoinAccTx ||
                    (this.NewcoinAccTx != null &&
                    this.NewcoinAccTx.Equals(input.NewcoinAccTx))
                ) && 
                (
                    this.Latitude == input.Latitude ||
                    (this.Latitude != null &&
                    this.Latitude.Equals(input.Latitude))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.NewcoinPoolId == input.NewcoinPoolId ||
                    (this.NewcoinPoolId != null &&
                    this.NewcoinPoolId.Equals(input.NewcoinPoolId))
                ) && 
                (
                    this.Tumblr == input.Tumblr ||
                    (this.Tumblr != null &&
                    this.Tumblr.Equals(input.Tumblr))
                ) && 
                (
                    this.AspectRatio == input.AspectRatio ||
                    (this.AspectRatio != null &&
                    this.AspectRatio.Equals(input.AspectRatio))
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
                    this.NewcoinActivePublicKey == input.NewcoinActivePublicKey ||
                    (this.NewcoinActivePublicKey != null &&
                    this.NewcoinActivePublicKey.Equals(input.NewcoinActivePublicKey))
                ) && 
                (
                    this.Soundcloud == input.Soundcloud ||
                    (this.Soundcloud != null &&
                    this.Soundcloud.Equals(input.Soundcloud))
                ) && 
                (
                    this.NewcoinPublicKey == input.NewcoinPublicKey ||
                    (this.NewcoinPublicKey != null &&
                    this.NewcoinPublicKey.Equals(input.NewcoinPublicKey))
                ) && 
                (
                    this.Powering == input.Powering ||
                    (this.Powering != null &&
                    this.Powering.Equals(input.Powering))
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
                    this.NewcoinOwnerPublicKey == input.NewcoinOwnerPublicKey ||
                    (this.NewcoinOwnerPublicKey != null &&
                    this.NewcoinOwnerPublicKey.Equals(input.NewcoinOwnerPublicKey))
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
                    this.YoutubeId == input.YoutubeId ||
                    (this.YoutubeId != null &&
                    this.YoutubeId.Equals(input.YoutubeId))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.NewcoinPoolStake == input.NewcoinPoolStake ||
                    (this.NewcoinPoolStake != null &&
                    this.NewcoinPoolStake.Equals(input.NewcoinPoolStake))
                ) && 
                (
                    this.ContentType == input.ContentType ||
                    (this.ContentType != null &&
                    this.ContentType.Equals(input.ContentType))
                ) && 
                (
                    this.Signal == input.Signal ||
                    (this.Signal != null &&
                    this.Signal.Equals(input.Signal))
                ) && 
                (
                    this.Longitude == input.Longitude ||
                    (this.Longitude != null &&
                    this.Longitude.Equals(input.Longitude))
                ) && 
                (
                    this.NewcoinPublisherPublicKey == input.NewcoinPublisherPublicKey ||
                    (this.NewcoinPublisherPublicKey != null &&
                    this.NewcoinPublisherPublicKey.Equals(input.NewcoinPublisherPublicKey))
                ) && 
                (
                    this.Website == input.Website ||
                    (this.Website != null &&
                    this.Website.Equals(input.Website))
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
                    this.FacebookId == input.FacebookId ||
                    (this.FacebookId != null &&
                    this.FacebookId.Equals(input.FacebookId))
                ) && 
                (
                    this.FullName == input.FullName ||
                    (this.FullName != null &&
                    this.FullName.Equals(input.FullName))
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
                    this.VerifiedSocialIds == input.VerifiedSocialIds ||
                    this.VerifiedSocialIds != null &&
                    this.VerifiedSocialIds.SequenceEqual(input.VerifiedSocialIds)
                ) && 
                (
                    this.NewcoinPoolTx == input.NewcoinPoolTx ||
                    (this.NewcoinPoolTx != null &&
                    this.NewcoinPoolTx.Equals(input.NewcoinPoolTx))
                ) && 
                (
                    this.License == input.License ||
                    (this.License != null &&
                    this.License.Equals(input.License))
                ) && 
                (
                    this.ContentUrl == input.ContentUrl ||
                    (this.ContentUrl != null &&
                    this.ContentUrl.Equals(input.ContentUrl))
                ) && 
                (
                    this.Discord == input.Discord ||
                    (this.Discord != null &&
                    this.Discord.Equals(input.Discord))
                ) && 
                (
                    this.BlurHash == input.BlurHash ||
                    (this.BlurHash != null &&
                    this.BlurHash.Equals(input.BlurHash))
                ) && 
                (
                    this.ConsentEmail == input.ConsentEmail ||
                    (this.ConsentEmail != null &&
                    this.ConsentEmail.Equals(input.ConsentEmail))
                ) && 
                (
                    this.Updated == input.Updated ||
                    (this.Updated != null &&
                    this.Updated.Equals(input.Updated))
                ) && 
                (
                    this.Username == input.Username ||
                    (this.Username != null &&
                    this.Username.Equals(input.Username))
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
                if (this.NewcoinTicker != null)
                    hashCode = hashCode * 59 + this.NewcoinTicker.GetHashCode();
                if (this.Youtube != null)
                    hashCode = hashCode * 59 + this.Youtube.GetHashCode();
                if (this.Powered != null)
                    hashCode = hashCode * 59 + this.Powered.GetHashCode();
                if (this.DisplayName != null)
                    hashCode = hashCode * 59 + this.DisplayName.GetHashCode();
                if (this.NewcoinAccTx != null)
                    hashCode = hashCode * 59 + this.NewcoinAccTx.GetHashCode();
                if (this.Latitude != null)
                    hashCode = hashCode * 59 + this.Latitude.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.NewcoinPoolId != null)
                    hashCode = hashCode * 59 + this.NewcoinPoolId.GetHashCode();
                if (this.Tumblr != null)
                    hashCode = hashCode * 59 + this.Tumblr.GetHashCode();
                if (this.AspectRatio != null)
                    hashCode = hashCode * 59 + this.AspectRatio.GetHashCode();
                if (this.Instagram != null)
                    hashCode = hashCode * 59 + this.Instagram.GetHashCode();
                if (this.Medium != null)
                    hashCode = hashCode * 59 + this.Medium.GetHashCode();
                if (this.NewcoinActivePublicKey != null)
                    hashCode = hashCode * 59 + this.NewcoinActivePublicKey.GetHashCode();
                if (this.Soundcloud != null)
                    hashCode = hashCode * 59 + this.Soundcloud.GetHashCode();
                if (this.NewcoinPublicKey != null)
                    hashCode = hashCode * 59 + this.NewcoinPublicKey.GetHashCode();
                if (this.Powering != null)
                    hashCode = hashCode * 59 + this.Powering.GetHashCode();
                if (this.Snapchat != null)
                    hashCode = hashCode * 59 + this.Snapchat.GetHashCode();
                if (this.Apple != null)
                    hashCode = hashCode * 59 + this.Apple.GetHashCode();
                if (this.Twitter != null)
                    hashCode = hashCode * 59 + this.Twitter.GetHashCode();
                if (this.NewcoinOwnerPublicKey != null)
                    hashCode = hashCode * 59 + this.NewcoinOwnerPublicKey.GetHashCode();
                if (this.Tiktok != null)
                    hashCode = hashCode * 59 + this.Tiktok.GetHashCode();
                if (this.Reddit != null)
                    hashCode = hashCode * 59 + this.Reddit.GetHashCode();
                if (this.YoutubeId != null)
                    hashCode = hashCode * 59 + this.YoutubeId.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.NewcoinPoolStake != null)
                    hashCode = hashCode * 59 + this.NewcoinPoolStake.GetHashCode();
                if (this.ContentType != null)
                    hashCode = hashCode * 59 + this.ContentType.GetHashCode();
                if (this.Signal != null)
                    hashCode = hashCode * 59 + this.Signal.GetHashCode();
                if (this.Longitude != null)
                    hashCode = hashCode * 59 + this.Longitude.GetHashCode();
                if (this.NewcoinPublisherPublicKey != null)
                    hashCode = hashCode * 59 + this.NewcoinPublisherPublicKey.GetHashCode();
                if (this.Website != null)
                    hashCode = hashCode * 59 + this.Website.GetHashCode();
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
                if (this.Spotify != null)
                    hashCode = hashCode * 59 + this.Spotify.GetHashCode();
                if (this.Facebook != null)
                    hashCode = hashCode * 59 + this.Facebook.GetHashCode();
                if (this.FacebookId != null)
                    hashCode = hashCode * 59 + this.FacebookId.GetHashCode();
                if (this.FullName != null)
                    hashCode = hashCode * 59 + this.FullName.GetHashCode();
                if (this.Telegram != null)
                    hashCode = hashCode * 59 + this.Telegram.GetHashCode();
                if (this.Pinterest != null)
                    hashCode = hashCode * 59 + this.Pinterest.GetHashCode();
                if (this.VerifiedSocialIds != null)
                    hashCode = hashCode * 59 + this.VerifiedSocialIds.GetHashCode();
                if (this.NewcoinPoolTx != null)
                    hashCode = hashCode * 59 + this.NewcoinPoolTx.GetHashCode();
                if (this.License != null)
                    hashCode = hashCode * 59 + this.License.GetHashCode();
                if (this.ContentUrl != null)
                    hashCode = hashCode * 59 + this.ContentUrl.GetHashCode();
                if (this.Discord != null)
                    hashCode = hashCode * 59 + this.Discord.GetHashCode();
                if (this.BlurHash != null)
                    hashCode = hashCode * 59 + this.BlurHash.GetHashCode();
                if (this.ConsentEmail != null)
                    hashCode = hashCode * 59 + this.ConsentEmail.GetHashCode();
                if (this.Updated != null)
                    hashCode = hashCode * 59 + this.Updated.GetHashCode();
                if (this.Username != null)
                    hashCode = hashCode * 59 + this.Username.GetHashCode();
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
