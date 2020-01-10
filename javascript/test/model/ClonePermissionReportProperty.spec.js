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
    instance = new CloudGovernanceApi.ClonePermissionReportProperty();
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

  describe('ClonePermissionReportProperty', function() {
    it('should create an instance of ClonePermissionReportProperty', function() {
      // uncomment below and update the code to test ClonePermissionReportProperty
      //var instane = new CloudGovernanceApi.ClonePermissionReportProperty();
      //expect(instance).to.be.a(CloudGovernanceApi.ClonePermissionReportProperty);
    });

    it('should have the property taskTitle (base name: "taskTitle")', function() {
      // uncomment below and update the code to test the property taskTitle
      //var instane = new CloudGovernanceApi.ClonePermissionReportProperty();
      //expect(instance).to.be();
    });

    it('should have the property isAllowedReassign (base name: "isAllowedReassign")', function() {
      // uncomment below and update the code to test the property isAllowedReassign
      //var instane = new CloudGovernanceApi.ClonePermissionReportProperty();
      //expect(instance).to.be();
    });

    it('should have the property reportGeneratedTime (base name: "reportGeneratedTime")', function() {
      // uncomment below and update the code to test the property reportGeneratedTime
      //var instane = new CloudGovernanceApi.ClonePermissionReportProperty();
      //expect(instance).to.be();
    });

    it('should have the property targetUser (base name: "targetUser")', function() {
      // uncomment below and update the code to test the property targetUser
      //var instane = new CloudGovernanceApi.ClonePermissionReportProperty();
      //expect(instance).to.be();
    });

  });

}));