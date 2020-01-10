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
    ApprovalAction,
    ApprovalActionFromJSON,
    ApprovalActionFromJSONTyped,
    ApprovalActionToJSON,
} from './';

/**
 * 
 * @export
 * @interface ClonePermissionSecuritySearchResult
 */
export interface ClonePermissionSecuritySearchResult {
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    permissionsAfterClone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    identityName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    objectUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    objectTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    objectType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    readonly objectTypeDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    accountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    readonly accountTypeDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    sharePointGroup?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    permissionLevels?: string | null;
    /**
     * 
     * @type {ApprovalAction}
     * @memberof ClonePermissionSecuritySearchResult
     */
    action?: ApprovalAction;
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionSecuritySearchResult
     */
    readonly accessType?: string | null;
}

export function ClonePermissionSecuritySearchResultFromJSON(json: any): ClonePermissionSecuritySearchResult {
    return ClonePermissionSecuritySearchResultFromJSONTyped(json, false);
}

export function ClonePermissionSecuritySearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClonePermissionSecuritySearchResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permissionsAfterClone': !exists(json, 'permissionsAfterClone') ? undefined : json['permissionsAfterClone'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'identityName': !exists(json, 'identityName') ? undefined : json['identityName'],
        'objectUrl': !exists(json, 'objectUrl') ? undefined : json['objectUrl'],
        'objectTitle': !exists(json, 'objectTitle') ? undefined : json['objectTitle'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
        'objectTypeDescription': !exists(json, 'objectTypeDescription') ? undefined : json['objectTypeDescription'],
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'accountTypeDescription': !exists(json, 'accountTypeDescription') ? undefined : json['accountTypeDescription'],
        'sharePointGroup': !exists(json, 'sharePointGroup') ? undefined : json['sharePointGroup'],
        'permissionLevels': !exists(json, 'permissionLevels') ? undefined : json['permissionLevels'],
        'action': !exists(json, 'action') ? undefined : ApprovalActionFromJSON(json['action']),
        'accessType': !exists(json, 'accessType') ? undefined : json['accessType'],
    };
}

export function ClonePermissionSecuritySearchResultToJSON(value?: ClonePermissionSecuritySearchResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permissionsAfterClone': value.permissionsAfterClone,
        'id': value.id,
        'displayName': value.displayName,
        'identityName': value.identityName,
        'objectUrl': value.objectUrl,
        'objectTitle': value.objectTitle,
        'objectType': value.objectType,
        'accountType': value.accountType,
        'sharePointGroup': value.sharePointGroup,
        'permissionLevels': value.permissionLevels,
        'action': ApprovalActionToJSON(value.action),
    };
}

