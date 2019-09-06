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
  describe('Test Messenger.publish:', () => {
    const mess = Messenger();
    function aaa() {}
    mess
      .subscribe('aaa', aaa)
      .subscribeOnce('aaa', aaa)
    ;

    it('Expects Messenger().subscribe("aaa", aaa).subscribeOnce("aaa", aaa) to register the event "aaa".', () => {
      expect(mess._db).to.be.an('object').that.have.property('aaa').that.is.an('object');
    });

    it('Expects the function aaa to be the attached listener.', () => {
      expect(mess._db.aaa.listeners[0]).to.be.equal(aaa);
      expect(mess._db.aaa.listenersOnce[0]).to.be.equal(aaa);
    });

    it('Expects publish("bbb", "payload") not to fire any events.', () => {
      mess.publish('bbb', 'payload');
      expect(mess._db.aaa.listeners[0]).to.be.equal(aaa);
      expect(mess._db.aaa.listenersOnce[0]).to.be.equal(aaa);
    });

    it('Expects publish("aaa", "payload") o fire "aaa" event.', () => {
      mess.publish('aaa', 'payload');
      expect(mess._db.aaa.listeners[0]).to.be.equal(aaa);
      expect(mess._db.aaa.listenersOnce).to.be.an('array').that.has.lengthOf(0);
    });
  });
};
