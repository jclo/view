// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules
const rendering1 = require('./int/rendering_1')
    , rendering2 = require('./int/rendering_2')

    , rendering$0 = require('./int/rendering_$_0')

    , rendering3 = require('./int/rendering_3')
    , rendering4 = require('./int/rendering_4')
    , rendering5 = require('./int/rendering_5')
    , rendering6 = require('./int/rendering_6')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(View) {
  describe('Test Rendering a Component in the DOM:', () => {
    describe('Test rendering a basic component:', () => {
      const C = View.Component({
        render() {
          return `
            <div>
              <p>Hi!</p>
            </div>
          `;
        },
      });

      const app = View.render({
        el: '#appC1',
        children: { '<C />': C },
        template: `
          <div>
            <C />
          </div>
        `,
      });

      it('Expects View.render({...}) to return an object.', () => {
        expect(app).to.be.an('object');
      });

      rendering1(View, app);
      rendering2(View, app);
      rendering$0(View);
      rendering3(View, app);
      rendering4(View, app);
      rendering5(View, app);
      rendering6(View, app);
    });
  });
};
