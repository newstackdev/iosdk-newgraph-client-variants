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
    /// BcAccCreateRequest
    /// </summary>
    [DataContract]
    public partial class BcAccCreateRequest :  IEquatable<BcAccCreateRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BcAccCreateRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected BcAccCreateRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="BcAccCreateRequest" /> class.
        /// </summary>
        /// <param name="newaccPubActiveKey">newaccPubActiveKey (required).</param>
        /// <param name="newaccPubOwnerKey">newaccPubOwnerKey (required).</param>
        /// <param name="payerPrvKey">payerPrvKey (required).</param>
        /// <param name="xfer">xfer.</param>
        /// <param name="stakeCpu">stakeCpu.</param>
        /// <param name="newUser">newUser (required).</param>
        /// <param name="stakeRam">stakeRam.</param>
        /// <param name="payer">payer (required).</param>
        /// <param name="stakeNet">stakeNet.</param>
        public BcAccCreateRequest(string newaccPubActiveKey = default(string), string newaccPubOwnerKey = default(string), string payerPrvKey = default(string), bool? xfer = default(bool?), string stakeCpu = default(string), string newUser = default(string), decimal? stakeRam = default(decimal?), string payer = default(string), string stakeNet = default(string))
        {
            // to ensure "newaccPubActiveKey" is required (not null)
            if (newaccPubActiveKey == null)
            {
                throw new InvalidDataException("newaccPubActiveKey is a required property for BcAccCreateRequest and cannot be null");
            }
            else
            {
                this.NewaccPubActiveKey = newaccPubActiveKey;
            }
            // to ensure "newaccPubOwnerKey" is required (not null)
            if (newaccPubOwnerKey == null)
            {
                throw new InvalidDataException("newaccPubOwnerKey is a required property for BcAccCreateRequest and cannot be null");
            }
            else
            {
                this.NewaccPubOwnerKey = newaccPubOwnerKey;
            }
            // to ensure "payerPrvKey" is required (not null)
            if (payerPrvKey == null)
            {
                throw new InvalidDataException("payerPrvKey is a required property for BcAccCreateRequest and cannot be null");
            }
            else
            {
                this.PayerPrvKey = payerPrvKey;
            }
            // to ensure "newUser" is required (not null)
            if (newUser == null)
            {
                throw new InvalidDataException("newUser is a required property for BcAccCreateRequest and cannot be null");
            }
            else
            {
                this.NewUser = newUser;
            }
            // to ensure "payer" is required (not null)
            if (payer == null)
            {
                throw new InvalidDataException("payer is a required property for BcAccCreateRequest and cannot be null");
            }
            else
            {
                this.Payer = payer;
            }
            this.Xfer = xfer;
            this.StakeCpu = stakeCpu;
            this.StakeRam = stakeRam;
            this.StakeNet = stakeNet;
        }
        
        /// <summary>
        /// Gets or Sets NewaccPubActiveKey
        /// </summary>
        [DataMember(Name="newacc_pub_active_key", EmitDefaultValue=false)]
        public string NewaccPubActiveKey { get; set; }

        /// <summary>
        /// Gets or Sets NewaccPubOwnerKey
        /// </summary>
        [DataMember(Name="newacc_pub_owner_key", EmitDefaultValue=false)]
        public string NewaccPubOwnerKey { get; set; }

        /// <summary>
        /// Gets or Sets PayerPrvKey
        /// </summary>
        [DataMember(Name="payer_prv_key", EmitDefaultValue=false)]
        public string PayerPrvKey { get; set; }

        /// <summary>
        /// Gets or Sets Xfer
        /// </summary>
        [DataMember(Name="xfer", EmitDefaultValue=false)]
        public bool? Xfer { get; set; }

        /// <summary>
        /// Gets or Sets StakeCpu
        /// </summary>
        [DataMember(Name="stake_cpu", EmitDefaultValue=false)]
        public string StakeCpu { get; set; }

        /// <summary>
        /// Gets or Sets NewUser
        /// </summary>
        [DataMember(Name="newUser", EmitDefaultValue=false)]
        public string NewUser { get; set; }

        /// <summary>
        /// Gets or Sets StakeRam
        /// </summary>
        [DataMember(Name="stake_ram", EmitDefaultValue=false)]
        public decimal? StakeRam { get; set; }

        /// <summary>
        /// Gets or Sets Payer
        /// </summary>
        [DataMember(Name="payer", EmitDefaultValue=false)]
        public string Payer { get; set; }

        /// <summary>
        /// Gets or Sets StakeNet
        /// </summary>
        [DataMember(Name="stake_net", EmitDefaultValue=false)]
        public string StakeNet { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BcAccCreateRequest {\n");
            sb.Append("  NewaccPubActiveKey: ").Append(NewaccPubActiveKey).Append("\n");
            sb.Append("  NewaccPubOwnerKey: ").Append(NewaccPubOwnerKey).Append("\n");
            sb.Append("  PayerPrvKey: ").Append(PayerPrvKey).Append("\n");
            sb.Append("  Xfer: ").Append(Xfer).Append("\n");
            sb.Append("  StakeCpu: ").Append(StakeCpu).Append("\n");
            sb.Append("  NewUser: ").Append(NewUser).Append("\n");
            sb.Append("  StakeRam: ").Append(StakeRam).Append("\n");
            sb.Append("  Payer: ").Append(Payer).Append("\n");
            sb.Append("  StakeNet: ").Append(StakeNet).Append("\n");
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
            return this.Equals(input as BcAccCreateRequest);
        }

        /// <summary>
        /// Returns true if BcAccCreateRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of BcAccCreateRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BcAccCreateRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.NewaccPubActiveKey == input.NewaccPubActiveKey ||
                    (this.NewaccPubActiveKey != null &&
                    this.NewaccPubActiveKey.Equals(input.NewaccPubActiveKey))
                ) && 
                (
                    this.NewaccPubOwnerKey == input.NewaccPubOwnerKey ||
                    (this.NewaccPubOwnerKey != null &&
                    this.NewaccPubOwnerKey.Equals(input.NewaccPubOwnerKey))
                ) && 
                (
                    this.PayerPrvKey == input.PayerPrvKey ||
                    (this.PayerPrvKey != null &&
                    this.PayerPrvKey.Equals(input.PayerPrvKey))
                ) && 
                (
                    this.Xfer == input.Xfer ||
                    (this.Xfer != null &&
                    this.Xfer.Equals(input.Xfer))
                ) && 
                (
                    this.StakeCpu == input.StakeCpu ||
                    (this.StakeCpu != null &&
                    this.StakeCpu.Equals(input.StakeCpu))
                ) && 
                (
                    this.NewUser == input.NewUser ||
                    (this.NewUser != null &&
                    this.NewUser.Equals(input.NewUser))
                ) && 
                (
                    this.StakeRam == input.StakeRam ||
                    (this.StakeRam != null &&
                    this.StakeRam.Equals(input.StakeRam))
                ) && 
                (
                    this.Payer == input.Payer ||
                    (this.Payer != null &&
                    this.Payer.Equals(input.Payer))
                ) && 
                (
                    this.StakeNet == input.StakeNet ||
                    (this.StakeNet != null &&
                    this.StakeNet.Equals(input.StakeNet))
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
                if (this.NewaccPubActiveKey != null)
                    hashCode = hashCode * 59 + this.NewaccPubActiveKey.GetHashCode();
                if (this.NewaccPubOwnerKey != null)
                    hashCode = hashCode * 59 + this.NewaccPubOwnerKey.GetHashCode();
                if (this.PayerPrvKey != null)
                    hashCode = hashCode * 59 + this.PayerPrvKey.GetHashCode();
                if (this.Xfer != null)
                    hashCode = hashCode * 59 + this.Xfer.GetHashCode();
                if (this.StakeCpu != null)
                    hashCode = hashCode * 59 + this.StakeCpu.GetHashCode();
                if (this.NewUser != null)
                    hashCode = hashCode * 59 + this.NewUser.GetHashCode();
                if (this.StakeRam != null)
                    hashCode = hashCode * 59 + this.StakeRam.GetHashCode();
                if (this.Payer != null)
                    hashCode = hashCode * 59 + this.Payer.GetHashCode();
                if (this.StakeNet != null)
                    hashCode = hashCode * 59 + this.StakeNet.GetHashCode();
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
