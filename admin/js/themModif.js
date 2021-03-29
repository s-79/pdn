// -------------------------------------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	// ----------------------------------------------------------------------------- Remplissage automatique du champ catégorie
	const chaineXmlCat=getXmlBase("php/sqlxml.php","categorie","0","0");
	afficheListe("cat",chaineXmlCat,"categorie","id_categorie","nom_categorie");
	afficheListe("newCat",chaineXmlCat,"categorie","id_categorie","nom_categorie");

	// ----------------------------------------------------------------------------- Remplissage automatique du champ thématique
	const chaineXmlThem=getXmlBase("php/sqlxml.php","thematique","0","0");
	afficheListe("listeRecherche",chaineXmlThem,"thematique","id_thematique","nom_thematique");
});

// ------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE CHOIX DES CATEGORIES
$("#cat").change(function(){

	const choixCat=$("#cat").val();
	// -------------------------------------------------------------------------------------------------------------- Si la valeur "toutes les catégories" ou une ville en particulier a été choisie
	if (choixCat==="0"){
		xmlThem=getXmlBase("php/sqlxml.php","thematique","0","0");
	}
	else {
		xmlThem=getXmlBase("php/sqlxml.php","thematique","id_categorie",choixCat);
	}
	$("#listeRecherche").html("");
	afficheListe("listeRecherche",xmlThem,"thematique","id_thematique","nom_thematique");
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT KEYUP DANS LA ZONE DE RECHERCHE
// $("#zoneTexte").keyup(function(){
// 	const thematiqueRecherche = $("#zoneTexte").val();
// 	const resultatRecherche = rech("php/sqlRech.php",thematiqueRecherche,"thematique","nom_thematique");
// 	$("#listeRecherche").html("");
// 	afficheListe("listeRecherche",resultatRecherche,"thematique","id_thematique","nom_thematique");
// });

// ------------------------------------------------------------------------------------------------------------------ ÉVENEMENT CLICK SUR LE BOUTON "MODIFIER LA THÉMATIQUE"
$("#modifThem").click(function(){
	// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la thématique séléctionnée
	const selectedThem=$("#listeRecherche").val();
	const chainexmlThem=getXmlBase("php/sqlxml.php","thematique","0","0");
	const themM=getElement(chainexmlThem,"thematique","id_thematique",selectedThem,"nom_thematique");
	$("#them").val(themM);

	if(selectedThem===null){
		alert("Aucune thématique n'a été séléctionnée")
	}
	else {
	// -------------------------------------------------------------------------------------------------------------- Affichage liste des catégories ac la catégorie actuelle en 1er
		const idCatM=getElement(chainexmlThem,"thematique","id_thematique",selectedThem,"id_categorie");
		const chaineXmlCat=getXmlBase("php/sqlxml.php","categorie","0","0");
		const nomCatM=getElement(chaineXmlCat,"categorie","id_categorie",idCatM,"nom_categorie");

		const catAff= "<option value='"+idCatM+"'>"+nomCatM+"</option>";
		$("#newCat").html("");
		$("#newCat").prepend(catAff);
		afficheListe("newCat",chaineXmlCat,"categorie","id_categorie","nom_categorie");

	// -------------------------------------------------------------------------------------------------------------- Affichage des valeurs récupérées dans le formulaire
		$("#id").val("");
		$("#id").val($("#id").val() + selectedThem);
		$("#them").val("");
		$("#them").val($("#them").val() + themM);
	}
});

// -------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SUPPRIMER LA THEMATIQUE"
$("#suppThem").click(function(){
	// ---------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la thématique séléctionnée
	const selectedThem=$("#listeRecherche").val();

	// ---------------------------------------------------------------------------------------------------------------- Vérif : Une thématique est-elle bien séléctionnée ?
	if(selectedThem===null){
		alert("Aucun thématique de ressources n'a été séléctionnée")
	}
	else {
		const supprThem = suppr("php/themSuppr.php",selectedThem);
		// -------------------------------------------------------------------------------------------------------------- Actualisation de la liste des thématiques
		$("#listeRecherche").html("");
		const chaineXmlThemAct=getXmlBase("php/sqlxml.php","thematique","0","0");
		afficheListe("listeRecherche",chaineXmlThemAct,"thematique","id_thematique","nom_thematique");

		// -------------------------------------------------------------------------------------------------------------- Vérif : La thématique a-t-elle bien été supprimé de la BDD ?
		const testSuppr = exist("php/themExist.php",selectedThem);
		if (testSuppr == 0) {
			alert("La thématique a été correctement supprimée de la base de données.");
		}
		else {
			alert("La thématique ne peut pas être supprimée de la BDD car elle est encore associé à certains outils.");
		}
	}
});

// --------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// ----------------------------------------------------------------------------------------------------------------- Récupération des valeurs modifiées dans les zones de saisie
	let id = $("#id").val();
	let them = $("#them").val();
	let cat = $("#newCat").val();
	let etat = "";
	alert(cat);

	if(verifThem(them)){
        // ------------------------------------------------------------------------------------------------------------- Ajout de l'inscription dans la table thématique
		const modifThem = themModif("php/themModif.php",id,them,cat);
	}

	alert("La thématique a été correctement modifiée !")
});

// ---------------------------------------------------------------------------------------------------------------------- FONCTIONS DEFINIES

// ---------------------------------------------------------------------------------------------------------------------- Fonction vérification de la longueur du champ présentation
const verifThem = them => {
	lg=them.length;
	if(lg <=50) etat=true;
    else {
    alert("La thématique de ressources ne doit pas dépasser les 50 caractères.");
    etat=false;
    }
return etat;
}
