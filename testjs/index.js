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
    rep = String(prompt('Voulez vous faire des tours de manège? (oui/non)'));
    if (rep === 'oui') {
      const nbTours = Number(prompt('Vous voulez faire combien de tours de manege?'));
      console.log("Le manège démarre");
      for (let i = 1; i <= nbTours; i++) {
        console.log(`C'est le tour numéro ${i}`)
      }
      console.log("Le manège s'arrête");
    } else {
      if (rep !== 'non') {
        alert("Je ne comprends pas ce que tu m'écris. Aurevoir");
      }
      console.log("Le programme prend fin");
    }
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
      if ((i % 3) === 0) {
        //si le nombre est divisible par 3
        console.log('Fizz')
      } else {
        //si le nombre est divisible par 5 mais pas par 3
        if (((i % 5) === 0) && ((i % 3) === 1)) {
          console.log('Buzz')
        } else if (((i % 5) === 0) && ((i % 3) === 0)) {
          //si le nombre est divisible par 5 et par 3
          console.log('FizBuzz')
        } else { // le nombre est normal...On va dire
          console.log(i)
        }
      }
    }
    // tours de manege 2.0
    function tourManege(nombre) { // fonction qui lance les tours de manege
      for (i = 1; i <= nombre; i++) {
        console.log(`C'est le tour numero ${i}`);
      }
    }
    var rep = String(prompt("Voulez vous faire du manege ?(oui/non)"));
    if (rep === 'oui') { // si oui debut des tours
      let nombre = Number(prompt('Combien de tours voulez vous faire ?'))
      console.log('Demarrage du manege');
      tourManege(nombre);
      console.log('Fin du manege, Revenez vite!')
    } else {
      if (rep !== 'non') {
        alert("Je ne comprends pas ce que tu m'écris. Aurevoir");
      }
      console.log("Le programme prend fin");
    }
    // la calculette
    // Ajoutez votre code ici
    function calculer(nb1, op, nb2) {
      switch (op) {
        case "+": // dans le cas ou l'op est une addition
          var result = nb1 + nb2;
          return result;
          break;
        case "-": // dans le cas ou l'op est une soustraction
          var result = nb1 - nb2;
          return result;
          break;
        case "*": // dans le cas ou l'op est une multiplication
          var result = nb1 * nb2;
          return result;
          break;
        case "/": // dans le cas ou l'op est une division
          var result = nb1 / nb2;
          return result;
          break;
      }
    }
    console.log(calculer(4, "+", 6)); // 10
    console.log(calculer(4, "-", 6)); // -2
    console.log(calculer(2, "*", 0)); // 0
    console.log(calculer(12, "/", 0)); // Infinity
    //le combat
    function decrire(perso) {
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
    let text = 'Bonjour les gens'
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
    //le combat
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
