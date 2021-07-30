// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ----------------------------------------------------------------------------- Récupération et affichage des infos PDN
const form_Get_Pdn = pdn_id => {
    $.ajax({
		url: "php/pdn_Get.php",
		dataType: 'JSON',
		data : {idPdn:pdn_id},
		success: function(response){
			const prenom = response[0].prenom;
			const nom = response[0].nom;
			const fonction = response[0].fonction;
            const tel = response[0].portablePro;
			const mail_nom = response[0].mail_nom;
			const mail_domaine = response[0].mail_domaine;
            const str_nom = response[0].str_nom;
			const ville_nom = response[0].ville_nom;
            $("#prenom").val(prenom);
            $("#nom").val(nom);
            $("#fonction").val(fonction);
            $("#tel").val(tel);
            const mail = `${mail_nom}@${mail_domaine}`;
            $("#mail").val(mail);
            $("#structure").val(str_nom);
            $("#ville").val(ville_nom);
        }
	});
}
