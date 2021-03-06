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

.PARAMETER Enabled
No description available.

.PARAMETER SharingType
No description available.

.PARAMETER AnonymousLinkSettings
No description available.

.OUTPUTS

ExternalUserSharingSettings<PSCustomObject>
#>

function New-ExternalUserSharingSettings {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${Enabled},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${SharingType},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${AnonymousLinkSettings}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ExternalUserSharingSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "enabled" = ${Enabled}
            "sharingType" = ${SharingType}
            "anonymousLinkSettings" = ${AnonymousLinkSettings}
        }

        return $PSO
    }
}
