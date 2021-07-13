// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
$(function(){
	// ------------------------------------------------------------------------ Mettre en valeur le menu actif
	$("#menu_ress").toggleClass("nav-link-toggle");
	// ------------------------------------------------------------------------ Remplissage des catégories valides
	cat_Get();
	// ------------------------------------------------------------------------ Remplissage des thématiques de la catégorie 1
	them_Get(1);
	// ------------------------------------------------------------------------ Remplissage des ressources valides de la thématique 1
	them_Get_Ress(1);
});

// ----------------------------------------------------------------------------- EVEMENT CLICK SUR UNE CATÉGORIE
$("body").delegate( ".borderCat", "click", function() {
	$(".borderCat").removeClass("bg_orange");
	$(this).addClass("bg_orange");
	const id_Cat = $(this).attr('id');
	them_Get(id_Cat);
});

// ----------------------------------------------------------------------------- EVEMENT CLICK SUR UNE THÉMATIQUE
$("body").delegate( ".borderThem", "click", function() {
	const id_Them = $(this).attr('id');
	$(".borderThem").removeClass("bg_orange");
	$(".borderThem").removeClass("text-white");
	$(this).addClass("bg_orange");
	$(this).addClass("text-white");
	$(".infosRS").addClass("d-none");
	const idSplit = id_Them.split("them");
	id = idSplit[1];
	them_Get_Ress(id);
});
