let them = "";
let cat = "";
let etat = true;

// --------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){

	// ----------------------------------------------------------------------------- Remplissage automatique du champ catégorie
	const chaineXmlCat=getXmlBase("php/sqlxml.php","categorie","0","0");
	afficheListe("cat",chaineXmlCat,"categorie","id_categorie","nom_categorie");
});

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// ------------------------------------------------------------------------- Récupération des valeurs dans les zones de saisie au moment du click
	them=$("#them").val();
	cat=$("#cat").val();

	if(estRempli() && verifThemLg(them)){
		// --------------------------------------------------------------------- Ajout de l'inscription dans la table thématique
		const ajoutThem = themAjout("php/themAjout.php",them,cat);

        alert("La thématique a été correctement ajoutée à la base de données");
	}
});

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK POUR REMETTRE LE STYLE INITALE DANS LES ZONES INPUT DU FORMULAIRE
$(".form-control,.form-control-sm").click(function(){
		$(this).css("border","none");
});


// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Fonction test remplissage des zones de saisies
const estRempli = () => {
	if(!them){
		$("#them").css("border","solid 2px #d82c2e");
		etat=false;
	}
	return etat;
}

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ Thématique
const verifThemLg = them => {
	lg=them.length;
	if(lg <=50) etat=true;
    else {
    alert("La description de la thématique de ressources ne doit pas dépasser les 50 caractères.");
    etat=false;
    }
	return etat;
}
