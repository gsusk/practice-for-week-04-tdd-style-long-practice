const { expect } = require('chai');
const { Triangle, Scalene, Isosceles } = require('../problems/triangle');


let notTriangle;

describe('Triangle class', () => {
  let triangle;
  let triangle2;

  before(() => {
    triangle = new Triangle(2, 3, 4);
    notTriangle = new Triangle(1, 2, 3);
    triangle2 = new Triangle(3, 4, 5);
  })

  describe('constructor', () => {
    it('take 3 sides and set them as properties of the instance', () => {
      expect(triangle.side1).to.exist;
      expect(triangle.side2).to.exist;
      expect(triangle.side3).to.exist;
    })

    it('it should set side for each prop', () => {
      expect(triangle.side1).to.deep.equal(2);
      expect(triangle.side2).to.deep.equal(3);
      expect(triangle.side3).to.deep.equal(4);
    })
  })

  describe('getPerimeter()', () => {
    it(' will return the perimeter of the triangle', () => {
      expect(triangle.getPerimeter()).to.equal(9);
      expect(triangle2.getPerimeter()).to.equal(12);
    })
  })

  describe('hasValidSideLengths()', () => {
    it('true if its a valid range', () => {
      expect(triangle.hasValidSideLengths()).to.be.true;
      expect(triangle2.hasValidSideLengths()).to.be.true;
    })

    it('false if not a valid range', () => {
      expect(notTriangle.hasValidSideLengths()).to.be.false;
    })
  })

  describe('validate()', () => {
    it('should create an "isValid" instance property', () => {
      triangle.validate();
      triangle2.validate();
      notTriangle.validate();
      expect(triangle.isValid).to.exist;
      expect(triangle2.isValid).to.exist;
      expect(notTriangle.isValid).to.exist;
    })

    context('if its valid', () => {
      it('return true', () => {
        expect(triangle.isValid).to.be.true;
        expect(triangle2.isValid).to.be.true;
      })
    })
    context('if its invalid', () => {
      it('return false', () => {
        expect(notTriangle.isValid).to.be.false;
      })
    })
  })

  describe('Triangle.getValidTriangles()', () => {
    it('returns all instances that are valid triangles', () => {
      expect(Triangle.getValidTriangles(triangle, triangle2, notTriangle)).to.eql([triangle, triangle2])
    })
  })
})

describe('Scalene class', () => {
  let scalene;
  let notScalene;

  before(() => {
    scalene = new Scalene(12, 10, 4);
    notScalene = new Scalene(6, 6, 6);
    notTriangle = new Scalene(1, 2, 3);
  })

  it('should inherint from Triangle', () => {
    expect(scalene).to.be.an.instanceOf(Triangle)
  })

  describe('constructor', () => {
    it('declare props and set them', () => {
      expect(scalene.side1).to.exist;
      expect(scalene.side2).to.exist;
      expect(scalene.side3).to.exist;
      expect(scalene.side1).to.equal(12);
      expect(scalene.side2).to.equal(10);
      expect(scalene.side3).to.equal(4);
    })

    it('should have a isValidTriangle property', () => {
      expect(scalene.isValidTriangle).to.exist;
      expect(scalene.isValidTriangle).to.be.true;

      expect(notScalene.isValidTriangle).to.exist;
      expect(notScalene.isValidTriangle).to.be.true;
    })
  })

  describe('isScalene()', () => {
    context('if different side lengths', () => {
      it('return true if valid', () => {
        expect(scalene.isScalene()).to.be.true;
      })
    })

    context('equal side lengths', () => {
      it('return falsee', () => {
        expect(notScalene.isScalene()).to.be.false;
      })
    })

    context('not a triangle', () => {
      it('returns false', () => {
        expect(notTriangle.isScalene()).to.be.false;
      })
    })
  })

  describe('validate()', () => {
    before(() => {
      scalene.validate();
      notScalene.validate();
    });

    it('should create the isValidScalene property', () => {
      expect(scalene.isValidScalene).to.exist;
      expect(notScalene.isValidScalene).to.exist;
    });

    it('should not create and set an isValid property, like in the parent method', () => {
      expect(scalene.isValid).to.not.exist;
      expect(notScalene.isValid).to.not.exist;
    });

    context('if the triangle is scalene', () => {
      it('should set the isValidScalene to true', () => {
        expect(scalene.isValidScalene).to.be.true;
      });
    });

    context('if the triangle is not scalene', () => {
      it('should set the isValidScalene property to false', () => {
        expect(notScalene.isValidScalene).to.be.false;
      })
    })
  })
})

describe('Isosceles class', () => {
  let isosceles;
  let notIsosceles;

  before(() => {
    isosceles = new Isosceles(3, 3, 4);
    notIsosceles = new Isosceles(3, 4, 5);
    notTriangle = new Isosceles(1, 2, 3);
  });

  it('should be an inheritance of Triangle class', () => {
    expect(isosceles).to.be.an.instanceOf(Triangle);
  });

  describe('constructor', () => {
    it('should declare side1, side2 and side3 properties and set them values', () => {
      expect(isosceles.side1).to.exist;
      expect(isosceles.side2).to.exist;
      expect(isosceles.side3).to.exist;
      expect(isosceles.side1).to.equal(3);
      expect(isosceles.side2).to.equal(3);
      expect(isosceles.side3).to.equal(4);
    });

    it('should declare isValidTriangle property and set it according to the value of the hasValidSideLengths instance method', () => {
      expect(isosceles.isValidTriangle).to.be.true;
      expect(notTriangle.isValidTriangle).to.be.false;
      expect(notIsosceles.isValidTriangle).to.be.true;
    });
  });

  describe('isIsosceles()', () => {
    context('if the triangle has any two sides of equal length', () => {
      it('should return true', () => {
        expect(isosceles.isIsosceles()).to.be.true;
      });
    });

    context('if the triangle has different lengths on all sides', () => {
      it('should return false', () => {
        expect(notIsosceles.isIsosceles()).to.be.false;
      });
    });

    context('if the instance is not a valid triangle', () => {
      it('should return false', () => {
        expect(notTriangle.isIsosceles()).to.be.false;
      });
    });
  });

  describe('validate()', () => {
    before(() => {
      isosceles.validate();
      notIsosceles.validate();
      notTriangle.validate();
    });

    it('should create the "isValidIsosceles" property', () => {
      expect(isosceles.isValidIsosceles).to.exist;
      expect(notIsosceles.isValidIsosceles).to.exist;
    });

    it('should not create the "isValid" property like in the parent method', () => {
      expect(isosceles.isValid).to.not.exist;
      expect(notIsosceles.isValid).to.not.exist;
    });

    context('if the instance is a valid isosceles', () => {
      it('should set isValidIsosceles to true', () => {
        expect(isosceles.isValidIsosceles).to.be.true;
      });
    });

    context('if the instance is not a valid isosceles', () => {
      it('should set isValidIsosceles to false', () => {
        expect(notIsosceles.isValidIsosceles).to.be.false;
        expect(notTriangle.isValidIsosceles).to.be.false;
      })
    })
  });
});