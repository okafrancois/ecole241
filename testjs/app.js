const html = document
let change = function() {
  let div = this.parentNode.parentNode.parentNode;
  let li = this.parentNode;
  if (this.parentNode.classList.contains('actif')) {
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
for (let lien of liens) {
  lien.addEventListener('click', change)
}
let divActive = html.querySelector('.contenu.actif');
// nicks names
// let surnoms = [],surnom;
//   function nick(){
//       while (surnom = prompt('Entrez un surnom')) {
//         surnoms.push(surnom);
//       }
//       surnoms.length > 0 ? alert(surnoms.join(' ')) : alert('Aucun surnom enregistré')
//   }
// let button = document.querySelector('#btn');
// button.addEventListener('click', nick)
let boite = document.getElementById('box');
let posInit = 0;
let bouger = function(){
  posInit += 1;
  boite.style.left = `${posInit}px`;
}
let bouge = setInterval(bouger, 100);

var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg",
   "http://www.sololearn.com/uploads/slider/2.jpg",
   "http://www.sololearn.com/uploads/slider/3.jpg"
];
function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}
