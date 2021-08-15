// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

$(function(){
	// ------------------------------------------------------------------------ Mettre en valeur le menu actif
	$("#menu_str").toggleClass("nav-link-toggle");
	// ------------------------------------------------------------------------ Remplissage automatique du champ ville concaténé avec le code postal
	ajaxListVille("#choixVille");
	// ------------------------------------------------------------------------ Chargement de toutes les structures
	all_Str();
});

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

// ----------------------------------------------------------------------------- ÉVENEMENT CHANGE SUR LE CHOIX DES VILLES
$("#choixVille").change(function(){
	const selectedVille = $("#choixVille").val();
	// ------------------------------------------------------------------------- Chargement de toutes les structures
	if (selectedVille === "0") {
		$("footer").removeClass('footer_absolute');
		all_Str();
	}
	// ------------------------------------------------------------------------- Chargement des structures de la ville séléctionnée
	else {
		$("footer").addClass('footer_absolute');
		selected_Str(selectedVille);
	}
});

// ----------------------------------------------------------------------------- ! ! ! - - C L I C K - - ! ! !

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UNE VIGNETTE
$("body").delegate( ".card", "click", function() {
	// ------------------------------------------------------------------------- Récupération de l'id de la structure séléctionnée
	const idStr = $(this).attr('id');
	str_Get_Infos(idStr);
	str_Get_Pdn(idStr);
});
