import {
    Hero
} from "./heros.js";

let flecheTout = [7, 8, 9, 10, 11];
let flecheRandom = Math.floor(Math.random() * (flecheTout.length));
console.log(flecheTout[flecheRandom]);

export class Archer extends Hero {
    constructor(nom, vie, attaque, fleche) {
        super(nom, vie, attaque)
        this.fleche = flecheTout[flecheRandom];
    }
    defense = () => {
        this.vie -= (10+5);
        // this.attaque *= 2.5;
        this.posture = "defense";
    }
    attaque = (a) => {
        // this.attaque *= 1.4;
        // this.vie *= 0.75;
        this.posture = "attaque";
        this.lancerFleche(this.fleche);
        a.vie -= 10;
        console.log(`${this.nom} attaque ${a.nom} et il lui reste ${a.vie} de vie`);
    }
    passeSonTour = () => {
        console.log(`${this.nom} n'a pas assez de fleche donc passe son tour`);
    }
    lancerFleche = (fleche) => {
        if (this.fleche > 0) {
            this.fleche -= 2;
            console.log(`${this.nom} fleche ${fleche} restant`);

        } else {
            this.fleche += 6;
            console.log(`${this.nom} fleche ${fleche} restant`);

            this.passeSonTour();
        }
        // if (fleche>0) {
        //     fleche -=2;
        //     console.log(` fleche ${fleche} restant`);
        // }else{
        //     fleche += 6;
        //     console.log(` mana ${fleche} restant`);
        //     this.passeSonTour();
        // }
    }
}