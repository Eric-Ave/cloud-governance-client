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
import ApiUser from './ApiUser';
import AssignBy from './AssignBy';
import CommonStatus from './CommonStatus';
import CustomActivityInfo from './CustomActivityInfo';
import CustomMetadata from './CustomMetadata';
import ServiceType from './ServiceType';

/**
 * The ChangeListSettingService model module.
 * @module model/ChangeListSettingService
 * @version 1.0
 */
class ChangeListSettingService {
    /**
     * Constructs a new <code>ChangeListSettingService</code>.
     * @alias module:model/ChangeListSettingService
     */
    constructor() { 
        
        ChangeListSettingService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeListSettingService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeListSettingService} obj Optional instance to populate.
     * @return {module:model/ChangeListSettingService} The populated <code>ChangeListSettingService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeListSettingService();

            if (data.hasOwnProperty('isEnableChangeTitle')) {
                obj['isEnableChangeTitle'] = ApiClient.convertToType(data['isEnableChangeTitle'], 'Boolean');
            }
            if (data.hasOwnProperty('isEnableChangeDescription')) {
                obj['isEnableChangeDescription'] = ApiClient.convertToType(data['isEnableChangeDescription'], 'Boolean');
            }
            if (data.hasOwnProperty('isEnableChangeQuickLaunch')) {
                obj['isEnableChangeQuickLaunch'] = ApiClient.convertToType(data['isEnableChangeQuickLaunch'], 'Boolean');
            }
            if (data.hasOwnProperty('isEnableChangeVersion')) {
                obj['isEnableChangeVersion'] = ApiClient.convertToType(data['isEnableChangeVersion'], 'Boolean');
            }
            if (data.hasOwnProperty('departmentAssignBy')) {
                obj['departmentAssignBy'] = AssignBy.constructFromObject(data['departmentAssignBy']);
            }
            if (data.hasOwnProperty('metadatas')) {
                obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [CustomMetadata]);
            }
            if (data.hasOwnProperty('hideRequestSummary')) {
                obj['hideRequestSummary'] = ApiClient.convertToType(data['hideRequestSummary'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ServiceType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('loadDepartmentFromUps')) {
                obj['loadDepartmentFromUps'] = ApiClient.convertToType(data['loadDepartmentFromUps'], 'Boolean');
            }
            if (data.hasOwnProperty('departments')) {
                obj['departments'] = ApiClient.convertToType(data['departments'], ['String']);
            }
            if (data.hasOwnProperty('serviceContact')) {
                obj['serviceContact'] = ApiUser.constructFromObject(data['serviceContact']);
            }
            if (data.hasOwnProperty('serviceAdminContact')) {
                obj['serviceAdminContact'] = ApiUser.constructFromObject(data['serviceAdminContact']);
            }
            if (data.hasOwnProperty('approversContainManagerRole')) {
                obj['approversContainManagerRole'] = ApiClient.convertToType(data['approversContainManagerRole'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CommonStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('showServiceInCatalog')) {
                obj['showServiceInCatalog'] = ApiClient.convertToType(data['showServiceInCatalog'], 'Boolean');
            }
            if (data.hasOwnProperty('customActivity')) {
                obj['customActivity'] = CustomActivityInfo.constructFromObject(data['customActivity']);
            }
            if (data.hasOwnProperty('approvalProcessId')) {
                obj['approvalProcessId'] = ApiClient.convertToType(data['approvalProcessId'], 'String');
            }
            if (data.hasOwnProperty('languageId')) {
                obj['languageId'] = ApiClient.convertToType(data['languageId'], 'Number');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isEnableChangeTitle
 */
ChangeListSettingService.prototype['isEnableChangeTitle'] = undefined;

/**
 * @member {Boolean} isEnableChangeDescription
 */
ChangeListSettingService.prototype['isEnableChangeDescription'] = undefined;

/**
 * @member {Boolean} isEnableChangeQuickLaunch
 */
ChangeListSettingService.prototype['isEnableChangeQuickLaunch'] = undefined;

/**
 * @member {Boolean} isEnableChangeVersion
 */
ChangeListSettingService.prototype['isEnableChangeVersion'] = undefined;

/**
 * @member {module:model/AssignBy} departmentAssignBy
 */
ChangeListSettingService.prototype['departmentAssignBy'] = undefined;

/**
 * @member {Array.<module:model/CustomMetadata>} metadatas
 */
ChangeListSettingService.prototype['metadatas'] = undefined;

/**
 * @member {Boolean} hideRequestSummary
 */
ChangeListSettingService.prototype['hideRequestSummary'] = undefined;

/**
 * @member {String} id
 */
ChangeListSettingService.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ChangeListSettingService.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ChangeListSettingService.prototype['description'] = undefined;

/**
 * @member {module:model/ServiceType} type
 */
ChangeListSettingService.prototype['type'] = undefined;

/**
 * @member {String} department
 */
ChangeListSettingService.prototype['department'] = undefined;

/**
 * @member {Boolean} loadDepartmentFromUps
 */
ChangeListSettingService.prototype['loadDepartmentFromUps'] = undefined;

/**
 * @member {Array.<String>} departments
 */
ChangeListSettingService.prototype['departments'] = undefined;

/**
 * @member {module:model/ApiUser} serviceContact
 */
ChangeListSettingService.prototype['serviceContact'] = undefined;

/**
 * @member {module:model/ApiUser} serviceAdminContact
 */
ChangeListSettingService.prototype['serviceAdminContact'] = undefined;

/**
 * @member {Boolean} approversContainManagerRole
 */
ChangeListSettingService.prototype['approversContainManagerRole'] = undefined;

/**
 * @member {module:model/CommonStatus} status
 */
ChangeListSettingService.prototype['status'] = undefined;

/**
 * @member {Boolean} showServiceInCatalog
 */
ChangeListSettingService.prototype['showServiceInCatalog'] = undefined;

/**
 * @member {module:model/CustomActivityInfo} customActivity
 */
ChangeListSettingService.prototype['customActivity'] = undefined;

/**
 * @member {String} approvalProcessId
 */
ChangeListSettingService.prototype['approvalProcessId'] = undefined;

/**
 * @member {Number} languageId
 */
ChangeListSettingService.prototype['languageId'] = undefined;

/**
 * @member {String} categoryId
 */
ChangeListSettingService.prototype['categoryId'] = undefined;






export default ChangeListSettingService;
