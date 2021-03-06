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
    define(['ApiClient', 'model/ApiUser', 'model/GroupOwnerType', 'model/GroupUser', 'model/PermissionLevel', 'model/SharePointBuildInGroupType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUser'), require('./GroupOwnerType'), require('./GroupUser'), require('./PermissionLevel'), require('./SharePointBuildInGroupType'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.RequestGroupWithPermissions = factory(root.CgClient.ApiClient, root.CgClient.ApiUser, root.CgClient.GroupOwnerType, root.CgClient.GroupUser, root.CgClient.PermissionLevel, root.CgClient.SharePointBuildInGroupType);
  }
}(this, function(ApiClient, ApiUser, GroupOwnerType, GroupUser, PermissionLevel, SharePointBuildInGroupType) {
  'use strict';



  /**
   * The RequestGroupWithPermissions model module.
   * @module model/RequestGroupWithPermissions
   * @version 1.0
   */

  /**
   * Constructs a new <code>RequestGroupWithPermissions</code>.
   * @alias module:model/RequestGroupWithPermissions
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RequestGroupWithPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestGroupWithPermissions} obj Optional instance to populate.
   * @return {module:model/RequestGroupWithPermissions} The populated <code>RequestGroupWithPermissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [GroupUser]);
      }
      if (data.hasOwnProperty('permissionLevels')) {
        obj['permissionLevels'] = ApiClient.convertToType(data['permissionLevels'], [PermissionLevel]);
      }
      if (data.hasOwnProperty('groupOwner')) {
        obj['groupOwner'] = ApiUser.constructFromObject(data['groupOwner']);
      }
      if (data.hasOwnProperty('groupOwnerType')) {
        obj['groupOwnerType'] = GroupOwnerType.constructFromObject(data['groupOwnerType']);
      }
      if (data.hasOwnProperty('buildInGroupType')) {
        obj['buildInGroupType'] = SharePointBuildInGroupType.constructFromObject(data['buildInGroupType']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/GroupUser>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {Array.<module:model/PermissionLevel>} permissionLevels
   */
  exports.prototype['permissionLevels'] = undefined;
  /**
   * @member {module:model/ApiUser} groupOwner
   */
  exports.prototype['groupOwner'] = undefined;
  /**
   * @member {module:model/GroupOwnerType} groupOwnerType
   */
  exports.prototype['groupOwnerType'] = undefined;
  /**
   * @member {module:model/SharePointBuildInGroupType} buildInGroupType
   */
  exports.prototype['buildInGroupType'] = undefined;



  return exports;
}));


