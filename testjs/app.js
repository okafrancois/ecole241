const html = document
let change = function(){
  let div = this.parentNode.parentNode.parentNode;
  let li = this.parentNode;
  if(this.parentNode.classList.contains('actif')){
    return false
  }
  // on retire la classe actif au lien actuellement actif
  div.querySelector('.liens .actif').classList.remove('actif');
  //on ajlute la classe actif au lien
  li.classList.add('actif');
  //on retire la classe actif au contenu actif
  div.parentNode.querySelector('.contenu.actif').classList.remove('actif')
  //on ajoute la classe actif au contenu cible
  div.parentNode.querySelector(this.getAttribute('href')).classList.add('actif');
}

let liens = html.querySelectorAll('.liens a');
for(let lien of liens){
    lien.addEventListener('click', change)
  }
let divActive = html.querySelector('.contenu.actif');
let newdiv = document.createElement('div');
newdiv.id = 'nouveau';
var texte  = document.createTextNode("texte qui sert d'exemple");
