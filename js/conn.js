$("#menu_conn").toggleClass("nav-link-toggle");

$("#btnModalOublie").click(function() {
	const mail = $("#mail").val();
	$.ajax({
		url: "php/pdn_Get.php",
		dataType: 'JSON',
		data : {mail:mail},
		success: function(response){
			let messageModal = "";
			const res = response[0].res;
			if(parseInt(res) === 1) {
				messageModal = "Bonjour, nous avons bien reçu ta demande. Ton identifiant et un nouveau mot de passe te seront envoyés par mail sous 24h les jours ouvrés.";
			} else {
				messageModal = `L'adresse mail ${mail} n'est pas reconnue dans la base de données. Vous pouvez essayer avec une autre adresse mail ou contacter la coordination du réseau PDN93 : fol93.coordopdn93(at)gmail.com`;
			}
			$("#messageModal").html(messageModal);
		}
	});
	$("#modalOublieInfos").modal('show');
});
