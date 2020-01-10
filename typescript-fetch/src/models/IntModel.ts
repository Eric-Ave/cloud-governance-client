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
/**
 * 
 * @export
 * @interface IntModel
 */
export interface IntModel {
    /**
     * 
     * @type {number}
     * @memberof IntModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof IntModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IntModel
     */
    description?: string | null;
}

export function IntModelFromJSON(json: any): IntModel {
    return IntModelFromJSONTyped(json, false);
}

export function IntModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function IntModelToJSON(value?: IntModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
    };
}

