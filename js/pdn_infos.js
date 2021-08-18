// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ---------------------------------------------------------------------------- Activation de la touche "Entrée dans les formulaires"
$("#form_pdn_infos").on('keyup', function (event) {
	if (event.keyCode === 13) {
		$('#pdn_modif_valide').click();
	}
});

// ----------------------------------------------------------------------------- Remplissage des infos PDN
const pdn_id = $("#pdn_id").html();
// ----------------------------------------------------------------------------- Récupération des infos PDN dans le BDD et affichage
$.ajax({
	url: "php/pdn_Get.php",
	dataType: 'JSON',
	data : {idPdn:pdn_id},
	success: function(response){
		const prenom = response[0].prenom;
		const nom = response[0].nom;
		const fonction = response[0].fonction;
		const str_nom = response[0].str_nom;
		const ville_nom = response[0].ville_nom;
        const mail_nom = response[0].mail_nom;
		const mail_domaine = response[0].mail_domaine;
		const tel = response[0].portablePro;
		const whatsapp = response[0].whatsapp;
		const facebook = response[0].facebook;
		const instagram = response[0].instagram;
		const snapchat = response[0].snapchat;
		const youtube = response[0].youtube;
		const twitter = response[0].twitter;
		const discord = response[0].discord;
		const twitch = response[0].twitch;
		const tiktok = response[0].tiktok;
		const pres_pdn = response[0].presentation;
		const pres_str = response[0].str_pres;

        $("#prenom").val(prenom);
        $("#nom").val(nom);
        $("#fonction").val(fonction);
		$("#structure").val(str_nom);
		$("#ville").val(ville_nom);
		const mail = `${mail_nom}@${mail_domaine}`;
		$("#mail").val(mail);
        $("#tel").val(tel);
		if (whatsapp === "1") $("#whatsapp").prop('checked', true);
		$("#facebook").val(facebook);
		$("#instagram").val(instagram);
		$("#snapchat").val(snapchat);
		$("#youtube").val(youtube);
		$("#twitter").val(twitter);
		$("#discord").val(discord);
		$("#twitch").val(twitch);
		$("#tiktok").val(tiktok);
		$("#pres_pdn").val(pres_pdn);
		$("#pres_str").val(pres_str);
    }
});

// ----------------------------------------------------------------------------- Événement click sur le bouton enregistrer dans le formulaire de modification de infos
$("#pdn_modif_valide").click(function() {
	const prenom = $("#prenom").val();
	const nom = $("#nom").val();
	const fonction = $("#fonction").val();
	const structure = $("#structure").val();
	const ville = $("#ville").val();
	const mail = $("#mail").val();
	const tel = $("#tel").val();
	let whatsapp =  $("#whatsapp").is(':checked');
	if(whatsapp)whatsapp="Oui";else{whatsapp="Non"};
	const facebook = $("#facebook").val();
	const instagram = $("#instagram").val();
	const snapchat = $("#snapchat").val();
	const youtube = $("#youtube").val();
	const twitter = $("#twitter").val();
	const discord = $("#discord").val();
	const twitch = $("#twitch").val();
	const tiktok = $("#tiktok").val();
	const photo_pdn = $("#photo_pdn").val();
	const pres_pdn = $("#pres_pdn").val();
	const image_str = $("#image_str").val();
	const pres_str = $("#pres_str").val();

	if(vLen("Prénom", prenom, 100, "#modifMess") && vLen("Nom", nom, 100, "#modifMess") && vLen("Fonction", fonction, 100, "#modifMess") && vLen("Structure", structure, 100, "#modifMess") && vLen("Ville", ville, 100, "#modifMess") && vLen("Mail", mail, 100, "#modifMess") && vLen("Téléphone", tel, 50, "#modifMess") && vLen("Facebook", facebook, 255, "#modifMess") && vLen("Instagram", instagram, 255, "#modifMess") && vLen("Snapchat", snapchat, 255, "#modifMess") && vLen("Youtube", youtube, 255, "#modifMess") && vLen("Twitter", twitter, 255, "#modifMess") && vLen("Discord", discord, 255, "#modifMess") && vLen("Twitch", twitch, 255, "#modifMess") && vLen("TikTok", tiktok, 255, "#modifMess") && vLen("Présentation PDN", pres_pdn, 700, "#modifMess") && vLen("Présentation de la structure", pres_str, 700, "#modifMess")) {
		$.ajax({
			url: "php/pdn_Infos_Ress.php",
			dataType: 'JSON',
			data: {prenom_m:prenom, nom_m:nom, fonction_m:fonction, structure_m:structure, ville_m:ville, mail_m:mail, tel_m:tel, whatsapp_m:whatsapp, facebook_m:facebook, instagram_m:instagram, snapchat_m:snapchat, youtube_m:youtube, twitter_m:twitter, discord_m:discord, twitch_m:twitch, tiktok_m:tiktok, photo_pdn_m:photo_pdn, pres_pdn_m:pres_pdn, image_str_m:image_str, pres_str_m:pres_str},
			complete: function(){
				$('#modifMess').html(`Modifications transmises à la coordination du réseau PDN93 pour validation. Elles apparaitront sur le site dans les prochains jours.`);
				$('#footer_modif_infos').html(`<button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onclick="document.location='bienvenue.php'">OK</button>`);
			}
		});
	}
});
