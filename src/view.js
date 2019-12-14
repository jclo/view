/** **************************************************************************
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
 *  . restore                     restores the View Component to its initial state,
 *  . append                      appends a child to a component,
 *  . prepend                     appends a child to a comp. before the first child,
 *  . remove                      removes a child from a component,
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

    /**
     * Restores the View Component to its initial state.
     *
     * @method (arg1)
     * @public
     * @param {Object}        the view object,
     * @returns {Boolean}     returns true if the restore succeeds,
     * @since 0.0.0
     */
    restore(view) {
      return R.restore(view);
    },

    /**
     * Appends a child to a component.
     *
     * @method (arg1)
     * @public
     * @param {Object}        the parameters,
     * @returns {Boolean}     returns true if the append succeeds,
     * @since 0.0.0
     */
    append(params) {
      return R.append(params);
    },

    /**
     * Appends a child to a component before the first child,
     *
     * @method (arg1)
     * @public
     * @param {Object}        the parameters,
     * @returns {Boolean}     returns true if the append succeeds,
     * @since 0.0.0
     */
    prepend(params) {
      return R.prepend(params);
    },

    /**
     * Removes a child from a component.
     *
     * @method (arg1)
     * @public
     * @param {Object}        the parameters,
     * @returns {Boolean}     returns true if the remove succeeds,
     * @since 0.0.0
     */
    remove(params) {
      return R.remove(params);
    },

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
