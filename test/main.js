// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */


// -- Vendor Modules
const { JSDOM }  = require('jsdom')
    ;


// -- Local Modules
const View     = require('../src/view').default
    , testview = require('./int/view.js')
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
      <div id="app"></div>
    </body>
  </html>
`;

const dom = new JSDOM(HTML);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent: 'node.js' };

describe('Test View:', () => {
  testview(View);
});
