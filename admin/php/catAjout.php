<?php

include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;
// $connex -> exec("SET CHARACTER SET utf8");

$Id=NULL;
$Cat=checkInput($_REQUEST["cat"]);
$Icone=checkInput($_REQUEST["icone"]);

// OK avec ça :
// $Id=NULL;
// $Cat="Image de soi";
// $Icone="icone"

// Ces lignes envoies vers mysql - on créé des paramètres inventés, qui doivent être les mêmes que dans la procédure
$req="call catAjout(:id_categorie,:nom_categorie,:icone_categorie)";
$resultat=$connex->prepare($req);

// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id_categorie',$Id);
$resultat->bindValue(':nom_categorie',$Cat);
$resultat->bindValue(':icone_categorie',$Icone);
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
