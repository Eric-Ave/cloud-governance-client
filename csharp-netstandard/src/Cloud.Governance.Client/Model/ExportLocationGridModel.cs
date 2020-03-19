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
    /// ExportLocationGridModel
    /// </summary>
    [DataContract]
    public partial class ExportLocationGridModel :  IEquatable<ExportLocationGridModel>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets StorageType
        /// </summary>
        [DataMember(Name="storageType", EmitDefaultValue=false)]
        public StorageType? StorageType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ExportLocationGridModel" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="description">description.</param>
        /// <param name="storageType">storageType.</param>
        /// <param name="modifiedTime">modifiedTime.</param>
        public ExportLocationGridModel(int id = default(int), string name = default(string), string description = default(string), StorageType storageType = default(StorageType), DateTime modifiedTime = default(DateTime))
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.StorageType = storageType;
            this.ModifiedTime = modifiedTime;
        }
        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=true)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets ModifiedTime
        /// </summary>
        [DataMember(Name="modifiedTime", EmitDefaultValue=false)]
        public DateTime ModifiedTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ExportLocationGridModel {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  StorageType: ").Append(StorageType).Append("\n");
            sb.Append("  ModifiedTime: ").Append(ModifiedTime).Append("\n");
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
            return this.Equals(input as ExportLocationGridModel);
        }

        /// <summary>
        /// Returns true if ExportLocationGridModel instances are equal
        /// </summary>
        /// <param name="input">Instance of ExportLocationGridModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ExportLocationGridModel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    this.Id.Equals(input.Id)
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.StorageType == input.StorageType ||
                    this.StorageType.Equals(input.StorageType)
                ) && 
                (
                    this.ModifiedTime == input.ModifiedTime ||
                    (this.ModifiedTime != null &&
                    this.ModifiedTime.Equals(input.ModifiedTime))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                hashCode = hashCode * 59 + this.StorageType.GetHashCode();
                if (this.ModifiedTime != null)
                    hashCode = hashCode * 59 + this.ModifiedTime.GetHashCode();
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