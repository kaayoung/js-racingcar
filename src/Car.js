class Car {
  constructor({ name, position = 0 }) {
    this.name = name;
    this.position = position;
  }

  moveForward() {
    this.position += 1;
  }
}
