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
    /// NoListTemplate&#x3D;0, GenericList&#x3D;100, DocumentLibrary&#x3D;101, &lt;/br&gt;Survey&#x3D;102, Links&#x3D;103, Announcements&#x3D;104, &lt;/br&gt;Contacts&#x3D;105, Events&#x3D;106, Tasks&#x3D;107, &lt;/br&gt;DiscussionBoard&#x3D;108, PictureLibrary&#x3D;109, DataSources&#x3D;110, &lt;/br&gt;WebTemplateCatalog&#x3D;111, UserInformation&#x3D;112, WebPartCatalog&#x3D;113, &lt;/br&gt;ListTemplateCatalog&#x3D;114, XMLForm&#x3D;115, MasterPageCatalog&#x3D;116, &lt;/br&gt;NoCodeWorkflows&#x3D;117, WorkflowProcess&#x3D;118, WebPageLibrary&#x3D;119, &lt;/br&gt;CustomGrid&#x3D;120, SolutionCatalog&#x3D;121, NoCodePublic&#x3D;122, &lt;/br&gt;ThemeCatalog&#x3D;123, DesignCatalog&#x3D;124, AppDataCatalog&#x3D;125, &lt;/br&gt;DataConnectionLibrary&#x3D;130, WorkflowHistory&#x3D;140, GanttTasks&#x3D;150, &lt;/br&gt;HelpLibrary&#x3D;151, AccessRequest&#x3D;160, TasksWithTimelineAndHierarchy&#x3D;171, &lt;/br&gt;MaintenanceLogs&#x3D;175, Meetings&#x3D;200, Agenda&#x3D;201, &lt;/br&gt;MeetingUser&#x3D;202, Decision&#x3D;204, MeetingObjective&#x3D;207, &lt;/br&gt;TextBox&#x3D;210, ThingsToBring&#x3D;211, HomePageLibrary&#x3D;212, &lt;/br&gt;Posts&#x3D;301, Comments&#x3D;302, Categories&#x3D;303, &lt;/br&gt;Facility&#x3D;402, Whereabouts&#x3D;403, CallTrack&#x3D;404, &lt;/br&gt;Circulation&#x3D;405, Timecard&#x3D;420, Holidays&#x3D;421, &lt;/br&gt;IMEDic&#x3D;499, ExternalList&#x3D;600, MySiteDocumentLibrary&#x3D;700, &lt;/br&gt;PagesLibrary&#x3D;850, IssueTracking&#x3D;1100, AdminTasks&#x3D;1200, &lt;/br&gt;HealthRules&#x3D;1220, HealthReports&#x3D;1221, DeveloperSiteDraftApps&#x3D;1230, &lt;/br&gt;InvalidType&#x3D;-1
    /// </summary>
    /// <value>NoListTemplate&#x3D;0, GenericList&#x3D;100, DocumentLibrary&#x3D;101, &lt;/br&gt;Survey&#x3D;102, Links&#x3D;103, Announcements&#x3D;104, &lt;/br&gt;Contacts&#x3D;105, Events&#x3D;106, Tasks&#x3D;107, &lt;/br&gt;DiscussionBoard&#x3D;108, PictureLibrary&#x3D;109, DataSources&#x3D;110, &lt;/br&gt;WebTemplateCatalog&#x3D;111, UserInformation&#x3D;112, WebPartCatalog&#x3D;113, &lt;/br&gt;ListTemplateCatalog&#x3D;114, XMLForm&#x3D;115, MasterPageCatalog&#x3D;116, &lt;/br&gt;NoCodeWorkflows&#x3D;117, WorkflowProcess&#x3D;118, WebPageLibrary&#x3D;119, &lt;/br&gt;CustomGrid&#x3D;120, SolutionCatalog&#x3D;121, NoCodePublic&#x3D;122, &lt;/br&gt;ThemeCatalog&#x3D;123, DesignCatalog&#x3D;124, AppDataCatalog&#x3D;125, &lt;/br&gt;DataConnectionLibrary&#x3D;130, WorkflowHistory&#x3D;140, GanttTasks&#x3D;150, &lt;/br&gt;HelpLibrary&#x3D;151, AccessRequest&#x3D;160, TasksWithTimelineAndHierarchy&#x3D;171, &lt;/br&gt;MaintenanceLogs&#x3D;175, Meetings&#x3D;200, Agenda&#x3D;201, &lt;/br&gt;MeetingUser&#x3D;202, Decision&#x3D;204, MeetingObjective&#x3D;207, &lt;/br&gt;TextBox&#x3D;210, ThingsToBring&#x3D;211, HomePageLibrary&#x3D;212, &lt;/br&gt;Posts&#x3D;301, Comments&#x3D;302, Categories&#x3D;303, &lt;/br&gt;Facility&#x3D;402, Whereabouts&#x3D;403, CallTrack&#x3D;404, &lt;/br&gt;Circulation&#x3D;405, Timecard&#x3D;420, Holidays&#x3D;421, &lt;/br&gt;IMEDic&#x3D;499, ExternalList&#x3D;600, MySiteDocumentLibrary&#x3D;700, &lt;/br&gt;PagesLibrary&#x3D;850, IssueTracking&#x3D;1100, AdminTasks&#x3D;1200, &lt;/br&gt;HealthRules&#x3D;1220, HealthReports&#x3D;1221, DeveloperSiteDraftApps&#x3D;1230, &lt;/br&gt;InvalidType&#x3D;-1</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum SPListTemplateType
    {
        /// <summary>
        /// Enum AccessRequest for value: AccessRequest
        /// </summary>
        [EnumMember(Value = "AccessRequest")]
        AccessRequest = 160,

        /// <summary>
        /// Enum AdminTasks for value: AdminTasks
        /// </summary>
        [EnumMember(Value = "AdminTasks")]
        AdminTasks = 1200,

        /// <summary>
        /// Enum Agenda for value: Agenda
        /// </summary>
        [EnumMember(Value = "Agenda")]
        Agenda = 201,

        /// <summary>
        /// Enum Announcements for value: Announcements
        /// </summary>
        [EnumMember(Value = "Announcements")]
        Announcements = 104,

        /// <summary>
        /// Enum AppDataCatalog for value: AppDataCatalog
        /// </summary>
        [EnumMember(Value = "AppDataCatalog")]
        AppDataCatalog = 125,

        /// <summary>
        /// Enum CallTrack for value: CallTrack
        /// </summary>
        [EnumMember(Value = "CallTrack")]
        CallTrack = 404,

        /// <summary>
        /// Enum Categories for value: Categories
        /// </summary>
        [EnumMember(Value = "Categories")]
        Categories = 303,

        /// <summary>
        /// Enum Circulation for value: Circulation
        /// </summary>
        [EnumMember(Value = "Circulation")]
        Circulation = 405,

        /// <summary>
        /// Enum Comments for value: Comments
        /// </summary>
        [EnumMember(Value = "Comments")]
        Comments = 302,

        /// <summary>
        /// Enum Contacts for value: Contacts
        /// </summary>
        [EnumMember(Value = "Contacts")]
        Contacts = 105,

        /// <summary>
        /// Enum CustomGrid for value: CustomGrid
        /// </summary>
        [EnumMember(Value = "CustomGrid")]
        CustomGrid = 120,

        /// <summary>
        /// Enum DataConnectionLibrary for value: DataConnectionLibrary
        /// </summary>
        [EnumMember(Value = "DataConnectionLibrary")]
        DataConnectionLibrary = 130,

        /// <summary>
        /// Enum DataSources for value: DataSources
        /// </summary>
        [EnumMember(Value = "DataSources")]
        DataSources = 110,

        /// <summary>
        /// Enum Decision for value: Decision
        /// </summary>
        [EnumMember(Value = "Decision")]
        Decision = 204,

        /// <summary>
        /// Enum DesignCatalog for value: DesignCatalog
        /// </summary>
        [EnumMember(Value = "DesignCatalog")]
        DesignCatalog = 124,

        /// <summary>
        /// Enum DeveloperSiteDraftApps for value: DeveloperSiteDraftApps
        /// </summary>
        [EnumMember(Value = "DeveloperSiteDraftApps")]
        DeveloperSiteDraftApps = 1230,

        /// <summary>
        /// Enum DiscussionBoard for value: DiscussionBoard
        /// </summary>
        [EnumMember(Value = "DiscussionBoard")]
        DiscussionBoard = 108,

        /// <summary>
        /// Enum DocumentLibrary for value: DocumentLibrary
        /// </summary>
        [EnumMember(Value = "DocumentLibrary")]
        DocumentLibrary = 101,

        /// <summary>
        /// Enum Events for value: Events
        /// </summary>
        [EnumMember(Value = "Events")]
        Events = 106,

        /// <summary>
        /// Enum ExternalList for value: ExternalList
        /// </summary>
        [EnumMember(Value = "ExternalList")]
        ExternalList = 600,

        /// <summary>
        /// Enum Facility for value: Facility
        /// </summary>
        [EnumMember(Value = "Facility")]
        Facility = 402,

        /// <summary>
        /// Enum GanttTasks for value: GanttTasks
        /// </summary>
        [EnumMember(Value = "GanttTasks")]
        GanttTasks = 150,

        /// <summary>
        /// Enum GenericList for value: GenericList
        /// </summary>
        [EnumMember(Value = "GenericList")]
        GenericList = 100,

        /// <summary>
        /// Enum HealthReports for value: HealthReports
        /// </summary>
        [EnumMember(Value = "HealthReports")]
        HealthReports = 1221,

        /// <summary>
        /// Enum HealthRules for value: HealthRules
        /// </summary>
        [EnumMember(Value = "HealthRules")]
        HealthRules = 1220,

        /// <summary>
        /// Enum HelpLibrary for value: HelpLibrary
        /// </summary>
        [EnumMember(Value = "HelpLibrary")]
        HelpLibrary = 151,

        /// <summary>
        /// Enum Holidays for value: Holidays
        /// </summary>
        [EnumMember(Value = "Holidays")]
        Holidays = 421,

        /// <summary>
        /// Enum HomePageLibrary for value: HomePageLibrary
        /// </summary>
        [EnumMember(Value = "HomePageLibrary")]
        HomePageLibrary = 212,

        /// <summary>
        /// Enum IMEDic for value: IMEDic
        /// </summary>
        [EnumMember(Value = "IMEDic")]
        IMEDic = 499,

        /// <summary>
        /// Enum InvalidType for value: InvalidType
        /// </summary>
        [EnumMember(Value = "InvalidType")]
        InvalidType = -1,

        /// <summary>
        /// Enum IssueTracking for value: IssueTracking
        /// </summary>
        [EnumMember(Value = "IssueTracking")]
        IssueTracking = 1100,

        /// <summary>
        /// Enum Links for value: Links
        /// </summary>
        [EnumMember(Value = "Links")]
        Links = 103,

        /// <summary>
        /// Enum ListTemplateCatalog for value: ListTemplateCatalog
        /// </summary>
        [EnumMember(Value = "ListTemplateCatalog")]
        ListTemplateCatalog = 114,

        /// <summary>
        /// Enum MaintenanceLogs for value: MaintenanceLogs
        /// </summary>
        [EnumMember(Value = "MaintenanceLogs")]
        MaintenanceLogs = 175,

        /// <summary>
        /// Enum MasterPageCatalog for value: MasterPageCatalog
        /// </summary>
        [EnumMember(Value = "MasterPageCatalog")]
        MasterPageCatalog = 116,

        /// <summary>
        /// Enum MeetingObjective for value: MeetingObjective
        /// </summary>
        [EnumMember(Value = "MeetingObjective")]
        MeetingObjective = 207,

        /// <summary>
        /// Enum Meetings for value: Meetings
        /// </summary>
        [EnumMember(Value = "Meetings")]
        Meetings = 200,

        /// <summary>
        /// Enum MeetingUser for value: MeetingUser
        /// </summary>
        [EnumMember(Value = "MeetingUser")]
        MeetingUser = 202,

        /// <summary>
        /// Enum MySiteDocumentLibrary for value: MySiteDocumentLibrary
        /// </summary>
        [EnumMember(Value = "MySiteDocumentLibrary")]
        MySiteDocumentLibrary = 700,

        /// <summary>
        /// Enum NoCodePublic for value: NoCodePublic
        /// </summary>
        [EnumMember(Value = "NoCodePublic")]
        NoCodePublic = 122,

        /// <summary>
        /// Enum NoCodeWorkflows for value: NoCodeWorkflows
        /// </summary>
        [EnumMember(Value = "NoCodeWorkflows")]
        NoCodeWorkflows = 117,

        /// <summary>
        /// Enum NoListTemplate for value: NoListTemplate
        /// </summary>
        [EnumMember(Value = "NoListTemplate")]
        NoListTemplate = 0,

        /// <summary>
        /// Enum PictureLibrary for value: PictureLibrary
        /// </summary>
        [EnumMember(Value = "PictureLibrary")]
        PictureLibrary = 109,

        /// <summary>
        /// Enum Posts for value: Posts
        /// </summary>
        [EnumMember(Value = "Posts")]
        Posts = 301,

        /// <summary>
        /// Enum SolutionCatalog for value: SolutionCatalog
        /// </summary>
        [EnumMember(Value = "SolutionCatalog")]
        SolutionCatalog = 121,

        /// <summary>
        /// Enum Survey for value: Survey
        /// </summary>
        [EnumMember(Value = "Survey")]
        Survey = 102,

        /// <summary>
        /// Enum Tasks for value: Tasks
        /// </summary>
        [EnumMember(Value = "Tasks")]
        Tasks = 107,

        /// <summary>
        /// Enum TasksWithTimelineAndHierarchy for value: TasksWithTimelineAndHierarchy
        /// </summary>
        [EnumMember(Value = "TasksWithTimelineAndHierarchy")]
        TasksWithTimelineAndHierarchy = 171,

        /// <summary>
        /// Enum TextBox for value: TextBox
        /// </summary>
        [EnumMember(Value = "TextBox")]
        TextBox = 210,

        /// <summary>
        /// Enum ThemeCatalog for value: ThemeCatalog
        /// </summary>
        [EnumMember(Value = "ThemeCatalog")]
        ThemeCatalog = 123,

        /// <summary>
        /// Enum ThingsToBring for value: ThingsToBring
        /// </summary>
        [EnumMember(Value = "ThingsToBring")]
        ThingsToBring = 211,

        /// <summary>
        /// Enum Timecard for value: Timecard
        /// </summary>
        [EnumMember(Value = "Timecard")]
        Timecard = 420,

        /// <summary>
        /// Enum UserInformation for value: UserInformation
        /// </summary>
        [EnumMember(Value = "UserInformation")]
        UserInformation = 112,

        /// <summary>
        /// Enum WebPageLibrary for value: WebPageLibrary
        /// </summary>
        [EnumMember(Value = "WebPageLibrary")]
        WebPageLibrary = 119,

        /// <summary>
        /// Enum WebPartCatalog for value: WebPartCatalog
        /// </summary>
        [EnumMember(Value = "WebPartCatalog")]
        WebPartCatalog = 113,

        /// <summary>
        /// Enum WebTemplateCatalog for value: WebTemplateCatalog
        /// </summary>
        [EnumMember(Value = "WebTemplateCatalog")]
        WebTemplateCatalog = 111,

        /// <summary>
        /// Enum Whereabouts for value: Whereabouts
        /// </summary>
        [EnumMember(Value = "Whereabouts")]
        Whereabouts = 403,

        /// <summary>
        /// Enum WorkflowHistory for value: WorkflowHistory
        /// </summary>
        [EnumMember(Value = "WorkflowHistory")]
        WorkflowHistory = 140,

        /// <summary>
        /// Enum WorkflowProcess for value: WorkflowProcess
        /// </summary>
        [EnumMember(Value = "WorkflowProcess")]
        WorkflowProcess = 118,

        /// <summary>
        /// Enum XMLForm for value: XMLForm
        /// </summary>
        [EnumMember(Value = "XMLForm")]
        XMLForm = 115,

        /// <summary>
        /// Enum PagesLibrary for value: PagesLibrary
        /// </summary>
        [EnumMember(Value = "PagesLibrary")]
        PagesLibrary = 850,

    }

}
