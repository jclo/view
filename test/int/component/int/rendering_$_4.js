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


/*

<div>
  <h1>Hi!</h1>
  <div class="c">
    <p>Hi!</p>
  </div>
</div>

*/

// -- Main
module.exports = function(View, app) {
  describe('Test the $() methods clone, firstChild, insertChildBefore, removeChild replaceChild:', () => {
    // clone:
    it('expects $().clone(false).children returns an empty NodeList.', () => {
      const node = app.$('.c').clone(false).children;
      expect(node.length).to.be.equal(0);
    });

    it('expects $().clone(true).children returns a NodeList with one element.', () => {
      const node = app.$('.c').clone(true).children;
      expect(node.length).to.be.equal(1);
    });

    it('expects this element to be "<p>Hi!</p>".', () => {
      const node = app.$('.c').clone(true).children;
      expect(node.item(0).outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
    });

    it('expects $().clone().children returns a NodeList with one element.', () => {
      const node = app.$('.c').clone().children;
      expect(node.length).to.be.equal(1);
    });

    it('expects this element to be "<p>Hi!</p>".', () => {
      const node = app.$('.c').clone().children;
      expect(node.item(0).outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
    });

    // firstChild
    it('expects $(".c").firstChild() to return "<p>Hi!</p>".', () => {
      expect(app.$('.c').firstChild().outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
    });

    // insertChildBefore:
    it('expects $().insertChildBefore() does nothing.', () => {
      expect(app.$().insertChildBefore().id === app.$().id).to.be.true;
    });

    it('expects $().insertChildBefore(new, first) to insert "new" as the firstChild.', () => {
      const newc = document.createElement('h1');
      newc.textContent = 'Ola!';
      const fc = app.$()[0].firstElementChild;
      app.$().insertChildBefore(newc, fc);
      expect(app.$()[0].firstElementChild.outerHTML).to.be.a('string').that.is.equal('<h1>Ola!</h1>');
    });

    // removeChild
    it('expects $().removeChild() does nothing.', () => {
      expect(app.$().removeChild().id === app.$().id).to.be.true;
    });

    it('expects $().removeChild(new) to remove the inserted child.', () => {
      const newc = app.$()[0].firstElementChild;
      app.$().removeChild(newc);
      const el = app.$()[0].firstElementChild;
      expect(el.outerHTML).to.be.a('string').that.is.equal('<h1>Hi!</h1>');
    });

    // replaceChild
    it('expects $().replaceChild() does nothing.', () => {
      expect(app.$().replaceChild().id === app.$().id).to.be.true;
    });

    it('expects $().replaceChild(new, firstChild) to replace the first child.', () => {
      const newc = document.createElement('h1');
      newc.textContent = 'Ola!';
      const fc = app.$()[0].firstElementChild;
      app.$().replaceChild(newc, fc);
      const el = app.$()[0].firstElementChild;
      expect(el.outerHTML).to.be.a('string').that.is.equal('<h1>Ola!</h1>');
    });
  });
};
