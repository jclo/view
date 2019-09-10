/*! ****************************************************************************
 * View v0.0.1
 *
 * A companion View library for building web applications.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2019 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * ************************************************************************** */
// Based on ES6.lib template v0.0.3
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable-next-line no-param-reassign */
    if (root.view === null) root.view = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.View = factory(root);
  }
}({{lib:parent}}, (root) => {
  // This is the list of the constants that are defined at the global level of
  // this module and are accessible to all. So, they are considered as reserved
  // words for this library.
  // const TV
  /* eslint-disable one-var, semi-style */
  let View
    , _
    ;
  /* eslint-enable one-var, semi-style */

  /* ***************************************************************************
   *
   * Tree is an internal object that links all the internal modules.
   *
   * tree.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   *
   * @namespace View
   * @exports   -
   * @author    -
   * @since     0.0.0
   * @version   -
   * ************************************************************************ */
  /* - */

  const TV = {
    _,
    Messenger: null,
    Component: {
      Public: {},
      Generic: {},
      Dollar: {},
      Animation: {},
      Hyperscript: {},
      Render: {},
      Util: {},
    },
    Renderer: {
      Public: {},
    },
  };
  /* - */


  /* ***************************************************************************
   *
   * Provides the function 'extend' that is used to fill the object tree with
   * the public static or object methods when the Javascript VM browses the
   * library from the top to the bottom. And a set of utility functions.
   *
   * _.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . extend                      extends the passed-in object with new methods,
   *  . assign                      extends source with target(s),
   *
   *  . isString                    is a given value a string?
   *  . isNumber                    is a given value a number?
   *  . isObject                    is a given variable an object?
   *  . isLiteralObject             is a given variable a literal object?
   *  . isFunction                  is a given variable a function?
   *  . isArray                     is a given value an array?
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public Static Methods ------------------------------------------------

    _ = {

      /**
       * Extends the passed-in object with new methods.
       *
       * Nota: this function mutates object.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the object to extend,
       * @param {Object}      an object containing a set of methods,
       * @returns {}          -,
       * @since 0.0.0
       */
      extend(object, methods) {
        const keys = Object.keys(methods);

        for (let i = 0; i < keys.length; i++) {
          /* eslint-disable-next-line no-param-reassign */
          object[keys[i]] = methods[keys[i]];
        }
      },

      /**
       * Extends source with target(s) while preserving the assessors.
       *
       * Nota:
       * Clones a literal object at the first level while preserving the
       * assessors (get and set). This should be the prefered method to Clones
       * a literal object or a prototype that includes get and set assessors.
       *
       * Example:
       * To clone a function prototype:
       * var a = _.assign({}, fn.prototype);  // clone the original prototype,
       * _.assign(fn2.prototype, a);          // assign it to fn2.prototype,
       *
       * @method (...arg1)
       * @public
       * @param {Object}      the objects to 'fusion',
       * @returns {Object}    returns the reassigned object,
       * @since 0.0.0
       */
      /* eslint-disable no-param-reassign, no-loop-func, prefer-rest-params */
      assign() {
        const target = arguments[0];
        let source
          , descriptors
          , i
          ;

        for (i = 1; i < arguments.length; i++) {
          source = arguments[i];
          descriptors = Object.keys(source).reduce((props, key) => {
            props[key] = Object.getOwnPropertyDescriptor(source, key);
            return props;
          }, {});
        }
        Object.defineProperties(target, descriptors);
        return target;
      },
      /* eslint-enable no-param-reassign, no-loop-func, prefer-rest-params */


      // -- Subset of Overslash ------------------------------------------------

      /**
       * Is a given value a string?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
      },

      /**
       * Is a given value a number?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
      },

      /**
       * Is a given variable an object?
       * (copied from: http://underscorejs.org)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isObject(obj) {
        const type = typeof obj;
        return (type === 'function' || type === 'object') && !!obj;
      },

      /**
       * Is a given variable a literal object?
       *
       * @method (arg1)
       * @private
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.3
       */
      isLiteralObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
      },

      /**
       * Is a given variable a function?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      },

      /**
       * Is a given value an array?
       * (Delegates to ECMA5's native Array.isArray.)
       * (copied from: http://underscorejs.org)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      },
    };
  }());
  /* eslint-enable one-var, semi-style */


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


  /* ***************************************************************************
   *
   * Defines the View object and its public method.
   *
   * View is the unique variable of this library that is exported outside
   * the library and thus accessible from the global windows. View implements
   * a method 'noconflict' to return the View variable to a previous owner if
   * any.
   *
   * view.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Private Static Methods:
   *  . _setTestMode                returns the internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this View object,
   *  . render                      renders a View into the DOM,
   *
   *
   *
   * @namespace    View
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules
    const R = TV.Renderer.Public
        ;


    // -- Local constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousView = root.View;


    // -- Local variables


    // -- Private & Public Static Methods --------------------------------------

    View = {

      /**
       * Returns the internal objects for testing purpose.
       *
       * @method ()
       * @private
       * @param {}            -,
       * @returns {Object}    returns TV tree,
       * @since 0.0.0
       */
      _setTestMode() {
        TV._ = _;
        return TV;
      },

      /**
       * Returns a reference to this View object.
       *
       * Nota:
       * Running View in noConflic mode, returns the View variable to its
       * previous owner.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the View object,
       * @since 0.0.0
       */
      noConflict() {
        /* eslint-disable-next-line no-param-reassign */
        root.View = previousView;
        return this;
      },

      /**
       * Renders a View into the DOM.
       *
       * @method ([el, components, template])
       * @public
       * @param {}            -,
       * @returns {Object}    returns the root component object,
       * @since 0.0.0
       */
      render(options) {
        // options.el: '# . node', // could be an id, a class or a node element
        // options.components: { 'tag': { component: ref, options: {} } }
        // options.template: 'XMLString',
        return R.render(options);
      },

      // append() {
      //   // Appends a child component to the view.
      //   R.append();
      //   return this;
      // },
      //
      // remove() {
      //   // Removes a child component from the view
      //   R.remove();
      //   return this;
      // },
      //
      // destroy() {
      //   R.destroy();
      //   // Removes the View from the DOM
      //   return this;
      // },
    };

    // Attaches a constant to View that provides the version of the lib.
    View.VERSION = '0.0.1';
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /* ***************************************************************************
   *
   * Defines the function that extends a child component from Generic and
   * returns the child component constructor.
   *
   * main.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . Component                   returns the child component constructor,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules
    const { Generic } = TV.Component
        ;


    // -- Local constants


    // -- Local variables


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the child component constructor.
     *
     * This function creates a child component that inherits from the Generic
     * component and extends the Generic component with its own methods.
     * Then, this function returns the child component constructor.
     *
     * @function (arg1)
     * @public
     * @param {Object}        the Child methods,
     * @returns {Function}    returns the child constructor,
     * @since 0.0.0
     */
    /* eslint-disable prefer-rest-params */
    View.Component = function(methods) {
      let args;
      const Child = function() {
        if (this instanceof Child) {
          return Generic.Construct.apply(this, args);
        }
        args = arguments;
        return new Child();
      };

      // We created our own assign method as Object.assign does not preserve
      // the getters and setters. So, do not use Object.assign here! And, do not
      // do this 'Child.prototype = _.assign(Generic.methods, methods)'! You will
      // copy the references instead of cloning the methods. And all the childs
      // will get the methods of the last created child.
      const p1 = _.assign({}, Generic.methods);
      Child.prototype = _.assign(p1, methods);
      Child.prototype.constructor = Child;
      return Child;
    };
    /* eslint-enable prefer-rest-params */
  }());
  /* eslint-enable one-var, semi-style */


  /* ***************************************************************************
   *
   * Implements the methods to manipulate the DOM.
   *
   * $.js is just an object that contains a set of methods. It implements the
   * pattern factory. Thus, $(sel) returns the selected node and the methods
   * listed below.
   *
   * Private Functions:
   *  . none,
   *
   * Public Variables:
   *  . id                          the id of selected element,
   *  . [0]                         the selected DOM element,
   *
   * Constructor:
   *  . $                           creates the component,
   *
   *
   * Public Methods:
   *  . select                      select a child element,
   *  . selectChild                 selects the nth child,
   *  . parent                      returns to the parent element,
   *  . firstParent                 returns to the root parent if defined,
   *
   *  . html                        gets/sets the HTML contents of the element,
   *  . empty                       removes all the childs from the current node,
   *
   *  . append                      appends and selects a node, defined by an HTML tag,
   *  . appendTextChild             appends a text node child to the selected node,
   *  . appendBefore                appends and selects a node before the selected node,
   *  . appendAfter                 appends and selects a node after the selected node,
   *  . replace                     replaces the current node by a new node,
   *
   *  . appendHTML                  appends an HTML string after the last child,
   *  . prepend                     appends an HTML string before the first child,
   *  . after                       appends an HTML string after the current node,
   *  . before                      appends an HTML string before the current node,
   *  . replaceWith                 replaces the current node with the given DOMString,
   *
   *  . text                        gets/sets the text contents of the element,
   *
   *  . clone                       clones the selected element,
   *  . insertChildBefore           inserts a child element before another child element,
   *  . removeChild                 removes the passed-in child element,
   *  . replaceChild                replaces a child by another,
   *  . children                    returns the children,
   *  . childIndex                  returns the children position in the parent tree,
   *  . getRect                     returns the DOMRect object that bounds,
   *
   *  . css                         gets/sets the style attribute of the element,
   *
   *  . getClassList                returns the DOMTokenList collection,
   *  . addClass                    adds a class name to the element,
   *  . addClasses                  adds a list of classes to the element,
   *  . removeClass                 removes a class name from the element,
   *  . removeClasses               removes a list of classes from the element,
   *  . toggleClass                 toggles a class name for the element,
   *  . hasClass                    checks if the element has the passed-in class,
   *
   *  . attr                        sets or gets the specified attribute,
   *  . removeAttr                  removes the specified attribute,
   *
   *  . animate                     performs an animation,
   *
   *  . on                          attachs an event listener to the current node,
   *  . off                         removes an event listener from the current node,
   *
   *
   *
   * @namespace    TV.Component.Dollar
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TV.Component.Dollar;


    // -- Local modules
    const Anim = TV.Component.Animation
        ;


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Methods -------------------------------------------------------

    function $(selector) {
      const cid = this.id;
      let el;

      /**
       * Select a child element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the selector,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const select = function(sel) {
        if (typeof sel === 'string' && this[0]) {
          const child = this[0].querySelector(sel);
          if (child) {
            this[0] = child;
          }
        }
        return this;
      };

      /**
       * Selects the specified child if it exists.
       *
       * @method (arg1)
       * @public
       * @param {Number}      the child index,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const selectChild = function(n) {
        if (Object.prototype.toString.call(n) === '[object Number]') {
          this[0] = this[0].children[n] ? this[0].children[n] : this[0];
        }
        return this;
      };


      /**
       * Returns to the parent element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const parent = function() {
        if (this.root) {
          // As a root parent is defined, we stop at it.
          if (this[0] !== this.root) {
            this[0] = this[0].parentNode;
          }
        } else {
          this[0] = this[0].parentNode;
        }
        return this;
      };

      /**
       * Returns to the root parent if defined.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const firstParent = function() {
        if (this.root) {
          this[0] = this.root;
        }
        return this;
      };

      /**
       * Gets/Sets the HTML contents of the element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the html contents to add,
       * @returns {String}    returns the node DOMString or this,
       * @since 0.0.0
       */
      const html = function(xmlString) {
        if (xmlString) {
          this[0].innerHTML = xmlString;
          return this;
        }
        return this[0].innerHTML;
      };

      /**
       * Removes all the childs from the current node.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const empty = function() {
        while (this[0].firstChild) {
          this[0].removeChild(this[0].firstChild);
        }
        return this;
      };

      /**
       * Appends and selects a node, defined by an HTML tag.
       *
       * @method (arg1)
       * @public
       * @param {String}      HTML tage name,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const append = function(tagName) {
        const element = document.createElement(tagName);
        this[0] = this[0].appendChild(element);
        return this;
      };

      /**
       * Appends a text node child to the selected node.
       *
       * @method (arg1)
       * @public
       * @param {String}      the text to apply,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const appendTextChild = function(text) {
        this[0].appendChild(document.createTextNode(text));
        return this;
      };

      /**
       * Appends and selects a node, defined by an HTML tag, before the selected node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      HTML tag name,
       * @param {String}      the selector,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const appendBefore = function(tagName, node) {
        const newChild = document.createElement(tagName)
            , child = this[0].querySelector(node)
            ;

        this[0].insertBefore(newChild, child);
        this[0] = newChild;
        return this;
      };

      /**
       * Appends and selects a node, defined by an HTML tag, after the selected node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      HTML tag name,
       * @param {String}      the selector,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const appendAfter = function(tagName, node) {
        const newChild = document.createElementNS(tagName)
            , child = this[0].querySelector(node).nextElementSibling
            ;

        this[0].insertBefore(newChild, child);
        this[0] = newChild;
        return this;
      };

      /**
       * Replaces the current node by a new node defined by an HTML tag.
       *
       * @method (arg1)
       * @public
       * @param {String}      HTML tage name,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const replace = function(tagName) {
        const element = document.createElement(tagName);
        this[0].parentNode.replaceChild(element, this[0]);
        this[0] = element;
        return this;
      };

      /**
       * Appends an HTML string after the last child of the current node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const appendHTML = function(xmlString) {
        if (typeof xmlString === 'string') {
          this[0].insertAdjacentHTML('beforeend', xmlString);
        }
        return this;
      };

      /**
       * Appends an HTML string before the first child of the current node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const prepend = function(xmlString) {
        if (typeof xmlString === 'string') {
          this[0].insertAdjacentHTML('afterbegin', xmlString);
        }
        return this;
      };

      /**
       * Appends an HTML string after the current node.
       *
       * Nota: this method adds a node after the current node only if it is
       * a child node of this component. 'after' is forbidden on the root node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const after = function(xmlString) {
        if (typeof xmlString === 'string' && this[0].id !== cid) {
          this[0].insertAdjacentHTML('afterend', xmlString);
        }
        return this;
      };

      /**
       * Appends an HTML string before the current node.
       *
       * Nota: this method adds a node before the current node only if it is
       * a child node of this component. 'before' is forbidden on the root node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const before = function(xmlString) {
        if (typeof xmlString === 'string' && this[0].id !== cid) {
          this[0].insertAdjacentHTML('beforebegin', xmlString);
        }
        return this;
      };

      /**
       * Replaces the current node with the given DOMString.
       *
       * Nota: this method replaces the current node only if it is
       * a child node of this component. 'replaceWith' is forbidden on the root node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const replaceWith = function(xmlString) {
        const oldChild = this[0]
            , parento   = oldChild.parentNode
            // , index    =  Array.prototype.indexOf.call(parent.children, oldChild)
            , wrapper  = document.createElement('div')
            ;

        if (typeof xmlString === 'string' && oldChild.id !== cid) {
          // Replace the old child by new one:
          wrapper.innerHTML = xmlString;
          const newChild = wrapper.firstChild;
          parento.replaceChild(newChild, oldChild);
        }
        return this;
      };

      /**
       * Gets/Sets the text contents of the element,
       *
       * @method (arg1)
       * @public
       * @param {String}      the text contents to add,
       * @returns {String}    returns the text contents or this;,
       * @since 0.0.0
       */
      const text = function(texte) {
        if (texte !== undefined) {
          this[0].textContent = texte;
          return this;
        }
        return this[0].textContent;
      };

      /**
       * Clones the selected element.
       *
       * @method (arg1)
       * @public
       * @param {Boolean}     true clone with children, false without,
       * @returns {Object}    returns the cloned element,
       * @since 0.0.0
       */
      const clone = function(deep) {
        if (deep === true || deep === false) {
          return this[0].cloneNode(deep);
        }
        return this[0].cloneNode(true);
      };

      /**
       * Inserts a child element before another child element.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the new node element,
       * @param {Object}      the target node element,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const insertChildBefore = function(newChild, child) {
        if (newChild) {
          this[0].insertBefore(newChild, child);
        }
        return this;
      };

      /**
       * Removes the passed-in child element.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the child element to remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const removeChild = function(child) {
        if (child) {
          this[0].removeChild(child);
        }
        return this;
      };

      /**
       * Replaces a child by another.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the new node element,
       * @param {Object}      the node element to replace,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const replaceChild = function(newChild, child) {
        if (newChild) {
          this[0].replaceChild(newChild, child);
        }
        return this;
      };

      /**
       * Returns the children.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the children HTMLCollection,
       * @since 0.0.8
       */
      const children = function() {
        return this[0].children;
      };

      /**
       * Returns the children position in the parent tree.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the children position,
       * @since 0.0.8
       */
      const childIndex = function() {
        let child = this[0]
          , index = 0
          ;

        while (child !== null) {
          child = child.previousElementSibling;
          index += 1;
        }
        return index - 1;
      };

      /**
       * Returns the DOMRect object that bounds the contents of the range.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the DOMRect object,
       * @since 0.0.8
       */
      const getRect = function() {
        return this[0] ? this[0].getBoundingClientRect() : null;
      };

      /**
       * Gets/Sets the style attribute of the element,
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the style attribute,
       * @param {String}      the style attribute value,
       * @returns {String}    returns the style attribute value or this,
       * @since 0.0.0
       */
      const css = function(styleAttr, value) {
        const arr = typeof styleAttr === 'string' ? styleAttr.split('-') : [];
        let attr = '';

        // Convert style attribute name with '-' (ex.: 'font-size' to 'fontSize'):
        for (let i = 0; i < arr.length; i++) {
          if (i === 0) {
            attr += arr[i];
          } else {
            attr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          }
        }

        if (!value) {
          // Get attribute:
          return this[0].style[attr];
        }

        // Set attribute:
        this[0].style[attr] = value;
        return this;
      };

      /**
       * Returns the DOMTokenList collection of the class attributes of the element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the DOMTokenList of the element,
       * @since 0.0.0
       */
      const getClassList = function() {
        return this[0].classList;
      };

      /**
       * Adds a class name to the element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name to add,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const addClass = function(className) {
        this[0].classList.add(className);
        return this;
      };

      /**
       * Adds a list of classes to the element.
       *
       * @method (arg1)
       * @public
       * @param {Array}       the list of classes to add,
       * @returns {Object}    returns this,
       * @since 0.0.8
       */
      const addClasses = function(classes) {
        if (Array.isArray(classes)) {
          for (let i = 0; i < classes.length; i++) {
            this[0].classList.add(classes[i]);
          }
        }
        return this;
      };

      /**
       * Removes a class name from the element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name to remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const removeClass = function(className) {
        this[0].classList.remove(className);
        return this;
      };

      /**
       * Removes a list of classes from the element.
       *
       * @method (arg1)
       * @public
       * @param {Array}       the list of classes to remove,
       * @returns {Object}    returns this,
       * @since 0.0.8
       */
      const removeClasses = function(classes) {
        if (Array.isArray(classes)) {
          for (let i = 0; i < classes.length; i++) {
            this[0].classList.remove(classes[i]);
          }
        }
        return this;
      };

      /**
       * Toggles a class name for the element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name to add/remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const toggleClass = function(className) {
        this[0].classList.toggle(className);
        return this;
      };

      /**
       * Checks if the element has the passed-in class.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.8
       */
      const hasClass = function(className) {
        const list = this[0].classList.value.split(' ');

        if (Object.prototype.toString.call(className) === '[object String]' && list.indexOf(className) !== -1) {
          return true;
        }
        return false;
      };

      /**
       * Sets or Gets the specified attribute.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the attribute name,
       * @param {String}      the attribute value,
       * @returns {String}    returns the attribute value or this,
       * @since 0.0.0
       */
      const attr = function(attribute, value) {
        if (value) {
          this[0].setAttribute(attribute, value);
          return this;
        }
        return this[0].getAttribute(attribute);
      };

      /**
       * Removes the specified attribute.
       *
       * @method (arg1)
       * @public
       * @param {String}      the attribute name,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const removeAttr = function(attribute) {
        if (attribute) {
          this[0].removeAttribute(attribute);
        }
        return this;
      };

      /**
       * Performs a custom animation on a set of CSS properties.
       *
       * @method (properties [, duration ] [, easing ] [, complete ])
       * @public
       * @param {Object}      An object of CSS properties,
       * @param {Number}      define how long the animation run,
       * @param {Easing}      the easing animation method,
       * @param {Function}    the function to call at completion,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const animate = function(...args) {
        Anim.animate(this[0], ...args);
        return this;
      };

      /**
       * Attachs an event listener to the current node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the DOM event string,
       * @param {Function}    the listner function,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const on = function(event, listener) {
        this[0].addEventListener(event, listener);
        return this;
      };

      /**
       * Removes an event listener from the current node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the DOM event string,
       * @param {Function}    the listner function,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const off = function(event, listener) {
        this[0].removeEventListener(event, listener);
        return this;
      };

      // -- Main
      if (selector) {
        // Selects the first element that matches the selector(s):
        el = document.querySelector(`#${cid}`).querySelector(selector);
      } else {
        // Selects the entire 'web component':
        el = document.querySelector(`#${cid}`);
      }

      return {
        0: el,
        id: el ? el.id : null,
        // getElement: getElement,
        select,
        selectChild,
        parent,
        firstParent,
        html,
        empty,
        append,
        appendTextChild,
        appendBefore,
        appendAfter,
        replace,
        appendHTML,
        prepend,
        after,
        before,
        replaceWith,
        text,
        clone,
        insertChildBefore,
        removeChild,
        replaceChild,
        children,
        childIndex,
        getRect,
        css,
        getClassList,
        addClass,
        addClasses,
        removeClass,
        removeClasses,
        toggleClass,
        hasClass,
        attr,
        removeAttr,
        animate,
        on,
        off,
      };
    }

    // Exports $.
    _.extend(Root, { $ });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /* ***************************************************************************
   *
   * Defines the generic component. All the created components extend this
   * component.
   *
   * generic.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   * Constructor:
   *  . Construct                   constructor,
   *
   *
   * Private Variables
   *  . _tag                        constains the tag string of the component,
   *  . _cList                      contains the list of children objects,
   *  . _mess                       the messenger object,
   *
   * Private Methods:
   *  . _init                       executes the private init when the comp. is created,
   *  . _renderer                   renders the component an its children, return XML,
   *
   *
   * Public Variables:
   *  . id                          unique id of the component (read only),
   *  . children                    list of the children components,
   *  . props                       component properties (exemple options),
   *  . name                        name of the component,
   *
   *
   * Public Methods:
   *  . $                           returns an object to manipulate the comp. in the DOM,
   *  . $hyperscript                returns an XML string of the hyperscript template,
   *  . $getIdAndName               returns the component's Id and name,
   *  . $getChildren                returns the list of the children,
   *  . $getChild                   returns a component object,
   *  . $show                       turns the component visible,
   *  . $hide                       turns the component invisible,
   *  . $listen                     listens a message,
   *  . $emit                       sends a message,
   *
   *
   * Empty Public Methods:
   *  . init                        executes the public initializations,
   *  . events                      processes the DOM events,
   *  . render                      returns the component XML string,
   *
   *
   *
   * @namespace    TV.Component.Generic
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TV.Component.Generic;


    // -- Local modules
    const { $ }    = TV.Component.Dollar
        , R        = TV.Component.Render
        , { Util } = TV.Component
        ;


    // -- Local constants


    // -- Local variables


    // -- Public ---------------------------------------------------------------

    /**
     * Defines the Generic Component constructor.
     *
     * @constructor (...args)
     * @public
     * @param {}              -,
     * @returns {}            -,
     * @since 0.0.0
     */
    function Construct() {
      /* eslint-disable-next-line prefer-spread, prefer-rest-params */
      this._init.apply(this, arguments);
    }


    // -- Private Methods ------------------------------------------------------

    const methods = {

      /**
       * Does the initializations when the component is created.
       *
       * @method (arg1)
       * @private
       * @param {Object}      the options,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      _init(options) {
        // init private:
        this._tag = null;
        this._cList = null;
        this._mess = null;

        // init public:
        // Creates an unique id for this component:
        this.id = `i${Math.random().toString(36).substr(2, 7)}`;
        this.children = null;
        this.props = {};
        /* eslint-disable-next-line prefer-rest-params */
        this.props.options = _.isLiteralObject(arguments[0]) ? arguments[0] : {};
        this.props.options = options;
        this.name = 'mynameisnobody';

        // Call the public init:
        this.init();
        return this;
      },

      /**
       * Renders the component and returns its XMLString.
       * (must not be overwritten)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {XMLString} returns the component's XMLString,
       * @since 0.0.0
       */
      _renderer() {
        return R.render(this);
      },


      // -- Defined Public Methods ---------------------------------------------

      /**
       * Returns an object to manipulate the component in the DOM.
       * (must not be overwritten - see implementation in $.js)
       *
       * @method (arg1)
       * @public
       * @param {String}      the node selector (id or class),
       * @returns {Object}    returns the $ object,
       * @since 0.0.0
       */
      $,

      /**
       * Returns an XMLString representation of the hyperscript template.
       * (must not be overwritten)
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the HTML tag,
       * @param {String}      the HTML tag attributes,
       * @returns {Object}    returns an object containing the node, its attributes
       * @since 0.0.0         and the children,
       */
      $hyperscript(nodeName, attributes) {
        const children = [];
        for (let i = 2; i < arguments.length; i++) {
          /* eslint-disable-next-line prefer-rest-params */
          children.push(arguments[i]);
        }
        return { nodeName, attributes, children };
      },

      /**
       * Returns the component's Id and name.
       * (must not be overwritten)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the component's id and name,
       * @since 0.0.0
       */
      $getIdAndName() {
        return { id: this.id, name: this.name };
      },

      /**
       * Returns the list of children.
       * (must not be overwritten)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Array}     returns the children list or null,
       * @since 0.0.0
       */
      $getChildren() {
        return Util.getChildren(this);
      },

      /**
       * Returns a component object.
       * (must not be overwritten)
       *
       * Nota:
       * the algorithm tests 'ident' in this order: tag, id, name. It
       * explores by parsing entirely the first child branch before parsing the
       * second child branch. I stops as soon as there is a match.
       *
       * So, if a child in the second child branch as the same tag or name as a
       * child in the first child branch, the algorithm returns the child in the
       * first branch only. The matching child on the second branch won't never be
       * retrieved.
       *
       * So, avoid duplicating tag or name.
       *
       * @method (arg1)
       * @public
       * @param {String}      the component identity (could be tag, id or name),
       * @returns {Object}    returns the component object or null,
       * @since 0.0.0
       */
      $getChild(ident) {
        return Util.getChild(this, ident);
      },

      /**
       * Turns the component visible.
       * (must not be overwritten)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      $show() {
        this.$().css('display', 'block');
        return this;
      },

      /**
       * Turns the component invisible.
       * (must not be overwritten)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      $hide() {
        this.$().css('display', 'none');
        return this;
      },

      /**
       * Listens for a message from another component.
       * (must not be overwritten)
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event to listen,
       * @param {Function}    the listener to attach to this event,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      $listen(event, listener) {
        this._mess.subscribe(event, listener);
        return this;
      },

      /**
       * sends for a message to another component.
       * (must not be overwritten)
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event to listen,
       * @param {Object}      the payload to send,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      $emit(event, payload) {
        this._mess.publish(event, payload);
        return this;
      },

      // destroy() {
      //   // remove the component from DOM
      // },
      // // $() {
      // // manipulate the component
      // // },
      // events() {
      //   // ???
      // },
      // // Observable is questionable
      // on() { // subscribe, listen
      //   //
      // },
      // once() { // subscribeOnce, listenOnce
      //   //
      // },
      // off() { // unsubscribe, unlisten
      //   //
      // },
      // fire() { // trigger, send, emit
      //   //
      // },


      // -- Empty Public Methods -----------------------------------------------

      /**
       * Does the initializations when the component is created.
       * (could be overwritten)
       *
       * Nota:
       * 'props.options' are initialized when the component is instantiated. Be
       * careful not to overwrite it.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      init() {
        return this;
      },

      /**
       * Processes the DOM events.
       * (could be overwritten)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      events() {
        return this;
      },

      /**
       * Returns an XMLString.
       * (could be overwritten)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      render() {
        return '<div></div>';
      },
    };


    // Exports the constructor function and the methods.
    _.extend(Root, { Construct, methods });
    //
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /* ***************************************************************************
   *
   * Performs a custom animation on a set of CSS properties.
   *
   * animate.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _swing                      defines the default easing method,
   *  . _extractArgs                extracts the optional arguments of 'animate',
   *  . _normalizeCssPropertyName   normalizes the CSS properties,
   *  . _getProps                   retrieves the CSS property values,
   *  . _run                        performs the animation,
   *
   *
   * Public Static Methods:
   *  . animate                     performs a custom animation on a set of CSS
   *                                properties,
   *
   *
   * @namespace    TV.Component.Animation
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TV.Component.Animation;


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Defines the default easing method.
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Number}        the current lapse time,
     * @param {Number}        the initial CSS property value,
     * @param {Number}        the difference between the final and the initial value,
     * @param {Number}        the animation duration,
     * @returns {Number}      returns the value of the CSS property at the current
     * @since 0.0.0           lapse time,
     */
    /* eslint-disable no-mixed-operators */
    function _swing(t, b, c, d) {
      return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
    } /* eslint-enable no-mixed-operators */

    /**
     * Extracts the optional arguments of 'animate'.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {?}             duration, easing or callback,
     * @param {?}             easing or callback,
     * @param {Object}        the function to call at completion,
     * @returns {Object}      returns an object with the properties duration,
     *                        easing, and callback,
     * @since 0.0.0
     */
    function _extractArgs(...args) {
      const op1 = args[0]
          , op2 = args[1]
          , op3 = args[2]
          ;

      let nargs
        , duration
        , easing
        , callback
        ;

      // How many optional arguments?
      if (!op1 && !op2 && !op3) {
        nargs = 0;
      } else if (op1 && !op2 && !op2) {
        nargs = 1;
      } else if (op1 && op2 && !op3) {
        nargs = 2;
      } else {
        nargs = 3;
      }

      switch (nargs) {
        case 0:
          break;

        case 1:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          } else if (_.isString(op1)) {
            easing = op1;
          } else if (_.isFunction(op1)) {
            callback = op1;
          }
          break;

        case 2:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
            if (_.isString(op2)) {
              easing = op2;
            } else if (_.isFunction(op2)) {
              callback = op2;
            }
          } else if (_.isString(op1)) {
            easing = op1;
            if (_.isFunction(op2)) {
              callback = op2;
            }
          }
          break;

        case 3:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          }
          if (_.isString(op2)) {
            easing = op2;
          }
          if (_.isFunction(op3)) {
            callback = op3;
          }
          break;

        default:
          break;
      }

      return {
        duration,
        easing,
        callback,
      };
    }

    /**
     * Normalizes the CSS properties.
     * (replace '-' between composite name by camelcase style).
     * Ex: font-size -> fontSize
     *
     * @function (arg1)
     * @private
     * @param {String}        the CSS property name,
     * @returns {String}      the normalized CSS property name,
     * @since 0.0.0
     */
    function _normalizeCssPropertyName(name) {
      const arr = _.isString(name) ? name.split('-') : []
          ;

      // Convert name with '-' (ex.: 'font-size' to 'fontSize'):
      let normalized = '';
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          normalized += arr[i];
        } else {
          normalized += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
      }
      return normalized;
    }

    /**
     * Retrieves the CSS property values for the given node.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the given node,
     * @param {Object}        the CSS properties to animate,
     * @returns {Object}      returns an object with the properties initial,
     * @since 0.0.0           change, suffix, per animated property,
     */
    function _getProps(el, properties) {
      const keys  = Object.keys(properties)
          , style = window.getComputedStyle(el)
          , props = {}
          , names = []
          ;

      let name
        , cssValue
        , cssParent
        , suffix
        ;

      // Parse the properties:
      for (let i = 0; i < keys.length; i++) {
        // Normalize the name of the property:
        name = _normalizeCssPropertyName(keys[i]);
        // Check it is a valid CSS property:
        cssValue = style.getPropertyValue(name);
        if (cssValue) {
          names.push(name);
          cssValue = parseFloat(cssValue, 10);
          suffix = properties[keys[i]].replace(/[0-9.]/g, '');
          // Absolute or relative?
          if (suffix === '%') {
            // Relative, convert pixel value returned by 'getComputedStyle' in %:
            cssParent = parseFloat(window.getComputedStyle(el.parentNode).getPropertyValue(name));
            cssValue = (cssValue / cssParent) * 100;
          }
          props[name] = {
            initial: cssValue,
            change: parseFloat(properties[keys[i]]) - cssValue,
            suffix,
          };
        }
      }
      props.name = names;
      return props;
    }

    /**
     * Updates dynamically the CSS properties from their initial value to their final.
     *
     * @function (arg1, arg2, arg3, arg4, arg5, arg6)
     * @private
     * @param {Object}        the given node,
     * @param {Object}        the CSS properties to update,
     * @param {Function}      the easing method,
     * @param {Number}        the animation duration,
     * @param {Number}        the animation step,
     * @param {Function}      the function to call at the completion,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _run(el, properties, easing, duration, delay, callback) {
      const props = _getProps(el, properties)
          , elem = el
          ;

      let lapseOfTime = 0
        , value
        ;

      const timer = setInterval(() => {
        // easing:
        for (let i = 0; i < props.name.length; i++) {
          value = easing(
            lapseOfTime,
            props[props.name[i]].initial,
            props[props.name[i]].change,
            duration,
          );
          elem.style[props.name[i]] = value + props[props.name[i]].suffix;
        }
        lapseOfTime += delay;
        if (lapseOfTime > duration) {
          clearInterval(timer);
          if (callback) callback();
        }
      }, delay);
    }


    // -- Public Methods -------------------------------------------------------

    _.extend(Root, {

      /**
       * Performs a custom animation on a set of CSS properties.
       *
       * @method (properties [, duration ] [, easing ] [, complete ])
       * @public
       * @param {Object}      An object of CSS properties,
       * @param {Number}      define how long the animation run,
       * @param {Easing}      the easing animation method,
       * @param {Function}    the function to call at completion,
       * @returns {}          -,
       * @since 0.0.0
       */
      animate(node, properties, ...args) {
        const DTIME = 400
            , FAST  = 200
            , SLOW  = 600
            , INC   = 10
            , delay = INC
            ;


        // Is the argument properties an object?
        if (!_.isLiteralObject(properties)) {
          return;
        }

        // Extract the optional arguments:
        const argu = _extractArgs(...args);

        // Set the duration:
        const duration = _.isNumber(argu.duration) && argu.duration > 0
          ? argu.duration
          : (function(arg) {
            if (arg === 'fast') return FAST;
            if (arg === 'slow') return SLOW;
            return DTIME;
          }(argu.duration));

        // Set the easing (swing only for the time being):
        const easing = (window.Easing && window.Easing[argu.easing])
          ? window.Easing[argu.easing]
          : _swing;

        // Set the callback:
        const callback = argu.callback ? argu.callback : null;

        // Run the animation:
        _run(node, properties, easing, duration, delay, callback);
      },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /* ***************************************************************************
   *
   * Converts an hyperscript object to a node element.
   *
   * hyperscript.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _reshuffle                  rebuilds the component tags,
   *  . _stringify                  returns the attribute value converted to a string,
   *  . _render                     converts an hyperscript object to a node element,
   *
   *
   * Public Static Methods:
   *  . render                      converts an hyperscript object to an XMLString,
   *
   *
   *
   * @namespace    TV.Component.Hyperscript
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TV.Component.Hyperscript;


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Rebuilds the component tags.
     *
     * Nota:
     * When serialized the component tags become '<cxx></cxx>'. We reformat them
     * as it should be, i.e. '<Cxx />'. Besides, we update 'cList' to link
     * the component tag to the component object ({ '<Cxx />': Cxx }).
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {String}        the serialized node,
     * @param {Object}        the cList object,
     * @param {Object}        the local cList object,
     * @returns {String}      returns the reformatted serialized node,
     * @since 0.0.0
     */
    /* eslint-disable no-param-reassign */
    function _reshuffle(node, cList, locList) {
      const keys = Object.keys(locList)
          ;

      for (let i = 0; i < keys.length; i++) {
        node = node
          .replace(`</${keys[i].toLowerCase()}>`, '')
          .replace(keys[i].toLowerCase(), `${keys[i]} /`);

        cList[`<${keys[i]} />`] = locList[keys[i]];
      }
      return node;
    }
    /* eslint-enable no-param-reassign */

    /**
     * Returns the attribute value converted to a string.
     *
     * Nota:
     * This function converts a style attribute like this:
     *  . style: { 'font-family': 'helvetica', 'font-size': '20px' }
     *
     * @function (arg1)
     * @private
     * @param {Object}        the attribute value,
     * @returns {String}      returns a string of the attribute value,
     * @since 0.0.0
     */
    function _stringify(attr) {
      const keys = Object.keys(attr)
          ;

      let s = '';
      for (let i = 0; i < keys.length; i++) {
        s += i < keys.length - 1
          ? `${keys[i]}: ${attr[keys[i]]}; `
          : `${keys[i]}: ${attr[keys[i]]};`;
      }
      return s;
    }

    /**
     * Converts an hyperscript object to a node element.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the hyperscript object,
     * @param {Object}        the local version of cList to link a tag to a component,
     * @returns {Object}      the node representation,
     * @since 0.0.0
     */
    function _render(vnode, locList) {
      const { nodeName } = vnode
          , { attributes } = vnode
          , { children } = vnode
          ;

      let el
        , keys
        , value
        , obj
        , id
        , i
        ;

      // Checks if vnode is a string. If it is the case, it means that this node
      // is in fact a text node. So, we return the created element text node.
      if (_.isString(vnode)) {
        return document.createTextNode(vnode);
      }

      // nodeName could be an HTML tag, an hyperscript node or a Component.
      switch (typeof nodeName) {
        // nodeName is an HTML tag. We create a node element from this tag and
        // we attach the attributes defined by 'attributes'. The 'attributes'
        // could be a value or an object if this attribute is a style.
        case 'string':
          el = document.createElement(nodeName);
          keys = attributes ? Object.keys(attributes) : [];
          for (i = 0; i < keys.length; i++) {
            value = _.isObject(attributes[keys[i]])
              ? _stringify(attributes[keys[i]])
              : attributes[keys[i]];
            el.setAttribute(keys[i], value);
          }
          break;

        // 'nodeName' is a function. It could be an hyperscript object or a sub
        // 'component'. If the object returned by the executed function nodeName
        // has the method 'render', it is a component otherwise it is an
        // hyperscript object.
        case 'function':
          obj = nodeName();
          if (obj.render) {
            // We do not process subcomponents otherwise they are merged with
            // the current node and we can't access them independently. Thus,
            // we create a tag ('<Cxx />') instead and this Component is processed
            // independently so it inherits of an unique id and a reference in cList.
            // If the name isn't provided, we create an unique identifier for this
            // subcomponent but it becomes then difficult to access it.
            id = attributes && attributes.name
              ? attributes.name
              : `C${Math.random().toString(36).substr(2, 7)}`;
            /* eslint-disable-next-line no-param-reassign */
            locList[id] = {
              fn: nodeName,
              options: attributes.options ? attributes.options : null,
            };
            el = _render({ nodeName: id, attributes: null, children: [] }, locList);
          } else {
            // We process recursively the hyperscript objects.
            el = _render(obj, locList);
          }
          break;

        default:
          throw new Error(
            `hypserscript._render: nodeName is a ${typeof nodeName} ???`,
          );
      }

      // Recursively processes all of its children:
      for (i = 0; i < children.length; i++) {
        el.appendChild(_render(children[i], locList));
      }

      return el;
    }


    // -- Public Methods -------------------------------------------------------

    _.extend(Root, {

      /**
       * Converts an hyperscript object to a node and returns its string representation.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the hyperscript object,
       * @param {Object}      the cList object,
       * @returns {String}    returns the string represention of the hyperscript object,
       * @since 0.0.0
       */
      render(vnode, cList) {
        const s = new XMLSerializer()
            , locList = {}
            ;

        const node = s.serializeToString(_render(vnode, locList)).replace('xmlns="http://www.w3.org/1999/xhtml"', '');
        return _reshuffle(node, cList, locList);
      },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /* ***************************************************************************
   *
   * Implements the _renderer method.
   *
   * render.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _format                     formats the children object,
   *  . _render                     renders the component and its children,
   *
   *
   * Public Static Methods:
   *  . render                      renders the component and its children,
   *
   *
   *
   * @namespace    TV.Component.Render
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TV.Component.Render;


    // -- Local modules
    const Hyper = TV.Component.Hyperscript
        ;


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Formats the children object.
     *
     * Nota:
     * it returns: { tag1: { fn: function, options: options }, tag2: {...}, ... }
     *
     * @function (arg1)
     * @private
     * @param {Object}        the children object,
     * @returns {Object}      returns the formated children object,
     * @since 0.0.0
     */
    function _format(children) {
      if (!_.isLiteralObject(children)) {
        return {};
      }

      const newc = {};
      const childs = Object.keys(children);
      let child;
      for (let i = 0; i < childs.length; i++) {
        child = childs[i];

        if (_.isFunction(children[child])) {
          // is { tag: function }
          newc[child] = {
            fn: children[child],
            options: null,
          };
        } else if (_.isLiteralObject(children[child])
            && _.isFunction(children[child].fn)) {
          // is { tag: { fn: function, options: options }}
          newc[child] = {
            fn: children[child].fn,
            options: children[child].options,
          };
        } else {
          newc[child] = {
            fn: null,
            options: null,
          };
          /* eslint-disable-next-line no-console */
          console.log('warning: this component list is invalid. key "c" is missing!');
        }
      }

      return newc;
    }

    /**
     * Renders the component and its children.
     *
     * @function (arg1)
     * @private
     * @param {Object}        the component object,
     * @returns {XMLString}   returns the XMLString representation,
     * @since 0.0.0
     */
    /* eslint-disable no-param-reassign */
    function _render(co) {
      let xml
        , t
        ;

      // Render the component and check if it is an hyperscript:
      xml = co.render();
      if (_.isLiteralObject(xml) && _.isString(xml.nodeName)) {
        // This is an hyperscript object. We need to convert it to a serialized
        // node:
        co.children = {};
        xml = Hyper.render(xml, co.children);
      }

      // Add an unique id to this component:
      if (xml.match(/^\s*<div/)) {
        t = xml.replace(/^\s*<div/, `<div id="${co.id}"`);
      } else if (xml.match(/^\s*<header/)) {
        t = xml.replace(/^\s*<header/, `<header id="${co.id}"`);
      } else if (xml.match(/^\s*<footer/)) {
        t = xml.replace(/^\s*<footer/, `<footer id="${co.id}"`);
      } else {
        t = xml;
      }

      // Has this component children?
      if (co.children) {
        // This component includes components, render them:
        // Format children as this: { tag : { fn: function, options: options }}
        co.children = _format(co.children);
        co._cList = {};
        const ctags = Object.keys(co.children);
        let tag;
        let c;
        for (let i = 0; i < ctags.length; i++) {
          tag = ctags[i];
          if (_.isFunction(co.children[tag].fn)) {
            // Instantiate the child by passing the options:
            c = co.children[tag].fn(co.children[tag].options);
            c._tag = tag;
            // Replace the children tag by its rendered template:
            t = t.replace(tag, c._renderer());
            // Save the children object in a list:
            co._cList[tag.replace(/[^a-zA-z0-9]/g, '')] = c;
          } else {
            /* eslint-disable-next-line no-console */
            console.log(`warning: there is no component associated to this tag: ${tag}!`);
          }
        }
      }

      // Returns the XMLString representation.
      return t;
    }
    /* eslint-enable no-param-reassign */


    // -- Public Methods -------------------------------------------------------

    _.extend(Root, {

      /**
       * Renders the component and its children.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the component object,
       * @returns {XMLString} returns the XMLString representation,
       * @since 0.0.0
       */
      render(co) {
        return _render(co);
      },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /* ***************************************************************************
   *
   * A set of utility functions for View.Component.
   *
   * util.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _getList                    processes the children list,
   *  . _search                     searches for the matching child,
   *
   *
   * Public Static Methods:
   *  . getChildren                 returns the children list,
   *  . getChild                    returns the child matching the given identity,
   *
   *
   *
   * @namespace    TV.Component.Util
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TV.Component.Util;


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Processes the children list.
     *
     * @function (arg1)
     * @private
     * @param {Object}        the parent object,
     * @returns {Array}       returns the child list,
     * @since 0.0.0
     */
    function _getList(co) {
      const keys = Object.keys(co._cList)
          , list = []
          ;

      for (let i = 0; i < keys.length; i++) {
        list.push({
          id: co._cList[keys[i]].id,
          name: co._cList[keys[i]].name,
        });
      }
      return list;
    }

    /**
     * Searches for the child having the passed-in identity.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the parent object,
     * @param {String}        the child identity (tag, id or name),
     * @returns {Object}      returns the child object or null,
     * @since 0.0.0
     */
    function _search(co, ident) {
      if (!co._cList) return null;

      // Processes recursively cList to find a matching child.
      const keys = Object.keys(co._cList);
      let key;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        if (ident === co._cList[key]._tag
          || ident === co._cList[key].id
          || ident === co._cList[key].name) {
          return co._cList[key];
        }
        const child = _search(co._cList[key], ident);
        if (child) return child;
      }
      return null;
    }


    // -- Public Methods -------------------------------------------------------

    _.extend(Root, {

      /**
       * Returns the children list.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the parent component object,
       * @returns {Array}     returns the children list,
       * @since 0.0.0
       */
      getChildren(co) {
        return co._cList ? _getList(co) : null;
      },

      /**
       * Returns the child component matching the passed-in identity.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the parent component object,
       * @param {String}      the child identity (tag, id or name),
       * @returns {Object}    returns the matching child component,
       * @since 0.0.0
       */
      getChild(co, ident) {
        return ident && _.isString(ident) ? _search(co, ident) : null;
      },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /* ***************************************************************************
   *
   * Implements the View methods to render and attach a component to the DOM.
   *
   * main.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _fireEvents                 fires the DOM events,
   *  . _attachMessenger            attaches the messenger object to all childs,
   *  . _filter                     filters the parameters passed to View.render(),
   *  . _attachTemplateDOM          attaches the XML string to the DOM,
   *  . _render                     attaches the root comp and its childs to the DOM,
   *
   *
   * Public Static Methods:
   *  . render                      attaches the root comp and its childs to the DOM,
   *
   *
   *
   * @namespace    TV.Renderer.Public
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = TV.Renderer.Public;


    // -- Local modules
    const { Messenger } = TV
        ;


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Fires the DOM Events.
     *
     * @function (arg1)
     * @private
     * @param {Object}        the child,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _fireEvents(co) {
      // Processes recursively cList to fire child events.
      if (co._cList) {
        const keys = Object.keys(co._cList);
        for (let i = 0; i < keys.length; i++) {
          co._cList[keys[i]].events();
          _fireEvents(co._cList[keys[i]]);
        }
      }
    }

    /**
     * Attaches the messenger object to all childs.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the child,
     * @param {Object}        the messenger object,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _attachMessenger(co, mess) {
      // Processes recursively cList to attach the messenger object to
      // all the childs.
      if (co._cList) {
        const keys = Object.keys(co._cList);
        for (let i = 0; i < keys.length; i++) {
          /* eslint-disable-next-line no-param-reassign */
          co._cList[keys[i]]._mess = mess;
          _attachMessenger(co._cList[keys[i]], mess);
        }
      }
    }

    /**
     * Filters the parameters passed to View.render().
     *
     * @function (arg1)
     * @private
     * @param {Object}        the required parameters,
     * @returns {Object}      the formatted parameters,
     * @since 0.0.0
     */
    function _filter(options) {
      const opt = { el: 'body', children: null, template: '<div></div>' };

      // Check if el is an id, a class or a node element:
      if (options.el) {
        if (_.isString(options.el)
          && (options.el.charAt(0) === '#' || options.el.charAt(0) === '.')) {
          opt.el = options.el;
        } else if (_.isObject(options.el) && options.el.namespaceURI) {
          opt.el = options.el;
        } else {
          /* eslint-disable-next-line no-console */
          console.log('warning: el must be an id, a class or a node element!');
        }
      }

      // Check if the template is a string containing the tag <div>, <header> or
      // <footer:
      if (_.isString(options.template)
        && (options.template.includes('<div')
          || options.template.includes('<header')
          || options.template.includes('<footer'))) {
        opt.template = options.template;
      } else {
        /* eslint-disable-next-line no-console */
        console.log(
          'warning: template must be an XMLString starting with <div or <header or <footer!',
        );
      }

      // There is no need to check if children is properly formatted or not
      // as it is checked by the method component._renderer() before being
      // processed.
      opt.children = options.children;

      return opt;
    }

    /**
     * Attaches the XML string to the DOM.
     *
     * @function (arg1)
     * @private
     * @param {Object}        the required parameters,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _attachTemplateDOM(opt) {
      const node = _.isString(opt.el) ? document.querySelector(opt.el) : opt.el;

      if (opt.el === 'body') {
        // Append to body:
        node.innerHTML += opt.template;
      } else {
        // Replace el childs if any:
        node.innerHTML = opt.template;
      }
    }

    /**
     * Attaches the root component and its children to the DOM.
     *
     * @function (arg1)
     * @private
     * @param {Object}        the parameters required to render the root component,
     * @returns {Object}      returns the root component object,
     * @since 0.0.0
     */
    function _render(options) {
      const opt = _filter(options)
          ;

      if (!opt.children) {
        // No components. Insert template only!
        _attachTemplateDOM(opt);
        return null;
      }

      // Ok. Create the root component and attach it to the DOM:
      const RootComp = View.Component({
        render() {
          this.name = 'firstparent';
          this.children = opt.children;
          return opt.template;
        },
      });
      const rootc = RootComp();
      opt.template = rootc._renderer();
      _attachTemplateDOM(opt);

      // Attach the messenger broker to the firstparent and all childs:
      rootc._mess = Messenger();
      _attachMessenger(rootc, rootc._mess);

      // Now all the components are attached to the DOM, fire the DOM events
      // for each component:
      _fireEvents(rootc);

      // Returns the root component object.
      return rootc;
    }


    // -- Public Methods -------------------------------------------------------

    _.extend(Root, {

      /**
       * Attaches the root component and its children to the DOM.
       *
       * @method (arg1)
       * @public
       * @param {Object}        the parameters required to render the root component,
       * @returns {Object}      returns the root component object,
       * @since 0.0.0
       */
      render(params) {
        return _render(params);
      },
      // append() {
      //   // Appends a child component to the view.
      //   return this;
      // },
      //
      // remove() {
      //   // Removes a child component from the view
      //   return this;
      // },
      //
      // destroy() {
      //   // Removes the View from the DOM
      //   return this;
      // },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  // Returns the library name:
  return View;
}));
