<?php

include("base.php");
$connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

$Id=checkInput($_REQUEST["id"]);
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
$Mdp=checkInput($_REQUEST["mdp"]);
// Hachage du mot de passe
$Mdp=password_hash($_REQUEST["mdp"], PASSWORD_DEFAULT);
$Image=checkInput($_REQUEST["image"]);
$Pres=checkInput($_REQUEST["presentation"]);
$Presentation=nl2br($Pres);
$Actif=checkInput($_REQUEST["actif"]);
$Structure=checkInput($_REQUEST["structure"]);

// OK avec ça :
// $Id="5";
// $Nom="blablabla";
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
// $Structure="1";

// Si pb : Tester en dur avec les paramètres puis aller sur la page php via localhost au autre

// Ces lignes envoies vers mysql - on créé des paramètre inventées
// idcli / idanim : ceux qui apparaissent dans la procédure stockée et dans les paramètres > nom sur sql
$req="call pdnModif(:nom_pdn,:prenom_pdn,:profession_pdn,:mail_nom_pdn,:mail_domaine_pdn,:portablePro,:facebook_pdn,:snapchat_pdn,:instagram_pdn,:whatsApp_pdn,:youtube_pdn,:twitter_pdn,:discord_pdn,:twitch_pdn,:tiktok_pdn,:mdp_pdn,:image_pdn,:presentation_pdn,:actif_pdn,:id_structure,:id)";
$resultat=$connex->prepare($req);

// Les paramètres qui passent par bindValue sont cryptés puis comparés dans mysql
// On passe par une procédure stockée, ce qui sécurise la transaction puisque le poste client n'accede pas à la base de données, c'"est le serveur qui y accède"
$resultat->bindValue(':id',$Id);
$resultat->bindValue(':nom_pdn',$Nom);
$resultat->bindValue(':prenom_pdn',$Prenom);
$resultat->bindValue(':profession_pdn',$Profession);
$resultat->bindValue(':mail_nom_pdn',$IdMail);
$resultat->bindValue(':mail_domaine_pdn',$DomaineMail);
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
$resultat->bindValue(':id_structure',$Structure);
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
