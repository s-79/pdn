<?php
include "../../php/base.php";

$select =  mysqli_real_escape_string($conn, $_POST['select']);
// $type =  mysqli_real_escape_string($conn, $_POST['type']);
// $support =  mysqli_real_escape_string($conn, $_POST['support']);
// $duree =  mysqli_real_escape_string($conn, $_POST['duree']);

$query = "SELECT `$select`, COUNT(*) count FROM `v_act` GROUP BY `$select` DESC;";

// if ($support == "0-1") {
//     $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `type` = '$type' AND (`support` = 0 OR `support` = 1) AND `duree` = '$duree' GROUP BY `$select` DESC;";
//
//     if (!$duree) {
//     $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `type` = '$type' AND (`support` = 0 OR `support` = 1) GROUP BY `$select` DESC;";
//
//         if (!$type) {
//             $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE (`support` = 0 OR `support` = 1) GROUP BY `$select` DESC;";
//         }
//
//     } elseif (!$type) {
//         $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE (`support` = 0 OR `support` = 1) AND `duree` = '$duree' GROUP BY `$select` DESC;";
//     }
//
// } elseif ($support == "2") {
//     $query = "SELECT `$select`, COUNT(*) count FROM `v_stat2` WHERE `type` = '$type' AND `support` = 2 AND `duree` = '$duree' GROUP BY `$select` DESC;";
//
//     if (!$duree) {
//     $query = "SELECT `$select`, COUNT(*) count FROM `v_stat2` WHERE `type` = '$type' AND `support` = 2 GROUP BY `$select` DESC;";
//
//         if (!$type) {
//             $query = "SELECT `$select`, COUNT(*) count FROM `v_stat2` WHERE `support` = 2 GROUP BY `$select` DESC;";
//         }
//
//     } elseif (!$type) {
//         $query = "SELECT `$select`, COUNT(*) count FROM `v_stat2` WHERE `support` = 2 AND `duree` = '$duree' GROUP BY `$select` DESC;";
//     }
//
// } else {
//     $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `type` = '$type' AND `support` = '$support' AND `duree` = '$duree' GROUP BY `$select` DESC;";
//
//     if (!$duree) {
//     $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `type` = '$type' AND `support` = '$support' GROUP BY `$select` DESC;";
//
//         if (!$type) {
//             $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `support` = '$support' GROUP BY `$select` DESC;";
//         }
//
//     } elseif (!$type) {
//         $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `support` = '$support' AND `duree` = '$duree' GROUP BY `$select` DESC;";
//     }
//
// }

if ($stmt = $conn->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($genre, $count);

    $labels = array();
    $data = array();

    while ($stmt->fetch()) {
        $labels[] = $genre;
        $data[] = $count;
    }
        $stmt->close();
}

$datasets = array (
    'data'=> $data,
    'backgroundColor'=> [
        'rgba(25, 30, 54, 1)',
        'rgba(101, 178, 222, 1)',
        'rgba(218, 51, 80, 1)',
        'rgba(240, 173, 78, 1)',
        'rgba(200, 184, 162, 1)'
    ]
);

$data = array('labels'=>$labels, 'datasets'=> array($datasets));

if($data) echo json_encode($data);
