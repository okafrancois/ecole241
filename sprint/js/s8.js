//S8 la table de multiplication
let nbre = Number(prompt('Entrez un nombre'));
console.log(`Voici la table de multiplication de ${nbre}`);
for(let i = 1; i <= 10; i++ ){
  console.log(`${nbre} x ${i} = ${nbre*i}`);
}
