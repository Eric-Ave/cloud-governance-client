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

.PARAMETER QuotaSetting
No description available.

.PARAMETER SharingSetting
No description available.

.PARAMETER IsDesignerEnabled
No description available.

.PARAMETER SiteMaxDepth
No description available.

.PARAMETER IconSetting
No description available.

.PARAMETER DaoSetting
No description available.

.PARAMETER LeasePeriodSetting
No description available.

.PARAMETER InactivitySetting
No description available.

.PARAMETER LifecycleSetting
No description available.

.PARAMETER RecertificationSetting
No description available.

.PARAMETER RenewalSetting
No description available.

.PARAMETER ElectionSetting
No description available.

.PARAMETER QuotaThresholdSetting
No description available.

.PARAMETER Id
No description available.

.PARAMETER Name
No description available.

.PARAMETER Description
No description available.

.PARAMETER Category
No description available.

.PARAMETER Detail
No description available.

.PARAMETER Type
No description available.

.PARAMETER FarmId
No description available.

.PARAMETER CreatedTime
No description available.

.PARAMETER CreatedBy
No description available.

.PARAMETER IsDeleted
No description available.

.PARAMETER ModifiedTime
No description available.

.PARAMETER ModifiedBy
No description available.

.PARAMETER Status
No description available.

.PARAMETER IsReferenced
No description available.

.OUTPUTS

SitePolicyInfo<PSCustomObject>
#>

function New-SitePolicyInfo {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${QuotaSetting},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${SharingSetting},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsDesignerEnabled},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${SiteMaxDepth},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${IconSetting},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DaoSetting},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${LeasePeriodSetting},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${InactivitySetting},
        [Parameter(Position = 8, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${LifecycleSetting},
        [Parameter(Position = 9, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${RecertificationSetting},
        [Parameter(Position = 10, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${RenewalSetting},
        [Parameter(Position = 11, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ElectionSetting},
        [Parameter(Position = 12, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${QuotaThresholdSetting},
        [Parameter(Position = 13, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Id},
        [Parameter(Position = 14, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name},
        [Parameter(Position = 15, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Description},
        [Parameter(Position = 16, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Category},
        [Parameter(Position = 17, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Detail},
        [Parameter(Position = 18, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Type},
        [Parameter(Position = 19, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${FarmId},
        [Parameter(Position = 20, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${CreatedTime},
        [Parameter(Position = 21, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${CreatedBy},
        [Parameter(Position = 22, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsDeleted},
        [Parameter(Position = 23, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${ModifiedTime},
        [Parameter(Position = 24, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ModifiedBy},
        [Parameter(Position = 25, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Status},
        [Parameter(Position = 26, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsReferenced}
    )

    Process {
        'Creating object: Cloud.Governance.Client => SitePolicyInfo' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "quotaSetting" = ${QuotaSetting}
            "sharingSetting" = ${SharingSetting}
            "isDesignerEnabled" = ${IsDesignerEnabled}
            "siteMaxDepth" = ${SiteMaxDepth}
            "iconSetting" = ${IconSetting}
            "daoSetting" = ${DaoSetting}
            "leasePeriodSetting" = ${LeasePeriodSetting}
            "inactivitySetting" = ${InactivitySetting}
            "lifecycleSetting" = ${LifecycleSetting}
            "recertificationSetting" = ${RecertificationSetting}
            "renewalSetting" = ${RenewalSetting}
            "electionSetting" = ${ElectionSetting}
            "quotaThresholdSetting" = ${QuotaThresholdSetting}
            "id" = ${Id}
            "name" = ${Name}
            "description" = ${Description}
            "category" = ${Category}
            "detail" = ${Detail}
            "type" = ${Type}
            "farmId" = ${FarmId}
            "createdTime" = ${CreatedTime}
            "createdBy" = ${CreatedBy}
            "isDeleted" = ${IsDeleted}
            "modifiedTime" = ${ModifiedTime}
            "modifiedBy" = ${ModifiedBy}
            "status" = ${Status}
            "isReferenced" = ${IsReferenced}
        }

        return $PSO
    }
}
