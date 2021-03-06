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

.PARAMETER Duration
No description available.

.PARAMETER DurationType
No description available.

.PARAMETER ExtendBasedOnPoint
No description available.

.PARAMETER IsEnabled
No description available.

.PARAMETER IsDefaultProcess
No description available.

.PARAMETER Process
No description available.

.OUTPUTS

SiteExtensionLifecycleItem<PSCustomObject>
#>

function New-SiteExtensionLifecycleItem {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Type},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${Duration},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DurationType},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ExtendBasedOnPoint},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnabled},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsDefaultProcess},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Process}
    )

    Process {
        'Creating object: Cloud.Governance.Client => SiteExtensionLifecycleItem' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "type" = ${Type}
            "duration" = ${Duration}
            "durationType" = ${DurationType}
            "extendBasedOnPoint" = ${ExtendBasedOnPoint}
            "isEnabled" = ${IsEnabled}
            "isDefaultProcess" = ${IsDefaultProcess}
            "process" = ${Process}
        }

        return $PSO
    }
}
