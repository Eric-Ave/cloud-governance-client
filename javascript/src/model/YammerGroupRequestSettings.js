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
import YammerGroupJoinType from './YammerGroupJoinType';
import YammerGroupType from './YammerGroupType';

/**
 * The YammerGroupRequestSettings model module.
 * @module model/YammerGroupRequestSettings
 * @version 1.0
 */
class YammerGroupRequestSettings {
    /**
     * Constructs a new <code>YammerGroupRequestSettings</code>.
     * @alias module:model/YammerGroupRequestSettings
     */
    constructor() { 
        
        YammerGroupRequestSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>YammerGroupRequestSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/YammerGroupRequestSettings} obj Optional instance to populate.
     * @return {module:model/YammerGroupRequestSettings} The populated <code>YammerGroupRequestSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new YammerGroupRequestSettings();

            if (data.hasOwnProperty('nameOrId')) {
                obj['nameOrId'] = ApiClient.convertToType(data['nameOrId'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = YammerGroupType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('joinType')) {
                obj['joinType'] = YammerGroupJoinType.constructFromObject(data['joinType']);
            }
            if (data.hasOwnProperty('isListInDirectory')) {
                obj['isListInDirectory'] = ApiClient.convertToType(data['isListInDirectory'], 'Boolean');
            }
            if (data.hasOwnProperty('isGroupAlreadyExisted')) {
                obj['isGroupAlreadyExisted'] = ApiClient.convertToType(data['isGroupAlreadyExisted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} nameOrId
 */
YammerGroupRequestSettings.prototype['nameOrId'] = undefined;

/**
 * @member {String} description
 */
YammerGroupRequestSettings.prototype['description'] = undefined;

/**
 * @member {module:model/YammerGroupType} type
 */
YammerGroupRequestSettings.prototype['type'] = undefined;

/**
 * @member {module:model/YammerGroupJoinType} joinType
 */
YammerGroupRequestSettings.prototype['joinType'] = undefined;

/**
 * @member {Boolean} isListInDirectory
 */
YammerGroupRequestSettings.prototype['isListInDirectory'] = undefined;

/**
 * @member {Boolean} isGroupAlreadyExisted
 */
YammerGroupRequestSettings.prototype['isGroupAlreadyExisted'] = undefined;






export default YammerGroupRequestSettings;
