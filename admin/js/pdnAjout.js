let nom = "";
let prenom = "";
let profession = "";
let idMail = "";
let domaineMail = "";
let portablePro = "";
let facebook = "";
let snapchat = "";
let instagram = "";
let whatsApp = "";
let youtube = "";
let twitter = "";
let discord = "";
let twitch = "";
let tiktok = "";
let mdp = "";
let image = "";
let presentation = "";
let actif = "";
let structure = "";
let chaine = "";
let etat = true;

// --------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	$("#imgFile").hide();
	$("#imgAff").hide();

	// ----------------------------------------------------------------------------- Remplissage automatique du champ structure
	const chaineXmlVille=getXmlBase("php/sqlxml.php","v_structure","0","0");
	afficheListe("structure",chaineXmlVille,"v_structure","id_structure","nom_structure");
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS
$("#choixImgFile").click(function(){
		$("#imageUrl").val("");
		$("#imgAff").html("");
		$("#imgFile").show();

});
$("#choixImgUrl").click(function(){
		$("#imageUrl").val("");
		$("#imgFile").hide();
		// Pour dégriser la case si elle l'était suite à un ajout d'image
		$("#imageUrl")[0].disabled = false;
});

$("#choixImgDefaut").click(function(){
		$("#imgFile").hide();
		$("#imgAff").html("");
		$("#imageUrl").val("img/pdn/0.jpg");
		$("#imageUrl")[0].disabled = true;
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR L'ICONE + de RESEAUX SOCIAUX'
$("#plus").click(function(){
	$("#formRS").toggleClass("d-block");
	// $("#plus").removeClass("fa-plus-circle");
	$("#plus").toggleClass("fa-minus-circle");
	$("#plus").toggleClass("fa-plus-circle");
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// ----------------------------------------------------------------------------- Récupération des valeurs dans les zones de saisie au moment du click
	nom=$("#nom").val();
	prenom=$("#prenom").val();
	profession=$("#profession").val();
	idMail=$("#idMail").val();
	domaineMail=$("#domaineMail").val();
	portablePro=$("#portablePro").val();
	facebook=$("#facebook").val();
	snapchat=$("#snapchat").val();
	instagram=$("#instagram").val();
	whatsApp = $("#whatsApp").is(':checked');
	if(whatsApp)whatsApp=1;else{whatsApp=0};
	youtube=$("#youtube").val();
	twitter=$("#twitter").val();
	discord=$("#discord").val();
	twitch=$("#twitch").val();
	tiktok=$("#tiktok").val();
	mdp=$("#mdp").val();
	image=$("#imageUrl").val();
	presentation=$("#presentation").val();
	actif = $("#actif").is(':checked');
	if(actif)actif=1;else{actif=0};
	structure=$("#structure").val();

	if(estRempli() && verifImage(image) && domaineValide(domaineMail) && verifPres(presentation)){

		// ------------------------------------------------------------------------- Ajout de l'inscription dans la table client
		const ajoutpdn = pdnAjout("php/pdnAjout.php",nom,prenom,profession,idMail,domaineMail,portablePro,facebook,snapchat,instagram,whatsApp,youtube,twitter,discord,twitch,tiktok,mdp,image,presentation,actif,structure);

        alert("Le PDN a été correctement ajoutée à la base de données");
		location.reload();
	}
	else {
		location.reload();
		// $("#form1")[0].reset();
		// $("#form2")[0].reset();
		// $("#form3")[0].reset();
	}
});

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK POUR REMETTRE LE STYLE INITALE DANS LES ZONES INPUT DU FORMULAIRE
$(".form-control,.form-control-sm").click(function(){
		$(this).css("border","none");
});


// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Les champs sont-ils bien remplis ?
const estRempli = () => {

	if(!nom){
		$("#nom").css("border","solid 2px #d82c2e");
		alert('Le champ "Nom" est vide.')
		etat=false;
	}
	if(!prenom){
		$("#prenom").css("border","solid 2px #d82c2e");
		alert('Le champ "Prénom" est vide.')
		etat=false;
	}
	if(!profession){
		$("#profession").css("border","solid 2px #d82c2e");
		alert('Le champ "Profession" est vide.')
		etat=false;
	}
	if(!idMail){
		$("#idMail").css("border","solid 2px #d82c2e");
		alert('Le champ "Identifiant Mail" est vide.')
		etat=false;
	}
	if(!domaineMail){
		$("#domaineMail").css("border","solid 2px #d82c2e");
		alert('Le champ "Domaine Mail" est vide.')
		etat=false;
	}
	// if(!facebook){
	// 	$("#facebook").css("border","solid 2px #d82c2e");
	// 	alert('Le champ "Facebook" est vide.')
	// 	etat=false;
	// }
	// if(!mdp){
	// 	$("#mdp").css("border","solid 2px #d82c2e");
	// 	alert('Le champ "Mot de passe" est vide.')
	// 	etat=false;
	// }
	// if(!image){
	// 	$("#imageUrl").css("border","solid 2px #d82c2e");
	// 	alert('Le champ "Image URL" est vide.')
	// 	etat=false;
	// }
    if(!presentation){
        $("#presentation").css("border","solid 2px #d82c2e");
		alert('Le champ "Présentation" est vide.')
        etat=false;
    }
	return etat;
}

// ----------------------------------------------------------------------------- Fonction vérification du numéro de téléphone
// const verifTel = tel => {
// 	const regexTel = /^0[0-9]([ .-]?[0-9]{2}){4}$/;
//     if(regexTel.test(tel)) etat=true;
//     else {
//     	alert("Le numéro de téléphone n'est pas valide.");
//     	etat=false;
//     }
// return etat;
// }

// ----------------------------------------------------------------------------- Le contenu du champ présentation contient-il moins de 700 caractères ?
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

// ----------------------------------------------------------------------------- Le code postal est-il valide en France ?
// const verifCp = cp => {
// const regexCp = /^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/;
//     if(regexCp.test(cp)) etat=true;
//     else {
//     alert("Ce n'est pas un code postal (français) valide");
//     etat=false;
//     }
// return etat;
// }
