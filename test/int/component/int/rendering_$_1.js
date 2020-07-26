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
  // select:
  describe('Test the method $().select():', () => {
    const o = app.$().select('h1');

    it('Expects $().select("h1") to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects $().select("h1")[0].innerHTML to return the string("Hi!").', () => {
      expect(o[0].innerHTML).to.be.a('string').that.is.equal('Hi!');
    });

    it('Expects $().select("h2") to return an object.', () => {
      expect(app.$().select('h2')).to.be.a('object');
    });

    it('Expects $().select("h2").id to be identical to $().id.', () => {
      expect(app.$().select('h2').id === app.$().id).to.be.true;
    });

    it('Expects $().select() to return an object.', () => {
      expect(app.$().select()).to.be.a('object');
    });

    it('Expects $().select().id to be identical to $().id.', () => {
      expect(app.$().select().id === app.$().id).to.be.true;
    });

    it('Expects $().select(1) to return an object.', () => {
      expect(app.$().select(1)).to.be.a('object');
    });

    it('Expects $().select(1).id to be identical to $().id.', () => {
      expect(app.$().select(1).id === app.$().id).to.be.true;
    });
  });

  // selectChild:
  describe('Test the method $().selectChild():', () => {
    const o = app.$().selectChild(0);

    it('Expects $().selectChild(0) to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects $().selectChild(0)[0].innerHTML to return the string("Hi!").', () => {
      expect(o[0].innerHTML).to.be.a('string').that.is.equal('Hi!');
    });

    it('Expects $().selectChild("A").id to be the same as $().id.', () => {
      expect(app.$().selectChild('A').id === app.$().id).to.be.true;
    });

    it('Expects $().selectChild(9999).id to be the same as $().id.', () => {
      expect(app.$().selectChild(999).id === app.$().id).to.be.true;
    });
  });

  // parent:
  describe('Test the method $().parent():', () => {
    const o = app.$().selectChild(0).parent();

    it('Expects $().selectChild(0).parent() to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects $().selectChild(0).parent().id to return the same id as $().id.', () => {
      expect(o.id === app.$().id).to.be.true;
    });

    it('Expects $().parent() to return an object.', () => {
      expect(app.$().parent()).to.be.an('object');
    });

    it('Expects $().parent().id and $().id to be identical.', () => {
      expect(app.$().parent().id === app.$().id).to.be.true;
    });
  });

  // firstParent:
  describe('Test the method $().firstParent():', () => {
    const o = app.$().select('p').firstParent();

    it('Expects $().select("p").firstParent() to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects $().select("p").firstParent().id and $().id to be identical.', () => {
      expect(app.$().select('p').firstParent().id === app.$().id).to.be.true;
    });
  });

  // find
  describe('Test the method $().find():', () => {
    it('Expects $().find("h1") to return a NodeList that contains one element.', () => {
      const n = app.$().find('h1');
      expect(n.length === 1).to.be.true;
    });

    it('Expects $().find("h1").item(0).innerHTML to return a string that is equal to "Hi!".', () => {
      expect(app.$().find('h1').item(0).innerHTML).to.be.a('string').that.is.equal('Hi!');
    });
  });

  // tag
  describe('Test the method $().tag():', () => {
    it('Expects $("h1").tag() to return the string "h1".', () => {
      expect(app.$('h1').tag()).to.be.a('string').that.is.equal('H1');
    });

    it('Expects $("h5").tag() to return null.', () => {
      expect(app.$('h5').tag()).to.be.equal(null);
    });
  });

  // html
  describe('Test the method $().html():', () => {
    it('Expects $("h1").html() to return the string "Hi!".', () => {
      expect(app.$('h1').html()).to.be.a('string').that.is.equal('Hi!');
    });

    it('Expects $("h1").html("Hello!") to return an object.', () => {
      expect(app.$('h1').html('Hello!')).to.be.an('object');
    });

    it('Expects $("h1").html() to return the string "Hello!".', () => {
      expect(app.$('h1').html() === 'Hello!').to.be.true;
      // restore at initial state:
      app.$('h1').html('Hi!');
    });
  });

  // empty
  describe('Test the method $().empty():', () => {
    it('Expects $().empty() to remove all the childs.', () => {
      expect(app.$().empty().html() === '').to.be.true;
    });
  });
};
