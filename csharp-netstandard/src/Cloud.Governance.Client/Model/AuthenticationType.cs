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
    /// LocalSystem&#x3D;0, WindowsIntegration&#x3D;1, ADIntegration&#x3D;2, &lt;/br&gt;ADFSIntegration&#x3D;3, Federation&#x3D;4, SharePointOnline&#x3D;6, &lt;/br&gt;SalesForce&#x3D;7, Yammer&#x3D;8, AzureAD&#x3D;9, &lt;/br&gt;Sandbox&#x3D;10, SharePoint&#x3D;11, Exchange&#x3D;12, &lt;/br&gt;
    /// </summary>
    /// <value>LocalSystem&#x3D;0, WindowsIntegration&#x3D;1, ADIntegration&#x3D;2, &lt;/br&gt;ADFSIntegration&#x3D;3, Federation&#x3D;4, SharePointOnline&#x3D;6, &lt;/br&gt;SalesForce&#x3D;7, Yammer&#x3D;8, AzureAD&#x3D;9, &lt;/br&gt;Sandbox&#x3D;10, SharePoint&#x3D;11, Exchange&#x3D;12, &lt;/br&gt;</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum AuthenticationType
    {
        /// <summary>
        /// Enum LocalSystem for value: LocalSystem
        /// </summary>
        [EnumMember(Value = "LocalSystem")]
        LocalSystem = 0,

        /// <summary>
        /// Enum WindowsIntegration for value: WindowsIntegration
        /// </summary>
        [EnumMember(Value = "WindowsIntegration")]
        WindowsIntegration = 1,

        /// <summary>
        /// Enum ADIntegration for value: ADIntegration
        /// </summary>
        [EnumMember(Value = "ADIntegration")]
        ADIntegration = 2,

        /// <summary>
        /// Enum ADFSIntegration for value: ADFSIntegration
        /// </summary>
        [EnumMember(Value = "ADFSIntegration")]
        ADFSIntegration = 3,

        /// <summary>
        /// Enum Federation for value: Federation
        /// </summary>
        [EnumMember(Value = "Federation")]
        Federation = 4,

        /// <summary>
        /// Enum SharePointOnline for value: SharePointOnline
        /// </summary>
        [EnumMember(Value = "SharePointOnline")]
        SharePointOnline = 6,

        /// <summary>
        /// Enum SalesForce for value: SalesForce
        /// </summary>
        [EnumMember(Value = "SalesForce")]
        SalesForce = 7,

        /// <summary>
        /// Enum Yammer for value: Yammer
        /// </summary>
        [EnumMember(Value = "Yammer")]
        Yammer = 8,

        /// <summary>
        /// Enum AzureAD for value: AzureAD
        /// </summary>
        [EnumMember(Value = "AzureAD")]
        AzureAD = 9,

        /// <summary>
        /// Enum Sandbox for value: Sandbox
        /// </summary>
        [EnumMember(Value = "Sandbox")]
        Sandbox = 10,

        /// <summary>
        /// Enum SharePoint for value: SharePoint
        /// </summary>
        [EnumMember(Value = "SharePoint")]
        SharePoint = 11,

        /// <summary>
        /// Enum Exchange for value: Exchange
        /// </summary>
        [EnumMember(Value = "Exchange")]
        Exchange = 12,

    }

}
