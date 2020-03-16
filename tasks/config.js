/* eslint one-var: 0, semi-style: 0 */


// -- Vendor modules


// -- Local modules
const pack = require('../package.json');


// -- Local constants
const libname = 'View'
    , name    = libname.replace(/\s+/g, '').toLowerCase()
    ;


// -- Local variables


// -- Main

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname,
  parent: 'this',
  noparent: '-noparent',
  index: './index.js',
  distlink: `./_dist/lib/${name}.js`,

  // These are the embedded external libraries.
  import: {
    parent: '$__TREE.libin',
    dest: './src/libin',
    lib: [
      './node_modules/@mobilabs/messenger/_dist/lib/messenger-noparent.js',
    ],
  },

  // These are the Javascript files required to build the library.
  /* eslint-disable no-multi-spaces */
  src: {
    // This is the header section of the UMD module:
    header: './src/_header',

    // This is the code of the library that is surrounded by the UMD module
    // header and footer.
    core: [
      './src/view.js',
      './src/libin/messenger.js',
      './src/lib/_.js',

      './src/component/main.js',
      './src/component/$.js',
      './src/component/animate.js',
      './src/component/generic.js',
      './src/component/hyperscript.js',
      './src/component/render.js',
      './src/component/util.js',

      './src/renderer/main.js',
    ],

    // This is the footer section of the UMD module:
    footer: './src/_footer',
  },

  /* eslint-enable no-multi-spaces */
  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from ES6libplus v0.0.6.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};
