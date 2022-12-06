<?php

include "../../php/base.php";

$return_arr = array();

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_str_tab_act = mysqli_real_escape_string($conn, $_GET['id_str_tab_act']);
$id_str_tab_pdn = mysqli_real_escape_string($conn, $_GET['id_str_tab_pdn']);
$id_str_exist = mysqli_real_escape_string($conn, $_GET['id_str_exist']);
$id_qpv = mysqli_real_escape_string($conn, $_GET['id_qpv']);

if($id) {
    $query = "SELECT * FROM `v_str` WHERE `id` = '$id';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $aap = $row['aap'];
        $nom = $row['str_nom'];
        $type = $row['type'];
        $adresse = $row['adresse'];
        $ville_id = $row['ville_id'];
        $lat = $row['lat'];
        $lon = $row['lon'];
        $qpv = $row['qpv'];
        $prij = $row['prij'];
        $tel = $row['tel'];
        $site = $row['site'];
        $postit = $row['postit'];
        $image = $row['image'];
        $presentation = $row['presentation'];
        $resp_prenom = $row['resp_prenom'];
        $resp_nom = $row['resp_nom'];
        $resp_tel = $row['resp_tel'];
        $resp_mail_nom = $row['resp_mail_nom'];
        $resp_mail_domaine = $row['resp_mail_domaine'];
        $autre_contact = $row['autre_contact'];
        $nb_pdn_act = $row['nb_pdn_act'];
        $nb_pdn_lab = $row['nb_pdn_lab'];
        $statut = $row['statut'];

        $return_arr[] = array(
            "aap" => $aap,
            "nom" => $nom,
            "type" => $type,
            "adresse" => $adresse,
            "ville_id" => $ville_id,
            "lat" => $lat,
            "lon" => $lon,
            "qpv" => $qpv,
            "prij" => $prij,
            "tel" => $tel,
            "site" => $site,
            "postit" => $postit,
            "image" => $image,
            "presentation" => $presentation,
            "resp_prenom" => $resp_prenom,
            "resp_nom" => $resp_nom,
            "resp_tel" => $resp_tel,
            "resp_mail_nom" => $resp_mail_nom,
            "resp_mail_domaine" => $resp_mail_domaine,
            "autre_contact" => $autre_contact,
            "nb_pdn_act" => $nb_pdn_act,
            "nb_pdn_lab" => $nb_pdn_lab,
            "statut" => $statut
        );
    }

// ----------------------------------------------------------------------------- Change QPV récup PRIJ
} elseif($id_qpv) {
    $query = "SELECT `prij` FROM `v_qpv` WHERE `id` = '$id_qpv';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $prij = $row['prij'];

        $return_arr[] = array(
            "prij" => $prij
        );
    }

// ----------------------------------------------------------------------------- Tableau : Récupération des données des actions liées à la structure
} elseif($id_str_tab_act) {
    $query = "SELECT * FROM `v_str_act` WHERE `str_id` = '$id_str_tab_act' ORDER BY `dat` DESC;";

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

// ----------------------------------------------------------------------------- Tableau : Récupération des données des PDN liées à la structure
} elseif($id_str_tab_pdn) {
    $query = "SELECT `id`, `prenom`, `pdn_nom`, `actif`, `date_entree`, `date_sortie` FROM `v_str_pdn` WHERE `str_id` = '$id_str_tab_pdn' ORDER BY `actif` DESC,`id` DESC;";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $prenom = $row['prenom'];
        $pdn_nom = $row['pdn_nom'];
        $actif = $row['actif'];
        $date_entree = $row['date_entree'];
        $date_sortie = $row['date_sortie'];

        $return_arr[] = array(
            "id" => $id,
            "prenom" => $prenom,
            "pdn_nom" => $pdn_nom,
            "actif" => $actif,
            "date_entree" => $date_entree,
            "date_sortie" => $date_sortie
        );
    }

} elseif($id_str_exist) {
    $query = "SELECT strExist('$id_str_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }
}

if($return_arr){echo json_encode($return_arr);}
