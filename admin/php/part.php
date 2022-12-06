<?php

include "../../php/base.php";

$nom = mysqli_real_escape_string($conn, $_GET['nom']);
$adresse = mysqli_real_escape_string($conn, $_GET['adresse']);
$cp = mysqli_real_escape_string($conn, $_GET['cp']);
$ville = mysqli_real_escape_string($conn, $_GET['ville']);
$site = mysqli_real_escape_string($conn, $_GET['site']);
$prenom_ref = mysqli_real_escape_string($conn, $_GET['prenom_ref']);
$nom_ref = mysqli_real_escape_string($conn, $_GET['nom_ref']);
$fonction = mysqli_real_escape_string($conn, $_GET['fonction']);
$tel = mysqli_real_escape_string($conn, $_GET['tel']);
$mail = mysqli_real_escape_string($conn, $_GET['mail']);
$commentaires = mysqli_real_escape_string($conn, $_GET['commentaires']);

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_del = mysqli_real_escape_string($conn, $_GET['id_del']);

if($id) { $query = "CALL part_Update ('$id', '$nom', '$adresse', '$cp', '$ville', '$site', '$prenom_ref', '$nom_ref', '$fonction', '$tel', '$mail', '$commentaires')"; }
elseif($id_del) { $query = "CALL part_Delete ('$id_del')"; }
else { $query = "CALL part_Create ('$nom', '$adresse', '$cp', '$ville', '$site', '$prenom_ref', '$nom_ref', '$fonction', '$tel', '$mail', '$commentaires')"; }

$result = $conn->prepare($query);

$result->execute();

echo "OK";
