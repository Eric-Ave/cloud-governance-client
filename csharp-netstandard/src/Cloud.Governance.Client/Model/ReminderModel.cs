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
    /// ReminderModel
    /// </summary>
    [DataContract]
    public partial class ReminderModel :  IEquatable<ReminderModel>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets IntervalType
        /// </summary>
        [DataMember(Name="intervalType", EmitDefaultValue=false)]
        public ReminderDurationType? IntervalType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ReminderModel" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="description">description.</param>
        /// <param name="emailTemplate">emailTemplate.</param>
        /// <param name="interval">interval.</param>
        /// <param name="intervalType">intervalType.</param>
        /// <param name="enableRecurrentReminder">enableRecurrentReminder.</param>
        /// <param name="recurrentInterval">recurrentInterval.</param>
        public ReminderModel(Guid id = default(Guid), string name = default(string), string description = default(string), Guid? emailTemplate = default(Guid?), int? interval = default(int?), ReminderDurationType intervalType = default(ReminderDurationType), bool enableRecurrentReminder = default(bool), int? recurrentInterval = default(int?))
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.EmailTemplate = emailTemplate;
            this.Interval = interval;
            this.IntervalType = intervalType;
            this.EnableRecurrentReminder = enableRecurrentReminder;
            this.RecurrentInterval = recurrentInterval;
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
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=true)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets EmailTemplate
        /// </summary>
        [DataMember(Name="emailTemplate", EmitDefaultValue=true)]
        public Guid? EmailTemplate { get; set; }

        /// <summary>
        /// Gets or Sets Interval
        /// </summary>
        [DataMember(Name="interval", EmitDefaultValue=true)]
        public int? Interval { get; set; }

        /// <summary>
        /// Gets or Sets EnableRecurrentReminder
        /// </summary>
        [DataMember(Name="enableRecurrentReminder", EmitDefaultValue=false)]
        public bool EnableRecurrentReminder { get; set; }

        /// <summary>
        /// Gets or Sets RecurrentInterval
        /// </summary>
        [DataMember(Name="recurrentInterval", EmitDefaultValue=true)]
        public int? RecurrentInterval { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ReminderModel {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  EmailTemplate: ").Append(EmailTemplate).Append("\n");
            sb.Append("  Interval: ").Append(Interval).Append("\n");
            sb.Append("  IntervalType: ").Append(IntervalType).Append("\n");
            sb.Append("  EnableRecurrentReminder: ").Append(EnableRecurrentReminder).Append("\n");
            sb.Append("  RecurrentInterval: ").Append(RecurrentInterval).Append("\n");
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
            return this.Equals(input as ReminderModel);
        }

        /// <summary>
        /// Returns true if ReminderModel instances are equal
        /// </summary>
        /// <param name="input">Instance of ReminderModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ReminderModel input)
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
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.EmailTemplate == input.EmailTemplate ||
                    (this.EmailTemplate != null &&
                    this.EmailTemplate.Equals(input.EmailTemplate))
                ) && 
                (
                    this.Interval == input.Interval ||
                    (this.Interval != null &&
                    this.Interval.Equals(input.Interval))
                ) && 
                (
                    this.IntervalType == input.IntervalType ||
                    this.IntervalType.Equals(input.IntervalType)
                ) && 
                (
                    this.EnableRecurrentReminder == input.EnableRecurrentReminder ||
                    this.EnableRecurrentReminder.Equals(input.EnableRecurrentReminder)
                ) && 
                (
                    this.RecurrentInterval == input.RecurrentInterval ||
                    (this.RecurrentInterval != null &&
                    this.RecurrentInterval.Equals(input.RecurrentInterval))
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
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.EmailTemplate != null)
                    hashCode = hashCode * 59 + this.EmailTemplate.GetHashCode();
                if (this.Interval != null)
                    hashCode = hashCode * 59 + this.Interval.GetHashCode();
                hashCode = hashCode * 59 + this.IntervalType.GetHashCode();
                hashCode = hashCode * 59 + this.EnableRecurrentReminder.GetHashCode();
                if (this.RecurrentInterval != null)
                    hashCode = hashCode * 59 + this.RecurrentInterval.GetHashCode();
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
