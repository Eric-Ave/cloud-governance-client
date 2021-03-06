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
    /// User&#x3D;0, Group&#x3D;1, UserInGroup&#x3D;2, &lt;/br&gt;PortalSupport&#x3D;3, ProductSupport&#x3D;4
    /// </summary>
    /// <value>User&#x3D;0, Group&#x3D;1, UserInGroup&#x3D;2, &lt;/br&gt;PortalSupport&#x3D;3, ProductSupport&#x3D;4</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum InviteType
    {
        /// <summary>
        /// Enum User for value: User
        /// </summary>
        [EnumMember(Value = "User")]
        User = 0,

        /// <summary>
        /// Enum Group for value: Group
        /// </summary>
        [EnumMember(Value = "Group")]
        Group = 1,

        /// <summary>
        /// Enum UserInGroup for value: UserInGroup
        /// </summary>
        [EnumMember(Value = "UserInGroup")]
        UserInGroup = 2,

        /// <summary>
        /// Enum PortalSupport for value: PortalSupport
        /// </summary>
        [EnumMember(Value = "PortalSupport")]
        PortalSupport = 3,

        /// <summary>
        /// Enum ProductSupport for value: ProductSupport
        /// </summary>
        [EnumMember(Value = "ProductSupport")]
        ProductSupport = 4,

    }

}
