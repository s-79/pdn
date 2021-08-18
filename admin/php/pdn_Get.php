<?php

include "../../php/base.php";

$return_arr = array();

$id = mysqli_real_escape_string($conn, $_GET['id']);

if($id) {
    $query = "SELECT * FROM `v_str_pdn` WHERE `id` = '$id';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $date_entree = $row['date_entree'];
        $prenom = $row['prenom'];
        $nom = $row['pdn_nom'];
        $photo = $row['image'];
        $fonction = $row['fonction'];
        $str_id = $row['str_id'];
        $mail_nom = $row['mail_nom'];
        $mail_domaine = $row['mail_domaine'];
        $tel = $row['portablePro'];
        $facebook = $row['facebook'];
        $instagram = $row['instagram'];
        $snapchat = $row['snapchat'];
        $youtube = $row['youtube'];
        $twitter = $row['twitter'];
        $discord = $row['discord'];
        $twitch = $row['twitch'];
        $tiktok = $row['tiktok'];
        $whatsapp = $row['whatsApp'];
        $presentation = $row['presentation'];
        $charte = $row['charte'];
        $fiche_rens = $row['fiche_rens'];
        $actif = $row['actif'];
        $date_sortie = $row['date_sortie'];

        $return_arr[] = array(
            "date_entree" => $date_entree,
            "prenom" => $prenom,
            "nom" => $nom,
            "photo" => $photo,
            "fonction" => $fonction,
            "str_id" => $str_id,
            "mail_nom" => $mail_nom,
            "mail_domaine" => $mail_domaine,
            "tel" => $tel,
            "facebook" => $facebook,
            "instagram" => $instagram,
            "snapchat" => $snapchat,
            "youtube" => $youtube,
            "twitter" => $twitter,
            "discord" => $discord,
            "twitch" => $twitch,
            "tiktok" => $tiktok,
            "whatsapp" => $whatsapp,
            "presentation" => $presentation,
            "charte" => $charte,
            "fiche_rens" => $fiche_rens,
            "actif" => $actif,
            "date_sortie" => $date_sortie
        );
    }
}

if($return_arr){echo json_encode($return_arr);}
