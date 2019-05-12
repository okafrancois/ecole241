// remplissage des bar de progressions des skills

let skLevels = document.querySelectorAll('.skill-level');

for (var i = 0; i < skLevels.length; i++) {
  let value = skLevels[i].parentNode.parentNode.querySelector("span:last-of-type").textContent;
  skLevels[i].style.width = value;
}


      // on retire la classe actif au lien actuellement actif
      //on ajoute la classe actif au lien en cours de click
      // on retire la classe actif au contenu actif
      // on ajoute la classe actif au contenu cible


  //
  //
  // document.querySelector(this.getAttribute('href')).classList.add('actif');
