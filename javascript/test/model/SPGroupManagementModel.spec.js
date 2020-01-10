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
    instance = new CloudGovernanceApi.SPGroupManagementModel();
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

  describe('SPGroupManagementModel', function() {
    it('should create an instance of SPGroupManagementModel', function() {
      // uncomment below and update the code to test SPGroupManagementModel
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be.a(CloudGovernanceApi.SPGroupManagementModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property members (base name: "members")', function() {
      // uncomment below and update the code to test the property members
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property spGroupViewType (base name: "spGroupViewType")', function() {
      // uncomment below and update the code to test the property spGroupViewType
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property spGroupEditType (base name: "spGroupEditType")', function() {
      // uncomment below and update the code to test the property spGroupEditType
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property isAllowJoinOrLeaveRequest (base name: "isAllowJoinOrLeaveRequest")', function() {
      // uncomment below and update the code to test the property isAllowJoinOrLeaveRequest
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property isAutoAcceptRequest (base name: "isAutoAcceptRequest")', function() {
      // uncomment below and update the code to test the property isAutoAcceptRequest
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property sendMembershipRequestEmailAddress (base name: "sendMembershipRequestEmailAddress")', function() {
      // uncomment below and update the code to test the property sendMembershipRequestEmailAddress
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

    it('should have the property isTemporaryGroup (base name: "isTemporaryGroup")', function() {
      // uncomment below and update the code to test the property isTemporaryGroup
      //var instane = new CloudGovernanceApi.SPGroupManagementModel();
      //expect(instance).to.be();
    });

  });

}));