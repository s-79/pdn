<?php

include "../../php/base.php";

$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);
$nom = mysqli_real_escape_string($conn, $_GET['nom']);
$lien = mysqli_real_escape_string($conn, $_GET['lien']);
$image = mysqli_real_escape_string($conn, $_GET['image']);
$age = mysqli_real_escape_string($conn, $_GET['age']);
$editeur = mysqli_real_escape_string($conn, $_GET['editeur']);
$description = mysqli_real_escape_string($conn, $_GET['description']);
$valide = mysqli_real_escape_string($conn, $_GET['valide']);

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_del = mysqli_real_escape_string($conn, $_GET['id_del']);

$id_ress = mysqli_real_escape_string($conn, $_GET['id_ress']);
$id_them = mysqli_real_escape_string($conn, $_GET['id_them']);

if($id) { $query = "CALL ress_Update ('$id', '$aap', '$nom', '$type', '$adresse', '$ville_id', '$lat', '$lon', '$qpv', '$prij', '$tel', '$site', '$image', '$presentation', '$resp_prenom', '$resp_nom', '$resp_tel', '$resp_mail_nom', '$resp_mail_domaine', '$nb_pdn_lab')";}
elseif($id_del) { $query = "CALL ress_Delete ('$id_del')"; }
elseif($id_them) { $query = "CALL ress_asso_Them ('$id_ress', '$id_them')"; }
else { $query = "CALL ress_Create ('$uuid', '$nom', '$lien', '$image', '$age', '$editeur', '$description', '$valide')"; }

$result = $conn->prepare($query);

$result->execute();

echo "OK";
