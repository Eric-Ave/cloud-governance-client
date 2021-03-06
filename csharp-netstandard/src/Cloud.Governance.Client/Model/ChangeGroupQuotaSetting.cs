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
    /// ChangeGroupQuotaSetting
    /// </summary>
    [DataContract]
    public partial class ChangeGroupQuotaSetting :  IEquatable<ChangeGroupQuotaSetting>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets ChangeOption
        /// </summary>
        [DataMember(Name="changeOption", EmitDefaultValue=false)]
        public ChangeQuotaType? ChangeOption { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ChangeGroupQuotaSetting" /> class.
        /// </summary>
        /// <param name="changeOption">changeOption.</param>
        /// <param name="maxValue">maxValue.</param>
        /// <param name="enabled">enabled.</param>
        /// <param name="approvalProcess">approvalProcess.</param>
        /// <param name="isUsedDefaultProcess">isUsedDefaultProcess.</param>
        public ChangeGroupQuotaSetting(ChangeQuotaType changeOption = default(ChangeQuotaType), int maxValue = default(int), bool enabled = default(bool), GuidModel approvalProcess = default(GuidModel), bool isUsedDefaultProcess = default(bool))
        {
            this.ChangeOption = changeOption;
            this.MaxValue = maxValue;
            this.Enabled = enabled;
            this.ApprovalProcess = approvalProcess;
            this.IsUsedDefaultProcess = isUsedDefaultProcess;
        }
        
        /// <summary>
        /// Gets or Sets MaxValue
        /// </summary>
        [DataMember(Name="maxValue", EmitDefaultValue=false)]
        public int MaxValue { get; set; }

        /// <summary>
        /// Gets or Sets Enabled
        /// </summary>
        [DataMember(Name="enabled", EmitDefaultValue=false)]
        public bool Enabled { get; set; }

        /// <summary>
        /// Gets or Sets ApprovalProcess
        /// </summary>
        [DataMember(Name="approvalProcess", EmitDefaultValue=true)]
        public GuidModel ApprovalProcess { get; set; }

        /// <summary>
        /// Gets or Sets IsUsedDefaultProcess
        /// </summary>
        [DataMember(Name="isUsedDefaultProcess", EmitDefaultValue=false)]
        public bool IsUsedDefaultProcess { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ChangeGroupQuotaSetting {\n");
            sb.Append("  ChangeOption: ").Append(ChangeOption).Append("\n");
            sb.Append("  MaxValue: ").Append(MaxValue).Append("\n");
            sb.Append("  Enabled: ").Append(Enabled).Append("\n");
            sb.Append("  ApprovalProcess: ").Append(ApprovalProcess).Append("\n");
            sb.Append("  IsUsedDefaultProcess: ").Append(IsUsedDefaultProcess).Append("\n");
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
            return this.Equals(input as ChangeGroupQuotaSetting);
        }

        /// <summary>
        /// Returns true if ChangeGroupQuotaSetting instances are equal
        /// </summary>
        /// <param name="input">Instance of ChangeGroupQuotaSetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ChangeGroupQuotaSetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ChangeOption == input.ChangeOption ||
                    this.ChangeOption.Equals(input.ChangeOption)
                ) && 
                (
                    this.MaxValue == input.MaxValue ||
                    this.MaxValue.Equals(input.MaxValue)
                ) && 
                (
                    this.Enabled == input.Enabled ||
                    this.Enabled.Equals(input.Enabled)
                ) && 
                (
                    this.ApprovalProcess == input.ApprovalProcess ||
                    (this.ApprovalProcess != null &&
                    this.ApprovalProcess.Equals(input.ApprovalProcess))
                ) && 
                (
                    this.IsUsedDefaultProcess == input.IsUsedDefaultProcess ||
                    this.IsUsedDefaultProcess.Equals(input.IsUsedDefaultProcess)
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
                hashCode = hashCode * 59 + this.ChangeOption.GetHashCode();
                hashCode = hashCode * 59 + this.MaxValue.GetHashCode();
                hashCode = hashCode * 59 + this.Enabled.GetHashCode();
                if (this.ApprovalProcess != null)
                    hashCode = hashCode * 59 + this.ApprovalProcess.GetHashCode();
                hashCode = hashCode * 59 + this.IsUsedDefaultProcess.GetHashCode();
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
