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

.PARAMETER IdentityName
No description available.

.PARAMETER UserDisplayName
No description available.

.PARAMETER DomainGroup
No description available.

.PARAMETER Department
No description available.

.PARAMETER MobilePhone
No description available.

.PARAMETER Manager
No description available.

.PARAMETER Permission
No description available.

.PARAMETER IsDeleted
No description available.

.PARAMETER SecurityToken
No description available.

.PARAMETER UserType
No description available.

.PARAMETER LegalPerson
No description available.

.PARAMETER AuthenticationType
No description available.

.PARAMETER AdminCenterUrl
No description available.

.PARAMETER InviteType
No description available.

.PARAMETER Type
No description available.

.PARAMETER IsRegisteredAosGroup
No description available.

.PARAMETER IsExternalUser
No description available.

.PARAMETER IsAPIExceptional
No description available.

.PARAMETER TenantId
No description available.

.PARAMETER ObjectId
No description available.

.PARAMETER Version
No description available.

.PARAMETER JobTitle
No description available.

.PARAMETER UsageLocation
No description available.

.PARAMETER PhysicalDeliveryOfficeName
No description available.

.PARAMETER IsOtherTenantUser
No description available.

.PARAMETER Id
No description available.

.PARAMETER DisplayName
No description available.

.PARAMETER Title
No description available.

.PARAMETER Email
No description available.

.PARAMETER IsValid
No description available.

.PARAMETER ExistInAOS
No description available.

.OUTPUTS

UserInfo<PSCustomObject>
#>

function New-UserInfo {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${IdentityName},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${UserDisplayName},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${DomainGroup},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Department},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${MobilePhone},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Manager},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Permission},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsDeleted},
        [Parameter(Position = 8, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${SecurityToken},
        [Parameter(Position = 9, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${UserType},
        [Parameter(Position = 10, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${LegalPerson},
        [Parameter(Position = 11, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${AuthenticationType},
        [Parameter(Position = 12, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${AdminCenterUrl},
        [Parameter(Position = 13, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${InviteType},
        [Parameter(Position = 14, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Type},
        [Parameter(Position = 15, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsRegisteredAosGroup},
        [Parameter(Position = 16, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${IsExternalUser},
        [Parameter(Position = 17, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsAPIExceptional},
        [Parameter(Position = 18, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TenantId},
        [Parameter(Position = 19, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ObjectId},
        [Parameter(Position = 20, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${Version},
        [Parameter(Position = 21, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${JobTitle},
        [Parameter(Position = 22, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${UsageLocation},
        [Parameter(Position = 23, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${PhysicalDeliveryOfficeName},
        [Parameter(Position = 24, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsOtherTenantUser},
        [Parameter(Position = 25, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${Id},
        [Parameter(Position = 26, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${DisplayName},
        [Parameter(Position = 27, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Title},
        [Parameter(Position = 28, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Email},
        [Parameter(Position = 29, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsValid},
        [Parameter(Position = 30, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${ExistInAOS}
    )

    Process {
        'Creating object: Cloud.Governance.Client => UserInfo' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "identityName" = ${IdentityName}
            "userDisplayName" = ${UserDisplayName}
            "domainGroup" = ${DomainGroup}
            "department" = ${Department}
            "mobilePhone" = ${MobilePhone}
            "manager" = ${Manager}
            "permission" = ${Permission}
            "isDeleted" = ${IsDeleted}
            "securityToken" = ${SecurityToken}
            "userType" = ${UserType}
            "legalPerson" = ${LegalPerson}
            "authenticationType" = ${AuthenticationType}
            "adminCenterUrl" = ${AdminCenterUrl}
            "inviteType" = ${InviteType}
            "type" = ${Type}
            "isRegisteredAosGroup" = ${IsRegisteredAosGroup}
            "isExternalUser" = ${IsExternalUser}
            "isAPIExceptional" = ${IsAPIExceptional}
            "tenantId" = ${TenantId}
            "objectId" = ${ObjectId}
            "version" = ${Version}
            "jobTitle" = ${JobTitle}
            "usageLocation" = ${UsageLocation}
            "physicalDeliveryOfficeName" = ${PhysicalDeliveryOfficeName}
            "isOtherTenantUser" = ${IsOtherTenantUser}
            "id" = ${Id}
            "displayName" = ${DisplayName}
            "title" = ${Title}
            "email" = ${Email}
            "isValid" = ${IsValid}
            "existInAOS" = ${ExistInAOS}
        }

        return $PSO
    }
}
