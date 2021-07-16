<?php

include "base.php";

$return_arr = array();

$cat = mysqli_real_escape_string($conn, $_GET['cat']);
$cat_Get_Them = mysqli_real_escape_string($conn, $_GET['cat_Get_Them']);
$cat_Get_Ress = mysqli_real_escape_string($conn, $_GET['cat_Get_Ress']);
$id_them = mysqli_real_escape_string($conn, $_GET['id_them']);
$id_ress = mysqli_real_escape_string($conn, $_GET['id_ress']);

if($cat) {
    $query = "CALL cat_Get()";

    $result = mysqli_query($conn,$query);

        while($row = mysqli_fetch_array($result)){
            $id = $row['id'];
            $nom = $row['nom'];
            $icone = $row['icone'];

            $return_arr[] = array(
                "id" => $id,
                "nom" => $nom,
                "icone" => $icone
            );
    }

} elseif($cat_Get_Them) {
    $query = "CALL them_Get('$cat_Get_Them')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom
        );
    }

} elseif($cat_Get_Ress) {
    $query = "CALL cat_Get_Ress('$cat_Get_Ress')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $them_id = $row['them_id'];
        $nom_editeur = $row['nom_editeur'];
        $age = $row['age'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "them_id" => $them_id,
            "nom_editeur" => $nom_editeur,
            "age" => $age
        );
    }

} elseif($id_them) {
    $query = "CALL them_Get_Ress('$id_them')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $them_id = $row['them_id'];
        $nom_editeur = $row['nom_editeur'];
        $age = $row['age'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "them_id" => $them_id,
            "nom_editeur" => $nom_editeur,
            "age" => $age
        );
    }

} elseif($id_ress) {
    $query = "CALL ress_Get_Infos('$id_ress')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom = $row['nom'];
        $description = $row['description'];
        $image = $row['image'];
        $fichier = $row['fichier'];
        $site_editeur = $row['site_editeur'];

        $return_arr[] = array(
            "id" => $id,
            "nom" => $nom,
            "description" => $description,
            "image" => $image,
            "fichier" => $fichier,
            "site_editeur" => $site_editeur
        );
    }
}

if($return_arr) {echo json_encode($return_arr);}
