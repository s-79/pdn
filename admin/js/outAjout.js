let id_pdn = "";
let id = "";
let nom = "";
let them = "";
let them2 = "";
let them3 = "";
let them4 = "";
let them5 = "";
let description = "";
let image = "";
let fichier = "";
let age = "";
let nom_editeur = "";
let site_editeur = "";
let valide = "";
let etat = true;

// --------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	$("#imgFile,#fichierLocal").hide();
	$("#imgAff,#fileAff").hide();

	// ----------------------------------------------------------------------------- Remplissage automatique des champs "catégorie"
	const chaineXmlCat=getXmlBase("php/sqlxml.php","categorie","0","0");
	afficheListe("cat",chaineXmlCat,"categorie","id_categorie","nom_categorie");
	afficheListe("cat2",chaineXmlCat,"categorie","id_categorie","nom_categorie");
	afficheListe("cat3",chaineXmlCat,"categorie","id_categorie","nom_categorie");
	afficheListe("cat4",chaineXmlCat,"categorie","id_categorie","nom_categorie");
	afficheListe("cat5",chaineXmlCat,"categorie","id_categorie","nom_categorie");

	// ----------------------------------------------------------------------------- Remplissage automatique des champs "thématique"
	const chaineXmlThem=getXmlBase("php/sqlxml.php","thematique","0","0");
	afficheListe("them",chaineXmlThem,"thematique","id_thematique","nom_thematique");
	afficheListe("them2",chaineXmlThem,"thematique","id_thematique","nom_thematique");
	afficheListe("them3",chaineXmlThem,"thematique","id_thematique","nom_thematique");
	afficheListe("them4",chaineXmlThem,"thematique","id_thematique","nom_thematique");
	afficheListe("them5",chaineXmlThem,"thematique","id_thematique","nom_thematique");
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS ILLUSTRATION
$("#choixImgFile").click(function(){
		$("#imageUrl").val("");
		$("#imgAff").html("");
		$("#imgFile").show();
		$("#imageUrl")[0].disabled = true;

});
$("#choixImgUrl").click(function(){
		// $(imgUrl).show();
		$("#imgFile").hide();
		// Pour dégriser la case si elle l'était suite à un ajout d'image
		$("#imageUrl")[0].disabled = false;
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS FICHIER
$("#choixLocalFile").click(function(){
		$("#fileUrl").val("");
		$("#fileAff").html("");
		$("#fichierLocal").show();

});
$("#choixFileUrl").click(function(){
		// $(imgUrl).show();
		$("#fichierLocal").hide();
		// Pour dégriser la case si elle l'était suite à un ajout d'image
		$("#fileUrl")[0].disabled = false;
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR L'ICONE D'AJOUT DE THEMATIQUE
$("#plus2").click(function(){
	$("#divThem2").toggleClass("d-block");
	// $("#plus").removeClass("fa-plus-circle");
	$("#plus2").toggleClass("fa-minus-circle");
	$("#plus2").toggleClass("fa-plus-circle");
});

$("#plus3").click(function(){
	$("#divThem3").toggleClass("d-block");
	// $("#plus").removeClass("fa-plus-circle");
	$("#plus3").toggleClass("fa-minus-circle");
	$("#plus3").toggleClass("fa-plus-circle");
});

$("#plus4").click(function(){
	$("#divThem4").toggleClass("d-block");
	// $("#plus").removeClass("fa-plus-circle");
	$("#plus4").toggleClass("fa-minus-circle");
	$("#plus4").toggleClass("fa-plus-circle");
});

$("#plus5").click(function(){
	$("#divThem5").toggleClass("d-block");
	// $("#plus").removeClass("fa-plus-circle");
	$("#plus5").toggleClass("fa-minus-circle");
	$("#plus5").toggleClass("fa-plus-circle");
});

// ------------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE CHOIX DES CATEGORIES
$("#cat").change(function(){
	const choixCat=$("#cat").val();
	if (choixCat==="0"){xmlThem=getXmlBase("php/sqlxml.php","thematique","0","0");}
	else {xmlThem=getXmlBase("php/sqlxml.php","thematique","id_categorie",choixCat);}
	$("#them").html("<option value='0'>Aucune thématique séléctionnée</option>");
	afficheListe("them",xmlThem,"thematique","id_thematique","nom_thematique");
});

$("#cat2").change(function(){
	const choixCat2=$("#cat2").val();
	if (choixCat2==="0"){xmlThem2=getXmlBase("php/sqlxml.php","thematique","0","0");}
	else {xmlThem2=getXmlBase("php/sqlxml.php","thematique","id_categorie",choixCat2);}
	$("#them2").html("<option value='0'>Aucune thématique séléctionnée</option>");
	afficheListe("them2",xmlThem2,"thematique","id_thematique","nom_thematique");
});

$("#cat3").change(function(){
	const choixCat3=$("#cat3").val();
	if (choixCat3==="0"){xmlThem3=getXmlBase("php/sqlxml.php","thematique","0","0");}
	else {xmlThem3=getXmlBase("php/sqlxml.php","thematique","id_categorie",choixCat3);}
	$("#them3").html("<option value='0'>Aucune thématique séléctionnée</option>");
	afficheListe("them3",xmlThem3,"thematique","id_thematique","nom_thematique");
});

$("#cat4").change(function(){
	const choixCat4=$("#cat4").val();
	if (choixCat4==="0"){xmlThem4=getXmlBase("php/sqlxml.php","thematique","0","0");}
	else {xmlThem4=getXmlBase("php/sqlxml.php","thematique","id_categorie",choixCat4);}
	$("#them4").html("<option value='0'>Aucune thématique séléctionnée</option>");
	afficheListe("them4",xmlThem4,"thematique","id_thematique","nom_thematique");
});

$("#cat5").change(function(){
	const choixCat5=$("#cat5").val();
	if (choixCat5==="0"){xmlThem5=getXmlBase("php/sqlxml.php","thematique","0","0");}
	else {xmlThem5=getXmlBase("php/sqlxml.php","thematique","id_categorie",choixCat5);}
	$("#them5").html("<option value='0'>Aucune thématique séléctionnée</option>");
	afficheListe("them5",xmlThem5,"thematique","id_thematique","nom_thematique");
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// ----------------------------------------------------------------------------- Récupération des valeurs dans les zones de saisie au moment du click
	nom=$("#nom").val();
	them=$("#them").val();
	them2=$("#them2").val();
	them3=$("#them3").val();
	them4=$("#them4").val();
	them5=$("#them5").val();
	description=$("#description").val();
	image=$("#imageUrl").val();
	fichier=$("#fileUrl").val();
	age=$("#age").val();
	nom_editeur=$("#nom_editeur").val();
	site_editeur=$("#site_editeur").val();
	valide = $("#valide").is(':checked');
	if(valide)valide=1;else{valide=0};

	if(estRempli() && verifPres(description) && outilExist(nom) && verifImage(image) && verifAge(age) && themOK(them)){
		// ------------------------------------------------------------------------- Ajout de l'inscription dans la table outil
		const ajoutOutil = outAjout("php/outAjout.php",nom,description,image,fichier,age,nom_editeur,site_editeur,valide,id_pdn);

		// ------------------------------------------------------------------------- Ajout des associations outil/thématique dans la table classer

		// ------------------------------------------------------------------------- Récupération de l'id de la ressource nouvellement créee
		let chaineSelectedOut=getXmlBase("php/sqlxml.php","outil","nom_outil",nom);
		// chaineSelectedOut=encode_utf8(chaineSelectedOut);
		let idOutil = "";
		$(chaineSelectedOut).find("outil").each(function(){
			idOutil = $(this).find("id_outil").text();
		});

		// const idOutil=getElement(chaineSelectedOut,"outil","nom_outil",nom,"id_outil");
		if (!idOutil) alert("Les thématiques n'ont pas pu être associés automatiquement au nom de l'outil, merci de le faire dans le menu Modif/Suppr une ressource")
		const classerAjout = association("php/classerAjout.php",them,idOutil);

		if (them2 !== "0") {const classerAjout2 = association("php/classerAjout.php",them2,idOutil);}
		if (them3 !== "0") {const classerAjout3 = association("php/classerAjout.php",them3,idOutil);}
		if (them4 !== "0") {const classerAjout4 = association("php/classerAjout.php",them4,idOutil);}
		if (them5 !== "0") {const classerAjout5 = association("php/classerAjout.php",them5,idOutil);}

    alert("La ressource a été correctement ajoutée à la base de données");
		document.forms['form1'].reset();
		document.forms['form2'].reset();
		document.forms['form3'].reset();
		document.forms['form4'].reset();
		location.reload();
	}
	else {
		alert("La ressource n'a pas pu être ajoutée à la base de données");
		location.reload();
	}
});

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK POUR REMETTRE LE STYLE INITALE DANS LES ZONES INPUT DU FORMULAIRE
$(".form-control,.form-control-sm").click(function(){
		$(this).css("border","none");
});


// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Le nom de l'outil n'est-il pas déjà utilisé ?
const outilExist = nom => {
	const existe = exist("php/outExistNom.php", nom);
	if(existe==="1") {
		alert("Le nom de l'outil est déjà connu dans la base de données. Merci de choisir un autre nom.");
		etat = false;
	}
return etat;
}

// ----------------------------------------------------------------------------- Les champs sont-ils bien remplis ?
const themOK = (them) => {
	if (them==="0") {
		alert("Merci de séléctionner au moins 1 thématique.");
		etat=false;
	}
	return etat;
}


const estRempli = () => {

	if(!nom){
		$("#nom").css("border","solid 2px #d82c2e");
		alert('Le champ "Nom" est vide.')
		etat=false;
	}
	if(!description){
		$("#adresse").css("border","solid 2px #d82c2e");
		alert('Le champ "Description" est vide.')
		etat=false;
	}
	return etat;
}

// ----------------------------------------------------------------------------- Le contenu du champ age contient-il moins de 30 caractères ?
const verifAge = age => {
	lg=age.length;
	if(lg <=30) etat=true;
    else {
    alert('La taille du champ "Age" ne doit pas dépasser les 30 caractères.');
    etat=false;
    }
return etat;
}

// ----------------------------------------------------------------------------- Le contenu du champ présentation contient-il moins de 700 caractères ?
const verifPres = presentation => {
	lg=presentation.length;
	if(lg <=700) etat=true;
    else {
    alert("La description de la ressource ne doit pas dépasser les 700 caractères.");
    etat=false;
    }
return etat;
}

// ----------------------------------------------------------------------------- Est-ce qu'il y a une imgae ? et si oui, l'url de l'image termine-t-elle bien par jpg, jped, gif ou png ?
const verifImage = image => {
// const regexImage = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/ ;
const regexImage = /\.(?:jpg|jpeg|gif|png)$/ ;
	if(image) {
		if(regexImage.test(image)) etat=true;
		else {
		alert("Le lien vers l'image n'est pas valide, il doit se terminer par jpg, jpeg, png ou gif");
		etat=false;
		}
	}
	else {etat=true;}
return etat;
}

// function decode_utf8(s) {
//  return decodeURIComponent(escape(s));
// }
//
// function encode_utf8(s) {
//   return unescape(encodeURIComponent(s));
// }
