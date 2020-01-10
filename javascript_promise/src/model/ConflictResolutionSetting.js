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
    define(['ApiClient', 'model/ConflictSolutionType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConflictSolutionType'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ConflictResolutionSetting = factory(root.CgClient.ApiClient, root.CgClient.ConflictSolutionType);
  }
}(this, function(ApiClient, ConflictSolutionType) {
  'use strict';



  /**
   * The ConflictResolutionSetting model module.
   * @module model/ConflictResolutionSetting
   * @version 1.0
   */

  /**
   * Constructs a new <code>ConflictResolutionSetting</code>.
   * @alias module:model/ConflictResolutionSetting
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ConflictResolutionSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConflictResolutionSetting} obj Optional instance to populate.
   * @return {module:model/ConflictResolutionSetting} The populated <code>ConflictResolutionSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('containerConflictSolution')) {
        obj['containerConflictSolution'] = ConflictSolutionType.constructFromObject(data['containerConflictSolution']);
      }
      if (data.hasOwnProperty('isCheckLowerObject')) {
        obj['isCheckLowerObject'] = ApiClient.convertToType(data['isCheckLowerObject'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableContentConflictResolution')) {
        obj['isEnableContentConflictResolution'] = ApiClient.convertToType(data['isEnableContentConflictResolution'], 'Boolean');
      }
      if (data.hasOwnProperty('contentConflictSolution')) {
        obj['contentConflictSolution'] = ConflictSolutionType.constructFromObject(data['contentConflictSolution']);
      }
      if (data.hasOwnProperty('appConflictSolution')) {
        obj['appConflictSolution'] = ConflictSolutionType.constructFromObject(data['appConflictSolution']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ConflictSolutionType} containerConflictSolution
   */
  exports.prototype['containerConflictSolution'] = undefined;
  /**
   * @member {Boolean} isCheckLowerObject
   */
  exports.prototype['isCheckLowerObject'] = undefined;
  /**
   * @member {Boolean} isEnableContentConflictResolution
   */
  exports.prototype['isEnableContentConflictResolution'] = undefined;
  /**
   * @member {module:model/ConflictSolutionType} contentConflictSolution
   */
  exports.prototype['contentConflictSolution'] = undefined;
  /**
   * @member {module:model/ConflictSolutionType} appConflictSolution
   */
  exports.prototype['appConflictSolution'] = undefined;



  return exports;
}));

