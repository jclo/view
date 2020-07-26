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
  // append & appendTextChild:
  describe('Test the methods $().append() & $().appendTextChild():', () => {
    const o = app.$().append('p');
    const c = app.$()[0].lastElementChild.outerHTML;

    it('Expects $().append("p") to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects $().append("p") to add "<p></p>" as the last child.', () => {
      expect(c === '<p></p>').to.be.true;
    });

    it('Expects app.$().append("p").appendTextChild("Hello!") to return an object.', () => {
      expect(o.appendTextChild('Hello!')).to.be.an('object');
    });

    it('Expects the last child to return the contents "Hello!".', () => {
      expect(o[0].innerHTML === 'Hello!');
    });
  });

  // appendBefore & appendAfter & replace
  describe('Test the methods $().appendBefore() & appendAfter:', () => {
    const o = app.$().appendBefore('h1').appendTextChild('Bonjour!');

    it('Expects $().appendBefore("h1").appendTextChild("Bonjour!") to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects it to be inserted as the last child.', () => {
      const el = app.$()[0].lastElementChild.outerHTML;
      expect(el === '<h1>Bonjour!</h1>').to.be.true;
    });

    it('Expects .appendTextChild("Buenos dias!", firstChild) to be inserted as the first child.', () => {
      app.$().appendBefore('h1', 'h1').appendTextChild('Buenos dias!');
      const el = app.$()[0].firstElementChild.outerHTML;
      expect(el === '<h1>Buenos dias!</h1>').to.be.true;
    });

    it('Expects $().appendAfter("h2", "h1").appendTextChild("Buongiorno!") to return an object.', () => {
      const o2 = app.$().appendAfter('h2', 'h1').appendTextChild('Buongiorno!');
      expect(o2).to.be.an('object');
    });

    it('Expects this node to be inserted as the second child.', () => {
      expect(app.$().selectChild(1)[0].outerHTML === '<h2>Buongiorno!</h2>').to.be.true;
    });

    it('Expects app.$().selectChild(0).replace("h5") to replace the first node.', () => {
      app.$().selectChild(0).replace('h5');
      const el = app.$()[0].firstElementChild.outerHTML;
      expect(el === '<h5></h5>').to.be.true;
    });
  });
};
