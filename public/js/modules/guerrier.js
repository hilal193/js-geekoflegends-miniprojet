import { Hero } from "./heros.js";

export class Guerrier extends Hero{
    constructor(nom,vie,attaque,pointRage){
        super(nom,vie,attaque)
        this.pointRage=pointRage;
    }
    defense=()=>{
        // this.attaque *= 0.5;
        // this.vie *= 2.5;
        this.vie -= (10+5);
        // a.vie -= this.attaque *= 1.4;
        this.posture = "defense";
    }
    attaque=(a)=>{
        // this.attaque *= 1.4;
        // this.vie *= 0.75;
        a.vie -= 10;
        console.log(`${this.nom} attaque ${a.nom} et il lui reste ${a.vie} de vie`);
        this.rage();
        this.posture="attaque";
    }
    rage=()=>{
        if (this.pointRage == 4) {
            this.attaque *= 1.25;
            this.pointRage = 0;
            console.log(`La RAGE de ${this.nom} est a : ${this.pointRage}`);

        }else if (this.pointRage < 4) {
            this.pointRage++;
            console.log(`La RAGE de ${this.nom} est a : ${this.pointRage}`);
        }else{
            this.pointRage=0;
            console.log(`La RAGE de ${this.nom} est a : ${this.pointRage}`);
        }
    }
}