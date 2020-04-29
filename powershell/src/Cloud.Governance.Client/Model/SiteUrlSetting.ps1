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

.PARAMETER Type
No description available.

.PARAMETER ManuallyInputSetting
No description available.

.PARAMETER AutoGenerateUrlSetting
No description available.

.OUTPUTS

SiteUrlSetting<PSCustomObject>
#>

function New-SiteUrlSetting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Type},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ManuallyInputSetting},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${AutoGenerateUrlSetting}
    )

    Process {
        'Creating object: Cloud.Governance.Client => SiteUrlSetting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "type" = ${Type}
            "manuallyInputSetting" = ${ManuallyInputSetting}
            "autoGenerateUrlSetting" = ${AutoGenerateUrlSetting}
        }

        return $PSO
    }
}