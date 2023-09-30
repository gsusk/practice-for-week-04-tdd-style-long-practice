class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello!`
  }

  visit(person) {
    return `${this.name} visited ${person.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (!(obj instanceof Object)) {
      throw new TypeError('not an object');
    } else if (!obj.name && !obj.age) {
      throw new TypeError('missing age or name properties')
    }

    if (obj.name !== undefined) {
      this.name = obj.name;
    }

    if (obj.age !== undefined) {
      this.age = obj.age;
    }
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll(obj) {
    let strings = []
    for (const instance of obj) {
      strings.push(instance.sayHello());
    }
    return strings
  }

}

module.exports = Person;