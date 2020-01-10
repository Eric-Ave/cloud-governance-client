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
import ExternalUserType from './ExternalUserType';
import ManagePermissionAction from './ManagePermissionAction';

/**
 * The SPUserManagementModel model module.
 * @module model/SPUserManagementModel
 * @version 1.0
 */
class SPUserManagementModel {
    /**
     * Constructs a new <code>SPUserManagementModel</code>.
     * @alias module:model/SPUserManagementModel
     */
    constructor() { 
        
        SPUserManagementModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SPUserManagementModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SPUserManagementModel} obj Optional instance to populate.
     * @return {module:model/SPUserManagementModel} The populated <code>SPUserManagementModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SPUserManagementModel();

            if (data.hasOwnProperty('identityName')) {
                obj['identityName'] = ApiClient.convertToType(data['identityName'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('isGroup')) {
                obj['isGroup'] = ApiClient.convertToType(data['isGroup'], 'Boolean');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ManagePermissionAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('externalUserType')) {
                obj['externalUserType'] = ExternalUserType.constructFromObject(data['externalUserType']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} identityName
 */
SPUserManagementModel.prototype['identityName'] = undefined;

/**
 * @member {String} displayName
 */
SPUserManagementModel.prototype['displayName'] = undefined;

/**
 * @member {Boolean} isGroup
 */
SPUserManagementModel.prototype['isGroup'] = undefined;

/**
 * @member {module:model/ManagePermissionAction} action
 */
SPUserManagementModel.prototype['action'] = undefined;

/**
 * @member {module:model/ExternalUserType} externalUserType
 */
SPUserManagementModel.prototype['externalUserType'] = undefined;






export default SPUserManagementModel;
