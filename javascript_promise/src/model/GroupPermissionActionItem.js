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
    define(['ApiClient', 'model/PermissionActionType', 'model/PrincipalType', 'model/RecertificationActionType', 'model/UserAccessType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionActionType'), require('./PrincipalType'), require('./RecertificationActionType'), require('./UserAccessType'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.GroupPermissionActionItem = factory(root.CgClient.ApiClient, root.CgClient.PermissionActionType, root.CgClient.PrincipalType, root.CgClient.RecertificationActionType, root.CgClient.UserAccessType);
  }
}(this, function(ApiClient, PermissionActionType, PrincipalType, RecertificationActionType, UserAccessType) {
  'use strict';



  /**
   * The GroupPermissionActionItem model module.
   * @module model/GroupPermissionActionItem
   * @version 1.0
   */

  /**
   * Constructs a new <code>GroupPermissionActionItem</code>.
   * @alias module:model/GroupPermissionActionItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GroupPermissionActionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupPermissionActionItem} obj Optional instance to populate.
   * @return {module:model/GroupPermissionActionItem} The populated <code>GroupPermissionActionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('instanceId')) {
        obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = RecertificationActionType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('taskId')) {
        obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
      }
      if (data.hasOwnProperty('actionType')) {
        obj['actionType'] = PermissionActionType.constructFromObject(data['actionType']);
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('identityName')) {
        obj['identityName'] = ApiClient.convertToType(data['identityName'], 'String');
      }
      if (data.hasOwnProperty('permissionLevel')) {
        obj['permissionLevel'] = ApiClient.convertToType(data['permissionLevel'], 'String');
      }
      if (data.hasOwnProperty('permissionIds')) {
        obj['permissionIds'] = ApiClient.convertToType(data['permissionIds'], ['Number']);
      }
      if (data.hasOwnProperty('memberId')) {
        obj['memberId'] = ApiClient.convertToType(data['memberId'], 'Number');
      }
      if (data.hasOwnProperty('titleName')) {
        obj['titleName'] = ApiClient.convertToType(data['titleName'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('sharePointGroup')) {
        obj['sharePointGroup'] = ApiClient.convertToType(data['sharePointGroup'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('idInSharepoint')) {
        obj['idInSharepoint'] = ApiClient.convertToType(data['idInSharepoint'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
      if (data.hasOwnProperty('levelDescription')) {
        obj['levelDescription'] = ApiClient.convertToType(data['levelDescription'], 'String');
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = PrincipalType.constructFromObject(data['accountType']);
      }
      if (data.hasOwnProperty('accountTypeDescription')) {
        obj['accountTypeDescription'] = ApiClient.convertToType(data['accountTypeDescription'], 'String');
      }
      if (data.hasOwnProperty('accessType')) {
        obj['accessType'] = UserAccessType.constructFromObject(data['accessType']);
      }
      if (data.hasOwnProperty('accessTypeDescription')) {
        obj['accessTypeDescription'] = ApiClient.convertToType(data['accessTypeDescription'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} instanceId
   */
  exports.prototype['instanceId'] = undefined;
  /**
   * @member {module:model/RecertificationActionType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} taskId
   */
  exports.prototype['taskId'] = undefined;
  /**
   * @member {module:model/PermissionActionType} actionType
   */
  exports.prototype['actionType'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {String} identityName
   */
  exports.prototype['identityName'] = undefined;
  /**
   * @member {String} permissionLevel
   */
  exports.prototype['permissionLevel'] = undefined;
  /**
   * @member {Array.<Number>} permissionIds
   */
  exports.prototype['permissionIds'] = undefined;
  /**
   * @member {Number} memberId
   */
  exports.prototype['memberId'] = undefined;
  /**
   * @member {String} titleName
   */
  exports.prototype['titleName'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {String} sharePointGroup
   */
  exports.prototype['sharePointGroup'] = undefined;
  /**
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * @member {String} idInSharepoint
   */
  exports.prototype['idInSharepoint'] = undefined;
  /**
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;
  /**
   * @member {String} levelDescription
   */
  exports.prototype['levelDescription'] = undefined;
  /**
   * @member {module:model/PrincipalType} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * @member {String} accountTypeDescription
   */
  exports.prototype['accountTypeDescription'] = undefined;
  /**
   * @member {module:model/UserAccessType} accessType
   */
  exports.prototype['accessType'] = undefined;
  /**
   * @member {String} accessTypeDescription
   */
  exports.prototype['accessTypeDescription'] = undefined;



  return exports;
}));

