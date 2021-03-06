#
# Cloud Governance Api
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
# Version: 1.0
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

add a new email template

.DESCRIPTION

No description available.

.PARAMETER EmailTemplateModel
No description available.

.OUTPUTS

UUID
#>
function Add-Emailtemplate {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${EmailTemplateModel}
    )

    Process {
        'Calling method: Add-Emailtemplate' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        # HTTP header 'Content-Type'
        $LocalVarContentTypes = @('application/json-patch+json', 'application/json', 'text/json', 'application/*+json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates'

        $LocalVarBodyParameter = $EmailTemplateModel | ConvertTo-Json

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'POST' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "UUID"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

delete email template

.DESCRIPTION

No description available.

.PARAMETER Id
No description available.

.OUTPUTS

None
#>
function Invoke-DeleteEmailTemplate {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${Id}
    )

    Process {
        'Calling method: Invoke-DeleteEmailTemplate' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        $LocalVarUri = '/admin/settings/notification/emailtemplates/{id}'
        if (!$Id) {
            throw "Error! The required parameter `Id` missing when calling deleteEmailTemplate."
        }
        $LocalVarUri = $LocalVarUri.replace('{id}', $Id)

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'DELETE' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType ""

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

delete email templates

.DESCRIPTION

No description available.

.PARAMETER UUID
No description available.

.OUTPUTS

None
#>
function Invoke-DeleteEmailTemplates {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject[]]
        ${UUID}
    )

    Process {
        'Calling method: Invoke-DeleteEmailTemplates' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Content-Type'
        $LocalVarContentTypes = @('application/json-patch+json', 'application/json', 'text/json', 'application/*+json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates'

        $LocalVarBodyParameter = $UUID | ConvertTo-Json

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'DELETE' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType ""

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

edit email template

.DESCRIPTION

No description available.

.PARAMETER EmailTemplateModel
No description available.

.OUTPUTS

None
#>
function Edit-eEmailTemplate {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${EmailTemplateModel}
    )

    Process {
        'Calling method: Edit-eEmailTemplate' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Content-Type'
        $LocalVarContentTypes = @('application/json-patch+json', 'application/json', 'text/json', 'application/*+json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates'

        $LocalVarBodyParameter = $EmailTemplateModel | ConvertTo-Json

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'PUT' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType ""

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get administrator notification settings

.DESCRIPTION

No description available.

.OUTPUTS

AdministratorNotificationViewModel
#>
function Get-AdministratorNotification {
    [CmdletBinding()]
    Param (
    )

    Process {
        'Calling method: Get-AdministratorNotification' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/contacts'

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "AdministratorNotificationViewModel"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get delay notification configurations

.DESCRIPTION

No description available.

.OUTPUTS

DelayNotificationSettingsModel
#>
function Get-DelayNotificationSettings {
    [CmdletBinding()]
    Param (
    )

    Process {
        'Calling method: Get-DelayNotificationSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/delay'

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "DelayNotificationSettingsModel"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get email template with id

.DESCRIPTION

No description available.

.PARAMETER Id
No description available.

.OUTPUTS

EmailTemplateModel
#>
function Get-EmailTemplateById {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${Id}
    )

    Process {
        'Calling method: Get-EmailTemplateById' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates/{id}'
        if (!$Id) {
            throw "Error! The required parameter `Id` missing when calling getEmailTemplateById."
        }
        $LocalVarUri = $LocalVarUri.replace('{id}', $Id)

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "EmailTemplateModel"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get filters of email templates

.DESCRIPTION

No description available.

.PARAMETER Filter
Use **eq**(equal) or **ne**(not equal) to filter the results (e.g. field1 eq 'value1' and field2 ne 'value2'), supported fields :<br/> id, name, description, templateType, modifiedTime

.PARAMETER Distinct
Get the unique values for one field, supported fields:<br/> id, name, description, templateType, modifiedTime

.PARAMETER Top
 Define the number of records you want to return, max value is 200, default value is 200

.PARAMETER Skip
 Define the number of records you want to skip, default value is 0

.PARAMETER Nexttoken
 Use the next token to get the next paging result

.OUTPUTS

DistinctPageResult
#>
function Get-EmailTemplateFilters {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [String]
        ${Filter},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [String]
        ${Distinct},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [System.Nullable[Int32]]
        ${Top},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [System.Nullable[Int32]]
        ${Skip},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [String]
        ${Nexttoken}
    )

    Process {
        'Calling method: Get-EmailTemplateFilters' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates/filters'

        $LocalVarQueryParameters['filter'] = $Filter

        $LocalVarQueryParameters['distinct'] = $Distinct

        $LocalVarQueryParameters['top'] = $Top

        $LocalVarQueryParameters['skip'] = $Skip

        $LocalVarQueryParameters['nexttoken'] = $Nexttoken

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "DistinctPageResult"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get email template types

.DESCRIPTION

No description available.

.OUTPUTS

IntModel[]
#>
function Get-EmailTemplateTypes {
    [CmdletBinding()]
    Param (
    )

    Process {
        'Calling method: Get-EmailTemplateTypes' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates/types'

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "IntModel[]"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get email templates

.DESCRIPTION

No description available.

.PARAMETER Filter
Use **eq**(equal) or **ne**(not equal) to filter the results (e.g. field1 eq 'value1' and field2 ne 'value2'), supported fields :<br/> id, name, description, templateType, modifiedTime

.PARAMETER Orderby
Order by one field, supported fields:<br/> id, name, description, templateType, modifiedTime

.PARAMETER Search
Search for name

.PARAMETER Top
 Define the number of records you want to return, max value is 200, default value is 200

.PARAMETER Skip
 Define the number of records you want to skip, default value is 0

.PARAMETER Nexttoken
 Use the next token to get the next paging result

.OUTPUTS

EmailTemplateListPageResult
#>
function Get-EmailTemplates {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [String]
        ${Filter},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [String]
        ${Orderby},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [String]
        ${Search},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [System.Nullable[Int32]]
        ${Top},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [System.Nullable[Int32]]
        ${Skip},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [String]
        ${Nexttoken}
    )

    Process {
        'Calling method: Get-EmailTemplates' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates'

        $LocalVarQueryParameters['filter'] = $Filter

        $LocalVarQueryParameters['orderby'] = $Orderby

        $LocalVarQueryParameters['search'] = $Search

        $LocalVarQueryParameters['top'] = $Top

        $LocalVarQueryParameters['skip'] = $Skip

        $LocalVarQueryParameters['nexttoken'] = $Nexttoken

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "EmailTemplateListPageResult"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get email template references for body

.DESCRIPTION

No description available.

.PARAMETER Type
No description available.

.PARAMETER Languageid
No description available.

.OUTPUTS

EmailReferenceModel[]
#>
function Get-ReferencesForBody {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${Type},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [Int32]
        ${Languageid}
    )

    Process {
        'Calling method: Get-ReferencesForBody' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates/{type}/body/references/{languageid}'
        if (!$Type) {
            throw "Error! The required parameter `Type` missing when calling getReferencesForBody."
        }
        $LocalVarUri = $LocalVarUri.replace('{type}', $Type)
        if (!$Languageid) {
            throw "Error! The required parameter `Languageid` missing when calling getReferencesForBody."
        }
        $LocalVarUri = $LocalVarUri.replace('{languageid}', $Languageid)

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "EmailReferenceModel[]"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

get email template references for subject

.DESCRIPTION

No description available.

.PARAMETER Type
No description available.

.PARAMETER Languageid
No description available.

.OUTPUTS

EmailReferenceModel[]
#>
function Get-ReferencesForSubject {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${Type},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [Int32]
        ${Languageid}
    )

    Process {
        'Calling method: Get-ReferencesForSubject' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Accept' (if needed)
        $LocalVarAccepts = @('text/plain', 'application/json', 'text/json')

        $LocalVarUri = '/admin/settings/notification/emailtemplates/{type}/subject/references/{languageid}'
        if (!$Type) {
            throw "Error! The required parameter `Type` missing when calling getReferencesForSubject."
        }
        $LocalVarUri = $LocalVarUri.replace('{type}', $Type)
        if (!$Languageid) {
            throw "Error! The required parameter `Languageid` missing when calling getReferencesForSubject."
        }
        $LocalVarUri = $LocalVarUri.replace('{languageid}', $Languageid)

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'GET' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType "EmailReferenceModel[]"

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

save administrator notification settings

.DESCRIPTION

No description available.

.PARAMETER AdministratorNotificationModel
No description available.

.OUTPUTS

None
#>
function Save-AdministratorNotification {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${AdministratorNotificationModel}
    )

    Process {
        'Calling method: Save-AdministratorNotification' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Content-Type'
        $LocalVarContentTypes = @('application/json-patch+json', 'application/json', 'text/json', 'application/*+json')

        $LocalVarUri = '/admin/settings/notification/contacts'

        $LocalVarBodyParameter = $AdministratorNotificationModel | ConvertTo-Json

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'POST' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType ""

        return $LocalVarResult["Response"]
    }
}

<#
.SYNOPSIS

save delay notification configurations

.DESCRIPTION

No description available.

.PARAMETER DelayNotificationSettingsModel
No description available.

.OUTPUTS

None
#>
function Save-DelayNotificationSettings {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Mandatory = $false)]
        [PSCustomObject]
        ${DelayNotificationSettingsModel}
    )

    Process {
        'Calling method: Save-DelayNotificationSettings' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $LocalVarAccepts = @()
        $LocalVarContentTypes = @()
        $LocalVarQueryParameters = @{}
        $LocalVarHeaderParameters = @{}
        $LocalVarFormParameters = @{}
        $LocalVarPathParameters = @{}
        $LocalVarCookieParameters = @{}
        $LocalVarBodyParameter

        $Configuration = Get-Configuration
        # HTTP header 'Content-Type'
        $LocalVarContentTypes = @('application/json-patch+json', 'application/json', 'text/json', 'application/*+json')

        $LocalVarUri = '/admin/settings/notification/delay'

        $LocalVarBodyParameter = $DelayNotificationSettingsModel | ConvertTo-Json

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientId"]) {
            $LocalVarHeaderParameters['ClientId'] = $Configuration["ApiKey"]["ClientId"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["ClientSecret"]) {
            $LocalVarHeaderParameters['ClientSecret'] = $Configuration["ApiKey"]["ClientSecret"]
        }

        if ($Configuration["ApiKey"] -and $Configuration["ApiKey"]["UserPrincipalName"]) {
            $LocalVarHeaderParameters['UserPrincipalName'] = $Configuration["ApiKey"]["UserPrincipalName"]
        }

        $LocalVarResult = Invoke-ApiClient -Method 'POST' `
                                -Uri $LocalVarUri `
                                -Accepts $LocalVarAccepts `
                                -ContentTypes $LocalVarContentTypes `
                                -Body $LocalVarBodyParameter `
                                -HeaderParameters $LocalVarHeaderParameters `
                                -QueryParameters $LocalVarQueryParameters `
                                -FormParameters $LocalVarFormParameters `
                                -CookieParameters $LocalVarCookieParameters `
                                -ReturnType ""

        return $LocalVarResult["Response"]
    }
}

