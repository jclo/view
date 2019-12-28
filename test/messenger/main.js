// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

// -- Node modules


// -- Local modules
const constructor   = require('./constructor.js')
    , methods       = require('./methods.js')
    , subscribe     = require('./subscribe.js')
    , subscribeonce = require('./subscribeonce.js')
    , unsubscribe   = require('./unsubscribe.js')
    , publish       = require('./publish.js')
    ;


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(View) {
  describe('Test Messenger library:', () => {
    const { Messenger } = View._setTestMode().src.libin;
    constructor(Messenger);
    methods(Messenger);
    subscribe(Messenger);
    subscribeonce(Messenger);
    unsubscribe(Messenger);
    publish(Messenger);
  });
};
