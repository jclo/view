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
  describe('Test the properties it inherits:', () => {
    const io = Object.getPrototypeOf(app);

    it('Expects View.render({...}) to get 15 inherited properties.', () => {
      expect(Object.getOwnPropertyNames(io)).to.be.an('array').that.has.a.lengthOf(15);
    });

    it('Expects this object to inherit the property "_init" that is a function.', () => {
      expect(io).to.own.property('_init').that.is.a('function');
    });

    it('Expects this object to inherit the property "_renderer" that is a function.', () => {
      expect(io).to.own.property('_renderer').that.is.a('function');
    });

    it('Expects this object to inherit the property "$hyperscript" that is a function.', () => {
      expect(io).to.own.property('$hyperscript').that.is.a('function');
    });

    it('Expects this object to inherit the property "$getIdAndName" that is a function.', () => {
      expect(io).to.own.property('$getIdAndName').that.is.a('function');
    });

    it('Expects this object to inherit the property "$getChildren" that is a function.', () => {
      expect(io).to.own.property('$getChildren').that.is.a('function');
    });

    it('Expects this object to inherit the property "$getChild" that is a function.', () => {
      expect(io).to.own.property('$getChild').that.is.a('function');
    });

    it('Expects this object to inherit the property "$show" that is a function.', () => {
      expect(io).to.own.property('$show').that.is.a('function');
    });

    it('Expects this object to inherit the property "$hide" that is a function.', () => {
      expect(io).to.own.property('$hide').that.is.a('function');
    });

    it('Expects this object to inherit the property "$listen" that is a function.', () => {
      expect(io).to.own.property('$listen').that.is.a('function');
    });

    it('Expects this object to inherit the property "$emit" that is a function.', () => {
      expect(io).to.own.property('$emit').that.is.a('function');
    });

    it('Expects this object to inherit the property "init" that is a function.', () => {
      expect(io).to.own.property('init').that.is.a('function');
    });

    it('Expects this object to inherit the property "events" that is a function.', () => {
      expect(io).to.own.property('events').that.is.a('function');
    });

    it('Expects this object to inherit the property "$" that is a function.', () => {
      expect(io).to.own.property('$').that.is.a('function');
    });

    it('Expects this object to inherit the property "render" that is a function.', () => {
      expect(io).to.own.property('render').that.is.a('function');
    });

    it('Expects this object to inherit the property "constructor" that is a function.', () => {
      expect(io).to.own.property('constructor').that.is.a('function');
    });
  });
};
