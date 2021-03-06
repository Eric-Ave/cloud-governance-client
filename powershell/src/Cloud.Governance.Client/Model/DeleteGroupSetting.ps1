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

.PARAMETER EnableNotify
No description available.

.PARAMETER NotifyUsers
No description available.

.PARAMETER EmailTemplate
No description available.

.PARAMETER Enabled
No description available.

.PARAMETER ApprovalProcess
No description available.

.PARAMETER IsUsedDefaultProcess
No description available.

.OUTPUTS

DeleteGroupSetting<PSCustomObject>
#>

function New-DeleteGroupSetting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableNotify},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${NotifyUsers},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${EmailTemplate},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${Enabled},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ApprovalProcess},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsUsedDefaultProcess}
    )

    Process {
        'Creating object: Cloud.Governance.Client => DeleteGroupSetting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "enableNotify" = ${EnableNotify}
            "notifyUsers" = ${NotifyUsers}
            "emailTemplate" = ${EmailTemplate}
            "enabled" = ${Enabled}
            "approvalProcess" = ${ApprovalProcess}
            "isUsedDefaultProcess" = ${IsUsedDefaultProcess}
        }

        return $PSO
    }
}
