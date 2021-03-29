let type = "";
let etat = true;

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// ------------------------------------------------------------------------- Récupération des valeurs dans les zones de saisie au moment du click
	type=$("#type").val();
	if(estRempli() && verifTypeLg(type)){
		// --------------------------------------------------------------------- Ajout de l'inscription dans la table client
		const ajoutType = typeAjout("php/typeAjout.php",type);
        alert("Le type de structure a été correctement ajouté à la base de données");
	}
});

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK POUR REMETTRE LE STYLE INITALE DANS LES ZONES INPUT DU FORMULAIRE
$(".form-control,.form-control-sm").click(function(){
		$(this).css("border","none");
});


// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Fonction test remplissage des zones de saisies
const estRempli = () => {
	if(!type){
		$("#type").css("border","solid 2px #d82c2e");
		etat=false;
	}
	return etat;
}

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ type
const verifTypeLg = type => {
	lg=type.length;
	if(lg <=50) etat=true;
    else {
    alert("La description du type de structure ne doit pas dépasser les 50 caractères.");
    etat=false;
    }
	return etat;
}
