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
    /// DoNotMigrateTheItems&#x3D;0, OverwriteIdenticalItemsInDestination&#x3D;1, Append&#x3D;2, &lt;/br&gt;IgnoreDifferenceAndMoveItems&#x3D;3
    /// </summary>
    /// <value>DoNotMigrateTheItems&#x3D;0, OverwriteIdenticalItemsInDestination&#x3D;1, Append&#x3D;2, &lt;/br&gt;IgnoreDifferenceAndMoveItems&#x3D;3</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ItemConflictResolutionType
    {
        /// <summary>
        /// Enum DoNotMigrateTheItems for value: DoNotMigrateTheItems
        /// </summary>
        [EnumMember(Value = "DoNotMigrateTheItems")]
        DoNotMigrateTheItems = 0,

        /// <summary>
        /// Enum OverwriteIdenticalItemsInDestination for value: OverwriteIdenticalItemsInDestination
        /// </summary>
        [EnumMember(Value = "OverwriteIdenticalItemsInDestination")]
        OverwriteIdenticalItemsInDestination = 1,

        /// <summary>
        /// Enum Append for value: Append
        /// </summary>
        [EnumMember(Value = "Append")]
        Append = 2,

        /// <summary>
        /// Enum IgnoreDifferenceAndMoveItems for value: IgnoreDifferenceAndMoveItems
        /// </summary>
        [EnumMember(Value = "IgnoreDifferenceAndMoveItems")]
        IgnoreDifferenceAndMoveItems = 3,

    }

}
