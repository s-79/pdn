// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ----------------------------------------------------------------------------- Récupération et affichage des catégories
const cat_Get = () => {
    $.ajax({
		url: "php/ress_Get.php",
		dataType: 'JSON',
		data : {cat:"cat"},
		success: function(response){
			let cat = "";
			const len = response.length;
			for (let i = 0; i < len; i++) {
				const id = response[i].id;
				const nom = response[i].nom;
				const icone = response[i].icone;
				cat += `<div id='${id}' class='borderCat mt-3 mb-2 mx-2 align-middle pointeur'><i class='${icone} fa-lg pe-3'></i><h3 class='d-inline text-uppercase'>${nom}</h3></div>`;
			}
			$("#divRessCat").html(cat);
			$("#1").addClass("bg_orange");
		}
	});
}

// ----------------------------------------------------------------------------- Récupération et affichage des thématiques de la catégorie séléctionnée
const them_Get = (id_Cat) => {
    $.ajax({
		url: "php/ress_Get.php",
		dataType: 'JSON',
		data : {id_cat:id_Cat},
		success: function(response){
			let them = "";
			const len = response.length;
			for (let i = 0; i < len; i++) {
				const id = response[i].id;
				const nom = response[i].nom;
				them += `<div id='them${id}' class='borderThem pointeur' style='margin:.5em;'><h5 class='text-uppercase my-1'>${nom}</h5></div>`;
			}
			$("#divRessThem").html(them);
		}
	});
}

// ----------------------------------------------------------------------------- Récupération et affichage des ressources de la thématiques séléctionnée
const them_Get_Ress = (id_Them) => {
    $.ajax({
		url: "php/ress_Get.php",
		dataType: 'JSON',
		data : {id_them:id_Them},
		success: function(response){
			let ress = "";
            let cpt = 0;
			const len = response.length;
			for (let i = 0; i < len; i++) {
				const id = response[i].id;
				const nom = response[i].nom;
                const nom_editeur = response[i].nom_editeur;
                const age = response[i].age;
                cpt ++;
            	if (cpt%2===0) {ress += `<div id='outil${id}' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#fff;'>`;}
            	else {ress += `<div id='outil${id}' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#ccdee4;'>`;};
            	ress += `<h3 class='col-10 col-sm-11 mb-1 mt-1'><span class='fw-bold'>${nom}</span>`;
            	if (nom_editeur) ress += `&nbsp;-&nbsp;${nom_editeur}`;
            	if (age) ress += `&nbsp;-&nbsp;${age}`;
            	ress += `</h3>`;
            	ress += `<i id='chevron${id}' class='col-2 col-sm-1 fas fa-chevron-circle-down fa-lg my-auto'></i></div>`;
            	ress += `<div id='detail${id}' class='row borderOutDetails d-none'></div>`;
			}
			$("#divRessOut").html(ress);
		}
	});
}

// // ----------------------------------------------------------------------------------------------------------------- Récupération et affichage des thématiques en fonction de la catégorie choisie
// const chaineXmlThem=getXmlBase("php/sqlxml.php","v_cat_them","id_categorie",idCat);
// thematique(chaineXmlThem);
//
// // -------------------------------------------------------------------------------------------------------------- Récupération et affichage des ressources de la catégorie choisie
// const chaineXmlRess=getXmlBase("php/sqlxml.php","v_cat_classer_valide","id_categorie",idCat);
// chaineRess = "";
// $("#divRessOut").html("");
// cpt = 0;
// $(chaineXmlRess).find("v_cat_classer_valide").each(function(){
// 	const id_outil = $(this).find("id_outil").text();
// 	const chaineXmlRessCat=getXmlBase("php/sqlxml.php","outil","id_outil",id_outil);
// 	ressources(chaineXmlRessCat);
// });
// });
//
// // --------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UNE THEMATIQUE
//
// // ----------------------------------------------------------------------------------------------------------------- Récupération et affichage des ressources en fonction de la thématique choisie
// $("body").delegate( ".borderThem", "click", function() {
// $(".borderThem").removeClass("selectedThem");
// $(this).addClass("selectedThem");
// let idThem = $(this).attr('id');
// const idThemSplit = idThem.split("them");
// idThem = idThemSplit[1];
//
// const chaineXmlRess=getXmlBase("php/sqlxml.php","v_outil_them_valide","id_thematique",idThem);
// chaineRess = "";
// cpt = 0;
// $(chaineXmlRess).find("v_outil_them_valide").each(function(){
// 	const id_outil = $(this).find("id_outil").text();
// 	const nom_outil = $(this).find("nom_outil").text();
// 	const nom_editeur_outil = $(this).find("nom_editeur_outil").text();
// 	const age_outil = $(this).find("age_outil").text();
// 	cpt++; // ---------------------------------------------------------------------------------------------------- 1 ligne blanche sur 2
// 	if (cpt%2===0) {chaineRess += "<div id='outil"+id_outil+"' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#fff;'>";}
// 	else {chaineRess += "<div id='outil"+id_outil+"' class='row justify-content-between borderOut mt-1 pointeur' style='background-color:#ccdee4;'>";};
// 	chaineRess += "<h3 class='col-10 col-sm-11 mb-1 mt-1'><span class='font-weight-bold'>"+nom_outil+"</span>";
// 	if (nom_editeur_outil) chaineRess += "&nbsp;-&nbsp;"+nom_editeur_outil;
// 	if (age_outil) chaineRess += "&nbsp;-&nbsp;"+age_outil;
// 	chaineRess += "</h3>";
// 	chaineRess += "<i id='chevron"+id_outil+"' class='col-2 col-sm-1 fas fa-chevron-circle-down fa-lg my-auto'></i></div>";
// 	chaineRess += "<div id='detail"+id_outil+"' class='row borderOutDetails d-none'></div>";
// });
// $("#divRessOut").html(chaineRess);
// });
//
// // ----------------------------------------------------------------------------------------------------------------- Récupération et affichage des détails de l'outil choisi
// $("body").delegate( ".borderOut", "click", function() {
// let idOut = $(this).attr('id');
// const idOutSplit = idOut.split("outil");
// idOut = idOutSplit[1];
//
// const divDetailOutil = "#detail"+idOut;
// $(divDetailOutil).toggleClass("d-block");
//
// const idChevron = "#chevron"+idOut;
// const animate = $(idChevron).toggleClass("rotate");
//
// const chaineXmlOut=getXmlBase("php/sqlxml.php","outil","id_outil",idOut);
// chaineOut = "";
// $(chaineXmlOut).find("outil").each(function(){
// 	const image_outil = $(this).find("image_outil").text();
// 	const fichier_outil = $(this).find("fichier_outil").text();
// 	const site_editeur_outil = $(this).find("site_editeur_outil").text();
// 	const description_outil = $(this).find("description_outil").text();
// 	// Enlever le borderOutDetails si besoin de supprimer l'effet de relief type ressources empilées
// 	chaineOut += "<div id='detail"+idOut+"' class='row borderOutDetails'>";
// 	chaineOut += "<div class='col-12 col-sm-3 d-block text-center'>";
// 	chaineOut += "<img src='"+image_outil+"' height='150px' class='img-fluid'>";
// 	if(fichier_outil) {chaineOut += "<h4 class='text-center initial mt-3'><a href='"+fichier_outil+"' class='blue liens font-weight-bold' target='_blank'><i class='fas fa-globe blue'></i></br>Télécharger</br>la ressource</a></h4>"};
// 	chaineOut += "</div><div class='col-12 col-sm-9'><p class='textDescription mt-3'>"+description_outil;
// 	if(site_editeur_outil) {chaineOut += "</br></br><a href='"+site_editeur_outil+"' class='blue liens font-weight-bold' target='_blank'>"+site_editeur_outil+"</a>"};
// 	chaineOut += "</p></div>";
// });
// $(divDetailOutil).html(chaineOut);
// });
//
// // --------------------------------------------------------------------------------------------------------------------- FONCTIONS DÉFINIES
