<?php
include("../admin/php/base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp);

$nom=checkInput($_REQUEST['nom']);
$domaine=checkInput($_REQUEST['domaine']);
$mdp=checkInput($_REQUEST['mdp']);

// $nom="sebastien.trouve";
// $domaine="mailo.com";
// $mdp="Seb12345";

// :em paramètre de requète préparée pour email; :md
$req="select loginConnex(:mailNom,:mailDomaine,:mdp) as res";
$resultat= $connex->prepare($req);

// bindValue, on attache comme valeur les variables
// Sécurité : Au moment de l'éxécution, les requêtes ne sont pas visibles
$resultat->bindValue(':mailNom',$nom);
$resultat->bindValue(':mailDomaine',$domaine);
$resultat->bindValue(':mdp',$mdp);
$resultat->execute();
$rep="0"; // valeur par défaut correspond à aucun résultat trouvé

// on définit un curseur d'enregistrements
$resultat->setFetchMode(PDO::FETCH_OBJ);

While($ligne= $resultat->fetch())
 {
      $rep=$ligne->res;
  }
  // On revoit 0 ou 1
  $resultat->closeCursor();
 echo $rep;

 // Fonction de sécurisation des chaines de caractères remontées
 function checkInput($data) {
     $data = trim($data); // Supprime les espaces en début et fin de chaîne
     $data = stripslashes($data); // Retourne une chaîne dont les antislashs on été supprimés.
     $data = htmlspecialchars($data); // Convertit les caractères spéciaux en entités HTML
     return $data;
 }
?>
