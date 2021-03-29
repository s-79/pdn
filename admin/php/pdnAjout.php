<?php
include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

$Id=NULL;
$Nom=checkInput($_REQUEST["nom"]);
$Prenom=checkInput($_REQUEST["prenom"]);
$Profession=checkInput($_REQUEST["profession"]);
$IdMail=checkInput($_REQUEST["idMail"]);
$DomaineMail=checkInput($_REQUEST["domaineMail"]);
$PortablePro=checkInput($_REQUEST["portablePro"]);
$Facebook=checkInput($_REQUEST["facebook"]);
$Snapchat=checkInput($_REQUEST["snapchat"]);
$Instagram=checkInput($_REQUEST["instagram"]);
$WhatsApp=checkInput($_REQUEST["whatsApp"]);
$Youtube=checkInput($_REQUEST["youtube"]);
$Twitter=checkInput($_REQUEST["twitter"]);
$Discord=checkInput($_REQUEST["discord"]);
$Twitch=checkInput($_REQUEST["twitch"]);
$Tiktok=checkInput($_REQUEST["tiktok"]);
// Hachage du mot de passe
$Mdp=password_hash($_REQUEST["mdp"], PASSWORD_DEFAULT);
$Image=checkInput($_REQUEST["image"]);
$Pres=checkInput($_REQUEST["presentation"]);
$Presentation=nl2br($Pres);
$Actif=checkInput($_REQUEST["actif"]);
$Structure=checkInput($_REQUEST["structure"]);

// OK avec ça :
// $Id=NULL;
// $Nom="aze";
// $Prenom="aze";
// $Profession="aze";
// $IdMail="aze";
// $DomaineMail="aze";
// $PortablePro="0678912345";
// $Facebook="aze";
// $Snapchat="aze";
// $Instagram="aze";
// $WhatsApp="1";
// $Youtube="aze";
// $Twitter="aze";
// $Discord="aze";
// $Twitch="aze";
// $Tiktok="aze";
// $Mdp="aze";
// $Image="aze";
// $Presentation="aze";
// $Actif="1";
// $Structure="3";

// Ces lignes envoies vers mysql - on créé des paramètres inventés, qui doivent être les mêmes que dans la procédure
$req="call pdnAjout(:id_pdn,:nom_pdn,:prenom_pdn,:profession_pdn,:idMail_pdn,:domaineMail_pdn,:portablePro,:facebook_pdn,:snapchat_pdn,:instagram_pdn,:whatsApp_pdn,:youtube_pdn,:twitter_pdn,:discord_pdn,:twitch_pdn,:tiktok_pdn,:mdp_pdn,:image_pdn,:presentation_pdn,:actif_pdn,:structure_pdn)";
$resultat=$connex->prepare($req);

// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id_pdn',$Id);
$resultat->bindValue(':nom_pdn',$Nom);
$resultat->bindValue(':prenom_pdn',$Prenom);
$resultat->bindValue(':profession_pdn',$Profession);
$resultat->bindValue(':idMail_pdn',$IdMail);
$resultat->bindValue(':domaineMail_pdn',$DomaineMail);
$resultat->bindValue(':portablePro',$PortablePro);
$resultat->bindValue(':facebook_pdn',$Facebook);
$resultat->bindValue(':snapchat_pdn',$Snapchat);
$resultat->bindValue(':instagram_pdn',$Instagram);
$resultat->bindValue(':whatsApp_pdn',$WhatsApp);
$resultat->bindValue(':youtube_pdn',$Youtube);
$resultat->bindValue(':twitter_pdn',$Twitter);
$resultat->bindValue(':discord_pdn',$Discord);
$resultat->bindValue(':twitch_pdn',$Twitch);
$resultat->bindValue(':tiktok_pdn',$Tiktok);
$resultat->bindValue(':mdp_pdn',$Mdp);
$resultat->bindValue(':image_pdn',$Image);
$resultat->bindValue(':presentation_pdn',$Presentation);
$resultat->bindValue(':actif_pdn',$Actif);
$resultat->bindValue(':structure_pdn',$Structure);
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
