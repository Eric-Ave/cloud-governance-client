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
    CustomMetadata,
    CustomMetadataFromJSON,
    CustomMetadataFromJSONTyped,
    CustomMetadataToJSON,
    PolicyRef,
    PolicyRefFromJSON,
    PolicyRefFromJSONTyped,
    PolicyRefToJSON,
} from './';

/**
 * 
 * @export
 * @interface AutoImportProfileRef
 */
export interface AutoImportProfileRef {
    /**
     * 
     * @type {string}
     * @memberof AutoImportProfileRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AutoImportProfileRef
     */
    objectName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AutoImportProfileRef
     */
    notesToPrimaryContact?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AutoImportProfileRef
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AutoImportProfileRef
     */
    description?: string | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof AutoImportProfileRef
     */
    defaultSecondaryContact?: ApiUser;
    /**
     * 
     * @type {string}
     * @memberof AutoImportProfileRef
     */
    defaultPolicyId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AutoImportProfileRef
     */
    departments?: Array<string> | null;
    /**
     * 
     * @type {Array<PolicyRef>}
     * @memberof AutoImportProfileRef
     */
    policies?: Array<PolicyRef> | null;
    /**
     * 
     * @type {boolean}
     * @memberof AutoImportProfileRef
     */
    loadDepartmentFromUps?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AutoImportProfileRef
     */
    isLastStep?: boolean;
    /**
     * 
     * @type {Array<CustomMetadata>}
     * @memberof AutoImportProfileRef
     */
    metadatas?: Array<CustomMetadata> | null;
}

export function AutoImportProfileRefFromJSON(json: any): AutoImportProfileRef {
    return AutoImportProfileRefFromJSONTyped(json, false);
}

export function AutoImportProfileRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoImportProfileRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'objectName': !exists(json, 'objectName') ? undefined : json['objectName'],
        'notesToPrimaryContact': !exists(json, 'notesToPrimaryContact') ? undefined : json['notesToPrimaryContact'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'defaultSecondaryContact': !exists(json, 'defaultSecondaryContact') ? undefined : ApiUserFromJSON(json['defaultSecondaryContact']),
        'defaultPolicyId': !exists(json, 'defaultPolicyId') ? undefined : json['defaultPolicyId'],
        'departments': !exists(json, 'departments') ? undefined : json['departments'],
        'policies': !exists(json, 'policies') ? undefined : (json['policies'] as Array<any>).map(PolicyRefFromJSON),
        'loadDepartmentFromUps': !exists(json, 'loadDepartmentFromUps') ? undefined : json['loadDepartmentFromUps'],
        'isLastStep': !exists(json, 'isLastStep') ? undefined : json['isLastStep'],
        'metadatas': !exists(json, 'metadatas') ? undefined : (json['metadatas'] as Array<any>).map(CustomMetadataFromJSON),
    };
}

export function AutoImportProfileRefToJSON(value?: AutoImportProfileRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'objectName': value.objectName,
        'notesToPrimaryContact': value.notesToPrimaryContact,
        'name': value.name,
        'description': value.description,
        'defaultSecondaryContact': ApiUserToJSON(value.defaultSecondaryContact),
        'defaultPolicyId': value.defaultPolicyId,
        'departments': value.departments,
        'policies': value.policies == null ? undefined : (value.policies as Array<any>).map(PolicyRefToJSON),
        'loadDepartmentFromUps': value.loadDepartmentFromUps,
        'isLastStep': value.isLastStep,
        'metadatas': value.metadatas == null ? undefined : (value.metadatas as Array<any>).map(CustomMetadataToJSON),
    };
}

