/* 
 * Cloud Governance Api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
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
using OpenAPIDateConverter = Cloud.Governance.Client.Client.OpenAPIDateConverter;

namespace Cloud.Governance.Client.Model
{
    /// <summary>
    /// ApiSettingViewModel
    /// </summary>
    [DataContract]
    public partial class ApiSettingViewModel :  IEquatable<ApiSettingViewModel>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApiSettingViewModel" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="secret">secret.</param>
        /// <param name="secretDuration">secretDuration.</param>
        /// <param name="expiration">expiration.</param>
        /// <param name="apiEndpoint">apiEndpoint.</param>
        /// <param name="clientId">clientId.</param>
        public ApiSettingViewModel(Guid id = default(Guid), string name = default(string), string secret = default(string), string secretDuration = default(string), DateTime expiration = default(DateTime), string apiEndpoint = default(string), string clientId = default(string))
        {
            this.Id = id;
            this.Name = name;
            this.Secret = secret;
            this.SecretDuration = secretDuration;
            this.Expiration = expiration;
            this.ApiEndpoint = apiEndpoint;
            this.ClientId = clientId;
        }
        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Secret
        /// </summary>
        [DataMember(Name="secret", EmitDefaultValue=true)]
        public string Secret { get; set; }

        /// <summary>
        /// Gets or Sets SecretDuration
        /// </summary>
        [DataMember(Name="secretDuration", EmitDefaultValue=true)]
        public string SecretDuration { get; set; }

        /// <summary>
        /// Gets or Sets Expiration
        /// </summary>
        [DataMember(Name="expiration", EmitDefaultValue=false)]
        public DateTime Expiration { get; set; }

        /// <summary>
        /// Gets or Sets ApiEndpoint
        /// </summary>
        [DataMember(Name="apiEndpoint", EmitDefaultValue=true)]
        public string ApiEndpoint { get; set; }

        /// <summary>
        /// Gets or Sets ClientId
        /// </summary>
        [DataMember(Name="clientId", EmitDefaultValue=true)]
        public string ClientId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ApiSettingViewModel {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Secret: ").Append(Secret).Append("\n");
            sb.Append("  SecretDuration: ").Append(SecretDuration).Append("\n");
            sb.Append("  Expiration: ").Append(Expiration).Append("\n");
            sb.Append("  ApiEndpoint: ").Append(ApiEndpoint).Append("\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
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
            return this.Equals(input as ApiSettingViewModel);
        }

        /// <summary>
        /// Returns true if ApiSettingViewModel instances are equal
        /// </summary>
        /// <param name="input">Instance of ApiSettingViewModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ApiSettingViewModel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Secret == input.Secret ||
                    (this.Secret != null &&
                    this.Secret.Equals(input.Secret))
                ) && 
                (
                    this.SecretDuration == input.SecretDuration ||
                    (this.SecretDuration != null &&
                    this.SecretDuration.Equals(input.SecretDuration))
                ) && 
                (
                    this.Expiration == input.Expiration ||
                    (this.Expiration != null &&
                    this.Expiration.Equals(input.Expiration))
                ) && 
                (
                    this.ApiEndpoint == input.ApiEndpoint ||
                    (this.ApiEndpoint != null &&
                    this.ApiEndpoint.Equals(input.ApiEndpoint))
                ) && 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Secret != null)
                    hashCode = hashCode * 59 + this.Secret.GetHashCode();
                if (this.SecretDuration != null)
                    hashCode = hashCode * 59 + this.SecretDuration.GetHashCode();
                if (this.Expiration != null)
                    hashCode = hashCode * 59 + this.Expiration.GetHashCode();
                if (this.ApiEndpoint != null)
                    hashCode = hashCode * 59 + this.ApiEndpoint.GetHashCode();
                if (this.ClientId != null)
                    hashCode = hashCode * 59 + this.ClientId.GetHashCode();
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