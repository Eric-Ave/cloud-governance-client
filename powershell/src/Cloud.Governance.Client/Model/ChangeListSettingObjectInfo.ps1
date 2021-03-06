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

.PARAMETER SiteUrl
No description available.

.PARAMETER WebId
No description available.

.PARAMETER WebUrl
No description available.

.PARAMETER SiteId
No description available.

.PARAMETER ObjectUrl
No description available.

.PARAMETER ObjectTitle
No description available.

.OUTPUTS

ChangeListSettingObjectInfo<PSCustomObject>
#>

function New-ChangeListSettingObjectInfo {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SiteUrl},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${WebId},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${WebUrl},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${SiteId},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ObjectUrl},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ObjectTitle}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ChangeListSettingObjectInfo' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "siteUrl" = ${SiteUrl}
            "webId" = ${WebId}
            "webUrl" = ${WebUrl}
            "siteId" = ${SiteId}
            "objectUrl" = ${ObjectUrl}
            "objectTitle" = ${ObjectTitle}
        }

        return $PSO
    }
}
