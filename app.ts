class Hero {

	name: string
	power: number
	life: number
	weapon: Weapon

	constructor(theName: string, thePower: number, theLife: number) {
		this.name = theName;
		this.power = thePower;
		this.life = theLife;
	}

	attack(opponent: Hero, power: number) {
		// console.log(power);
		power += this.weapon.damage
		opponent.life -= power;
	};

	isAlive() { return this.life > 0 }
	// {console.log opponent.some((num) => num === 0)}
}

class Weapon {

	name: string
	damage: number

	constructor(name: string, damage: number) {
		this.name = name;
		this.damage = damage;
	}

}

class HeroAxe extends Hero {

	weapon: Weapon;

	constructor(name: string, power: number, life: number, weapon: Weapon) {
		super(name, power, life)
		this.name = name;
		this.power = power;
		this.life = life;
		this.weapon = weapon;
	}




	attack(opponent: Hero) {

		// if (opponent instanceof HeroSword) {
		//   super.attack(opponent, (this.power * 2))
		//   return

		// }
		// super.attack(opponent, this.power)

		if (opponent instanceof HeroSword) {
			super.attack(opponent, (this.power * 2))
		} else {
			super.attack(opponent, this.power)
		}
	};
}


class HeroSword extends Hero {

	weapon: Weapon;

	constructor(name: string, power: number, life: number, weapon: Weapon) {
		super(name, power, life)
		this.name = name;
		this.power = power;
		this.life = life;
		this.weapon = weapon;
	}


	attack(opponent: Hero) {

		// if (opponent instanceof HeroSpear) {
		//   super.attack(opponent, (this.power * 2))
		//   return

		// }
		// super.attack(opponent, this.power)

		if (opponent instanceof HeroSpear) {
			super.attack(opponent, (this.power * 2))
		} else {
			super.attack(opponent, this.power)
		}
	};
}
class HeroSpear extends Hero {

	weapon: Weapon;

	constructor(name: string, power: number, life: number, weapon: Weapon) {
		super(name, power, life)
		this.name = name;
		this.power = power;
		this.life = life;
		this.weapon = weapon;
	}


	attack(opponent: Hero) {

		// if (opponent instanceof HeroAxe) {
		//   super.attack(opponent, (this.power * 2))
		//   return
		// }
		// super.attack(opponent, this.power)

		if (opponent instanceof HeroAxe) {
			super.attack(opponent, (this.power * 2))
		} else {
			super.attack(opponent, this.power)
		}
	};
}



/* --------------------------- */



let joan = new HeroAxe("joan", 3, 10, new Weapon("axe", 1));
let vivi = new HeroSword("vivi", 1, 15, new Weapon("sword", 3));
let toto = new HeroSpear("toto", 2, 12, new Weapon("spear", 2));







while (joan.isAlive() && vivi.isAlive()) {
	joan.attack(vivi)
	vivi.attack(joan)
	console.log(joan.life)
	console.log(vivi.life)
}

if (joan.isAlive()) {
	alert("Vivi win !")
} else if (vivi.isAlive()) {
	alert("Joan win !")
} else {
	alert("It's a draw")
}





// joan.attack(vivi)
// console.log(vivi.life)
// vivi.attack(toto)
// console.log(toto.life)
// toto.attack(joan)
// console.log(joan.life)

// console.log(vivi.life)
// console.log(vivi.attack(toto))
// console.log(toto.attack(joan))

// console.log(vivi.isAlive())
