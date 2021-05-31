// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

$(function(){

});

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
	if(nb_init !== "0") {
		$("#modal_init_btn").html("");
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
			//---------------------------------------------------------------------- Réinitialisation du formulaire
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
	$("#nom_rs").html(rs);
	$("#modal_rs").modal('show');
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LA CASE "AUTRE THÉMATIQUE"
$("#autre_them").click(function() {
	if($("#autre_them").is(':checked')) $("#modal_autre_them").modal('show');
});

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UN BOUTON RADIO INITIATIVE PASSÉE
// for (let i = 1; i < 5; i++) {
// 	const btn_radio = `#i${i}`;
// 	$(btn_radio).click(function() {
// 		if($(btn_radio).is(':checked')){
// 			$("#modal_init_btn").html("");
// 			let res = "";
// 			for(let j = 1; j <= i; j++) {
// 				$("#modal_init_btn").append(`<button id="btn_init${j}" class="btn btn-outline-primary mt-4" type="button">Initiative n°${j}</button>`);
// 				res += `<div id="div_init${i}" class="d-none init">
// 							<h4 class="mt-3">Initiative n°${i}</h4>
// 							<div class="form-floating mx-3 mt-3">
// 								<input type="date" class="form-control" id="date_init" placeholder="Date de l'initiative *">
// 								<label for="date_init">Date de l'initiative *</label>
// 							</div>
// 							<div class="form-floating mx-3 mt-3 mb-3">
// 								<input type="text" class="form-control" id="intitule_init" placeholder="Intitulé">
// 								<label for="intitule_init">Intitulé</label>
// 							</div>
// 						</div>`;
// 			}
// 			$("#modal_init_div").append(res);
// 		}
// 		$("#modal_init").modal('show');
// 	});
// 	$(`#btn_init${i}`).click(function() {
// 		$(".init").addClass("d-none");
// 		$(`#div_init${i}`).toggleClass("d-none");
// 	});
// }

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UN BOUTON RADIO INITIATIVE SUIVANTE
for (let i = 1; i < 5; i++) {
	const next_i = `#next_i${i}`;
	$(next_i).click(function() {
		if($(next_i).is(':checked')){
			$("#modal_init").modal('show');
		}
	});
}

// ---------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON INITX DANS LE MODAL INITIATIVE
for (let i = 1; i < 5; i++) {
	const btn_init = `#btn_init${i}`;
	$(btn_init).click(function() {
		alert(i);
		// $(".init").addClass("d-none");
		// $(`#div_init${i}`).toggleClass("d-none");
	});
}
