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
    instance = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
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

  describe('ChangeSiteSettingValidateResult', function() {
    it('should create an instance of ChangeSiteSettingValidateResult', function() {
      // uncomment below and update the code to test ChangeSiteSettingValidateResult
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be.a(CloudGovernanceApi.ChangeSiteSettingValidateResult);
    });

    it('should have the property siteUrl (base name: "siteUrl")', function() {
      // uncomment below and update the code to test the property siteUrl
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property siteId (base name: "siteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property siteTitle (base name: "siteTitle")', function() {
      // uncomment below and update the code to test the property siteTitle
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property siteDescription (base name: "siteDescription")', function() {
      // uncomment below and update the code to test the property siteDescription
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property isModernSite (base name: "isModernSite")', function() {
      // uncomment below and update the code to test the property isModernSite
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property isHubSite (base name: "isHubSite")', function() {
      // uncomment below and update the code to test the property isHubSite
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property associatedHubSiteId (base name: "associatedHubSiteId")', function() {
      // uncomment below and update the code to test the property associatedHubSiteId
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property metadatas (base name: "metadatas")', function() {
      // uncomment below and update the code to test the property metadatas
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property primaryContact (base name: "primaryContact")', function() {
      // uncomment below and update the code to test the property primaryContact
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property secondaryContact (base name: "secondaryContact")', function() {
      // uncomment below and update the code to test the property secondaryContact
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property primaryAdministrator (base name: "primaryAdministrator")', function() {
      // uncomment below and update the code to test the property primaryAdministrator
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property isValid (base name: "isValid")', function() {
      // uncomment below and update the code to test the property isValid
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instane = new CloudGovernanceApi.ChangeSiteSettingValidateResult();
      //expect(instance).to.be();
    });

  });

}));