/*
Activité : gestion des contacts
*/
class Contact {//classe pour creer un contact
  constructor(prenom, nom, numero) {
    this.prenom = prenom;
    this.nom = nom;
    this.numero = numero;
  }
  decrire(){//methode pour la description
    console.log(`Prenom: ${this.prenom}\nNom: ${this.nom}\nNumero: ${this.numero}`)
  }
}
// TODO : complétez le programme
function lister(){//lister les contacts
  for(let i = 0; i < contacts.length; i++){
    console.log(`Contact ${i+1}`)
    contacts[i].decrire();
  }
}
function ajouter(){//ajouter un contacte
  let prenom = prompt('Entrez le prenom :');
  let nom = prompt('Entrez le nom :');
  let numero = prompt('Entrez le numero :');
  let contact3 = new Contact(prenom, nom, numero);
  contacts.push(contact3);
  console.log('votre contact a été ajouté');
}
let contact = new Contact('Carole','Lévisse', '04594130' );
let contact1 = new Contact('Mélodie','Nelsonne', '04596190' );
//tableau contenant tout les contacts
const contacts = [contact, contact1];
console.log("Bienvenue dans le gestionnaire de contacts !");
lister();
console.log("1: Lister les contacts\n2: Ajouter un contacts\n3: Quitter");
let option = '3';
do{
   option = prompt("Choisissez une option");
  switch (option) {
    case '1':
      lister();
      break;
    case '2':
      ajouter();
      break;
    default:
    console.log(`option inconnu`);
  }
} while (option != '3');

console.log('Aurevoir.')
