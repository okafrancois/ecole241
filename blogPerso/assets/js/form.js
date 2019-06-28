// script de validation de la newsletter

// ntlr pour newsletter
// on stock les element du formulaire dans des variables

var ntlrForm = document.querySelector("#newsletter-form");
var emailInput = document.querySelector('#newsletter-form input[type="email"]');
var nameInput = document.querySelector('#newsletter-form input[type="text"]');
var nltrContent = document.querySelector('#newsletter-content');
var nltrTitle = document.querySelector('#newsletter-title');

// lorsqu'on soumet le formulaire 

ntlrForm.addEventListener('submit', function (e) {
    // on arrete le deroulement de l'evenement submit
    e.preventDefault();

    // on fait disparaitre les champs du formulaire
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


})