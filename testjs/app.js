function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function compare(a, b){
    return (a === b)? true : false
}
window.alert('Jouons un peu ensemble\n devine quel nombre je génère de 1 à 10');
  do{
    let nombre = getRandomInt(10);
    let choix = Number(window.prompt('Choisis un nombre'));
    let result = compare(choix, nombre);
    if(result){
      window.alert(`Bravo`)
    } else{
      window.alert(`C'est raté, c'était ${nombre}`)
    }
    let oui = window.confirm('Continuer ?');
  } while(oui === true)
