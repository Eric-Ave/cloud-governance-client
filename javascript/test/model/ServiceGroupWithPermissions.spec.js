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
    instance = new CloudGovernanceApi.ServiceGroupWithPermissions();
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

  describe('ServiceGroupWithPermissions', function() {
    it('should create an instance of ServiceGroupWithPermissions', function() {
      // uncomment below and update the code to test ServiceGroupWithPermissions
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be.a(CloudGovernanceApi.ServiceGroupWithPermissions);
    });

    it('should have the property usersAssignBy (base name: "usersAssignBy")', function() {
      // uncomment below and update the code to test the property usersAssignBy
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property groupOwnerAssignBy (base name: "groupOwnerAssignBy")', function() {
      // uncomment below and update the code to test the property groupOwnerAssignBy
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property allowChangePermissionLevel (base name: "allowChangePermissionLevel")', function() {
      // uncomment below and update the code to test the property allowChangePermissionLevel
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property removable (base name: "removable")', function() {
      // uncomment below and update the code to test the property removable
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property permissionLevels (base name: "permissionLevels")', function() {
      // uncomment below and update the code to test the property permissionLevels
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property groupOwner (base name: "groupOwner")', function() {
      // uncomment below and update the code to test the property groupOwner
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property groupOwnerType (base name: "groupOwnerType")', function() {
      // uncomment below and update the code to test the property groupOwnerType
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

    it('should have the property buildInGroupType (base name: "buildInGroupType")', function() {
      // uncomment below and update the code to test the property buildInGroupType
      //var instane = new CloudGovernanceApi.ServiceGroupWithPermissions();
      //expect(instance).to.be();
    });

  });

}));