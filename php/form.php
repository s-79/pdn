<?php

include "../php/base.php";

$uuid = mysqli_real_escape_string($conn, $_GET['uuid']);
$mois = mysqli_real_escape_string($conn, $_GET['mois']);
$annee = mysqli_real_escape_string($conn, $_GET['annee']);
$nb_h = mysqli_real_escape_string($conn, $_GET['nb_h']);
$smart = mysqli_real_escape_string($conn, $_GET['smart']);
$ordi = mysqli_real_escape_string($conn, $_GET['ordi']);
$tablette = mysqli_real_escape_string($conn, $_GET['tablette']);
$consol = mysqli_real_escape_string($conn, $_GET['consol']);
$lien = mysqli_real_escape_string($conn, $_GET['lien']);
$loisirs = mysqli_real_escape_string($conn, $_GET['loisirs']);
$socio_pro = mysqli_real_escape_string($conn, $_GET['socio_pro']);
$parentalite = mysqli_real_escape_string($conn, $_GET['parentalite']);
$sante = mysqli_real_escape_string($conn, $_GET['sante']);
$addiction = mysqli_real_escape_string($conn, $_GET['addiction']);
$sexualite = mysqli_real_escape_string($conn, $_GET['sexualite']);
$violence = mysqli_real_escape_string($conn, $_GET['violence']);
$logement = mysqli_real_escape_string($conn, $_GET['logement']);
$autre_them = mysqli_real_escape_string($conn, $_GET['autre_them']);
$formation = mysqli_real_escape_string($conn, $_GET['formation']);
$commentaires = mysqli_real_escape_string($conn, $_GET['commentaires']);
$pdn_id = mysqli_real_escape_string($conn, $_GET['pdn_id']);

$id_Form_Create_Rs = mysqli_real_escape_string($conn, $_GET['id_Form_Create_Rs']);
$nom = mysqli_real_escape_string($conn, $_GET['nom']);
$maitrise = mysqli_real_escape_string($conn, $_GET['maitrise']);
$age = mysqli_real_escape_string($conn, $_GET['age']);
$followers = mysqli_real_escape_string($conn, $_GET['followers']);
$messages = mysqli_real_escape_string($conn, $_GET['messages']);
$acc = mysqli_real_escape_string($conn, $_GET['acc']);
$new_acc = mysqli_real_escape_string($conn, $_GET['new_acc']);

$id_Form_Create_Init = mysqli_real_escape_string($conn, $_GET['id_Form_Create_Init']);
$num = mysqli_real_escape_string($conn, $_GET['num']);
$date = mysqli_real_escape_string($conn, $_GET['date']);
$intitule = mysqli_real_escape_string($conn, $_GET['intitule']);
$them = mysqli_real_escape_string($conn, $_GET['them']);
$nb_jeunes = mysqli_real_escape_string($conn, $_GET['nb_jeunes']);
$age_init = mysqli_real_escape_string($conn, $_GET['age_init']);

$next_id_Form_Create_Init = mysqli_real_escape_string($conn, $_GET['next_id_Form_Create_Init']);
$next_num = mysqli_real_escape_string($conn, $_GET['next_num']);
$next_date = mysqli_real_escape_string($conn, $_GET['next_date']);
$next_them = mysqli_real_escape_string($conn, $_GET['next_them']);
$next_acc = mysqli_real_escape_string($conn, $_GET['next_acc']);

$mdp_new = mysqli_real_escape_string($conn, $_GET['mdp_new']);
$resp = mysqli_real_escape_string($conn, $_GET['resp']);

//----------------------------------------------------------------------------- Besoin d'accompagnement ou de ressources + mail
if($uuid){$query = "CALL form_Create ('$uuid', '$mois', '$annee', '$nb_h', '$smart', '$ordi', '$tablette', '$consol', '$lien', '$loisirs', '$socio_pro', '$parentalite', '$sante', '$addiction', '$sexualite', '$violence', '$logement', '$autre_them', '$formation', '$commentaires', '$pdn_id')";}
elseif($id_Form_Create_Rs){$query = "CALL form_Create_Rs ('$nom', '$maitrise', '$age', '$followers', '$messages', '$acc', '$new_acc', '$id_Form_Create_Rs')";}
elseif($id_Form_Create_Init){$query = "CALL form_Create_Init ('$num', '$date', '$intitule', '$them', '$nb_jeunes', '$age_init', '$id_Form_Create_Init')";}
elseif($next_id_Form_Create_Init) {
    $query = "CALL form_Create_Next_Init ('$next_num', '$next_date', '$next_them', '$next_acc', '$next_id_Form_Create_Init')";
    if($next_acc != "Non") {
        session_start();
        $headers ='From: "Promeneurs du Net 93"<no-reply@pdn.ligue93.org>'."\n";
        $headers .='Content-Type: text/html; charset="utf-8"'."\n";
        $headers .='Content-Transfer-Encoding: 8bit';
        $message = '<html><body> a besoin d\'un accompagnement ou de ressources pour une initiative numérique.</br></br><a href="http://pdn.ligue93.org/admin">Se connecter à l\'interface d\'administration</a></body></html>';
        mail('fol93.coordopdn93@gmail.com', '[pdn.ligue93.org] Besoin d\'accompagnement ou de ressources', $_SESSION["prenom"].' '.$_SESSION["nom"].' '.$message, $headers);
    }

} elseif($mdp_new) {
    session_start();
    $id_mdp = $_SESSION["id"];
    $mdp_new = password_hash($mdp_new, PASSWORD_DEFAULT);
    if($id_mdp == $resp) {
        $query = "CALL mdp_Update ('$id_mdp', '$mdp_new')";
    }
}

$result = $conn->prepare($query);

$result->execute();

echo "OK";
