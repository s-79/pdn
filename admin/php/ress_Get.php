<?php

include "../../php/base.php";

$return_arr = array();


$ress_Get_Cat = mysqli_real_escape_string($conn, $_GET['ress_Get_Cat']);
$cat_Get_Them = mysqli_real_escape_string($conn, $_GET['cat_Get_Them']);
$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);
$them_Get_Infos = mysqli_real_escape_string($conn, $_GET['them_Get_Infos']);
$cat_Get_Infos = mysqli_real_escape_string($conn, $_GET['cat_Get_Infos']);
$id_ress_them = mysqli_real_escape_string($conn, $_GET['id_ress_them']);
$nom_ress_exist = mysqli_real_escape_string($conn, $_GET['nom_ress_exist']);
$id_ress_exist = mysqli_real_escape_string($conn, $_GET['id_ress_exist']);
$nom_them_exist = mysqli_real_escape_string($conn, $_GET['nom_them_exist']);
$id_them_exist = mysqli_real_escape_string($conn, $_GET['id_them_exist']);
$id_cat_exist = mysqli_real_escape_string($conn, $_GET['id_cat_exist']);


// ----------------------------------------------------------------------------- Récupération des catégories
if($ress_Get_Cat) {
    $query = "CALL ress_Get_Cat()";

    $result = mysqli_query($conn,$query);

        while($row = mysqli_fetch_array($result)){
            $id = $row['id'];
            $nom = $row['nom'];

            $return_arr[] = array(
                "id" => $id,
                "nom" => $nom
            );
    }
// ----------------------------------------------------------------------------- Récupération des thématiques en fonction de l'id des catégories
} elseif($cat_Get_Them) {
    $query = "CALL cat_Get_Them('$cat_Get_Them')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom
        );
    }

// ----------------------------------------------------------------------------- Récupération de l'id de la thématique nouvellement créée
} elseif($uuid) {
    $query = "CALL ress_Get_Id('$uuid')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $return_arr[] = array("id" => $id);
    }
// ----------------------------------------------------------------------------- Récupération de l'id de la catégorie associée à une thématique
} elseif($them_Get_Infos) {
    $query = "CALL them_Get_Infos('$them_Get_Infos')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $cat_id = $row['cat_id'];
        $nom = $row['nom'];

        $return_arr[] = array(
            "cat_id" => $cat_id,
            "nom" => $nom
        );
    }
} elseif($cat_Get_Infos) {
    $query = "CALL cat_Get_Infos('$cat_Get_Infos')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $nom = $row['nom'];
        $icone = $row['icone'];

        $return_arr[] = array(
            "nom" => $nom,
            "icone" => $icone
        );
    }
// ----------------------------------------------------------------------------- Récupération de la liste des thématiques associées à la ressource
} elseif($id_ress_them) {
        $query = "CALL ress_Get_Them('$id_ress_them')";

        $result = mysqli_query($conn,$query);

        while($row = mysqli_fetch_array($result)){
            $id = $row['them_id'];
            $return_arr[] = array("them_id" => $id);
        }
// ----------------------------------------------------------------------------- Est-ce que le nom de la ressource existe déjà ?
} elseif($nom_ress_exist) {
    $query = "SELECT ressExistNom('$nom_ress_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }
// ----------------------------------------------------------------------------- La ressource a-t-elle bien été supprimée de la BDD ?
} elseif($id_ress_exist) {
    $query = "SELECT ressExist('$id_ress_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }

// ----------------------------------------------------------------------------- Est-ce que le nom de la thématique existe déjà ?
} elseif($nom_them_exist) {
    $query = "SELECT themExistNom('$nom_them_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }
// ----------------------------------------------------------------------------- La thématique a-t-elle bien été supprimée de la BDD ?
} elseif($id_them_exist) {
    $query = "SELECT themExist('$id_them_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }

// ----------------------------------------------------------------------------- La catégorie a-t-elle bien été supprimée de la BDD ?
} elseif($id_cat_exist) {
    $query = "SELECT catExist('$id_cat_exist')";

    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        $res = $row[0];

        $return_arr[] = array(
            "res" => $res
        );
    }
}


if($return_arr) {echo json_encode($return_arr);}
