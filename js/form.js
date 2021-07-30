// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ----------------------------------------------------------------------------- Remplissage des infos PDN
const pdn_id = $("#pdn_id").html();
form_Get_Pdn(pdn_id);

// ----------------------------------------------------------------------------- Récupération du mois précédent et de l'année en cours (sauf en janvier)
const d = new Date();
let m = d.getMonth(); // Mois de 0 à 11
let a = d.getFullYear();

let years = "";
const arrayYears = [2021, 2022, 2023, 2024, 2025];
for (y of arrayYears) years +=`<option value='${y}'>${y}</option>`;
$("#annee").html(years);

// c : chiffres / l : lettres --- Mois
const arrayMonth = [{"c":1,"l":"Janvier"}, {"c":2,"l":"Février"}, {"c":3,"l":"Mars"}, {"c":4,"l":"Avril"}, {"c":5,"l":"Mai"}, {"c":6,"l":"Juin"}, {"c":7,"l":"Juillet"}, {"c":8,"l":"Août"}, {"c":9,"l":"Septembre"}, {"c":10,"l":"Octobre"}, {"c":11,"l":"Novembre"}, {"c":12,"l":"Décembre"}];
const len_am = arrayMonth.length;
let month = "";
for (let i = 0; i < len_am; i++) {
	const c = arrayMonth[i].c;
	const l = arrayMonth[i].l;
	month +=`<option value='${c}'>${l}</option>`;

// en janvier "0", il propose le mois de décembre de l'année précédente
	if(m===0) {a -= 1; m = 12;}
}
$("#mois").html(month);
$("#mois").val(m);
$("#annee").val(a);

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE DU NOM DE L'APPLICATION
$("#select_nom_rs").change(function() {
	const nom_rs = $("#select_nom_rs").val();
	if(nom_rs === "Autre") {
		$("#get_nom_rs").val("");
		$("#div_nom_rs").removeClass("d-none");
	}
	else {
		$("#get_nom_rs").val(nom_rs);
		$("#div_nom_rs").addClass("d-none");
	};
});

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE NB DE FOLLOWERS
$("#followers").change(function() {
	const nb_follow = $("#followers").val();
	if(nb_follow === "Plus de 100") $("#div_nb_follow").removeClass("d-none");
	else {
		$("#div_nb_follow").addClass("d-none");
		$("#get_nb_follow").val("");
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE NB DE MESSAGES COURTS
$("#message").change(function() {
	$("#div_nb_follow").addClass("d-none");
	const nb_message = $("#message").val();
	if(nb_message === "Plus de 50") $("#div_nb_message").removeClass("d-none");
	else {
		$("#div_nb_message").addClass("d-none");
		$("#get_nb_message").val("");
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE NB D'ACCOMPAGNEMENTS ET SUIVIS
$("#acc").change(function() {
	$("#div_nb_message").addClass("d-none");
	const nb_acc = $("#acc").val();
	if(nb_acc === "Plus de 10") $("#div_nb_acc").removeClass("d-none");
	else {
		$("#div_nb_acc").addClass("d-none");
		$("#get_nb_acc").val("");
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE NB DE NOUVEAUX ACCOMPAGNEMENTS
$("#new_acc").change(function() {
	$("#div_nb_acc").addClass("d-none");
	const nb_new_acc = $("#new_acc").val();
	if(nb_new_acc === "Plus de 10") $("#div_nb_new_acc").removeClass("d-none");
	else {
		$("#div_nb_new_acc").addClass("d-none");
		$("#get_nb_new_acc").val("");
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE INITIATIVES
$("#initiatives").change(function() {
	const nb_init = $("#initiatives").val();
	$("#modal_init_header").html(`<h2 class="modal-title fw-bold text-uppercase my-1" id="exampleModalLabel">Initiatives du mois passé...</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`);
	$("#modal_init_btn").html("");
	if(nb_init !== "0") {
		let res = "";
		for(let i = 1; i <= nb_init; i++) {
			$("#modal_init_btn").append(`<button id="btn_init${i}" class="btn btn-outline-primary mt-4" type="button">Initiative n°${i}</button>`);
			res += `<div id="div_init${i}" class="d-none init">
						<h4 class="mt-3">Initiative n°${i}</h4>
						<div class="form-floating mx-3 mt-3">
							<input type="date" class="form-control" id="date_init" placeholder="Date de l'initiative *">
							<label for="date_init">Date de l'initiative *</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="intitule_init" placeholder="Intitulé">
							<label for="intitule_init">Intitulé</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="them_init" aria-label="Thématique">
								<option selected value="">Séléctionner la thématique</option>
								<option value="Lien Social (informel)">Lien Social (informel)</option>
								<option value="Vie quotidienne">Vie quotidienne</option>
								<option value="Acc. Socio-pro">Acc. Socio-pro</option>
								<option value="Famille">Famille</option>
								<option value="Mobilité">Mobilité</option>
								<option value="Santé">Santé</option>
								<option value="Addiction">Addiction</option>
								<option value="Violence">Violence</option>
								<option value="E-violence">E-violence</option>
								<option value="Logement">Logement</option>
								<option value="Sexualité">Sexualité</option>
								<option value="Autre">Autre</option>
							</select>
							<label for="them_init">Thématique</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<input type="number" class="form-control" id="nb_jeunes_init" placeholder="Nombre de jeunes">
							<label for="nb_jeunes_init">Nombre de jeunes</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="age_init" aria-label="Âge des jeunes">
								<option selected value="">Âge des jeunes</option>
								<option value="De 12 à 17 ans">De 12 à 17 ans</option>
								<option value="De 18 à 25 ans">De 18 à 25 ans</option>
								<option value="Plus de 25 ans">Plus de 25 ans</option>
						</select>
						<label for="age_init">Âge des jeunes</label>
						</div>
					</div>`;
			$(`#btn_init${i}`).click(function() {
				$(".init").addClass("d-none");
				$(`#div_init${i}`).toggleClass("d-none");
			});
		}
		$("#modal_init_div").append(res);
		$("#modal_init").modal('show');
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE NEXT INITIATIVES
$("#next_initiatives").change(function() {
	const nb_init = $("#next_initiatives").val();
	$("#modal_next_init_header").html(`<h2 class="modal-title fw-bold text-uppercase my-1" id="exampleModalLabel">Initiatives du mois prochain...</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`);
	$("#modal_next_init_btn").html("");
	if(nb_init !== "0") {
		let res = "";
		for(let i = 1; i <= nb_init; i++) {
			$("#modal_next_init_btn").append(`<button id="btn_next_init${i}" class="btn btn-outline-primary mt-4" type="button">Initiative n°${i}</button>`);
			res += `<div id="div_next_init${i}" class="d-none init">
						<h4 class="mt-3">Initiative n°${i}</h4>
						<div class="form-floating mx-3 mt-3">
							<input type="date" class="form-control" id="date_next_init" placeholder="Date de l'initiative *">
							<label for="date_next_init">Date de l'initiative *</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="intitule_next_init" placeholder="Intitulé">
							<label for="intitule_next_init">Intitulé</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="them_next_init" aria-label="Thématique">
								<option selected value="">Séléctionner la thématique</option>
								<option value="Lien Social (informel)">Lien Social (informel)</option>
								<option value="Vie quotidienne">Vie quotidienne</option>
								<option value="Acc. Socio-pro">Acc. Socio-pro</option>
								<option value="Famille">Famille</option>
								<option value="Mobilité">Mobilité</option>
								<option value="Santé">Santé</option>
								<option value="Addiction">Addiction</option>
								<option value="Violence">Violence</option>
								<option value="E-violence">E-violence</option>
								<option value="Logement">Logement</option>
								<option value="Sexualité">Sexualité</option>
								<option value="Autre">Autre</option>
							</select>
							<label for="them_next_init">Thématique</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<input type="number" class="form-control" id="nb_jeunes_next_init" placeholder="Nombre de jeunes">
							<label for="nb_jeunes_next_init">Nombre de jeunes</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="age_next_init" aria-label="Âge des jeunes">
								<option selected value="">Âge des jeunes</option>
								<option value="De 12 à 17 ans">De 12 à 17 ans</option>
								<option value="De 18 à 25 ans">De 18 à 25 ans</option>
								<option value="Plus de 25 ans">Plus de 25 ans</option>
						</select>
						<label for="age_next_init">Âge des jeunes</label>
						</div>
					</div>`;
			$(`#btn_next_init${i}`).click(function() {
				$(".init").addClass("d-none");
				$(`#div_next_init${i}`).toggleClass("d-none");
			});
		}
		$("#modal_next_init_div").append(res);
		$("#modal_next_init").modal('show');
	}
});

// ----------------------------------------------------------------------------- ! ! ! - - C L I C K - - ! ! !

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON CONFIRMER DANS LE FORMULAIRE DE COORDONNEES
$("#pdn_valide").click(function() {
	//-------------------------------------------------------------------------- Masquer la div coordo et afficher le formulaire
	$("#form_coordo").addClass("d-none");
	$("#form_form").removeClass("d-none");
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES CASES DES RESEAUX SOCIAUX
const rs = ['facebook', 'snapchat', 'instagram', 'whatsapp', 'autre1', 'autre2'];
for (e of rs) {
	const checkbox = `#${e}`;
	$(checkbox).click(function() {
		if($(checkbox).is(':checked')){
			//------------------------------------------------------------------ Réinitialisation du formulaire
	        document.getElementById("form_rs").reset();
			const rs = $(checkbox).val();
			if (rs === "Autre 1" || rs === "Autre 2" ) {
				document.getElementById("form_autre_rs").reset();
				$("#get_nom_rs").val("");
				$("#modal_nom_rs").modal('show');
			}
			else {
				$("#nom_rs").html(rs);
				$("#modal_rs").modal('show');
			}
		}
	});
};

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON DE VALIDATION DU NOM DE L'APPLICATION
$("#btn_modal_nom_rs").click(function() {
	const rs = $("#get_nom_rs").val();
	if(rs){
		$("#nom_rs").html(rs);
		$("#modal_rs").modal('show');
	}
	else{alert("Merci de choisir ou de saisir un nom d'application avant de valider.")}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LA CASE "AUTRE THÉMATIQUE"
$("#autre_them").click(function() {
	if($("#autre_them").is(':checked')) $("#modal_autre_them").modal('show');
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON ENREGISTRER
$("#form_create").click(function() {
	const uuid = uuid_gen();
	const mois = $("#mois").val();
	const annee = $("#annee").val();
	const nb_h = $("#nb_h").val();
	let smart =  $("#smart").is(':checked');
	if(smart)smart=1;else{smart=0};
	let ordi =  $("#ordi").is(':checked');
	if(ordi)ordi=1;else{ordi=0};
	let tablette =  $("#tablette").is(':checked');
	if(tablette)tablette=1;else{tablette=0};
	let consol =  $("#console").is(':checked');
	if(consol)consol=1;else{consol=0};
	let lien =  $("#lien").is(':checked');
	if(lien)lien=1;else{lien=0};
	let loisirs =  $("#loisirs").is(':checked');
	if(loisirs)loisirs=1;else{loisirs=0};
	let socio_pro =  $("#socio_pro").is(':checked');
	if(socio_pro)socio_pro=1;else{socio_pro=0};
	let parentalite =  $("#parentalite").is(':checked');
	if(parentalite)parentalite=1;else{parentalite=0};
	let sante =  $("#sante").is(':checked');
	if(sante)sante=1;else{sante=0};
	let addiction =  $("#addiction").is(':checked');
	if(addiction)addiction=1;else{addiction=0};
	let sexualite =  $("#sexualite").is(':checked');
	if(sexualite)sexualite=1;else{sexualite=0};
	let violence =  $("#violence").is(':checked');
	if(violence)violence=1;else{violence=0};
	let logement =  $("#logement").is(':checked');
	if(logement)logement=1;else{logement=0};
	let autre_them =  $("#autre_them").is(':checked');
	if(autre_them)autre_them=1;else{autre_them=0};
	const formation = $("#formation").val();
	const commentaires = $("#commentaires").val();
	const pdn_id = $("#pdn_id").val();

	// --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
	if((!smart && !ordi && !tablette && !consol) || nb_h || (!lien && !loisirs && !socio_pro && !parentalite && !sante && !addiction && !sexualite && !violence && !logement &&!autre_them)) {
		alert(`Les rubriques "Types de matériel utilisés", "Présence en ligne" et "Thématiques abordées" sont obligatoires.`);
	} else {
		// ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
		// if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,255)) {
		//
		// 	//-------------------------------------------------------------- Envoie des infos vers la BDD
		// 	evt_Create(mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires);
		//
		// }
	}
});

// ----------------------------------------------------------------------------- F O N C T I O N S  D É F I N I E S

// ----------------------------------------------------------------------------- Fonction UUID
const uuid_gen = () => {
  const s4=()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}

// ----------------------------------------------------------------------------- Fonction de vérification de la longueur du champ présentation
const vLen = (nom, champ, nbCar) => {
	if(champ.length <= nbCar) etat=true;
    else {
        alert(`La taille du champ ${nom} ne doit pas dépasser les ${nbCar} caractères.`);
        etat=false;
    }
return etat;
}
