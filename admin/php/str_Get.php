<?php

include "../../php/base.php";

$return_arr = array();

$id = mysqli_real_escape_string($conn, $_GET['id']);

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
        $image = $row['image'];
        $presentation = $row['presentation'];
        $resp_prenom = $row['resp_prenom'];
        $resp_nom = $row['resp_nom'];
        $resp_tel = $row['resp_tel'];
        $resp_mail_nom = $row['resp_mail_nom'];
        $resp_mail_domaine = $row['resp_mail_domaine'];
        $nb_pdn_act = $row['nb_pdn_act'];
        $nb_pdn_lab = $row['nb_pdn_lab'];

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
            "image" => $image,
            "presentation" => $presentation,
            "resp_prenom" => $resp_prenom,
            "resp_nom" => $resp_nom,
            "resp_tel" => $resp_tel,
            "resp_mail_nom" => $resp_mail_nom,
            "resp_mail_domaine" => $resp_mail_domaine,
            "nb_pdn_act" => $nb_pdn_act,
            "nb_pdn_lab" => $nb_pdn_lab
        );
    }
}

if($return_arr){echo json_encode($return_arr);}
