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

Confirmed=0, Processing=1, PendingInition=2, </br>ApplyInformationException=3, Overdue=4, PendingRenewal=5, </br>RenewalExpired=6, RenewalProcessing=7, RenewalException=8, </br>Locked=9, RenewalCanceled=10

.OUTPUTS

AutoImportPhase<PSCustomObject>
#>

function New-AutoImportPhase {
    [CmdletBinding()]
    Param (
    )

    Process {
        'Creating object: Cloud.Governance.Client => AutoImportPhase' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
        }

        return $PSO
    }
}
