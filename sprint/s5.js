//S5 programme qui affiche le plus grand entre deux nombre
let nbre1 = window.prompt('Entrez le premier nombre');
let nbre2 = window.prompt('Entrez le deuxieme nombre');
if(nbre1 > nbre2){
  console.log(`${nbre1} est le plus grand`);
} else{
  if(nbre1 == nbre2){
    console.log("Ces nombres sont égaux, tu te moque de moi?")
  } else {
    console.log(`${nbre2} est le plus grand`)
  }
}
