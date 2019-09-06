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

'use strict';

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
