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
module.exports = function(View, id) {
  const A = View.Component({
    animate(...args) {
      this.$('.rect').animate(...args);
    },

    render() {
      return `
      <div>
        <div class="rect" style="position: absolute; top: 0; left: 0; width: 100px; height: 100px; border: 1px solid red;"></div>
      </div>`;
    },
  });

  const app = View.render({
    el: `#${id}`,
    children: { '<Aaa />': { fn: A, options: {} } },
    template: `
      <div><Aaa /></div>
    `,
  });


  describe('Test the $() method animate:', () => {
    it('expects $("...").animate(...args) to increase the value of top from 0 to 500px.', (done) => {
      const c = app.$getChild('<Aaa />');
      c.animate({ top: '500px', left: '800px' }, 'slow', 'swing', () => {
        let top = c.$('.rect').css('top').replace('px', '');
        top = parseInt(top, 10);
        expect(top).to.be.a('number').that.is.equal(500);
        done();
      });
    });
  });
};
