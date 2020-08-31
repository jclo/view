// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
// Number of properties added by your library.
const OWNPROPS = 6
    , TESTMODE = 4
    ;


// -- Local Variables


// -- Main
module.exports = function(View, libname, version) {
  describe('View introspection:', () => {
    describe('Test the nature of View:', () => {
      it('Expects View to be an object.', () => {
        expect(View).to.be.an('object');
      });

      it(`Expects View to own ${6 + OWNPROPS} properties.`, () => {
        expect(Object.keys(View)).to.be.an('array').that.has.lengthOf(6 + OWNPROPS);
      });
    });


    // -- This section must not be modified --
    // NAME, VERSION, _library, _setTestMode, noConflict, whoami
    describe('Check the owned generic properties:', () => {
      it(`Expects View to own the property "NAME" whose value is "${libname}".`, () => {
        expect(View).to.own.property('NAME').that.is.equal(libname);
      });

      it(`Expects View to own the property "VERSION" whose value is "${version}".`, () => {
        expect(View).to.own.property('VERSION');
      });

      it('Expects View to own the property "_library" that is an object.', () => {
        expect(View).to.own.property('_library').that.is.an('object');
      });

      it('Expects View to own the property "_setTestMode" that is a function.', () => {
        expect(View).to.own.property('_setTestMode').that.is.a('function');
      });

      it('Expects View to own the property "noConflict" that is a function.', () => {
        expect(View).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects View to own the property "whoami" that is a function.', () => {
        expect(View).to.own.property('whoami').that.is.a('function');
      });

      describe('Test the owned generic properties:', () => {
        it('Expects the property "_library" to own two properties.', () => {
          expect(Object.keys(View._library)).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
          expect(View._library).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
          expect(View._library).to.own.property('version').that.is.equal(version);
        });

        it(`Expects the property "_setTestMode" to return an array with ${TESTMODE} item(s).`, () => {
          expect(View._setTestMode()).to.be.an('array').that.has.lengthOf(TESTMODE);
        });

        it('Expects the property "noConflict" to return an object.', () => {
          expect(View.noConflict()).to.be.an('object');
        });

        it('Expects the property "whoami" to return an object.', () => {
          expect(View.whoami()).to.be.an('object');
        });
        it('Expects this object to own two properties.', () => {
          expect(Object.keys(View.whoami())).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
          expect(View.whoami()).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
          expect(View.whoami()).to.own.property('version').that.is.equal(version);
        });
      });
    });


    // -- This section must be adapted --
    // Replace here 'getString' and 'getArray' by the inherited properties
    // added by your library.
    describe('Check the owned specific properties:', () => {
      it('Expects View to own the property "Component" that is a function.', () => {
        expect(View).to.own.property('Component').that.is.a('function');
      });

      it('Expects View to own the property "render" that is a function.', () => {
        expect(View).to.own.property('render').that.is.a('function');
      });

      it('Expects View to own the property "restore" that is a function.', () => {
        expect(View).to.own.property('restore').that.is.a('function');
      });

      it('Expects View to own the property "append" that is a function.', () => {
        expect(View).to.own.property('append').that.is.a('function');
      });

      it('Expects View to own the property "prepend" that is a function.', () => {
        expect(View).to.own.property('prepend').that.is.a('function');
      });

      it('Expects View to own the property "remove" that is a function.', () => {
        expect(View).to.own.property('remove').that.is.a('function');
      });


      describe('Test the owned specific properties:', () => {
        it('Expects ... to be done later on!', () => {
          expect(true).to.be.equal(true);
        });
      });
    });
  });
};
