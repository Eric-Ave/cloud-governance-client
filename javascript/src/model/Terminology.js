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

/**
 * The Terminology model module.
 * @module model/Terminology
 * @version 1.0
 */
class Terminology {
    /**
     * Constructs a new <code>Terminology</code>.
     * @alias module:model/Terminology
     */
    constructor() { 
        
        Terminology.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Terminology</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Terminology} obj Optional instance to populate.
     * @return {module:model/Terminology} The populated <code>Terminology</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Terminology();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Key
 */
Terminology.prototype['Key'] = undefined;

/**
 * @member {String} Value
 */
Terminology.prototype['Value'] = undefined;






export default Terminology;
