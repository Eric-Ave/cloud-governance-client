# CgClient.CreateGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupId** | **String** |  | [optional] 
**groupIdWithoutPrefixSuffix** | **String** |  | [optional] 
**groupName** | **String** |  | [optional] 
**groupNameWithoutPrefixSuffix** | **String** |  | [optional] 
**groupEmail** | **String** |  | [optional] [readonly] 
**policy** | **String** |  | [optional] 
**groupDescription** | **String** |  | [optional] 
**owners** | [**[ApiUser]**](ApiUser.md) |  | [optional] 
**members** | [**[ApiUser]**](ApiUser.md) |  | [optional] 
**privacy** | **Boolean** |  | [optional] 
**subscribe** | **Boolean** |  | [optional] 
**outsideSender** | **Boolean** |  | [optional] 
**enableTeamCollaboration** | **Boolean** |  | [optional] 
**language** | **String** |  | [optional] 
**classification** | **String** |  | [optional] 
**links** | [**GroupLinks**](GroupLinks.md) |  | [optional] [readonly] 
**leasePeriodSettings** | [**GroupLeasePeriodSettings**](GroupLeasePeriodSettings.md) |  | [optional] 
**teamsSettings** | [**RequestTeamsSettings**](RequestTeamsSettings.md) |  | [optional] 
**appliedSiteDesignId** | **String** |  | [optional] 
**primaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**secondaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**enableGroupMembershipHidden** | **Boolean** |  | [optional] 
**enableAssignedMembership** | **Boolean** |  | [optional] 
**enableDynamicMembership** | **Boolean** |  | [optional] 
**templateSettings** | [**TeamsTemplateSettings**](TeamsTemplateSettings.md) |  | [optional] 
**dynamicMembershipRules** | [**[DynamicGroupRuleInfo]**](DynamicGroupRuleInfo.md) |  | [optional] 
**multiGeoLocation** | [**GeoLocationBase**](GeoLocationBase.md) |  | [optional] 
**hubSiteSettings** | [**HubSiteSettings**](HubSiteSettings.md) |  | [optional] 
**id** | **String** |  | [optional] 
**serviceId** | **String** |  | [optional] 
**department** | **String** |  | [optional] 
**summary** | **String** |  | [optional] 
**notesToApprovers** | **String** |  | [optional] 
**questionnaireId** | **String** |  | [optional] 
**metadatas** | [**[RequestMetadata]**](RequestMetadata.md) |  | [optional] 
**ticketNumber** | **Number** |  | [optional] [readonly] 
**type** | [**ServiceTypeNullable**](ServiceTypeNullable.md) |  | [optional] [readonly] 
**typeDescription** | **String** |  | [optional] [readonly] 
**requester** | **String** |  | [optional] [readonly] 
**status** | [**RequestStatusNullable**](RequestStatusNullable.md) |  | [optional] [readonly] 
**progressStatus** | **Number** |  | [optional] [readonly] 
**progressStatusDescription** | **String** |  | [optional] [readonly] 
**submittedTime** | **Date** |  | [optional] [readonly] 
**lastUpdated** | **Date** |  | [optional] [readonly] 
**createdTime** | **Date** |  | [optional] [readonly] 
**assignTo** | **String** |  | [optional] [readonly] 
**fullPath** | **String** |  | [optional] [readonly] 


