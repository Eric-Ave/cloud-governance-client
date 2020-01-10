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
using OpenAPIDateConverter = Cloud.Governance.NewSdk.Client.OpenAPIDateConverter;

namespace Cloud.Governance.NewSdk.Model
{
    /// <summary>
    /// Question
    /// </summary>
    [DataContract]
    public partial class Question :  IEquatable<Question>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public QuestionaireType? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Question" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="type">type.</param>
        /// <param name="content">content.</param>
        /// <param name="contentHtml">contentHtml.</param>
        /// <param name="values">values.</param>
        /// <param name="defaultValue">defaultValue.</param>
        /// <param name="termSettings">termSettings.</param>
        /// <param name="isMapToMetadata">isMapToMetadata.</param>
        /// <param name="referenceMetadata">referenceMetadata.</param>
        /// <param name="referenceMetadataName">referenceMetadataName.</param>
        public Question(Guid id = default(Guid), QuestionaireType type = default(QuestionaireType), string content = default(string), string contentHtml = default(string), List<string> values = default(List<string>), string defaultValue = default(string), TermsMetadataSettings termSettings = default(TermsMetadataSettings), bool isMapToMetadata = default(bool), string referenceMetadata = default(string), string referenceMetadataName = default(string))
        {
            this.Content = content;
            this.ContentHtml = contentHtml;
            this.Values = values;
            this.DefaultValue = defaultValue;
            this.ReferenceMetadata = referenceMetadata;
            this.ReferenceMetadataName = referenceMetadataName;
            this.Id = id;
            this.Type = type;
            this.Content = content;
            this.ContentHtml = contentHtml;
            this.Values = values;
            this.DefaultValue = defaultValue;
            this.TermSettings = termSettings;
            this.IsMapToMetadata = isMapToMetadata;
            this.ReferenceMetadata = referenceMetadata;
            this.ReferenceMetadataName = referenceMetadataName;
        }
        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets Content
        /// </summary>
        [DataMember(Name="content", EmitDefaultValue=true)]
        public string Content { get; set; }

        /// <summary>
        /// Gets or Sets ContentHtml
        /// </summary>
        [DataMember(Name="contentHtml", EmitDefaultValue=true)]
        public string ContentHtml { get; set; }

        /// <summary>
        /// Gets or Sets Values
        /// </summary>
        [DataMember(Name="values", EmitDefaultValue=true)]
        public List<string> Values { get; set; }

        /// <summary>
        /// Gets or Sets DefaultValue
        /// </summary>
        [DataMember(Name="defaultValue", EmitDefaultValue=true)]
        public string DefaultValue { get; set; }

        /// <summary>
        /// Gets or Sets TermSettings
        /// </summary>
        [DataMember(Name="termSettings", EmitDefaultValue=false)]
        public TermsMetadataSettings TermSettings { get; set; }

        /// <summary>
        /// Gets or Sets IsMapToMetadata
        /// </summary>
        [DataMember(Name="isMapToMetadata", EmitDefaultValue=false)]
        public bool IsMapToMetadata { get; set; }

        /// <summary>
        /// Gets or Sets ReferenceMetadata
        /// </summary>
        [DataMember(Name="referenceMetadata", EmitDefaultValue=true)]
        public string ReferenceMetadata { get; set; }

        /// <summary>
        /// Gets or Sets ReferenceMetadataName
        /// </summary>
        [DataMember(Name="referenceMetadataName", EmitDefaultValue=true)]
        public string ReferenceMetadataName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Question {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Content: ").Append(Content).Append("\n");
            sb.Append("  ContentHtml: ").Append(ContentHtml).Append("\n");
            sb.Append("  Values: ").Append(Values).Append("\n");
            sb.Append("  DefaultValue: ").Append(DefaultValue).Append("\n");
            sb.Append("  TermSettings: ").Append(TermSettings).Append("\n");
            sb.Append("  IsMapToMetadata: ").Append(IsMapToMetadata).Append("\n");
            sb.Append("  ReferenceMetadata: ").Append(ReferenceMetadata).Append("\n");
            sb.Append("  ReferenceMetadataName: ").Append(ReferenceMetadataName).Append("\n");
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
            return this.Equals(input as Question);
        }

        /// <summary>
        /// Returns true if Question instances are equal
        /// </summary>
        /// <param name="input">Instance of Question to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Question input)
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
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Content == input.Content ||
                    (this.Content != null &&
                    this.Content.Equals(input.Content))
                ) && 
                (
                    this.ContentHtml == input.ContentHtml ||
                    (this.ContentHtml != null &&
                    this.ContentHtml.Equals(input.ContentHtml))
                ) && 
                (
                    this.Values == input.Values ||
                    this.Values != null &&
                    input.Values != null &&
                    this.Values.SequenceEqual(input.Values)
                ) && 
                (
                    this.DefaultValue == input.DefaultValue ||
                    (this.DefaultValue != null &&
                    this.DefaultValue.Equals(input.DefaultValue))
                ) && 
                (
                    this.TermSettings == input.TermSettings ||
                    (this.TermSettings != null &&
                    this.TermSettings.Equals(input.TermSettings))
                ) && 
                (
                    this.IsMapToMetadata == input.IsMapToMetadata ||
                    this.IsMapToMetadata.Equals(input.IsMapToMetadata)
                ) && 
                (
                    this.ReferenceMetadata == input.ReferenceMetadata ||
                    (this.ReferenceMetadata != null &&
                    this.ReferenceMetadata.Equals(input.ReferenceMetadata))
                ) && 
                (
                    this.ReferenceMetadataName == input.ReferenceMetadataName ||
                    (this.ReferenceMetadataName != null &&
                    this.ReferenceMetadataName.Equals(input.ReferenceMetadataName))
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
                hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.Content != null)
                    hashCode = hashCode * 59 + this.Content.GetHashCode();
                if (this.ContentHtml != null)
                    hashCode = hashCode * 59 + this.ContentHtml.GetHashCode();
                if (this.Values != null)
                    hashCode = hashCode * 59 + this.Values.GetHashCode();
                if (this.DefaultValue != null)
                    hashCode = hashCode * 59 + this.DefaultValue.GetHashCode();
                if (this.TermSettings != null)
                    hashCode = hashCode * 59 + this.TermSettings.GetHashCode();
                hashCode = hashCode * 59 + this.IsMapToMetadata.GetHashCode();
                if (this.ReferenceMetadata != null)
                    hashCode = hashCode * 59 + this.ReferenceMetadata.GetHashCode();
                if (this.ReferenceMetadataName != null)
                    hashCode = hashCode * 59 + this.ReferenceMetadataName.GetHashCode();
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