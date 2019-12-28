// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(View) {
  describe('Test View library:', () => {
    // Test the lib:
    describe('Test View.VERSION, View._setTestMode and View.noConflict:', () => {
      it('Expects View.VERSION to return a string.', () => {
        expect(View.VERSION).to.be.a('string');
      });
      it('Expects View._setTestMode to return a function.', () => {
        expect(View._setTestMode).to.be.a('function');
      });
      it('Expects View.noConflict to return a function.', () => {
        expect(View.noConflict).to.be.a('function');
      });
    });
  });
};
