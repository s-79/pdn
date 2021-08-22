<?php

include "../../php/base.php";

$return_arr = array();

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_part_tab_act = mysqli_real_escape_string($conn, $_GET['id_part_tab_act']);


if($id) {
    $query = "SELECT * FROM `v_part` WHERE `id` = '$id';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $nom = $row['nom'];
        $adresse = $row['adresse'];
        $cp = $row['cp'];
        $ville = $row['ville'];
        $site = $row['site'];
        $prenom_ref = $row['prenom_ref'];
        $nom_ref = $row['nom_ref'];
        $fonction = $row['fonction'];
        $tel = $row['tel'];
        $mail = $row['mail'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "nom" => $nom,
            "adresse" => $adresse,
            "cp" => $cp,
            "ville" => $ville,
            "site" => $site,
            "prenom_ref" => $prenom_ref,
            "nom_ref" => $nom_ref,
            "fonction" => $fonction,
            "tel" => $tel,
            "mail" => $mail,
            "commentaires" => $commentaires
        );
    }
// ----------------------------------------------------------------------------- Tableau : Récupération des données des actions liées au partenaire
} elseif($id_part_tab_act) {
    $query = "SELECT * FROM `v_part_act` WHERE `part_id` = '$id_part_tab_act';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $dat = $row['dat'];
        $type = $row['type'];
        $intitule = $row['intitule'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "id" => $id,
            "dat" => $dat,
            "type" => $type,
            "intitule" => $intitule,
            "commentaires" => $commentaires
        );
    }
}

if($return_arr){echo json_encode($return_arr);}
