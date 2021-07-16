// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
$(function(){
	// ------------------------------------------------------------------------ Mettre en valeur le menu actif
	$("#menu_ress").toggleClass("nav-link-toggle");
	// ------------------------------------------------------------------------ Remplissage des catégories valides
	cat_Get();
	// ------------------------------------------------------------------------ Remplissage des thématiques de la catégorie 1
	cat_Get_Them(1);
	// ------------------------------------------------------------------------ Remplissage des ressources valides de la catégorie 1
	cat_Get_Ress(1);
});

// ----------------------------------------------------------------------------- EVEMENT CLICK SUR UNE CATÉGORIE
$("body").delegate( ".borderCat", "click", function() {
	$(".borderCat").removeClass("bg_orange");
	$(this).addClass("bg_orange");
	const id_Cat = $(this).attr('id');
	cat_Get_Them(id_Cat);
	cat_Get_Ress(id_Cat);
});

// ----------------------------------------------------------------------------- EVEMENT CLICK SUR UNE THÉMATIQUE
$("body").delegate( ".borderThem", "click", function() {
	let id_Them = $(this).attr('id');
	$(".borderThem").removeClass("bg_orange");
	$(".borderThem").removeClass("text-white");
	$(this).addClass("bg_orange");
	$(this).addClass("text-white");
	$(".infosRS").addClass("d-none");
	const idSplit = id_Them.split("them");
	id_Them = idSplit[1];
	them_Get_Ress(id_Them);
});

// ----------------------------------------------------------------------------- EVEMENT CLICK SUR UN OUTIL
$("body").delegate( ".borderOut", "click", function() {
	let id_Out = $(this).attr('id');
	const idSplit = id_Out.split("outil");
	id_Out = idSplit[1];
	const divInfosOutil = `#infos${id_Out}`;
	$(divInfosOutil).toggleClass("d-none");
	const idChevron = `#chevron${id_Out}`;
	$(idChevron).toggleClass("rotate");
	ress_Get_Infos(id_Out, divInfosOutil);
});
