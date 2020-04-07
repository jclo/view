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
  describe('Test the properties _tag, id, name, props:', () => {
    it('Expects View.render({...}) to own the property "_tag" that is equal to null.', () => {
      expect(app).to.own.property('_tag').that.is.equal(null);
    });

    it('Expects it to own the property "id" that is a string of 8 chars.', () => {
      expect(app).to.own.property('id').that.is.a('string').that.has.lengthOf(8);
    });

    it('Expects it to own the property "name" that is a string equal to "firstparent".', () => {
      expect(app).to.own.property('name').that.is.a('string').that.is.equal('firstparent');
    });

    it('Expects it to own the property "props" that is an object.', () => {
      expect(app).to.own.property('props').that.is.an('object');
    });

    it('Expects props to own the property "options" that is undefined.', () => {
      expect(app.props).to.own.property('options').that.is.equal(undefined);
    });
  });

  describe('Test the property _cList:', () => {
    it('Expects it to own the property "_cList" that is an object.', () => {
      expect(app).to.own.property('_cList').that.is.an('object');
    });

    it('Expects _cList to own one property only.', () => {
      const props = Object.getOwnPropertyNames(app._cList);
      expect(props).to.be.an('array').that.has.lengthOf(1);
    });

    it('Expects _cList to own one property "C" that is an object.', () => {
      expect(app._cList).to.own.property('C').that.is.an('object');
    });

    it('Expects _cList.C to own, at least, the property "_tag" that is equal to "<C />".', () => {
      expect(app._cList.C).to.own.property('_tag').that.is.a('string').that.is.equal('<C />');
    });
  });

  describe('Test the property _mess:', () => {
    it('Expects it to own the property "_mess" that is an object.', () => {
      expect(app).to.own.property('_mess').that.is.an('object');
    });

    it('Expects _mess to own, at least, the property "_db" that is an empty object.', () => {
      expect(app._mess).to.own.property('_db').that.is.an('object').that.is.empty;
    });

    it('Expects _mess to inherit, at least, the property "subscribe" that is a function.', () => {
      expect(Object.getPrototypeOf(app._mess)).to.own.property('subscribe').that.is.a('function');
    });
  });

  describe('Test the property children:', () => {
    it('Expects it to own the property "children" that is an object.', () => {
      expect(app).to.own.property('children').that.is.an('object');
    });

    it('Expects children to own 1 property only.', () => {
      expect(Object.getOwnPropertyNames(app.children)).to.be.an('array').that.has.lengthOf(1);
    });

    it('Expects children to own the property "<C />" that is an object.', () => {
      expect(app.children).to.own.property('<C />').that.is.an('object');
    });

    it('Expects children["<C />"] to own 2 properties.', () => {
      expect(Object.getOwnPropertyNames(app.children['<C />'])).to.be.an('array').that.has.lengthOf(2);
    });

    it('Expects children["<C />"] to own the property "fn" that is a function.', () => {
      expect(app.children['<C />']).to.own.property('fn').that.is.a('function');
    });

    it('Expects children["<C />"] to own the property "options" that is null.', () => {
      expect(app.children['<C />']).to.own.property('options').that.is.equal(null);
    });
  });
};
