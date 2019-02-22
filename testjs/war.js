window.alert("Bienvenue sur la bataille du code !\nTout d'abord ouvrez l'inspecteur pour voir les interactions et les menus.");
console.log('Bien !\nCommencez par créer votre avatar');
//Lancement du programme
function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));}
let compare = function(a, b){
return (a === b);}
function evaluation(){
window.alert("Pour attaque tu dois trouver quel nombre j'ai généré de 1 à 10\n sinon c'est ton adversaire qui attaquera :D");
    let nombre = getRandomInt(10);
    let choix = Number(window.prompt('Choisis un nombre'));
    let result = compare(choix, nombre);
    result ? window.alert(`Bravo c'était bien ${choix}`) : window.alert(`C'est raté, c'était ${nombre}`);
    return result ? false : true ;
}
class Perso {
  constructor(nom, prenom,){
    this.nom = nom;
    this.xp = 0;
    this.pv = 0;
    this.at = 0;
    this.type = '';
  }
  attaquer(cible){
  cible.pv = cible.pv - this.at;
  console.log(`${this.nom} attaque ${cible.nom}, ${cible.nom} perd ${this.at} points de vie.`);
  }
  stats(){
    return `${this.nom} a ${this.pv} points de vie, ${this.at} en attaque et ${this.xp} point d'xp`;
  }
}
//creation du personnage
let perso;
let nom;
  nom = prompt('Quel est son nom ?');
perso = new Perso(nom);
let type = Number(prompt('Guerrier css(1), Guerrier javascript(2) ou Guerrier Ref(3)'));
type == 1 ? perso.pv += 500 : type == 2 ? perso.pv += 400 : type == 3 ? perso.pv += 150 : console.log('Valeur inconnue');
type == 1 ? perso.at += 80 : type == 2 ? perso.at += 120 : type == 3 ? perso.at += 500 : console.log('Valeur inconnue');
console.log(`Salut ${perso.nom} et bienvenue dans l'aventure.\nL'heure est venue d'entrer dans le champ de bataille.`);

//Premiere bataille
let goblin = {
  nom: "Aganor",
  pv : 350,
  at : 50,
  type: 'monstre',
  attaquer(cible){
  cible.pv = cible.pv - this.at;
  console.log(`${this.nom} attaque ${cible.nom}, ${cible.nom} perd ${this.at} points de vie il lui en reste ${cible.pv}.`);
  }
}
console.log(`${goblin.nom} le ${goblin.type} apparait devant vous ! c'est parti.`);
let option;
do{
  console.log("1: Voir vos stats\n2: Attaquer\n3: Quitter");
  option = prompt('Que voulez-vous faire ?');
  option == 1 ? console.log(perso.stats()) : option == 2 ? evaluation(): console.log("Fin du tour");
  if(evaluation() == true){
    perso.attaquer(goblin)
  }
  goblin.pv <= 0 ? perso.xp += 50 : console.log(`Le ${goblin.type} a encore ${goblin.pv} points de vie.`);
  console.log("Fin du tour");
} while (goblin.pv > 0 || option == '3');
console.log('Bravo ! Vous avez vaincu.');
