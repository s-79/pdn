let chaineCat = "";
let chaineThem = "";
let chaineRess = "";
let cpt = 0;

$(function(){
	// -------------------------------------------------------------------------------------------------------------- Mettre en valeur le menu actif
	$("#outMenu").toggleClass("nav-link-toggle");

	// -------------------------------------------------------------------------------------------------------------- Récupération et affichage des catégories
	const chaineXmlCat=getXmlBase("php/sqlxml.php","categorie","0","0");
	$(chaineXmlCat).find("categorie").each(function(){
		const id_cat = $(this).find("id_categorie").text();
		const nom_cat = $(this).find("nom_categorie").text();
		const icone_cat = $(this).find("icone_categorie").text();
		chaineCat += "<div id='"+id_cat+"' class='borderCat mb-1 mt-1 mr-3 align-middle pointeur'><i class='"+icone_cat+" fa-lg'></i>&nbsp;&nbsp;&nbsp;<h2 class='d-inline mb-5'>"+nom_cat+"</h2></div>";
	});
	$("#divRessCat").html(chaineCat);
	$("#1").addClass("orange-bg");

	// -------------------------------------------------------------------------------------------------------------- Récupération et affichage des thématiques de la catégorie 1
	const chaineXmlThem=getXmlBase("php/sqlxml.php","v_cat_them","id_categorie","1");
	thematique(chaineXmlThem);

	// -------------------------------------------------------------------------------------------------------------- Récupération et affichage des outils de la catégorie 1
	const chaineXmlRess=getXmlBase("php/sqlxml.php","v_cat_classer_valide","id_categorie","1");
	$(chaineXmlRess).find("v_cat_classer_valide").each(function(){
		const id_outil = $(this).find("id_outil").text();
		const chaineXmlRessCat=getXmlBase("php/sqlxml.php","outil","id_outil",id_outil);
		ressources(chaineXmlRessCat);
	});
});

// --------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UNE CATÉGORIE

$("body").delegate( ".borderCat", "click", function() {
	$(".borderCat").removeClass("orange-bg");
	$(this).addClass("orange-bg");
	const idCat = $(this).attr('id');

	// ----------------------------------------------------------------------------------------------------------------- Récupération et affichage des thématiques en fonction de la catégorie choisie
	const chaineXmlThem=getXmlBase("php/sqlxml.php","v_cat_them","id_categorie",idCat);
	thematique(chaineXmlThem);

	// -------------------------------------------------------------------------------------------------------------- Récupération et affichage des ressources de la catégorie choisie
	const chaineXmlRess=getXmlBase("php/sqlxml.php","v_cat_classer_valide","id_categorie",idCat);
	chaineRess = "";
	$("#divRessOut").html("");
	cpt = 0;
	$(chaineXmlRess).find("v_cat_classer_valide").each(function(){
		const id_outil = $(this).find("id_outil").text();
		const chaineXmlRessCat=getXmlBase("php/sqlxml.php","outil","id_outil",id_outil);
		ressources(chaineXmlRessCat);
	});
});

// --------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UNE THEMATIQUE

// ----------------------------------------------------------------------------------------------------------------- Récupération et affichage des ressources en fonction de la thématique choisie
$("body").delegate( ".borderThem", "click", function() {
	$(".borderThem").removeClass("selectedThem");
	$(this).addClass("selectedThem");
	let idThem = $(this).attr('id');
	const idThemSplit = idThem.split("them");
	idThem = idThemSplit[1];

	const chaineXmlRess=getXmlBase("php/sqlxml.php","v_outil_them_valide","id_thematique",idThem);
	chaineRess = "";
	cpt = 0;
	$(chaineXmlRess).find("v_outil_them_valide").each(function(){
		const id_outil = $(this).find("id_outil").text();
		const nom_outil = $(this).find("nom_outil").text();
		const nom_editeur_outil = $(this).find("nom_editeur_outil").text();
		const age_outil = $(this).find("age_outil").text();
		cpt++; // ---------------------------------------------------------------------------------------------------- 1 ligne blanche sur 2
		if (cpt%2===0) {chaineRess += "<div id='outil"+id_outil+"' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#fff;'>";}
		else {chaineRess += "<div id='outil"+id_outil+"' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#ccdee4;'>";};
		chaineRess += "<h3 class='col-10 col-sm-11 mb-1 mt-1'><span class='font-weight-bold'>"+nom_outil+"</span>";
		if (nom_editeur_outil) chaineRess += "&nbsp;-&nbsp;"+nom_editeur_outil;
		if (age_outil) chaineRess += "&nbsp;-&nbsp;"+age_outil;
		chaineRess += "</h3>";
		chaineRess += "<i id='chevron"+id_outil+"' class='col-2 col-sm-1 fas fa-chevron-circle-down fa-lg my-auto'></i></div>";
		chaineRess += "<div id='detail"+id_outil+"' class='row borderOutDetails d-none'></div>";
	});
	$("#divRessOut").html(chaineRess);
});

// ----------------------------------------------------------------------------------------------------------------- Récupération et affichage des détails de l'outil choisi
$("body").delegate( ".borderOut", "click", function() {
	let idOut = $(this).attr('id');
	const idOutSplit = idOut.split("outil");
	idOut = idOutSplit[1];

	const divDetailOutil = "#detail"+idOut;
	$(divDetailOutil).toggleClass("d-block");

	const idChevron = "#chevron"+idOut;
	const animate = $(idChevron).toggleClass("rotate");

	const chaineXmlOut=getXmlBase("php/sqlxml.php","outil","id_outil",idOut);
	chaineOut = "";
	$(chaineXmlOut).find("outil").each(function(){
		const image_outil = $(this).find("image_outil").text();
		const fichier_outil = $(this).find("fichier_outil").text();
		const site_editeur_outil = $(this).find("site_editeur_outil").text();
		const description_outil = $(this).find("description_outil").text();
		// Enlever le borderOutDetails si besoin de supprimer l'effet de relief type ressources empilées
		chaineOut += "<div id='detail"+idOut+"' class='row borderOutDetails'>";
		chaineOut += "<div class='col-12 col-sm-3 d-block text-center'>";
		chaineOut += "<img src='"+image_outil+"' height='150px' class='img-fluid'>";
		if(fichier_outil) {chaineOut += "<h4 class='text-center initial mt-3'><a href='"+fichier_outil+"' class='blue liens font-weight-bold' target='_blank'><i class='fas fa-globe blue'></i></br>Télécharger</br>la ressource</a></h4>"};
		chaineOut += "</div><div class='col-12 col-sm-9'><p class='textDescription mt-3'>"+description_outil;
		if(site_editeur_outil) {chaineOut += "</br></br><a href='"+site_editeur_outil+"' class='blue liens font-weight-bold' target='_blank'>"+site_editeur_outil+"</a>"};
		chaineOut += "</p></div>";
	});
	$(divDetailOutil).html(chaineOut);
});

// --------------------------------------------------------------------------------------------------------------------- FONCTIONS DÉFINIES

const thematique = chaineXmlThem => {
	chaineThem = "";
	$(chaineXmlThem).find("v_cat_them").each(function(){
		const id_them = $(this).find("id_thematique").text();
		const nom_them = $(this).find("nom_thematique").text();
		chaineThem += "<div id='them"+id_them+"' class='borderThem m-1 pointeur'><h3 class='mb-1 mt-1'>"+nom_them+"</h3></div>";
	});
	$("#divRessThem").html(chaineThem);
}

const ressources = chaineXmlRessCat => {
	$(chaineXmlRessCat).find("outil").each(function(){
		const id_outil = $(this).find("id_outil").text();
		const nom_outil = $(this).find("nom_outil").text();
		const nom_editeur_outil = $(this).find("nom_editeur_outil").text();
		const age_outil = $(this).find("age_outil").text();
		cpt++; // ---------------------------------------------------------------------------------------------------- 1 ligne blanche sur 2
		if (cpt%2===0) {chaineRess += "<div id='outil"+id_outil+"' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#fff;'>";}
		else {chaineRess += "<div id='outil"+id_outil+"' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#ccdee4;'>";};
		chaineRess += "<h3 class='col-10 col-sm-11 mb-1 mt-1'><span class='font-weight-bold'>"+nom_outil+"</span>";
		if (nom_editeur_outil) chaineRess += "&nbsp;-&nbsp;"+nom_editeur_outil;
		if (age_outil) chaineRess += "&nbsp;-&nbsp;"+age_outil;
		chaineRess += "</h3>";
		chaineRess += "<i id='chevron"+id_outil+"' class='col-2 col-sm-1 fas fa-chevron-circle-down fa-lg my-auto'></i></div>";
		chaineRess += "<div id='detail"+id_outil+"' class='row borderOutDetails d-none'></div>";
	});
	$("#divRessOut").html(chaineRess);
}
