<?php
include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

$Id=NULL;
$Nom=checkInput($_REQUEST["nom"]);
$Descr=checkInput($_REQUEST["description"]);
// nl2br pour la prise en charge des retours à la ligne
$Description=nl2br($Descr);
$Image=checkInput($_REQUEST["image"]);
$Fichier=checkInput($_REQUEST["fichier"]);
$Age=checkInput($_REQUEST["age"]);
$Nom_editeur=checkInput($_REQUEST["nom_editeur"]);
$Site_editeur=checkInput($_REQUEST["site_editeur"]);
$Valide=0;
$Id_pdn=checkInput($_REQUEST["id_pdn"]);

// OK avec ça :
// $Id=NULL;
// $Nom="aze";
// $Description="aze";
// $Image="aze";
// $Fichier="aze";
// $Age="aze";
// $Nom_editeur="aze";
// $Site_editeur="aze";
// $Valide=0;
// $Id_pdn=NULL;

// Ces lignes envoies vers mysql - on créé des paramètres inventés, qui doivent être les mêmes que dans la procédure
$req="call outilAjout(:id_outil,:nom_outil,:description_outil,:image_outil,:fichier_outil,:age_outil,:nom_editeur_outil,:site_editeur_outil,:valide_outil,:id_pdn)";
$resultat=$connex->prepare($req);

// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id_outil',$Id);
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

session_start();
$headers ='From: "Promeneurs du Net 93"<no-reply@pdn93.fr>'."\n";
$headers .='Content-Type: text/html; charset="utf-8"'."\n";
$headers .='Content-Transfer-Encoding: 8bit';
$message = '<html><body> a proposé un nouvel outil sur le site Promeneurs du Net 93.</br></br><a href="http://anomalies.fr/admin/outModif.php">Se connecter à l\'interface d\'administration</a></body></html>';
mail('sebastien.trouve@mailo.com', 'Nouvel outil sur le site Promeneurs du Net 93', $_SESSION['prenom_pdn'].' '.$_SESSION['nom_pdn'].$message, $headers);

echo 'ok';

// Fonction de sécurisation des chaines de caractères remontées
function checkInput($data) {
    $data = trim($data); // Supprime les espaces en début et fin de chaîne
    $data = stripslashes($data); // Retourne une chaîne dont les antislashs on été supprimés.
    $data = htmlspecialchars($data); // Convertit les caractères spéciaux en entités HTML
    return $data;
}
?>
