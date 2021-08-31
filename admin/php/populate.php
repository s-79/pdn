<?php

include "../../php/base.php";

$return_arr = array();

$v_pdn = mysqli_real_escape_string($conn, $_GET['v_pdn']);
$v_str = mysqli_real_escape_string($conn, $_GET['v_str']);
$v_ress = mysqli_real_escape_string($conn, $_GET['v_ress']);
$v_part = mysqli_real_escape_string($conn, $_GET['v_part']);
$v_coordo = mysqli_real_escape_string($conn, $_GET['v_coordo']);
$v_act = mysqli_real_escape_string($conn, $_GET['v_act']);
$v_ville = mysqli_real_escape_string($conn, $_GET['v_ville']);
$v_ville_qpv = mysqli_real_escape_string($conn, $_GET['v_ville_qpv']);
$v_them = mysqli_real_escape_string($conn, $_GET['v_them']);
$v_cat = mysqli_real_escape_string($conn, $_GET['v_cat']);
$search_act = mysqli_real_escape_string($conn, $_GET['search_act']);
$search_pdn = mysqli_real_escape_string($conn, $_GET['search_pdn']);
$search_str = mysqli_real_escape_string($conn, $_GET['search_str']);
$search_ress = mysqli_real_escape_string($conn, $_GET['search_ress']);
$search_them = mysqli_real_escape_string($conn, $_GET['search_them']);
$search_cat = mysqli_real_escape_string($conn, $_GET['search_cat']);
$search_part = mysqli_real_escape_string($conn, $_GET['search_part']);

if($v_pdn) {$query = "SELECT `id`, `nom` FROM `v_str_pdn` ORDER BY `nom`;";}
elseif($v_str) {$query = "SELECT `id`, `nom` FROM `v_str` ORDER BY `nom`;";}
elseif($v_ress) {$query = "SELECT `id`, `nom` FROM `v_ress` ORDER BY `nom`;";}
elseif($v_part) {$query = "SELECT `id`, `nom` FROM `v_part` ORDER BY `nom`;";}
elseif($v_coordo) {$query = "SELECT `id`, `nom` FROM `v_coordo` ORDER BY `id`;";}
elseif($v_act) {$query = "SELECT `id`, `nom` FROM `v_act` ORDER BY `nom` DESC;";}
elseif($v_ville) {$query = "SELECT `id`, `nom` FROM `v_ville` ORDER BY `nom`;";}
elseif($v_ville_qpv) {$query = "SELECT `id`, `nom` FROM `v_qpv` WHERE `id_ville` = '$v_ville_qpv' ORDER BY `id`;";}
elseif($v_them) {$query = "SELECT `id`, `nom` FROM `v_them` ORDER BY `nom`;";}
elseif($v_cat) {$query = "SELECT `id`, `nom` FROM `v_cat` ORDER BY `nom`;";}
elseif($search_act) {$query = "SELECT `id`, `nom` FROM `v_act` WHERE `nom` LIKE CONCAT('%','$search_act','%') ORDER BY `nom`;";}
elseif($search_pdn) {$query = "SELECT `id`, `nom` FROM `v_str_pdn` WHERE `nom` LIKE CONCAT('%','$search_pdn','%') ORDER BY `nom`;";}
elseif($search_str) {$query = "SELECT `id`, `nom` FROM `v_str` WHERE `nom` LIKE CONCAT('%','$search_str','%') ORDER BY `nom`;";}
elseif($search_ress) {$query = "SELECT `id`, `nom` FROM `v_ress` WHERE `nom` LIKE CONCAT('%','$search_ress','%') ORDER BY `nom`;";}
elseif($search_them) {$query = "SELECT `id`, `nom` FROM `v_them` WHERE `nom` LIKE CONCAT('%','$search_them','%') ORDER BY `nom`;";}
elseif($search_cat) {$query = "SELECT `id`, `nom` FROM `v_cat` WHERE `nom` LIKE CONCAT('%','$search_cat','%') ORDER BY `nom`;";}
elseif($search_part) {$query = "SELECT `id`, `nom` FROM `v_part` WHERE `nom` LIKE CONCAT('%','$search_part','%') ORDER BY `nom`;";}

$result = mysqli_query($conn,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $nom = $row['nom'];

    $return_arr[] = array(
        "id" => $id,
        "nom" => $nom,);
}
if($return_arr){echo json_encode($return_arr);}
