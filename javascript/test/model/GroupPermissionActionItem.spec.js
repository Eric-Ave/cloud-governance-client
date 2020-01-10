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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudGovernanceApi);
  }
}(this, function(expect, CloudGovernanceApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudGovernanceApi.GroupPermissionActionItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GroupPermissionActionItem', function() {
    it('should create an instance of GroupPermissionActionItem', function() {
      // uncomment below and update the code to test GroupPermissionActionItem
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be.a(CloudGovernanceApi.GroupPermissionActionItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "instanceId")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property taskId (base name: "taskId")', function() {
      // uncomment below and update the code to test the property taskId
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property actionType (base name: "actionType")', function() {
      // uncomment below and update the code to test the property actionType
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property identityName (base name: "identityName")', function() {
      // uncomment below and update the code to test the property identityName
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property permissionLevel (base name: "permissionLevel")', function() {
      // uncomment below and update the code to test the property permissionLevel
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property permissionIds (base name: "permissionIds")', function() {
      // uncomment below and update the code to test the property permissionIds
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property titleName (base name: "titleName")', function() {
      // uncomment below and update the code to test the property titleName
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property sharePointGroup (base name: "sharePointGroup")', function() {
      // uncomment below and update the code to test the property sharePointGroup
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property idInSharepoint (base name: "idInSharepoint")', function() {
      // uncomment below and update the code to test the property idInSharepoint
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property levelDescription (base name: "levelDescription")', function() {
      // uncomment below and update the code to test the property levelDescription
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property accountTypeDescription (base name: "accountTypeDescription")', function() {
      // uncomment below and update the code to test the property accountTypeDescription
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property accessType (base name: "accessType")', function() {
      // uncomment below and update the code to test the property accessType
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

    it('should have the property accessTypeDescription (base name: "accessTypeDescription")', function() {
      // uncomment below and update the code to test the property accessTypeDescription
      //var instane = new CloudGovernanceApi.GroupPermissionActionItem();
      //expect(instance).to.be();
    });

  });

}));