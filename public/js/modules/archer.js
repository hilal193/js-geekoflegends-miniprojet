import { Hero } from "./heros.js";

let flecheTout = [7,8,9,10,11];
let flecheRandom = Math.floor(Math.random() * (flecheTout.length));
console.log(flecheTout[flecheRandom]);

export class Archer extends Hero{
    constructor(nom,vie,attaque,fleche){
        super(nom,vie,attaque)
        this.fleche=flecheTout[flecheRandom];
    }
    defense=()=>{
        this.attaque *= 0.5;
        this.vie *= 2.5;
        this.posture = "defense";
    }
    attaque=()=>{
        this.attaque *= 1.4;
        this.vie *= 0.75;
        this.posture="attaque";
    }
    passeSonTour=()=>{
        console.log(`${this.nom} n'a pas assez de fleche donc passe son tour`);
    }
    lancerFleche=()=>{
        if (this.fleche>0) {
            this.fleche -=2;
        }else{
            this.fleche += 6;
            this.passeSonTour();
        }
    }
}

