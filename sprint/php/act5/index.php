<?php
  require 'data.php';
 ?>
 <!doctype html>
 <html lang="fr">
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
      table a{
        text-decoration: underline;
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
      <th scope="col">#</th>
      <th scope="col">Prenom</th>
      <th scope="col">Nom</th>
      <th scope="col">Age</th>
      <th scope="col">Profil</th>
    </tr>
  </thead>
  <tbody>
    <?php
      $i = 1;
      foreach ($liste as $el) :?>
      <tr>
        <td><?= $i ?></td>
        <td><?= $el['prenom'] ?></td>
        <td><?= $el['nom'] ?></td>
        <td><?php if ($el['age']==="NaN") {
          echo "inconnu";
        } else {
          echo "{$el['age']} ans";
        }?></td>
        <td><a href="<?= $el['profil']?>" target="_blank">Consulter</a> </td>
      </tr>
      <?php $i++ ?>
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
