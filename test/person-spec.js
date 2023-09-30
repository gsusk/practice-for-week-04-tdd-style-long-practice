const { expect } = require('chai');
const Person = require('../problems/person');

describe('Person class', function () {
  let person1;
  let person2;

  before(() => {
    person1 = new Person('Mario', '18');
    person2 = new Person('Paul', '25');
  })

  describe('constructor', () => {
    it('should contain name and age props', () => {
      expect(person1.name).to.exist;
      expect(person1.age).to.exist;
    })

    it('should set value of both properties', () => {
      expect(person1.name).to.deep.equal("Mario");
      expect(person1.age).to.deep.equal("18");
    })
  })

  describe('sayHello()', () => {
    it(`will return a string of the Person 
      instances name and a greeting message`, () => {
      expect(person1.sayHello()).to.equal(`${person1.name} says hello!`);
    })
  })

  describe('visit() instance method', () => {
    it(`return a string stating that this
     instance visited the passed-in person instance`, () => {
      expect(person1.visit(person2)).to.equal(`${person1.name} visited ${person2.name}`);
    })
  })

  describe('switchVisit(otherPerson) method', () => {
    it(`will invoke the visit function of the parameter,
     passing in the current instance as the argument`, () => {
      expect(person1.switchVisit(person2)).to.equal(`${person2.name} visited ${person1.name}`)
    })
  })

  describe('update(obj', () => {
    context('is valid obj', () => {
      it(`instance's properties should be 
    updated to match the passed-in object's value`, () => {
        person2.update({ name: 'Jorge', age: 22 });
        expect(person2.name).to.equal('Jorge');
        expect(person2.age).to.equal(22);
      })
    })
    context('invalid object', () => {
      it(`throw a new TypeError if not an object`, () => {
        expect(() => person2.update(null)).to.throw(TypeError, "not an object");
      })

      it(`throw a TypeError if object does not have a name and an age property`, () => {
        expect(() => person2.update({})).to.throw(TypeError, 'missing age or name properties');
      })
    })
  })

  describe('tryUpdate(obj)', () => {
    context('if successfully invoked', () => {
      it(`true is returned`, () => {
        expect(person2.tryUpdate({ name: 'Pedri', age: 33 })).to.be.true;
      })
    })

    context('if not successfully invoked', () => {
      it(`false is returned`, () => {
        expect(person2.tryUpdate(null)).to.be.false;
        expect(person2.tryUpdate({})).to.be.false;
      })
    })
  })

  describe('greetAll(obj)', () => {
    let array;

    before(() => {
      array = [person1, person2];
    });

    it('should return an array of sayHello() strings from each instance', () => {
      const strings = Person.greetAll(array);
      for (let i = 0; i < strings.length; i++) {
        expect(strings[i]).to.equal(array[i].sayHello())
      }
    });
  });
});