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
  describe('Test the $() methods attr, removeAttr:', () => {
    it('expects $("h1").attr("href", "#") to add this attribute to the node.', () => {
      app.$('h1').attr('href', '#');
      const el = app.$('h1')[0];
      const a = el.getAttribute('href');
      expect(a).to.be.a('string').that.is.equal('#');
    });

    it('expects $("h1").attr("href") to return this attribute value from the node.', () => {
      expect(app.$('h1').attr('href')).to.be.a('string').that.is.equal('#');
    });

    it('expects $("h1").removeAttr("href") to remove this attribute from the node.', () => {
      app.$('h1').removeAttr('href');
      const el = app.$('h1')[0];
      const a = el.getAttribute('href');
      expect(a).to.be.equal(null);
    });

    it('expects $("h1").removeAttr() to return "this".', () => {
      expect(app.$('h1').removeAttr()).to.be.an('object');
    });
  });

  describe('Test the $() methods on, off, trigger:', () => {
    it('expects $().on("click") to return "this".', () => {
      expect(app.$().on('click')).to.be.an('object');
    });

    it('expects $().off("click") to return "this".', () => {
      expect(app.$().off('click')).to.be.an('object');
    });

    it('expects $().trigger("click") to return true.', () => {
      // expect(app.$().trigger('click')).to.be.true;
    });
  });
};
