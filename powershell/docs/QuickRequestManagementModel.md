# QuickRequestManagementModel
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsCategoryEnabledSelectAll** | **Boolean** |  | [optional] [default to null]
**SelectedCategories** | [**UUID[]**](UUID.md) |  | [optional] [default to null]
**IsServiceEnabledSelectAll** | **Boolean** |  | [optional] [default to null]
**SelectedServices** | [**UUID[]**](UUID.md) |  | [optional] [default to null]

## Examples

- Create a new object
```powershell
New-Cloud.Governance.ClientQuickRequestManagementModel  -IsCategoryEnabledSelectAll null `
 -SelectedCategories null `
 -IsServiceEnabledSelectAll null `
 -SelectedServices null
```

- Convert the object to JSON
```powershell
$ | Convert-ToJSON
```


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

