//S9 Le nombre de la mort qui tue
let max = 0;
let nbre;
for(let i = 1; i <= 5; i++){
  nbre =  Number(prompt(`Entrez le nombre numéro ${i}:`));
  if(nbre > max){
    max = nbre;
  }
}
window.alert(`Le plus grand est ${max}`);
