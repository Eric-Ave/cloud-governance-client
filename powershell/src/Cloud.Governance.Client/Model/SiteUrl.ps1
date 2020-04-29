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

.PARAMETER Root
No description available.

.PARAMETER ManagedPath
No description available.

.PARAMETER Name
No description available.

.OUTPUTS

SiteUrl<PSCustomObject>
#>

function New-SiteUrl {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Root},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ManagedPath},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name}
    )

    Process {
        'Creating object: Cloud.Governance.Client => SiteUrl' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "root" = ${Root}
            "managedPath" = ${ManagedPath}
            "name" = ${Name}
        }

        return $PSO
    }
}