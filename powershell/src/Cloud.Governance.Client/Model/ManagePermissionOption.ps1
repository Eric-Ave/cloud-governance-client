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

.PARAMETER GrantPermissionSetting
No description available.

.PARAMETER IsEnableEditPermission
No description available.

.PARAMETER IsEnableRemovePermission
No description available.

.PARAMETER IsEnableStopInheritPermission
No description available.

.PARAMETER IsEnableDeleteUniquePermission
No description available.

.PARAMETER IsEnableExcludePermissionLevel
No description available.

.PARAMETER IsHideExcludePermissionItem
No description available.

.PARAMETER ExcludedPermissionLevles
No description available.

.OUTPUTS

ManagePermissionOption<PSCustomObject>
#>

function New-ManagePermissionOption {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${GrantPermissionSetting},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnableEditPermission},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnableRemovePermission},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnableStopInheritPermission},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnableDeleteUniquePermission},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnableExcludePermissionLevel},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsHideExcludePermissionItem},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${ExcludedPermissionLevles}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ManagePermissionOption' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "grantPermissionSetting" = ${GrantPermissionSetting}
            "isEnableEditPermission" = ${IsEnableEditPermission}
            "isEnableRemovePermission" = ${IsEnableRemovePermission}
            "isEnableStopInheritPermission" = ${IsEnableStopInheritPermission}
            "isEnableDeleteUniquePermission" = ${IsEnableDeleteUniquePermission}
            "isEnableExcludePermissionLevel" = ${IsEnableExcludePermissionLevel}
            "isHideExcludePermissionItem" = ${IsHideExcludePermissionItem}
            "excludedPermissionLevles" = ${ExcludedPermissionLevles}
        }

        return $PSO
    }
}
