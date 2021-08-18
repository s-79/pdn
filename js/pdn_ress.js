// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ---------------------------------------------------------------------------- Activation de la touche "Entrée dans les formulaires"

$("#form_pdn_ress").on('keyup', function (event) {
	if (event.keyCode === 13) {
		$('#pdn_pwd_valide').click();
	}
});

//------------------------------------------------------------------------------ EVENEMENT CLICK SUR LE BOUTON MODIFIER LE MOT DE PASSE
$('#pdn_ress_valide').click(function(){
	const nom = $('#nom').val();
	const lien = $('#lien').val();
	const img = $('#img').val();
	const age =  $("#age").val();
	const editeur =  $("#editeur").val();
	const description =  $("#description").val();

	if(!nom || !lien) $('#message_pdn_ress').html("Merci de remplir au minimum les champs <b>Nom de la ressource</b> et <b>Lien vers le ressource</b>");
	else {
		if(vLen("Nom de la ressource", nom, 100, "#message_pdn_ress") && vLen("Lien vers la ressource", lien, 255, "#message_pdn_ress") && vLen("Lien vers une image", img, 255, "#message_pdn_ress") && vLen("Age du public", age, 30, "#message_pdn_ress") && vLen("Nom de l'éditeur", editeur, 50, "#message_pdn_ress") && vLen("Description", description, 700, "#message_pdn_ress")) {
			$.ajax({
				url: "php/pdn_Infos_Ress.php",
				dataType: 'JSON',
				data: {nom_r:nom, lien_r:lien, img_r:img, age_r:age, editeur_r:editeur, description_r:description},
				complete: function(){
					$('#message_pdn_ress').html(`Ressources transmises à la coordination du réseau PDN93 pour validation. Elle apparaitra sur le site dans les prochains jours.`);
					$('#footer_pdn_ress').html(`<button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onclick="document.location='bienvenue.php'">OK</button>`);
				}
			});
		}
	}
});

// ----------------------------------------------------------------------------- FONCTIONS DÉFINIES
const verifMdp = mdp => {
    let etat = "";
	const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(regex.test(mdp)) etat=true;
    else {
    $('#message_modif_pwd').html("Le mot de passe doit contenir 8 caractères minimum avec au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spéciale.");
    etat=false;
    }
return etat;
}
