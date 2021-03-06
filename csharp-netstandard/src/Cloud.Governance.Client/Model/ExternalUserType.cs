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
    /// None&#x3D;0, Authentication&#x3D;1, NoAuthentication&#x3D;2, &lt;/br&gt;
    /// </summary>
    /// <value>None&#x3D;0, Authentication&#x3D;1, NoAuthentication&#x3D;2, &lt;/br&gt;</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ExternalUserType
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 0,

        /// <summary>
        /// Enum Authentication for value: Authentication
        /// </summary>
        [EnumMember(Value = "Authentication")]
        Authentication = 1,

        /// <summary>
        /// Enum NoAuthentication for value: NoAuthentication
        /// </summary>
        [EnumMember(Value = "NoAuthentication")]
        NoAuthentication = 2,

    }

}
