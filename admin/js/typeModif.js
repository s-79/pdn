// -------------------------------------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	// ---------------------------------------------------------------------------------------------------------- Remplissage automatique de la liste des structures
	const chaineXmlStrInput=getXmlBase("php/sqlxml.php","type","0","0");
	afficheListe("listeRecherche",chaineXmlStrInput,"type","id_type","nom_type");
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "MODIFIER LA STRUCTURE"
$("#modifType").click(function(){

// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la structure séléctionnée
	const selectedType=$("#listeRecherche").val();
	const chainexmlType=getXmlBase("php/sqlxml.php","type","0","0");
	const typeM=getElement(chainexmlType,"type","id_type",selectedType,"nom_type");

// -------------------------------------------------------------------------------------------------------------- Affichage des valeurs récupérées dans le formulaire
	$("#id").val("");
	$("#id").val($("#id").val() + selectedType);
	$("#type").val("");
	$("#type").val($("#type").val() + typeM);
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SUPPRIMER LA STRUCTURE"
$("#suppType").click(function(){
	// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la structure séléctionnée
	const selectedType=$("#listeRecherche").val();

	// -------------------------------------------------------------------------------------------------------------- Vérif : Une structure est-elle bien séléctionnée ?
	if(selectedType===null){
		alert("Aucun type de structure n'a été séléctionné")
	}
	else {
		const supprType = suppr("php/typeSuppr.php",selectedType);
		// -------------------------------------------------------------------------------------------------------------- Actualisation de la liste des structures
		$("#listeRecherche").html("");
		const chaineXmlTypeAct=getXmlBase("php/sqlxml.php","type","0","0");
		afficheListe("listeRecherche",chaineXmlTypeAct,"type","id_type","nom_type");

		// -------------------------------------------------------------------------------------------------------------- Vérif : La structure a-t-elle bien été supprimé de la BDD ?
		const chainexmlType=getXmlBase("php/sqlxml.php","type","0","0");
		const typeSuppr=getElement(chainexmlType,"type","id_type",selectedType,"nom_type");
		const testSuppr = exist("php/typeExist.php",typeSuppr);
		if (testSuppr == 0) {
			alert("Le type de structure a été correctement supprimée de la base de données.");
		}
		else {
			alert("Le type de structure ne peut pas être supprimé de la BDD car il est encore associé à certaines structures.");
		}
	}
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// -------------------------------------------------------------------------------------------------------------- Récupération des valeurs modifiées dans les zones de saisie
	let id=$("#id").val();
	let type=$("#type").val();
	let etat = "";

	if(verifType(type)){
        // ------------------------------------------------------------------------------------------------------- Ajout de l'inscription dans la table client
		const modifType = typeModif("php/typeModif.php",id,type);
		// -------------------------------------------------------------------------------------------------------------- Actualisation de la liste des structures
		$("#listeRecherche").html("");
		const chaineXmlTypeAct=getXmlBase("php/sqlxml.php","type","0","0");
		afficheListe("listeRecherche",chaineXmlTypeAct,"type","id_type","nom_type");
		alert("Le type de structure a été correctement modifié !")
	}
});

// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ présentation
const verifType = type => {
	lg=type.length;
	if(lg <=50) etat=true;
    else {
    alert("Le type de structure ne doit pas dépasser les 50 caractères.");
    etat=false;
    }
return etat;
}
