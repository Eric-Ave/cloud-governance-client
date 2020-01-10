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
 * None=0, Authentication=1, NoAuthentication=2, </br>
 * @export
 * @enum {string}
 */
export enum ExternalUserType {
    None = 'None',
    Authentication = 'Authentication',
    NoAuthentication = 'NoAuthentication'
}

export function ExternalUserTypeFromJSON(json: any): ExternalUserType {
    return ExternalUserTypeFromJSONTyped(json, false);
}

export function ExternalUserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalUserType {
    return json as ExternalUserType;
}

export function ExternalUserTypeToJSON(value?: ExternalUserType): any {
    return value as any;
}
