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
import ContentMoveCommonSetting from './ContentMoveCommonSetting';
import ContentMoveMethod from './ContentMoveMethod';
import ContentMoveSPObjectMapping from './ContentMoveSPObjectMapping';
import CopyMoveSetting from './CopyMoveSetting';
import RequestMetadata from './RequestMetadata';
import RequestStatus from './RequestStatus';
import ServiceType from './ServiceType';

/**
 * The ContentMoveRequest model module.
 * @module model/ContentMoveRequest
 * @version 1.0
 */
class ContentMoveRequest {
    /**
     * Constructs a new <code>ContentMoveRequest</code>.
     * @alias module:model/ContentMoveRequest
     */
    constructor() { 
        
        ContentMoveRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentMoveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentMoveRequest} obj Optional instance to populate.
     * @return {module:model/ContentMoveRequest} The populated <code>ContentMoveRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentMoveRequest();

            if (data.hasOwnProperty('method')) {
                obj['method'] = ContentMoveMethod.constructFromObject(data['method']);
            }
            if (data.hasOwnProperty('copySettings')) {
                obj['copySettings'] = CopyMoveSetting.constructFromObject(data['copySettings']);
            }
            if (data.hasOwnProperty('moveSettings')) {
                obj['moveSettings'] = CopyMoveSetting.constructFromObject(data['moveSettings']);
            }
            if (data.hasOwnProperty('commonSettings')) {
                obj['commonSettings'] = ContentMoveCommonSetting.constructFromObject(data['commonSettings']);
            }
            if (data.hasOwnProperty('objectMappings')) {
                obj['objectMappings'] = ApiClient.convertToType(data['objectMappings'], [ContentMoveSPObjectMapping]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('notesToApprovers')) {
                obj['notesToApprovers'] = ApiClient.convertToType(data['notesToApprovers'], 'String');
            }
            if (data.hasOwnProperty('questionnaireId')) {
                obj['questionnaireId'] = ApiClient.convertToType(data['questionnaireId'], 'String');
            }
            if (data.hasOwnProperty('metadatas')) {
                obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [RequestMetadata]);
            }
            if (data.hasOwnProperty('ticketNumber')) {
                obj['ticketNumber'] = ApiClient.convertToType(data['ticketNumber'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ServiceType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('typeDescription')) {
                obj['typeDescription'] = ApiClient.convertToType(data['typeDescription'], 'String');
            }
            if (data.hasOwnProperty('requester')) {
                obj['requester'] = ApiClient.convertToType(data['requester'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = RequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('progressStatus')) {
                obj['progressStatus'] = ApiClient.convertToType(data['progressStatus'], 'Number');
            }
            if (data.hasOwnProperty('progressStatusDescription')) {
                obj['progressStatusDescription'] = ApiClient.convertToType(data['progressStatusDescription'], 'String');
            }
            if (data.hasOwnProperty('submittedTime')) {
                obj['submittedTime'] = ApiClient.convertToType(data['submittedTime'], 'Date');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('assignTo')) {
                obj['assignTo'] = ApiClient.convertToType(data['assignTo'], 'String');
            }
            if (data.hasOwnProperty('fullPath')) {
                obj['fullPath'] = ApiClient.convertToType(data['fullPath'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ContentMoveMethod} method
 */
ContentMoveRequest.prototype['method'] = undefined;

/**
 * @member {module:model/CopyMoveSetting} copySettings
 */
ContentMoveRequest.prototype['copySettings'] = undefined;

/**
 * @member {module:model/CopyMoveSetting} moveSettings
 */
ContentMoveRequest.prototype['moveSettings'] = undefined;

/**
 * @member {module:model/ContentMoveCommonSetting} commonSettings
 */
ContentMoveRequest.prototype['commonSettings'] = undefined;

/**
 * @member {Array.<module:model/ContentMoveSPObjectMapping>} objectMappings
 */
ContentMoveRequest.prototype['objectMappings'] = undefined;

/**
 * @member {String} id
 */
ContentMoveRequest.prototype['id'] = undefined;

/**
 * @member {String} serviceId
 */
ContentMoveRequest.prototype['serviceId'] = undefined;

/**
 * @member {String} department
 */
ContentMoveRequest.prototype['department'] = undefined;

/**
 * @member {String} summary
 */
ContentMoveRequest.prototype['summary'] = undefined;

/**
 * @member {String} notesToApprovers
 */
ContentMoveRequest.prototype['notesToApprovers'] = undefined;

/**
 * @member {String} questionnaireId
 */
ContentMoveRequest.prototype['questionnaireId'] = undefined;

/**
 * @member {Array.<module:model/RequestMetadata>} metadatas
 */
ContentMoveRequest.prototype['metadatas'] = undefined;

/**
 * @member {Number} ticketNumber
 */
ContentMoveRequest.prototype['ticketNumber'] = undefined;

/**
 * @member {module:model/ServiceType} type
 */
ContentMoveRequest.prototype['type'] = undefined;

/**
 * @member {String} typeDescription
 */
ContentMoveRequest.prototype['typeDescription'] = undefined;

/**
 * @member {String} requester
 */
ContentMoveRequest.prototype['requester'] = undefined;

/**
 * @member {module:model/RequestStatus} status
 */
ContentMoveRequest.prototype['status'] = undefined;

/**
 * @member {Number} progressStatus
 */
ContentMoveRequest.prototype['progressStatus'] = undefined;

/**
 * @member {String} progressStatusDescription
 */
ContentMoveRequest.prototype['progressStatusDescription'] = undefined;

/**
 * @member {Date} submittedTime
 */
ContentMoveRequest.prototype['submittedTime'] = undefined;

/**
 * @member {Date} lastUpdated
 */
ContentMoveRequest.prototype['lastUpdated'] = undefined;

/**
 * @member {Date} createdTime
 */
ContentMoveRequest.prototype['createdTime'] = undefined;

/**
 * @member {String} assignTo
 */
ContentMoveRequest.prototype['assignTo'] = undefined;

/**
 * @member {String} fullPath
 */
ContentMoveRequest.prototype['fullPath'] = undefined;






export default ContentMoveRequest;
