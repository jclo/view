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
  describe('Test the $() method css:', () => {
    it('Expects $("h1").css("font-size", "1em") to add a style to the node.', () => {
      expect(app.$('h1').css('font-size', '1em')[0].outerHTML)
        .to.be.a('string').that.is.equal('<h1 style="font-size: 1em;">Hi!</h1>');
    });

    it('Expects $("h1").css("font-size") to return the value "1em".', () => {
      expect(app.$('h1').css('font-size')).to.be.a('string').that.is.equal('1em');
    });
  });

  describe('Test the $() methods getClassList, addClass(es), removeClass(es), toggleClass, hasClass:', () => {
    it('Expects $(".c").getClassList() to return a DOMTokenList.', () => {
      expect(app.$('.c').getClassList()).to.be.a('DOMTokenList');
    });

    it('Expects this DOMTokenList to contains one item.', () => {
      const D = app.$('.c').getClassList();
      expect(D.length).to.be.a('number').that.is.equal(1);
    });

    it('Expects this item to be the string "c".', () => {
      const D = app.$('.c').getClassList();
      expect(D.item(0)).to.be.a('string').that.is.equal('c');
    });

    it('Expects $(".c").addClass("d") to add the class "d" to the node.', () => {
      app.$('.c').addClass('d');
      const D = app.$('.c').getClassList();
      expect(D.item(1)).to.be.a('string').that.is.equal('d');
    });

    it('Expects $(".c").addClasses(["e", "f"]) to add the classes "e" and "f" to the node.', () => {
      app.$('.c').addClasses(['e', 'f']);
      const D = app.$('.c').getClassList();
      const v = D.value;
      expect(v).to.be.a('string').that.is.equal('c d e f');
    });

    it('Expects $(".c").removeClass("f") to remove the class "f" from the node.', () => {
      app.$('.c').removeClass('f');
      const D = app.$('.c').getClassList();
      const v = D.value;
      expect(v).to.be.a('string').that.is.equal('c d e');
    });

    it('Expects $(".c").removeClasses(["d", "e"]) to remove the classes "d" and "e" from the node.', () => {
      app.$('.c').removeClasses(['d', 'e']);
      const D = app.$('.c').getClassList();
      const v = D.value;
      expect(v).to.be.a('string').that.is.equal('c');
    });

    it('Expects $(".c").toggleClass("d") to add the class "d" to the node.', () => {
      app.$('.c').toggleClass('d');
      const D = app.$('.c').getClassList();
      const v = D.value;
      expect(v).to.be.a('string').that.is.equal('c d');
    });

    it('Expects $(".c").toggleClass(["d"]) to remove the class "d" from the node.', () => {
      app.$('.c').toggleClass('d');
      const D = app.$('.c').getClassList();
      const v = D.value;
      expect(v).to.be.a('string').that.is.equal('c');
    });

    it('Expects $(".c").hasClass("c") to return true.', () => {
      expect(app.$('.c').hasClass('c')).to.be.true;
    });

    it('Expects $(".c").hasClass("d") to return false.', () => {
      expect(app.$('.c').hasClass('d')).to.be.false;
    });
  });
};
