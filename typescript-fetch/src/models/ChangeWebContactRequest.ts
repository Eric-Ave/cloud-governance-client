// tslint:disable
/**
 * Cloud Governance Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ChangeContactByUserSetting,
    ChangeContactByUserSettingFromJSON,
    ChangeContactByUserSettingFromJSONTyped,
    ChangeContactByUserSettingToJSON,
    ChangeContactMethod,
    ChangeContactMethodFromJSON,
    ChangeContactMethodFromJSONTyped,
    ChangeContactMethodToJSON,
    ChangeWebContactByUrlSetting,
    ChangeWebContactByUrlSettingFromJSON,
    ChangeWebContactByUrlSettingFromJSONTyped,
    ChangeWebContactByUrlSettingToJSON,
    ChangeWebContactSubRequest,
    ChangeWebContactSubRequestFromJSON,
    ChangeWebContactSubRequestFromJSONTyped,
    ChangeWebContactSubRequestToJSON,
    RequestMetadata,
    RequestMetadataFromJSON,
    RequestMetadataFromJSONTyped,
    RequestMetadataToJSON,
    RequestStatus,
    RequestStatusFromJSON,
    RequestStatusFromJSONTyped,
    RequestStatusToJSON,
    ServiceType,
    ServiceTypeFromJSON,
    ServiceTypeFromJSONTyped,
    ServiceTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChangeWebContactRequest
 */
export interface ChangeWebContactRequest {
    /**
     * 
     * @type {ChangeContactMethod}
     * @memberof ChangeWebContactRequest
     */
    changedMethod?: ChangeContactMethod;
    /**
     * 
     * @type {ChangeContactByUserSetting}
     * @memberof ChangeWebContactRequest
     */
    changedByUserSetting?: ChangeContactByUserSetting;
    /**
     * 
     * @type {Array<ChangeWebContactByUrlSetting>}
     * @memberof ChangeWebContactRequest
     */
    changedByUrlItems?: Array<ChangeWebContactByUrlSetting> | null;
    /**
     * 
     * @type {Array<ChangeWebContactSubRequest>}
     * @memberof ChangeWebContactRequest
     */
    subRequests?: Array<ChangeWebContactSubRequest> | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    serviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    department?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    summary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    notesToApprovers?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    questionnaireId?: string | null;
    /**
     * 
     * @type {Array<RequestMetadata>}
     * @memberof ChangeWebContactRequest
     */
    metadatas?: Array<RequestMetadata> | null;
    /**
     * 
     * @type {number}
     * @memberof ChangeWebContactRequest
     */
    ticketNumber?: number | null;
    /**
     * 
     * @type {ServiceType}
     * @memberof ChangeWebContactRequest
     */
    type?: ServiceType;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    readonly typeDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    requester?: string | null;
    /**
     * 
     * @type {RequestStatus}
     * @memberof ChangeWebContactRequest
     */
    status?: RequestStatus;
    /**
     * 
     * @type {number}
     * @memberof ChangeWebContactRequest
     */
    readonly progressStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    readonly progressStatusDescription?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ChangeWebContactRequest
     */
    submittedTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ChangeWebContactRequest
     */
    lastUpdated?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ChangeWebContactRequest
     */
    createdTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    assignTo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactRequest
     */
    fullPath?: string | null;
}

export function ChangeWebContactRequestFromJSON(json: any): ChangeWebContactRequest {
    return ChangeWebContactRequestFromJSONTyped(json, false);
}

export function ChangeWebContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeWebContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedMethod': !exists(json, 'changedMethod') ? undefined : ChangeContactMethodFromJSON(json['changedMethod']),
        'changedByUserSetting': !exists(json, 'changedByUserSetting') ? undefined : ChangeContactByUserSettingFromJSON(json['changedByUserSetting']),
        'changedByUrlItems': !exists(json, 'changedByUrlItems') ? undefined : (json['changedByUrlItems'] as Array<any>).map(ChangeWebContactByUrlSettingFromJSON),
        'subRequests': !exists(json, 'subRequests') ? undefined : (json['subRequests'] as Array<any>).map(ChangeWebContactSubRequestFromJSON),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'serviceId': !exists(json, 'serviceId') ? undefined : json['serviceId'],
        'department': !exists(json, 'department') ? undefined : json['department'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'notesToApprovers': !exists(json, 'notesToApprovers') ? undefined : json['notesToApprovers'],
        'questionnaireId': !exists(json, 'questionnaireId') ? undefined : json['questionnaireId'],
        'metadatas': !exists(json, 'metadatas') ? undefined : (json['metadatas'] as Array<any>).map(RequestMetadataFromJSON),
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'type': !exists(json, 'type') ? undefined : ServiceTypeFromJSON(json['type']),
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
        'requester': !exists(json, 'requester') ? undefined : json['requester'],
        'status': !exists(json, 'status') ? undefined : RequestStatusFromJSON(json['status']),
        'progressStatus': !exists(json, 'progressStatus') ? undefined : json['progressStatus'],
        'progressStatusDescription': !exists(json, 'progressStatusDescription') ? undefined : json['progressStatusDescription'],
        'submittedTime': !exists(json, 'submittedTime') ? undefined : new Date(json['submittedTime']),
        'lastUpdated': !exists(json, 'lastUpdated') ? undefined : new Date(json['lastUpdated']),
        'createdTime': !exists(json, 'createdTime') ? undefined : new Date(json['createdTime']),
        'assignTo': !exists(json, 'assignTo') ? undefined : json['assignTo'],
        'fullPath': !exists(json, 'fullPath') ? undefined : json['fullPath'],
    };
}

export function ChangeWebContactRequestToJSON(value?: ChangeWebContactRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changedMethod': ChangeContactMethodToJSON(value.changedMethod),
        'changedByUserSetting': ChangeContactByUserSettingToJSON(value.changedByUserSetting),
        'changedByUrlItems': value.changedByUrlItems == null ? undefined : (value.changedByUrlItems as Array<any>).map(ChangeWebContactByUrlSettingToJSON),
        'subRequests': value.subRequests == null ? undefined : (value.subRequests as Array<any>).map(ChangeWebContactSubRequestToJSON),
        'id': value.id,
        'serviceId': value.serviceId,
        'department': value.department,
        'summary': value.summary,
        'notesToApprovers': value.notesToApprovers,
        'questionnaireId': value.questionnaireId,
        'metadatas': value.metadatas == null ? undefined : (value.metadatas as Array<any>).map(RequestMetadataToJSON),
        'ticketNumber': value.ticketNumber,
        'type': ServiceTypeToJSON(value.type),
        'requester': value.requester,
        'status': RequestStatusToJSON(value.status),
        'submittedTime': value.submittedTime == null ? undefined : value.submittedTime.toISOString(),
        'lastUpdated': value.lastUpdated == null ? undefined : value.lastUpdated.toISOString(),
        'createdTime': value.createdTime == null ? undefined : value.createdTime.toISOString(),
        'assignTo': value.assignTo,
        'fullPath': value.fullPath,
    };
}

