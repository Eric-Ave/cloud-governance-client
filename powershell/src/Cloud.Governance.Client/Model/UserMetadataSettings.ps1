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

.PARAMETER Value
No description available.

.PARAMETER AllowReferenceAsRoleInApprovalProcess
No description available.

.OUTPUTS

UserMetadataSettings<PSCustomObject>
#>

function New-UserMetadataSettings {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Value},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowReferenceAsRoleInApprovalProcess}
    )

    Process {
        'Creating object: Cloud.Governance.Client => UserMetadataSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "value" = ${Value}
            "allowReferenceAsRoleInApprovalProcess" = ${AllowReferenceAsRoleInApprovalProcess}
        }

        return $PSO
    }
}
