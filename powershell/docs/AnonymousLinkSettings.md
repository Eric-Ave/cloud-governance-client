# AnonymousLinkSettings
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Permisssion** | [**AnnoymouslinkPermissions**](AnnoymouslinkPermissions.md) |  | [optional] [default to null]
**ExpirationDate** | **System.DateTime** |  | [optional] [default to null]

## Examples

- Create a new object
```powershell
New-Cloud.Governance.ClientAnonymousLinkSettings  -Permisssion null `
 -ExpirationDate null
```

- Convert the object to JSON
```powershell
$ | Convert-ToJSON
```


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

