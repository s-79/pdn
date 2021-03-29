let nom = "";
let adresse = "";
let ville = "";
let tel = "";
let image = "";
let presentation = "";
let chaine = "";
let etat = true;

// --------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	$("#imgFile").hide();
	$("#imgAff").hide();

	// ----------------------------------------------------------------------------- Remplissage automatique du champ ville concaténé avec le code postal
	const chaineXmlVille=getXmlBase("php/sqlxml.php","v_ville","0","0");
	afficheListe("ville",chaineXmlVille,"v_ville","id_ville","ville_CP");

	// ----------------------------------------------------------------------------- Affichage dynamique des checkbox "type"
	const xmlType=getXmlBase("php/sqlxml.php","type","0","0");
	$(xmlType).find("type").each(function(){
		const nom_type = $(this).find("nom_type").text();
		const id_type = $(this).find("id_type").text();
		chaine +=   "<label class='control-label col-4'></label>";
		chaine +=   "<div class='form-check-sm col-7'>";
		chaine +=   	"<input class='form-check-input' type='checkbox' value='"+id_type+"' id='"+id_type+"'>";
		chaine +=   	"<label class='form-check-label' for='"+id_type+"'>"+nom_type+"</label>";
		chaine +=   "</div>";
	});
	$("#type").append(chaine);
});

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS
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

// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// ----------------------------------------------------------------------------- Récupération des valeurs dans les zones de saisie au moment du click
	nom=$("#nom").val();
	adresse=$("#adresse").val();
	ville=$("#ville").val();
	tel=$("#tel").val();
	site=$("#site").val();
	image=$("#imageUrl").val();
	presentation=$("#presentation").val();

	if(estRempli() && checkType() && verifTel(tel) && verifPres(presentation) && structureExist(nom) && verifImage(image)){

		// ------------------------------------------------------------------------- Ajout de l'inscription dans la table structure
		const ajoutstructure = strAjout("php/strAjout.php",nom,adresse,ville,tel,site,image,presentation);

		// ------------------------------------------------------------------------- Récupération de l'id de la structure nouvellement créee
		// Ajouter un  if (ajoutstructure==="ok") si besoin de temporiser entre l'inscription bdd et la recup de l'id.
		const chaineSelectedStr=getXmlBase("php/sqlxml.php","v_structure","nom_structure",nom);
		const idStr=getElement(chaineSelectedStr,"v_structure","nom_structure",nom,"id_structure");

		// ------------------------------------------------------------------------- Parcours de la base type et récupération des id
		const xmlType=getXmlBase("php/sqlxml.php","type","0","0");
		$(xmlType).find("type").each(function(){
			const idType = $(this).find("id_type").text();
		// ------------------------------------------------------------------------- Quelles sont les cases types cochées ?
			const divIdType = "#"+idType;
			const typeCheck = $(divIdType).is(':checked');
		// ------------------------------------------------------------------------- Ajout des "types" cochées dans la table "associer"
			if (typeCheck) {
				const associerajout = association("php/associerAjout.php",idType,idStr);
			}
		});

        alert("La structure a été correctement ajoutée à la base de données");
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
	if(!adresse){
		$("#adresse").css("border","solid 2px #d82c2e");
		alert('Le champ "Adresse" est vide.')
		etat=false;
	}
	if(!tel){
		$("#tel").css("border","solid 2px #d82c2e");
		alert('Le champ "Téléphone" est vide.')
		etat=false;
	}
	if(!image){
		$("#imageUrl").css("border","solid 2px #d82c2e");
		alert('Le champ "Image URL" est vide.')
		etat=false;
	}
    if(!presentation){
        $("#presentation").css("border","solid 2px #d82c2e");
		alert('Le champ "Présentation" est vide.')
        etat=false;
    }
	return etat;
}
// ----------------------------------------------------------------------------- Un moins 1 checkbox est-elle cochée ? ?
const checkType = () => {
	let chaineType = "";
	// ------------------------------------------------------------ Parcours de la base type et récupération des id
	const xmlType=getXmlBase("php/sqlxml.php","type","0","0");
	$(xmlType).find("type").each(function(){
		const idType = $(this).find("id_type").text();
	// ------------------------------------------------------------ Quelles sont les cases types cochées ?
		const divIdType = "#"+idType;
		const typeCheck = $(divIdType).is(':checked');
	// ------------------------------------------------------------ Ajout des "types" cochés dans une chaine
		if (typeCheck) {
			chaineType += idType;
		}
	});
	if(!chaineType){
		etat=false;
		alert("Aucun type de structure n'est séléctionné.")
	}
	return etat;
}

// ----------------------------------------------------------------------------- Le nom de structure n'est-il pas déjà utilisé ?
const structureExist = nom => {
	const existe = exist("php/strExistNom.php", nom);
	if(existe==="1") {
		alert("Le nom de structure est déjà connu dans la base de données.");
		etat = false;
	}
	else {
		etat = true;
	}
return etat;
}

// ----------------------------------------------------------------------------- Le numéro de tel est-il valide ?
const verifTel = tel => {
const regexTel = /^0[0-9]([ .-]?[0-9]{2}){4}$/;
    if(regexTel.test(tel)) etat=true;
    else {
    alert("Le numéro de téléphone n'est pas valide.");
    etat=false;
    }
return etat;
}

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
// function emailValide(email){
// 	if(email.length<8)
// 		 return false;
// 	var p1=email.indexOf('@');
// 	var p2 = email.indexOf('.');
// 	if(p1>=2 && p2>(p1+2))
// 	return true;
// 	else return false;
// }

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
