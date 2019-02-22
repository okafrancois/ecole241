    function boucle1() {
      console.log('Debut du programme');
      var nombre = 1;
      while (nombre <= 5) {
        console.log(nombre);
        nombre++;
      }
      console.log('Fin du programme');
    }
    //exemple de boucle infinie
    function boucle2() {
      console.log('Debut du programme');
      var nombre = 1;
      while (nombre <= 5) { // on affiche la valeur de la var nombre tan qu'elle est <5
        console.log(nombre);
      }
      console.log('Fin du programme');
    }
    //le manege
    let tours = function(){
      const nombre = Number(prompt('Vous voulez faire combien de tours de manege?'));
      console.log("Le manège démarre");
      for (let i = 1; i <= nombre; i++) {
        console.log(`C'est le tour numéro ${i}`)
      }
      console.log("Le manège s'arrête");
    }
    let rep = window.confirm('Voulez vous faire des tours de manège?');
    rep ? tours(): console.log("Le programme prend fin");


    //table de 10
    const nombre = Number(prompt('Saisissez un nombre')); // Faites varier cette variable entre 1 et 10
    console.log(`Table de multiplication de ${nombre}`);
    // Ajoutez votre code ici
    console.log('Debut du process');
    for (i = 1; i <= 10; i++) {
      console.log(`${nombre} x ${i} = ${nombre*i}`);
    }
    console.log("C'est bon j'ai fini, voici votre table de multiplication");

    // Fizz Buzz
    // Ajoutez votre code ici
    for (i = 1; i <= 100; i++) {
      console.log(((i % 3) === 0)? "Fiz" : (((i % 5) === 0) && ((i % 3) === 1)) ? 'Buzz': (((i % 5) === 0) && ((i % 3) === 0)) ? 'FizBuzz' : (i))
    }
    // tours de manege 2.0
    let manege = function(nombre) { // fonction qui lance les tours de manege
      for (i = 1; i <= nombre; i++) {
        console.log(`C'est le tour numero ${i}`);
      }
    }


    // la calculette
    // Ajoutez votre code ici
    let calculer = function(nb1, op, nb2) {
      switch (op) {
        case "+": // dans le cas ou l'op est une addition
          return `${nb1 + nb2}`;
          break;
        case "-": // dans le cas ou l'op est une soustraction
          return `${nb1 - nb2}`;
          break;
        case "*": // dans le cas ou l'op est une multiplication
          return `${nb1 * nb2}`;
          break;
        case "/": // dans le cas ou l'op est une division
          return `${nb1 / nb2}`;
          break;
        default:
        return "operation inconnue";
      }
    }
    console.log(calculer(4, "+", 6)); // 10
    console.log(calculer(4, "-", 6)); // -2
    console.log(calculer(2, "*", 0)); // 0
    console.log(calculer(12, "/", 0)); // Infinity


    //le combat
    let decrire = (perso) => {
      console.log(`Le personnnage se nomme ${perso.nom}, c'est un ${perso.type} avec ${perso.force} points de force et ${perso.sante} point de vie. `)
    }
    const perso1 = {
      nom: "Stone",
      sante: 300,
      force: 80,
      type: 'Guerrier',
    };

    const perso2 = {
      nom: "Berny",
      sante: 250,
      force: 100,
      type: 'Sorcier',
    };
    console.log(`${perso1.nom} le ${perso1.type} rencontre ${perso2.nom} le ${perso2.type}.`);
    console.log("Les esprits se chauffent et le combat commence");
    console.log(`${perso1.nom} attaque ${perso2.nom}`);
    perso2.sante = perso2.sante - perso1.force;
    console.log(`${perso2.nom} perd ${perso1.force} point de vie`);
    console.log(decrire(perso1));


    //le chien objet
    // Ajoutez votre code ici
    const chien = {
      nom: 'Crockdur',
      race: 'mâtin de Naples',
      taille: 75,
      aboyer() {
        return 'Grr ! Grr !'
      }

    }
    // "Crockdur est un mâtin de Naples mesurant 75 cm"
    console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);

    // "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
    console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);

    //le compte bancaire
    // Ajoutez votre code ici
    const compte = {
      titulaire: 'Alex',
      solde: 0,
      crediter(operator, somme) {
        if (operator === '+') {
          this.solde = this.solde + somme;
        } else if (operator === '-') {
          this.solde = this.solde - somme;
        } else {
          console.log('operation non autorisée.')
        }
        return this.solde
      },
      decrire() {
        return `Le titulaire du compte est ${this.titulaire} et son solde est ${this.solde}`;
      },
    };
    console.log(compte.decrire());
    compte.crediter('+', 500);
    console.log(compte.decrire());

    //le tableau
    const noms = ["Berny", "Stone", "BB", ];
    const notes = [10, 15, 16];

    function decrire(tab) {
      let taille = tab.length;
      console.log(`Le tableau contient ${taille} elements`);
      for (i = 0; i < taille; i++) {
        console.log(tab[i]);
      }
    }
    decrire(noms);
    decrire(notes);
    notes.push(18);
    decrire(notes);

    //les mousquetaires
    // Ajoutez votre code ici
    let mousquetaires = ['Athos', 'Porthos', 'Aramis'];
    let tailleTab = mousquetaires.length;
    for (i = 0; i < tailleTab; i++) {
      console.log(mousquetaires[i]);
    };
    mousquetaires.push('Artagnan');
    mousquetaires.forEach(element => {
      console.log(element);
    });
    mousquetaires.splice(2, 1);
    for (var nom of mousquetaires) {
      console.log(nom);
    }

    //valeur max
    const valeurs = [1, 8, 5, 7, 6, 9, 2, 3, 10, 4];
    let max = valeurs[0];
    console.log(max)
    for (let i = 1; i < valeurs.length; i++) {
      if (valeurs[i] > max) {
        max = valeurs[i];
      }
    }
    console.log(max);

    //les chaines String
    let text = 'Hello world !';
    console.log(text === 'Hello world !');
    console.log(`La phrasecontient ${text.length} caracteres`);
    for (let i = 0; i < text.length; i++) {
      console.log(`${i+1}: ${text[i]}`);
    }
    text = 'Bonjour les gens'
    let tabtext = text.split(' '); // separer les element de la chaine par rapport aux espaces
    for (let i = 0; i < tabtext.length; i++) {
      console.log(tabtext[i]) //Bonjour, les et les gens
    }
    // Nombre de voyelles

    function compterVoyelles(mot) {
      let nbVoyelles = 0;
      for (const lettre of mot) {
        const lettreMin = lettre.toLowerCase();
        if (
          lettreMin === "a" ||
          lettreMin === "e" ||
          lettreMin === "i" ||
          lettreMin === "o" ||
          lettreMin === "u" ||
          lettreMin === "y"
        ) {
          nbVoyelles++;
        }
      }
      return nbVoyelles;
    }

    console.log(compterVoyelles("RadAr")); // 2
    console.log(compterVoyelles("Tic et Tac")); // 3
    console.log(compterVoyelles("Oasis Oasis Oh")); // 7


    //LA BAITAILLE CODAL
    class Perso {
      constructor(nom, type, sante, force) {
        this.nom = nom;
        this.type = type;
        this.sante = sante;
        this.force = force;
        this.xp = 0; // Toujours 0 au début
      }
      // Renvoie la description du personnage
      decrire() {
        if (this.sante <= 0) {
          return console.log(`${this.nom} est mort, Fin du game. libere moi la ligne.`);
        } else {
          console.log(`${this.nom}, personnage de type ${this.type} avec ${this.force} points de force, ${this.sante} de sante et ${this.xp} d'experience`)
        }
      }
      attaque(cible) {
        // ...
        console.log(`${this.nom} attaque ${cible.nom} qui perd ${this.force} points de vie`);
        cible.sante = cible.sante - this.force;
        console.log(`${cible.nom} a maintenant ${cible.sante} points de sante`)
        if (cible.sante <= 0) {
          this.xp += 50;
          console.log(`${cible.nom} succombe sur le coup, ${this.nom} gagne ${this.xp} points d'experience`);
        } else {
          console.log(`${cible.nom} a maintenant ${cible.sante} points de santé`)
        };
      }
      // ...
    }

    const perso1 = new Perso('Stone', 'Java cry', 100, 400);
    const perso2 = new Perso('Albert', 'Semantic cry', 350, 120);
    let nomPerso1 = prompt('Bienvenue dans la bataille des codeurs \n Entrez ne nom de votre personnage')
    perso1.nom = nomPerso1;
    let nomPerso2 = prompt('Entrez aussi le nom de votre rival')
    perso2.nom = nomPerso2;
    perso1.decrire();
    perso2.decrire();
    perso1.attaque(perso2);
    perso1.decrire();
    perso2.decrire();


    //GESTIONNNAIRE DE CONTACTS
    /*
    Activité : gestion des contacts
    */
    // TODO : complétez le programme
    class Contact { //classe pour creer un contact
      constructor(prenom, nom, numero) {
        this.prenom = prenom;
        this.nom = nom;
        this.numero = numero;
      }
      decrire() { //methode pour la description
        console.log(`Prenom: ${this.prenom}\nNom: ${this.nom}\nNumero: ${this.numero}`)
      }
    }

    function lister() { //lister les contacts
      for (let i = 0; i < contacts.length; i++) {
        console.log(`Contact ${i+1}`)
        contacts[i].decrire();
      }
    }

    function ajouter() { //ajouter un contacte
      let prenom = prompt('Entrez le prenom :');
      let nom = prompt('Entrez le nom :');
      let numero = prompt('Entrez le numero :');
      let contact3 = new Contact(prenom, nom, numero);
      contacts.push(contact3);
      console.log('votre contact a été ajouté');
    }
    let contact = new Contact('Carole', 'Lévisse', '04594130');
    let contact1 = new Contact('Mélodie', 'Nelsonne', '04596190');
    //tableau contenant tout les contacts
    const contacts = [contact, contact1];
    console.log("Bienvenue dans le gestionnaire de contacts !");
    lister();
    console.log("1: Lister les contacts\n2: Ajouter un contacts\n3: Quitter");
    let option = '3';
    do {
      option = prompt("Choisissez une option");
      switch (option) {
        case '1': //Option lister les contacts
          lister();
          break;
        case '2': //Option ajouter un contact
          ajouter();
          break;
        default:
          console.log(`option inconnu`);
      }
    } while (option != '3');

    console.log('Aurevoir.')
    //gestionnaire de contact fin
    // moyenne
    let eleves = [{
      nom: "Marc",
      moyenne: 15
    },
    {
      nom: "Stone",
      moyenne: 9
    },
    {
      nom: "Marc",
      moyenne: 4
    }]
    console.log("Voici la liste des eleves qui n'ont pas la moyenne");
    for(let i= eleves.length-1; i>=0; i--){
      if(eleves[i].moyenne<10){
        console.log(`Nom: ${eleves[i].nom}, Moyenne: ${eleves[i].moyenne}`)
      }
    }

    // QUI EST LE MEILLEUR ELEVE
    // calculer la Moyenne
    // TODO: calculer la moyenne de chaque eleves
    // si la moyenne de l'eleve1 est superieure a celle de l'eleve 2 alors on renvoi true
    //On affiche le message de confirmation
    class Eleve {
      constructor(nom, [a, b, c]) {//prend en parametre le nom de l'eleve et un tableau avec ses notes
        this.nom = nom;
        this.notes = [a, b, c]
      }
      moyenne(){
        let tabNotes = this.notes;
        let moyenne = 0;
        let total = 0;
        for(let i = 0 ;i < tabNotes.length; i++ ){
          let note  = tabNotes[i];
          total += note;//on incremente le total de la de al note a chaque iteration
        }
        moyenne = total/tabNotes.length;
        return moyenne
      }
    }
    function theBest(a, b){//prend en parametre les deux sujets a comparer
      console.log('comparaison en cours')
      console.log(`${a.moyenne()} pour ${a.nom} et ${b.moyenne()} pour ${b.nom}`)
      if(a.moyenne() > b.moyenne()){
        console.log(`${a.nom} a une meilleure moyenne que ${b.nom}`)
      }else{
        console.log(`${a.nom} n'a pas une meilleure moyenne que ${b.nom}`)
      }
    }
    let eleve1 = new Eleve('Stone',[10, 20, 15]);
    let eleve2 = new Eleve('Berny', [18, 4, 15]);
    console.log(eleve1.moyenne());
    console.log(eleve2.moyenne());
    theBest(eleve1, eleve2);
