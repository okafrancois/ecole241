// script de validation de la newsletter

// modules

const validateContent = function(){
    let name = nameInput.value;
    let nameReg = /[^A-Z]/;
    let emailReg  = /^[a-z]+[@][a-z]+\.[a-z]{2,4}/;
    let testResult = nameReg.test(name);
    return testResult;

}
const confirmValidation = function(event){
    let content = nltrContent.querySelectorAll('*')
    content.forEach(element => {
        element.classList.remove('show');
        element.classList.add('hide');
    });

    // on créé le bloc de chargement a la page
    let loading = document.createElement('div');
    loading.id = 'loading';
    let load = document.createElement('img');
    load.src = 'assets/img/loading-img.gif';
    loading.appendChild(load);
    // on ajoute le bloc de chargement a la page
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
    event.preventDefault();

}
// ntlr pour newsletter
// on stock les element du formulaire dans des variables



var ntlrForm = document.forms['newsletter'];
var nameInput = ntlrForm['user-name'];
var emailInput = ntlrForm['email-letter'];
var nltrContent = document.querySelector('#newsletter-content');
var nltrTitle = document.querySelector('#newsletter-title');


// lorsqu'on soumet le formulaire 

ntlrForm.addEventListener('submit', function(e) {

    if(nameInput.value){
        e.preventDefault();
        let result = validateContent();

        if(result = false){
            alert('Test concluant')
        } else{
            alert('Le nom doit etre écris tout en majuscules')
        }
        break
    } else{
        alert('Veuillez entrez votre nom svp.');
        e.preventDefault();
    }
})