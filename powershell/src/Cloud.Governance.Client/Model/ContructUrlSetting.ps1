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

.PARAMETER Rules
No description available.

.PARAMETER Suffix
No description available.

.PARAMETER Connection
No description available.

.PARAMETER ContructUrlAssignBy
No description available.

.OUTPUTS

ContructUrlSetting<PSCustomObject>
#>

function New-ContructUrlSetting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String[]]
        ${Rules},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Suffix},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Connection},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ContructUrlAssignBy}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ContructUrlSetting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "rules" = ${Rules}
            "suffix" = ${Suffix}
            "connection" = ${Connection}
            "contructUrlAssignBy" = ${ContructUrlAssignBy}
        }

        return $PSO
    }
}