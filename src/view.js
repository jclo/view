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

'use strict';

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


  // -- Public Static Methods ------------------------------------------------

  View = {

    /**
     * Returns the internal objects for testing purpose.
     *
     * @method ()
     * @public
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
  View.VERSION = '{{lib:version}}';
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
