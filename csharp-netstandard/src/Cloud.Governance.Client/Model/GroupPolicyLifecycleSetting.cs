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
    /// GroupPolicyLifecycleSetting
    /// </summary>
    [DataContract]
    public partial class GroupPolicyLifecycleSetting :  IEquatable<GroupPolicyLifecycleSetting>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GroupPolicyLifecycleSetting" /> class.
        /// </summary>
        /// <param name="defaultProcess">defaultProcess.</param>
        /// <param name="deletion">deletion.</param>
        /// <param name="extension">extension.</param>
        /// <param name="changePolicy">changePolicy.</param>
        /// <param name="quota">quota.</param>
        /// <param name="teamArchive">teamArchive.</param>
        /// <param name="teamUnArchive">teamUnArchive.</param>
        public GroupPolicyLifecycleSetting(GuidModel defaultProcess = default(GuidModel), DeleteGroupSetting deletion = default(DeleteGroupSetting), ExtendGroupSetting extension = default(ExtendGroupSetting), ChangeGroupSetting changePolicy = default(ChangeGroupSetting), ChangeGroupQuotaSetting quota = default(ChangeGroupQuotaSetting), GroupLifecycleSetting teamArchive = default(GroupLifecycleSetting), GroupLifecycleSetting teamUnArchive = default(GroupLifecycleSetting))
        {
            this.DefaultProcess = defaultProcess;
            this.Deletion = deletion;
            this.Extension = extension;
            this.ChangePolicy = changePolicy;
            this.Quota = quota;
            this.TeamArchive = teamArchive;
            this.TeamUnArchive = teamUnArchive;
        }
        
        /// <summary>
        /// Gets or Sets DefaultProcess
        /// </summary>
        [DataMember(Name="defaultProcess", EmitDefaultValue=true)]
        public GuidModel DefaultProcess { get; set; }

        /// <summary>
        /// Gets or Sets Deletion
        /// </summary>
        [DataMember(Name="deletion", EmitDefaultValue=true)]
        public DeleteGroupSetting Deletion { get; set; }

        /// <summary>
        /// Gets or Sets Extension
        /// </summary>
        [DataMember(Name="extension", EmitDefaultValue=true)]
        public ExtendGroupSetting Extension { get; set; }

        /// <summary>
        /// Gets or Sets ChangePolicy
        /// </summary>
        [DataMember(Name="changePolicy", EmitDefaultValue=true)]
        public ChangeGroupSetting ChangePolicy { get; set; }

        /// <summary>
        /// Gets or Sets Quota
        /// </summary>
        [DataMember(Name="quota", EmitDefaultValue=true)]
        public ChangeGroupQuotaSetting Quota { get; set; }

        /// <summary>
        /// Gets or Sets TeamArchive
        /// </summary>
        [DataMember(Name="teamArchive", EmitDefaultValue=true)]
        public GroupLifecycleSetting TeamArchive { get; set; }

        /// <summary>
        /// Gets or Sets TeamUnArchive
        /// </summary>
        [DataMember(Name="teamUnArchive", EmitDefaultValue=true)]
        public GroupLifecycleSetting TeamUnArchive { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GroupPolicyLifecycleSetting {\n");
            sb.Append("  DefaultProcess: ").Append(DefaultProcess).Append("\n");
            sb.Append("  Deletion: ").Append(Deletion).Append("\n");
            sb.Append("  Extension: ").Append(Extension).Append("\n");
            sb.Append("  ChangePolicy: ").Append(ChangePolicy).Append("\n");
            sb.Append("  Quota: ").Append(Quota).Append("\n");
            sb.Append("  TeamArchive: ").Append(TeamArchive).Append("\n");
            sb.Append("  TeamUnArchive: ").Append(TeamUnArchive).Append("\n");
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
            return this.Equals(input as GroupPolicyLifecycleSetting);
        }

        /// <summary>
        /// Returns true if GroupPolicyLifecycleSetting instances are equal
        /// </summary>
        /// <param name="input">Instance of GroupPolicyLifecycleSetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GroupPolicyLifecycleSetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DefaultProcess == input.DefaultProcess ||
                    (this.DefaultProcess != null &&
                    this.DefaultProcess.Equals(input.DefaultProcess))
                ) && 
                (
                    this.Deletion == input.Deletion ||
                    (this.Deletion != null &&
                    this.Deletion.Equals(input.Deletion))
                ) && 
                (
                    this.Extension == input.Extension ||
                    (this.Extension != null &&
                    this.Extension.Equals(input.Extension))
                ) && 
                (
                    this.ChangePolicy == input.ChangePolicy ||
                    (this.ChangePolicy != null &&
                    this.ChangePolicy.Equals(input.ChangePolicy))
                ) && 
                (
                    this.Quota == input.Quota ||
                    (this.Quota != null &&
                    this.Quota.Equals(input.Quota))
                ) && 
                (
                    this.TeamArchive == input.TeamArchive ||
                    (this.TeamArchive != null &&
                    this.TeamArchive.Equals(input.TeamArchive))
                ) && 
                (
                    this.TeamUnArchive == input.TeamUnArchive ||
                    (this.TeamUnArchive != null &&
                    this.TeamUnArchive.Equals(input.TeamUnArchive))
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
                if (this.DefaultProcess != null)
                    hashCode = hashCode * 59 + this.DefaultProcess.GetHashCode();
                if (this.Deletion != null)
                    hashCode = hashCode * 59 + this.Deletion.GetHashCode();
                if (this.Extension != null)
                    hashCode = hashCode * 59 + this.Extension.GetHashCode();
                if (this.ChangePolicy != null)
                    hashCode = hashCode * 59 + this.ChangePolicy.GetHashCode();
                if (this.Quota != null)
                    hashCode = hashCode * 59 + this.Quota.GetHashCode();
                if (this.TeamArchive != null)
                    hashCode = hashCode * 59 + this.TeamArchive.GetHashCode();
                if (this.TeamUnArchive != null)
                    hashCode = hashCode * 59 + this.TeamUnArchive.GetHashCode();
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