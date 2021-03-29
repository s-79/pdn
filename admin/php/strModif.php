<?php

include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

$Id=checkInput($_REQUEST["id"]);
$Nom=checkInput($_REQUEST["nom"]);
$Adresse=checkInput($_REQUEST["adresse"]);
$Ville=checkInput($_REQUEST["ville"]);
$Tel=checkInput($_REQUEST["tel"]);
$Site=checkInput($_REQUEST["site"]);
$Image=checkInput($_REQUEST["image"]);
$Pres=checkInput($_REQUEST["presentation"]);
$Presentation=nl2br($Pres);

// OK avec ça :
// $Id="46";
// $Nom="azerty";
// $Adresse="aze";
// $Ville="3";
// $Tel="aze";
// $Site="aze";
// $Image="aze";
// $Presentation="aze";

// Si pb : Tester en dur avec les paramètres puis aller sur la page php via localhost au autre

// Ces lignes envoies vers mysql - on créé des paramètre inventées
// idcli / idanim : ceux qui apparaissent dans la procédure stockée et dans les paramètres > nom sur sql
$req="call strModif(:nom_structure,:adresse_structure,:id_ville,:tel_structure,:site_structure,:image_structure,:presentation_structure,:id)";
$resultat=$connex->prepare($req);

// Les paramètres qui passent par bindValue sont cryptés puis comparés dans mysql
// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id',$Id);
$resultat->bindValue(':nom_structure',$Nom);
$resultat->bindValue(':adresse_structure',$Adresse);
$resultat->bindValue(':id_ville',$Ville);
$resultat->bindValue(':tel_structure',$Tel);
$resultat->bindValue(':site_structure',$Site);
$resultat->bindValue(':image_structure',$Image);
$resultat->bindValue(':presentation_structure',$Presentation);
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
