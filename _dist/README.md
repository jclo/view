# View

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->

[![NPM install][npm-install-image]][npm-install-url]

`View` is a companion View library for building web applications. On the opposite of React, VueJS and Angular, View focuses on the viewing operations only. Besides, `View` has a very fast learning curve as it doesn't introduce any new directives, pseudo-code, etc. Thus, `View` is only intended to create web components, insert them into the DOM and update them.

If you master, HTML, CSS, Javascript and the DOM, you are almost done!

`View` is intended to run on ECMAScript 2015 (ES6) compliant browsers.


## Quick Startup

View introduces the concept of `View Component` only. And, as a `View Component` is just a plain old Javascript object, it is easy to understand.

A `View component` looks like this:

```javascript
const C = View.Component({
  render() {
    return '<div><p>Hi!</p></div>';
  },
});
```
It is just a Javascript object that inherits from `View Component`. In its minimalist form, it contains only a `render` method that returns an XML string.

When your `View Component` is defined, you just have to attach it to the DOM through the static method render:

```Javascript
View.render({
  el: '#app',
  children: { '<C />': C },
  template: `
    <div>
      <C />
    </div>
  `,
});
```

And you get that in the DOM:

```html
<div id="app">
  <div id="i9t0img1">
    <div id="ih4423b9">
      <p>Hi!</p>
    </div>
  </div>
</div>
```

Simple isn't!

But of course, you can do much more. You can encapsulate a component inside another component, you can interact with a component, you can send and receive messages from components, you can create animated components, etc.


<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [View](#view)
	- [Quick Startup](#quick-startup)
	- [Installation](#installation)
	- [Create a View](#create-a-view)
		- [The simplest View](#the-simplest-view)
		- [A more concrete View](#a-more-concrete-view)
	- [Create a View Component](#create-a-view-component)
		- [The simplest View Component](#the-simplest-view-component)
		- [A more concrete View Component](#a-more-concrete-view-component)
		- [A Named View Component](#a-named-view-component)
		- [A composite View Component](#a-composite-view-component)
		- [Extend the View Component with custom methods](#extend-the-view-component-with-custom-methods)
		- [Add DOM Events to View Component](#add-dom-events-to-view-component)
		- [Create an animation](#create-an-animation)
		- [Send and Receive Messages](#send-and-receive-messages)
		- [Hyperscript](#hyperscript)
	- [Interact with View Components](#interact-with-view-components)
		- [A better way](#a-better-way)
	- [Reference](#reference)
		- [View](#view)
		- [View Component Methods](#view-component-methods)
		- [$() methods](#-methods)
	- [License](#license)

<!-- /TOC -->


## Installation

```bash
install @mobilabs/view --save
```

## Create a View

### The simplest View

```Javascript
View.render({
  template: `
    <div>
      <p>Hi!</p>
    </div>
  `,
});
```
As nothing else as an HTML block is defined here, `View` renders the block in the body of the HTML page like this:

```html
<body>
  <div>
    <p>Hi!</p>
  </div>
</body>
```

### A more concrete View

```javascript
const C = View.Component({
  render() {
    return '<div><p>Hi!</p></div>';
  },
});

View.render({
  el: '#app',
  children: { '<C />': C },
  template: `
    <div>
      <C />
    </div>
  `,
});
```

In the example above, we rendered the component `C` into the DOM and we attached it to the node with the `id` `app`.

The property `el` could be an `id`, a `class` or a `DOM element`.

The property `children` associates the tag `<C />` to the `View Component` `C`.

The property template is just an XML string. A template always consists of a set of HTML tags surrounded by a `div`, a `header` or a `footer` tag.

If it isn't the case, the template is ignored and `View.render()` prints a `warning message` to the browser's console.

The tag `<C />` gives the position of the component `C` in the template.

A component tag is always a string starting with `<` and ending with ` />` (the space is mandatory).

If everything goes well, the DOM contains:

```html
<div id="app">
  <div id="ihihjzw6">
    <div id="ie6sr3dm">
      <p>Hi!</p>
    </div>
  </div>
</div>
```

As you can notice, each component has a unique `id`. This `id` is randomly created by `View.render()`.

`View.render()` returns an object. This object is the `root component`. All the other components are the children of the `root component`.

So, to get the `view` object, you have to write:

```javascript
const view = View.render({
  el: '#app',
  children: { '<C />': C },
  template: `
    <div>
      <C />
    </div>
  `,
});
```

This object `view` allows us to interact with the children components. We will see how later on.


## Create a View Component

### The simplest View Component

```javascript
const C = View.Component({
  render() {
    return '<div><p>Hi!</p></div>';
  },
});
```

This component `C` inherits from `View.Component`. In its simplest form, it implements a method `render` only that returns a simple XML string.

From now, we call `template` The XML string returned by the method `render`.

A View component template is always a set of HTML tags surrounded by a `div`, a `header` or a `footer` tag.

If it isn't the case, the component won't be inserted into the DOM and a warning message will be displayed to the browser's console.

### A more concrete View Component

```javascript
const C = View.Component({
  init() {
    this.message = 'Hi';
  },

  render() {
    return `<div><p>${this.message}</p></div>`;
  },
});
```
`View.component` provides an empty `init` method that is executed before the component is rendered.

Thus, you can implements the `init` method and use it to initialize a few variables and include them in the template as it is a simple Javascript string.


### A Named View Component

You can provide a name to your `View component`. This can be done through the method `init` like this:

```Javascript
const C = View.Component({
  init() {
    this.name = 'hello_comp';
  },

  render() {
    return '<div><p>Hi!</p></div>';
  },
});
```

Naming a component is useful to interact with it. You will see how later on.


### A composite View Component

As said in the introduction a `View component` can insert another `View component` following the principle of the `Russian dolls`.

So, you can do:

```Javascript
const C1 = View.Component({
  render() {
    return `
      <div>
        <h2>My Subtitle</h2>
      </div>
    `;
  },
});

const C2 = View.Component({
  render() {
    this.children = { 'C1 />': C1 };
    return `
      <div>
        <h1>My Title</h1>
        <C1 />
      </div>
    `;
  },
});

const view = View.render({
  el: '#app',
  children: { '<C2 />': C2 },
  template: `
    <div>
      <C2 />
    </div>
  `,
});
```

As you can notice, `C1` is a simple `View component` while `C2` is a `View component` that includes another `View component`.

The tag `>C1 />` defines the position of the `C1` component inside the template of the `C2` component.

The variable `this.children` links the tag `<C1 />` with the variable `C1` that defines the `C1  component`.

After the `View.render()` method is executed, the DOM contains:

```html
<div id="app">
  <div id="iehfbl6v">
    <div id="i9nsypb1">
      <h1>My Title</h1>
      <div id="ip7l4e96">
        <h2>My Subtitle</h2>
      </div>
    </div>
  </div>
</div>
```

### Extend the View Component with custom methods

```javascript
const C1 = View.Component({

  updateTile(title) {
    this.$('h1').text(title);
  },

  render() {
    return `
      <div>
        <h1>---</h1>
      </div>
    `;
  },
});
```

As you can notice, we added to this `View component` the custom method `updateTitle`. This method changes the title when it is called (we will see later on how to call it).

`updateTitle` relies on a set of primitives to interact with the component node in the DOM.

The method `$` has a behaviour similar to jQuery. `$('h1')` selects the child `h1` and `.text(title)` replaces the text in between the two tags `<h1></h1>`.

`$` can interact only with the node of the component it belongs to. With `$` you cannot access to the parent node of this component or the sibling nodes.

`$` is prepositioned to the root node of the component. So,

```javascript
this.$().addClass('aaa');
```

will add the class `aaa` to the first `div` of the node like this:

```html
<div id="i9t0img1" class="aaa">
  <h1>Title</h1>
</div>
```

So, now you have learned how to interact with the component into the DOM.


### Add DOM Events to View Component

This is an example of a simple counter:

```javascript
const C = View.Component({
  init() {
    this.props.options.counter = 0;
  },

  events() {
    let { counter } = this.props.options;

    // Increment the counter:
    this.$('.plus').on('click', () => {
      counter += 1;
      this.$('h1').text(counter);
    });

    // Decrement the counter:
    this.$('.minus').on('click', () => {
      counter -= 1;
      this.$('h1').text(counter);
    });
  },

  render() {
    return `
    <div>
      <h1>${this.props.options.counter}</h1>
      <button class="minus">-</button>
      <button class="plus">+</button>
    </div>
    `;
  },
});
```

When the user clicks on the `button +`, the code:

```javascript
this.$('.plus').on('click', () => {
  counter += 1;
  this.$('h1').text(counter);
});
```

increments the variable `counter` and inserts its new value between the tags `<h1></h1>`.

And, when the user clicks on the `button -`, the code:

```javascript
this.$('.minus').on('click', () => {
  counter -= 1;
  this.$('h1').text(counter);
});
```
decrements the variable `counter` and inserts its new value between the tags `<h1></h1>`.

The `events` method is automatically called when the component is instantiated.

Thus, you just need to insert your code inside the method `events` and your code is automatically executed when the component is rendered.

You have learned now how to implement DOM events.

### Create an animation

You can easily animate an element in the DOM with the method `$().animate` like this:

```Javascript
const C = View.Component({

  animate(...args) {
    this.$('.rect').animate(...args);
  },

  render() {
    return `
    <div>
      <div class="rect" style="position: absolute; top: 0; left: 0; width: 100px; height: 100px; border: 1px solid red;"></div>
    </div>`;
  }
});
```

In the above example, we have defined a rectangle with a width and height of `100px` positioned at the top left corner of the browser window.

This component has a custom method `animate` that processes an animation thanks to:

```Javascript
this.$('.rect').animate(...args);
```

If you pass the arguments:

```javascript
animate({ top: '500px', left: '800px' }, 'slow', 'swing', callback)
```

The rectangle moves from (0, 0) to (500, 800) when the method `animate` is called (we will see later on how to call a component method).

### Send and Receive Messages

Of course, you can create a View component with two methods to send and receive messages from a caller like this:

```javascript
const C1 = View.Component({

  sendMessage() {
    return 'my message';
  },

  listenMessage(message) {
    // do want you want with this message
  },

  render() {
    return `
      <div>
        <h1>Title</h1>
      </div>
    `;
  },
});
```

But, this is not very convenient.

`View` implements a `message bus` that allows components to communicate between them or to the outside word.

Thus, a component can send or receive messages like this:

```javascript
const C1 = View.Component({

  events() {
    this.$listen('c1:title', (data) => {
      this.updateTitle(data);
      this.$emit('c1:feedback', 'Done!');
    });
  },

  updateTitle(title) {
    this.$('h3').text(title);
  },

  render() {
    return `
    <div>
      <h3>???</h3>
    </div>
    `;
  }
});
```

This component listens for the event `c1:title` from an emitter (another component or the outside world). When it receives the message, it passes the received payload to the method `updateTitle` (that updates the title in the DOM) and then it sends the message `Done!` to listeners (anybody can listen an event) listening the event `c1:feedback`.

Naming an event with two substrings separated with the character `:` is purely conventional. Here the first substring is the name of the component and the second substring defines the nature of the event. It is up to you to choose your convention.

The method `$listen` is defined inside the method `events` to be called automatically when the component is instantiated.

Now, you know how to send and receive messages to `View components`.

### Hyperscript

Until now, we defined a template as an XML string. `View.Component` implements an `hyperscript` converter. Thus, if you prefer, you can define your template like this:

```javascript
const H = View.Component({
  render: function() {
    const h = this.$hyperscript;

    return h('div', { class: 'h' },
      h('p', { style: 'font-weight: bold; font-style: italic;' }, 'My paragraph ...')
    );
  }
});
```

The syntax is the following:

```javascript
h('HTML tag', 'attribute', 'value')
```

Or, you can replace the value by a child node like this:

```javascript
h('HTML tag', 'attribute',
  h('HTML tag', 'attribute', 'value')
)
```

You can also inserts a child component like this:

```javascript
const H = View.Component({
  render: function() {
    const h = this.$hyperscript;

    return h('div', null,
      h('p', null, 'My paragraph ...'),
      h(Ooo, { name: 'Ooo', options: { title: 'ooo' } })
    );
  }
});
```

This example shows how to insert the component `Ooo`. The property `name` defines the tag name of the component without the surrounding `<  />`.

Well, you can now write your template with `hyperscript` if you prefer.


## Interact with View Components

We learned, so far, how to create a `View component`, add custom methods, render the component, change part of the component in the DOM, manage DOM events, send and receive messages.

There are still an operation we haven't learned. How to call the methods of a component. Remember, we explain earlier that `View.render` returns the `root component object`:

```javascript
const view = View.render({
  el: '#app',
  children: { '<C />': C },
  template: `
    <div>
      <C />
    </div>
  `,
});
```

```html
<div id="app">
  <div id="ihihjzw6">      <----- the root component object
    <div id="ie6sr3dm">
      <p>Hi!</p>
    </div>
  </div>
</div>
```

The `root component object` is a `View.Component`. Thus, it inherits of all the methods defined by `View.Component`.

Among these methods, there is one interesting method: `$getChild`.

You can use this method to retrieve a child component by its `tag`, its `id` or its `name`:

```javascript
const child = view.$getChild('i2qyl7qa');
```

The method `$getChild` parses all the component tree (all levels) to find a children with the `id` `i2qyl7qa`. In case of success, it returns the component object otherwise it returns null.

The method `$getChild` parses entirely a branch before parsing a second branch. Thus, if a child of the first child matches, it stops. If a child of the second child has the same tag, id or name, it won't never be reached.

Once, you get a child object, you can process it by calling its standard or custom methods.

Now, you know how to call a `View component` `method`.


### A better way  

As we already explained `View components` can listen and send messages to their counterparts or to the outside world.

Thus, sending message is an option to require actions from a component.

For instance, we can request an action from the footer component by doing this:

```javascript
view.$listen('footer:feedback', (message) => {
  // process message
});

view.$emit('footer:setCopyright', 'Copyright (c) John Doe. All rights reserved.');
```

`$emit` sends an event to the `footer` component with a `payload`. `$listen` and waits for a response.


## Reference

### View

```
Static Methods                  | Description
```
```
Component(options)              | returns the child component constructor,
render({...})                   | renders the components in the DOM and returns the root component object,
restore(view),                  | restores the DOM to its initial state,
append({...})                   | adds a component to a defined component as the last child,
prepend({...})                  | adds a component to a defined component as the first child,
remove({...})                   | removes a component from a defined component,
```


### View Component Methods

```
Methods                         | Description
```
```
$(sel)                          | returns an object to manipulate the comp. in the DOM,
$hyperscript(h)                 | returns an XML string of the hyperscript template,
$getIdAndName()                 | returns the component's Id and name,
$getChildren()                  | returns the list of the first level children,
$getChild(tag/id/name)          | returns the matching child object,
$show()                         | turns the component visible,
$hide                           | turns the component invisible,
$listen(event, handler)         | listens a message,
$emit(event, payload)           | sends a message,
```


### $() methods

```
Methods                         | Description
```
```
$()                             | selects the View Component and returns this,
$(sel)                          | selects the child element with the attribute 'sel' and returns this,
$().id                          | returns the id of selected element,
$()[0]                          | returns the selected DOM element,

$().select(el)                  | selects the child element with the attribute 'sel' and returns this
$().selectChild(n)              | selects the nth child,
$().parent()                    | selects the parent node,
$().firstParent()               | selects the root parent node if defined,

$().find(sel)                   | returns the NodeList of the matching children,
$().tag()                       | returns the nag name of the selected element,

$().html()                      | returns the child element(s) of the selected element.
$().html(xml)                   | replaces the child element by a new element defined by the passed-in XML string and returns this,
$().empty()                     | removes all the child nodes and returns this,

$().append('tag')               | inserts the element (defined by the HTML tag) after the last child node and returns this,
$().appendTextChild('text')     | appends a text child node to the selected element and return this,
$().appendBefore('tag')         | inserts the element before the selected element and returns this,
$().appendAfter('tag')          | inserts the element after the selected element and returns this,
$().replace('tag')              | replaces the selected element by the passed-in element and returns this,

$().appendHTML(xml)             | inserts the element (defined by the passed-in XML string) after the last child node and returns this,
$().prepend(xml)                | inserts the element before the first child node and returns this,
$(el).after(xml)¹               | inserts the element after the selected element and returns this,
$(el).before(xml)¹              | inserts the element before the selected element and returns this,
$(el)replaceWith(xml)¹          | replaces the selected element by the passed-in element and returns this,

$().text()                      | returns the contents of the selected element,
$().text('string')              | replaces the text contents and returns this,

$().clone(deep)                 | clones the selected node if deep is false, clones node and childs if deep is true,
$().firstChild()                | returns the first child,
$().insertChildBefore(n, c)     | inserts the child 'n' before the child 'c'  and returns this,
$().removeChild(child)          | removes the child 'child'  and returns this,
$().replaceChild(n, c)          | replaces the child 'c' by the child 'n'  and returns this,
$().children()                  | returns a DOM object with all the node children,
$().childIndex()                | returns the child index (0 for the first child),
$().getRect()                   | returns the position and size of the node,

$().css(style)                  | returns the style value,
$().css(style, value)           | sets the style value and returns this,

$().getClassList()              | returns a DOMTokenList (getClassList() is a wrapper around classList),
$().addClass('className')       | adds 'className' to the selected element and returns this,
$().addClasses([...])           | adds an array of classes and returns this,
$().removeClass('className')    | removes 'className' from the selected element and returns this,
$().removeClasses([...])        | removes an array of classes and returns this,
$().toggleClass('className')    | adds or removes 'className' to/from the selected element and returns this,
$().hasClass('class')           | returns true if the node has the class 'class' or false if not,

$().attr(attribute)             | returns the attribute value of the selected element,
$().attr(attribute, value)      | sets the attribute of the selected element,
$().removeAttr(attribute)       | removes the attribute from the selected element,

$().animate(props, d, e, cb)    | changes dynamically the CSS attributes,

$().diff(XMLString)             | updates the selected DOM elements that differ from the passed-in template and return this,

$(el).on(event, listener)       | adds an event listener to the selected child and returns this.
$(el).off(event, listener)      | removes the attached event listener from the selected child and returns this.
```
¹ *after, before and replacewith could only apply to a child element and not to the Component itself*,


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/view.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/@mobilabs/view.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@mobilabs/view.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/view.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/view/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/view/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/view/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/@mobilabs/view.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/view
[npm-install-url]: https://nodei.co/npm/@mobilabs/view
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/@mobilabs/view
[travis-url]: https://travis-ci.org/jclo/view
[coveralls-url]: https://coveralls.io/github/jclo/view?branch=master
[dependencies-url]: https://david-dm.org/jclo/view
[devdependencies-url]: https://david-dm.org/jclo/view?type=dev
[license-url]: http://opensource.org/licenses/MIT
