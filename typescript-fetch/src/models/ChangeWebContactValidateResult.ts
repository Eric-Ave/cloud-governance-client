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
    ApiUser,
    ApiUserFromJSON,
    ApiUserFromJSONTyped,
    ApiUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChangeWebContactValidateResult
 */
export interface ChangeWebContactValidateResult {
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactValidateResult
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactValidateResult
     */
    siteUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactValidateResult
     */
    webId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactValidateResult
     */
    webUrl?: string | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeWebContactValidateResult
     */
    primaryContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeWebContactValidateResult
     */
    secondaryContact?: ApiUser;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeWebContactValidateResult
     */
    readonly isValid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactValidateResult
     */
    errorMessage?: string | null;
}

export function ChangeWebContactValidateResultFromJSON(json: any): ChangeWebContactValidateResult {
    return ChangeWebContactValidateResultFromJSONTyped(json, false);
}

export function ChangeWebContactValidateResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeWebContactValidateResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'siteUrl': !exists(json, 'siteUrl') ? undefined : json['siteUrl'],
        'webId': !exists(json, 'webId') ? undefined : json['webId'],
        'webUrl': !exists(json, 'webUrl') ? undefined : json['webUrl'],
        'primaryContact': !exists(json, 'primaryContact') ? undefined : ApiUserFromJSON(json['primaryContact']),
        'secondaryContact': !exists(json, 'secondaryContact') ? undefined : ApiUserFromJSON(json['secondaryContact']),
        'isValid': !exists(json, 'isValid') ? undefined : json['isValid'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
    };
}

export function ChangeWebContactValidateResultToJSON(value?: ChangeWebContactValidateResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'siteId': value.siteId,
        'siteUrl': value.siteUrl,
        'webId': value.webId,
        'webUrl': value.webUrl,
        'primaryContact': ApiUserToJSON(value.primaryContact),
        'secondaryContact': ApiUserToJSON(value.secondaryContact),
        'errorMessage': value.errorMessage,
    };
}

