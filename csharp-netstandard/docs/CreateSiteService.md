# Cloud.Governance.Client.Model.CreateSiteService
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScopeSettings** | [**ServiceScopeSettings**](ServiceScopeSettings.md) |  | [optional] 
**AdminCenterUrl** | **string** |  | [optional] 
**SiteLanguages** | [**List&lt;IntModel&gt;**](IntModel.md) |  | [optional] 
**RootSiteAndManagedPaths** | [**List&lt;RootSiteWithManagedPaths&gt;**](RootSiteWithManagedPaths.md) |  | [optional] 
**SiteUrlSetting** | [**SiteUrlSetting**](SiteUrlSetting.md) |  | [optional] 
**MultiGeoSetting** | [**MultiGeoSerivceSetting**](MultiGeoSerivceSetting.md) |  | [optional] 
**SiteTitleSetting** | [**SiteTitleSetting**](SiteTitleSetting.md) |  | [optional] 
**Policies** | [**List&lt;PolicyRef&gt;**](PolicyRef.md) |  | [optional] 
**DeploymentManagerPlanSettings** | [**DeploymentManagerPlanSettings**](DeploymentManagerPlanSettings.md) |  | [optional] 
**PolicyIdsAndTemplates** | [**List&lt;PolicyWithTemplates&gt;**](PolicyWithTemplates.md) |  | [optional] 
**TemplateIdsAndPermissions** | [**List&lt;TemplateWithPermissions&gt;**](TemplateWithPermissions.md) |  | [optional] 
**PermissionSettings** | [**PermissionSettings**](PermissionSettings.md) |  | [optional] 
**LeasePeriodSettings** | [**SiteLeasePeriodServiceSettings**](SiteLeasePeriodServiceSettings.md) |  | [optional] 
**TimeZones** | [**List&lt;IntModel&gt;**](IntModel.md) |  | [optional] 
**YammerGroupSettings** | [**YammerGroupServiceSettings**](YammerGroupServiceSettings.md) |  | [optional] 
**Classifications** | **List&lt;string&gt;** |  | [optional] 
**HubSiteSettings** | [**HubSiteSettings**](HubSiteSettings.md) |  | [optional] 
**EnabledCustomTemplate** | **bool** |  | [optional] 
**CustomSiteTemplateListURL** | **string** |  | [optional] 
**DefaultPrimaryAdmin** | [**ApiUser**](ApiUser.md) |  | [optional] 
**DefaultAdditionalAdmins** | [**List&lt;ApiUser&gt;**](ApiUser.md) |  | [optional] 
**DefaultPrimaryAdminReal** | [**ApiUser**](ApiUser.md) |  | [optional] 
**DefaultAdditionalAdminsReal** | [**List&lt;ApiUser&gt;**](ApiUser.md) |  | [optional] 
**DefaultPrimaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**DefaultSecondaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**DefaultSiteLanguage** | **int** |  | [optional] 
**DefaultRootSite** | **string** |  | [optional] 
**DefaultManagedPath** | **string** |  | [optional] 
**DefaultPolicy** | **Guid** |  | [optional] 
**DefaultTemplate** | **string** |  | [optional] 
**DefaultTimeZone** | **int** |  | [optional] 
**DefaultClassification** | **string** |  | [optional] 
**DefaultDesignType** | **string** |  | [optional] 
**SiteLanguageAssignBy** | **AssignBy** |  | [optional] 
**TemplateAssignBy** | **AssignBy** |  | [optional] 
**PolicyAssignBy** | **AssignBy** |  | [optional] 
**PermissionAssignBy** | **AssignBy** |  | [optional] 
**RootSiteAndManagedPathAssignBy** | **AssignBy** |  | [optional] 
**TimeZoneAssignBy** | **AssignBy** |  | [optional] 
**PrimaryAdminAssignBy** | **AssignBy** |  | [optional] 
**AdditionalAdminAssignBy** | **AssignBy** |  | [optional] 
**PrimaryContactAssignBy** | **AssignBy** |  | [optional] 
**SecondaryContactAssignBy** | **AssignBy** |  | [optional] 
**DesignTypeAssignBy** | **AssignBy** |  | [optional] 
**ClassificationAssignBy** | **AssignBy** |  | [optional] 
**HubSiteAssignBy** | **AssignBy** |  | [optional] 
**DepartmentAssignBy** | **AssignBy** |  | [optional] 
**Metadatas** | [**List&lt;CustomMetadata&gt;**](CustomMetadata.md) |  | [optional] 
**HideRequestSummary** | **bool** |  | [optional] 
**Id** | **Guid** |  | [optional] 
**Name** | **string** |  | [optional] 
**Description** | **string** |  | [optional] 
**Type** | **ServiceType** |  | [optional] 
**Department** | **string** |  | [optional] 
**LoadDepartmentFromUps** | **bool** |  | [optional] 
**Departments** | **List&lt;string&gt;** |  | [optional] 
**ServiceContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**ServiceAdminContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**ApproversContainManagerRole** | **bool** |  | [optional] 
**Status** | **CommonStatus** |  | [optional] 
**ShowServiceInCatalog** | **bool** |  | [optional] 
**CustomActions** | [**CustomActionSettings**](CustomActionSettings.md) |  | [optional] 
**ApprovalProcessId** | **Guid** |  | [optional] 
**LanguageId** | **int** |  | [optional] 
**CategoryId** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

