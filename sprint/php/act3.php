<?php
// Des prenoms dans un tableau php
//tableau associatif
$prenoms = array(
  1 => "Berny",
  2 => "Stone",
  3 => "François",
  4 => "Disick",
  5 => "Henry",
  6 => "Junior",
  7 => "Red",
  8 => "John",
  9 => "Noel",
  10 => "Prenom",
 );
 // tableau simple
$prenoms2 = array("Berny", "Stone", "François", "Disick", "Henry", "Junior", "Red", "John", "Noel", "Prenom");
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="prenoms">
      <ul>
        <h2>Liste 1(tableau associatif)</h2>
         <!-- Parcours du premier tableau -->
        <?php
        foreach($prenoms as $prenom){
          echo "<li>$prenom</li>";
        };
        ?>
      </ul>
      <ul>
        <h2>Liste 2(tableau simple)</h2>
        <!--  parcours du deuxieme tableau -->
        <?php
        for($i = 1; $i <= 10; $i++){
          echo "$i : $prenoms[$i] <br>";
        };
        ?>
      </ul>
    </div>
  </body>
</html>
