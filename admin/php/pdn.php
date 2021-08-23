<?php

include "../../php/base.php";

$prenom = mysqli_real_escape_string($conn, $_GET['prenom']);
$nom = mysqli_real_escape_string($conn, $_GET['nom']);
$fonction = mysqli_real_escape_string($conn, $_GET['fonction']);
$mail_nom = mysqli_real_escape_string($conn, $_GET['mail_nom']);
$mail_domaine = mysqli_real_escape_string($conn, $_GET['mail_domaine']);
$tel = mysqli_real_escape_string($conn, $_GET['tel']);
$facebook = mysqli_real_escape_string($conn, $_GET['facebook']);
$snapchat = mysqli_real_escape_string($conn, $_GET['snapchat']);
$instagram = mysqli_real_escape_string($conn, $_GET['instagram']);
$whatsapp = mysqli_real_escape_string($conn, $_GET['whatsapp']);
$youtube = mysqli_real_escape_string($conn, $_GET['youtube']);
$twitter = mysqli_real_escape_string($conn, $_GET['twitter']);
$discord = mysqli_real_escape_string($conn, $_GET['discord']);
$twitch = mysqli_real_escape_string($conn, $_GET['twitch']);
$tiktok = mysqli_real_escape_string($conn, $_GET['tiktok']);
$mdp = mysqli_real_escape_string($conn, $_GET['mdp']);
if($mdp) { $mdp = password_hash($mdp, PASSWORD_DEFAULT); }
$image = mysqli_real_escape_string($conn, $_GET['image']);
$presentation = mysqli_real_escape_string($conn, $_GET['presentation']);
$charte = mysqli_real_escape_string($conn, $_GET['charte']);
$fiche_rens = mysqli_real_escape_string($conn, $_GET['fiche_rens']);
$actif = mysqli_real_escape_string($conn, $_GET['actif']);
$date_entree = mysqli_real_escape_string($conn, $_GET['date_entree']);
$date_sortie = mysqli_real_escape_string($conn, $_GET['date_sortie']);
$structure = mysqli_real_escape_string($conn, $_GET['structure']);

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_del = mysqli_real_escape_string($conn, $_GET['id_del']);

// $id = 70;
// $prenom = 'prenom';
// $nom= 'nom';
// $fonction ='fonction';
// $mail_nom = 'mail_nom';
// $mail_domaine = 'mail_domaine';
// $tel = 'tel';
// $facebook = 'facebook';
// $snapchat = 'snapchat';
// $instagram = 'instagram';
// $whatsapp = 1;
// $youtube = 'youtube';
// $twitter = 'twitter';
// $discord = 'discord';
// $twitch = 'twitch';
// $tiktok = 'tiktok';
// $mdp = 'mdp';
// $image = 'image';
// $presentation = 'presentation';
// $charte = 1;
// $fiche_rens = 1;
// $actif = 1;
// $date_entree = 'date_e';
// $date_sortie = 'date_s';
// $structure = 1;


if($id) {
    if($mdp) { $query = "CALL pdn_mdp_Update ('$id', '$prenom', '$nom', '$fonction', '$mail_nom', '$mail_domaine', '$tel', '$facebook', '$snapchat', '$instagram', '$whatsapp', '$youtube', '$twitter', '$discord', '$twitch', '$tiktok', '$mdp', '$image', '$presentation', '$charte', '$fiche_rens', '$actif', '$date_entree', '$date_sortie', '$structure')";}
    else {$query = "CALL pdn_Update ('$id', '$prenom', '$nom', '$fonction', '$mail_nom', '$mail_domaine', '$tel', '$facebook', '$snapchat', '$instagram', '$whatsapp', '$youtube', '$twitter', '$discord', '$twitch', '$tiktok', '$image', '$presentation', '$charte', '$fiche_rens', '$actif', '$date_entree', '$date_sortie', '$structure')";}
}
elseif($id_del) { $query = "CALL pdn_Delete ('$id_del')"; }
else { $query = "CALL pdn_Create ('$prenom', '$nom', '$fonction', '$mail_nom', '$mail_domaine', '$tel', '$facebook', '$snapchat', '$instagram', '$whatsapp', '$youtube', '$twitter', '$discord', '$twitch', '$tiktok', '$mdp', '$image', '$presentation', '$charte', '$fiche_rens', '$actif', '$date_entree', '$date_sortie', '$structure')"; }

$result = $conn->prepare($query);

$result->execute();

echo "OK";
