<?php

include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;
// $connex -> exec("SET CHARACTER SET utf8");

$Id=NULL;
$Them=checkInput($_REQUEST["them"]);
$Cat=checkInput($_REQUEST["cat"]);

// OK avec ça :
// $Id=NULL;
// $Them="Image de soi";
// $Cat="1";

// Ces lignes envoies vers mysql - on créé des paramètres inventés, qui doivent être les mêmes que dans la procédure
$req="call themAjout(:id_thematique,:nom_thematique,:id_categorie)";
$resultat=$connex->prepare($req);

// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id_thematique',$Id);
$resultat->bindValue(':nom_thematique',$Them);
$resultat->bindValue(':id_categorie',$Cat);
$resultat->execute();
echo 'ok';

// Fonction de sécurisation des chaines de caractères remontées
function checkInput($data) {
    $data = trim($data); // Supprime les espaces en début et fin de chaîne
    $data = stripslashes($data); // Retourne une chaîne dont les antislashs on été supprimés.
    $data = htmlspecialchars($data); // Convertit les caractères spéciaux en entités HTML
    // $data = htmlspecialchars($data, ENT_NOQUOTES, "UTF-8"); // A tester si pb d'encodage
    return $data;
}

?>
