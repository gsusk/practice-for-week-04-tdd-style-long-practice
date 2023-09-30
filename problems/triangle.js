// Your code here
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLengths() {
    return (this.side1 < this.side2 + this.side3)
      && (this.side2 < this.side1 + this.side3)
      && (this.side3 < this.side1 + this.side2);
  }

  validate() {
    this.isValid = this.hasValidSideLengths();
  }

  static getValidTriangles(...triangle) {
    return triangle.filter((triang) => triang.isValid)
  }
}

class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3)
    this.isValidTriangle = this.hasValidSideLengths();
  }

  isScalene() {
    return this.isValidTriangle
      && (this.side1 !== this.side2
        && this.side1 !== this.side3
        && this.side2 !== this.side3)
  }

  validate() {
    this.isValidScalene = this.isScalene();
  }
}

class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3)
    this.isValidTriangle = this.hasValidSideLengths();
  }

  isIsosceles() {
    return this.isValidTriangle
      && ((this.side1 === this.side2)
        || (this.side1 === this.side3)
        || (this.side2 === this.side3))
  }

  validate() {
    if (this.isIsosceles()) {
      this.isValidIsosceles = true;
    } else {
      this.isValidIsosceles = false;
    }
  }
}


module.exports = {
  Triangle,
  Scalene,
  Isosceles
}
