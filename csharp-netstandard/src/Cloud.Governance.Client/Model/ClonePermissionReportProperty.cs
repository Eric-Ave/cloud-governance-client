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
    /// ClonePermissionReportProperty
    /// </summary>
    [DataContract]
    public partial class ClonePermissionReportProperty :  IEquatable<ClonePermissionReportProperty>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClonePermissionReportProperty" /> class.
        /// </summary>
        /// <param name="taskTitle">taskTitle.</param>
        /// <param name="isAllowedReassign">isAllowedReassign.</param>
        /// <param name="reportGeneratedTime">reportGeneratedTime.</param>
        /// <param name="targetUser">targetUser.</param>
        public ClonePermissionReportProperty(string taskTitle = default(string), bool isAllowedReassign = default(bool), DateTime reportGeneratedTime = default(DateTime), ApiUser targetUser = default(ApiUser))
        {
            this.TaskTitle = taskTitle;
            this.IsAllowedReassign = isAllowedReassign;
            this.ReportGeneratedTime = reportGeneratedTime;
            this.TargetUser = targetUser;
        }
        
        /// <summary>
        /// Gets or Sets TaskTitle
        /// </summary>
        [DataMember(Name="taskTitle", EmitDefaultValue=true)]
        public string TaskTitle { get; set; }

        /// <summary>
        /// Gets or Sets IsAllowedReassign
        /// </summary>
        [DataMember(Name="isAllowedReassign", EmitDefaultValue=false)]
        public bool IsAllowedReassign { get; set; }

        /// <summary>
        /// Gets or Sets ReportGeneratedTime
        /// </summary>
        [DataMember(Name="reportGeneratedTime", EmitDefaultValue=false)]
        public DateTime ReportGeneratedTime { get; set; }

        /// <summary>
        /// Gets or Sets TargetUser
        /// </summary>
        [DataMember(Name="targetUser", EmitDefaultValue=true)]
        public ApiUser TargetUser { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ClonePermissionReportProperty {\n");
            sb.Append("  TaskTitle: ").Append(TaskTitle).Append("\n");
            sb.Append("  IsAllowedReassign: ").Append(IsAllowedReassign).Append("\n");
            sb.Append("  ReportGeneratedTime: ").Append(ReportGeneratedTime).Append("\n");
            sb.Append("  TargetUser: ").Append(TargetUser).Append("\n");
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
            return this.Equals(input as ClonePermissionReportProperty);
        }

        /// <summary>
        /// Returns true if ClonePermissionReportProperty instances are equal
        /// </summary>
        /// <param name="input">Instance of ClonePermissionReportProperty to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ClonePermissionReportProperty input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.TaskTitle == input.TaskTitle ||
                    (this.TaskTitle != null &&
                    this.TaskTitle.Equals(input.TaskTitle))
                ) && 
                (
                    this.IsAllowedReassign == input.IsAllowedReassign ||
                    this.IsAllowedReassign.Equals(input.IsAllowedReassign)
                ) && 
                (
                    this.ReportGeneratedTime == input.ReportGeneratedTime ||
                    (this.ReportGeneratedTime != null &&
                    this.ReportGeneratedTime.Equals(input.ReportGeneratedTime))
                ) && 
                (
                    this.TargetUser == input.TargetUser ||
                    (this.TargetUser != null &&
                    this.TargetUser.Equals(input.TargetUser))
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
                if (this.TaskTitle != null)
                    hashCode = hashCode * 59 + this.TaskTitle.GetHashCode();
                hashCode = hashCode * 59 + this.IsAllowedReassign.GetHashCode();
                if (this.ReportGeneratedTime != null)
                    hashCode = hashCode * 59 + this.ReportGeneratedTime.GetHashCode();
                if (this.TargetUser != null)
                    hashCode = hashCode * 59 + this.TargetUser.GetHashCode();
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
