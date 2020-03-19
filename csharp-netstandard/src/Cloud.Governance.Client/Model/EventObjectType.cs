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
    /// None&#x3D;0, CreateSiteCollection&#x3D;1, CreateSubSite&#x3D;2, &lt;/br&gt;SCLifeCycleManagement&#x3D;3, SCProvisionPolicy&#x3D;4, UserProfileServiceSetting&#x3D;8, &lt;/br&gt;AccountManager&#x3D;9, EmailTemplates&#x3D;10, ExportLocation&#x3D;11, &lt;/br&gt;DepartmentSetting&#x3D;12, Login&#x3D;13, Logout&#x3D;14, &lt;/br&gt;Request&#x3D;15, Task&#x3D;16, ManageExistingSCAndSS&#x3D;17, &lt;/br&gt;ManageServiceRequestMetadata&#x3D;18, WFAdminNotificationSettings&#x3D;19, SharePointPermissionLevelManagement&#x3D;20, &lt;/br&gt;ManualArchiveSiteCollectionContent&#x3D;21, CloneUserPermissions&#x3D;22, SiteCollectionLifecycleAction&#x3D;23, &lt;/br&gt;GrantUserPermission&#x3D;24, RemoveUserPermission&#x3D;25, ChangeSiteCollectionMetadata&#x3D;26, &lt;/br&gt;ChangeSiteCollectionContact&#x3D;27, ContentManager&#x3D;28, SiteLifecycleAction&#x3D;29, &lt;/br&gt;ChangeSubSiteMetadata&#x3D;30, ChangeSubSiteContact&#x3D;31, MaintenanceSetting&#x3D;32, &lt;/br&gt;Questionaire&#x3D;33, Recertification&#x3D;34, CreateList&#x3D;41, &lt;/br&gt;ChangeList&#x3D;42, MySite&#x3D;43, CategoryManagement&#x3D;44, &lt;/br&gt;ElectionContact&#x3D;45, ElectProcessManagement&#x3D;46, TaskReminderManagement&#x3D;47, &lt;/br&gt;AutoLockingProfile&#x3D;48, CustomService&#x3D;49, AppBrandingManagement&#x3D;50, &lt;/br&gt;CustomEmailSetting&#x3D;51, BusinessUserFeaturesSetting&#x3D;52, PermissionManagement&#x3D;53, &lt;/br&gt;CreateUser&#x3D;110, ChangeUser&#x3D;111, UserLifecycle&#x3D;112, &lt;/br&gt;CreateGroup&#x3D;120, ChangeGroup&#x3D;121, GroupLifecycle&#x3D;122, &lt;/br&gt;UserPolicy&#x3D;135, GroupPolicy&#x3D;136, DelayedEmailSetting&#x3D;137, &lt;/br&gt;BlockedEmail&#x3D;138, SiteInfoCardSetting&#x3D;139, CloudGovernancePanelSetting&#x3D;140, &lt;/br&gt;ApplySiteInformation&#x3D;141, ApplyGroupInformation&#x3D;142, QuickRequestSetting&#x3D;143, &lt;/br&gt;NewsAndUpdates&#x3D;144, CustomNeedHelpLinkk&#x3D;145, AutoExportReportSetting&#x3D;146, &lt;/br&gt;WorkflowDefinition&#x3D;147, BulkUpdate&#x3D;148
    /// </summary>
    /// <value>None&#x3D;0, CreateSiteCollection&#x3D;1, CreateSubSite&#x3D;2, &lt;/br&gt;SCLifeCycleManagement&#x3D;3, SCProvisionPolicy&#x3D;4, UserProfileServiceSetting&#x3D;8, &lt;/br&gt;AccountManager&#x3D;9, EmailTemplates&#x3D;10, ExportLocation&#x3D;11, &lt;/br&gt;DepartmentSetting&#x3D;12, Login&#x3D;13, Logout&#x3D;14, &lt;/br&gt;Request&#x3D;15, Task&#x3D;16, ManageExistingSCAndSS&#x3D;17, &lt;/br&gt;ManageServiceRequestMetadata&#x3D;18, WFAdminNotificationSettings&#x3D;19, SharePointPermissionLevelManagement&#x3D;20, &lt;/br&gt;ManualArchiveSiteCollectionContent&#x3D;21, CloneUserPermissions&#x3D;22, SiteCollectionLifecycleAction&#x3D;23, &lt;/br&gt;GrantUserPermission&#x3D;24, RemoveUserPermission&#x3D;25, ChangeSiteCollectionMetadata&#x3D;26, &lt;/br&gt;ChangeSiteCollectionContact&#x3D;27, ContentManager&#x3D;28, SiteLifecycleAction&#x3D;29, &lt;/br&gt;ChangeSubSiteMetadata&#x3D;30, ChangeSubSiteContact&#x3D;31, MaintenanceSetting&#x3D;32, &lt;/br&gt;Questionaire&#x3D;33, Recertification&#x3D;34, CreateList&#x3D;41, &lt;/br&gt;ChangeList&#x3D;42, MySite&#x3D;43, CategoryManagement&#x3D;44, &lt;/br&gt;ElectionContact&#x3D;45, ElectProcessManagement&#x3D;46, TaskReminderManagement&#x3D;47, &lt;/br&gt;AutoLockingProfile&#x3D;48, CustomService&#x3D;49, AppBrandingManagement&#x3D;50, &lt;/br&gt;CustomEmailSetting&#x3D;51, BusinessUserFeaturesSetting&#x3D;52, PermissionManagement&#x3D;53, &lt;/br&gt;CreateUser&#x3D;110, ChangeUser&#x3D;111, UserLifecycle&#x3D;112, &lt;/br&gt;CreateGroup&#x3D;120, ChangeGroup&#x3D;121, GroupLifecycle&#x3D;122, &lt;/br&gt;UserPolicy&#x3D;135, GroupPolicy&#x3D;136, DelayedEmailSetting&#x3D;137, &lt;/br&gt;BlockedEmail&#x3D;138, SiteInfoCardSetting&#x3D;139, CloudGovernancePanelSetting&#x3D;140, &lt;/br&gt;ApplySiteInformation&#x3D;141, ApplyGroupInformation&#x3D;142, QuickRequestSetting&#x3D;143, &lt;/br&gt;NewsAndUpdates&#x3D;144, CustomNeedHelpLinkk&#x3D;145, AutoExportReportSetting&#x3D;146, &lt;/br&gt;WorkflowDefinition&#x3D;147, BulkUpdate&#x3D;148</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum EventObjectType
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,

        /// <summary>
        /// Enum CreateSiteCollection for value: CreateSiteCollection
        /// </summary>
        [EnumMember(Value = "CreateSiteCollection")]
        CreateSiteCollection = 2,

        /// <summary>
        /// Enum CreateSubSite for value: CreateSubSite
        /// </summary>
        [EnumMember(Value = "CreateSubSite")]
        CreateSubSite = 3,

        /// <summary>
        /// Enum SCLifeCycleManagement for value: SCLifeCycleManagement
        /// </summary>
        [EnumMember(Value = "SCLifeCycleManagement")]
        SCLifeCycleManagement = 4,

        /// <summary>
        /// Enum SCProvisionPolicy for value: SCProvisionPolicy
        /// </summary>
        [EnumMember(Value = "SCProvisionPolicy")]
        SCProvisionPolicy = 5,

        /// <summary>
        /// Enum UserProfileServiceSetting for value: UserProfileServiceSetting
        /// </summary>
        [EnumMember(Value = "UserProfileServiceSetting")]
        UserProfileServiceSetting = 6,

        /// <summary>
        /// Enum AccountManager for value: AccountManager
        /// </summary>
        [EnumMember(Value = "AccountManager")]
        AccountManager = 7,

        /// <summary>
        /// Enum EmailTemplates for value: EmailTemplates
        /// </summary>
        [EnumMember(Value = "EmailTemplates")]
        EmailTemplates = 8,

        /// <summary>
        /// Enum ExportLocation for value: ExportLocation
        /// </summary>
        [EnumMember(Value = "ExportLocation")]
        ExportLocation = 9,

        /// <summary>
        /// Enum DepartmentSetting for value: DepartmentSetting
        /// </summary>
        [EnumMember(Value = "DepartmentSetting")]
        DepartmentSetting = 10,

        /// <summary>
        /// Enum Login for value: Login
        /// </summary>
        [EnumMember(Value = "Login")]
        Login = 11,

        /// <summary>
        /// Enum Logout for value: Logout
        /// </summary>
        [EnumMember(Value = "Logout")]
        Logout = 12,

        /// <summary>
        /// Enum Request for value: Request
        /// </summary>
        [EnumMember(Value = "Request")]
        Request = 13,

        /// <summary>
        /// Enum Task for value: Task
        /// </summary>
        [EnumMember(Value = "Task")]
        Task = 14,

        /// <summary>
        /// Enum ManageExistingSCAndSS for value: ManageExistingSCAndSS
        /// </summary>
        [EnumMember(Value = "ManageExistingSCAndSS")]
        ManageExistingSCAndSS = 15,

        /// <summary>
        /// Enum ManageServiceRequestMetadata for value: ManageServiceRequestMetadata
        /// </summary>
        [EnumMember(Value = "ManageServiceRequestMetadata")]
        ManageServiceRequestMetadata = 16,

        /// <summary>
        /// Enum WFAdminNotificationSettings for value: WFAdminNotificationSettings
        /// </summary>
        [EnumMember(Value = "WFAdminNotificationSettings")]
        WFAdminNotificationSettings = 17,

        /// <summary>
        /// Enum SharePointPermissionLevelManagement for value: SharePointPermissionLevelManagement
        /// </summary>
        [EnumMember(Value = "SharePointPermissionLevelManagement")]
        SharePointPermissionLevelManagement = 18,

        /// <summary>
        /// Enum ManualArchiveSiteCollectionContent for value: ManualArchiveSiteCollectionContent
        /// </summary>
        [EnumMember(Value = "ManualArchiveSiteCollectionContent")]
        ManualArchiveSiteCollectionContent = 19,

        /// <summary>
        /// Enum CloneUserPermissions for value: CloneUserPermissions
        /// </summary>
        [EnumMember(Value = "CloneUserPermissions")]
        CloneUserPermissions = 20,

        /// <summary>
        /// Enum SiteCollectionLifecycleAction for value: SiteCollectionLifecycleAction
        /// </summary>
        [EnumMember(Value = "SiteCollectionLifecycleAction")]
        SiteCollectionLifecycleAction = 21,

        /// <summary>
        /// Enum GrantUserPermission for value: GrantUserPermission
        /// </summary>
        [EnumMember(Value = "GrantUserPermission")]
        GrantUserPermission = 22,

        /// <summary>
        /// Enum RemoveUserPermission for value: RemoveUserPermission
        /// </summary>
        [EnumMember(Value = "RemoveUserPermission")]
        RemoveUserPermission = 23,

        /// <summary>
        /// Enum ChangeSiteCollectionMetadata for value: ChangeSiteCollectionMetadata
        /// </summary>
        [EnumMember(Value = "ChangeSiteCollectionMetadata")]
        ChangeSiteCollectionMetadata = 24,

        /// <summary>
        /// Enum ChangeSiteCollectionContact for value: ChangeSiteCollectionContact
        /// </summary>
        [EnumMember(Value = "ChangeSiteCollectionContact")]
        ChangeSiteCollectionContact = 25,

        /// <summary>
        /// Enum ContentManager for value: ContentManager
        /// </summary>
        [EnumMember(Value = "ContentManager")]
        ContentManager = 26,

        /// <summary>
        /// Enum SiteLifecycleAction for value: SiteLifecycleAction
        /// </summary>
        [EnumMember(Value = "SiteLifecycleAction")]
        SiteLifecycleAction = 27,

        /// <summary>
        /// Enum ChangeSubSiteMetadata for value: ChangeSubSiteMetadata
        /// </summary>
        [EnumMember(Value = "ChangeSubSiteMetadata")]
        ChangeSubSiteMetadata = 28,

        /// <summary>
        /// Enum ChangeSubSiteContact for value: ChangeSubSiteContact
        /// </summary>
        [EnumMember(Value = "ChangeSubSiteContact")]
        ChangeSubSiteContact = 29,

        /// <summary>
        /// Enum MaintenanceSetting for value: MaintenanceSetting
        /// </summary>
        [EnumMember(Value = "MaintenanceSetting")]
        MaintenanceSetting = 30,

        /// <summary>
        /// Enum Questionaire for value: Questionaire
        /// </summary>
        [EnumMember(Value = "Questionaire")]
        Questionaire = 31,

        /// <summary>
        /// Enum Recertification for value: Recertification
        /// </summary>
        [EnumMember(Value = "Recertification")]
        Recertification = 32,

        /// <summary>
        /// Enum CreateList for value: CreateList
        /// </summary>
        [EnumMember(Value = "CreateList")]
        CreateList = 33,

        /// <summary>
        /// Enum ChangeList for value: ChangeList
        /// </summary>
        [EnumMember(Value = "ChangeList")]
        ChangeList = 34,

        /// <summary>
        /// Enum MySite for value: MySite
        /// </summary>
        [EnumMember(Value = "MySite")]
        MySite = 35,

        /// <summary>
        /// Enum CategoryManagement for value: CategoryManagement
        /// </summary>
        [EnumMember(Value = "CategoryManagement")]
        CategoryManagement = 36,

        /// <summary>
        /// Enum ElectionContact for value: ElectionContact
        /// </summary>
        [EnumMember(Value = "ElectionContact")]
        ElectionContact = 37,

        /// <summary>
        /// Enum ElectProcessManagement for value: ElectProcessManagement
        /// </summary>
        [EnumMember(Value = "ElectProcessManagement")]
        ElectProcessManagement = 38,

        /// <summary>
        /// Enum TaskReminderManagement for value: TaskReminderManagement
        /// </summary>
        [EnumMember(Value = "TaskReminderManagement")]
        TaskReminderManagement = 39,

        /// <summary>
        /// Enum AutoLockingProfile for value: AutoLockingProfile
        /// </summary>
        [EnumMember(Value = "AutoLockingProfile")]
        AutoLockingProfile = 40,

        /// <summary>
        /// Enum CustomService for value: CustomService
        /// </summary>
        [EnumMember(Value = "CustomService")]
        CustomService = 41,

        /// <summary>
        /// Enum AppBrandingManagement for value: AppBrandingManagement
        /// </summary>
        [EnumMember(Value = "AppBrandingManagement")]
        AppBrandingManagement = 42,

        /// <summary>
        /// Enum CustomEmailSetting for value: CustomEmailSetting
        /// </summary>
        [EnumMember(Value = "CustomEmailSetting")]
        CustomEmailSetting = 43,

        /// <summary>
        /// Enum BusinessUserFeaturesSetting for value: BusinessUserFeaturesSetting
        /// </summary>
        [EnumMember(Value = "BusinessUserFeaturesSetting")]
        BusinessUserFeaturesSetting = 44,

        /// <summary>
        /// Enum PermissionManagement for value: PermissionManagement
        /// </summary>
        [EnumMember(Value = "PermissionManagement")]
        PermissionManagement = 45,

        /// <summary>
        /// Enum CreateUser for value: CreateUser
        /// </summary>
        [EnumMember(Value = "CreateUser")]
        CreateUser = 46,

        /// <summary>
        /// Enum ChangeUser for value: ChangeUser
        /// </summary>
        [EnumMember(Value = "ChangeUser")]
        ChangeUser = 47,

        /// <summary>
        /// Enum UserLifecycle for value: UserLifecycle
        /// </summary>
        [EnumMember(Value = "UserLifecycle")]
        UserLifecycle = 48,

        /// <summary>
        /// Enum CreateGroup for value: CreateGroup
        /// </summary>
        [EnumMember(Value = "CreateGroup")]
        CreateGroup = 49,

        /// <summary>
        /// Enum ChangeGroup for value: ChangeGroup
        /// </summary>
        [EnumMember(Value = "ChangeGroup")]
        ChangeGroup = 50,

        /// <summary>
        /// Enum GroupLifecycle for value: GroupLifecycle
        /// </summary>
        [EnumMember(Value = "GroupLifecycle")]
        GroupLifecycle = 51,

        /// <summary>
        /// Enum UserPolicy for value: UserPolicy
        /// </summary>
        [EnumMember(Value = "UserPolicy")]
        UserPolicy = 52,

        /// <summary>
        /// Enum GroupPolicy for value: GroupPolicy
        /// </summary>
        [EnumMember(Value = "GroupPolicy")]
        GroupPolicy = 53,

        /// <summary>
        /// Enum DelayedEmailSetting for value: DelayedEmailSetting
        /// </summary>
        [EnumMember(Value = "DelayedEmailSetting")]
        DelayedEmailSetting = 54,

        /// <summary>
        /// Enum BlockedEmail for value: BlockedEmail
        /// </summary>
        [EnumMember(Value = "BlockedEmail")]
        BlockedEmail = 55,

        /// <summary>
        /// Enum SiteInfoCardSetting for value: SiteInfoCardSetting
        /// </summary>
        [EnumMember(Value = "SiteInfoCardSetting")]
        SiteInfoCardSetting = 56,

        /// <summary>
        /// Enum CloudGovernancePanelSetting for value: CloudGovernancePanelSetting
        /// </summary>
        [EnumMember(Value = "CloudGovernancePanelSetting")]
        CloudGovernancePanelSetting = 57,

        /// <summary>
        /// Enum ApplySiteInformation for value: ApplySiteInformation
        /// </summary>
        [EnumMember(Value = "ApplySiteInformation")]
        ApplySiteInformation = 58,

        /// <summary>
        /// Enum ApplyGroupInformation for value: ApplyGroupInformation
        /// </summary>
        [EnumMember(Value = "ApplyGroupInformation")]
        ApplyGroupInformation = 59,

        /// <summary>
        /// Enum QuickRequestSetting for value: QuickRequestSetting
        /// </summary>
        [EnumMember(Value = "QuickRequestSetting")]
        QuickRequestSetting = 60,

        /// <summary>
        /// Enum NewsAndUpdates for value: NewsAndUpdates
        /// </summary>
        [EnumMember(Value = "NewsAndUpdates")]
        NewsAndUpdates = 61,

        /// <summary>
        /// Enum CustomNeedHelpLinkk for value: CustomNeedHelpLinkk
        /// </summary>
        [EnumMember(Value = "CustomNeedHelpLinkk")]
        CustomNeedHelpLinkk = 62,

        /// <summary>
        /// Enum AutoExportReportSetting for value: AutoExportReportSetting
        /// </summary>
        [EnumMember(Value = "AutoExportReportSetting")]
        AutoExportReportSetting = 63,

        /// <summary>
        /// Enum WorkflowDefinition for value: WorkflowDefinition
        /// </summary>
        [EnumMember(Value = "WorkflowDefinition")]
        WorkflowDefinition = 64,

        /// <summary>
        /// Enum BulkUpdate for value: BulkUpdate
        /// </summary>
        [EnumMember(Value = "BulkUpdate")]
        BulkUpdate = 65

    }

}