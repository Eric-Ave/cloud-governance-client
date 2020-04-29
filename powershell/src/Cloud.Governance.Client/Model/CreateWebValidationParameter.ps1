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

.PARAMETER ParentUrl
No description available.

.PARAMETER Uri
No description available.

.PARAMETER IgnoreLock
No description available.

.PARAMETER IsEditTask
No description available.

.PARAMETER IsFromQuestionnaire
No description available.

.OUTPUTS

CreateWebValidationParameter<PSCustomObject>
#>

function New-CreateWebValidationParameter {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ParentUrl},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Uri},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IgnoreLock},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEditTask},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsFromQuestionnaire}
    )

    Process {
        'Creating object: Cloud.Governance.Client => CreateWebValidationParameter' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "parentUrl" = ${ParentUrl}
            "uri" = ${Uri}
            "ignoreLock" = ${IgnoreLock}
            "isEditTask" = ${IsEditTask}
            "isFromQuestionnaire" = ${IsFromQuestionnaire}
        }

        return $PSO
    }
}