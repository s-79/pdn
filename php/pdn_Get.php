<?php

include "base.php";

$return_arr = array();

$selectedVille = mysqli_real_escape_string($conn, $_GET['selectedVille']);
$allVille = mysqli_real_escape_string($conn, $_GET['allVille']);
$idPdn = mysqli_real_escape_string($conn, $_GET['idPdn']);

if($selectedVille) {
    $query = "CALL pdn_Get('$selectedVille')";

    $result = mysqli_query($conn,$query);

        while($row = mysqli_fetch_array($result)){
            $id = $row['id'];
            $prenom = $row['prenom'];
            $nom = $row['nom'];
            $fonction = $row['fonction'];
            $image = $row['image'];
            $ville_nom = $row['ville_nom'];

            $return_arr[] = array(
                "id" => $id,
                "prenom" => $prenom,
                "nom" => $nom,
                "fonction" => $fonction,
                "image" => $image,
                "ville_nom" => $ville_nom
            );
    }

} elseif($allVille) {
    $query = "CALL pdn_Get_All()";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $fonction = $row['fonction'];
        $image = $row['image'];
        $ville_nom = $row['ville_nom'];

        $return_arr[] = array(
            "id" => $id,
            "prenom" => $prenom,
            "nom" => $nom,
            "fonction" => $fonction,
            "image" => $image,
            "ville_nom" => $ville_nom
        );
    }

} elseif($idPdn) {
    $query = "CALL pdn_Get_Infos('$idPdn')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
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
        $presentation = $row['presentation'];
        $actif = $row['actif'];
        $str_nom = $row['str_nom'];
        $str_tel = $row['str_tel'];
        $str_site = $row['str_site'];
        $str_adresse = $row['str_adresse'];
        $ville_cp = $row['ville_cp'];
        $ville_nom = $row['ville_nom'];

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
            "presentation" => $presentation,
            "actif" => $actif,
            "str_nom" => $str_nom,
            "str_tel" => $str_tel,
            "str_site" => $str_site,
            "str_adresse" => $str_adresse,
            "ville_cp" => $ville_cp,
            "ville_nom" => $ville_nom
        );
    }
}

echo json_encode($return_arr);
