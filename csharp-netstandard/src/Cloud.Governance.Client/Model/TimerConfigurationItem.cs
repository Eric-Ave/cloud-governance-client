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
    /// TimerConfigurationItem
    /// </summary>
    [DataContract]
    public partial class TimerConfigurationItem :  IEquatable<TimerConfigurationItem>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets IntervalType
        /// </summary>
        [DataMember(Name="intervalType", EmitDefaultValue=false)]
        public DurationType? IntervalType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="TimerConfigurationItem" /> class.
        /// </summary>
        /// <param name="isEnabled">isEnabled.</param>
        /// <param name="interval">interval.</param>
        /// <param name="intervalType">intervalType.</param>
        public TimerConfigurationItem(bool isEnabled = default(bool), int interval = default(int), DurationType intervalType = default(DurationType))
        {
            this.IsEnabled = isEnabled;
            this.Interval = interval;
            this.IntervalType = intervalType;
        }
        
        /// <summary>
        /// Gets or Sets IsEnabled
        /// </summary>
        [DataMember(Name="isEnabled", EmitDefaultValue=false)]
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets or Sets Interval
        /// </summary>
        [DataMember(Name="interval", EmitDefaultValue=false)]
        public int Interval { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TimerConfigurationItem {\n");
            sb.Append("  IsEnabled: ").Append(IsEnabled).Append("\n");
            sb.Append("  Interval: ").Append(Interval).Append("\n");
            sb.Append("  IntervalType: ").Append(IntervalType).Append("\n");
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
            return this.Equals(input as TimerConfigurationItem);
        }

        /// <summary>
        /// Returns true if TimerConfigurationItem instances are equal
        /// </summary>
        /// <param name="input">Instance of TimerConfigurationItem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TimerConfigurationItem input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.IsEnabled == input.IsEnabled ||
                    this.IsEnabled.Equals(input.IsEnabled)
                ) && 
                (
                    this.Interval == input.Interval ||
                    this.Interval.Equals(input.Interval)
                ) && 
                (
                    this.IntervalType == input.IntervalType ||
                    this.IntervalType.Equals(input.IntervalType)
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
                hashCode = hashCode * 59 + this.IsEnabled.GetHashCode();
                hashCode = hashCode * 59 + this.Interval.GetHashCode();
                hashCode = hashCode * 59 + this.IntervalType.GetHashCode();
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
