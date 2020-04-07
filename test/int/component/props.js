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
module.exports = function(View) {
  const [, Component] = View._setTestMode();

  // Test the lib:
  describe('Test View.Component:', () => {
    //
    it('Expects View.Component to be a function.', () => {
      expect(View.Component).to.be.a('function');
    });

    it('Expects View.Component() to return a function.', () => {
      expect(Component).to.be.a('function');
    });

    it('Expects Component to own the static method "_attachChild".', () => {
      expect(Component._attachChild).to.be.a('function');
    });

    it('Expects Component to own the static method "_removeChild".', () => {
      expect(Component._removeChild).to.be.a('function');
    });

    it('Expects Component() to return a function.', () => {
      expect(Component()).to.be.a('function');
    });

    it('Expects Component({})() to return an object.', () => {
      expect(Component({})()).to.be.an('object');
    });

    describe('Test View.Component own properties:', () => {
      const o = View.Component()();
      const props = Object.getOwnPropertyNames(o);

      it('Expects View.Component()() to own 7 properties.', () => {
        expect(props).to.be.an('array').that.has.lengthOf(7);
      });

      it('Expects View.Component()() to own seven properties.', () => {
        expect(props).to.be.an('array').that.has.lengthOf(7);
      });

      it('Expects it to own the property "_mess" that is null.', () => {
        expect(o).to.own.property('_mess').that.is.equal(null);
      });

      it('Expects it to own the property "_mess" that is null.', () => {
        expect(o).to.own.property('_mess').that.is.equal(null);
      });

      it('Expects it to own the property "_tag" that is null.', () => {
        expect(o).to.own.property('_tag').that.is.equal(null);
      });

      it('Expects it to own the property "children" that is null.', () => {
        expect(o).to.own.property('children').that.is.equal(null);
      });

      it('Expects it to own the property "id" that is a string.', () => {
        expect(o).to.own.property('id').that.is.a('string');
      });

      it('Expects it to own the property "name" that is equal to "mynameisnobody".', () => {
        expect(o).to.own.property('name').that.is.a('string').that.is.equal('mynameisnobody');
      });

      it('Expects it to own the property "props" that is an object.', () => {
        expect(o).to.own.property('props').that.is.an('object');
      });
      it('Expects props to own the property "options" that is undefined.', () => {
        expect(o.props).to.own.property('options').that.is.undefined;
      });
    });

    describe('Test View.Component inherited default properties:', () => {
      const o = View.Component()();
      const io = Object.getPrototypeOf(o);

      it('Expects View.Component()() to inherit of 15 properties.', () => {
        expect(Object.getOwnPropertyNames(io)).to.be.an('array').that.has.lengthOf(15);
      });

      it('Expects it to inherit the property "_init" that is a function.', () => {
        expect(io).to.own.property('_init').that.is.a('function');
      });

      it('Expects it to inherit the property "_renderer" that is a function.', () => {
        expect(io).to.own.property('_renderer').that.is.a('function');
      });

      it('Expects it to inherit the property "$hyperscript" that is a function.', () => {
        expect(io).to.own.property('$hyperscript').that.is.a('function');
      });

      it('Expects it to inherit the property "$getIdAndName" that is a function.', () => {
        expect(io).to.own.property('$getIdAndName').that.is.a('function');
      });

      it('Expects it to inherit the property "$getChildren" that is a function.', () => {
        expect(io).to.own.property('$getChildren').that.is.a('function');
      });

      it('Expects it to inherit the property "$getChild" that is a function.', () => {
        expect(io).to.own.property('$getChild').that.is.a('function');
      });

      it('Expects it to inherit the property "$show" that is a function.', () => {
        expect(io).to.own.property('$show').that.is.a('function');
      });

      it('Expects it to inherit the property "$hide" that is a function.', () => {
        expect(io).to.own.property('$hide').that.is.a('function');
      });

      it('Expects it to inherit the property "$listen" that is a function.', () => {
        expect(io).to.own.property('$listen').that.is.a('function');
      });

      it('Expects it to inherit the property "$emit" that is a function.', () => {
        expect(io).to.own.property('$emit').that.is.a('function');
      });

      it('Expects it to inherit the property "init" that is a function.', () => {
        expect(io).to.own.property('init').that.is.a('function');
      });

      it('Expects it to inherit the property "events" that is a function.', () => {
        expect(io).to.own.property('events').that.is.a('function');
      });

      it('Expects it to inherit the property "render" that is a function.', () => {
        expect(io).to.own.property('render').that.is.a('function');
      });

      it('Expects it to inherit the property "$" that is a function.', () => {
        expect(io).to.own.property('$').that.is.a('function');
      });

      it('Expects it to inherit the property "constructor" that is a function.', () => {
        expect(io).to.own.property('constructor').that.is.a('function');
      });
    });

    describe('Test View.Component extra inherited properties:', () => {
      const o = View.Component({ a() {}, b() {} })();
      const io = Object.getPrototypeOf(o);

      it('Expects View.Component({ a() {}, b() {} })() to inherit of 17 properties.', () => {
        expect(Object.getOwnPropertyNames(io)).to.be.an('array').that.has.lengthOf(17);
      });

      it('Expects it to inherit the property "a" that is a function.', () => {
        expect(io).to.own.property('a').that.is.a('function');
      });

      it('Expects it to inherit the property "b" that is a function.', () => {
        expect(io).to.own.property('b').that.is.a('function');
      });
    });
  });
};
