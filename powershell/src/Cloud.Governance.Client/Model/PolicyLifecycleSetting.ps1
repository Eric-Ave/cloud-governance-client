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

.PARAMETER Archiver
No description available.

.PARAMETER Deletion
No description available.

.PARAMETER Extension
No description available.

.PARAMETER Change
No description available.

.PARAMETER Unlock
No description available.

.PARAMETER Lock
No description available.

.PARAMETER Quota
No description available.

.PARAMETER DefaultProcessId
No description available.

.OUTPUTS

PolicyLifecycleSetting<PSCustomObject>
#>

function New-PolicyLifecycleSetting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Archiver},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Deletion},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Extension},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Change},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Unlock},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Lock},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Quota},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DefaultProcessId}
    )

    Process {
        'Creating object: Cloud.Governance.Client => PolicyLifecycleSetting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "archiver" = ${Archiver}
            "deletion" = ${Deletion}
            "extension" = ${Extension}
            "change" = ${Change}
            "unlock" = ${Unlock}
            "lock" = ${Lock}
            "quota" = ${Quota}
            "defaultProcessId" = ${DefaultProcessId}
        }

        return $PSO
    }
}
