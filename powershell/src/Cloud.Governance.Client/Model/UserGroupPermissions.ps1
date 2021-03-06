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

.PARAMETER UserPermissions
No description available.

.PARAMETER GroupPermissions
No description available.

.OUTPUTS

UserGroupPermissions<PSCustomObject>
#>

function New-UserGroupPermissions {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${UserPermissions},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${GroupPermissions}
    )

    Process {
        'Creating object: Cloud.Governance.Client => UserGroupPermissions' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "userPermissions" = ${UserPermissions}
            "groupPermissions" = ${GroupPermissions}
        }

        return $PSO
    }
}
