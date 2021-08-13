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

// $uuid = "uuid";
// $mois = 12;
// $annee = 2021;
// $nb_h = "nb_h";
// $smart = 1;
// $ordi = 1;
// $tablette = 1;
// $consol = 1;
// $lien = 1;
// $loisirs = 1;
// $socio_pro = 1;
// $parentalite = 1;
// $sante = 1;
// $addiction = 1;
// $sexualite = 1;
// $violence = 1;
// $logement = 1;
// $autre_them = 1;
// $formation = "formations";
// $commentaires = "commentaires";
// $pdn_id = 1;

$id_Form_Create_Rs = mysqli_real_escape_string($conn, $_GET['id_Form_Create_Rs']);
$nom = mysqli_real_escape_string($conn, $_GET['nom']);
$maitrise = mysqli_real_escape_string($conn, $_GET['maitrise']);
$age = mysqli_real_escape_string($conn, $_GET['age']);
$followers = mysqli_real_escape_string($conn, $_GET['followers']);
$messages = mysqli_real_escape_string($conn, $_GET['messages']);
$acc = mysqli_real_escape_string($conn, $_GET['acc']);
$new_acc = mysqli_real_escape_string($conn, $_GET['new_acc']);

// $id_Form_Create_Rs = 8;
// $nom = "nomOK";
// $maitrise = "maitrise";
// $age = "age";
// $followers = "followers";
// $messages = "messages";
// $acc = "acc";
// $new_acc = "new_acc";

$id_Form_Create_Init = mysqli_real_escape_string($conn, $_GET['id_Form_Create_Init']);
$num = mysqli_real_escape_string($conn, $_GET['num']);
$date = mysqli_real_escape_string($conn, $_GET['date']);
$intitule = mysqli_real_escape_string($conn, $_GET['intitule']);
$them = mysqli_real_escape_string($conn, $_GET['them']);
$nb_jeunes = mysqli_real_escape_string($conn, $_GET['nb_jeunes']);
$age_init = mysqli_real_escape_string($conn, $_GET['age_init']);

// $id_Form_Create_Init = 47;
// $num = 1;
// $date = "date";
// $intitule = "intitule";
// $them = "them";
// $nb_jeunes = 12;
// $age_init = "age_init";

$next_id_Form_Create_Init = mysqli_real_escape_string($conn, $_GET['next_id_Form_Create_Init']);
$next_num = mysqli_real_escape_string($conn, $_GET['next_num']);
$next_date = mysqli_real_escape_string($conn, $_GET['next_date']);
$next_them = mysqli_real_escape_string($conn, $_GET['next_them']);
$next_acc = mysqli_real_escape_string($conn, $_GET['next_acc']);

// $next_id_Form_Create_Init = 1;
// $next_num = 1;
// $next_date = "date";
// $next_them = "them";
// $next_acc = "Oui";

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
        mail('sebastien.trouve@mailo.com', 'Besoin d\'accompagnement ou de ressources sur le site Promeneurs du Net 93', $_SESSION["prenom"].' '.$message, $headers);
    }
}


$result = $conn->prepare($query);

$result->execute();

echo "OK";
