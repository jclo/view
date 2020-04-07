// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(View) {
  // Test the lib:
  describe('Test View.VERSION, View._setTestMode and View.noConflict:', () => {
    it('Expects View.VERSION to return a string.', () => {
      expect(View.VERSION).to.be.a('string');
    });

    it('Expects View._setTestMode to be a function.', () => {
      expect(View._setTestMode).to.be.a('function');
    });
    // it('Expects View._setTestMode() to return an object.', () => {
    //   expect(View._setTestMode()).to.be.an('object');
    // });

    it('Expects View.noConflict to be a function.', () => {
      expect(View.noConflict).to.be.a('function');
    });
    it('Expects View.noConflict() to return an object.', () => {
      expect(View.noConflict()).to.be.an('object');
    });
  });
};
