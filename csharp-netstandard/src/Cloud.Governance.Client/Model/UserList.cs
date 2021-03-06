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
    /// UserList
    /// </summary>
    [DataContract]
    public partial class UserList :  IEquatable<UserList>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets AuthenticationType
        /// </summary>
        [DataMember(Name="authenticationType", EmitDefaultValue=false)]
        public AuthenticationType? AuthenticationType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UserList" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="loginName">loginName.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="email">email.</param>
        /// <param name="isDomainGroup">isDomainGroup.</param>
        /// <param name="authenticationType">authenticationType.</param>
        public UserList(int id = default(int), string loginName = default(string), string displayName = default(string), string email = default(string), bool isDomainGroup = default(bool), AuthenticationType authenticationType = default(AuthenticationType))
        {
            this.Id = id;
            this.LoginName = loginName;
            this.DisplayName = displayName;
            this.Email = email;
            this.IsDomainGroup = isDomainGroup;
            this.AuthenticationType = authenticationType;
        }
        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets LoginName
        /// </summary>
        [DataMember(Name="loginName", EmitDefaultValue=true)]
        public string LoginName { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name="displayName", EmitDefaultValue=true)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name="email", EmitDefaultValue=true)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets IsDomainGroup
        /// </summary>
        [DataMember(Name="isDomainGroup", EmitDefaultValue=false)]
        public bool IsDomainGroup { get; set; }

        /// <summary>
        /// Gets or Sets UserTypeDescription
        /// </summary>
        [DataMember(Name="userTypeDescription", EmitDefaultValue=true)]
        public string UserTypeDescription { get; private set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UserList {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LoginName: ").Append(LoginName).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  IsDomainGroup: ").Append(IsDomainGroup).Append("\n");
            sb.Append("  AuthenticationType: ").Append(AuthenticationType).Append("\n");
            sb.Append("  UserTypeDescription: ").Append(UserTypeDescription).Append("\n");
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
            return this.Equals(input as UserList);
        }

        /// <summary>
        /// Returns true if UserList instances are equal
        /// </summary>
        /// <param name="input">Instance of UserList to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserList input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    this.Id.Equals(input.Id)
                ) && 
                (
                    this.LoginName == input.LoginName ||
                    (this.LoginName != null &&
                    this.LoginName.Equals(input.LoginName))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.Email == input.Email ||
                    (this.Email != null &&
                    this.Email.Equals(input.Email))
                ) && 
                (
                    this.IsDomainGroup == input.IsDomainGroup ||
                    this.IsDomainGroup.Equals(input.IsDomainGroup)
                ) && 
                (
                    this.AuthenticationType == input.AuthenticationType ||
                    this.AuthenticationType.Equals(input.AuthenticationType)
                ) && 
                (
                    this.UserTypeDescription == input.UserTypeDescription ||
                    (this.UserTypeDescription != null &&
                    this.UserTypeDescription.Equals(input.UserTypeDescription))
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
                hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.LoginName != null)
                    hashCode = hashCode * 59 + this.LoginName.GetHashCode();
                if (this.DisplayName != null)
                    hashCode = hashCode * 59 + this.DisplayName.GetHashCode();
                if (this.Email != null)
                    hashCode = hashCode * 59 + this.Email.GetHashCode();
                hashCode = hashCode * 59 + this.IsDomainGroup.GetHashCode();
                hashCode = hashCode * 59 + this.AuthenticationType.GetHashCode();
                if (this.UserTypeDescription != null)
                    hashCode = hashCode * 59 + this.UserTypeDescription.GetHashCode();
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
