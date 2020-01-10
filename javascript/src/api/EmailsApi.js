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


import ApiClient from "../ApiClient";
import EmailTemplateType from '../model/EmailTemplateType';
import GuidModel from '../model/GuidModel';

/**
* Emails service.
* @module api/EmailsApi
* @version 1.0
*/
export default class EmailsApi {

    /**
    * Constructs a new EmailsApi. 
    * @alias module:api/EmailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getEmailTemplate operation.
     * @callback module:api/EmailsApi~getEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GuidModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get email templates by email template type
     * @param {module:model/EmailTemplateType} type 
     * @param {module:api/EmailsApi~getEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GuidModel>}
     */
    getEmailTemplate(type, callback) {
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getEmailTemplate");
      }

      let pathParams = {
        'type': type
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [GuidModel];
      return this.apiClient.callApi(
        '/emails/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}