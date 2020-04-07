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
  // Test the lib:
  describe('Test the method $hyperscript:', () => {
    const [,, Hyperscript] = View._setTestMode();

    const C1 = View.Component({
      render() {
        const h = this.$hyperscript;
        return h(
          'div', null,
          h('p', null, 'Hi!'),
        );
      },
    });

    const C2 = View.Component({
      render() {
        const h = this.$hyperscript;
        return h(
          'div', { class: 'ii' },
          h('p', null, 'Hi!'),
        );
      },
    });

    const C3 = View.Component({
      render() {
        const h = this.$hyperscript;
        return h(
          'div', { class: 'ii' },
          h('p', { style: { 'font-family': 'helvetica', 'font-size': '20px' } }, 'Hi!'),
        );
      },
    });

    const C10 = View.Component({
      render() {
        const h = this.$hyperscript;

        return h(
          'div', null,
          h('p', null, 'Hi!'),
        );
      },
    });

    const C11 = View.Component({
      render() {
        const h = this.$hyperscript;

        return h(
          'div', null,
          h(C10, { name: 'O', options: { title: 'ooo' } }),
        );
      },
    });

    it('Expects the hyperscript component C1 to return the string "<div ><p>Hi!</p></div>".', () => {
      const c = C1();
      c.children = {};
      const xml = c.render();
      const html = Hyperscript.render(xml, c.children);
      expect(html).to.be.a('string').that.is.equal('<DIV ><P>Hi!</P></DIV>');
    });

    it('Expects the hyperscript component C2 to return the string "<div class="ii" ><p>Hi!</p></div>".', () => {
      const c = C2();
      c.children = {};
      const xml = c.render();
      const html = Hyperscript.render(xml, c.children);
      expect(html).to.be.a('string').that.is.equal('<DIV class="ii" ><P>Hi!</P></DIV>');
    });

    it('Expects the hyperscript component C3 to return the string "<div class="ii" ><p style="...">Hi!</p></div>".', () => {
      const c = C3();
      c.children = {};
      const xml = c.render();
      const html = Hyperscript.render(xml, c.children);
      expect(html).to.be.a('string').that.is.equal(
        '<DIV class="ii" ><P style="font-family: helvetica; font-size: 20px;">Hi!</P></DIV>',
      );
    });

    it('Expects the hyperscript component C11 to return the string "<div><O /></div>".', () => {
      const c = C11();
      c.children = {};
      const xml = c.render();
      const html = Hyperscript.render(xml, c.children);
      expect(html).to.be.a('string').that.is.equal('<DIV ><O></O></DIV>');
    });
  });
};
