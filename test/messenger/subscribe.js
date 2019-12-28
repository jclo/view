// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables

// { _db: { aaa: { listeners: [Array], listenersOnce: [] } } }

// -- Main
module.exports = function(Messenger) {
  describe('Test Messenger.subscribe():', () => {
    const mess = Messenger();

    it('Expects Messenger().subscribe("aaa", function() {}) to add the event "aaa".', () => {
      mess.subscribe('aaa', () => {});
      expect(mess._db).to.be.an('object').that.have.property('aaa').that.is.an('object');
    });

    it('Expects a function listener is attached to this event.', () => {
      expect(mess._db.aaa.listeners[0]).to.be.a('function');
    });

    it('Expects a second subscribe("aaa", function() {}) to attach a second listener.', () => {
      mess.subscribe('aaa', () => {});
      expect(mess._db.aaa.listeners).to.be.an('array').that.has.lengthOf(2);
    });

    it('Expects Messenger().subscribe(123, function() {}) not to register an event.', () => {
      const m = Messenger();
      m.subscribe(123, () => {});
      expect(Object.keys(m._db)).to.be.an('array').that.has.lengthOf(0);
    });

    it('Expects Messenger().subscribe("aaa", []) not to register an event.', () => {
      const m = Messenger();
      m.subscribe('aaa', []);
      expect(m._db.aaa.listeners).to.be.an('array').that.has.lengthOf(0);
    });
  });
};
