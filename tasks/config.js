// ESLint declarations:
/* eslint */

'use strict';

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname: 'View',
  parent: 'this',
  noparent: '-noparent',
  index: './index.js',
  // These are the Javascript files required to build the library.
  /* eslint-disable no-multi-spaces */
  src: [
    // These three files (_header, tree.js and extend.js) must be declared in
    // this order as they create the umd module, define the object tree and
    // the function to fill the tree!
    './src/_header',
    './src/tree.js',
    './src/lib/_.js',
    './src/lib/messenger.js',

    './src/view.js',
    './src/component/main.js',
    './src/component/$.js',           // this file must be listed before generic.js
    './src/component/generic.js',     // as generic.js refer to $,
    './src/component/animate.js',
    './src/component/hyperscript.js',
    './src/component/render.js',
    './src/component/util.js',

    './src/renderer/main.js',

    // This file must always be the last one as it closes the umd module.
    './src/_footer',
  ],
  /* eslint-enable no-multi-spaces */
  license: ['/*! ****************************************************************************',
    ' * {{lib:name}} v{{lib:version}}',
    ' *',
    ' * {{lib:description}}.',
    ' * (you can download it from npm or github repositories)',
    ' * Copyright (c) 2019 {{lib:author}} <{{lib:email}}> ({{lib:url}}).',
    ' * Released under the MIT license. You may obtain a copy of the License',
    ' * at: http://www.opensource.org/licenses/mit-license.php).',
    ' * ************************************************************************** */',
    ''].join('\n'),
};
