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

.PARAMETER Status
No description available.

.PARAMETER LastChangeTime
No description available.

.OUTPUTS

ApplyPolicyInfo<PSCustomObject>
#>

function New-ApplyPolicyInfo {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Status},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${LastChangeTime}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ApplyPolicyInfo' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "status" = ${Status}
            "lastChangeTime" = ${LastChangeTime}
        }

        return $PSO
    }
}
