/** **************************************************************************
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
 *  . _componenterize             transforms the selected node to a View Component,
 *  . _render                     attaches the root comp and its childs to the DOM,
 *  . _restore                    restores the View Component to its initial state,
 *  . _appendToDOM                appends the child component to the DOM,
 *  . _append                     appends a child to a component,
 *  . _remove                     removes a child from a component,
 *
 *
 * Public Static Methods:
 *  . render                      attaches the root comp and its childs to the DOM,
 *  . restore                     restores the View Component to its initial state,
 *  . append                      appends a child to a component,
 *  . remove                      removes a child from a component,
 *
 *
 *
 * @namespace    View.src.renderer.main
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* global View  */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

// IIFE_START


// -- Local modules
import Messenger from '../libin/messenger';
import _ from '../lib/_';


// -- Local constants


// -- Local variables


// -- Private Functions ----------------------------------------------------

/**
 * Fires the DOM Events.
 *
 * @function (arg1)
 * @private
 * @param {Object}          the child,
 * @returns {}              -,
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
 * @param {Object}          the child,
 * @param {Object}          the messenger object,
 * @returns {}              -,
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
 * @param {Object}          the required parameters,
 * @returns {Object}        the formatted parameters,
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
 * @param {Object}          the required parameters,
 * @returns {}              -,
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
 * Transforms the selected node to a View Component.
 *
 * @function (arg1)
 * @private
 * @param {Object}          the optional parameters,
 * @returns {}              -,
 * @since 0.0.0
 */
function _componenterize(options) {
  const opt = _filter(options);

  // Check if the node exists in the DOM. if not return null.
  if (opt.el === 'body') return null;

  // Extract an XML string from the selected node.
  let node;
  if (_.isString(opt.el)) {
    node = document.querySelector(opt.el);
  } else {
    node = opt.el;
  }
  const xmlNode0 = node.outerHTML;

  // If the node has an id, save it and remove it from the node
  // as View.Component adds an id.
  const id = node.getAttribute('id');
  if (id) {
    node.removeAttribute('id');
  }
  const xmlNode = node.outerHTML;

  // Create a View.Component from the XML string (without id) of the
  // selected node. Then, replace the current node by the new generated
  // node in the DOM.
  // Extend the components methods with the passed-in methods, if any.
  let m = {};
  if (options.methods) {
    m = options.methods;
  }
  const C = View.Component(_.extend(m, {
    render() {
      return xmlNode;
    },
  }));
  const view = C();
  const xmlNewNode = view._renderer();
  const template = document.createElement('template');
  template.innerHTML = xmlNewNode;
  const newNode = template.content.firstChild;
  node.parentNode.replaceChild(newNode, node);

  // If the initial node has an id, replace the randowmly generated id by
  // the initial id.
  if (id) {
    newNode.setAttribute('id', id);
    view.id = id;
  }

  // Attach Messenger and the XML string of the initial node to 'view'
  // and return it.
  // The XML string of the initial node is saved because View provides a
  // method View.restore to returns the node to its initial state.
  view._mess = Messenger();
  view._initialXMLNode = xmlNode0;
  return view;
}

/**
 * Attaches the root component and its children to the DOM.
 *
 * @function (arg1)
 * @private
 * @param {Object}          the parameters required to render the root component,
 * @returns {Object}        returns the root component object,
 * @since 0.0.0
 */
function _render(options) {
  const opt = _filter(options)
      ;

  if (!options.children && !options.template) {
    // If there is no children and no template, we componenterize the
    // selected node!
    return _componenterize(options);
  }

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

/**
 * Restores the View Component to its initial state.
 *
 * @function (arg1)
 * @private
 * @param {String}          the view object,
 * @returns {Boolean}       returns true if it succeeds,
 * @since 0.0.0
 */
function _restore(view) {
  if (view._initialXMLNode) {
    const template = document.createElement('template');
    template.innerHTML = view._initialXMLNode;
    const iNode = template.content.firstChild;
    view.$()[0].parentNode.replaceChild(iNode, view.$()[0]);
    return true;
  }
  return false;
}

/**
 * Appends the child component to the DOM.
 *
 * @function (arg1, arg2, arg3, arg4)
 * @private
 * @param {Object}          the parent,
 * @param {String}          the child HTML tag,
 * @param {String}          the parent node where to append the child,
 * @param {String}          insert as the last or the first child,
 * @returns {}              -,
 * @since 0.0.0
 */
/* eslint-disable no-console */
function _insertToDOM(parent, tag, el, position) {
  const XMLString = parent.$getChild(tag)._renderer();

  if (!el) {
    if (position === 'first') {
      parent.$().prepend(XMLString);
    } else {
      parent.$().appendHTML(XMLString);
    }
    return;
  }

  if (_.isString(el) && parent.$(el)[0]) {
    if (position === 'first') {
      parent.$(el).prepend(XMLString);
    } else {
      parent.$(el).appendHTML(XMLString);
    }
  } else {
    console.log('warning: View.append: params.el is not valid! Component appended to the parent node.');
    if (position === 'first') {
      parent.$().prepend(XMLString);
    } else {
      parent.$().appendHTML(XMLString);
    }
  }
}
/* eslint-enable no-console */

/**
 * Appends a child to a component.
 *
 * @function (arg1, arg2)
 * @private
 * @param {Object}          the parameters,
 * @param {String}          insert as the last or the first child,
 * @returns {Boolean}       returns true if the append succeeds,
 * @since 0.0.0
 */
/* eslint-disable no-console */
function _insert(params, position) {
  const { root }     = params
      , { children } = params
      , { el }       = params
      ;

  let { parent } = params
    , p
    , c
    , co
    , fn
    , opts
    , tag
    ;

  // If the parent isn't defined, we attach the component to the first
  // parent:
  if (!parent) {
    parent = root;
  }

  if (_.isString(parent)) {
    if (_.isObject(root) && Object.prototype.hasOwnProperty.call(root, '_cList')) {
      p = root.$getChild(parent);
      if (!p) {
        console.log(`warning: View.append: ${parent} does not exist!`);
        return null;
      }
    } else {
      console.log('warning: View.append: params.root is not valid!');
      return null;
    }
  } else if (_.isObject(parent) && Object.prototype.hasOwnProperty.call(parent, '_cList')) {
    p = parent;
  } else {
    console.log(`warning: View.append: ${parent} is improperly defined!`);
    return null;
  }

  if (!_.isLiteralObject(children)) {
    console.log('warning: View.append: params.children is not valid!');
    return null;
  }

  const keys = Object.keys(children);
  for (let i = 0; i < keys.length; i++) {
    tag = keys[i];
    c = children[keys[i]];

    if (_.isLiteralObject(c)) {
      fn = c.fn;
      opts = c.options;
    } else if (_.isFunction(c)) {
      fn = c;
      opts = undefined;
    } else {
      console.log('warning: View.append: params.children is not valid!');
      return null;
    }

    View.Component._attachChild(p, fn, opts, tag);
    _insertToDOM(p, tag, el, position);

    co = p.$getChild(tag);
    co._mess = p._mess;
    _attachMessenger(co, p._mess);

    co.events();
    _fireEvents(co);
  }
  return true;
}
/* eslint-enable no-console */

/**
 * Removes a child from a component.
 *
 * @method (arg1)
 * @public
 * @param {Object}          the parameters,
 * @returns {Boolean}       returns true if the remove succeeds,
 * @since 0.0.0
 */
/* eslint-disable no-console */
function _remove(params) {
  const { root }     = params
      , { parent }   = params
      , { children } = params
      ;

  let p
    ;

  if (_.isString(parent)) {
    if (_.isObject(root) && Object.prototype.hasOwnProperty.call(root, '_cList')) {
      p = root.$getChild(parent);
      if (!p) {
        console.log(`warning: View.append: ${parent} does not exist!`);
        return null;
      }
    } else {
      console.log('warning: View.append: params.root is not valid!');
      return null;
    }
  } else if (_.isObject(parent) && Object.prototype.hasOwnProperty.call(parent, '_cList')) {
    p = parent;
  } else {
    console.log(`warning: View.append: ${parent} is improperly defined!`);
    return null;
  }

  if (!_.isString(children)) {
    console.log('warning: View.append: params.children is not valid!');
    return null;
  }

  // Remove from DOM:
  const co = p.$getChild(children);
  const el = p.$(`#${co.id}`)[0];
  p.$(`#${co.id}`).parent().removeChild(el);

  View.Component._removeChild(p, children);

  return true;
}
/* eslint-enable no-console */


// -- Public Static Methods ------------------------------------------------

const Renderer = {

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
    return _restore(view);
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
    return _insert(params);
  },

  /**
   * Appends a child to a component as the first child.
   *
   * @method (arg1)
   * @public
   * @param {Object}        the parameters,
   * @returns {Boolean}     returns true if the append succeeds,
   * @since 0.0.0
   */
  prepend(params) {
    return _insert(params, 'first');
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
    return _remove(params);
  },

  // destroy() {
  //   // Removes the View from the DOM
  //   return this;
  // },
};


// -- Export
export default Renderer;

// IIFE_END
/* eslint-enable one-var, semi-style, no-underscore-dangle */
