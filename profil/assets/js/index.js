// remplissage des bar de progressions des skills

let skLevels = document.querySelectorAll('.skill-level');

for (var i = 0; i < skLevels.length; i++) {
  // on recupere la valeur qui se trouve dans la description du niveau de la competences
  let value = skLevels[i].parentNode.parentNode.querySelector("span:last-of-type").textContent;
  // on l'applique en tan que largeur du bloc de niveau du skill
  skLevels[i].style.width = value;
}
//activation des section
/*
on recupere les liens du menu

quand on click sur un lien du menu
  on verifie si la section vers laquelle le lien point contient deja la classe active

si oui
  on arrete l'excution du script
sinon
  on retire la classe actif a la section qui l'a actuelement
  on ajoute la classe actif a la section ver laquelle pointe le href du lien sur lequel on a cliqué
*/
// document.querySelector(this.getAttribute('href')).classList.add('actif');

// on recupere les liens du menu
var links = document.querySelectorAll("nav .liens a");
links.forEach
// quand on click sur un lien du menu
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(){
    // on enregistre la section vers lequel il pointe
    var linkTarget = this.getAttribute('href');
    var target = document.querySelector(linkTarget).parentNode;
    // on verifie si la section vers laquelle le lien point contient deja la classe active
    if(target.classList.contains("actif")){
      // on arrete l'excution du script
    } else {
      // on retire la classe actif a la section qui l'a actuelement
      document.querySelector(".section.actif").classList.remove("actif");
      // on ajoute la classe actif a la section ver laquelle pointe le href du lien sur lequel on a cliqué
      target.classList.add("actif");
      // e.stopPropagation();
    }
  })
}
// quand on click sur un lien du menu
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(){
    // on verifie si la classe active n'est pas deja presente sur le li parent du lien
    if(this.parentNode.classList.contains("actif")){
      // on arrete l'excution du script
    } else {
      // on retire la classe active du li qui l'actuelement
      document.querySelector("li.active").classList.remove("active");
      // on ajoute la classe actif a la section ver laquelle pointe le href du lien sur lequel on a cliqué
      this.parentNode.classList.add("active");
      // e.stopPropagation();
    }
  })
}
