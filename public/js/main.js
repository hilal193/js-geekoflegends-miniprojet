import { Archer } from "./modules/archer.js";
import { Boss } from "./modules/boss.js";
import { Guerrier } from "./modules/guerrier.js";
import { Mage } from "./modules/mage.js";

// random pour mage
let manaTout = [7,9,11];
let manaRandom = Math.floor(Math.random() * (manaTout.length));
console.log(manaTout[manaRandom]);

// random pour archer
let flecheTout = [7,8,9,10,11];
let flecheRandom = Math.floor(Math.random() * (flecheTout.length));
console.log(flecheTout[flecheRandom]);


let pvDistribuer = 1000;
let attaqueDistribuer = 300;


// Un boss est choisi aléatoirement parmis les trois, c'est vous qui aurez au préalable choisis ses caractéristiques
// Vous attribuez des valeurs aux propriétés des boss

let Sauron = new Boss("sauron",100,30);
let Chronos = new Boss("Chronos",100,50);
let Lilith = new Boss("Lilith",100,10);

let bossTout = [Sauron,Chronos,Lilith];
let choixBoss = Math.floor(Math.random() * (bossTout.length));
console.log(bossTout[choixBoss]);

// let ichigo = new Guerrier("c",11,5);
// let aizen = new Archer("b",12,5);
// let luffy = new Mage("a",13,5);

// console.log(bossTout[choixBoss].momentEnigme(ichigo,aizen,luffy));


// let mage = new Mage("h",100,12);
// console.log(
//     mage.manaPoint()

// );



console.log("le jeu commence : ");

alert("vous allez combattre le boss: "+bossTout[choixBoss].nom+ " qui possède "+ bossTout[choixBoss].vie + " pv et "+bossTout[choixBoss].attaque+" d'attaque");


// L'utilisateur choisi le nom de chaque héros

// Vous devez fixer un total de point de vies et de points d'attaques que l'utilisateur lui devra distribuer entre ses héros.(faites en sorte qu'il y ait beaucoup d'interaction)
// Guerrier
let nomGuerrier = prompt("choisisez le nom de votre Guerrier");
let choixVieGuerrier = prompt(`choisisez les vie de ${nomGuerrier} (guerrier)`);
let choixAttGuerrier = prompt(`choisisez les points d'attaque de ${nomGuerrier} (guerrier)`);
console.log(`${nomGuerrier} a ${choixVieGuerrier} pv et ${choixAttGuerrier} en point d'attaque`);
let guerrier = new Guerrier(nomGuerrier,choixVieGuerrier,choixAttGuerrier,0);
// while (choixVieGuerrier>pvDistribuer && choixAttGuerrier>attaqueDistribuer) {
//     choixVieGuerrier=prompt("pas assez de point de vie, reessayer");
//     choixAttGuerrier=prompt("pas assez de point d'attaque, reessayer");
// }
// choixVieGuerrier -= pvDistribuer;
// choixAttGuerrier -= attaqueDistribuer;



