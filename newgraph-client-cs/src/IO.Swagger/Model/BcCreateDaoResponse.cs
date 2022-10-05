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
    /// BcCreateDaoResponse
    /// </summary>
    [DataContract]
    public partial class BcCreateDaoResponse :  IEquatable<BcCreateDaoResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BcCreateDaoResponse" /> class.
        /// </summary>
        /// <param name="txIDCreateDao">txIDCreateDao.</param>
        /// <param name="daoId">daoId.</param>
        public BcCreateDaoResponse(string txIDCreateDao = default(string), string daoId = default(string))
        {
            this.TxIDCreateDao = txIDCreateDao;
            this.DaoId = daoId;
        }
        
        /// <summary>
        /// Gets or Sets TxIDCreateDao
        /// </summary>
        [DataMember(Name="TxID_createDao", EmitDefaultValue=false)]
        public string TxIDCreateDao { get; set; }

        /// <summary>
        /// Gets or Sets DaoId
        /// </summary>
        [DataMember(Name="dao_id", EmitDefaultValue=false)]
        public string DaoId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BcCreateDaoResponse {\n");
            sb.Append("  TxIDCreateDao: ").Append(TxIDCreateDao).Append("\n");
            sb.Append("  DaoId: ").Append(DaoId).Append("\n");
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
            return this.Equals(input as BcCreateDaoResponse);
        }

        /// <summary>
        /// Returns true if BcCreateDaoResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of BcCreateDaoResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BcCreateDaoResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.TxIDCreateDao == input.TxIDCreateDao ||
                    (this.TxIDCreateDao != null &&
                    this.TxIDCreateDao.Equals(input.TxIDCreateDao))
                ) && 
                (
                    this.DaoId == input.DaoId ||
                    (this.DaoId != null &&
                    this.DaoId.Equals(input.DaoId))
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
                if (this.TxIDCreateDao != null)
                    hashCode = hashCode * 59 + this.TxIDCreateDao.GetHashCode();
                if (this.DaoId != null)
                    hashCode = hashCode * 59 + this.DaoId.GetHashCode();
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
