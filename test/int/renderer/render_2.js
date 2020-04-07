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
module.exports = function(View) {
  const C1 = View.Component({
    render() {
      return '<div class="c1"><p>Hi C1!</p></div>';
    },
  });

  const C2 = View.Component({
    render() {
      return '<div class="c2"><p>Hi C2!</p></div>';
    },
  });

  const C3 = View.Component({
    render() {
      return '<div class="c3"><p>Hi C3!</p></div>';
    },
  });

  const app1 = View.render({
    el: '#appR2',
  });

  const app2 = View.render({
    el: '#appR3',
    children: { '<C1 />': C1 },
    template: `
      <div>
        <h1>Hi!</h1>
        <C1 />
      </div>
    `,
  });


  // Test the lib:
  describe('Test View.render & View.restore:', () => {
    it('expects View.render({ el: "#app" }) to return an object.', () => {
      expect(app1).to.be.an('object');
    });

    it('expects this object to own, at least, the property "_cList", thus to be a View.Component.', () => {
      expect(app1).to.own.property('_cList');
    });

    it('expects this object to own the extra property "_initialXMLNode".', () => {
      expect(app1).to.own.property('_initialXMLNode');
    });

    it('expects this property value to be "<div id="appR2"></div>".', () => {
      expect(app1._initialXMLNode).to.be.a('string').that.is.equal('<div id="appR2"></div>');
    });

    it('expects $().append("h1") to add a child to the View.Component.', () => {
      app1.$().append('h1');
      const el = app1.$()[0].firstElementChild.outerHTML;
      expect(el).to.be.a('string').that.is.equal('<h1></h1>');
    });

    it('expects View.restore("View.Component") to return true.', () => {
      expect(View.restore(app1)).to.be.true;
    });

    it('expects View.restore("View.Component") to restore this node to its initial state.', () => {
      const el = document.querySelector('#appR2').outerHTML;
      expect(el).to.be.a('string').that.is.equal('<div id="appR2"></div>');
    });

    it('expects View.restore() to return false.', () => {
      expect(View.restore()).to.be.false;
    });
  });

  describe('Test View.append & View.prepend & View.remove:', () => {
    it('expects View.append({...}) to insert the passed-in component as the second child of C1.', () => {
      const c1 = app2.$getChild('<C1 />');

      View.append({
        root: app2,
        parent: c1,
        children: { '<C 2/>': { fn: C2, options: {} } },
      });
      expect(app2.$('.c1').selectChild(1).hasClass('c2')).to.be.true;
    });

    it('expects View.prepend({...}) to insert the passed-in component as the first child of C1.', () => {
      View.prepend({
        root: app2,
        parent: '<C1 />',
        children: { '<C 3/>': C3 },
      });
      expect(app2.$('.c1').selectChild(0).hasClass('c3')).to.be.true;
    });

    it('expects View.remove({...}) to remove the second child of C1.', () => {
      const c1 = app2.$getChild('<C1 />');

      const b = View.remove({
        root: app2,
        parent: c1,
        children: '<C 2/>',
      });
      expect(b).to.be.true;
    });

    it('expects View.remove({...}) to remove the first child of C1.', () => {
      const b = View.remove({
        root: app2,
        parent: '<C1 />',
        children: '<C 3/>',
      });
      expect(b).to.be.true;
    });
  });
};
