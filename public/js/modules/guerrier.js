import { Hero } from "./heros.js";

export class Guerrier extends Hero{
    constructor(nom,vie,attaque,pointRage){
        super(nom,vie,attaque)
        this.pointRage=pointRage;
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
    rage=()=>{
        if (this.pointRage == 4) {
            this.attaque *= 1.25;
            this.pointRage = 0;
        }else if (this.pointRage < 4) {
            this.pointRage++;
        }else{
            this.pointRage=0;
        }
    }
}