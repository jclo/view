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
  describe('Test the inherited property $show:', () => {
    it('expects it to inherit the property $show that is a function.', () => {
      expect(Object.getPrototypeOf(app)).to.own.property('$show').that.is.a('function');
    });

    app.$show();
    const { id } = app.$getIdAndName();
    const disp = document.getElementById(id).style.display;
    it('expects $show() to add the style "display: block" to the View.Component.', () => {
      expect(disp).to.be.a('string').that.is.equal('block');
    });
  });

  describe('Test the inherited property $hide:', () => {
    it('expects it to inherit the property $hide that is a function.', () => {
      expect(Object.getPrototypeOf(app)).to.own.property('$hide').that.is.a('function');
    });

    app.$hide();
    const { id } = app.$getIdAndName();
    const disp = document.getElementById(id).style.display;
    it('expects $hide() to add the style "display: none" to the View.Component.', () => {
      expect(disp).to.be.a('string').that.is.equal('none');
    });
  });
};
