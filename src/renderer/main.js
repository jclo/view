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

'use strict';

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
