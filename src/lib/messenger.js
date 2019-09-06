/* ***************************************************************************
 *
 * Defines the Messenger object.
 *
 * messenger.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . _schema                     returns the event db schema,
 *  . _add                        adds a new event into the db,
 *  . _addEvents                  adds the events to the db,
 *  . _publish                    fires an event,
 *  . _unsubscribe                removes an event listener,
 *  . _subscribeOnce              adds an event listener that is fired once,
 *  . _subscribe                  adds an event listener,
 *
 *
 * Constructor:
 *  . Messenger                   creates and returns the Messenger object,
 *
 *
 * Public Methods:
 *  . subscribe                   adds an event listener,
 *  . subscribeOnce               adds an event listener that is fired once,
 *  . unsubscribe                 removes an event listener,
 *  . publish                     fires an event,
 *
 *
 *
 * @namespace    TV.Messenger
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules


  // -- Local constants


  // -- Local variables
  let methods
    ;


  // -- Private Functions ----------------------------------------------------

  /**
   * Returns the event db schema.
   *
   * @function ()
   * @private
   * @returns {Object}      returns the schema,
   * @since 0.0.0
   */
  function _schema() {
    return {
      listeners: [],
      listenersOnce: [],
    };
  }

  /**
   * Adds a new event into the db.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the event db,
   * @param {String}        the event,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _add(db, e) {
    if (!Object.prototype.hasOwnProperty.call(db, e)) {
      /* eslint-disable-next-line no-param-reassign */
      db[e] = _schema();
    }
  }

  /**
   * Adds the events to the db.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the event db,
   * @param {String/Array}  the event,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _addEvents(db, e) {
    if (typeof e === 'string') {
      _add(db, e);
    }
  }

  /**
   * Fires an event.
   *
   * @function (arg1, arg2, arg3)
   * @private
   * @param {Object}        the event db,
   * @param {String}        the event,
   * @param {Object}        the payload,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _publish(db, event, payload) {
    if (typeof event === 'string' && Object.prototype.hasOwnProperty.call(db, event)) {
      // Fires all the 'classic' listeners:
      for (let i = 0; i < db[event].listeners.length; i++) {
        db[event].listeners[i](payload);
      }
      // Fires all the listeners for once:
      for (let i = 0; i < db[event].listenersOnce.length; i++) {
        db[event].listenersOnce[i](payload);
      }
      // Remove all the event listeners for listener once:
      db[event].listenersOnce.splice(0, db[event].listenersOnce.length);
    }
  }

  /**
   * Removes an event listener.
   *
   * @function (arg1, arg2, arg3)
   * @private
   * @param {Object}        the event db,
   * @param {String}        the event,
   * @param {Function}      the listener,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _unsubscribe(db, event, listener) {
    let index;

    if (typeof event === 'string'
        && typeof listener === 'function'
        && Object.prototype.hasOwnProperty.call(db, event)) {
      index = db[event].listeners.indexOf(listener);
      if (index >= 0) {
        db[event].listeners.splice(index, 1);
      }
      index = db[event].listenersOnce.indexOf(listener);
      if (index >= 0) {
        db[event].listenersOnce.splice(index, 1);
      }
    }
  }

  /**
   * Adds an event listener that is fired once.
   *
   * @function (arg1, arg2, arg3, arg4)
   * @private
   * @param {Object}        the event db,
   * @param {String}        the event,
   * @param {Function}      the listener,
   * @param {Boolean}       listens for any events if true, registered otherwise,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _subscribeOnce(db, event, listener) {
    _addEvents(db, event);
    if (typeof event === 'string'
        && typeof listener === 'function'
        && Object.prototype.hasOwnProperty.call(db, event)) {
      db[event].listenersOnce.push(listener);
    }
  }

  /**
   * Adds an event listener.
   *
   * @function (arg1, arg2, arg3, arg4)
   * @private
   * @param {Object}        the event db,
   * @param {String}        the event,
   * @param {Function}      the listener,
   * @param {Boolean}       listens for any events if true, registered otherwise,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _subscribe(db, event, listener) {
    _addEvents(db, event);
    if (typeof event === 'string'
        && typeof listener === 'function'
        && Object.prototype.hasOwnProperty.call(db, event)) {
      db[event].listeners.push(listener);
    }
  }


  // -- Public ---------------------------------------------------------------

  /**
   * Returns the View object.
   * (Prototypal Instantiation Pattern)
   *
   * @constructor (arg1)
   * @public
   * @param {String}        the argument to be saved as an object variable,
   * @returns {Object}      returns the View object,
   * @since 0.0.0
   */
  TV.Messenger = function() {
    const obj = Object.create(methods);
    // Initializes the message database to empty:
    obj._db = {};
    return obj;
  };


  // -- Public Methods -------------------------------------------------------

  methods = {

    /**
    * Adds an event listener.
    *
    * @method (arg1, arg2)
    * @public
    * @param {String}      the event,
    * @param {Function}    the event handler,
    * @returns {Object}    returns this,
    * @since 0.0.0
    */
    subscribe(event, listener) {
      _subscribe(this._db, event, listener);
      return this;
    },

    /**
     * Adds an event listener that is fired once.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    subscribeOnce(event, listener) {
      _subscribeOnce(this._db, event, listener);
      return this;
    },

    /**
     * Removes an event listener.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Function}    the event handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    unsubscribe(event, listener) {
      _unsubscribe(this._db, event, listener);
      return this;
    },

    /**
     * Fires an event.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the event,
     * @param {Object}      the payload,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    publish(event, payload) {
      _publish(this._db, event, payload);
      return this;
    },
  };
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
