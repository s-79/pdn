<?php
include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

$IdStr=checkInput($_REQUEST["idE"]);
$IdType=checkInput($_REQUEST["idP"]);

// OK avec ça :
// $IdStr=15;
// $IdType=4;

// Ces lignes envoies vers mysql - on créé des paramètres inventés, qui doivent être les mêmes que dans la procédure
$req="call associerSuppr(:id_structure,:id_type)";
$resultat=$connex->prepare($req);

// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id_structure',$IdStr);
$resultat->bindValue(':id_type',$IdType);
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
