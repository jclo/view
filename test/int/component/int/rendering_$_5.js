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
  describe('Test the $() methods children, childIndex, getRect:', () => {
    // children:
    it('Expects $().children to return an HTMLCollection.', () => {
      expect(app.$().children()).to.be.an('HTMLCollection');
    });

    it('Expects this HTMLCollection to contain two nodes.', () => {
      expect(app.$().children().length).to.be.a('number').that.is.equal(2);
    });

    it('Expects the first node to be "<h1>Hi!</h1>".', () => {
      expect(app.$().children().item(0).outerHTML).to.be.a('string').that.is.equal('<h1>Hi!</h1>');
    });

    // childIndex:
    it('Expects $(".c").childIndex() to return 1.', () => {
      expect(app.$('.c').childIndex()).to.be.a('number').that.is.equal(1);
    });

    // getRect
    it('Expects $().getRect() to return an object.', () => {
      expect(app.$().getRect()).to.be.an('object');
    });

    it('Expects this object has, at least, the property "top".', () => {
      expect(app.$().getRect()).to.own.property('top');
    });
  });
};
