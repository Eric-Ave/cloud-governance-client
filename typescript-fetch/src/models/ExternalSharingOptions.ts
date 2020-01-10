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
 * Disabled=0, VerifiedGuestUser=1, Anyone=2, </br>ExistingGuestUser=3
 * @export
 * @enum {string}
 */
export enum ExternalSharingOptions {
    Disabled = 'Disabled',
    VerifiedGuestUser = 'VerifiedGuestUser',
    Anyone = 'Anyone',
    ExistingGuestUser = 'ExistingGuestUser'
}

export function ExternalSharingOptionsFromJSON(json: any): ExternalSharingOptions {
    return ExternalSharingOptionsFromJSONTyped(json, false);
}

export function ExternalSharingOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalSharingOptions {
    return json as ExternalSharingOptions;
}

export function ExternalSharingOptionsToJSON(value?: ExternalSharingOptions): any {
    return value as any;
}
