<!-- //tableau a 2 dimension -->
<!-- Les apre20+ts de ecole241 -->
<?php
  $liste = array(
    array(
      "nom"    => "Itoutou",
      "prenom" => "Berny",
      "age"    => 19,
      "profil" => "http://itfrancois.atsnx.com/?i=1"
    ),
    array(
      "nom"    => "Sisso",
      "prenom" => "Albert",
      "age"    => 28,
      "profil" => "https://albert241.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Hamilton",
      "prenom" => "Darryl",
      "age"    => 25,
      "profil" => "https://hamiltondarryl.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Nze Bitome",
      "prenom" => "Leticia",
      "age"    => "20+",
      "profil" => "https://nzebitome.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Kelby",
      "prenom" => "Din",
      "age"    => 21,
      "profil" => "https://DinKelby7.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Mbela",
      "prenom" => "Kevinn",
      "age"    => 21,
      "profil" => "https://mbela-kevinn98.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Maurio",
      "prenom" => "Joe",
      "age"    => "20+",
      "profil" => "https://DinKelby7.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Capitaine",
      "prenom" => "Didier",
      "age"    => 21,
      "profil" => "https://DinKelby7.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Kamgoua",
      "prenom" => "Grace",
      "age"    => "20+",
      "profil" => "https://lacastafiore.github.io/ecole241/profil/"
    ),
    array(
      "nom"    => "Ribelson",
      "prenom" => "Boris",
      "age"    => "20+",
      "profil" => "https://ribelson.github.io/ecole241/profil/"
    )
  )
 ?>
 <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ecole{241}</title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>
    <!-- Custom styles for this template -->
    <link href="cover.css" rel="stylesheet">
  </head>
  <body class="text-center">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">ecole{241}</h3>
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link active" href="#">Accueil</a>
      </nav>
    </div>
  </header>
  <br><br>
  <main role="main" class="inner cover">
    <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Age</th>
      <th scope="col">Profil</th>
    </tr>
  </thead>
  <tbody>
    <?php
      foreach ($liste as $el) :?>
      <tr>
        <td><?= $el['nom'] ?></td>
        <td><?= $el['prenom'] ?></td>
        <td><?= " {$el['age']} ans" ?></td>
        <td><?= $el['profil'] ?></td>
      </tr>

    <?php endforeach; ?>
  </tbody>
</table>
  </main>

  <footer class="mastfoot mt-auto">
    <div class="inner">
      <p>2019 à <a href="ecole241.org" target="_blank">ecole{241}</a> par Berny François</p>
    </div>
  </footer>
</div>
</body>
</html>
