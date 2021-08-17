// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ---------------------------------------------------------------------------- Activation de la touche "Entrée dans les formulaires"

$("#form_pwd").on('keyup', function (event) {
	if (event.keyCode === 13) {
		$('#pdn_pwd_valide').click();
	}
});

//------------------------------------------------------------------------------ EVENEMENT CLICK SUR LE BOUTON MODIFIER LE MOT DE PASSE
$('#pdn_pwd_valide').click(function(){
	const id_act = $('#id_act').val();
	const mdp_act = $('#mdp_act').val();
	const mdp_new = $('#mdp_new').val();
	const mdp_repeat =  $("#mdp_repeat").val();

	if(!id_act || !mdp_act || !mdp_new || !mdp_repeat)  $('#message_modif_pwd').html("Merci de remplir tous les champs du formulaire");
	else {
		if(mdp_new !== mdp_repeat) $('#message_modif_pwd').html("Les nouveaux mots de passe ne sont pas identiques");
		else {
			if(verifMdp(mdp_new)) {
				$.ajax({
					url: "php/form_Get.php",
					dataType: 'JSON',
					data : {id_act:id_act, mdp_act:mdp_act},
					success : function(response){
						const resp = response[0].resp;
						if(resp==="Nok") $('#message_modif_pwd').html("L'identifiant et le mot de passe actuel ne sont pas reconnus par la base de données.");
						else {
							$.ajax({
								url: "php/form.php",
								dataType: 'JSON',
								data : {mdp_new:mdp_new, resp:resp},
								complete : function(res){
									$('#message_modif_pwd').html("Le nouveau mot de passe a été correctement enregistré dans la base de données.");
									$('#footer_modif_pwd').html(`<button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onclick="document.location='bienvenue.php'">OK</button>`);
								}
							});
						}
					}
				});
			}
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
