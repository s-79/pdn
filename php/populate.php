<?php

include "base.php";

$return_arr = array();

// $v_ville = mysqli_real_escape_string($conn, $_GET['v_ville']);

$query = "CALL ville_List ()";

$result = mysqli_query($conn,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $nom = $row['nom'];

    $return_arr[] = array(
        "id" => $id,
        "nom" => $nom,);
}
echo json_encode($return_arr);
