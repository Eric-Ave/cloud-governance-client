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

/**
 * Copy=0, Move=1
 * @export
 * @enum {string}
 */
export enum ContentMoveMethod {
    Copy = 'Copy',
    Move = 'Move'
}

export function ContentMoveMethodFromJSON(json: any): ContentMoveMethod {
    return ContentMoveMethodFromJSONTyped(json, false);
}

export function ContentMoveMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentMoveMethod {
    return json as ContentMoveMethod;
}

export function ContentMoveMethodToJSON(value?: ContentMoveMethod): any {
    return value as any;
}
