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
 * @interface ChangeSiteContactValidateResult
 */
export interface ChangeSiteContactValidateResult {
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactValidateResult
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactValidateResult
     */
    siteUrl?: string | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeSiteContactValidateResult
     */
    primaryContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeSiteContactValidateResult
     */
    secondaryContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeSiteContactValidateResult
     */
    primaryAdministrator?: ApiUser;
    /**
     * 
     * @type {Array<ApiUser>}
     * @memberof ChangeSiteContactValidateResult
     */
    additionalAdministrators?: Array<ApiUser> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeSiteContactValidateResult
     */
    readonly isValid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactValidateResult
     */
    errorMessage?: string | null;
}

export function ChangeSiteContactValidateResultFromJSON(json: any): ChangeSiteContactValidateResult {
    return ChangeSiteContactValidateResultFromJSONTyped(json, false);
}

export function ChangeSiteContactValidateResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeSiteContactValidateResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'siteUrl': !exists(json, 'siteUrl') ? undefined : json['siteUrl'],
        'primaryContact': !exists(json, 'primaryContact') ? undefined : ApiUserFromJSON(json['primaryContact']),
        'secondaryContact': !exists(json, 'secondaryContact') ? undefined : ApiUserFromJSON(json['secondaryContact']),
        'primaryAdministrator': !exists(json, 'primaryAdministrator') ? undefined : ApiUserFromJSON(json['primaryAdministrator']),
        'additionalAdministrators': !exists(json, 'additionalAdministrators') ? undefined : (json['additionalAdministrators'] as Array<any>).map(ApiUserFromJSON),
        'isValid': !exists(json, 'isValid') ? undefined : json['isValid'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
    };
}

export function ChangeSiteContactValidateResultToJSON(value?: ChangeSiteContactValidateResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'siteId': value.siteId,
        'siteUrl': value.siteUrl,
        'primaryContact': ApiUserToJSON(value.primaryContact),
        'secondaryContact': ApiUserToJSON(value.secondaryContact),
        'primaryAdministrator': ApiUserToJSON(value.primaryAdministrator),
        'additionalAdministrators': value.additionalAdministrators == null ? undefined : (value.additionalAdministrators as Array<any>).map(ApiUserToJSON),
        'errorMessage': value.errorMessage,
    };
}

