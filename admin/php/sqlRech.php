<?php
include("pdoRech.php");
include("base.php");
$texte=checkInput($_REQUEST['recherche']);
// $texte="iri";
$nomtable=checkInput($_REQUEST['nomtable']);
// $nomtable="structure";
$clef=checkInput($_REQUEST['clef']);
// $nomtable="structure";
$sql=new PdoXmlR($server,$user,$mdp,$db);
$xml= $sql->XmlR($nomtable,$clef,$texte);
echo $xml;

// Fonction de sécurisation des chaines de caractères remontées
function checkInput($data) {
    $data = trim($data); // Supprime les espaces en début et fin de chaîne
    $data = stripslashes($data); // Retourne une chaîne dont les antislashs on été supprimés.
    $data = htmlspecialchars($data); // Convertit les caractères spéciaux en entités HTML
    return $data;
}
?>
