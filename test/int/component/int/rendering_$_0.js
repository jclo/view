// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules
const test1 = require('./rendering_$_1')
    , test2 = require('./rendering_$_2')
    , test3 = require('./rendering_$_3')
    , test4 = require('./rendering_$_4')
    , test5 = require('./rendering_$_5')
    , test6 = require('./rendering_$_6')
    , test7 = require('./rendering_$_7')
    , test8 = require('./rendering_$_8')
    , test9 = require('./rendering_$_9')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(View) {
  // -- Define web component
  const C = View.Component({
    render() {
      return '<div class="c"><p>Hi!</p></div>';
    },
  });

  const app1 = View.render({
    el: '#appC2',
    children: { '<C />': C },
    template: `
      <div>
        <h1>Hi!</h1>
        <C />
      </div>
    `,
  });

  const app2 = View.render({
    el: '#appC3',
    children: { '<C />': C },
    template: `
      <div>
        <h1>Hi!</h1>
        <C />
      </div>
    `,
  });

  const app3 = View.render({
    el: '#appC4',
    children: { '<C />': C },
    template: `
      <div>
        <h1>Hi!</h1>
        <C />
      </div>
    `,
  });

  const app4 = View.render({
    el: '#appC5',
    children: { '<C />': C },
    template: `
      <div>
        <h1>Hi!</h1>
        <C />
      </div>
    `,
  });

  const app5 = View.render({
    el: '#appC6',
    children: { '<C />': C },
    template: `
      <div>
        <h1>Hi!</h1>
        <C />
      </div>
    `,
  });

  const app6 = View.render({
    el: '#appC7',
    children: { '<C />': C },
    template: `
      <div>
        <h1>Hi!</h1>
        <C />
      </div>
    `,
  });

  const app7 = View.render({
    el: '#appC8',
    children: { '<C />': C },
    template: `
      <div>
        <h1>Hi!</h1>
        <C />
      </div>
    `,
  });

  describe('Test the property $:', () => {
    it('Expects View.render({...}) to inherit the property "$" that is a function.', () => {
      expect(Object.getPrototypeOf(app1)).to.own.property('$').that.is.a('function');
    });

    it('Expects $() to return an object.', () => {
      expect(app1.$()).to.be.an('object');
    });

    describe('Test $() methods:', () => {
      test1(View, app1);
      test2(View, app2);
      test3(View, app3);
      test4(View, app4);
      test5(View, app5);
      test6(View, app6);
      test7(View, app7);
      test8(View, 'appC9');
      test9(View, 'appC10');

      //
    });
  });
};
