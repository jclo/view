// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(Messenger) {
  describe('Test Messenger.subscribeOnce:', () => {
    const mess = Messenger();

    it('Expects Messenger().subscribeOnce("aaa", function(){}) to add the event "aaa".', () => {
      mess.subscribeOnce('aaa', () => {});
      expect(mess._db).to.be.an('object').that.have.property('aaa').that.is.an('object');
    });

    it('Expects a function listener is attached to this event.', () => {
      expect(mess._db.aaa.listenersOnce[0]).to.be.a('function');
    });

    it('Expects a second subscribeOnce("aaa", function() {}) to attach a second listener.', () => {
      mess.subscribeOnce('aaa', () => {});
      expect(mess._db.aaa.listenersOnce).to.be.an('array').that.has.lengthOf(2);
    });

    it('Expects Messenger().subscribeOnce(123, function() {}) not to register an event.', () => {
      const m = Messenger();
      m.subscribeOnce(123, () => {});
      expect(Object.keys(m._db)).to.be.an('array').that.has.lengthOf(0);
    });

    it('Expects Messenger().subscribeOnce("aaa", []) not to register an event.', () => {
      const m = Messenger();
      m.subscribeOnce('aaa', []);
      expect(m._db.aaa.listenersOnce).to.be.an('array').that.has.lengthOf(0);
    });
  });
};
