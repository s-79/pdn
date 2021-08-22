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
$id_Ress_Del_Them = mysqli_real_escape_string($conn, $_GET['id_Ress_Del_Them']);

$nom_them_create = mysqli_real_escape_string($conn, $_GET['nom_them_create']);
$id_cat_them = mysqli_real_escape_string($conn, $_GET['id_cat_them']);
$id_them_up = mysqli_real_escape_string($conn, $_GET['id_them_up']);
$nom_them = mysqli_real_escape_string($conn, $_GET['nom_them']);
$id_them_del = mysqli_real_escape_string($conn, $_GET['id_them_del']);

$nom_cat_create = mysqli_real_escape_string($conn, $_GET['nom_cat_create']);
$icone = mysqli_real_escape_string($conn, $_GET['icone']);
$id_cat_up = mysqli_real_escape_string($conn, $_GET['id_cat_up']);
$nom_cat = mysqli_real_escape_string($conn, $_GET['nom_cat']);
$id_cat_del = mysqli_real_escape_string($conn, $_GET['id_cat_del']);


if($id) { $query = "CALL ress_Update ('$id', '$nom', '$lien', '$image', '$age', '$editeur', '$description', '$valide')";}
elseif($id_del) { $query = "CALL ress_Delete ('$id_del')"; }
elseif($id_them) { $query = "CALL ress_asso_Them ('$id_ress', '$id_them')"; }
elseif($id_Ress_Del_Them) { $query = "CALL ress_Del_Them ('$id_Ress_Del_Them')"; }
elseif($nom_them_create) { $query = "CALL them_Create ('$nom_them_create', '$id_cat_them')"; }
elseif($id_them_up) { $query = "CALL them_Update ('$id_them_up', '$nom_them', '$id_cat_them')"; }
elseif($id_them_del) { $query = "CALL them_Delete ('$id_them_del')"; }
elseif($nom_cat_create) { $query = "CALL cat_Create ('$nom_cat_create', '$icone')"; }
elseif($id_cat_up) { $query = "CALL cat_Update ('$id_cat_up', '$nom_cat', '$icone')"; }
elseif($id_cat_del) { $query = "CALL cat_Delete ('$id_cat_del')"; }
else { $query = "CALL ress_Create ('$uuid', '$nom', '$lien', '$image', '$age', '$editeur', '$description', '$valide')"; }

$result = $conn->prepare($query);

$result->execute();

echo "OK";
