<?php
// Copie de sqlproc.php
// Copie de sqlconf.php
include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

$Id=checkInput($_REQUEST["id"]);

// OK avec ça :
// $Id=8;

// Si pb : Tester en dur avec les paramètres puis aller sur la page php via localhost au autre

// Ces lignes envoies vers mysql - on créé des paramètre inventées
$req="call typeSuppr(:id)";
$resultat=$connex->prepare($req);

// Les paramètres qui passent par bindValue sont cryptés puis comparés dans mysql
// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id',$Id);

$resultat->execute();
echo 'ok';

// Fonction de sécurisation des chaines de caractères remontées
function checkInput($data) {
    $data = trim($data); // Supprime les espaces en début et fin de chaîne
    $data = stripslashes($data); // Retourne une chaîne dont les antislashs on été supprimés.
    $data = htmlspecialchars($data); // Convertit les caractères spéciaux en entités HTML
    return $data;
}
?>
