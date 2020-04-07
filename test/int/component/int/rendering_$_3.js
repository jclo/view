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
  // appendHTML & prepend & after & before & replaceWith & text:
  describe('Test the $() methods appendHTML, prepend, after, before and replaceWith:', () => {
    it('expects $().appendHTML() to return an object.', () => {
      expect(app.$().appendHTML()).to.be.an('object');
    });

    it('expects $().appendHTML(xml) to add "xml" as the last child.', () => {
      app.$().appendHTML('<h5>Hello!</h5>');
      const last = app.$()[0].lastElementChild.outerHTML;
      expect(last).to.be.a('string').that.is.equal('<h5>Hello!</h5>');
    });

    it('expects $().prepend() to return an object.', () => {
      expect(app.$().prepend()).to.be.an('object');
    });

    it('expects $().prepend(xml) to add "xml" as the first child.', () => {
      app.$().prepend('<h1>Buenos dias!</h1>');
      const last = app.$()[0].firstElementChild.outerHTML;
      expect(last).to.be.a('string').that.is.equal('<h1>Buenos dias!</h1>');
    });

    it('expects $().after() to return an object.', () => {
      expect(app.$().after()).to.be.an('object');
    });

    it('expects $(".c").after(xml) to add "xml" as the second child.', () => {
      app.$('.c').after('<h3>Buongiorno!</h3>');
      const el = app.$('.c')[0].nextElementSibling.outerHTML;
      expect(el).to.be.a('string').that.is.equal('<h3>Buongiorno!</h3>');
    });

    it('expects $().before() to return an object.', () => {
      expect(app.$().before()).to.be.an('object');
    });

    it('expects $("h3").before(xml) to add "xml" as the second child.', () => {
      app.$('.c').before('<h2>Guten Tag !</h2>');
      const el = app.$('.c')[0].previousElementSibling.outerHTML;
      expect(el).to.be.a('string').that.is.equal('<h2>Guten Tag !</h2>');
    });

    it('expects $().replaceWith() to return an object.', () => {
      expect(app.$().replaceWith()).to.be.an('object');
    });

    it('expects $("p").replaceWith("<p>Ola!</p>") replaces "Hi!" by "Ola!".', () => {
      const o = app.$('p').replaceWith('<p>Ola!</p>');
      expect(o[0].outerHTML).to.be.a('string').that.is.equal('<p>Ola!</p>');
    });

    it('expects $("p").text("Houra!)" replaces "Ola!" by "Houra!".', () => {
      app.$('p').text('Houra!');
      expect(app.$('p')[0].innerHTML).to.be.a('string').that.is.equal('Houra!');
    });

    it('expects $("p").text() to return "Houra!".', () => {
      expect(app.$('p').text()).to.be.a('string').that.is.equal('Houra!');
    });
  });
};
