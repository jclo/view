// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(Messenger) {
  describe('Test Messenger constructor:', () => {
    it('Expects Messenger to be a function.', () => {
      expect(Messenger).to.be.a('function');
    });

    it('Expects Messenger() to return an object.', () => {
      expect(Messenger()).to.be.an('object');
    });
  });
};
