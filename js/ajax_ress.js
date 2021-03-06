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
const cat_Get_Them = (id_Cat) => {
    $.ajax({
		url: "php/ress_Get.php",
		dataType: 'JSON',
		data : {cat_Get_Them:id_Cat},
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
const cat_Get_Ress = (id_Cat) => {
    $.ajax({
		url: "php/ress_Get.php",
		dataType: 'JSON',
		data : {cat_Get_Ress:id_Cat},
		success: function(response){
			get_Ress(response);
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
            get_Ress(response);
		}
	});
}

// ----------------------------------------------------------------------------- Récupération et affichage du détail de la ressource séléctionnée
const ress_Get_Infos = (id_Ress, divInfosOutil) => {
    $.ajax({
		url: "php/ress_Get.php",
		dataType: 'JSON',
		data : {id_ress:id_Ress},
		success: function(response){
			let infos = "";
			const len = response.length;
			for (let i = 0; i < len; i++) {
				const id = response[i].id;
				const nom = response[i].nom;
                const description = response[i].description;
                const image = response[i].image;
                const lien = response[i].lien;

            	infos += `<div id='detail${id}' class='row mx-auto borderOutDetails'>`;
            	infos += `<div class='col-12 col-sm-3 text-center'>`;
                // Ajout d'un helper pour l'alignement vertical
                infos += `<span class="helperVerticalAlign"></span>`;
            	infos += `<img src='${image}' height='150px' class='img-fluid'>`;
            	infos += `</div><div class='col-12 col-sm-9'><p class='textDescription mt-3'>${description}`;
            	if(lien) {infos += `</br></br><a href='${lien}' class='bleu liens fw-bold' target='_blank'>Lien vers la ressource <i class="fas fa-globe ps-1"></i></a>`};
            	infos += `</p></div>`;
			}
			$(divInfosOutil).html(infos);
		}
	});
}

// ----------------------------------------------------------------------------  FONCTIONS DÉFINIES
const get_Ress = response => {
    let ress = "";
    let cpt = 0;
    const len = response.length;
    for (let i = 0; i < len; i++) {
        const id = response[i].id;
        const nom = response[i].nom;
        const editeur = response[i].editeur;
        const age = response[i].age;
        cpt ++;
        if (cpt%2===0) {ress += `<div id='outil${id}' class='row borderOut mt-1 pointeur' style='background-color:#fff;'>`;}
        else {ress += `<div id='outil${id}' class='row borderOut mt-1 pointeur' style='background-color:#ccdee4;'>`;};
        ress += `<h5 class='col-10 col-sm-11 mb-1 mt-1'>${nom}`;
        if (editeur) ress += `&nbsp;-&nbsp;${editeur}`;
        if (age) ress += `&nbsp;-&nbsp;${age}`;
        ress += `</h5>`;
        ress += `<i id='chevron${id}' class='col-2 col-sm-1 fas fa-chevron-circle-down fa-lg my-auto text-center'></i></div>`;
        ress += `<div id='infos${id}' class='row borderOutInfos d-none'></div>`;
    }
    $("#divRessOut").html(ress);
}
