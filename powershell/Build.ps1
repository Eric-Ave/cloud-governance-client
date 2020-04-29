#
# Cloud Governance Api
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
# Version: 1.0
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

function Get-FunctionsToExport {
    [CmdletBinding()]
    Param (
        [Parameter(Mandatory = $true, ValueFromPipelineByPropertyName = $true)]
        [ValidateNotNullOrEmpty()]
        [Alias('FullName')]
        $Path
    )

    Process {
        $Token = $null
        $ParserErr = $null

        $Ast = [System.Management.Automation.Language.Parser]::ParseFile(
            $Path,
            [ref]$Token,
            [ref]$ParserErr
        )

        if ($ParserErr) {
            throw $ParserErr
        } else {
            foreach ($name in 'Begin', 'Process', 'End') {
	            foreach ($Statement in $Ast."${name}Block".Statements) {
		            if (
                        [String]::IsNullOrWhiteSpace($Statement.Name) -or
                        $Statement.Extent.ToString() -notmatch
                        ('function\W+{0}' -f $Statement.Name)
                    ) {
			            continue
		            }

		            $Statement.Name
	            }
            }
        }
    }
}

$ScriptDir = Split-Path $script:MyInvocation.MyCommand.Path
$FunctionPath = 'Api', 'Model', 'Client' | ForEach-Object {Join-Path "$ScriptDir\src\Cloud.Governance.Client\" $_}

$Manifest = @{
    Path = "$ScriptDir\src\Cloud.Governance.Client\Cloud.Governance.Client.psd1"

    Author = 'AvePoint, Inc.'
    CompanyName = 'AvePoint'
    Description = 'PowerShell API client for AvePoint Cloud Governance'

    ModuleVersion = '1.0.5'

    RootModule = 'Cloud.Governance.Client.psm1'
    Guid = '{38968A2B-707F-4EE7-A45F-195CB4B709D5}' # Has to be static, otherwise each new build will be considered different module

    PowerShellVersion = '3.0'

    FunctionsToExport = $FunctionPath | Get-ChildItem -Filter *.ps1 | Get-FunctionsToExport
    VariablesToExport = @()
    AliasesToExport = @()
    CmdletsToExport = @()
    RequiredAssemblies = @('System.Web')
    Tags = 'AvePoint,CloudGovernance,API,CG,ACG,Cloud,Governance'
    LicenseUri = 'https://licenses.nuget.org/MIT'
    ProjectUri = 'https://github.com/AvePoint/cloud-governance-client'
    IconUri = 'https://raw.githubusercontent.com/AvePoint/cloud-governance-client/master/cloud-governance.png'
}

New-ModuleManifest @Manifest
