
export abstract class Hero {
  constructor(public name: string, public weapon?: string) { }

  abstract attack(): void;
}

export class BlastingHero extends Hero {
  attack() {
    console.log(`${this.name} blasted ${this.weapon}.`);
  }
}

export class ShootingHero extends Hero {
  attack() {
    console.log(`${this.name} shot ${this.weapon}.`);
  }
}

export class ThrowingHero extends Hero {
  attack() {
    console.log(`${this.name} threw ${this.weapon}.`);
  }
}

export class UnarmedHero extends Hero {
  attack() {
    console.log(`${this.name} kicked and punched.`);
  }
}

export class AvengersWithStrategy {
  private ensemble: Hero[] = [];

  recruit(hero: Hero) {
    this.ensemble = this.ensemble
      .filter(({ name }) => name === hero.name)
      .concat(hero);
  }

  fight() {
    this.ensemble.forEach(hero => hero.attack());
  }
}