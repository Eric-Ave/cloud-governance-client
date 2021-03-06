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

.PARAMETER NextLink
No description available.

.PARAMETER NextToken
No description available.

.OUTPUTS

SiteListPageResult<PSCustomObject>
#>

function New-SiteListPageResult {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Value},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${NextLink},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${NextToken}
    )

    Process {
        'Creating object: Cloud.Governance.Client => SiteListPageResult' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "value" = ${Value}
            "nextLink" = ${NextLink}
            "nextToken" = ${NextToken}
        }

        return $PSO
    }
}
