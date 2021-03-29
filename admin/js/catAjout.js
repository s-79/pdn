let cat = "";
let etat = true;

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// ------------------------------------------------------------------------- Récupération des valeurs dans les zones de saisie au moment du click
	cat=$("#cat").val();
	icone=$("#icone").val();
	if(estRempli() && verifCatLg(cat)){
		// --------------------------------------------------------------------- Ajout de l'inscription dans la table catégorie
		const ajoutCat = catAjout("php/catAjout.php",cat,icone);
        alert("La catégorie a été correctement ajoutée à la base de données");
	}
});

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK POUR REMETTRE LE STYLE INITALE DANS LES ZONES INPUT DU FORMULAIRE
$(".form-control,.form-control-sm").click(function(){
		$(this).css("border","none");
});


// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Fonction test remplissage des zones de saisies
const estRempli = () => {
	if(!cat){
		$("#cat").css("border","solid 2px #d82c2e");
		etat=false;
	}
	if(!icone){
		$("#icone").css("border","solid 2px #d82c2e");
		etat=false;
	}
	return etat;
}

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ catégorie
const verifCatLg = cat => {
	lg=cat.length;
	if(lg <=50) etat=true;
    else {
    alert("La description de la catégorie ne doit pas dépasser les 50 caractères.");
    etat=false;
    }
	return etat;
}
