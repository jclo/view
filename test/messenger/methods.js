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
  describe('Test Messenger methods:', () => {
    const o = Messenger();

    it('Expects Messenger() to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects this object to own the property "subscribe" that is a function.', () => {
      expect(o).to.have.property('subscribe').that.is.a('function');
    });

    it('Expects this object to own the property "subscribeOnce" that is a function.', () => {
      expect(o).to.have.property('subscribeOnce').that.is.a('function');
    });

    it('Expects this object to own the property "unsubscribe" that is a function.', () => {
      expect(o).to.have.property('unsubscribe').that.is.a('function');
    });

    it('Expects this object to own the property "publish" that is a function.', () => {
      expect(o).to.have.property('publish').that.is.a('function');
    });
  });
};
