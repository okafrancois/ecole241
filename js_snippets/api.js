var dataContainer = document.getElementById("dataContainer")
ajaxGet("http://agribourse.alwaysdata.net/api/v1/home", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var datas = JSON.parse(reponse);
    datas.data.forEach(function (data) {
        // Ajout du titre et du contenu de chaque article

    });
});
