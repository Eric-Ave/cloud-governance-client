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

.PARAMETER PermissionType
No description available.

.PARAMETER Value
No description available.

.PARAMETER TenantId
No description available.

.PARAMETER PropertyInputType
No description available.

.PARAMETER PermissionId
No description available.

.PARAMETER Name
No description available.

.OUTPUTS

ServicePermissionItem<PSCustomObject>
#>

function New-ServicePermissionItem {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${PermissionType},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Value},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TenantId},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${PropertyInputType},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${PermissionId},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ServicePermissionItem' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "permissionType" = ${PermissionType}
            "value" = ${Value}
            "tenantId" = ${TenantId}
            "propertyInputType" = ${PropertyInputType}
            "permissionId" = ${PermissionId}
            "name" = ${Name}
        }

        return $PSO
    }
}
