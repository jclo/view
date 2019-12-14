/** **************************************************************************
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
 *  . firstChild                  returns the firstChild element,
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
 *  . trigger                     fires the event associated to the selected node,
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

'use strict';

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
    let el
      , el0
      ;

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
      if (this._root) {
        this[0] = this._root;
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
     * Returns the firstChild.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns the firstChild,
     * @since 0.0.0
     */
    const firstChild = function() {
      return this[0].firstChild;
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

    /**
     * Fires the event associated to the selected node.
     *
     * @method (arg1)
     * @public
     * @param {String}      the event name,
     * @returns {Boolean}   returns false if preventDefault was activated
     * @since 0.0.0         otherwise true,
     */
    const trigger = function(event) {
      return this[0].dispatchEvent(new Event(event));
    };

    // -- Main
    if (selector) {
      // Selects the first element that matches the selector(s):
      el = document.querySelector(`#${cid}`).querySelector(selector);
    } else {
      // Selects the entire 'web component':
      el = document.querySelector(`#${cid}`);
      el0 = el;
    }

    return {
      0: el,
      id: el ? el.id : null,
      _root: el0,
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
      firstChild,
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
      trigger,
    };
  }

  // Exports $.
  _.extend(Root, { $ });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
