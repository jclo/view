// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(Messenger) {
  describe('Test Messenger.unsubscribe():', () => {
    const mess = Messenger();
    function aaa() {}
    function bbb() {}
    mess
      .subscribe('aaa', aaa)
      .subscribeOnce('aaa', aaa)
    ;

    it('Expects Messenger().subscribe("aaa", aaa).subscribeOnce("aaa", aaa) to register the event "aaa".', () => {
      expect(mess._db).to.be.an('object').that.have.property('aaa').that.is.an('object');
    });

    it('Expects the function aaa to be the attached listener.', () => {
      expect(mess._db.aaa.listeners[0]).to.be.equal(aaa);
    });

    it('Expects the function aaa to be the attached Once listener.', () => {
      expect(mess._db.aaa.listenersOnce[0]).to.be.equal(aaa);
    });

    it('Expects unsubscribe("aaa", []) not to remove any listeners.', () => {
      mess.unsubscribe('aaa', []);
      expect(mess._db.aaa.listeners).to.be.an('array').that.has.lengthOf(1);
      expect(mess._db.aaa.listenersOnce).to.be.an('array').that.has.lengthOf(1);
    });

    it('Expects unsubscribe("bbb", aaa) not to remove any listeners.', () => {
      mess.unsubscribe('bbb', aaa);
      expect(mess._db.aaa.listeners).to.be.an('array').that.has.lengthOf(1);
      expect(mess._db.aaa.listenersOnce).to.be.an('array').that.has.lengthOf(1);
    });

    it('Expects unsubscribe("aaa", bbb) not to remove any listeners.', () => {
      mess.unsubscribe('aaa', bbb);
      expect(mess._db.aaa.listeners).to.be.an('array').that.has.lengthOf(1);
      expect(mess._db.aaa.listenersOnce).to.be.an('array').that.has.lengthOf(1);
    });

    it('Expects unsubscribe("aaa", aaa) to remove aaa listener.', () => {
      mess.unsubscribe('aaa', aaa);
      expect(mess._db.aaa.listeners).to.be.an('array').that.has.lengthOf(0);
      expect(mess._db.aaa.listenersOnce).to.be.an('array').that.has.lengthOf(0);
    });
  });
};
