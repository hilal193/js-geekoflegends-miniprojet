import { vingtPourcent } from "../main.js";
export class Boss {
    constructor(nom, vie, attaque) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
    }
    // test
    // attaquer = () => {
    //     this.attaque *= 1.4;
    //     this.vie *= 0.75;
    // }
    
    momentEnigme = (premierHero, deuxiemeHero, troisiemeHero) => {
        if (this.vie<=vingtPourcent/100*20){
        // if (this.vie<=20) {
            
            let siContinue = true;
            let compteur = 0;
            let random = Math.ceil(Math.random() * 4);
            let reponseUtilisateur;
    
            // plus petit ou egal pour les 3 chance
            while (siContinue == true && compteur < 3) {
                switch (random) {
                    case 1:
                        reponseUtilisateur = prompt("Comment s'apelle le héros principal de DBZ ?");
                        if(reponseUtilisateur.toLowerCase().includes("goku")) {
                            siContinue = false;
                        }
                        break;
                    case 2:
                        reponseUtilisateur = prompt("Comment s'apelle le centre de formation Molengeek ?");
                        if(reponseUtilisateur.toLowerCase().includes("molengeek")) {
                            siContinue = false;
                        }
                        break;
                    case 3:
                        reponseUtilisateur = prompt("Quel est l'indice du premier 'i' de cette question ?");
                        if(reponseUtilisateur == 9) {
                            siContinue = false;
                        }
                        break;
                    case 4:
                        reponseUtilisateur = prompt("Que fait retourne Math.floor(1.3 * 10) ?");
                        if(reponseUtilisateur == 13) {
                            siContinue = false;
                        }
                        break;
                    default:
                        console.log("ERROR");
                        break;
                        
                }
                compteur++;
    
            }
            switch (siContinue) {
                case true:
                    alert("Les heros sont mort! Vous avez perdu");
                    premierHero.vie = 0;
                    deuxiemeHero.vie = 0;
                    troisiemeHero.vie = 0;
                    break;
            
                default:
                    alert("Le monstre est mort! Bravo, vous avez gagné");
                    this.vie=0;
                    break;
            }
            
        }
    }
}