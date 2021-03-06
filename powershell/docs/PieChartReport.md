# PieChartReport
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatisticColumn** | **String** |  | [optional] [default to null]
**Id** | [**UUID**](UUID.md) |  | [optional] [default to null]
**Title** | **String** |  | [optional] [default to null]
**Description** | **String** |  | [optional] [default to null]
**DataSource** | [**ReportDataSource**](ReportDataSource.md) |  | [optional] [default to null]
**Type** | [**ChartType**](ChartType.md) |  | [optional] [default to null]
**UserId** | **Int32** |  | [optional] [default to null]
**CreatedTime** | **System.DateTime** |  | [optional] [default to null]

## Examples

- Create a new object
```powershell
New-Cloud.Governance.ClientPieChartReport  -StatisticColumn null `
 -Id null `
 -Title null `
 -Description null `
 -DataSource null `
 -Type null `
 -UserId null `
 -CreatedTime null
```

- Convert the object to JSON
```powershell
$ | Convert-ToJSON
```


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

