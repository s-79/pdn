<?php

include "../../php/base.php";

$return_arr = array();

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_act_coordo = mysqli_real_escape_string($conn, $_GET['id_act_coordo']);
$id_act_ress = mysqli_real_escape_string($conn, $_GET['id_act_ress']);
$id_act_pdn = mysqli_real_escape_string($conn, $_GET['id_act_pdn']);
$id_act_part = mysqli_real_escape_string($conn, $_GET['id_act_part']);

if($id) {
    $query = "SELECT * FROM `v_act` WHERE `id` = '$id';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $dat = $row['dat'];
        $type = $row['type'];
        $organise = $row['organise'];
        $intitule = $row['intitule'];
        $lieu = $row['lieu'];
        $ville = $row['ville'];
        $pj = $row['pj'];
        $support = $row['support'];
        $facebook = $row['facebook'];
        $whatsapp = $row['whatsapp'];
        $twitter = $row['twitter'];
        $site = $row['site'];
        $nb_outils = $row['nb_outils'];
        $duree = $row['duree'];
        $nb_pdn = $row['nb_pdn'];
        $nb_part = $row['nb_part'];
        $nb_pers = $row['nb_pers'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "id" => $id,
            "dat" => $dat,
            "type" => $type,
            "organise" => $organise,
            "intitule" => $intitule,
            "lieu" => $lieu,
            "ville" => $ville,
            "pj" => $pj,
            "support" => $support,
            "facebook" => $facebook,
            "whatsapp" => $whatsapp,
            "twitter" => $twitter,
            "site" => $site,
            "nb_outils" => $nb_outils,
            "duree" => $duree,
            "nb_pdn" => $nb_pdn,
            "nb_part" => $nb_part,
            "nb_pers" => $nb_pers,
            "commentaires" => $commentaire
        );
    }
// ----------------------------------------------------------------------------- Récupération de la liste des coordo qui ont participé à l'action en fonction de l'id de l'action
} elseif($id_act_coordo) {
    $query = "SELECT `id` FROM `v_act_coordo` WHERE `act_id` = '$id_act_coordo';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $return_arr[] = array("id" => $id);
    }

// ----------------------------------------------------------------------------- Récupération de la liste des ressources qui ont été partagée via l'action en fonction de l'id de l'action
} elseif($id_act_ress) {
    $query = "SELECT `id` FROM `v_act_ress` WHERE `act_id` = '$id_act_ress';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $return_arr[] = array("id" => $id);
    }

// ----------------------------------------------------------------------------- Récupération de la liste des pdn qui ont particié à l'action en fonction de l'id de l'action
} elseif($id_act_pdn) {
    $query = "SELECT `id` FROM `v_act_pdn` WHERE `act_id` = '$id_act_pdn';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $return_arr[] = array("id" => $id);
    }

// ----------------------------------------------------------------------------- Récupération de la liste des partenaires qui ont particié à l'action en fonction de l'id de l'action
} elseif($id_act_part) {
    $query = "SELECT `id` FROM `v_act_part` WHERE `act_id` = '$id_act_part';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $return_arr[] = array("id" => $id);
    }
}

if($return_arr){echo json_encode($return_arr);}
