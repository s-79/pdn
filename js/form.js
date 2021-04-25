// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

$(function(){

});

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !


// ----------------------------------------------------------------------------- ! ! ! - - C L I C K - - ! ! !

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON CONFIRMER DANS LE FORMULAIRE DE COORDONNEES
$("#pdn_valide").click(function() {
	//-------------------------------------------------------------------------- Masquer la div coordo et afficher le formulaire
	$("#form_coordo").addClass("d-none");
	$("#form_form").removeClass("d-none");

});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LA CASE FACEBOOK
$("#facebook").click(function() {
	if($("#facebook").is(':checked')){
		//---------------------------------------------------------------------- Ouverture du modal
		$("#modal_facebook").modal('show');
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LA CASE 2 DANS INITIATIVES
$("#i2").click(function() {
	if($("#i2").is(':checked')){
		//---------------------------------------------------------------------- Ouverture du modal
		$("#modal_init2").modal('show');
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE TEXT INIT1 DANS LE MODAL INITIATIVE
$("#init1").click(function() {
	$(".init").addClass("d-none");
	$("#div_init1").toggleClass("d-none");
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE TEXT INIT2 DANS LE MODAL INITIATIVE
$("#init2").click(function() {
	$(".init").addClass("d-none");
	$("#div_init2").toggleClass("d-none");
});
