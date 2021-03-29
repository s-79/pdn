<?php

include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

$Id=checkInput($_REQUEST["id"]);
$Nom=checkInput($_REQUEST["nom"]);
$Descr=checkInput($_REQUEST["description"]);
// nl2br pour la prise en charge des retours à la ligne
$Description=nl2br($Descr);
$Image=checkInput($_REQUEST["image"]);
$Fichier=checkInput($_REQUEST["fichier"]);
$Age=checkInput($_REQUEST["age"]);
$Nom_editeur=checkInput($_REQUEST["nom_editeur"]);
$Site_editeur=checkInput($_REQUEST["site_editeur"]);
$Valide=checkInput($_REQUEST["valide"]);
$Id_pdn=checkInput($_REQUEST["id_pdn"]);

// OK avec ça :
// $Id=1;
// $Nom="aze";
// $Description="aze";
// $Image="aze";
// $Fichier="aze";
// $Age="aze";
// $Nom_editeur="aze";
// $Site_editeur="aze";
// $Valide=1;
// $Id_pdn=1;

// Si pb : Tester en dur avec les paramètres puis aller sur la page php via localhost au autre

// Ces lignes envoies vers mysql - on créé des paramètre inventées
// idcli / idanim : ceux qui apparaissent dans la procédure stockée et dans les paramètres > nom sur sql
$req="call outilModif(:nom_outil,:description_outil,:image_outil,:fichier_outil,:age_outil,:nom_editeur_outil,:site_editeur_outil,:valide_outil,:id_pdn,:id)";
$resultat=$connex->prepare($req);

// Les paramètres qui passent par bindValue sont cryptés puis comparés dans mysql
// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id',$Id);
$resultat->bindValue(':nom_outil',$Nom);
$resultat->bindValue(':description_outil',$Description);
$resultat->bindValue(':image_outil',$Image);
$resultat->bindValue(':fichier_outil',$Fichier);
$resultat->bindValue(':age_outil',$Age);
$resultat->bindValue(':nom_editeur_outil',$Nom_editeur);
$resultat->bindValue(':site_editeur_outil',$Site_editeur);
$resultat->bindValue(':valide_outil',$Valide);
$resultat->bindValue(':id_pdn',$Id_pdn);
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
