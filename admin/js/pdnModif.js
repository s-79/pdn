// -------------------------------------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	$("#imgFile").hide();
	$("#imgAff").hide();
	// ---------------------------------------------------------------------------------------------------------- Remplissage automatique du champ ville concaténé avec le code postal
	const chaineXmlStr=getXmlBase("php/sqlxml.php","v_structure","0","0");
	afficheListe("structure",chaineXmlStr,"v_structure","id_structure","nom_structure");
	// ---------------------------------------------------------------------------------------------------------- Remplissage automatique de la liste des structures
	const chaineXmlPdnInput=getXmlBase("php/sqlxml.php","v_promeneur_structure","0","0");
	afficheListe("listeRecherche",chaineXmlPdnInput,"v_promeneur_structure","id_pdn","Prenom_Nom");
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT KEYUP DANS LA ZONE DE RECHERCHE
$("#zoneTexte").keyup(function(){
	const pdnRecherche = $("#zoneTexte").val();
	const resultatRecherche = rech("php/sqlRech.php",pdnRecherche,"v_promeneur_structure","Prenom_Nom");
	$("#listeRecherche").html("");
	// id : clef primaire - permet de récupérer l'id lorsqu'on click sur une valeur dans "#listeRecherche").change
	afficheListe("listeRecherche",resultatRecherche,"v_promeneur_structure","id_pdn","Prenom_Nom");
});

// --------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS
$("#choixImgFile").click(function(){
	$("#imageUrl").val("");
	$("#imgAff").html("");
	$("#imgFile").show();
});
$("#choixImgUrl").click(function(){
	// $(imgUrl).show();
	$(imgFile).hide();
	$("#imageUrl")[0].disabled = false;
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR L'ICONE + de RESEAUX SOCIAUX'
$("#plus").click(function(){
	$("#formRS").toggleClass("d-block");
	// $("#plus").removeClass("fa-plus-circle");
	$("#plus").toggleClass("fa-minus-circle");
	$("#plus").toggleClass("fa-plus-circle");
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "MODIFIER LE PDN"
$("#modifPdn").click(function(){

// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives au PDN séléctionné
	const selectedPdn=$("#listeRecherche").val();
	const chainexmlPdn=getXmlBase("php/sqlxml.php","pdn","0","0");
	const nomM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"nom_pdn");
	const prenomM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"prenom_pdn");
	const professionM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"profession_pdn");
	const idMailM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"mail_nom_pdn");
	const domaineMailM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"mail_domaine_pdn");
	const portableProM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"portablePro_pdn");
	const facebookM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"facebook_pdn");
	const snapchatM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"snapchat_pdn");
	const instagramM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"instagram_pdn");
	const whatsAppM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"whatsApp_pdn");
	const youtubeM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"youtube_pdn");
	const twitterM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"twitter_pdn");
	const discordM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"discord_pdn");
	const twitchM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"twitch_pdn");
	const tiktokM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"tiktok_pdn");
	const mdpM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"mdp_pdn");
	const imageM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"image_pdn");
	const presentationM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"presentation_pdn");
	const actifM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"actif_pdn");
	const idStructureM=getElement(chainexmlPdn,"pdn","id_pdn",selectedPdn,"id_structure");

// ------------------------------------------------------------------------------------------------------------------ Vérif : Un PDN est-elle bien séléctionné ?
	if(selectedPdn===null){
		alert("Aucun promeneur n'a été séléctionné")
	}
	else {
		// -------------------------------------------------------------------------------------------------------------- Fonction d'affichage liste des structures ac la structure actuelle en 1er
		const chainexmlStr=getXmlBase("php/sqlxml.php","v_structure","0","0");
		const structure=getElement(chainexmlStr,"v_structure","id_structure",idStructureM,"nom_structure");
		const strAff= "<option value='"+idStructureM+"'>"+structure+"</option>";
		$("#structure").html("");
		$("#structure").prepend(strAff);
		afficheListe("structure",chainexmlStr,"v_structure","idstructure","nom_structure");
		// -------------------------------------------------------------------------------------------------------------- Affichage des valeurs récupérées dans le formulaire
		$("#id").val("");
		$("#id").val($("#id").val() + selectedPdn);
		$("#nom").val("");
		$("#nom").val($("#nom").val() + nomM);
		$("#prenom").val("");
		$("#prenom").val($("#prenom").val() +prenomM);
		$("#profession").val("");
		$("#profession").val($("#profession").val() + professionM);
		$("#idMail").val("");
		$("#idMail").val($("#idMail").val() + idMailM);
		$("#domaineMail").val("");
		$("#domaineMail").val($("#domaineMail").val() + domaineMailM);
		$("#portablePro").val("");
		$("#portablePro").val($("#portablePro").val() + portableProM);
		$("#facebook").val("");
		$("#facebook").val($("#facebook").val() + facebookM);
		$("#snapchat").val("");
		$("#snapchat").val($("#snapchat").val() + snapchatM);
		$("#instagram").val("");
		$("#instagram").val($("#instagram").val() + instagramM);
		$("#whatsApp").prop('checked', false);
		if (whatsAppM === "1") $("#whatsApp").prop('checked', true);
		$("#youtube").val("");
		$("#youtube").val($("#youtube").val() + youtubeM);
		$("#twitter").val("");
		$("#twitter").val($("#twitter").val() + twitterM);
		$("#discord").val("");
		$("#discord").val($("#discord").val() + discordM);
		$("#twitch").val("");
		$("#twitch").val($("#twitch").val() + twitchM);
		$("#tiktok").val("");
		$("#tiktok").val($("#tiktok").val() + tiktokM);
		$("#mdp").val("");
		$("#mdp").val($("#mdp").val() + mdpM);
		$("#imageUrl").val("");
		$("#imageUrl").val($("#imageUrl").val() + imageM);
		$("#presentation").val("");
		$("#presentation").val($("#presentation").val() + presentationM);
		$("#actif").prop('checked', false);
		if (actifM === "1") $("#actif").prop('checked', true);
	}
});

// ------------------------------------------------------------------------------------------------------------------ ÉVENEMENT CLICK SUR LE BOUTON "SUPPRIMER DE LA BDD"
$("#suppPdn").click(function(){

	// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives au PDN séléctionné
	const selectedPdn=$("#listeRecherche").val();

	// -------------------------------------------------------------------------------------------------------------- Vérif : Un PDN est-elle bien séléctionné ?
	if(selectedPdn===null){
		alert("Aucun promeneur n'a été séléctionné")
	}
	else {
		const supprPdn = suppr("php/pdnSuppr.php",selectedPdn);

		// ---------------------------------------------------------------------------------------------------------- Actualisation de la liste des PDN
		$("#listeRecherche").html("");
		const chaineXmlPdnAct=getXmlBase("php/sqlxml.php","v_promeneur_structure","0","0");
		afficheListe("listeRecherche",chaineXmlPdnAct,"v_promeneur_structure","id_pdn","Prenom_Nom");

		// ---------------------------------------------------------------------------------------------------------- Vérif : Le PDN a-t-il bien été supprimé de la BDD ?
		const testSuppr = exist("php/pdnExist.php",selectedPdn);

		if (testSuppr === "0") {
			alert("Le PDN a été correctement supprimée de la base de données.");
		}
		else {
			alert("Le PDN ne peut pas être supprimé de la base de données.");
		}
	}
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// -------------------------------------------------------------------------------------------------------------- Récupération des valeurs modifiées dans les zones de saisie
	let id=$("#id").val();
	let nom=$("#nom").val();
	let prenom=$("#prenom").val();
	let profession=$("#profession").val();
	let idMail=$("#idMail").val();
	let domaineMail=$("#domaineMail").val();
	let portablePro=$("#portablePro").val();
	let facebook=$("#facebook").val();
	let snapchat=$("#snapchat").val();
	let instagram=$("#instagram").val();
	let whatsApp="";
	if ($("#whatsApp").is(':checked'))whatsApp="1";else{whatsApp="0"};
	let youtube=$("#youtube").val();
	let twitter=$("#twitter").val();
	let discord=$("#discord").val();
	let twitch=$("#twitch").val();
	let tiktok=$("#tiktok").val();
	let mdp=$("#mdp").val();
	let image=$("#imageUrl").val();
	let presentation=$("#presentation").val();
	let actif="";
	if ($("#actif").is(':checked'))actif="1";else{actif="0"};
	let structure = $("#structure").val();
	let etat = "";

	if(verifPres(presentation) && verifImage(image) && domaineValide(domaineMail)){
        // ------------------------------------------------------------------------------------------------------- Ajout de la modification dans la table client
		const modifPdn = pdnModif("php/pdnModif.php",nom,prenom,profession,idMail,domaineMail,portablePro,facebook,snapchat,instagram,whatsApp,youtube,twitter,discord,twitch,tiktok,mdp,image,presentation,actif,structure,id);

		// -------------------------------------------------------------------------------------------------------- Actualisation de la liste des promeneurs
		$("#listeRecherche").html("");
		const chaineXmlPdnAct2=getXmlBase("php/sqlxml.php","v_promeneur_structure","0","0");
		afficheListe("listeRecherche",chaineXmlPdnAct2,"v_promeneur_structure","id_pdn","Prenom_Nom");

		alert("Les infos du PDN ont été correctement modifiées !");
		location.reload();
	}
	else {
		location.reload();
	}
});

// --------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK POUR REMETTRE LE STYLE INITALE DANS LES ZONES INPUT DU FORMULAIRE
$(".form-control,.form-control-sm").click(function(){
		$(this).css("border","none");
});

// -------------------------------------------------------------------------------------------------------------- FONCTIONS DEFINIES

// // ----------------------------------------------------------------------------- Fonction vérification du numéro de téléphone
// const verifTel = tel => {
// 	const regexTel = /^0[0-9]([ .-]?[0-9]{2}){4}$/;
//     if(regexTel.test(tel)) etat=true;
//     else {
//     	alert("Le numéro de téléphone n'est pas valide.");
//     	etat=false;
//     }
// return etat;
// }

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ présentation
const verifPres = presentation => {
	lg=presentation.length;
	if(lg <=700) etat=true;
    else {
    alert("La présentation de la structure ne doit pas dépasser les 700 caractères.");
    etat=false;
    }
return etat;
}


// ----------------------------------------------------------------------------- L'url de l'image termine-t-elle bien par jpg, jped, gif ou png ?
const verifImage = image => {
// const regexImage = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/ ;
const regexImage = /\.(?:jpg|jpeg|gif|png)$/ ;
    if(regexImage.test(image)) etat=true;
    else {
    alert("Le lien vers l'image n'est pas valide, il doit se terminer par jpg, jpeg, png ou gif");
    etat=false;
    }
return etat;
}

// ----------------------------------------------------------------------------- Le champ e-mail contient-il un @, un point et au moins 4 caractères
const domaineValide = email => {
	if(email.length<4)
		alert("Le nom de domaine doit contenir au moins 4 caractères.");
		etat = false;
	var p1=email.indexOf('.');
	if(p1>=1) etat = true;
	else {
		alert("Le nom de domaine doit contenir au moins 1 point.");
		etat = false;
	}
return etat;
}
