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

.PARAMETER TeamsId
No description available.

.PARAMETER TeamsName
No description available.

.PARAMETER TeamsSharing
No description available.

.PARAMETER EnableTeamsArchive
No description available.

.PARAMETER EnableTeamsRestore
No description available.

.PARAMETER ObjectId
No description available.

.PARAMETER PrimaryContact
No description available.

.PARAMETER PrimaryContactDisplayName
No description available.

.PARAMETER SecondaryContact
No description available.

.PARAMETER SecondaryContactDisplayName
No description available.

.PARAMETER Owners
No description available.

.PARAMETER OwnersDisplayName
No description available.

.PARAMETER PolicyName
No description available.

.PARAMETER Privacy
No description available.

.PARAMETER SubscribeMembers
No description available.

.PARAMETER TeamsSiteSharing
No description available.

.PARAMETER OutsideSenders
No description available.

.PARAMETER Language
No description available.

.PARAMETER SiteUrl
No description available.

.PARAMETER SiteQuota
No description available.

.PARAMETER SiteUsage
No description available.

.PARAMETER LeaseExpirationTime
No description available.

.PARAMETER CreatedTime
No description available.

.PARAMETER EnableLeaseExtension
No description available.

.PARAMETER EnablePolicyChange
No description available.

.PARAMETER EnableDeletion
No description available.

.PARAMETER EnableSiteQuotaChange
No description available.

.PARAMETER EnableLeaseManagement
No description available.

.PARAMETER EnableInactivityThreshold
No description available.

.PARAMETER InactivityThresholdTime
No description available.

.PARAMETER Classification
No description available.

.PARAMETER EnableHiddenMembership
No description available.

.PARAMETER PermissionRecertificationStatus
No description available.

.PARAMETER MembershipRecertificationStatus
No description available.

.PARAMETER Status
No description available.

.PARAMETER Hub
No description available.

.PARAMETER GeoLocation
No description available.

.PARAMETER Phase
No description available.

.PARAMETER AllMetadata
No description available.

.OUTPUTS

TeamsReport<PSCustomObject>
#>

function New-TeamsReport {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TeamsId},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TeamsName},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TeamsSharing},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableTeamsArchive},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableTeamsRestore},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ObjectId},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${PrimaryContact},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${PrimaryContactDisplayName},
        [Parameter(Position = 8, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SecondaryContact},
        [Parameter(Position = 9, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SecondaryContactDisplayName},
        [Parameter(Position = 10, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Owners},
        [Parameter(Position = 11, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${OwnersDisplayName},
        [Parameter(Position = 12, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${PolicyName},
        [Parameter(Position = 13, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Privacy},
        [Parameter(Position = 14, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SubscribeMembers},
        [Parameter(Position = 15, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TeamsSiteSharing},
        [Parameter(Position = 16, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${OutsideSenders},
        [Parameter(Position = 17, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Language},
        [Parameter(Position = 18, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SiteUrl},
        [Parameter(Position = 19, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SiteQuota},
        [Parameter(Position = 20, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SiteUsage},
        [Parameter(Position = 21, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${LeaseExpirationTime},
        [Parameter(Position = 22, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${CreatedTime},
        [Parameter(Position = 23, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableLeaseExtension},
        [Parameter(Position = 24, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnablePolicyChange},
        [Parameter(Position = 25, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableDeletion},
        [Parameter(Position = 26, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableSiteQuotaChange},
        [Parameter(Position = 27, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableLeaseManagement},
        [Parameter(Position = 28, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableInactivityThreshold},
        [Parameter(Position = 29, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[System.DateTime]]
        ${InactivityThresholdTime},
        [Parameter(Position = 30, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Classification},
        [Parameter(Position = 31, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableHiddenMembership},
        [Parameter(Position = 32, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${PermissionRecertificationStatus},
        [Parameter(Position = 33, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${MembershipRecertificationStatus},
        [Parameter(Position = 34, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Status},
        [Parameter(Position = 35, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Hub},
        [Parameter(Position = 36, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${GeoLocation},
        [Parameter(Position = 37, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Phase},
        [Parameter(Position = 38, ValueFromPipelineByPropertyName = $true)]
        [Hashtable]
        ${AllMetadata}
    )

    Process {
        'Creating object: Cloud.Governance.Client => TeamsReport' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "TeamsId" = ${TeamsId}
            "TeamsName" = ${TeamsName}
            "TeamsSharing" = ${TeamsSharing}
            "EnableTeamsArchive" = ${EnableTeamsArchive}
            "EnableTeamsRestore" = ${EnableTeamsRestore}
            "ObjectId" = ${ObjectId}
            "PrimaryContact" = ${PrimaryContact}
            "PrimaryContactDisplayName" = ${PrimaryContactDisplayName}
            "SecondaryContact" = ${SecondaryContact}
            "SecondaryContactDisplayName" = ${SecondaryContactDisplayName}
            "Owners" = ${Owners}
            "OwnersDisplayName" = ${OwnersDisplayName}
            "PolicyName" = ${PolicyName}
            "Privacy" = ${Privacy}
            "SubscribeMembers" = ${SubscribeMembers}
            "TeamsSiteSharing" = ${TeamsSiteSharing}
            "OutsideSenders" = ${OutsideSenders}
            "Language" = ${Language}
            "SiteUrl" = ${SiteUrl}
            "SiteQuota" = ${SiteQuota}
            "SiteUsage" = ${SiteUsage}
            "LeaseExpirationTime" = ${LeaseExpirationTime}
            "CreatedTime" = ${CreatedTime}
            "EnableLeaseExtension" = ${EnableLeaseExtension}
            "EnablePolicyChange" = ${EnablePolicyChange}
            "EnableDeletion" = ${EnableDeletion}
            "EnableSiteQuotaChange" = ${EnableSiteQuotaChange}
            "EnableLeaseManagement" = ${EnableLeaseManagement}
            "EnableInactivityThreshold" = ${EnableInactivityThreshold}
            "InactivityThresholdTime" = ${InactivityThresholdTime}
            "Classification" = ${Classification}
            "EnableHiddenMembership" = ${EnableHiddenMembership}
            "PermissionRecertificationStatus" = ${PermissionRecertificationStatus}
            "MembershipRecertificationStatus" = ${MembershipRecertificationStatus}
            "Status" = ${Status}
            "Hub" = ${Hub}
            "GeoLocation" = ${GeoLocation}
            "Phase" = ${Phase}
            "AllMetadata" = ${AllMetadata}
        }

        return $PSO
    }
}
