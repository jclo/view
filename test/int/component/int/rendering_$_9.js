// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables

// function _dump(elem) {
//   const s = new XMLSerializer();
//   const str = s.serializeToString(elem);
//   console.log(str);
// }

// -- Main
module.exports = function(View, id) {
  const C1 = View.Component({
    render() {
      return `
        <div>
          <h1>My Todos</h1>
          <ul>
            <li>Swim</li>
            <li>Climb</li>
            <li>Jump</li>
            <li>Play</li>
            <li>Take a nap...</li>
          </ul>
        </div>
      `;
    },
  });

  const app = View.render({
    el: `#${id}`,
    children: { '<C1 />': C1 },
    template: `
      <div>
        <C1 />
      </div>
    `,
  });

  describe('Test the $() method diff:', () => {
    it('Expects $().diff(xml) to add the class active to the third ul child.', () => {
      const xml = C1().render().replace('<li>Jump', '<li class="active">Jump');
      const c1 = app.$getChild('<C1 />');
      c1.$().diff(xml);
      expect(c1.$('ul').children().item(2).classList.contains('active')).to.be.true;
    });
  });
};
