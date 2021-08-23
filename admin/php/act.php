<?php

include "../../php/base.php";

$dat = mysqli_real_escape_string($conn, $_GET['dat']);
$type = mysqli_real_escape_string($conn, $_GET['type']);
$organise = mysqli_real_escape_string($conn, $_GET['organise']);
$intitule = mysqli_real_escape_string($conn, $_GET['intitule']);
$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);
$lieu = mysqli_real_escape_string($conn, $_GET['lieu']);
$ville = mysqli_real_escape_string($conn, $_GET['ville']);
$pj = mysqli_real_escape_string($conn, $_GET['pj']);
$support = mysqli_real_escape_string($conn, $_GET['support']);
$facebook = mysqli_real_escape_string($conn, $_GET['facebook']);
$whatsapp = mysqli_real_escape_string($conn, $_GET['whatsapp']);
$twitter = mysqli_real_escape_string($conn, $_GET['twitter']);
$site = mysqli_real_escape_string($conn, $_GET['site']);
$nb_ress = mysqli_real_escape_string($conn, $_GET['nb_ress']);
$duree = mysqli_real_escape_string($conn, $_GET['duree']);
$nb_pdn = mysqli_real_escape_string($conn, $_GET['nb_pdn']);
$nb_part = mysqli_real_escape_string($conn, $_GET['nb_part']);
$nb_str = mysqli_real_escape_string($conn, $_GET['nb_str']);
$nb_pers = mysqli_real_escape_string($conn, $_GET['nb_pers']);
$commentaires = mysqli_real_escape_string($conn, $_GET['commentaires']);

// $id = 42;
// $dat = "date2";
// $type = "type";
// $organise = "organise";
// $intitule = "intitule";
// $uuid = "uuid";
// $lieu = "lieu";
// $ville = "ville";
// $pj = "pj";
// $support = "support";
// $facebook = 1;
// $whatsapp = 1;
// $twitter = 1;
// $site = 1;
// $nb_ress = 2;
// $duree = "durée";
// $nb_pdn = 3;
// $nb_part = 4;
// $nb_str = 2;
// $nb_pers = 5;
// $commentaires = "commentaires";

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_del = mysqli_real_escape_string($conn, $_GET['id_del']);

$id_act = mysqli_real_escape_string($conn, $_GET['id_act']);
$id_coordo = mysqli_real_escape_string($conn, $_GET['id_coordo']);
$id_ress = mysqli_real_escape_string($conn, $_GET['id_ress']);
$id_pdn = mysqli_real_escape_string($conn, $_GET['id_pdn']);
$id_part = mysqli_real_escape_string($conn, $_GET['id_part']);
$id_str = mysqli_real_escape_string($conn, $_GET['id_str']);

$id_act_del_asso = mysqli_real_escape_string($conn, $_GET['id_act_del_asso']);

if($id) { $query = "CALL act_Update ('$id', '$dat', '$type', '$organise', '$intitule', '$uuid', '$lieu', '$ville', '$pj', '$support', '$facebook', '$whatsapp', '$twitter', '$site', '$nb_ress', '$duree', '$nb_pdn', '$nb_part', '$nb_str', '$nb_pers', '$commentaires')"; }
elseif($id_del) { $query = "CALL act_Delete('$id_del')"; }

elseif($id_coordo) { $query = "CALL act_Create_Coordo ('$id_act', '$id_coordo')"; }
elseif($id_ress) { $query = "CALL act_Create_Ress ('$id_act', '$id_ress')"; }
elseif($id_pdn) { $query = "CALL act_Create_Pdn ('$id_act', '$id_pdn')"; }
elseif($id_part) { $query = "CALL act_Create_Part ('$id_act', '$id_part')"; }
elseif($id_str) { $query = "CALL act_Create_Str ('$id_act', '$id_str')"; }

elseif($id_act_del_asso) { $query = "CALL act_Delete_Asso ('$id_act_del_asso')"; }

else { $query = "CALL act_Create ('$dat', '$type', '$organise', '$intitule', '$uuid', '$lieu', '$ville', '$pj', '$support', '$facebook', '$whatsapp', '$twitter', '$site', '$nb_ress', '$duree', '$nb_pdn', '$nb_part', '$nb_str', '$nb_pers', '$commentaires')"; }

$result = $conn->prepare($query);

$result->execute();

echo "OK";
