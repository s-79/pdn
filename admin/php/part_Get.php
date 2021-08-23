<?php

include "../../php/base.php";

$return_arr = array();

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_part_tab_act = mysqli_real_escape_string($conn, $_GET['id_part_tab_act']);
$nom_part_exist = mysqli_real_escape_string($conn, $_GET['nom_part_exist']);
$id_part_exist = mysqli_real_escape_string($conn, $_GET['id_part_exist']);

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

// ----------------------------------------------------------------------------- Est-ce que le nom du / de la partenaire existe déjà ?
} elseif($nom_part_exist) {
    $query = "SELECT partExistNom('$nom_part_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }
// ----------------------------------------------------------------------------- Le / la partenaire a-t-elle bien été supprimée de la BDD ?
} elseif($id_part_exist) {
    $query = "SELECT partExist('$id_part_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }

}

if($return_arr){echo json_encode($return_arr);}
