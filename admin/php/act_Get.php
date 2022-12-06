<?php

include "../../php/base.php";

$return_arr = array();

$id = mysqli_real_escape_string($conn, $_GET['id']);
$id_coordo = mysqli_real_escape_string($conn, $_GET['id_coordo']);
$id_act_coordo = mysqli_real_escape_string($conn, $_GET['id_act_coordo']);
$id_act_ress = mysqli_real_escape_string($conn, $_GET['id_act_ress']);
$id_act_pdn = mysqli_real_escape_string($conn, $_GET['id_act_pdn']);
$id_act_part = mysqli_real_escape_string($conn, $_GET['id_act_part']);
$id_act_str = mysqli_real_escape_string($conn, $_GET['id_act_str']);
$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);

$id_act_table_part = mysqli_real_escape_string($conn, $_GET['id_act_table_part']);
$id_act_table_pdn = mysqli_real_escape_string($conn, $_GET['id_act_table_pdn']);
$id_act_table_str = mysqli_real_escape_string($conn, $_GET['id_act_table_str']);

$v_pdn_actifs = mysqli_real_escape_string($conn, $_GET['v_pdn_actifs']);
$v_str_actives = mysqli_real_escape_string($conn, $_GET['v_str_actives']);
$v_coordo = mysqli_real_escape_string($conn, $_GET['v_coordo']);

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
        $nb_ress = $row['nb_ress'];
        $duree = $row['duree'];
        $nb_pdn = $row['nb_pdn'];
        $nb_part = $row['nb_part'];
        $nb_str = $row['nb_str'];
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
            "nb_ress" => $nb_ress,
            "duree" => $duree,
            "nb_pdn" => $nb_pdn,
            "nb_part" => $nb_part,
            "nb_str" => $nb_str,
            "nb_pers" => $nb_pers,
            "commentaires" => $commentaires
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

// ----------------------------------------------------------------------------- Récupération de la liste des coordo qui ont participé à l'action en fonction de l'id de l'action
} elseif($id_coordo) {
    $query = "SELECT * FROM `v_coordo` WHERE `id` = '$id_coordo';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $prenom = $row['prenom'];
        $nom = $row['nom_coordo'];
        $actif = $row['actif'];

        $return_arr[] = array(
            "id" => $id,
            "prenom" => $prenom,
            "nom" => $nom,
            "actif" => $actif
        );
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

    // ----------------------------------------------------------------------------- Récupération de la liste des structures qui ont stricié à l'action en fonction de l'id de l'action
    } elseif($id_act_str) {
        $query = "SELECT `id` FROM `v_act_str` WHERE `act_id` = '$id_act_str';";

        $result = mysqli_query($conn,$query);

        while($row = mysqli_fetch_array($result)){
            $id = $row['id'];
            $return_arr[] = array("id" => $id);
        }

// ----------------------------------------------------------------------------- Récupération de l'id de l'action nouvellement créé
} elseif($uuid) {
    $query = "SELECT `id` FROM `v_act` WHERE `uuid` = '$uuid';";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $return_arr[] = array("id" => $id);
    }

// ----------------------------------------------------------------------------- Récupération des données des partenaires liés à l'action pour tableau
} elseif($id_act_table_part) {
    $query = "SELECT `id`, `nom`, `ville`, `prenom_ref`, `nom_ref` FROM `v_act_part` WHERE `act_id` = '$id_act_table_part' ORDER BY `nom`;";
    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $ville = $row['ville'];
        $prenom_ref = $row['prenom_ref'];
        $nom_ref = $row['nom_ref'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "ville" => $ville,
            "prenom_ref" => $prenom_ref,
            "nom_ref" => $nom_ref
        );
    }

// ----------------------------------------------------------------------------- Récupération des données des pdn liés à l'action pour tableau
} elseif($id_act_table_pdn) {
    $query = "SELECT `id`, `structure`, `ville`, `prenom`, `nom` FROM `v_act_pdn` WHERE `act_id` = '$id_act_table_pdn' ORDER BY `prenom`;";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $structure = $row['structure'];
        $ville = $row['ville'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];

        $return_arr[] = array(
            "id" => $id,
            "structure" => $structure,
            "ville" => $ville,
            "prenom" => $prenom,
            "nom" => $nom
        );
    }

// ----------------------------------------------------------------------------- Récupération des données des pdn liés à l'action pour tableau
} elseif($id_act_table_str) {
    $query = "SELECT `id`, `nom`, `ville`, `resp_prenom`, `resp_nom` FROM `v_act_str` WHERE `act_id` = '$id_act_table_str' ORDER BY `nom`;";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $ville= $row['ville'];
        $resp_prenom= $row['resp_prenom'];
        $resp_nom = $row['resp_nom'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "ville" => $ville,
            "resp_prenom" => $resp_prenom,
            "resp_nom" => $resp_nom
        );
    }
// ----------------------------------------------------------------------------- Récupération des PDN actif pour la popup PDN
} elseif($v_pdn_actifs) {
    $query = "SELECT `id`, `nom`, `actif`, `date_sortie` FROM `v_str_pdn` ORDER BY `nom`;";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $actif= $row['actif'];
        $date_sortie = $row['date_sortie'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "actif" => $actif,
            "date_sortie" => $date_sortie
        );
    }
// ----------------------------------------------------------------------------- Récupération des STR avec PDN actifs dedans
} elseif($v_str_actives) {
    $query = "SELECT `id`, `nom`, `nb_pdn_act`, `statut` FROM `v_str` ORDER BY `nom`;";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $nb_pdn_act = $row['nb_pdn_act'];
        $statut = $row['statut'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "nb_pdn_act" => $nb_pdn_act,
            "statut" => $statut
        );
    }
}

elseif($v_coordo) {
    $query = "SELECT `id`, `nom`, `actif` FROM `v_coordo` ORDER BY `id` DESC;";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $actif = $row['actif'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "actif" => $actif
        );
    }
}

if($return_arr){echo json_encode($return_arr);}
