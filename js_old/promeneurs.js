let xmlpdn="";

$(function(){
	// -------------------------------------------------------------------------------------------------------------- Mettre en valeur le menu actif
	$("#pdnMenu").toggleClass("nav-link-toggle");

	// -------------------------------------------------------------------------------------------------------------- Remplissage automatique du champ ville concaténé avec le code postal
	const chaineXmlVille=getXmlBase("php/sqlxml.php","v_ville","0","0");
	afficheListe("choixVille",chaineXmlVille,"v_ville","id_ville","ville_CP");
	xmlpdn=getXmlBase("php/sqlxml.php","v_promeneur_structure","0","0");

	pdn();
});

// ------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE CHOIX DES VILLES
$("#choixVille").change(function(){
	const choixVille=$("#choixVille").val();
	// -------------------------------------------------------------------------------------------------------------- Si la valeur "toutes les villes" ou une ville en particulier a été choisie
	if (choixVille==="0"){
		xmlpdn=getXmlBase("php/sqlxml.php","v_promeneur_structure","0","0");
	}
	else {
		xmlpdn=getXmlBase("php/sqlxml.php","v_promeneur_structure","id_ville",choixVille);
	}
	if (xmlpdn==="<anomalieemseb></anomalieemseb>") {
	// if (xmlpdn==="<pdn></pdn>") {
		$("#modalPdn").modal();
		// --------------------------------------------------------------------------------------------------------- Rafraichir la liste des structures et réinitialiser le select à la valeur 0
		$("#choixVille").prop('selectedIndex', 0);
		xmlpdn=getXmlBase("php/sqlxml.php","v_promeneur_structure","0","0");
		pdn();
	}
	else {
		pdn();
	}
});

// ------------------------------------------------------------------------------------------------------------------- FONCTION PROMENEURS
const pdn = () => {
	let chaine="";
// ------------------------------------------------------------------------------------------------------------------- AFFICHAGE DES PROMENEURS
	$(xmlpdn).find("v_promeneur_structure").each(function(){
		const nom_pdn = $(this).find("nom_pdn").text();
		const prenom_pdn = $(this).find("prenom_pdn").text();
		const nom_ville = $(this).find("nom_ville").text();
		const profession_pdn =  $(this).find("profession_pdn").text();
		const id_pdn = $(this).find("id_pdn").text();
		const image_pdn = $(this).find("image_pdn").text();

		chaine +="<div id='"+id_pdn+"' class='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 text-center divfigure'>";
		chaine +="<figure class='bg-white pt-2 p-1'>";
		chaine += 	"<a data-toggle='modal' data-target='#Modal"+id_pdn+"'>";
		chaine +=	"<img class = 'pointeur' style='border-radius: 15%;' src='"+image_pdn+"'height='120' alt='"+prenom_pdn+" "+nom_pdn+"' title='"+prenom_pdn+" "+nom_pdn+"' /></a>";
		chaine +=	"<figcaption class='pt-1'><h4 class='blue'>"+prenom_pdn+" "+nom_pdn+"</br><span class='orange' style='font-size:0.9em'>"+profession_pdn+"</span></br>"+nom_ville+"</h4></figcaption>";
		chaine +="</figure>";
		chaine +="</div>";
	});
	$("#promeneurs").html(chaine);
}

// ------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR UNE FIGURE
$("body").delegate( ".divfigure", "click", function() {
	// --------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la structure cliquée
	const idPdn = $(this).attr('id');
	const xmlPdn = getXmlBase("php/sqlxml.php","v_promeneur_structure","id_pdn",idPdn);
	const nom_structure=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"nom_structure");
	const prenom_structure=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"nom_structure");
	const adresse_structure=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"adresse_structure");
	const cp_ville=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"cp_ville");
	const nom_ville=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"nom_ville");
	const tel_structure=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"tel_structure");
	const nom_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"nom_pdn");
	const prenom_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"prenom_pdn");
	const profession_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"profession_pdn");
	const actif=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"actif_pdn");
	let actif_pdn = "";
	if (actif==="1") actif_pdn = "<i class='fa fa-circle actif'></i>";
	else actif_pdn = "<i class='fa fa-circle inactif'></i>";
	const mail_nom_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"mail_nom_pdn");
	const mail_domaine_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"mail_domaine_pdn");
	const image_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"image_pdn");
	const presentation_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"presentation_pdn");
	const portablePro_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"portablePro_pdn");
	const facebook_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"facebook_pdn");
	const snapchat_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"snapchat_pdn");
	const instagram_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"instagram_pdn");
	const whatsApp_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"whatsApp_pdn");
	const youtube_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"youtube_pdn");
	const twitter_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"twitter_pdn");
	const discord_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"discord_pdn");
	const twitch_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"twitch_pdn");
	const tiktok_pdn=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"tiktok_pdn");
	const site_structure=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"site_structure");
	const image_structure=getElement(xmlPdn,"v_promeneur_structure","id_pdn",idPdn,"image_structure");
	const urlimage="src='"+image_structure+"'";

// ------------------------------------------------------------------------------------------------------------------- Création de l'icone tiktok et ajout dans Fontawes(déclarée dans les script en bas du php)
    var faTikTok = {
        prefix: 'fab',
        iconName: 'tiktok',
        icon: [24, 24, [], 'e001', 'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z']
    }
    FontAwesome.library.add(faTikTok)

	// ------------------------------------------------------------------------------------------------------------- Création du modal
	let chainemodal = "<div class='modal fade' id='Modal"+idPdn+"' tabindex='-1' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true'>";
	chainemodal +=	  	"<div class='modal-dialog' role='document'>";
	chainemodal +=	 		 "<div class='modal-content'>";
	chainemodal +=	  			"<div class='modal-header'><div id='ModalLabel'>";
	chainemodal +=	  				"<h4 class='modal-title orange'>"+prenom_pdn+" "+nom_pdn+"&nbsp;-&nbsp"+profession_pdn+"&nbsp;&nbsp;&nbsp;"+actif_pdn+"</br><span class='blue'>"+nom_structure+"&nbsp;-&nbsp"+nom_ville+"&nbsp;&nbsp;<a><i id='btnInfosStr' class='blue fa fa-info-circle'></i></a></span>";
	chainemodal +=	  				"<div class='infosStr d-none'><span class='font-weight-normal text-dark adresse'>"+adresse_structure+"</br>"+cp_ville+" "+nom_ville+"</br>"+tel_structure+"</br><a href='"+site_structure+"' class='text-dark' target='_blank'>"+site_structure+"</a></br></div></span></h4></div>";
	chainemodal +=	  				"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
	chainemodal +=	  					"<span aria-hidden='true'>&times;</span>";
	chainemodal +=	  			"</button></div>";
	chainemodal +=	  			"<div class='modal-body row'>";
	chainemodal +=	  				"<div class='col-4 d-block text-center'><img src='img/logo_promeneurs_du_net.png' height='100'><br><br><img id='modalImg' src='"+image_pdn+"' height='120' alt='"+prenom_pdn+" "+profession_pdn+" "+nom_ville+"' title='"+prenom_pdn+" "+profession_pdn+" "+nom_ville+"' /></div>";
	chainemodal +=	  				"<div class='col-8'><h5 class='blue font-italic'><blockquote><i class='fas fa-quote-left'></i>&nbsp;&nbsp;"+presentation_pdn+"&nbsp;&nbsp;<i class='fas fa-quote-right'></blockquote></i></h5></div>";
	chainemodal +=	  			"</div>";
	// --------------------------------------------------------------------------------------------------------------- Affichage des réseaux sociaux utilisés par le PDN
	chainemodal +=	  			"<div class='modal-footer d-block text-center'><h5>";
	if(portablePro_pdn !== "") chainemodal += "<i id='portablePro' class='blue liens fas fa-mobile-alt fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(facebook_pdn !== "") chainemodal += "<i id='facebook' class='blue liens fab fa-facebook fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(instagram_pdn !== "") chainemodal += "<i id='instagram' class='blue liens fab fa-instagram fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(snapchat_pdn !== "") chainemodal += "<i id='snapchat' class='blue liens fab fa-snapchat-ghost fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(whatsApp_pdn === "1") chainemodal += "<i id='whatsapp' class='blue liens fab fa-whatsapp fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(youtube_pdn !== "") chainemodal += "<i id='youtube' class='blue liens fab fa-youtube fa-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(twitter_pdn !== "") chainemodal += "<i id='twitter' class='blue liens fab fa-twitter fa-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(twitch_pdn !== "") chainemodal += "<i id='twitch' class='blue liens fab fa-twitch fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(discord_pdn !== "") chainemodal += "<i id='discord' class='blue liens fab fa-discord fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	if(tiktok_pdn !== "") chainemodal += "<i id='tiktok' class='blue liens fab fa-tiktok fa-lg pointeur'></i>&nbsp;&nbsp;&nbsp;&nbsp;";
	// --------------------------------------------------------------------------------------------------------------- Infos relatives aux réseaux sociaux utilisés par le PDN
	chainemodal +=						"<i id='mail' class='blue liens fas fa-envelope fa-lg pointeur'></i></h5>";
	chainemodal +=	  					"<div class='classPortablePro infosRS mt-1 d-none'><h5 class='blue mb-0'>"+portablePro_pdn+"</h5></div>";
	chainemodal +=	  					"<div class='classFacebook infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+facebook_pdn+"' target='_blank'>"+facebook_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classInstagram infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+instagram_pdn+"' target='_blank'>"+instagram_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classSnapchat infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+snapchat_pdn+"' target='_blank'>"+snapchat_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classWhatsApp infosRS mt-1 d-none'><h5 class='blue mb-0' class='blue'>"+portablePro_pdn+"</h5></div>";
	chainemodal +=	  					"<div class='classYoutube infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+youtube_pdn+"' target='_blank'>"+youtube_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classTwitter infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+twitter_pdn+"' target='_blank'>"+twitter_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classTwitch infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+twitch_pdn+"' target='_blank'>"+twitch_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classDiscord infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+discord_pdn+"' target='_blank'>"+discord_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classTiktok infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='"+tiktok_pdn+"' target='_blank'>"+tiktok_pdn+"</a></h5></div>";
	chainemodal +=	  					"<div class='classMail infosRS mt-1 d-none'><h5 class='blue mb-0'><a class='blue' href='mailto:"+mail_nom_pdn+"@"+mail_domaine_pdn+"'>"+mail_nom_pdn+"(at)"+mail_domaine_pdn+"</a></h5></div>";
	chainemodal +="</div></div></div></div></div>";

	$("#promeneurs").append(chainemodal);
});

// ------------------------------------------------------------------------------------------------------------------- EVEMENTS CLICK SUR LES RS
$("body").delegate( "#portablePro", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classPortablePro").toggleClass("d-block");
});

$("body").delegate( "#facebook", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classFacebook").toggleClass("d-block");
});

$("body").delegate( "#instagram", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classInstagram").toggleClass("d-block");
});

$("body").delegate( "#snapchat", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classSnapchat").toggleClass("d-block");
});

$("body").delegate( "#whatsapp", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classWhatsApp").toggleClass("d-block");
});

$("body").delegate( "#youtube", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classYoutube").toggleClass("d-block");
});

$("body").delegate( "#twitter", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classTwitter").toggleClass("d-block");
});

$("body").delegate( "#discord", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classDiscord").toggleClass("d-block");
});

$("body").delegate( "#twitch", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classTwitch").toggleClass("d-block");
});

$("body").delegate( "#tiktok", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classTiktok").toggleClass("d-block");
});

$("body").delegate( "#mail", "click", function() {
	$(".infosRS").removeClass("d-block");
	$(".classMail").toggleClass("d-block");
});

// ------------------------------------------------------------------------------------------------------------------- EVEMENT CLICK SUR L'ICONE INFOS STRUCTURE
$("body").delegate( "#btnInfosStr", "click", function() {
	$(".infosStr").toggleClass("d-block");
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
