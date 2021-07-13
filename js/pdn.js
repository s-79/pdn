// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
$(function(){
	// ------------------------------------------------------------------------ Mettre en valeur le menu actif
	$("#menu_pdn").toggleClass("nav-link-toggle");
	// ------------------------------------------------------------------------ Remplissage automatique du champ ville concaténé avec le code postal
	ajaxListVille("#choixVille");
	// ------------------------------------------------------------------------ Chargement de tous les PDN
	all_Pdn();
});

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

// ----------------------------------------------------------------------------- ÉVENEMENT CHANGE SUR LE CHOIX DES VILLES
$("#choixVille").change(function(){
	const selectedVille = $("#choixVille").val();
	// ------------------------------------------------------------------------- Chargement de tous les PDN
	if (selectedVille === "0") {
		$("footer").removeClass('footer_absolute');
		all_Pdn();
	}
	// ------------------------------------------------------------------------- Chargement des PDN de la ville séléctionnée
	else {
		$("footer").addClass('footer_absolute');
		selected_Pdn(selectedVille);
	}
});

// ----------------------------------------------------------------------------- ! ! ! - - C L I C K - - ! ! !

// ----------------------------------------------------------------------------- EVEMENT CLICK SUR LA CARTE D'UN PDN
$("body").delegate( ".divfigure", "click", function() {
	const id = $(this).attr('id');
	clicked_pdn(id);
});

// ----------------------------------------------------------------------------- EVEMENT CLICK SUR L'ICONE INFOS STRUCTURE
$("body").delegate( "#btnInfosStr", "click", function() {
	$(".infosStr").toggleClass("d-none");
});
