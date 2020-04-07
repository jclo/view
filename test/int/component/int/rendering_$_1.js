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

    it('expects $().select("h1") to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('expects $().select("h1")[0].innerHTML to return the string("Hi!").', () => {
      expect(o[0].innerHTML).to.be.a('string').that.is.equal('Hi!');
    });

    it('expects $().select("h2") to return an object.', () => {
      expect(app.$().select('h2')).to.be.a('object');
    });

    it('expects $().select("h2").id to be identical to $().id.', () => {
      expect(app.$().select('h2').id === app.$().id).to.be.true;
    });

    it('expects $().select() to return an object.', () => {
      expect(app.$().select()).to.be.a('object');
    });

    it('expects $().select().id to be identical to $().id.', () => {
      expect(app.$().select().id === app.$().id).to.be.true;
    });

    it('expects $().select(1) to return an object.', () => {
      expect(app.$().select(1)).to.be.a('object');
    });

    it('expects $().select(1).id to be identical to $().id.', () => {
      expect(app.$().select(1).id === app.$().id).to.be.true;
    });
  });

  // selectChild:
  describe('Test the method $().selectChild():', () => {
    const o = app.$().selectChild(0);

    it('expects $().selectChild(0) to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('expects $().selectChild(0)[0].innerHTML to return the string("Hi!").', () => {
      expect(o[0].innerHTML).to.be.a('string').that.is.equal('Hi!');
    });

    it('expects $().selectChild("A").id to be the same as $().id.', () => {
      expect(app.$().selectChild('A').id === app.$().id).to.be.true;
    });

    it('expects $().selectChild(9999).id to be the same as $().id.', () => {
      expect(app.$().selectChild(999).id === app.$().id).to.be.true;
    });
  });

  // parent:
  describe('Test the method $().parent():', () => {
    const o = app.$().selectChild(0).parent();

    it('expects $().selectChild(0).parent() to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('expects $().selectChild(0).parent().id to return the same id as $().id.', () => {
      expect(o.id === app.$().id).to.be.true;
    });

    it('expects $().parent() to return an object.', () => {
      expect(app.$().parent()).to.be.an('object');
    });

    it('expects $().parent().id and $().id to be identical.', () => {
      expect(app.$().parent().id === app.$().id).to.be.true;
    });
  });

  // firstParent:
  describe('Test the method $().firstParent():', () => {
    const o = app.$().select('p').firstParent();

    it('expects $().select("p").firstParent() to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('expects $().select("p").firstParent().id and $().id to be identical.', () => {
      expect(app.$().select('p').firstParent().id === app.$().id).to.be.true;
    });
  });

  // find
  describe('Test the method $().find():', () => {
    it('expects $().find("h1") to return a NodeList that contains one element.', () => {
      const n = app.$().find('h1');
      expect(n.length === 1).to.be.true;
    });

    it('expects $().find("h1").item(0).innerHTML to return a string that is equal to "Hi!".', () => {
      expect(app.$().find('h1').item(0).innerHTML).to.be.a('string').that.is.equal('Hi!');
    });
  });

  // tag
  describe('Test the method $().tag():', () => {
    it('expects $("h1").tag() to return the string "h1".', () => {
      expect(app.$('h1').tag()).to.be.a('string').that.is.equal('H1');
    });

    it('expects $("h5").tag() to return null.', () => {
      expect(app.$('h5').tag()).to.be.equal(null);
    });
  });

  // html
  describe('Test the method $().html():', () => {
    it('expects $("h1").html() to return the string "Hi!".', () => {
      expect(app.$('h1').html()).to.be.a('string').that.is.equal('Hi!');
    });

    it('expects $("h1").html("Hello!") to return an object.', () => {
      expect(app.$('h1').html('Hello!')).to.be.an('object');
    });

    it('expects $("h1").html() to return the string "Hello!".', () => {
      expect(app.$('h1').html() === 'Hello!').to.be.true;
      // restore at initial state:
      app.$('h1').html('Hi!');
    });
  });

  // empty
  describe('Test the method $().empty():', () => {
    it('expects $().empty() to remove all the childs.', () => {
      expect(app.$().empty().html() === '').to.be.true;
    });
  });
};
