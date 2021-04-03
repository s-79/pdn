<?php

$server="localhost";
$db="pdn";
$user="seb";
$mdp="93260LesLilas";

// $server="anomalieemseb.mysql.db";
// $db="anomalieemseb";
// $user="anomalieemseb";
// $mdp="93260LesLilas";

$conn = mysqli_connect($server, $user, $mdp, $db);

// Vérifier la connexion
if($conn === false){
    die("ERREUR : Impossible de se connecter. " . mysqli_connect_error());
}
mysqli_set_charset($conn,"utf8mb4");
?>
