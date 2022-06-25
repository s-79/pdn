<?php

include "../../php/base.php";
$return_arr = array();

$view = mysqli_real_escape_string($conn, $_POST['view']);

// ----------------------------------------------------------------------------- PDN
if($view == "Promeneurs") {
    $query = "SELECT * FROM `v_mailing_pdn`";
    $result = mysqli_query($conn,$query);

    $en_tete = "PRENOM,NOM,FONCTION,MAIL,TEL PRO,STRUCTURE,TYPE STR,VILLE,QPV,ACTIF\r";

    while($row = mysqli_fetch_array($result)){
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $fonction = $row['fonction'];
        $mail = $row['mail'];
        $portablePro = $row['portablePro'];
        $nom_str = $row['nom_str'];
        $type_str= $row['type_str'];
        $nom_ville = $row['nom_ville'];
        $code_qpv = $row['code_qpv'];
        $actif = $row['actif'];

        $return_arr[] = array(
            "prenom" => $prenom,
            "nom" => $nom,
            "fonction" => $fonction,
            "mail" => $mail,
            "portablePro" => $portablePro,
            "nom_str" => $nom_str,
            "type_str" => $type_str,
            "nom_ville" => $nom_ville,
            "code_qpv" => $code_qpv,
            "actif" => $actif
        );
    }
}

// ----------------------------------------------------------------------------- STR
if($view == "Structures") {
    $query = "SELECT * FROM `v_mailing_str`";
    $result = mysqli_query($conn,$query);

    $en_tete = "PRENOM_RESP,NOM_RESP,MAIL_RESP,TEL,TYPE_STR,NOM_STR,VILLE,QPV,NB_PDN,STATUT\r";

    while($row = mysqli_fetch_array($result)){
        $resp_prenom = $row['resp_prenom'];
        $resp_nom = $row['resp_nom'];
        $mail = $row['mail'];
        $resp_tel= $row['resp_tel'];
        $structure = $row['structure'];
        $type_str = $row['type_str'];
        $nom_ville = $row['nom_ville'];
        $code_qpv = $row['code_qpv'];
        $nb_pdn_act= $row['nb_pdn_act'];
        $statut = $row['statut'];

        $return_arr[] = array(
            "resp_prenom" => $resp_prenom,
            "resp_nom" => $resp_nom,
            "mail" => $mail,
            "resp_tel" => $resp_tel,
            "structure" => $structure,
            "type_str" => $type_str,
            "nom_ville" => $nom_ville,
            "code_qpv" => $code_qpv,
            "nb_pdn_act" => $nb_pdn_act,
            "statut" => $statut
        );
    }
}

// ----------------------------------------------------------------------------- RESS
if($view == "Ressources") {
    $query = "SELECT * FROM `v_ress`";
    $result = mysqli_query($conn,$query);

    $en_tete = "NOM,LIEN,IMAGE,AGE,EDITEUR,DESCRIPTION,VALIDE\r";

    while($row = mysqli_fetch_array($result)){
        $nom = $row['nom'];
        $lien = $row['lien'];
        $image = $row['image'];
        $age = $row['age'];
        $editeur = $row['editeur'];
        $description = $row['description'];
        $valide = $row['valide'];

        $return_arr[] = array(
            "nom" => $nom,
            "lien" => $lien,
            "image" => $image,
            "age" => $age,
            "editeur" => $editeur,
            "description" => $description,
            "valide" => $valide
        );
    }
}

// ----------------------------------------------------------------------------- ACTIONS
if($view == "Actions") {
    $query = "SELECT * FROM `v_act`";
    $result = mysqli_query($conn,$query);

    $en_tete = "NOM_ACTION,DATE,ANNEE,TYPE,ORGANISE_PAR,INTITULE,LIEU,VILLE,SUPPORT,FACEBOOK,WHATSAPP,TWITTER,SITE,DUREE,NB_RESS,NB_PDN,NB_PART,NB_STR,NB_PERS,COMMENTAIRES\r";

    while($row = mysqli_fetch_array($result)){
        $nom = $row['nom'];
        $dat = $row['dat'];
        $annee = $row['annee'];
        $type = $row['type'];
        $organise = $row['organise'];
        $intitule = $row['intitule'];
        $lieu = $row['lieu'];
        $ville = $row['ville'];
        $support = $row['support'];
        $facebook = $row['facebook'];
        $whatsapp = $row['whatsapp'];
        $twitter = $row['twitter'];
        $site = $row['site'];
        $duree = $row['duree'];
        $nb_ress = $row['nb_ress'];
        $nb_pdn = $row['nb_pdn'];
        $nb_part = $row['nb_part'];
        $nb_str = $row['nb_str'];
        $nb_pers= $row['nb_pers'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "nom" => $nom,
            "dat" => $dat,
            "annee" => $annee,
            "type" => $type,
            "organise" => $organise,
            "intitule" => $intitule,
            "lieu" => $lieu,
            "ville" => $ville,
            "support" => $support,
            "facebook" => $facebook,
            "whatsapp" => $whatsapp,
            "twitter" => $twitter,
            "site" => $site,
            "duree" => $duree,
            "nb_ress" => $nb_ress,
            "nb_pdn" => $nb_pdn,
            "nb_part" => $nb_part,
            "nb_str" => $nb_str,
            "nb_pers" => $nb_pers,
            "commentaires" => $commentaires
        );
    }
}

// ----------------------------------------------------------------------------- FORMULAIRES
if($view == "Formulaires") {
    $query = "SELECT * FROM `v_form_pdn`";
    $result = mysqli_query($conn,$query);

    $en_tete = "MOIS,ANNEE,PRENOM,NOM,STRUCTURE,VILLE,NB_HEURE,SMARTPHONE,ORDI,TABLETTE,CONSOLE,LIEN_SOCIAL,LOISIRS,SOCIO_PRO,PARENTALITE,SANTE,ADDICTION,SEXUALITE,VIOLENCE,LOGEMENT,AUTRE_THEM,FORMATION,COMMENTAIRES\r";

    while($row = mysqli_fetch_array($result)){
        $mois = $row['mois'];
        $annee = $row['annee'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $structure = $row['structure'];
        $ville = $row['ville'];
        $nb_h = $row['nb_h'];
        $smart = $row['smart'];
        $ordi = $row['ordi'];
        $tablette = $row['tablette'];
        $console= $row['console'];
        $lien = $row['lien'];
        $loisirs = $row['loisirs'];
        $socio_pro = $row['socio_pro'];
        $parentalite = $row['parentalite'];
        $sante = $row['sante'];
        $addiction = $row['addiction'];
        $sexualite = $row['sexualite'];
        $violence = $row['violence'];
        $logement = $row['logement'];
        $autre_them = $row['autre_them'];
        $formation = $row['formation'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "mois" => $mois,
            "annee" => $annee,
            "prenom" => $prenom,
            "nom" => $nom,
            "structure" => $structure,
            "ville" => $ville,
            "nb_h" => $nb_h,
            "smart" => $smart,
            "ordi" => $ordi,
            "tablette" => $tablette,
            "console" => $console,
            "lien" => $lien,
            "loisirs" => $loisirs,
            "socio_pro" => $socio_pro,
            "parentalite" => $parentalite,
            "sante" => $sante,
            "addiction" => $addiction,
            "sexualite" => $sexualite,
            "violence" => $violence,
            "logement" => $logement,
            "autre_them" => $autre_them,
            "formation" => $formation,
            "commentaires" => $commentaires
        );
    }
}

// ----------------------------------------------------------------------------- RESEAUX SOCIAUX
if($view == "Reseaux_Sociaux") {
    $query = "SELECT * FROM `v_form_rs`";
    $result = mysqli_query($conn,$query);

    $en_tete = "MOIS,ANNEE,PRENOM,NOM,STRUCTURE,VILLE,RESEAU_SOCIAL,MAITRISE,AGE,FOLLOWERS,MESSAGES,ACCOMPAGNEMENTS,NOUVEAUX_ACCOMPAGNEMENTS\r";

    while($row = mysqli_fetch_array($result)){
        $mois = $row['mois'];
        $annee = $row['annee'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $structure = $row['structure'];
        $ville = $row['ville'];
        $nom_rs= $row['nom_rs'];
        $maitrise = $row['maitrise'];
        $age = $row['age'];
        $nb_follow = $row['nb_follow'];
        $nb_mess = $row['nb_mess'];
        $nb_acc = $row['nb_acc'];
        $nb_nvx_acc = $row['nb_nvx_acc'];

        $return_arr[] = array(
            "mois" => $mois,
            "annee" => $annee,
            "prenom" => $prenom,
            "nom" => $nom,
            "structure" => $structure,
            "ville" => $ville,
            "nom_rs" => $nom_rs,
            "maitrise" => $maitrise,
            "age" => $age,
            "nb_follow" => $nb_follow,
            "nb_mess" => $nb_mess,
            "nb_acc" => $nb_acc,
            "nb_nvx_acc" => $nb_nvx_acc
        );
    }
}

// ----------------------------------------------------------------------------- INITIATIVES
if($view == "Initiatives") {
    $query = "SELECT * FROM `v_form_init`";
    $result = mysqli_query($conn,$query);

    $en_tete = "MOIS,ANNEE,PRENOM,NOM,STRUCTURE,VILLE,DATE,INTITULE,THEMATIQUE,NB_JEUNE,AGE\r";

    while($row = mysqli_fetch_array($result)){
        $mois = $row['mois'];
        $annee = $row['annee'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $structure = $row['structure'];
        $ville = $row['ville'];
        $dat = $row['dat'];
        $intitule = $row['intitule'];
        $them = $row['them'];
        $nb_jeune = $row['nb_jeune'];
        $age = $row['age'];

        $return_arr[] = array(
            "mois" => $mois,
            "annee" => $annee,
            "prenom" => $prenom,
            "nom" => $nom,
            "structure" => $structure,
            "ville" => $ville,
            "dat" => $dat,
            "intitule" => $intitule,
            "them" => $them,
            "nb_jeune" => $nb_jeune,
            "age" => $age
        );
    }
}

// ----------------------------------------------------------------------------- INITIATIVES PREVUES
if($view == "Initiatives_Prevues") {
    $query = "SELECT * FROM `v_form_next_init`";
    $result = mysqli_query($conn,$query);

    $en_tete = "MOIS,ANNEE,PRENOM,NOM,STRUCTURE,VILLE,DATE,THEMATIQUE,BESOIN_ACCOMPAGNEMENT\r";

    while($row = mysqli_fetch_array($result)){
        $mois = $row['mois'];
        $annee = $row['annee'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $structure = $row['structure'];
        $ville = $row['ville'];
        $next_dat = $row['next_dat'];
        $next_them = $row['next_them'];
        $next_acc = $row['next_acc'];

        $return_arr[] = array(
            "mois" => $mois,
            "annee" => $annee,
            "prenom" => $prenom,
            "nom" => $nom,
            "structure" => $structure,
            "ville" => $ville,
            "next_dat" => $next_dat,
            "next_them" => $next_them,
            "next_acc" => $next_acc
        );
    }
}

// ---------------------------------------------------------------------------- Create Csv
$filename = $view.".csv";

$fp = fopen($filename, 'w') or die("can't open file");

foreach ($return_arr as $fields) {
    fputcsv($fp, $fields);
}

$en_tete .= file_get_contents($filename);
file_put_contents($filename, $en_tete);

fclose($fp);


// ----------------------------------------------------------------------------  Download CSV
header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=".$filename);
header("Content-Type: application/csv; ");
readfile($filename);

// ----------------------------------------------------------------------------  Reset CSV
file_put_contents($filename, '');

exit();
