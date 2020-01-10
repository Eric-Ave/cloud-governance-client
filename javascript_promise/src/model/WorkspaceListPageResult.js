/**
 * Cloud Governance Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/WorkspaceList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkspaceList'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.WorkspaceListPageResult = factory(root.CgClient.ApiClient, root.CgClient.WorkspaceList);
  }
}(this, function(ApiClient, WorkspaceList) {
  'use strict';



  /**
   * The WorkspaceListPageResult model module.
   * @module model/WorkspaceListPageResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>WorkspaceListPageResult</code>.
   * @alias module:model/WorkspaceListPageResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>WorkspaceListPageResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceListPageResult} obj Optional instance to populate.
   * @return {module:model/WorkspaceListPageResult} The populated <code>WorkspaceListPageResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], [WorkspaceList]);
      }
      if (data.hasOwnProperty('nextLink')) {
        obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/WorkspaceList>} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {String} nextLink
   */
  exports.prototype['nextLink'] = undefined;



  return exports;
}));

