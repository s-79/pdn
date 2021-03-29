<?php

include("pdoxml.php");
include("base.php");
$nomtable=checkInput($_REQUEST['nomtable']);
$clef=checkInput($_REQUEST['clef']);
$valeur=checkInput($_REQUEST['valeur']);

$sql=new PdoXml($server,$user,$mdp,$db);
$xml= $sql->Xml($nomtable,$clef,$valeur);
echo $xml;

// Fonction de sécurisation des chaines de caractères remontées
function checkInput($data) {
    $data = trim($data); // Supprime les espaces en début et fin de chaîne
    $data = stripslashes($data); // Retourne une chaîne dont les antislashs on été supprimés.
    $data = htmlspecialchars($data); // Convertit les caractères spéciaux en entités HTML

    return $data;
}
?>
