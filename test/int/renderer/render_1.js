// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(View) {
  const view1 = View.render({
    template: `
      <div>
        <p>Hi!</p>
      </div>
    `,
  });

  const view2 = View.render({
    el: '#appR1',
    template: `
      <div>
        <p>Hi!</p>
      </div>
    `,
  });

  // Test the lib:
  describe('Test View.render:', () => {
    it('Expects View.render({ template: "<div><p>Hi!>/p></div>"}) to return null.', () => {
      expect(view1).to.be.an('null');
    });

    it('Expects it to append "<div><p>Hi!>/p></div>" to the body.', () => {
      const text = document.body.lastElementChild.firstElementChild.innerHTML;
      expect(text).to.be.a('string').equal('Hi!');
    });

    it('Expects View.render({ el: "#app", template: "<div><p>Hi!>/p></div>"}) to return null.', () => {
      expect(view2).to.be.an('null');
    });

    it('Expects it to append the template to "<div id=appR1></div>".', () => {
      const text = document.getElementById('appR1').firstElementChild
        .firstElementChild.innerHTML;
      expect(text).to.be.a('string').equal('Hi!');
    });
  });
};
