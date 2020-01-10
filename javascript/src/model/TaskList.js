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
import DueDateType from './DueDateType';
import ServiceType from './ServiceType';
import TaskResult from './TaskResult';
import TaskType from './TaskType';

/**
 * The TaskList model module.
 * @module model/TaskList
 * @version 1.0
 */
class TaskList {
    /**
     * Constructs a new <code>TaskList</code>.
     * @alias module:model/TaskList
     */
    constructor() { 
        
        TaskList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskList} obj Optional instance to populate.
     * @return {module:model/TaskList} The populated <code>TaskList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskList();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('requester')) {
                obj['requester'] = ApiClient.convertToType(data['requester'], 'String');
            }
            if (data.hasOwnProperty('requestTicketNumber')) {
                obj['requestTicketNumber'] = ApiClient.convertToType(data['requestTicketNumber'], 'Number');
            }
            if (data.hasOwnProperty('requesterDisplayName')) {
                obj['requesterDisplayName'] = ApiClient.convertToType(data['requesterDisplayName'], 'String');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('dueDateType')) {
                obj['dueDateType'] = DueDateType.constructFromObject(data['dueDateType']);
            }
            if (data.hasOwnProperty('serviceType')) {
                obj['serviceType'] = ServiceType.constructFromObject(data['serviceType']);
            }
            if (data.hasOwnProperty('serviceTypeDescription')) {
                obj['serviceTypeDescription'] = ApiClient.convertToType(data['serviceTypeDescription'], 'String');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('taskType')) {
                obj['taskType'] = TaskType.constructFromObject(data['taskType']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TaskResult.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusDescription')) {
                obj['statusDescription'] = ApiClient.convertToType(data['statusDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TaskList.prototype['id'] = undefined;

/**
 * @member {String} title
 */
TaskList.prototype['title'] = undefined;

/**
 * @member {String} requester
 */
TaskList.prototype['requester'] = undefined;

/**
 * @member {Number} requestTicketNumber
 */
TaskList.prototype['requestTicketNumber'] = undefined;

/**
 * @member {String} requesterDisplayName
 */
TaskList.prototype['requesterDisplayName'] = undefined;

/**
 * @member {Date} dueDate
 */
TaskList.prototype['dueDate'] = undefined;

/**
 * @member {module:model/DueDateType} dueDateType
 */
TaskList.prototype['dueDateType'] = undefined;

/**
 * @member {module:model/ServiceType} serviceType
 */
TaskList.prototype['serviceType'] = undefined;

/**
 * @member {String} serviceTypeDescription
 */
TaskList.prototype['serviceTypeDescription'] = undefined;

/**
 * @member {Date} createdTime
 */
TaskList.prototype['createdTime'] = undefined;

/**
 * @member {module:model/TaskType} taskType
 */
TaskList.prototype['taskType'] = undefined;

/**
 * @member {module:model/TaskResult} status
 */
TaskList.prototype['status'] = undefined;

/**
 * @member {String} statusDescription
 */
TaskList.prototype['statusDescription'] = undefined;






export default TaskList;
