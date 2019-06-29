// script de validation de la newsletter

// modules
const regValidation = function (element, regexp) {

    /*regValidation() prend en parametre un element et une RegExp
    fait un test() de la valeur de l'attribut 'value' de l'element avec la regexp 
    renvoie le resultat du test sous forme de Boolean */

    let text = element.value;
    let result = regexp.test(text);
    return result;
}

const confirmValidation = function () {

    /* cette fonction va s'occuper d'afficher le message de confirmation
    d'adhésion à la newsletter dans les blocs prévus pour . */

    // on fait disparaitre les champs de saisie et le button du formulaire 
    let content = nltrContent.querySelectorAll('*')
    content.forEach(element => {
        element.classList.remove('show');
        element.classList.add('hide');
    });

    // on créé le bloc de chargement 
    let loading = document.createElement('div');
    loading.id = 'loading';
    let load = document.createElement('img');
    load.src = 'assets/img/loading-img.gif';
    loading.appendChild(load);

    // on ajoute le bloc de chargement à la page
    nltrContent.appendChild(loading);

    // on attend 1 seconde avant de mettre l'image de success de validation
    setTimeout(function () {
        load.src = 'assets/img/success-img.gif';
    }, 1000)

    clearTimeout();
    setTimeout(function () {
        //on attend  encore 2 secondes puis on fait disparaitre le bloc de chargement
        loading.removeChild(load);
        nltrContent.classList.add('minified');

        // on attend 1 seconde puis on change le titre de la newsletter
        setTimeout(function () {
            nltrTitle.textContent = ntlrForm.getAttribute('data-valide');
        }, 1000)
    }, 2000);

    clearTimeout();
}

// zone de traitement de la newsletter
    // on stock les element du formulaire dans des variables

    let ntlrForm = document.forms['newsletter']; // formulaire newsletter
    let nameInput = ntlrForm['user-name']; // Nom newsletter
    let emailInput = ntlrForm['email-letter']; // adresse email newsletter

    let nltrContent = document.querySelector('#newsletter-content'); // bloc du contenu newsletter
    let nltrTitle = document.querySelector('#newsletter-title'); // bloc du titre newsletter


// validateurs(regexp)

let nameReg = /[^A-Z]/;
let emailReg = /^[a-z]+[@][a-z]+\.[a-z{2,4}]+/;

// lorsqu'on soumet le formulaire 

ntlrForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // si le champ "nom" n'est pas vide
    if (nameInput.value) {
        // on verifie la valeur rentrée dans le champ nom
        let result = regValidation(nameInput, nameReg);
        // si le shamp nom ne contient pas de caractères interdits(et est donc valide) 
        if (result == false) {
            // si le champ email n'est pas vide
            if (emailInput.value) {
                // on verifie l'email rentré correspont aux attentes
                result = regValidation(emailInput, emailReg);
                // si oui on envoit le message confirmation à l'user sinon on affiche un message d'erreur 
                result ? confirmValidation(e) : alert('Adresse email invalide, les majuscules et les caractères spèciaux ne sont pas autorisés');
            } else {
                // sinon on demande de rentrer l'email
                alert('Veuillez entrez votre adresse email SVP')
            }
        } else {
            // sinon on l'utilisateur et lui rappelle les caractere non autorisés  
            alert('Le nom doit etre écris tout en majuscules (les chiffres et caractères speciaux ne sont pas autorisés)')
        }
    } else {
        // sinon on demande à l'utilisateur de renseigner le champ nom
        alert('Veuillez entrez votre nom svp.');
    }
})

// fin de la zone de traitement de la newsletterzone de traitement du contact
