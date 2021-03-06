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
    define(['ApiClient', 'model/CustomMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ChangeMetadataActionSetting = factory(root.CgClient.ApiClient, root.CgClient.CustomMetadata);
  }
}(this, function(ApiClient, CustomMetadata) {
  'use strict';



  /**
   * The ChangeMetadataActionSetting model module.
   * @module model/ChangeMetadataActionSetting
   * @version 1.0
   */

  /**
   * Constructs a new <code>ChangeMetadataActionSetting</code>.
   * @alias module:model/ChangeMetadataActionSetting
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ChangeMetadataActionSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeMetadataActionSetting} obj Optional instance to populate.
   * @return {module:model/ChangeMetadataActionSetting} The populated <code>ChangeMetadataActionSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('enableAddOrDelete')) {
        obj['enableAddOrDelete'] = ApiClient.convertToType(data['enableAddOrDelete'], 'Boolean');
      }
      if (data.hasOwnProperty('metadatas')) {
        obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [CustomMetadata]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;
  /**
   * @member {Boolean} enableAddOrDelete
   */
  exports.prototype['enableAddOrDelete'] = undefined;
  /**
   * @member {Array.<module:model/CustomMetadata>} metadatas
   */
  exports.prototype['metadatas'] = undefined;



  return exports;
}));


