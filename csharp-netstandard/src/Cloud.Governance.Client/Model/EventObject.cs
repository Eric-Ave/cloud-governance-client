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
    /// None&#x3D;0, ServiceDefinition&#x3D;1, PolicyDefinition&#x3D;2, &lt;/br&gt;WorkflowDefinition&#x3D;3, SystemSetting&#x3D;4, System&#x3D;5, &lt;/br&gt;Requests&#x3D;6, Tasks&#x3D;7, MySites&#x3D;8, &lt;/br&gt;MyTeamsAndGroups&#x3D;9
    /// </summary>
    /// <value>None&#x3D;0, ServiceDefinition&#x3D;1, PolicyDefinition&#x3D;2, &lt;/br&gt;WorkflowDefinition&#x3D;3, SystemSetting&#x3D;4, System&#x3D;5, &lt;/br&gt;Requests&#x3D;6, Tasks&#x3D;7, MySites&#x3D;8, &lt;/br&gt;MyTeamsAndGroups&#x3D;9</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum EventObject
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 0,

        /// <summary>
        /// Enum ServiceDefinition for value: ServiceDefinition
        /// </summary>
        [EnumMember(Value = "ServiceDefinition")]
        ServiceDefinition = 1,

        /// <summary>
        /// Enum PolicyDefinition for value: PolicyDefinition
        /// </summary>
        [EnumMember(Value = "PolicyDefinition")]
        PolicyDefinition = 2,

        /// <summary>
        /// Enum WorkflowDefinition for value: WorkflowDefinition
        /// </summary>
        [EnumMember(Value = "WorkflowDefinition")]
        WorkflowDefinition = 3,

        /// <summary>
        /// Enum SystemSetting for value: SystemSetting
        /// </summary>
        [EnumMember(Value = "SystemSetting")]
        SystemSetting = 4,

        /// <summary>
        /// Enum System for value: System
        /// </summary>
        [EnumMember(Value = "System")]
        System = 5,

        /// <summary>
        /// Enum Requests for value: Requests
        /// </summary>
        [EnumMember(Value = "Requests")]
        Requests = 6,

        /// <summary>
        /// Enum Tasks for value: Tasks
        /// </summary>
        [EnumMember(Value = "Tasks")]
        Tasks = 7,

        /// <summary>
        /// Enum MySites for value: MySites
        /// </summary>
        [EnumMember(Value = "MySites")]
        MySites = 8,

        /// <summary>
        /// Enum MyTeamsAndGroups for value: MyTeamsAndGroups
        /// </summary>
        [EnumMember(Value = "MyTeamsAndGroups")]
        MyTeamsAndGroups = 9,

    }

}
