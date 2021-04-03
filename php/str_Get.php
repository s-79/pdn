<?php

include "base.php";

$return_arr = array();

$choixVille = mysqli_real_escape_string($conn, $_GET['choixVille']);
$allVille = mysqli_real_escape_string($conn, $_GET['allVille']);
$idStr = mysqli_real_escape_string($conn, $_GET['idStr']);
$idStr_Pdn = mysqli_real_escape_string($conn, $_GET['idStr_Pdn']);
$idStr_Type = mysqli_real_escape_string($conn, $_GET['idStr_Type']);

if($choixVille) {
    $query = "CALL str_Get('$choixVille')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $ville = $row['ville'];
        $image = $row['image'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "ville" => $ville,
            "image" => $image
        );
    }
} elseif($allVille) {
    $query = "CALL str_Get_All()";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $ville = $row['ville'];
        $image = $row['image'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "ville" => $ville,
            "image" => $image
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
        $nom = $row['nom'];
        $profession = $row['profession'];
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
            "profession" => $profession,
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
} elseif($idStr_Type) {
    $query = "CALL str_Get_Type('$idStr_Type')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $type_id = $row['type_id'];
        $type_nom = $row['type_nom'];
        $str_id = $row['str_id'];
        $str_nom = $row['str_nom'];

        $return_arr[] = array(
            "type_id" => $type_id,
            "type_nom" => $type_nom,
            "str_id" => $str_id,
            "str_nom" => $str_nom
        );
    }
}

echo json_encode($return_arr);
