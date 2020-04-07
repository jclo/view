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


// -- Main
module.exports = function(View) {
  describe('Test a component:', () => {
    const C = View.Component({
      render() {
        return '<div><p>Hi!</p></div>';
      },
    });
    const c = C();




    /*
    console.log(c.render());
    console.log(c.$getIdAndName()); {id: 'xxx', name: 'mynameisnoby'}
    console.log(c.$getChildren()) null
    console.log(c.$getChild()) null
    */


    it('expects View.Component({...}) to create the View.Component C.', () => {
      expect(C).to.be.a('function');
    });

    it('expects C() to return a component object.', () => {
      expect(c).to.be.an('object');
    });

    describe('Test the methods render, $getIdAndName, $getChildren and $getChild:', () => {
      it('expects C().render() to return a XML string.', () => {
        expect(c.render()).to.be.a('string');
      });

      it('expects this XML string being the template of the defined component.', () => {
        expect(c.render()).to.be.a('string').that.is.equal('<div><p>Hi!</p></div>');
      });

      it('expects C().$getIdAndName() to return an object.', () => {
        expect(c.$getIdAndName()).to.be.an('object');
      });

      it('expects this object to own the property "id" that is a string og 8 chars.', () => {
        expect(c.$getIdAndName()).to.own.property('id').that.is.a('string').that.has.lengthOf(8);
      });

      it('expects this object to own the property "name" that is the string "mynameisnobody".', () => {
        expect(c.$getIdAndName()).to.own.property('name').that.is.a('string').that.is.equal('mynameisnobody');
      });

      it('expects C().$getChildren() to return null.', () => {
        expect(c.$getChildren()).to.be.a('null');
      });

      it('expects C().$getChild() to return null.', () => {
        expect(c.$getChild()).to.be.a('null');
      });

      it('expects View.Component()().render() to return the string "<div></div>".', () => {
        expect(View.Component()().render()).to.be.a('string').that.is.equal('<div></div>');
      });
    });
  });
};
