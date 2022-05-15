export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  setAttack(value) {
    this.attack = value;
  }
  setStoned(value = false) {
    this.stoned = value;
  }
  getStoned() {
    return this.stoned;
  }
  getAttack(distance) {
    this.attack -= this.attack * 0.1 * (distance - 1);
    if (this.stoned) {
      this.attack -= 5 * Math.log2(distance);
    }
  }
}
export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
  }
}
