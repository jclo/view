/** **************************************************************************
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
 * @namespace    View.src.component.generic
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* global */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

// IIFE_START


// -- Local modules
import _ from '../lib/_';
import Dollar from './$';
import R from './render';
import Util from './util';


// -- Local constants


// -- Local variables


// -- Public ---------------------------------------------------------------

/**
 * Defines the Generic Component constructor.
 *
 * @constructor (...args)
 * @public
 * @param {}                -,
 * @returns {}              -,
 * @since 0.0.0
 */
function Construct() {
  /* eslint-disable-next-line prefer-spread, prefer-rest-params */
  this._init.apply(this, arguments);
}


const methods = {


  // -- Private Methods ----------------------------------------------------

  /**
   * Does the initializations when the component is created.
   *
   * @method (arg1)
   * @private
   * @param {Object}        the options,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {XMLString}   returns the component's XMLString,
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
   * @param {String}        the node selector (id or class),
   * @returns {Object}      returns the $ object,
   * @since 0.0.0
   */
  $: Dollar.$,

  /**
   * Returns an XMLString representation of the hyperscript template.
   * (must not be overwritten)
   *
   * @method (arg1, arg2)
   * @public
   * @param {String}        the HTML tag,
   * @param {String}        the HTML tag attributes,
   * @returns {Object}      returns an object containing the node, its attributes
   * @since 0.0.0           and the children,
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
   * @param {}              -,
   * @returns {Object}      returns the component's id and name,
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
   * @param {}              -,
   * @returns {Array}       returns the children list or null,
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
   * @param {String}        the component identity (could be tag, id or name),
   * @returns {Object}      returns the component object or null,
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
   * @param {}              -,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {Object}      returns this,
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
   * @param {String}        the event to listen,
   * @param {Function}      the listener to attach to this event,
   * @returns {Object}      returns this,
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
   * @param {String}        the event to listen,
   * @param {Object}        the payload to send,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {Object}      returns this,
   * @since 0.0.0
   */
  render() {
    return '<div></div>';
  },
};


// -- Export
export default { Construct, methods };

// IIFE_END
/* eslint-enable one-var, semi-style, no-underscore-dangle */
