import { Archer } from "./modules/archer.js";
import { Boss } from "./modules/boss.js";
import { Guerrier } from "./modules/guerrier.js";
import { Mage } from "./modules/mage.js";

// random pour mage
// let manaTout = [7,9,11];
// let manaRandom = Math.floor(Math.random() * (manaTout.length));
// console.log(manaTout[manaRandom]);

// random pour archer
// let flecheTout = [7,8,9,10,11];
// let flecheRandom = Math.floor(Math.random() * (flecheTout.length));
// console.log(flecheTout[flecheRandom]);


let pvDistribuer = 300;
let attaqueDistribuer = 30;


// Un boss est choisi aléatoirement parmis les trois, c'est vous qui aurez au préalable choisis ses caractéristiques
// Vous attribuez des valeurs aux propriétés des boss

let Sauron = new Boss("sauron",160,30);
let Chronos = new Boss("Chronos",170,50);
let Lilith = new Boss("Lilith",150,10);

let bossTout = [Sauron,Chronos,Lilith];
let choixBoss = Math.floor(Math.random() * (bossTout.length));
console.log(bossTout[choixBoss]);

export let vingtPourcent = bossTout[choixBoss].vie;

// test enigme boss
// bossTout[choixBoss].vie -= 20;
// console.log(bossTout[choixBoss].vie); 
// bossTout[choixBoss].vie -= 40;
// console.log(bossTout[choixBoss].vie); 
// bossTout[choixBoss].vie -= 10;
// console.log(bossTout[choixBoss].vie); 
// bossTout[choixBoss].vie -= 10;
// console.log(bossTout[choixBoss].vie); 
// bossTout[choixBoss].vie -= 10;
// console.log(bossTout[choixBoss].vie); 

// let ichigo = new Guerrier("c",11,5);
// let aizen = new Archer("b",12,5);
// let luffy = new Mage("a",13,5);

// console.log(bossTout[choixBoss].momentEnigme(ichigo,aizen,luffy));
// fin test



// let mage = new Mage("h",100,12);
// console.log(
//     mage.manaPoint()

// );



console.log("le jeu commence : ");

alert("vous allez combattre le boss: "+bossTout[choixBoss].nom+ " qui possède "+ bossTout[choixBoss].vie + " pv et "+bossTout[choixBoss].attaque+" d'attaque");



// Guerrier
let nomGuerrier = prompt("choisisez le nom de votre Guerrier");
let choixVieGuerrier = prompt(`choisisez les vie de ${nomGuerrier} (guerrier), total pv a distribuer : ${pvDistribuer}`);
let choixAttGuerrier =Number(prompt(`choisisez les points d'attaque de ${nomGuerrier} (guerrier), total att a distribuer ${attaqueDistribuer}, pour le moment vous etes debutant donc, vous pouvez uniquement rajouter 10 d'attaque`));
while (choixAttGuerrier!==10) {
    choixAttGuerrier =Number(prompt(`Debutant: Vous devez mettre 10 d'attaque a ${nomGuerrier} (guerrier), total att a distribuer ${attaqueDistribuer}`));
}
console.log(`${nomGuerrier} a ${choixVieGuerrier} pv et ${choixAttGuerrier} en point d'attaque`);
let guerrier = new Guerrier(nomGuerrier,choixVieGuerrier,choixAttGuerrier,0);
while (choixVieGuerrier>pvDistribuer && choixAttGuerrier>attaqueDistribuer) {
    choixVieGuerrier=prompt("pas assez de point de vie, reessayer");
    choixAttGuerrier=prompt("pas assez de point d'attaque, reessayer");
}
choixVieGuerrier -= pvDistribuer;
choixAttGuerrier -= attaqueDistribuer;



//Archer
let nomArcher = prompt("choisisez le nom de votre Archer");
let choixVieArcher = prompt(`choisisez les vie de ${nomArcher} (Archer), total pv a distribuer : ${pvDistribuer}`);
let choixAttArcher =Number(prompt(`choisisez les points d'attaque de ${nomArcher} (Archer),total att a distribuer ${attaqueDistribuer} , pour le moment vous etes debutant donc, vous pouvez uniquement rajouter 10 d'attaque`));
while (choixAttArcher!==10) {
    choixAttArcher =Number(prompt(`Debutant: Vous devez mettre 10 d'attaque a ${nomArcher} (ARCHER), total att a distribuer ${attaqueDistribuer}`));
}
let archer = new Archer(nomArcher,choixVieArcher,choixAttArcher,0);
console.log(`${nomArcher} a ${choixVieArcher} pv et ${choixAttArcher} en point d'attaque`);

while (choixVieArcher>pvDistribuer && choixAttArcher>attaqueDistribuer) {
    choixVieGuerrier=prompt("pas assez de point de vie, reessayer");
    choixAttGuerrier=prompt("pas assez de point d'attaque, reessayer");
}
choixVieArcher -= pvDistribuer;
choixAttArcher -= attaqueDistribuer;

//Mage
let nomMage = prompt("choisisez le nom de votre Mage");
let choixVieMage = prompt(`choisisez les vie de ${nomMage} (Mage), total pv a distribuer : ${pvDistribuer}`);
let choixAttMage = Number(prompt(`choisisez les points d'attaque de ${nomMage} (Mage),total att a distribuer ${attaqueDistribuer} , pour le moment vous etes debutant donc, vous pouvez uniquement rajouter 10 d'attaque`));
while (choixAttMage!==10) {
    choixAttMage =Number(prompt(`Debutant: Vous devez mettre 10 d'attaque a ${nomMage} (MAGE), total att a distribuer ${attaqueDistribuer}`));
}
let mage = new Mage(nomMage,choixVieMage,choixAttMage,0);
console.log(`${nomMage} a ${choixVieMage} pv et ${choixAttMage} en point d'attaque`);


while (choixVieMage>pvDistribuer && choixAttMage>attaqueDistribuer) {
    choixVieGuerrier=prompt("pas assez de point de vie, reessayer");
    choixAttGuerrier=prompt("pas assez de point d'attaque, reessayer");
}
choixVieMage -= pvDistribuer;
choixAttMage -= attaqueDistribuer;



let choixPosture=(hero)=>{
    let postureUtilisateur = prompt(`choisis le mode de posture entre "attaque" "defense" "normal" de ${hero.nom}`);
    if (postureUtilisateur.toLowerCase() == "attaque") {
        console.log(`${hero.nom} passe en mode attaque`);
        hero.attaque(bossTout[choixBoss]);
    }else if (postureUtilisateur.toLowerCase() == "defense") {
        hero.defense();
        console.log(`${hero.nom} passe en mode defense`);
    }else if (postureUtilisateur.toLowerCase() == "normal") {
        console.log(`${hero.nom} passe en mode normal et ne fait rien`);
        
    }else{
        console.log("erreur");
    }
    return postureUtilisateur;
}

// // Chaque tour le boss attaque au hasard un des personnages

let attaqueDuBoss=()=>{

    let enemisTout = [guerrier,archer,mage];
    let randomEnemis = Math.floor(Math.random() * (enemisTout.length));
    enemisTout[randomEnemis].vie -= bossTout[choixBoss].attaque;
    console.log(`le Boss ${bossTout[choixBoss].nom} attaque  ${enemisTout[randomEnemis].nom} et il lui reste ${enemisTout[randomEnemis].vie} de vie`);
}
// guerrier.attaque(bossTout[choixBoss]);
// attaqueDuBoss();


// // attaque boss special
// console.log("le boss lance son attaque spécial");
// bossTout[choixBoss].momentEnigme(guerrier,archer,mage);


//  let tour = 0;
//  while (tour<=5) {
//     console.log("____tour "+tour+"______");
//     // tour 4
//     choixPosture(guerrier);
//     choixPosture(archer);
//     choixPosture(mage);
    
//     attaqueDuBoss();
//     console.log("le boss lance son attaque spécial");
//     bossTout[choixBoss].momentEnigme(guerrier,archer,mage);
//  }

let debutJeu=()=>{
    for (let index = 1; index < 98; index++) {
        alert(`tour `+index);
        console.log(`*********tour `+index+"*********");
        choixPosture(guerrier);
        choixPosture(archer);
        choixPosture(mage);
        
        attaqueDuBoss();
        // attaque boss special
        console.log("le boss lance son attaque spécial");
        bossTout[choixBoss].momentEnigme(guerrier,archer,mage);
        if (guerrier.vie<=0) {
            guerrier.vie=0;
        }else if (mage.vie<=0) {
            mage.vie=0;
        }else if (archer.vie<=0) {
            archer.vie=0;
        }
        if (guerrier.vie<=0 && mage.vie<=0 && archer.vie<=0||bossTout[choixBoss].vie<=0 ) {
            alert(`*********************GAME OVER*********************`)
            index=100;
        }
    }

}

debutJeu();