<?php

include "base.php";

$return_arr = array();

$v_ville = mysqli_real_escape_string($conn, $_GET['v_ville']);
$selectedVille = mysqli_real_escape_string($conn, $_GET['selectedVille']);
$allVille = mysqli_real_escape_string($conn, $_GET['allVille']);
$idStr = mysqli_real_escape_string($conn, $_GET['idStr']);
$idStr_Pdn = mysqli_real_escape_string($conn, $_GET['idStr_Pdn']);
$idStr_Type = mysqli_real_escape_string($conn, $_GET['idStr_Type']);

$osm = mysqli_real_escape_string($conn, $_GET['osm']);

if($v_ville) {
    $query = "CALL ville_List ()";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,);
    }

} elseif($selectedVille) {
    $query = "CALL str_Get('$selectedVille')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['str_nom'];
        $ville = $row['ville'];
        $image = $row['image'];
        $nb_pdn_act = $row['nb_pdn_act'];


        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "ville" => $ville,
            "image" => $image,
            "nb_pdn_act" => $nb_pdn_act
        );
    }
} elseif($allVille) {
    $query = "CALL str_Get_All()";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['str_nom'];
        $ville = $row['ville'];
        $image = $row['image'];
        $nb_pdn_act = $row['nb_pdn_act'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "ville" => $ville,
            "image" => $image,
            "nb_pdn_act" => $nb_pdn_act
        );
    }
} elseif($idStr) {
    $query = "CALL str_Get_Infos('$idStr')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $nom = $row['nom'];
        $adresse = $row['adresse'];
        $cp = $row['cp'];
        $ville = $row['ville'];
        $tel = $row['tel'];
        $site = $row['site'];
        $presentation = $row['presentation'];
        $image = $row['image'];

        $return_arr[] = array(
            "nom" => $nom,
            "adresse" => $adresse,
            "cp" => $cp,
            "ville" => $ville,
            "tel" => $tel,
            "site" => $site,
            "presentation" => $presentation,
            "image" => $image,
            "id" => $id,
        );
    }

} elseif($idStr_Pdn) {
    $query = "CALL str_Get_Pdn('$idStr_Pdn')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $prenom = $row['prenom'];
        $nom = $row['pdn_nom'];
        $fonction = $row['fonction'];
        $mail_nom = $row['mail_nom'];
        $mail_domaine = $row['mail_domaine'];
        $portablePro = $row['portablePro'];
        $facebook = $row['facebook'];
        $snapchat = $row['snapchat'];
        $instagram = $row['instagram'];
        $whatsApp = $row['whatsApp'];
        $youtube = $row['youtube'];
        $twitter = $row['twitter'];
        $discord = $row['discord'];
        $twitch = $row['twitch'];
        $tiktok = $row['tiktok'];
        $image = $row['image'];
        $actif = $row['actif'];

        $return_arr[] = array(
            "id" => $id,
            "prenom" => $prenom,
            "nom" => $nom,
            "fonction" => $fonction,
            "mail_nom" => $mail_nom,
            "mail_domaine" => $mail_domaine,
            "portablePro" => $portablePro,
            "facebook" => $facebook,
            "snapchat" => $snapchat,
            "instagram" => $instagram,
            "whatsApp" => $whatsApp,
            "youtube" => $youtube,
            "twitter" => $twitter,
            "discord" => $discord,
            "twitch" => $twitch,
            "tiktok" => $tiktok,
            "image" => $image,
            "actif" => $actif
        );
    }
} elseif($osm) {
    $query = "CALL osm_Get_Str()";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['str_nom'];
        $ville = $row['ville'];
        $lat = $row['lat'];
        $lon = $row['lon'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "ville" => $ville,
            "lat" => $lat,
            "lon" => $lon
        );
    }
}

echo json_encode($return_arr);
