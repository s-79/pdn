<?php

if ($_FILES['nom_du_fichier']['error']) {
    switch ($_FILES['nom_du_fichier']['error']) {
        case 1: // UPLOAD_ERR_INI_SIZE
        echo"Le fichier dépasse la limite autorisée par le serveur (fichier php.ini) !";
        break;
        case 2: // UPLOAD_ERR_FORM_SIZE
        echo "Le fichier dépasse la limite autorisée dans le formulaire HTML !";
        break;
        case 3: // UPLOAD_ERR_PARTIAL
        echo "L'envoi du fichier a été interrompu pendant le transfert !";
        break;
        case 4: // UPLOAD_ERR_NO_FILE
        echo "Le fichier que vous avez envoyé a une taille nulle !";
        break;
    }
}
else { // $_FILES['nom_du_fichier']['error'] vaut 0 soit UPLOAD_ERR_OK // ce qui signifie qu'il n'y a eu aucune erreur
    $chemin_destination = "../../img/pdn/";
    $name = basename($_FILES["nom_du_fichier"]["name"]);
    $tmp_name = $_FILES["nom_du_fichier"]["tmp_name"];
    $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    $final_image = rand(1000,1000000).$name;
    $chemin_recup = "img/pdn/";
    $src = $chemin_destination.strtolower($final_image);
    $src_recup = $chemin_recup.strtolower($final_image);

    if(move_uploaded_file($tmp_name,$src)) {
        echo $src_recup;

        // include("base.php");
        // $connex= new PDO("mysql:host=$server;dbname=$db;charset=utf8",$user,$mdp) ;

        //insert form data in the database
        // $insert = $db->query("INSERT INTO structure (name,email,file_name) VALUES ('".$name."','".$email."','".$path."')");
        // echo $insert?'ok':'err';
    }

    // move_uploaded_file($tmp_name, "$chemin_destination/$name");
    // echo "$chemin_destination/$name";
    // basename() peut empêcher les attaques de système de fichiers;
}
?>
