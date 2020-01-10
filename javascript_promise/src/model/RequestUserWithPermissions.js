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
    define(['ApiClient', 'model/ApiUser', 'model/PermissionLevel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUser'), require('./PermissionLevel'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.RequestUserWithPermissions = factory(root.CgClient.ApiClient, root.CgClient.ApiUser, root.CgClient.PermissionLevel);
  }
}(this, function(ApiClient, ApiUser, PermissionLevel) {
  'use strict';



  /**
   * The RequestUserWithPermissions model module.
   * @module model/RequestUserWithPermissions
   * @version 1.0
   */

  /**
   * Constructs a new <code>RequestUserWithPermissions</code>.
   * @alias module:model/RequestUserWithPermissions
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RequestUserWithPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestUserWithPermissions} obj Optional instance to populate.
   * @return {module:model/RequestUserWithPermissions} The populated <code>RequestUserWithPermissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiUser.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('permissionLevels')) {
        obj['permissionLevels'] = ApiClient.convertToType(data['permissionLevels'], [PermissionLevel]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ApiUser} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {Array.<module:model/PermissionLevel>} permissionLevels
   */
  exports.prototype['permissionLevels'] = undefined;



  return exports;
}));

