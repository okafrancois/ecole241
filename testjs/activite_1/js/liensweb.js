/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

//on parcours les element du tableau
listeLiens.forEach(post => {

  // on cree un bloc pour contenir le post
  let div = document.createElement('div');
  div.classList.add("lien");//ajout de la classe lien a la div

  // on cree un a pour le titre cliquable
  let title = document.createElement('a');
  title.href = post.url;//on ajoute y le lien
  title.textContent = post.titre; //et le titre
  title.setAttribute('target', "_blank");//on ajoute un _blank a l'attribut target
  title.style.color = "#428bca";//on donne de la couleur au titre
  title.style.textDecoration = "none";//css
  title.style.fontSize = "1.2em";//css

  // on cree un span pour afficher le lien
  let link = document.createElement('span');
  link.textContent = post.url;//on y ajoute l'url

  // on cree un small pour le nom de l'auteur
  let author = document.createElement('small');
  author.textContent = "Ajouté par ";//introdution de l'auteur
  author.textContent += post.auteur;//on y ajoute le nom de l'auteur

  //on reuni le tout dans le bloc lien
  // 1 le titre
  div.appendChild(title);
  // on ajoute un espace entre le et le titrw
  let sp = document.createTextNode(' ');
  div.appendChild(sp);
  // 2 le lien
  div.appendChild(link);

  // 3 retour a la ligne
  div.appendChild(document.createElement("br"));
  // 4 l'auteur
  div.appendChild(author);

  // on ajoute le bloc du post dans le contenu
  document.querySelector("#contenu").appendChild(div);

  // and it's over !!! merci !!!
})
