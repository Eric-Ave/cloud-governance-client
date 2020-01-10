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
    instance = new CloudGovernanceApi.MultiGeoSerivceSetting();
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

  describe('MultiGeoSerivceSetting', function() {
    it('should create an instance of MultiGeoSerivceSetting', function() {
      // uncomment below and update the code to test MultiGeoSerivceSetting
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be.a(CloudGovernanceApi.MultiGeoSerivceSetting);
    });

    it('should have the property isMultiGeoTenant (base name: "isMultiGeoTenant")', function() {
      // uncomment below and update the code to test the property isMultiGeoTenant
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

    it('should have the property allLocations (base name: "allLocations")', function() {
      // uncomment below and update the code to test the property allLocations
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

    it('should have the property controlMode (base name: "controlMode")', function() {
      // uncomment below and update the code to test the property controlMode
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

    it('should have the property defaultLocation (base name: "defaultLocation")', function() {
      // uncomment below and update the code to test the property defaultLocation
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

    it('should have the property selectedLocations (base name: "selectedLocations")', function() {
      // uncomment below and update the code to test the property selectedLocations
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

    it('should have the property locationAssignBy (base name: "locationAssignBy")', function() {
      // uncomment below and update the code to test the property locationAssignBy
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

    it('should have the property userRoleForLocation (base name: "userRoleForLocation")', function() {
      // uncomment below and update the code to test the property userRoleForLocation
      //var instane = new CloudGovernanceApi.MultiGeoSerivceSetting();
      //expect(instance).to.be();
    });

  });

}));