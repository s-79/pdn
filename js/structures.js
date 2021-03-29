let xmlstructure="";

$(function(){
	// -------------------------------------------------------------------------------------------------------------- Mettre en valeur le menu actif
	$("#strMenu").toggleClass("nav-link-toggle");

	// -------------------------------------------------------------------------------------------------------------- Remplissage automatique du champ ville concaténé avec le code postal
	const chaineXmlVille=getXmlBase("php/sqlxml.php","v_ville","0","0");
	afficheListe("choixVille",chaineXmlVille,"v_ville","id_ville","ville_CP");
	xmlstructure=getXmlBase("php/sqlxml.php","v_structure","0","0");
	structure();
});

// ------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE CHOIX DES VILLES
$("#choixVille").change(function(){

	const choixVille=$("#choixVille").val();
	// -------------------------------------------------------------------------------------------------------------- Si la valeur "toutes les villes" ou une ville en particulier a été choisie
	if (choixVille==="0"){
		xmlstructure=getXmlBase("php/sqlxml.php","v_structure","0","0");
	}
	else {
		xmlstructure=getXmlBase("php/sqlxml.php","v_structure","id_ville",choixVille);
	}
	// if (xmlstructure==="<anomalieemseb></anomalieemseb>") {
	if (xmlstructure==="<pdn></pdn>") {
		$("#modalStr").modal();
		// --------------------------------------------------------------------------------------------------------- Rafraichir la liste des structures et réinitialiser le select à la valeur 0
		$("#choixVille").prop('selectedIndex', 0);
		xmlstructure=getXmlBase("php/sqlxml.php","v_structure","0","0");
		structure();
	}
	else {
		structure();
	}
});

// ------------------------------------------------------------------------------------------------------------------- FONCTION STRUCTURES
const structure = () => {
	let chaine="";
// ------------------------------------------------------------------------------------------------------------------- Récupération des infos structures
	$(xmlstructure).find("v_structure").each(function(){
		const id_structure = $(this).find("id_structure").text();
		const nom_structure = $(this).find("nom_structure").text();
		const nom_ville = $(this).find("nom_ville").text();
		const image_structure = $(this).find("image_structure").text();
		// ----------------------------------------------------------------------------------------------------------- Création des vignettes
		chaine += "<div class='strCard col-6 col-sm-6 col-md-4 col-lg-3 mb-4'>";
		chaine += 	"<div class='marginCard card border blue-bg'>";
		chaine += 	"<div class='card-body text-center'>";
		chaine += 		"<h2 class='card-title text-white font-weight-bold'>"+nom_structure+"</h2>";
		chaine += 		"<h3 class='card-text text-white'>"+nom_ville+"</h3></div>";
		chaine += 	"<a data-toggle='modal' data-target='#Modal"+id_structure+"'>";
		chaine += 	"<img id='"+id_structure+"' class='card-img pointeur cardHeight' src='"+image_structure+"' height='180' alt='"+nom_structure+" - "+nom_ville+"' title='"+nom_structure+" - "+nom_ville+"'></a>";
		chaine +="</div></div>";
	});
	$("#structures").html(chaine);
}

// ------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UNE VIGNETTE
$("body").delegate( ".card-img", "click", function() {
	// --------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la structure cliquée
	const idStr = $(this).attr('id');
	const xmltype = getXmlBase("php/sqlxml.php","v_structure_type","id_structure",idStr);
	const type_structure=getElement(xmltype,"v_structure_type","id_structure",idStr,"nom_type");
	const xmlStr = getXmlBase("php/sqlxml.php","v_structure","id_structure",idStr);
	const nom_structure=getElement(xmlStr,"v_structure","id_structure",idStr,"nom_structure");
	const adresse_structure=getElement(xmlStr,"v_structure","id_structure",idStr,"adresse_structure");
	const cp_ville=getElement(xmlStr,"v_structure","id_structure",idStr,"cp_ville");
	const nom_ville=getElement(xmlStr,"v_structure","id_structure",idStr,"nom_ville");
	const tel_structure=getElement(xmlStr,"v_structure","id_structure",idStr,"tel_structure");
	const site_structure=getElement(xmlStr,"v_structure","id_structure",idStr,"site_structure");
	const presentation_structure=getElement(xmlStr,"v_structure","id_structure",idStr,"presentation_structure");
	const image_structure=getElement(xmlStr,"v_structure","id_structure",idStr,"image_structure");

	// ------------------------------------------------------------------------------------------------------------- Création du modal
	let chainemodal = "<div class='modal fade' id='Modal"+idStr+"' tabindex='-1' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true'>";
	chainemodal +=	  	"<div class='modal-dialog' role='document'>";
	chainemodal +=	 		 "<div class='modal-content'>";
	chainemodal +=	  			"<div class='modal-header modalHeaderStr'><div id='ModalLabel'>";
	chainemodal +=	  				"<h3 class='modal-title orange font-weight-bold'>"+nom_structure;
	if(type_structure !== "") chainemodal += " - "+type_structure;
	chainemodal +=	  				"</h3><h4 class='blue initial'>"+adresse_structure+"</br>"+cp_ville+" "+nom_ville;
	chainemodal +=	  				"</br>"+tel_structure+"</h4></div>";
	chainemodal +=	  				"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
	chainemodal +=	  					"<span aria-hidden='true'>&times;</span>";
	chainemodal +=	  			"</button></div>";
	chainemodal +=	  			"<div class='modal-body row'>";
	chainemodal +=	  				"<div class='col-4 d-block text-center'><img id='modalImg' src='"+image_structure+"' width='100%' height='120' alt='"+nom_structure+" - "+nom_ville+"' title='"+nom_structure+" - "+nom_ville+"' /></br></br><h5><a href='"+site_structure+"' class='blue liens font-weight-bold' target='_blank'><i class='fas fa-globe blue'></i></br>Site Internet</br>de la structure</a></h5></div>";
	chainemodal +=	  				"<div class='col-8'><h5 class='blue'><i class='fas fa-arrow-right'></i>&nbsp;&nbsp;"+presentation_structure+"</h5></div>";
	chainemodal +=	  			"</div>";
	chainemodal +=	  			"<div class='modal-footer d-block text-center pt-0'><h5 class='text-center'>";

	// --------------------------------------------------------------------------------------------------------------- Récupération des infos relatives aux PDN de la structure cliquée
	let chainePhoto = "";
	let chaineFooterRS = "";
	let chaineDetailsRS = "";

	const xmlpromeneurs = getXmlBase("php/sqlxml.php","v_promeneur_structure","id_structure",idStr);
	$(xmlpromeneurs).find("v_promeneur_structure").each(function() {
		const id_pdn = $(this).find("id_pdn").text();
		const nom_pdn = $(this).find("nom_pdn").text();
		const prenom_pdn = $(this).find("prenom_pdn").text();
		const image_pdn = $(this).find("image_pdn").text();
		const profession_pdn = $(this).find("profession_pdn").text();
		const actif = $(this).find("actif_pdn").text();
		let actif_pdn = "";
		if (actif==="1") actif_pdn = "<i class='fa fa-circle actif'></i>";
		else actif_pdn = "<i class='fa fa-circle inactif'></i>";
		const mail_nom_pdn = $(this).find("mail_nom_pdn").text();
		const mail_domaine_pdn = $(this).find("mail_domaine_pdn").text();
		const portablePro_pdn = $(this).find("portablePro_pdn").html();
		const facebook_pdn = $(this).find("facebook_pdn").text();
		const snapchat_pdn = $(this).find("snapchat_pdn").text();
		const instagram_pdn = $(this).find("instagram_pdn").text();
		const whatsApp_pdn = $(this).find("whatsApp_pdn").text();
		const youtube_pdn = $(this).find("youtube_pdn").text();
		const twitter_pdn = $(this).find("twitter_pdn").text();
		const discord_pdn = $(this).find("discord_pdn").text();
		const twitch_pdn = $(this).find("twitch_pdn").text();
		const tiktok_pdn = $(this).find("tiktok_pdn").text();
		// ------------------------------------------------------------------------------------------------------------------- Création de l'icone tiktok et ajout dans Fontawesome (déclarée dans les script en bas du php)
		var faTikTok = {
			prefix: 'fab',
			iconName: 'tiktok',
			icon: [24, 24, [], 'e001', 'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z']
		}
		FontAwesome.library.add(faTikTok)

		// ------------------------------------------------------------------------------------------------------------------- Affichage des photos PDN
		chainePhoto += "<img id='"+id_pdn+"' class='pt-1 pb-1 pr-2 pl-2 photo pointeur' src='"+image_pdn+"' height='100' alt='"+prenom_pdn+" "+nom_pdn+"' title='"+prenom_pdn+" "+nom_pdn+"' />";

		// ------------------------------------------------------------------------------------------------------------------- Affichage des réseaux sociaux des PDN
		chaineFooterRS += "<div id='infosRS"+id_pdn+"' class='footerRS d-none mt-0'><h6 class='mb-0 blue interligne text-uppercase font-weight-bold'>"+prenom_pdn+" "+nom_pdn+" - "+profession_pdn+"&nbsp;&nbsp;&nbsp;"+actif_pdn+"</br>";
		if(portablePro_pdn !== "") chaineFooterRS += "<i id='portablePro"+id_pdn+"' class='portablePro blue liens fas fa-mobile-alt fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(facebook_pdn !== "") chaineFooterRS += "<i id='facebook"+id_pdn+"' class='facebook blue liens fab fa-facebook fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(instagram_pdn !== "") chaineFooterRS += "<i id='instagram"+id_pdn+"' class='instagram blue liens fab fa-instagram fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(snapchat_pdn !== "") chaineFooterRS += "<i id='snapchat"+id_pdn+"' class=' snapchat blue liens fab fa-snapchat-ghost fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(whatsApp_pdn === "1") chaineFooterRS += "<i id='whatsapp"+id_pdn+"' class='whatsapp blue liens fab fa-whatsapp fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(youtube_pdn !== "") chaineFooterRS += "<i id='youtube"+id_pdn+"' class='youtube blue liens fab fa-youtube fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(twitter_pdn !== "") chaineFooterRS += "<i id='twitter"+id_pdn+"' class='twitter blue liens fab fa-twitter fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(twitch_pdn !== "") chaineFooterRS += "<i id='twitch"+id_pdn+"' class='twitch blue liens fab fa-twitch fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(discord_pdn !== "") chaineFooterRS += "<i id='discord"+id_pdn+"' class='discord blue liens fab fa-discord fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		if(tiktok_pdn !== "") chaineFooterRS += "<i id='tiktok"+id_pdn+"' class='tiktok blue liens fab fa-tiktok fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
		chaineFooterRS +=						"<i id='mail"+id_pdn+"' class='mail blue liens fas fa-envelope fa-lg pointeur'></i></h6></div>";

		// ------------------------------------------------------------------------------------------------------------------- Affichage des infos relatives aux réseaux sociaux des PDN
		chaineDetailsRS +=	  					"<div class='classPortablePro"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS blue'>"+portablePro_pdn+"</h6></div>";
		chaineDetailsRS +=	  					"<div class='classFacebook"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+facebook_pdn+"' target='_blank'>"+facebook_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classInstagram"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+instagram_pdn+"' target='_blank'>"+instagram_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classSnapchat"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+snapchat_pdn+"' target='_blank'>"+snapchat_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classWhatsApp"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS blue'>"+portablePro_pdn+"</h6></div>";
		chaineDetailsRS +=	  					"<div class='classYoutube"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+youtube_pdn+"' target='_blank'>"+youtube_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classTwitter"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+twitter_pdn+"' target='_blank'>"+twitter_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classTwitch"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+twitch_pdn+"' target='_blank'>"+twitch_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classDiscord"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+discord_pdn+"' target='_blank'>"+discord_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classTiktok"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='"+tiktok_pdn+"' target='_blank'>"+tiktok_pdn+"</a></h6></div>";
		chaineDetailsRS +=	  					"<div class='classMail"+id_pdn+" infosRS mt-1 d-none'><h6 class='mb-0 detailsRS'><a class='blue' href='mailto:"+mail_nom_pdn+"@"+mail_domaine_pdn+"'>"+mail_nom_pdn+"(at)"+mail_domaine_pdn+"</a></h6></div>";

	});

	chainemodal += "<h5 id='modalInfosPdn"+idStr+"' class='text-center orange text-uppercase font-weight-bold mt-0 mb-0'>Les promeneurs de la structure</br><span class='initial font-weight-normal blue'>(cliquer sur les photos puis sur les icônes pour + d'infos)</span></h5>";
	chainemodal += chainePhoto;
	chainemodal += chaineFooterRS;
	chainemodal += chaineDetailsRS;
	chainemodal +="</div></div></div></div>";
	$("#structures").append(chainemodal);
});

// ------------------------------------------------------------------------------------------------------------------- EVEMENTS CLICK SUR LES RS
$("body").delegate( ".photo", "click", function() {
	$(".footerRS").removeClass("d-block");
	$(".infosRS").removeClass("d-block");

	// On récupère l'id du bouton sélectionné
	const idPhoto = $(this).attr('id');
	let idInfosRS = "#infosRS"+idPhoto;
	$(idInfosRS).toggleClass("d-block");

	// Suppression de la div d'info lorsqu'on clique sur l'image
	// const idInfosRSSplit = idInfosRS.split("#infosRS");
	// let idPhotoPdn = idInfosRSSplit[1];
	// const xmlPdnStr = getXmlBase("php/sqlxml.php","v_promeneur_structure","id_pdn",idPhotoPdn);
	// const pdnStr=getElement(xmlPdnStr,"v_promeneur_structure","id_pdn",idPhotoPdn,"id_structure");
	// const detailsPhotoStr = "#modalInfosPdn"+pdnStr;
	// $(detailsPhotoStr).addClass("d-none");
});

$("body").delegate( ".portablePro", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idPortablePro = $(this).attr('id');
	const idPortableProSplit = idPortablePro.split("portablePro");
	idPortablePro = idPortableProSplit[1];
	const detailsPortablePro = ".classPortablePro"+idPortablePro;
	$(detailsPortablePro).toggleClass("d-block");
});

$("body").delegate( ".facebook", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idFacebook = $(this).attr('id');
	const idFacebookSplit = idFacebook.split("facebook");
	idFacebook = idFacebookSplit[1];
	const detailsFacebook = ".classFacebook"+idFacebook;
	$(detailsFacebook).toggleClass("d-block");
});

$("body").delegate( ".instagram", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idInsta = $(this).attr('id');
	const idInstaSplit = idInsta.split("instagram");
	idInsta = idInstaSplit[1];
	const detailsInsta = ".classInstagram"+idInsta;
	$(detailsInsta).toggleClass("d-block");
});

$("body").delegate( ".snapchat", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idSnap = $(this).attr('id');
	const idSnapSplit = idSnap.split("snapchat");
	idSnap = idSnapSplit[1];
	const detailsSnap = ".classSnapchat"+idSnap;
	$(detailsSnap).toggleClass("d-block");
});

$("body").delegate( ".whatsapp", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idWhatsapp = $(this).attr('id');
	const idWhatsappSplit = idWhatsapp.split("whatsapp");
	idWhatsapp = idWhatsappSplit[1];
	const detailsWhatsapp = ".classWhatsApp"+idWhatsapp;
	$(detailsWhatsapp).toggleClass("d-block");
});

$("body").delegate( ".youtube", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idYoutube = $(this).attr('id');
	const idYoutubeSplit = idYoutube.split("youtube");
	idYoutube = idYoutubeSplit[1];
	const detailsYoutube = ".classYoutube"+idYoutube;
	$(detailsYoutube).toggleClass("d-block");
});

$("body").delegate( ".twitter", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idTwitter = $(this).attr('id');
	const idTwitterSplit = idTwitter.split("twitter");
	idTwitter = idTwitterSplit[1];
	const detailsTwitter = ".classTwitter"+idTwitter;
	$(detailsTwitter).toggleClass("d-block");
});

$("body").delegate( ".twitch", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idTwitch = $(this).attr('id');
	const idTwitchSplit = idTwitch.split("twitch");
	idTwitch = idTwitchSplit[1];
	const detailsTwitch = ".classTwitch"+idTwitch;
	$(detailsTwitch).toggleClass("d-block");
});

$("body").delegate( ".discord", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idDiscord = $(this).attr('id');
	const idDiscordSplit = idDiscord.split("discord");
	idDiscord = idDiscordSplit[1];
	const detailsDiscord = ".classDiscord"+idDiscord;
	$(detailsDiscord).toggleClass("d-block");
});

$("body").delegate( ".tiktok", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idTiktok = $(this).attr('id');
	const idTiktokSplit = idTiktok.split("tiktok");
	idTiktok = idTiktokSplit[1];
	const detailsTiktok = ".classTiktok"+idTiktok;
	$(detailsTiktok).toggleClass("d-block");
});

$("body").delegate( ".mail", "click", function() {
	$(".infosRS").removeClass("d-block");
	let idMail = $(this).attr('id');
	const idMailSplit = idMail.split("mail");
	idMail = idMailSplit[1];
	const detailsMail = ".classMail"+idMail;
	$(detailsMail).toggleClass("d-block");
});

// ------------------------------------------------------------------------------------------------------------------- EVEMENTS CLICK SUR LES ICONES DU MODAL "PAS DE PDN DANS LA VILLE"
$("body").delegate( "#CoordoFacebook", "click", function() {
	$(".infosRSCoordo").removeClass("d-block");
  	$("#CoordoFacebookDetails").toggleClass("d-block");
});

$("body").delegate( "#CoordoTwitter", "click", function() {
	$(".infosRSCoordo").removeClass("d-block");
  	$("#CoordoTwitterDetails").toggleClass("d-block");
});

$("body").delegate( "#CoordoMail", "click", function() {
	$(".infosRSCoordo").removeClass("d-block");
  	$("#CoordoMailDetails").toggleClass("d-block");
});
