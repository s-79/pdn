<?php

if ($_FILES['nom_du_fichier']['error']) {
    switch ($_FILES['nom_du_fichier']['error']) {
        case 1: // UPLOAD_ERR_INI_SIZE
        echo"Le fichier dépasse la limite de taille autorisée.";
        break;
        case 2: // UPLOAD_ERR_FORM_SIZE
        echo "Le fichier dépasse la limite de taille autorisée.";
        break;
        case 3: // UPLOAD_ERR_PARTIAL
        echo "L'envoi du fichier a été interrompu pendant le transfert.";
        break;
        case 4: // UPLOAD_ERR_NO_FILE
        echo "Le fichier que vous tentez d'envoyer n'est pas reconnu.";
        break;
    }
}
else { // $_FILES['nom_du_fichier']['error'] vaut 0 soit UPLOAD_ERR_OK // ce qui signifie qu'il n'y a eu aucune erreur
    if(is_array($_FILES))   {
        $tmp_name = $_FILES["nom_du_fichier"]["tmp_name"];
        $image_prop = getimagesize($tmp_name);
        $image_type = $image_prop[2];
        if( $image_type == IMAGETYPE_JPEG ) {
            $image_id = imagecreatefromjpeg($tmp_name);
            $layer = resize($image_id,$image_prop[0],$image_prop[1]);
            $name = basename($_FILES["nom_du_fichier"]["name"], ".jpg").rand(1000,1000000). ".jpg";
            imagejpeg($layer,$name);
            echo "img/outil/".$name;
        }
        elseif( $image_type == IMAGETYPE_GIF ) {
            $image_id = imagecreatefromgif($tmp_name);
            $layer = resize($image_id,$image_prop[0],$image_prop[1]);
            $name = basename($_FILES["nom_du_fichier"]["name"], ".gif").rand(1000,1000000). ".gif";
            imagegif($layer,$name);
            echo "img/outil/".$name;
        }
        elseif( $image_type == IMAGETYPE_PNG ) {
            $image_id = imagecreatefrompng($tmp_name);
            $layer = resize($image_id,$image_prop[0],$image_prop[1]);
            $name = basename($_FILES["nom_du_fichier"]["name"], ".png").rand(1000,1000000).".png";
            imagepng($layer,$name);
            echo "img/outil/".$name;
        }
        else {
            echo "Merci d'envoyer un fichier jpg, gif ou png.";
        }
    }
}

function resize($image_id,$width,$height) {
    $new_height = 300;
    $ratio = $new_height / $height;
    $new_width =$width * $ratio;

    $layer=imagecreatetruecolor($new_width,$new_height);
    imagecopyresampled($layer,$image_id,0,0,0,0,$new_width,$new_height, $width,$height);
    return $layer;
}

?>
