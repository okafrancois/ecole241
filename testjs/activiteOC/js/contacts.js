/*
Activité : gestion des contacts
*/
class Contact {
  constructor(prenom, nom, numero) {
    this.prenom: prenom;
    this.nom: nom;
    this.numero: numero;
  }
  decrire(){
    console.log(`Prenom: ${this.prenom}, Nom: ${this.nom}, Numero`)
  }
}
let contact = new Contact('Carole','Lévisse', '04594130' );
let contact1 = new Contact('Mélodie','Nelsonne', '04596190' );
// TODO : complétez le programme
console.log("Bienvenue dans le gestionnaire de contacts !");
console.log("1: Lister les contacts\n2: Ajouter un contacts\n3: Quitter");
let option = prompt('Choisissez une option');
while (option !== "3") {//tan que l'user n'a pas choisis l'option Quitter
 if(option = "1"){
   listContacts();//lister les contacts
 }
}
console.log('Bye, Bye');
