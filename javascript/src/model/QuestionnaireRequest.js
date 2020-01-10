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
import QuestionRequest from './QuestionRequest';

/**
 * The QuestionnaireRequest model module.
 * @module model/QuestionnaireRequest
 * @version 1.0
 */
class QuestionnaireRequest {
    /**
     * Constructs a new <code>QuestionnaireRequest</code>.
     * @alias module:model/QuestionnaireRequest
     */
    constructor() { 
        
        QuestionnaireRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuestionnaireRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuestionnaireRequest} obj Optional instance to populate.
     * @return {module:model/QuestionnaireRequest} The populated <code>QuestionnaireRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuestionnaireRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('questions')) {
                obj['questions'] = ApiClient.convertToType(data['questions'], [QuestionRequest]);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
QuestionnaireRequest.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/QuestionRequest>} questions
 */
QuestionnaireRequest.prototype['questions'] = undefined;

/**
 * @member {Array.<String>} services
 */
QuestionnaireRequest.prototype['services'] = undefined;






export default QuestionnaireRequest;
