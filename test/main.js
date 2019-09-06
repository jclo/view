// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { JSDOM }  = require('jsdom')
    ;


// -- Local modules
const View     = require('../index.js')
    , messenger = require('./messenger/main.js')
    , testview = require('./int/view.js')
    ;


// -- Local constants


// -- Local variables

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


// -- Main
describe('Test View:', () => {
  messenger(View);
  testview(View);
});
