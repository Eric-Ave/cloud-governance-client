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

.PARAMETER User
No description available.

.PARAMETER UserDisplayName
No description available.

.PARAMETER GroupUserType
No description available.

.PARAMETER GroupUserTypeDescription
No description available.

.PARAMETER AccessType
No description available.

.PARAMETER AccessTypeDescription
No description available.

.PARAMETER Id
No description available.

.PARAMETER ObjectId
No description available.

.PARAMETER Action
No description available.

.OUTPUTS

MembershipRenewalItemModel<PSCustomObject>
#>

function New-MembershipRenewalItemModel {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Type},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${User},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${UserDisplayName},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${GroupUserType},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${GroupUserTypeDescription},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${AccessType},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${AccessTypeDescription},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Id},
        [Parameter(Position = 8, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ObjectId},
        [Parameter(Position = 9, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Action}
    )

    Process {
        'Creating object: Cloud.Governance.Client => MembershipRenewalItemModel' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "type" = ${Type}
            "user" = ${User}
            "userDisplayName" = ${UserDisplayName}
            "groupUserType" = ${GroupUserType}
            "groupUserTypeDescription" = ${GroupUserTypeDescription}
            "accessType" = ${AccessType}
            "accessTypeDescription" = ${AccessTypeDescription}
            "id" = ${Id}
            "objectId" = ${ObjectId}
            "action" = ${Action}
        }

        return $PSO
    }
}
