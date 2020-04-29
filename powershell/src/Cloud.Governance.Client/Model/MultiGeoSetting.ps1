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

.PARAMETER ControlMode
No description available.

.PARAMETER DefaultLocation
No description available.

.PARAMETER SelectedLocations
No description available.

.PARAMETER LocationAssignBy
No description available.

.PARAMETER UserRoleForLocation
No description available.

.PARAMETER AllLocations
No description available.

.OUTPUTS

MultiGeoSetting<PSCustomObject>
#>

function New-MultiGeoSetting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnabled},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ControlMode},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DefaultLocation},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${SelectedLocations},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${LocationAssignBy},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${UserRoleForLocation},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${AllLocations}
    )

    Process {
        'Creating object: Cloud.Governance.Client => MultiGeoSetting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "isEnabled" = ${IsEnabled}
            "controlMode" = ${ControlMode}
            "defaultLocation" = ${DefaultLocation}
            "selectedLocations" = ${SelectedLocations}
            "locationAssignBy" = ${LocationAssignBy}
            "userRoleForLocation" = ${UserRoleForLocation}
            "allLocations" = ${AllLocations}
        }

        return $PSO
    }
}