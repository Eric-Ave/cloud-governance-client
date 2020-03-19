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
    /// Recertification&#x3D;0, Renewal&#x3D;1
    /// </summary>
    /// <value>Recertification&#x3D;0, Renewal&#x3D;1</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum RecertificationType
    {
        /// <summary>
        /// Enum Recertification for value: Recertification
        /// </summary>
        [EnumMember(Value = "Recertification")]
        Recertification = 1,

        /// <summary>
        /// Enum Renewal for value: Renewal
        /// </summary>
        [EnumMember(Value = "Renewal")]
        Renewal = 2

    }

}