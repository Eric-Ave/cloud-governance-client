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
    ApprovalProcessStageInfo,
    ApprovalProcessStageInfoFromJSON,
    ApprovalProcessStageInfoFromJSONTyped,
    ApprovalProcessStageInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface ApprovalProcessStageCollection
 */
export interface ApprovalProcessStageCollection {
    /**
     * 
     * @type {number}
     * @memberof ApprovalProcessStageCollection
     */
    stageCount?: number;
    /**
     * 
     * @type {ApprovalProcessStageInfo}
     * @memberof ApprovalProcessStageCollection
     */
    stageOne?: ApprovalProcessStageInfo;
    /**
     * 
     * @type {ApprovalProcessStageInfo}
     * @memberof ApprovalProcessStageCollection
     */
    stageTwo?: ApprovalProcessStageInfo;
    /**
     * 
     * @type {ApprovalProcessStageInfo}
     * @memberof ApprovalProcessStageCollection
     */
    stageThree?: ApprovalProcessStageInfo;
    /**
     * 
     * @type {string}
     * @memberof ApprovalProcessStageCollection
     */
    uniqueId?: string | null;
}

export function ApprovalProcessStageCollectionFromJSON(json: any): ApprovalProcessStageCollection {
    return ApprovalProcessStageCollectionFromJSONTyped(json, false);
}

export function ApprovalProcessStageCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApprovalProcessStageCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stageCount': !exists(json, 'stageCount') ? undefined : json['stageCount'],
        'stageOne': !exists(json, 'stageOne') ? undefined : ApprovalProcessStageInfoFromJSON(json['stageOne']),
        'stageTwo': !exists(json, 'stageTwo') ? undefined : ApprovalProcessStageInfoFromJSON(json['stageTwo']),
        'stageThree': !exists(json, 'stageThree') ? undefined : ApprovalProcessStageInfoFromJSON(json['stageThree']),
        'uniqueId': !exists(json, 'uniqueId') ? undefined : json['uniqueId'],
    };
}

export function ApprovalProcessStageCollectionToJSON(value?: ApprovalProcessStageCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stageCount': value.stageCount,
        'stageOne': ApprovalProcessStageInfoToJSON(value.stageOne),
        'stageTwo': ApprovalProcessStageInfoToJSON(value.stageTwo),
        'stageThree': ApprovalProcessStageInfoToJSON(value.stageThree),
        'uniqueId': value.uniqueId,
    };
}

