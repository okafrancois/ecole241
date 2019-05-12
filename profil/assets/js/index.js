let skLevels = document.querySelectorAll('.skill-level');

for (var i = 0; i < skLevels.length; i++) {
  let value = skLevels[i].parentNode.parentNode.querySelector("span:last-of-type").textContent;
  skLevels[i].style.width = value;
}
let body = document.body;
let liens = body.querySelectorAll(".liens a")
let blocLiens = body.querySelectorAll(".liens")
let contenus = body.querySelectorAll(".contenus")
let contenu = body.querySelectorAll(".contenu");

var change = function (){
  console.log("click");
  let li = this.parentNode;
  if(li.classList.contains("actif")){
    console.log("already active")
  } else{
    let rm = document.querySelector(".contenus .actif");
      // on retire la classe actif au lien actuellement actif
    rm.classList.remove("actif");
      //on ajoute la classe actif au lien en cours de click
      li.classList.add("actif")
      // on retire la classe actif au contenu actif
      document.querySelector("actif").classList.remove("actif");
      // on ajoute la classe actif au contenu cible
      document.querySelector(this.getAttribute('href')).classList.add('actif')

  }
}
for (let i = 0; i < liens.length; i++) {
  liens[i].addEventListener('click', change);
}


  //
  //
  // document.querySelector(this.getAttribute('href')).classList.add('actif');
