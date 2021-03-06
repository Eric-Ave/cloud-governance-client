#
# Cloud Governance Api
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
# Version: 1.0
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

No description available.

.PARAMETER ScopeSettings
No description available.

.PARAMETER AdminCenterUrl
No description available.

.PARAMETER SiteLanguages
No description available.

.PARAMETER RootSiteAndManagedPaths
No description available.

.PARAMETER SiteUrlSetting
No description available.

.PARAMETER MultiGeoSetting
No description available.

.PARAMETER SiteTitleSetting
No description available.

.PARAMETER Policies
No description available.

.PARAMETER DeploymentManagerPlanSettings
No description available.

.PARAMETER PolicyIdsAndTemplates
No description available.

.PARAMETER TemplateIdsAndPermissions
No description available.

.PARAMETER PermissionSettings
No description available.

.PARAMETER LeasePeriodSettings
No description available.

.PARAMETER TimeZones
No description available.

.PARAMETER YammerGroupSettings
No description available.

.PARAMETER Classifications
No description available.

.PARAMETER HubSiteSettings
No description available.

.PARAMETER EnabledCustomTemplate
No description available.

.PARAMETER CustomSiteTemplateListURL
No description available.

.PARAMETER DefaultPrimaryAdmin
No description available.

.PARAMETER DefaultAdditionalAdmins
No description available.

.PARAMETER DefaultPrimaryAdminReal
No description available.

.PARAMETER DefaultAdditionalAdminsReal
No description available.

.PARAMETER DefaultPrimaryContact
No description available.

.PARAMETER DefaultSecondaryContact
No description available.

.PARAMETER DefaultSiteLanguage
No description available.

.PARAMETER DefaultRootSite
No description available.

.PARAMETER DefaultManagedPath
No description available.

.PARAMETER DefaultPolicy
No description available.

.PARAMETER DefaultTemplate
No description available.

.PARAMETER DefaultTimeZone
No description available.

.PARAMETER DefaultClassification
No description available.

.PARAMETER DefaultDesignType
No description available.

.PARAMETER SiteLanguageAssignBy
No description available.

.PARAMETER TemplateAssignBy
No description available.

.PARAMETER PolicyAssignBy
No description available.

.PARAMETER PermissionAssignBy
No description available.

.PARAMETER RootSiteAndManagedPathAssignBy
No description available.

.PARAMETER TimeZoneAssignBy
No description available.

.PARAMETER PrimaryAdminAssignBy
No description available.

.PARAMETER AdditionalAdminAssignBy
No description available.

.PARAMETER PrimaryContactAssignBy
No description available.

.PARAMETER SecondaryContactAssignBy
No description available.

.PARAMETER DesignTypeAssignBy
No description available.

.PARAMETER ClassificationAssignBy
No description available.

.PARAMETER HubSiteAssignBy
No description available.

.PARAMETER DepartmentAssignBy
No description available.

.PARAMETER Metadatas
No description available.

.PARAMETER HideRequestSummary
No description available.

.PARAMETER Id
No description available.

.PARAMETER Name
No description available.

.PARAMETER Description
No description available.

.PARAMETER Type
No description available.

.PARAMETER Department
No description available.

.PARAMETER LoadDepartmentFromUps
No description available.

.PARAMETER Departments
No description available.

.PARAMETER ServiceContact
No description available.

.PARAMETER ServiceAdminContact
No description available.

.PARAMETER ApproversContainManagerRole
No description available.

.PARAMETER Status
No description available.

.PARAMETER ShowServiceInCatalog
No description available.

.PARAMETER CustomActions
No description available.

.PARAMETER ApprovalProcessId
No description available.

.PARAMETER LanguageId
No description available.

.PARAMETER CategoryId
No description available.

.OUTPUTS

CreateSiteService<PSCustomObject>
#>

function New-CreateSiteService {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ScopeSettings},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${AdminCenterUrl},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${SiteLanguages},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${RootSiteAndManagedPaths},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${SiteUrlSetting},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${MultiGeoSetting},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${SiteTitleSetting},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Policies},
        [Parameter(Position = 8, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DeploymentManagerPlanSettings},
        [Parameter(Position = 9, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${PolicyIdsAndTemplates},
        [Parameter(Position = 10, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${TemplateIdsAndPermissions},
        [Parameter(Position = 11, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${PermissionSettings},
        [Parameter(Position = 12, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${LeasePeriodSettings},
        [Parameter(Position = 13, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${TimeZones},
        [Parameter(Position = 14, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${YammerGroupSettings},
        [Parameter(Position = 15, ValueFromPipelineByPropertyName = $true)]
        [String[]]
        ${Classifications},
        [Parameter(Position = 16, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${HubSiteSettings},
        [Parameter(Position = 17, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnabledCustomTemplate},
        [Parameter(Position = 18, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${CustomSiteTemplateListURL},
        [Parameter(Position = 19, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DefaultPrimaryAdmin},
        [Parameter(Position = 20, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${DefaultAdditionalAdmins},
        [Parameter(Position = 21, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DefaultPrimaryAdminReal},
        [Parameter(Position = 22, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${DefaultAdditionalAdminsReal},
        [Parameter(Position = 23, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DefaultPrimaryContact},
        [Parameter(Position = 24, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DefaultSecondaryContact},
        [Parameter(Position = 25, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${DefaultSiteLanguage},
        [Parameter(Position = 26, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DefaultRootSite},
        [Parameter(Position = 27, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DefaultManagedPath},
        [Parameter(Position = 28, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DefaultPolicy},
        [Parameter(Position = 29, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DefaultTemplate},
        [Parameter(Position = 30, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${DefaultTimeZone},
        [Parameter(Position = 31, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DefaultClassification},
        [Parameter(Position = 32, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DefaultDesignType},
        [Parameter(Position = 33, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${SiteLanguageAssignBy},
        [Parameter(Position = 34, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${TemplateAssignBy},
        [Parameter(Position = 35, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${PolicyAssignBy},
        [Parameter(Position = 36, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${PermissionAssignBy},
        [Parameter(Position = 37, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${RootSiteAndManagedPathAssignBy},
        [Parameter(Position = 38, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${TimeZoneAssignBy},
        [Parameter(Position = 39, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${PrimaryAdminAssignBy},
        [Parameter(Position = 40, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${AdditionalAdminAssignBy},
        [Parameter(Position = 41, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${PrimaryContactAssignBy},
        [Parameter(Position = 42, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${SecondaryContactAssignBy},
        [Parameter(Position = 43, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DesignTypeAssignBy},
        [Parameter(Position = 44, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ClassificationAssignBy},
        [Parameter(Position = 45, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${HubSiteAssignBy},
        [Parameter(Position = 46, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DepartmentAssignBy},
        [Parameter(Position = 47, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Metadatas},
        [Parameter(Position = 48, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${HideRequestSummary},
        [Parameter(Position = 49, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Id},
        [Parameter(Position = 50, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name},
        [Parameter(Position = 51, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Description},
        [Parameter(Position = 52, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Type},
        [Parameter(Position = 53, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Department},
        [Parameter(Position = 54, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${LoadDepartmentFromUps},
        [Parameter(Position = 55, ValueFromPipelineByPropertyName = $true)]
        [String[]]
        ${Departments},
        [Parameter(Position = 56, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ServiceContact},
        [Parameter(Position = 57, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ServiceAdminContact},
        [Parameter(Position = 58, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${ApproversContainManagerRole},
        [Parameter(Position = 59, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Status},
        [Parameter(Position = 60, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${ShowServiceInCatalog},
        [Parameter(Position = 61, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${CustomActions},
        [Parameter(Position = 62, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ApprovalProcessId},
        [Parameter(Position = 63, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${LanguageId},
        [Parameter(Position = 64, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${CategoryId}
    )

    Process {
        'Creating object: Cloud.Governance.Client => CreateSiteService' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "scopeSettings" = ${ScopeSettings}
            "adminCenterUrl" = ${AdminCenterUrl}
            "siteLanguages" = ${SiteLanguages}
            "rootSiteAndManagedPaths" = ${RootSiteAndManagedPaths}
            "siteUrlSetting" = ${SiteUrlSetting}
            "multiGeoSetting" = ${MultiGeoSetting}
            "siteTitleSetting" = ${SiteTitleSetting}
            "policies" = ${Policies}
            "deploymentManagerPlanSettings" = ${DeploymentManagerPlanSettings}
            "policyIdsAndTemplates" = ${PolicyIdsAndTemplates}
            "templateIdsAndPermissions" = ${TemplateIdsAndPermissions}
            "permissionSettings" = ${PermissionSettings}
            "leasePeriodSettings" = ${LeasePeriodSettings}
            "timeZones" = ${TimeZones}
            "yammerGroupSettings" = ${YammerGroupSettings}
            "classifications" = ${Classifications}
            "hubSiteSettings" = ${HubSiteSettings}
            "enabledCustomTemplate" = ${EnabledCustomTemplate}
            "customSiteTemplateListURL" = ${CustomSiteTemplateListURL}
            "defaultPrimaryAdmin" = ${DefaultPrimaryAdmin}
            "defaultAdditionalAdmins" = ${DefaultAdditionalAdmins}
            "defaultPrimaryAdminReal" = ${DefaultPrimaryAdminReal}
            "defaultAdditionalAdminsReal" = ${DefaultAdditionalAdminsReal}
            "defaultPrimaryContact" = ${DefaultPrimaryContact}
            "defaultSecondaryContact" = ${DefaultSecondaryContact}
            "defaultSiteLanguage" = ${DefaultSiteLanguage}
            "defaultRootSite" = ${DefaultRootSite}
            "defaultManagedPath" = ${DefaultManagedPath}
            "defaultPolicy" = ${DefaultPolicy}
            "defaultTemplate" = ${DefaultTemplate}
            "defaultTimeZone" = ${DefaultTimeZone}
            "defaultClassification" = ${DefaultClassification}
            "defaultDesignType" = ${DefaultDesignType}
            "siteLanguageAssignBy" = ${SiteLanguageAssignBy}
            "templateAssignBy" = ${TemplateAssignBy}
            "policyAssignBy" = ${PolicyAssignBy}
            "permissionAssignBy" = ${PermissionAssignBy}
            "rootSiteAndManagedPathAssignBy" = ${RootSiteAndManagedPathAssignBy}
            "timeZoneAssignBy" = ${TimeZoneAssignBy}
            "primaryAdminAssignBy" = ${PrimaryAdminAssignBy}
            "additionalAdminAssignBy" = ${AdditionalAdminAssignBy}
            "primaryContactAssignBy" = ${PrimaryContactAssignBy}
            "secondaryContactAssignBy" = ${SecondaryContactAssignBy}
            "designTypeAssignBy" = ${DesignTypeAssignBy}
            "classificationAssignBy" = ${ClassificationAssignBy}
            "hubSiteAssignBy" = ${HubSiteAssignBy}
            "departmentAssignBy" = ${DepartmentAssignBy}
            "metadatas" = ${Metadatas}
            "hideRequestSummary" = ${HideRequestSummary}
            "id" = ${Id}
            "name" = ${Name}
            "description" = ${Description}
            "type" = ${Type}
            "department" = ${Department}
            "loadDepartmentFromUps" = ${LoadDepartmentFromUps}
            "departments" = ${Departments}
            "serviceContact" = ${ServiceContact}
            "serviceAdminContact" = ${ServiceAdminContact}
            "approversContainManagerRole" = ${ApproversContainManagerRole}
            "status" = ${Status}
            "showServiceInCatalog" = ${ShowServiceInCatalog}
            "customActions" = ${CustomActions}
            "approvalProcessId" = ${ApprovalProcessId}
            "languageId" = ${LanguageId}
            "categoryId" = ${CategoryId}
        }

        return $PSO
    }
}
