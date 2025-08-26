class Car {
  constructor({ name, position }) {
    this.name = name;
    this.position = 0;
  }
  move() {
    this.position += 1;
  }
}
