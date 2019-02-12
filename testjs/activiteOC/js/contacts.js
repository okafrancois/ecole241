/*
Activité : gestion des contacts
*/
class Contact {
  constructor(prenom, nom, numero) {
    this.prenom = prenom;
    this.nom = nom;
    this.numero = numero;
  }
  decrire() {//affiche le prenom , le nom et le numero du contact
    console.log(`Prenom: ${this.prenom}, Nom: ${this.nom}, Numero`)
  }
}
let contact = new Contact('Carole', 'Lévisse', '04594130');//nouveau contact
let contact1 = new Contact('Mélodie', 'Nelsonne', '04596190');
const contacts = [contact, contact1];
function listContacts() {
  for (let i = 0; i < contacts.length; i++) {//liste les contact
    contacts[i].decrire();
  }
};
// TODO : complétez le programme
console.log("Bienvenue dans le gestionnaire de contacts !");
console.log("1: Lister les contacts\n2: Ajouter un contacts\n3: Quitter");
let option = prompt('Choisissez une option');//choisir une option
switch (option) {
  case '1':
    listContacts();
    break;
  default:

}
console.log('Bye, Bye');
