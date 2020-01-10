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
    LookupValue,
    LookupValueFromJSON,
    LookupValueFromJSONTyped,
    LookupValueToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserProfileMetadataSettings
 */
export interface UserProfileMetadataSettings {
    /**
     * 
     * @type {string}
     * @memberof UserProfileMetadataSettings
     */
    adminCenter?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProfileMetadataSettings
     */
    property?: string | null;
    /**
     * 
     * @type {LookupValue}
     * @memberof UserProfileMetadataSettings
     */
    value?: LookupValue;
}

export function UserProfileMetadataSettingsFromJSON(json: any): UserProfileMetadataSettings {
    return UserProfileMetadataSettingsFromJSONTyped(json, false);
}

export function UserProfileMetadataSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfileMetadataSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adminCenter': !exists(json, 'adminCenter') ? undefined : json['adminCenter'],
        'property': !exists(json, 'property') ? undefined : json['property'],
        'value': !exists(json, 'value') ? undefined : LookupValueFromJSON(json['value']),
    };
}

export function UserProfileMetadataSettingsToJSON(value?: UserProfileMetadataSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adminCenter': value.adminCenter,
        'property': value.property,
        'value': LookupValueToJSON(value.value),
    };
}

