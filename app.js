var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = /** @class */ (function () {
    function Hero(theName, thePower, theLife) {
        this.name = theName;
        this.power = thePower;
        this.life = theLife;
    }
    Hero.prototype.attack = function (opponent, power) {
        // console.log(power);
        power += this.weapon.damage;
        opponent.life -= power;
    };
    ;
    Hero.prototype.isAlive = function () { return this.life > 0; };
    return Hero;
}());
var Weapon = /** @class */ (function () {
    function Weapon(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    return Weapon;
}());
var HeroAxe = /** @class */ (function (_super) {
    __extends(HeroAxe, _super);
    function HeroAxe(name, power, life, weapon) {
        var _this = _super.call(this, name, power, life) || this;
        _this.name = name;
        _this.power = power;
        _this.life = life;
        _this.weapon = weapon;
        return _this;
    }
    HeroAxe.prototype.attack = function (opponent) {
        // if (opponent instanceof HeroSword) {
        //   super.attack(opponent, (this.power * 2))
        //   return
        // }
        // super.attack(opponent, this.power)
        if (opponent instanceof HeroSword) {
            _super.prototype.attack.call(this, opponent, (this.power * 2));
        }
        else {
            _super.prototype.attack.call(this, opponent, this.power);
        }
    };
    ;
    return HeroAxe;
}(Hero));
var HeroSword = /** @class */ (function (_super) {
    __extends(HeroSword, _super);
    function HeroSword(name, power, life, weapon) {
        var _this = _super.call(this, name, power, life) || this;
        _this.name = name;
        _this.power = power;
        _this.life = life;
        _this.weapon = weapon;
        return _this;
    }
    HeroSword.prototype.attack = function (opponent) {
        // if (opponent instanceof HeroSpear) {
        //   super.attack(opponent, (this.power * 2))
        //   return
        // }
        // super.attack(opponent, this.power)
        if (opponent instanceof HeroSpear) {
            _super.prototype.attack.call(this, opponent, (this.power * 2));
        }
        else {
            _super.prototype.attack.call(this, opponent, this.power);
        }
    };
    ;
    return HeroSword;
}(Hero));
var HeroSpear = /** @class */ (function (_super) {
    __extends(HeroSpear, _super);
    function HeroSpear(name, power, life, weapon) {
        var _this = _super.call(this, name, power, life) || this;
        _this.name = name;
        _this.power = power;
        _this.life = life;
        _this.weapon = weapon;
        return _this;
    }
    HeroSpear.prototype.attack = function (opponent) {
        // if (opponent instanceof HeroAxe) {
        //   super.attack(opponent, (this.power * 2))
        //   return
        // }
        // super.attack(opponent, this.power)
        if (opponent instanceof HeroAxe) {
            _super.prototype.attack.call(this, opponent, (this.power * 2));
        }
        else {
            _super.prototype.attack.call(this, opponent, this.power);
        }
    };
    ;
    return HeroSpear;
}(Hero));
/* --------------------------- */
var joan = new HeroAxe("joan", 3, 10, new Weapon("axe", 1));
var vivi = new HeroSword("vivi", 1, 15, new Weapon("sword", 3));
var toto = new HeroSpear("toto", 2, 12, new Weapon("spear", 2));
while (joan.isAlive() && vivi.isAlive()) {
    joan.attack(vivi);
    vivi.attack(joan);
    console.log(joan.life);
    console.log(vivi.life);
}
if (joan.isAlive()) {
    alert("Vivi win !");
}
else if (vivi.isAlive()) {
    alert("Joan win !");
}
else {
    alert("It's a draw");
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
