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
 *
 */

import ApiClient from '../ApiClient';
import ApiTermInfo from './ApiTermInfo';

/**
 * The ApiTermInfoPageResult model module.
 * @module model/ApiTermInfoPageResult
 * @version 1.0
 */
class ApiTermInfoPageResult {
    /**
     * Constructs a new <code>ApiTermInfoPageResult</code>.
     * @alias module:model/ApiTermInfoPageResult
     */
    constructor() { 
        
        ApiTermInfoPageResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiTermInfoPageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiTermInfoPageResult} obj Optional instance to populate.
     * @return {module:model/ApiTermInfoPageResult} The populated <code>ApiTermInfoPageResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiTermInfoPageResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [ApiTermInfo]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ApiTermInfo>} value
 */
ApiTermInfoPageResult.prototype['value'] = undefined;

/**
 * @member {String} nextLink
 */
ApiTermInfoPageResult.prototype['nextLink'] = undefined;






export default ApiTermInfoPageResult;
