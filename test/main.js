// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules
const { JSDOM }         = require('jsdom')
    , { XMLSerializer } = require('xmldom')
    ;


// -- Local Modules
const // View = require('../index')
    View = require('../src/view').default
    // , pack     = require('../package.json')
    , testlib  = require('./int/lib')
    , testrender1 = require('./int/renderer/render_1')
    , testcomp = require('./int/component/props')
    , test$ = require('./int/component/props$')
    , testcomp1 = require('./int/component/webcomp')
    , testhyper = require('./int/component/hyperscript')
    , testdiff = require('./int/component/diffing')
    , testcrender = require('./int/component/rendering')
    , testrender2 = require('./int/renderer/render_2')
    ;


// -- Local Constants
// const libname = 'View';


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
      <div id="appC10"></div>

      <div id="appD1"></div>
      <div id="appD2"><p>a</p><p>b</p><p>c</p></div>
      <div id="appD3"></div>
      <div id="appD4"><h2>My Todos</h2><ul><li>Swim</li><li>Climb</li><li>Jump</li><li>Play</li><li>Take a nap...</li></ul></div>
      <div id="appD5"><h2>My Todos</h2><ul></ul></div>

    </body>
  </html>
`;

const dom = new JSDOM(HTML);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent: 'node.js' };
global.XMLSerializer = XMLSerializer;
global.DOMParser = dom.window.DOMParser;

// Nota:
// If you choose 'View = require('../index')', 'display-coverage' will
// show the coverage of all the library in one file.
//
// If you want to display the coverage file by file, you must choose
// 'View = require('../src/prototypal').default'. But, in this case,
// the build isn't done, so you should pass '{{lib:name}}' as libname and
// '{{lib:version}}' as the library version.

describe('Test View:', () => {
  testlib(View, '{{lib:name}}', '{{lib:version}}', 'without new');
  // testlib(View, libname, pack.version, 'without new');

  // test View.render
  testrender1(View);

  // test view.Component
  testcomp(View);
  test$(View);
  testcomp1(View);
  testhyper(View);
  testdiff(View);
  testcrender(View);

  // test View.render/restore/remove/replace
  testrender2(View);
});
