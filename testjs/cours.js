let prenoms = [
  {
    nom: "stone",
    prenom: "berny"
  },
  {
    nom: "stone",
    prenom: "berny"
  },
  {
    nom: "stone",
    prenom: "berny"
  },
]
let list = document.querySelector("ol");

prenoms.forEach(el => {
  let nom = document.createElement("li");
  let prenom = document.createElement("span");
  nom.textContent = el.nom;
  prenom.textContent = el.prenom;
  nom.style.color = "#f00";
  nom.appendChild(prenom);
  list.appendChild(nom);
})
