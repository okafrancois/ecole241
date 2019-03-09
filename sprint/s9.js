let max , nbre, i = 1;
max =  Number(prompt(`Entrez le nombre numéro ${i}:`));
for( i = 2; i <= 5; i++){
  nbre =  Number(prompt(`Entrez le nombre numéro ${i}:`));
  if(nbre > max) max = nbre;
}
window.alert(`Le plus grand est ${max}`);
