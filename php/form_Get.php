<?php

include "../php/base.php";

$return_arr = array();

$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);
$id_act = mysqli_real_escape_string($conn, $_GET['id_act']);
$mdp_act = mysqli_real_escape_string($conn, $_GET['mdp_act']);
$id_pdn = mysqli_real_escape_string($conn, $_GET['id_pdn']);
$id_form = mysqli_real_escape_string($conn, $_GET['id_form']);
$id_form_rs = mysqli_real_escape_string($conn, $_GET['id_form_rs']);

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
} elseif($id_pdn) {
    $query = "SELECT MAX(`id`) AS id FROM `form` WHERE `pdn_id` = '$id_pdn'";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];

        $return_arr[] = array(
            "id" => $id
        );
    }
} elseif($id_form) {
    $query = "SELECT * FROM `form` WHERE `id` = '$id_form'";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $nb_h = $row['nb_h'];
        $smart = $row['smart'];
        $ordi = $row['ordi'];
        $tablette = $row['tablette'];
        $console = $row['console'];
        $lien = $row['lien'];
        $loisirs = $row['loisirs'];
        $socio_pro = $row['socio_pro'];
        $parentalite = $row['parentalite'];
        $sante = $row['sante'];
        $addiction = $row['addiction'];
        $sexualite = $row['sexualite'];
        $violence = $row['violence'];
        $logement = $row['logement'];
        $autre_them = $row['autre_them'];
        $formation = $row['formation'];
        $commentaires = $row['commentaires'];
        $pdn_id = $row['pdn_id'];

        $return_arr[] = array(
            "nb_h" => $nb_h,
            "smart" => $smart,
            "ordi" => $ordi,
            "tablette" => $tablette,
            "console" => $console,
            "lien" => $lien,
            "loisirs" => $loisirs,
            "socio_pro" => $socio_pro,
            "parentalite" => $parentalite,
            "sante" => $sante,
            "addiction" => $addiction,
            "sexualite" => $sexualite,
            "violence" => $violence,
            "logement" => $logement,
            "autre_them" => $autre_them,
            "formation" => $formation,
            "commentaires" => $commentaires,
            "pdn_id" => $pdn_id
        );
    }
} elseif($id_form_rs) {
    $query = "SELECT * FROM `form_rs` WHERE `form_id` = '$id_form_rs'";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $nom = $row['nom'];
        $maitrise = $row['maitrise'];
        $age = $row['age'];
        $nb_follow = $row['nb_follow'];
        $nb_mess = $row['nb_mess'];
        $nb_acc = $row['nb_acc'];

        $return_arr[] = array(
            "nom" => $nom,
            "maitrise" => $maitrise,
            "age" => $age,
            "nb_follow" => $nb_follow,
            "nb_mess" => $nb_mess,
            "nb_acc" => $nb_acc
        );
    }
}

if($return_arr){echo json_encode($return_arr);}
