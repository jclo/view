// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(View, app) {
  describe('Test the inherited property $emit:', () => {
    it('Expects it to inherit the property $emit that is a function.', () => {
      expect(Object.getPrototypeOf(app)).to.own.property('$emit').that.is.a('function');
    });

    it('Expects $emit() to return an object.', () => {
      expect(app.$emit()).to.be.an('object');
    });

    it('Expects this object to be the parent of the property $emit.', () => {
      expect(app.$emit().id === app.id).to.be.true;
    });
  });

  describe('Test the inherited property $listen:', () => {
    it('Expects it to inherit the property $listen that is a function.', () => {
      expect(Object.getPrototypeOf(app)).to.own.property('$listen').that.is.a('function');
    });

    it('Expects $listen() to return an object.', () => {
      expect(app.$listen()).to.be.an('object');
    });

    it('Expects this object to be the parent of the property $listen.', () => {
      expect(app.$listen().id === app.id).to.be.true;
    });
  });

  describe('Test the interaction between $listen and $emit:', () => {
    it('Expects $listen("msg", (payload)) to get the payload sent by $emit("msg", payload).', (done) => {
      app.$listen('msg', (data) => {
        expect(data === 'payload').to.be.true;
        done();
      });
      app.$emit('msg', 'payload');
    });
  });
};
