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
  describe('Test the inherited property $getChild:', () => {
    it('Expects it to inherit the property $getChild that is a function.', () => {
      expect(Object.getPrototypeOf(app)).to.own.property('$getChild').that.is.a('function');
    });

    it('Expects $getChild() to return null.', () => {
      expect(app.$getChild()).to.be.equal(null);
    });

    it('Expects $getChild("<C /") to return an object.', () => {
      expect(app.$getChild('<C />')).to.be.an('object');
    });

    it('Expects this object to be a View.Component.', () => {
      expect(app.$getChild('<C />')).to.own.property('_tag').that.is.a('string').that.is.equal('<C />');
    });
  });

  describe('Test the inherited property $getChildren:', () => {
    it('Expects it to inherit the property $getChildren that is a function.', () => {
      expect(Object.getPrototypeOf(app)).to.own.property('$getChildren').that.is.a('function');
    });

    it('Expects $getChildren() to return an array.', () => {
      expect(app.$getChildren()).to.be.an('array');
    });

    it('Expects this array to contains one element.', () => {
      expect(app.$getChildren()).to.be.an('array').that.has.lengthOf(1);
    });

    it('Expects this element to be an object.', () => {
      expect(app.$getChildren()[0]).to.be.an('object');
    });

    it('Expects this object to own two properties.', () => {
      expect(Object.getOwnPropertyNames(app.$getChildren()[0]))
        .to.be.an('array').that.has.a.lengthOf(2);
    });

    it('Expects the first property to be "id".', () => {
      expect(app.$getChildren()[0]).to.own.property('id');
    });

    it('Expects the second property to be "name".', () => {
      expect(app.$getChildren()[0]).to.own.property('name');
    });

    it('Expects this id to be the id of $getChild("<C />").', () => {
      const wc = app.$getChild('<C />');
      const { id } = app.$getChildren()[0];
      expect(id === wc.id).to.be.true;
    });

    it('Expects this name to be the name of $getChild("<C />").', () => {
      const wc = app.$getChild('<C />');
      const { name } = app.$getChildren()[0];
      expect(name === wc.name).to.be.true;
    });
  });

  describe('Test the inherited property $getIdAndName:', () => {
    it('Expects it to inherit the property $getIdAndName that is a function.', () => {
      expect(Object.getPrototypeOf(app)).to.own.property('$getIdAndName').that.is.a('function');
    });

    it('Expects $getIdAndName() to return an object.', () => {
      expect(app.$getIdAndName()).to.be.an('object');
    });


    it('Expects this object to own two properties.', () => {
      expect(Object.getOwnPropertyNames(app.$getIdAndName()))
        .to.be.an('array').that.has.a.lengthOf(2);
    });

    it('Expects the first property to be "id".', () => {
      expect(app.$getIdAndName()).to.own.property('id');
    });

    it('Expects the second property to be "name".', () => {
      expect(app.$getIdAndName()).to.own.property('name');
    });

    it('Expects the returned id of $getChild("<C />").$getIdAndName() to be $getChild("<C />").id.', () => {
      const wc = app.$getChild('<C />');
      expect(wc.$getIdAndName().id === wc.id).to.be.true;
    });

    it('Expects the returned id of $getChild("<C />").$getIdAndName() to be $getChild("<C />").name.', () => {
      const wc = app.$getChild('<C />');
      expect(wc.$getIdAndName().name === wc.name).to.be.true;
    });
  });
};
