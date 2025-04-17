export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // The static getter used by cloneCar to determine constructor
  static get [Symbol.species]() {
    return this;
  }

  // Clone method that returns a new object from the same constructor
  cloneCar() {
    const Constructor = this.constructor[Symbol.species];
    return new Constructor();
  }
}
