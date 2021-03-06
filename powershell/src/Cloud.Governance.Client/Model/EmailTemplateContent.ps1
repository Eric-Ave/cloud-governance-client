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

.PARAMETER IsEnabled
No description available.

.PARAMETER LanguageId
No description available.

.PARAMETER Body
No description available.

.PARAMETER Subject
No description available.

.OUTPUTS

EmailTemplateContent<PSCustomObject>
#>

function New-EmailTemplateContent {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnabled},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${LanguageId},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Body},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Subject}
    )

    Process {
        'Creating object: Cloud.Governance.Client => EmailTemplateContent' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "isEnabled" = ${IsEnabled}
            "languageId" = ${LanguageId}
            "body" = ${Body}
            "subject" = ${Subject}
        }

        return $PSO
    }
}
