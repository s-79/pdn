<?php

include "../php/base.php";

$return_arr = array();

$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);


if($uuid) {
    $query = "CALL form_Get_Id ('$uuid')";

    $result = mysqli_query($conn,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];

        $return_arr[] = array(
            "id" => $id
        );
    }
}

if($return_arr){echo json_encode($return_arr);}
