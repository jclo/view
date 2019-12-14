/** **************************************************************************
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
 * Semi Private Static Methods:
 *  . Component._attachChild      attaches a child to the passed-in component,
 *  . Component._removeChild      removes a child from the passed-in component,
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
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules
  const { Generic } = TV.Component
      , R           = TV.Component.Render
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

  /**
   * Attaches a child to the passed-in component.
   *
   * @function (arg1, arg2, arg3, arg4)
   * @private
   * @param {Object}        the parent component,
   * @param {Function}      the child component,
   * @param {Object}        the child options,
   * @param {String}        the child HTML tag,
   * @returns {}            -,
   * @since 0.0.0
   */
  View.Component._attachChild = function(co, child, options, tag) {
    R.attachChild(co, child, options, tag);
  };

  /**
   * Removes a child from the passed-in component.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the parent component,
   * @param {String}        the child HTML tag,
   * @returns {}            -,
   * @since 0.0.0
   */
  View.Component._removeChild = function(co, child) {
    R.removeChild(co, child);
  };
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
