function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let compare = function(a, b){
  return (a === b)
};
//00000000
let nombre;
let choix;
let result;
let again;
window.alert('Jouons un peu ensemble\n devine quel nombre je génère de 1 à 10');
  do{
    nombre = getRandomInt(10);
    choix = Number(window.prompt('Choisis un nombre'));
    result = compare(choix, nombre);
    result ? window.alert(`Bravo c'était bien ${choix}`) : window.alert(`C'est raté, c'était ${nombre}`);
    again = window.confirm('Continuer ?');
  } while(again === true)
console.log('Game over, Aurevoir ;)')
