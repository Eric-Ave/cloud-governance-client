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
    instance = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
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

  describe('ChangeWebContactByUrlSetting', function() {
    it('should create an instance of ChangeWebContactByUrlSetting', function() {
      // uncomment below and update the code to test ChangeWebContactByUrlSetting
      //var instane = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
      //expect(instance).to.be.a(CloudGovernanceApi.ChangeWebContactByUrlSetting);
    });

    it('should have the property siteId (base name: "siteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instane = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
      //expect(instance).to.be();
    });

    it('should have the property siteUrl (base name: "siteUrl")', function() {
      // uncomment below and update the code to test the property siteUrl
      //var instane = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
      //expect(instance).to.be();
    });

    it('should have the property webId (base name: "webId")', function() {
      // uncomment below and update the code to test the property webId
      //var instane = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
      //expect(instance).to.be();
    });

    it('should have the property webUrl (base name: "webUrl")', function() {
      // uncomment below and update the code to test the property webUrl
      //var instane = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
      //expect(instance).to.be();
    });

    it('should have the property primaryContact (base name: "primaryContact")', function() {
      // uncomment below and update the code to test the property primaryContact
      //var instane = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
      //expect(instance).to.be();
    });

    it('should have the property secondaryContact (base name: "secondaryContact")', function() {
      // uncomment below and update the code to test the property secondaryContact
      //var instane = new CloudGovernanceApi.ChangeWebContactByUrlSetting();
      //expect(instance).to.be();
    });

  });

}));