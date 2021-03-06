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

.PARAMETER ObjectType
No description available.

.PARAMETER ObjectInfo
No description available.

.PARAMETER Action
No description available.

.PARAMETER Permissions
No description available.

.PARAMETER OriginalPermissions
No description available.

.PARAMETER ExternalUserType
No description available.

.PARAMETER Members
No description available.

.PARAMETER GrantPermissionSetting
No description available.

.OUTPUTS

ObjectPermissionManagementModel<PSCustomObject>
#>

function New-ObjectPermissionManagementModel {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ObjectType},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ObjectInfo},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Action},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [String[]]
        ${Permissions},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [String[]]
        ${OriginalPermissions},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ExternalUserType},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Members},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${GrantPermissionSetting}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ObjectPermissionManagementModel' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "objectType" = ${ObjectType}
            "objectInfo" = ${ObjectInfo}
            "action" = ${Action}
            "permissions" = ${Permissions}
            "originalPermissions" = ${OriginalPermissions}
            "externalUserType" = ${ExternalUserType}
            "members" = ${Members}
            "grantPermissionSetting" = ${GrantPermissionSetting}
        }

        return $PSO
    }
}
