<?php

include "../php/base.php";

$prenom_m  = mysqli_real_escape_string($conn, $_GET['prenom_m']);
$nom_m  = mysqli_real_escape_string($conn, $_GET['nom_m']);
$fonction_m  = mysqli_real_escape_string($conn, $_GET['fonction_m']);
$structure_m  = mysqli_real_escape_string($conn, $_GET['structure_m']);
$ville_m  = mysqli_real_escape_string($conn, $_GET['ville_m']);
$mail_m  = mysqli_real_escape_string($conn, $_GET['mail_m']);
$tel_m  = mysqli_real_escape_string($conn, $_GET['tel_m']);
$whatsapp_m  = mysqli_real_escape_string($conn, $_GET['whatsapp_m']);
$facebook_m  = mysqli_real_escape_string($conn, $_GET['facebook_m']);
$instagram_m  = mysqli_real_escape_string($conn, $_GET['instagram_m']);
$snapchat_m  = mysqli_real_escape_string($conn, $_GET['snapchat_m']);
$youtube_m  = mysqli_real_escape_string($conn, $_GET['youtube_m']);
$twitter_m  = mysqli_real_escape_string($conn, $_GET['twitter_m']);
$discord_m  = mysqli_real_escape_string($conn, $_GET['discord_m']);
$twitch_m  = mysqli_real_escape_string($conn, $_GET['twitch_m']);
$tiktok_m  = mysqli_real_escape_string($conn, $_GET['tiktok_m']);
$photo_pdn_m  = mysqli_real_escape_string($conn, $_GET['photo_pdn_m']);
$pres_pdn_m  = mysqli_real_escape_string($conn, $_GET['pres_pdn_m']);
$image_str_m  = mysqli_real_escape_string($conn, $_GET['image_str_m']);
$pres_str_m  = mysqli_real_escape_string($conn, $_GET['pres_str_m']);

$nom_r  = mysqli_real_escape_string($conn, $_GET['nom_r']);
$lien_r  = mysqli_real_escape_string($conn, $_GET['lien_r']);
$img_r  = mysqli_real_escape_string($conn, $_GET['img_r']);
$age_r  = mysqli_real_escape_string($conn, $_GET['age_r']);
$editeur_r  = mysqli_real_escape_string($conn, $_GET['editeur_r']);
$description_r  = mysqli_real_escape_string($conn, $_GET['description_r']);

$headers ='From: "Promeneurs du Net 93"<no-reply@pdn.ligue93.org>'."\n";
$headers .='Content-Type: text/html; charset="utf-8"'."\n";
$headers .='Content-Transfer-Encoding: 8bit';

if($prenom_m) {
    $message = '<html><body> propose des modifications de ses coordonnées :</br></br>';
    $message .= '<b>Prénom</b> : '.$prenom_m.'</br>';
    $message .= '<b>Nom</b> : '.$nom_m.'</br>';
    $message .= '<b>Fonction</b> : '.$fonction_m.'</br>';
    $message .= '<b>Structure</b> : '.$structure_m.'</br>';
    $message .= '<b>Ville</b> : '.$ville_m.'</br>';
    $message .= '<b>Mail</b> : '.$mail_m.'</br>';
    $message .= '<b>Téléphone</b> : '.$tel_m.'</br>';
    $message .= '<b>WhatsApp</b> : '.$whatsapp_m.'</br>';
    $message .= '<b>Facebook</b> : '.$facebook_m.'</br>';
    $message .= '<b>Instagram</b> : '.$instagram_m.'</br>';
    $message .= '<b>Snapchat</b> : '.$snapchat_m.'</br>';
    $message .= '<b>Youtube</b> : '.$youtube_m.'</br>';
    $message .= '<b>Twitter</b> : '.$twitter_m.'</br>';
    $message .= '<b>Discord</b> : '.$discord_m.'</br>';
    $message .= '<b>Twitch</b> : '.$twitch_m.'</br>';
    $message .= '<b>Tiktok</b> : '.$tiktok_m.'</br>';
    $message .= '<b>Photo PDN</b> : '.$photo_pdn_m.'</br>';
    $message .= '<b>Présentation PDN</b> : '.$pres_pdn_m.'</br>';
    $message .= '<b>Image Structure</b> : '.$image_str_m.'</br>';
    $message .= '<b>Présentation Structure</b> : '.$pres_str_m.'</br>'.'</br>';
    $message .= '<a href="http://pdn.ligue93.org/admin">Se connecter à l\'interface d\'administration</a></body></html>';
    mail('fol93.coordopdn93@gmail.com', '[pdn.ligue93.org] Modification de coordonnées', $prenom_m.' '.$nom_m.' '.$message, $headers);

} elseif ($nom_r) {
    session_start();
    $message = '<html><body> propose une nouvelle ressource :</br></br>';
    $message .= '<b>Nom</b> : '.$nom_r.'</br>';
    $message .= '<b>Lien</b> : '.$lien_r.'</br>';
    $message .= '<b>Image</b> : '.$img_r.'</br>';
    $message .= '<b>Age</b> : '.$age_r.'</br>';
    $message .= '<b>Éditeur</b> : '.$editeur_r.'</br>';
    $message .= '<b>Déscription</b> : '.$description_r.'</br>'.'</br>';
    $message .= '<a href="http://pdn.ligue93.org/admin">Se connecter à l\'interface d\'administration</a></body></html>';
    mail('fol93.coordopdn93@gmail.com', '[pdn.ligue93.org] Proposition de ressource', $_SESSION["prenom"].' '.$_SESSION["nom"].' '.$message, $headers);
}
