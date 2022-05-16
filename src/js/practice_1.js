export class Character {
  constructor(name, type, distance) {
    this.name = name;
    this.type = type;
    this.distance = distance;
  }

  set stoned(value = false) {
    this._stoned = value;
  }
  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }
  get attack() {
    let value = this._attack * (1.1 - 0.1 * this.distance);

    if (this._stoned) {
      value = value - 5 * Math.log2(this.distance);
    }
    return Math.round(value);
  }
}
export class Magician extends Character {
  constructor(name, distance) {
    super(name, "Magician", distance);
  }
}

export class Daemon extends Character {
  constructor(name, distance) {
    super(name, "Daemon", distance);
  }
}
