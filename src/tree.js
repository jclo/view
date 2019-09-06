/* ***************************************************************************
 *
 * Tree is an internal object that links all the internal modules.
 *
 * tree.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 *
 * @namespace View
 * @exports   -
 * @author    -
 * @since     0.0.0
 * @version   -
 * ************************************************************************ */
/* - */

'use strict';

const TV = {
  _,
  Messenger: null,
  Component: {
    Public: {},
    Generic: {},
    Dollar: {},
    Animation: {},
    Hyperscript: {},
    Render: {},
    Util: {},
  },
  Renderer: {
    Public: {},
  },
};
/* - */
