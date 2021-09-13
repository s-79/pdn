// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ----------------------------------------------------------------------------- Récupération du mois précédent et de l'année en cours (sauf en janvier) - fonction dans functions
datSelect();

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

// ---------------------------------------------------------------------------- A SUUPRIMER AVANT JANVIER 2022 - ÉVENEMENT CHANGE DANS LE NOM DU MOIS
$("#mois").change(function() {
	const mois = $("#mois").val();
	if(parseInt(mois) === 0) {
		$("#annee").val("2021");
		$("#annee").prop("disabled", true)
	}
	else {
		$("#annee").prop("disabled", false)
	}
});

$("#mois,#annee").change(function() {
	const mois = $("#mois").val();
	const annee = $("#annee").val();
	if (parseInt(annee) === 2021) {
		$("#next_init_tmp").addClass("d-none");
		$("#next_init_tog").removeClass("d-none");
		if(parseInt(mois) === 8 || parseInt(mois) === 9 || parseInt(mois) === 10 || parseInt(mois) === 11 || parseInt(mois) === 12) {
			$("#next_init_tog").addClass("d-none");
			$("#next_init_tmp").removeClass("d-none");
		}
	}
	else {
		$("#next_init_tog").addClass("d-none");
		$("#next_init_tmp").removeClass("d-none");
	}

});

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

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE INITIATIVES
$("#initiatives").change(function() {
	const nb_init = $("#initiatives").val();
	// ------------------------------------------------------------------------- Chargement du header "Initiatives passées"
	$("#modal_init_header").html(`<h2 class="modal-title fw-bold text-uppercase my-1" style="font-size:1.1em;">Initiatives numériques du mois précédent...</h2><button id="btn_close_init" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`);
	$("#modal_init_btn").html("");
	if(nb_init !== "0") {
		let res = "";
		for(let i = 1; i <= nb_init; i++) {
			$("#modal_init_btn").append(`<button id="btn_init${i}" class="btn btn-outline-primary mx-1 my-2" type="button">Initiative n°${i}</button>`);
			res += `<div id="div_init${i}" class="d-none init mb-3">
						<h2 class="mt-2">Initiative n°${i}</h2>
						<div class="form-floating mx-3 mt-3">
							<input type="date" class="form-control" id="date_init${i}" placeholder="Date de l'initiative *">
							<label for="date_init${i}">Date de l'initiative *</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="intitule_init${i}" placeholder="Intitulé *">
							<label for="intitule_init${i}">Intitulé *</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="them_init${i}" aria-label="Thématique *">
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
							<label for="them_init${i}">Thématique *</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<input type="number" class="form-control" id="nb_jeunes_init${i}" placeholder="Nombre de jeunes *">
							<label for="nb_jeunes_init${i}">Nombre de jeunes *</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="age_init${i}" aria-label="Âge des jeunes *">
								<option selected value="">Âge des jeunes</option>
								<option value="Moins de 12 ans">Moins de 12 ans</option>
								<option value="De 12 à 17 ans">De 12 à 17 ans</option>
								<option value="De 18 à 25 ans">De 18 à 25 ans</option>
								<option value="Plus de 25 ans">Plus de 25 ans</option>
						</select>
						<label for="age_init${i}">Âge des jeunes *</label>
						</div>
					</div>`;
			$(`#btn_init${i}`).click(function() {
				$(".init").addClass("d-none");
				$(`#div_init${i}`).toggleClass("d-none");
			});
		}
		$("#modal_init_div").html(res);
		$("#modal_init").modal('show');
	}

	// ------------------------------------------------------------------------- Ouvrir la div de l'initiative 1
	$("#div_init1").removeClass("d-none");

	// ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LA CROIX DES INITIATIVES PASSÉES
	$("#btn_close_init").click(function() {$("#initiatives").val("0");});
});

// ---------------------------------------------------------------------------- ÉVENEMENT CHANGE DANS LA LISTE NEXT INITIATIVES
$("#next_initiatives").change(function() {
	const nb_init = $("#next_initiatives").val();
	// ------------------------------------------------------------------------- Chargement du header "Initiatives à venir"
	$("#modal_next_init_header").html(`<h2 class="modal-title fw-bold text-uppercase my-1" style="font-size:1.1em;">Initiatives numériques du mois prochain...</h2><button id="btn_close_next_init" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`);
	$("#modal_next_init_btn").html("");
	if(nb_init !== "0") {
		let res = "";
		for(let i = 1; i <= nb_init; i++) {
			$("#modal_next_init_btn").append(`<button id="btn_next_init${i}" class="btn btn-outline-primary mx-1 my-2" type="button">Initiative n°${i}</button>`);
			res += `<div id="div_next_init${i}" class="d-none init">
						<h2 class="mt-2">Initiative n°${i}</h2>
						<div class="form-floating mx-3 mt-3">
							<input type="date" class="form-control" id="date_next_init${i}" placeholder="Date approximative de l'initiative *">
							<label for="date_next_init${i}">Date approximative de l'initiative *</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="them_next_init${i}" aria-label="Thématique prévue *">
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
							<label for="them_next_init${i}">Thématique prévue *</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="acc_next_init${i}" aria-label="Besoin d'accompagnement ou de ressources ? *">
								<option selected value="Oui">Oui</option>
								<option value="Non">Non</option>
								<option value="Peut-être">Peut-être</option>
						</select>
						<label for="acc_next_init${i}">Besoin d'accompagnement ? *</label>
						</div>
					</div>`;
			$(`#btn_next_init${i}`).click(function() {
				$(".init").addClass("d-none");
				$(`#div_next_init${i}`).toggleClass("d-none");
			});
		}
		$("#modal_next_init_div").html(res);
		$("#modal_next_init").modal('show');
	}

	// ------------------------------------------------------------------------- Ouvrir la div de l'initiative 1
	$("#div_next_init1").removeClass("d-none");

	// ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LA CROIX DES INITIATIVES PASSÉES
	$("#btn_close_next_init").click(function() {$("#next_initiatives").val("0");});
});

// ----------------------------------------------------------------------------- ! ! ! - - C L I C K - - ! ! !

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON CONFIRMER DANS LE FORMULAIRE DE COORDONNEES
$("#pdn_valide").click(function() {
	//-------------------------------------------------------------------------- Masquer la div coordo et afficher le formulaire
	$("#form_coordo").addClass("d-none");
	$("#form_form1").removeClass("d-none");
	$("#form_form2").removeClass("d-none");
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES CASES DES RESEAUX SOCIAUX
const rs = ['facebook', 'snapchat', 'instagram', 'whatsapp', 'autre1', 'autre2'];
for (e of rs) {
	const checkbox = `#${e}`;
	$(checkbox).click(function() {
		//---------------------------------------------------------------------- Masquage de la div pour saisir un nom de rs si elle avait été ouverte au préalable
		$("#div_nom_rs").addClass("d-none");

		if($(checkbox).is(':checked')){
			const rs = $(checkbox).val();
			//------------------------------------------------------------------ Création des en-têtes avec id spécifique
			$("#div_header_rs").html(`<h2 class="modal-title fw-bold text-uppercase my-1" style="font-size:1.1em;">Sur l'application <span id="nom_rs${rs}"></span> ... </h2><button id="btn_close_modal_rs" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`);
			$("#div_header_nom_rs").html(`<h2 class="modal-title fw-bold text-uppercase my-1">Nom de l'application</h2><button id="btn_close_modal_nom_rs${rs}" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`);
			$("#div_footer_nom_rs").html(`<button id="btn_modal_nom_rs${rs}" type="button" class="btn btn-primary">Valider</button>`);
			//------------------------------------------------------------------ Décochage de la checkbox si on cic sur la croix dans le modal rs
			$("#btn_close_modal_rs").click(function() {$(checkbox).prop("checked", false);});

			//------------------------------------------------------------------ Réinitialisation du formulaire
	        document.getElementById("form_rs").reset();
			if (rs === "autre1" || rs === "autre2" ) {
				document.getElementById("form_autre_rs").reset();

				//-------------------------------------------------------------- Décochage de la checkbox si on cic sur la croix dans le modal nom_rs
				$(`#btn_close_modal_nom_rs${rs}`).click(function() {$(checkbox).prop("checked", false);});

				$("#get_nom_rs").val("");
				$("#modal_nom_rs").modal('show');

				// ------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON DE VALIDATION DU NOM DE L'APPLICATION
				$(`#btn_modal_nom_rs${rs}`).click(function() {
					//---------------------------------------------------------- Recochage si besoin de la checkbox si on cic sur la croix dans le modal nom_rs
					$(checkbox).prop("checked", true);

					const get_nom_rs = $("#get_nom_rs").val();
					if(get_nom_rs){
						$(`#nom_rs${rs}`).html(get_nom_rs);
						$("#modal_rs").modal('show');
					}
					else {
						$("#infosMess").html("Merci de choisir ou de saisir un nom d'application avant de valider.");
						$("#modalFormInfos").modal('show');
					}
				});
			}
			else {
				$(`#nom_rs${rs}`).html(rs);
				$("#modal_rs").modal('show');
			}
			//------------------------------------------------------------------ Attribution d'un id spécifique à chaque bouton valider
			const modal_rs_footer = `<button id="btn_modal_${rs}" type="button" class="btn btn-primary">Valider</button>`;
			$("#modal_rs_footer").html(modal_rs_footer);

			// ----------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON DE VALIDATION
			const btn_modal_rs = `#btn_modal_${rs}`;
			$(btn_modal_rs).click(function() {
				let arrayFacebook = [];
				let arraySnapchat = [];
				let arrayInstagram = [];
				let arrayWhatsapp = [];
				let arrayAutre1 = [];
				let arrayAutre2 = [];

				// n : name / v : variable (tableau vide)
				const arrayRS = [{"n":"facebook","v":arrayFacebook}, {"n":"snapchat","v":arraySnapchat}, {"n":"instagram","v":arrayInstagram}, {"n":"whatsapp","v":arrayWhatsapp}, {"n":"autre1","v":arrayAutre1}, {"n":"autre2","v":arrayAutre2}];
				const len_arrayRS = arrayRS.length;
				for (let i = 0; i < len_arrayRS; i++) {
					const n = arrayRS[i].n;
					const v = arrayRS[i].v;

					// ---------------------------------------------------------  Récupération des valeurs
					let nom = strUpFirst($(`#nom_rs${n}`).text());
					const maitrise = $("#maitrise").val();
					const age = $("#age").val();
					const followers = $("#followers").val();
					const messages = $("#messages").val();
					const acc = $("#acc").val();
					const new_acc = $("#new_acc").val();

					// ---------------------------------------------------------  Remplissage et stockage des tableaux de chaque RS utilisé avec les valeurs saisies
					if(rs === n) {
						if (!maitrise || !age || !followers || !messages || !acc || !new_acc) {
							$("#infosMess").html("Merci de remplir tous les champs du formulaire avant de valider.");
							$("#modalFormInfos").modal('show');
						}
						else {
							v.push(nom);
							v.push(maitrise);
							v.push(age);
							v.push(followers);
							v.push(messages);
							v.push(acc);
							v.push(new_acc);

							sessionStorage.setItem(n, JSON.stringify(v));
							$("#modal_rs").modal('hide');
							$("#modal_nom_rs").modal('hide');
						}
					}
				}
			});
		}
		else {
			const rs = $(checkbox).val();
			sessionStorage.removeItem(rs);
		}
	});
};

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS VALIDER DES INITIATIVES PASSÉES
$("#btn_modal_init").click(function() {
	const nb_init = $("#initiatives").val();
	let array1 = [];
	let array2 = [];
	let array3 = [];
	let array4 = [];
	let array5 = [];
	let array6 = [];
	let array_v_finished = [];
	let array_v_unfinished = [];
	let array_nb_jeunes = [];
	// n : name / v : variable (tableau vide)
	const arrayInit = [{"n":1,"v":array1}, {"n":2,"v":array2}, {"n":3,"v":array3}, {"n":4,"v":array4}, {"n":5,"v":array5}, {"n":6,"v":array6}];
	for (let i = 0; i < nb_init; i++) {
		const n = arrayInit[i].n;
		const v = arrayInit[i].v;
		let date = "";
		let intitule = "";
		let them = "";
		let nb_jeunes = "";
		let age = "";

		date = $(`#date_init${n}`).val();
		intitule = $(`#intitule_init${n}`).val();
		them = $(`#them_init${n}`).val();
		nb_jeunes = $(`#nb_jeunes_init${n}`).val();
		age = $(`#age_init${n}`).val();

		//---------------------------------------------------------------------- Remplissage du array avec les valeurs saisies
		v.push(n);
		if(date)v.push(date);
		if(intitule)v.push(intitule);
		if(them)v.push(them);
		if(age)v.push(age);

		//---------------------------------------------------------------------- Si le champs nombre de jeune contient autre chose qu'un nombre, il remonte vide.
		//---------------------------------------------------------------------- Envoi du champ vide vers l'array v pour valider la lenght de 6 puis envoi du n° du tableau vers array_nb_jeunes pour afficher les formulaires qui ne contiennt pas de chiffres
		if(nb_jeunes) v.push(nb_jeunes);
		else {
			v.push(nb_jeunes);
			array_nb_jeunes.push(n);
			}

		const len_v = v.length;
		if(len_v < 6) array_v_unfinished.push(n);
		else {
			array_v_finished.push(n);
			const init = `init${n}`;
			sessionStorage.setItem(init, JSON.stringify(v));
		}
	}

	if(array_v_unfinished.length > 0) {
		let al = "";
		if(array_v_unfinished.length ===1) al = "Merci de remplir tous les champs de l'initiative n°";
		else{al = "Merci de remplir tous les champs des initiatives n°";}
		for(e of array_v_unfinished) {
			al += ` ${e},`;
		}
		al += " ou de choisir un autre nombre d'initiatives."
		$("#infosMess").html(al);
		$("#modalFormInfos").modal('show');

	}
	else {
		if(array_nb_jeunes.length > 0) {
			let nb = "";
			if(array_nb_jeunes.length ===1) nb = `Le champ "Nombre de jeunes" de l'initiative n°`;
			else{nb = `Le champ "Nombre de jeunes" des initiatives n°`;}

			for(e of array_nb_jeunes) {
				nb += ` ${e},`;
			}
			nb += " doit être rempli et ne doit comporter que des chiffres."
			$("#infosMess").html(nb);
			$("#modalFormInfos").modal('show');
		}
		else {
			const nb_array_finished = array_v_finished.length;
			$("#modal_init").modal('hide');
			$("#infosMess").html(`${nb_array_finished} initiative(s) passée(s) ont été ajoutée(s) au formulaire.`);
			$("#modalFormInfos").modal('show');
		}
	}
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS VALIDER DES INITIATIVES À VENIR
$("#btn_modal_next_init").click(function() {
	const nb_init = $("#next_initiatives").val();
	let array1 = [];
	let array2 = [];
	let array3 = [];
	let array4 = [];
	let array5 = [];
	let array6 = [];
	let array_v_finished = [];
	let array_v_unfinished = [];
	// n : name / v : variable (tableau vide)
	const arrayInit = [{"n":1,"v":array1}, {"n":2,"v":array2}, {"n":3,"v":array3}, {"n":4,"v":array4}, {"n":5,"v":array5}, {"n":6,"v":array6}];
	for (let i = 0; i < nb_init; i++) {
		const n = arrayInit[i].n;
		const v = arrayInit[i].v;
		let date = "";
		let them = "";
		let acc = "";

		date = $(`#date_next_init${n}`).val();
		them = $(`#them_next_init${n}`).val();
		acc = $(`#acc_next_init${n}`).val();

		//---------------------------------------------------------------------- Remplissage du array avec les valeurs saisies
		v.push(n);
		if(date)v.push(date);
		if(them)v.push(them);
		if(acc)v.push(acc);

		const len_v = v.length;
		if(len_v < 4) array_v_unfinished.push(n);
		else {
			array_v_finished.push(n);
			const init = `next_init${n}`;
			sessionStorage.setItem(init, JSON.stringify(v));
		}
	}

	if(array_v_unfinished.length > 0) {
		let al = "";
		if(array_v_unfinished.length ===1) al = "Merci de remplir tous les champs de l'initiative n°";
		else{al = "Merci de remplir tous les champs des initiatives n°";}
		for(e of array_v_unfinished) {
			al += ` ${e},`;
		}
		al += " ou de choisir un autre nombre d'initiatives."
		$("#infosMess").html(al);
		$("#modalFormInfos").modal('show');
	}
	else {
		const nb_array_finished = array_v_finished.length;
		$("#modal_next_init").modal('hide');
		$("#infosMess").html(`${nb_array_finished} initiative(s) à venir ont été ajoutée(s) au formulaire.`);
		$("#modalFormInfos").modal('show');
	}
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
	const pdn_id = $("#pdn_id").text();

	// --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
	if((!smart && !ordi && !tablette && !consol) || !nb_h || (!lien && !loisirs && !socio_pro && !parentalite && !sante && !addiction && !sexualite && !violence && !logement &&!autre_them)) {
		$("#infosMess").html(`Les rubriques "Types de matériel utilisés", "Présence en ligne" et "Thématiques abordées" sont obligatoires.`);
	} else {
		// ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
		if(vLen("Souhaits de formation,",formation,255,"#infosMess") && vLen("Commentaires",commentaires,255,"#infosMess")) {

			//-------------------------------------------------------------- Envoie des infos vers la BDD
			form_Create(uuid, mois, annee, nb_h, smart, ordi, tablette, consol, lien, loisirs, socio_pro, parentalite, sante, addiction, sexualite, violence, logement, autre_them, formation, commentaires, pdn_id);
		}
	}
});
