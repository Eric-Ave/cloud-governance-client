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

.PARAMETER Duration
No description available.

.PARAMETER DurationType
No description available.

.PARAMETER ThresholdApprovalProcess
No description available.

.PARAMETER EnableWarning
No description available.

.PARAMETER WarningProfile
No description available.

.PARAMETER EnableAdditionalAction
No description available.

.PARAMETER AdditionalActionType
No description available.

.PARAMETER DeleteGroupDuration
No description available.

.PARAMETER DeleteDurationType
No description available.

.PARAMETER EnableDeleteRemind
No description available.

.PARAMETER DeleteGroupReminder
No description available.

.PARAMETER EnableDeleteNotify
No description available.

.PARAMETER DeleteNotifyUsers
No description available.

.PARAMETER DeleteNotifyEmail
No description available.

.PARAMETER ArchiveGroupDuration
No description available.

.PARAMETER ArchiveGroupDurationType
No description available.

.PARAMETER EnableArchiveRemind
No description available.

.PARAMETER ArchiveGroupReminder
No description available.

.PARAMETER EnableArchiveNotify
No description available.

.PARAMETER ArchiveNotifyUsers
No description available.

.PARAMETER ArchiveNotifyEmail
No description available.

.OUTPUTS

GroupThresholdSetting<PSCustomObject>
#>

function New-GroupThresholdSetting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${Enabled},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${Duration},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DurationType},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ThresholdApprovalProcess},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableWarning},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${WarningProfile},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableAdditionalAction},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${AdditionalActionType},
        [Parameter(Position = 8, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${DeleteGroupDuration},
        [Parameter(Position = 9, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DeleteDurationType},
        [Parameter(Position = 10, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableDeleteRemind},
        [Parameter(Position = 11, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DeleteGroupReminder},
        [Parameter(Position = 12, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableDeleteNotify},
        [Parameter(Position = 13, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${DeleteNotifyUsers},
        [Parameter(Position = 14, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DeleteNotifyEmail},
        [Parameter(Position = 15, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${ArchiveGroupDuration},
        [Parameter(Position = 16, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ArchiveGroupDurationType},
        [Parameter(Position = 17, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableArchiveRemind},
        [Parameter(Position = 18, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ArchiveGroupReminder},
        [Parameter(Position = 19, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableArchiveNotify},
        [Parameter(Position = 20, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${ArchiveNotifyUsers},
        [Parameter(Position = 21, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ArchiveNotifyEmail}
    )

    Process {
        'Creating object: Cloud.Governance.Client => GroupThresholdSetting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "enabled" = ${Enabled}
            "duration" = ${Duration}
            "durationType" = ${DurationType}
            "thresholdApprovalProcess" = ${ThresholdApprovalProcess}
            "enableWarning" = ${EnableWarning}
            "warningProfile" = ${WarningProfile}
            "enableAdditionalAction" = ${EnableAdditionalAction}
            "additionalActionType" = ${AdditionalActionType}
            "deleteGroupDuration" = ${DeleteGroupDuration}
            "deleteDurationType" = ${DeleteDurationType}
            "enableDeleteRemind" = ${EnableDeleteRemind}
            "deleteGroupReminder" = ${DeleteGroupReminder}
            "enableDeleteNotify" = ${EnableDeleteNotify}
            "deleteNotifyUsers" = ${DeleteNotifyUsers}
            "deleteNotifyEmail" = ${DeleteNotifyEmail}
            "archiveGroupDuration" = ${ArchiveGroupDuration}
            "archiveGroupDurationType" = ${ArchiveGroupDurationType}
            "enableArchiveRemind" = ${EnableArchiveRemind}
            "archiveGroupReminder" = ${ArchiveGroupReminder}
            "enableArchiveNotify" = ${EnableArchiveNotify}
            "archiveNotifyUsers" = ${ArchiveNotifyUsers}
            "archiveNotifyEmail" = ${ArchiveNotifyEmail}
        }

        return $PSO
    }
}
