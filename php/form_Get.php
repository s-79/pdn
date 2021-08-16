<?php

include "../php/base.php";

$return_arr = array();

$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);
$id_act = mysqli_real_escape_string($conn, $_GET['id_act']);
$mdp_act = mysqli_real_escape_string($conn, $_GET['mdp_act']);

if($uuid) {
    $query = "CALL form_Get_Id ('$uuid')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];

        $return_arr[] = array(
            "id" => $id
        );
    }
} elseif($id_act) {
    $query = "CALL pdn_log('$id_act')";
    $result = mysqli_query($conn, $query) or die(mysql_error());
    // ------------------------------------------------------------------------- Si le résultat de la requète contient 1 ligne
    if (mysqli_num_rows($result) == 1) {
        $user = mysqli_fetch_assoc($result);
        // -------------------------------------------------------------------- Si le mot de passe est le même que le mot de passe hacher
        if (password_verify($mdp_act, $user['mdp'])) {
            $resp = $user['id'];
        } else {
            $resp = "Nok";
        }
        $return_arr[] = array("resp" => $resp);
   }
}

if($return_arr){echo json_encode($return_arr);}
