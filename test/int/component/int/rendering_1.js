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
  describe('Test the properties it owns:', () => {
    it('Expects View.render({...}) to own 7 properties.', () => {
      expect(Object.getOwnPropertyNames(app)).to.be.an('array').that.has.a.lengthOf(7);
    });

    it('Expects this object to own the property "_tag".', () => {
      expect(app).to.own.property('_tag');
    });

    it('Expects this object to own the property "_cList".', () => {
      expect(app).to.own.property('_cList');
    });

    it('Expects this object to own the property "_mess".', () => {
      expect(app).to.own.property('_mess');
    });

    it('Expects this object to own the property "id".', () => {
      expect(app).to.own.property('id');
    });

    it('Expects this object to own the property "children".', () => {
      expect(app).to.own.property('children');
    });

    it('Expects this object to own the property "props".', () => {
      expect(app).to.own.property('props');
    });

    it('Expects this object to own the property "name".', () => {
      expect(app).to.own.property('name');
    });
  });
};
