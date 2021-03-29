// -------------------------------------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	// ---------------------------------------------------------------------------------------------------------- Remplissage automatique de la liste des catégories
	const chaineXmlCatInput=getXmlBase("php/sqlxml.php","categorie","0","0");
	afficheListe("listeRecherche",chaineXmlCatInput,"categorie","id_categorie","nom_categorie");
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "MODIFIER LA CATÉGORIE"
$("#modifCat").click(function(){
// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la catégorie séléctionnée
	const selectedCat=$("#listeRecherche").val();
	const chainexmlCat=getXmlBase("php/sqlxml.php","categorie","0","0");
	const catM=getElement(chainexmlCat,"categorie","id_categorie",selectedCat,"nom_categorie");
	const iconeM=getElement(chainexmlCat,"categorie","id_categorie",selectedCat,"icone_categorie");

// -------------------------------------------------------------------------------------------------------------- Affichage des valeurs récupérées dans le formulaire
	$("#id").val("");
	$("#id").val($("#id").val() + selectedCat);
	$("#cat").val("");
	$("#cat").val($("#cat").val() + catM);
	$("#icone").val("");
	$("#icone").val($("#icone").val() + iconeM);
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SUPPRIMER LA CATÉGORIE"
$("#suppCat").click(function(){
	// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la catégorie séléctionnée
	const selectedCat=$("#listeRecherche").val();

	// -------------------------------------------------------------------------------------------------------------- Vérif : Une catégorie est-elle bien séléctionnée ?
	if(selectedCat===null){
		alert("Aucun catégorie de ressources n'a été séléctionnée")
	}
	else {
		const supprCat = suppr("php/catSuppr.php",selectedCat);
		// -------------------------------------------------------------------------------------------------------------- Actualisation de la liste des catégories
		$("#listeRecherche").html("");
		const chaineXmlCatAct=getXmlBase("php/sqlxml.php","categorie","0","0");
		afficheListe("listeRecherche",chaineXmlCatAct,"categorie","id_categorie","nom_categorie");

		// -------------------------------------------------------------------------------------------------------------- Vérif : La catégorie a-t-elle bien été supprimé de la BDD ?
		const testSuppr = exist("php/catExist.php",selectedCat);
		if (testSuppr == 0) {
			alert("La catégorie de ressources a été correctement supprimée de la base de données.");
		}
		else {
			alert("La catégorie de ressources ne peut pas être supprimée de la BDD car elle est encore associée à certaines thématiques.");
		}
	}
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// -------------------------------------------------------------------------------------------------------------- Récupération des valeurs modifiées dans les zones de saisie
	let id=$("#id").val();
	let cat=$("#cat").val();
	let icone=$("#icone").val();
	let etat = "";

	if(verifCat(cat)){
        // ------------------------------------------------------------------------------------------------------- Ajout de l'inscription dans la table catégorie
		const modifCat = catModif("php/catModif.php",id,cat,icone);
		// -------------------------------------------------------------------------------------------------------------- Actualisation de la liste des catégories
		$("#listeRecherche").html("");
		const chaineXmlCatAct=getXmlBase("php/sqlxml.php","categorie","0","0");
		afficheListe("listeRecherche",chaineXmlCatAct,"categorie","id_categorie","nom_categorie");
		alert("La catégorie de ressources a été correctement modifiée !")
	}
});

// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ présentation
const verifCat = cat => {
	lg=cat.length;
	if(lg <=50) etat=true;
    else {
    alert("La catégorie de ressources ne doit pas dépasser les 50 caractères.");
    etat=false;
    }
return etat;
}
