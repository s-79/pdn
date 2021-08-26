<?php

include "../../php/base.php";

$aap = mysqli_real_escape_string($conn, $_GET['aap']);
$nom = mysqli_real_escape_string($conn, $_GET['nom']);
$type = mysqli_real_escape_string($conn, $_GET['type']);
$adresse = mysqli_real_escape_string($conn, $_GET['adresse']);
$ville_id = mysqli_real_escape_string($conn, $_GET['ville_id']);
$lat = mysqli_real_escape_string($conn, $_GET['lat']);
$lon = mysqli_real_escape_string($conn, $_GET['lon']);
$qpv = mysqli_real_escape_string($conn, $_GET['qpv']);
$prij = mysqli_real_escape_string($conn, $_GET['prij']);
$tel = mysqli_real_escape_string($conn, $_GET['tel']);
$site = mysqli_real_escape_string($conn, $_GET['site']);
$postit = mysqli_real_escape_string($conn, $_GET['postit']);
$image = mysqli_real_escape_string($conn, $_GET['image']);
$presentation = mysqli_real_escape_string($conn, $_GET['presentation']);
$resp_prenom = mysqli_real_escape_string($conn, $_GET['resp_prenom']);
$resp_nom = mysqli_real_escape_string($conn, $_GET['resp_nom']);
$resp_tel = mysqli_real_escape_string($conn, $_GET['resp_tel']);
$resp_mail_nom = mysqli_real_escape_string($conn, $_GET['resp_mail_nom']);
$resp_mail_domaine = mysqli_real_escape_string($conn, $_GET['resp_mail_domaine']);
$nb_pdn_lab = mysqli_real_escape_string($conn, $_GET['nb_pdn_lab']);

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_del = mysqli_real_escape_string($conn, $_GET['id_del']);


if($id) { $query = "CALL str_Update ('$id', '$aap', '$nom', '$type', '$adresse', '$ville_id', '$lat', '$lon', '$qpv', '$prij', '$tel', '$site', '$postit', '$image', '$presentation', '$resp_prenom', '$resp_nom', '$resp_tel', '$resp_mail_nom', '$resp_mail_domaine', '$nb_pdn_lab')";}
elseif($id_del) { $query = "CALL str_Delete ('$id_del')"; }
else { $query = "CALL str_Create ('$aap', '$nom', '$type', '$adresse', '$ville_id', '$lat', '$lon', '$qpv', '$prij', '$tel', '$site', '$postit', '$image', '$presentation', '$resp_prenom', '$resp_nom', '$resp_tel', '$resp_mail_nom', '$resp_mail_domaine', '$nb_pdn_lab')"; }

$result = $conn->prepare($query);

$result->execute();

echo "OK";
