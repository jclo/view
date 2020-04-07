// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { JSDOM }         = require('jsdom')
    , { XMLSerializer } = require('xmldom')
    ;


// -- Local Modules
const View = require('../src/view').default
    , test_ = require('./int/lib/_')
    , testview = require('./int/view')
    , testrender1 = require('./int/renderer/render_1')

    , testcomp = require('./int/component/props')
    , test$ = require('./int/component/props$')
    , testcomp1 = require('./int/component/webcomp')
    , testhyper = require('./int/component/hyperscript')
    , testcrender = require('./int/component/rendering')

    , testrender2 = require('./int/renderer/render_2')
    ;


// -- Local Constants


// -- Local Variables


// -- Main

// Create a Virtual DOM:
const HTML = `
<!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div id="appR1"></div>
      <div id="appR2"></div>
      <div id="appR3"></div>

      <div id="appC1"></div>
      <div id="appC2"></div>
      <div id="appC3"></div>
      <div id="appC4"></div>
      <div id="appC5"></div>
      <div id="appC6"></div>
      <div id="appC7"></div>
      <div id="appC8"></div>
      <div id="appC9"></div>
    </body>
  </html>
`;

const dom = new JSDOM(HTML);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent: 'node.js' };
global.XMLSerializer = XMLSerializer;

describe('Test View Library:', () => {
  test_(View);
  testview(View);

  // test View.render
  testrender1(View);

  // test view.Component
  testcomp(View);
  test$(View);
  testcomp1(View);
  testhyper(View);
  testcrender(View);

  // test View.render/restore/remove/replace
  testrender2(View);
  //
});
