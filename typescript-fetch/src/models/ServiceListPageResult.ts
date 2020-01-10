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
    ServiceList,
    ServiceListFromJSON,
    ServiceListFromJSONTyped,
    ServiceListToJSON,
} from './';

/**
 * 
 * @export
 * @interface ServiceListPageResult
 */
export interface ServiceListPageResult {
    /**
     * 
     * @type {Array<ServiceList>}
     * @memberof ServiceListPageResult
     */
    value?: Array<ServiceList> | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceListPageResult
     */
    nextLink?: string | null;
}

export function ServiceListPageResultFromJSON(json: any): ServiceListPageResult {
    return ServiceListPageResultFromJSONTyped(json, false);
}

export function ServiceListPageResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceListPageResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (json['value'] as Array<any>).map(ServiceListFromJSON),
        'nextLink': !exists(json, 'nextLink') ? undefined : json['nextLink'],
    };
}

export function ServiceListPageResultToJSON(value?: ServiceListPageResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value == null ? undefined : (value.value as Array<any>).map(ServiceListToJSON),
        'nextLink': value.nextLink,
    };
}

