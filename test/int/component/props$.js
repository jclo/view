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
  // Test the lib:
  describe('Test the property $:', () => {
    const o = View.Component()();
    const io = Object.getPrototypeOf(o);

    it('Expects View.Component()() to inherit the property "$" that is a function.', () => {
      expect(io).to.own.property('$').that.is.a('function');
    });

    it('Expects $() to return an object.', () => {
      expect(o.$()).to.be.an('object');
    });

    it('Expects $() to own 45 properties.', () => {
      expect(Object.getOwnPropertyNames(o.$())).to.be.an('array').that.has.lengthOf(45);
    });

    it('Expects $() to own the property "0" that is null.', () => {
      expect(o.$()[0]).to.be.equal(null);
    });

    it('Expects $() to own the property "_root" that is null.', () => {
      expect(o.$()._root).to.be.equal(null);
    });

    it('Expects $() to own the property "addClass" that is a function.', () => {
      expect(o.$().addClass).to.be.a('function');
    });

    it('Expects $() to own the property "addClasses" that is a function.', () => {
      expect(o.$().addClasses).to.be.a('function');
    });

    it('Expects $() to own the property "after" that is a function.', () => {
      expect(o.$().after).to.be.a('function');
    });

    it('Expects $() to own the property "animate" that is a function.', () => {
      expect(o.$().animate).to.be.a('function');
    });

    it('Expects $() to own the property "append" that is a function.', () => {
      expect(o.$().append).to.be.a('function');
    });

    it('Expects $() to own the property "appendAfter" that is a function.', () => {
      expect(o.$().appendAfter).to.be.a('function');
    });

    it('Expects $() to own the property "appendBefore" that is a function.', () => {
      expect(o.$().appendBefore).to.be.a('function');
    });

    it('Expects $() to own the property "appendHTML" that is a function.', () => {
      expect(o.$().appendHTML).to.be.a('function');
    });

    it('Expects $() to own the property "appendTextChild" that is a function.', () => {
      expect(o.$().appendTextChild).to.be.a('function');
    });

    it('Expects $() to own the property "attr" that is a function.', () => {
      expect(o.$().attr).to.be.a('function');
    });

    it('Expects $() to own the property "before" that is a function.', () => {
      expect(o.$().before).to.be.a('function');
    });

    it('Expects $() to own the property "childIndex" that is a function.', () => {
      expect(o.$().childIndex).to.be.a('function');
    });

    it('Expects $() to own the property "children" that is a function.', () => {
      expect(o.$().children).to.be.a('function');
    });

    it('Expects $() to own the property "clone" that is a function.', () => {
      expect(o.$().clone).to.be.a('function');
    });

    it('Expects $() to own the property "css" that is a function.', () => {
      expect(o.$().css).to.be.a('function');
    });

    it('Expects $() to own the property "empty" that is a function.', () => {
      expect(o.$().empty).to.be.a('function');
    });

    it('Expects $() to own the property "find" that is a function.', () => {
      expect(o.$().find).to.be.a('function');
    });

    it('Expects $() to own the property "firstChild" that is a function.', () => {
      expect(o.$().firstChild).to.be.a('function');
    });

    it('Expects $() to own the property "firstParent" that is a function.', () => {
      expect(o.$().firstParent).to.be.a('function');
    });

    it('Expects $() to own the property "getClassList" that is a function.', () => {
      expect(o.$().getClassList).to.be.a('function');
    });

    it('Expects $() to own the property "getRect" that is a function.', () => {
      expect(o.$().getRect).to.be.a('function');
    });

    it('Expects $() to own the property "hasClass" that is a function.', () => {
      expect(o.$().hasClass).to.be.a('function');
    });

    it('Expects $() to own the property "html" that is a function.', () => {
      expect(o.$().html).to.be.a('function');
    });

    it('Expects $() to own the property "id" that is null.', () => {
      expect(o.$().id).to.be.equal(null);
    });

    it('Expects $() to own the property "insertChildBefore" that is a function.', () => {
      expect(o.$().insertChildBefore).to.be.a('function');
    });

    it('Expects $() to own the property "off" that is a function.', () => {
      expect(o.$().off).to.be.a('function');
    });

    it('Expects $() to own the property "on" that is a function.', () => {
      expect(o.$().on).to.be.a('function');
    });

    it('Expects $() to own the property "parent" that is a function.', () => {
      expect(o.$().parent).to.be.a('function');
    });

    it('Expects $() to own the property "prepend" that is a function.', () => {
      expect(o.$().prepend).to.be.a('function');
    });

    it('Expects $() to own the property "removeAttr" that is a function.', () => {
      expect(o.$().removeAttr).to.be.a('function');
    });

    it('Expects $() to own the property "removeChild" that is a function.', () => {
      expect(o.$().removeChild).to.be.a('function');
    });

    it('Expects $() to own the property "removeClass" that is a function.', () => {
      expect(o.$().removeClass).to.be.a('function');
    });

    it('Expects $() to own the property "removeClasses" that is a function.', () => {
      expect(o.$().removeClasses).to.be.a('function');
    });

    it('Expects $() to own the property "replace" that is a function.', () => {
      expect(o.$().replace).to.be.a('function');
    });

    it('Expects $() to own the property "replaceChild" that is a function.', () => {
      expect(o.$().replaceChild).to.be.a('function');
    });

    it('Expects $() to own the property "replaceWith" that is a function.', () => {
      expect(o.$().replaceWith).to.be.a('function');
    });

    it('Expects $() to own the property "select" that is a function.', () => {
      expect(o.$().select).to.be.a('function');
    });

    it('Expects $() to own the property "selectChild" that is a function.', () => {
      expect(o.$().selectChild).to.be.a('function');
    });

    it('Expects $() to own the property "tag" that is a function.', () => {
      expect(o.$().tag).to.be.a('function');
    });

    it('Expects $() to own the property "text" that is a function.', () => {
      expect(o.$().text).to.be.a('function');
    });

    it('Expects $() to own the property "toggleClass" that is a function.', () => {
      expect(o.$().toggleClass).to.be.a('function');
    });

    it('Expects $() to own the property "trigger" that is a function.', () => {
      expect(o.$().trigger).to.be.a('function');
    });

    it('Expects $() to own the property "diff" that is a function.', () => {
      expect(o.$().diff).to.be.a('function');
    });
  });
};
