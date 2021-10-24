import { Hero } from "./heros.js";
let manaTout = [7,9,11];
let manaRandom = Math.floor(Math.random() * (manaTout.length));
// console.log(manaTout[manaRandom]);
export class Mage extends Hero{
    constructor(nom,vie,attaque,mana){
        super(nom,vie,attaque)
        this.mana=manaTout[manaRandom];

    }
    defense=()=>{
        // this.attaque *= 0.5;
        // this.vie *= 2.5;
        this.vie -= (10+5);
        this.posture = "defense";
    }
    attaque=(a)=>{
        // this.attaque *= 1.4;
        // this.vie *= 0.75;
        a.vie -= 10;
        console.log(`${this.nom} attaque ${a.nom} et il lui reste ${a.vie} de vie`);
        this.manaPoint();
        this.posture="attaque";
    }
    jePasseMonTour=()=>{
        console.log(`${this.nom} n'a pas assez de mana donc doit attendre le prochain tour pour recuperer du mana`);
    }
    manaPoint=()=>{
        
        if (this.mana>2) {
            this.mana -= 2;
            console.log(`${this.nom} a mana ${this.mana} restant`);
        }else{
            // console.log("TESTaaa");
            this.jePasseMonTour();
            console.log(`${this.nom} obtiendra ${this.mana} au prochain tour`);
            this.mana +=7;
        }
    }
}

