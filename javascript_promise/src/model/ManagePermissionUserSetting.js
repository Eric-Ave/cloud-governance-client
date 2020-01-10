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
    define(['ApiClient', 'model/UserLevelRestrictionType', 'model/UserManagementSourceType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserLevelRestrictionType'), require('./UserManagementSourceType'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ManagePermissionUserSetting = factory(root.CgClient.ApiClient, root.CgClient.UserLevelRestrictionType, root.CgClient.UserManagementSourceType);
  }
}(this, function(ApiClient, UserLevelRestrictionType, UserManagementSourceType) {
  'use strict';



  /**
   * The ManagePermissionUserSetting model module.
   * @module model/ManagePermissionUserSetting
   * @version 1.0
   */

  /**
   * Constructs a new <code>ManagePermissionUserSetting</code>.
   * @alias module:model/ManagePermissionUserSetting
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ManagePermissionUserSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagePermissionUserSetting} obj Optional instance to populate.
   * @return {module:model/ManagePermissionUserSetting} The populated <code>ManagePermissionUserSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userLevelRestrictionType')) {
        obj['userLevelRestrictionType'] = UserLevelRestrictionType.constructFromObject(data['userLevelRestrictionType']);
      }
      if (data.hasOwnProperty('userManagementSourceType')) {
        obj['userManagementSourceType'] = UserManagementSourceType.constructFromObject(data['userManagementSourceType']);
      }
      if (data.hasOwnProperty('isEnableShowAADGroupMembers')) {
        obj['isEnableShowAADGroupMembers'] = ApiClient.convertToType(data['isEnableShowAADGroupMembers'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UserLevelRestrictionType} userLevelRestrictionType
   */
  exports.prototype['userLevelRestrictionType'] = undefined;
  /**
   * @member {module:model/UserManagementSourceType} userManagementSourceType
   */
  exports.prototype['userManagementSourceType'] = undefined;
  /**
   * @member {Boolean} isEnableShowAADGroupMembers
   */
  exports.prototype['isEnableShowAADGroupMembers'] = undefined;



  return exports;
}));

