// -------------------------------------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	$("#imgFile").hide();
	$("#imgAff").hide();
	// ---------------------------------------------------------------------------------------------------------- Remplissage automatique du champ ville concaténé avec le code postal
	const chaineXmlVille=getXmlBase("php/sqlxml.php","v_ville","0","0");
	afficheListe("ville",chaineXmlVille,"v_ville","id_ville","ville_CP");
	// ---------------------------------------------------------------------------------------------------------- Remplissage automatique de la liste des structures
	const chaineXmlStrInput=getXmlBase("php/sqlxml.php","v_structure","0","0");
	afficheListe("listeRecherche",chaineXmlStrInput,"v_structure","id_structure","nom_structure");

	// ---------------------------------------------------------------------------------------------------------- Affichage dynamique des checkboxes "type"
	const xmlType=getXmlBase("php/sqlxml.php","type","0","0");
	let chaine = "";
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

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT KEYUP DANS LA ZONE DE RECHERCHE
$("#zoneTexte").keyup(function(){
	const structureRecherche = $("#zoneTexte").val();
	const resultatRecherche = rech("php/sqlRech.php",structureRecherche,"v_structure","nom_structure");
	$("#listeRecherche").html("");
	// id : clef primaire - permet de récupérer l'id lorsqu'on click sur une valeur dans "#listeRecherche").change
	afficheListe("listeRecherche",resultatRecherche,"v_structure","id_structure","nom_structure");
});

// --------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS
$("#choixImgFile").click(function(){
	$("#imageUrl").val("");
	$("#imgAff").html("");
	$("#imgFile").show();
	$("#imageUrl")[0].disabled = true;
});
$("#choixImgUrl").click(function(){
	// $(imgUrl).show();
	$(imgFile).hide();
	$("#imageUrl")[0].disabled = false;
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "MODIFIER LA STRUCTURE"
$("#modifStr").click(function(){

// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la structure séléctionnée
	const selectedStr=$("#listeRecherche").val();
	const chainexmlStr=getXmlBase("php/sqlxml.php","v_structure","0","0");
	const nomM=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"nom_structure");
	const adresseM=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"adresse_structure");
	const idVilleM=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"id_ville");
	const ville_CP=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"ville_CP");
	const telM=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"tel_structure");
	const siteM=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"site_structure");
	const imageM=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"image_structure");
	const presentationM=getElement(chainexmlStr,"v_structure","id_structure",selectedStr,"presentation_structure");

// -------------------------------------------------------------------------------------------------------------- Vérif : Une structure est-elle bien séléctionnée ?
	if(selectedStr===null){
		alert("Aucune structure n'a été séléctionnée")
	}
	else {
	// -------------------------------------------------------------------------------------------------------------- Affichage liste des villes ac la ville actuelle en 1er
		const villeAff= "<option value='"+idVilleM+"'>"+ville_CP+"</option>";
		const chaineXmlVille=getXmlBase("php/sqlxml.php","v_ville","0","0");
		$("#ville").html("");
		$("#ville").prepend(villeAff);
		afficheListe("ville",chaineXmlVille,"v_ville","id_ville","ville_CP");

	// -------------------------------------------------------------------------------------------------------------- Affichage des valeurs récupérées dans le formulaire
		$("#id").val("");
		$("#id").val($("#id").val() + selectedStr);
		$("#nom").val("");
		$("#nom").val($("#nom").val() + nomM);
		$("#adresse").val("");
		$("#adresse").val($("#adresse").val() + adresseM);
		$("#tel").val("");
		$("#tel").val($("#tel").val() + telM);
		$("#site").val("");
		$("#site").val($("#site").val() + siteM);
		$("#imageUrl").val("");
		$("#imageUrl").val($("#imageUrl").val() + imageM);
		$("#presentation").val("");
		$("#presentation").val($("#presentation").val() + presentationM);

	// -------------------------------------------------------------------------------------------------------------- Décocher toutes les checkboxes
		const xmlCheckBox=getXmlBase("php/sqlxml.php","associer",0,0);
		$(xmlCheckBox).find("associer").each(function(){
			const id_typeCB = $(this).find("id_type").text();
			const divId_typeCB = "#"+id_typeCB;
			$(divId_typeCB).prop('checked', false);
		});

	// -------------------------------------------------------------------------------------------------------------- Cocher les checkboxes dont les types sont associés à la structure
		const xmlAssocier=getXmlBase("php/sqlxml.php","associer","id_structure",selectedStr);
		$(xmlAssocier).find("associer").each(function(){
			const id_type = $(this).find("id_type").text();
			const divId_type = "#"+id_type;
			$(divId_type).prop('checked', true);
		});
	}
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SUPPRIMER LA STRUCTURE"
$("#suppStr").click(function(){

// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la structure séléctionnée
	const selectedStr=$("#listeRecherche").val();

// -------------------------------------------------------------------------------------------------------------- Vérif : Une structure est-elle bien séléctionnée ?
	if(selectedStr===null){
		alert("Aucune structure n'a été séléctionnée")
	}
	else {
		// ------------------------------------------------------------------------------------------------------ Suppression de la structure dans les structures et associer (FK)
		const supprStructure = suppr("php/strSuppr.php",selectedStr);
		// ------------------------------------------------------------------------------------------------------ Actualisation de la liste des structures
		$("#listeRecherche").html("");
		const chaineXmlStrAct=getXmlBase("php/sqlxml.php","v_structure","0","0");
		afficheListe("listeRecherche",chaineXmlStrAct,"v_structure","id_structure","nom_structure");
		// ------------------------------------------------------------------------------------------------------- Vérif : La structure a-t-elle bien été supprimé de la BDD ?
		const testSuppr = exist("php/strExistId.php",selectedStr);
		if (testSuppr === "0") {
			alert("La structure a été correctement supprimée de la base de données.");
		}
		else {
			alert("La structure ne peut pas être supprimée de la BDD.");
		}
	}
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){
	// -------------------------------------------------------------------------------------------------------------- Récupération des valeurs modifiées dans les zones de saisie
	let id=$("#id").val();
	let nom=$("#nom").val();
	let adresse=$("#adresse").val();
	let ville=$("#ville").val();
	let tel=$("#tel").val();
	let site=$("#site").val();
	let image=$("#imageUrl").val();
	let presentation=$("#presentation").val();
	let etat = "";

	if(verifTel(tel) && verifPres(presentation) && verifImage(image)){
        // ------------------------------------------------------------------------------------------------------- Ajout de la modification dans la table client
		const modifstructure = strModif("php/strModif.php",nom,adresse,ville,tel,site,image,presentation,id);

		// ------------------------------------------------------------------------------------------------------- Parcours de la base type et récupération des id
		const xmlType=getXmlBase("php/sqlxml.php","type","0","0");
		$(xmlType).find("type").each(function(){
			const idType = $(this).find("id_type").text();
		// ------------------------------------------------------------------------------------------------------- Quelles sont les cases types cochées ?
			const divIdType = "#"+idType;
			const typeCheck = $(divIdType).is(':checked');

		// ------------------------------------------------------------------------------------------------------- Ajout des "types" cochées dans la table "associer"
			if (typeCheck) {
				const associerajout = association("php/associerAjout.php",idType,id);
			}
			else {
				const associersuppr = association("php/associerSuppr.php",idType,id);
			}
		});
		// -------------------------------------------------------------------------------------------------------- Actualisation de la liste des structures
		$("#listeRecherche").html("");
		const chaineXmlStrAct=getXmlBase("php/sqlxml.php","v_structure","0","0");
		afficheListe("listeRecherche",chaineXmlStrAct,"v_structure","id_structure","nom_structure");

		alert("La sructure a été correctement modifiée !");
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

// ----------------------------------------------------------------------------- FONCTIONS DEFINIES

// ----------------------------------------------------------------------------- Fonction vérification du numéro de téléphone
const verifTel = tel => {
const regexTel = /^0[0-9]([ .-]?[0-9]{2}){4}$/;
    if(regexTel.test(tel)) etat=true;
    else {
    alert("Le numéro de téléphone n'est pas valide.");
    etat=false;
    }
return etat;
}

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

// ----------------------------------------------------------------------------- Fonction vérification de l'url image
const verifImage = image => {
	// const regexImage = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/ ;
	const regexImage = /\.(?:jpg|jpeg|gif|png)$/ ;
    if(regexImage.test(image)) etat=true;
    else {
    alert("Le lien vers l'image n'est pas valide.");
    etat=false;
    }
return etat;
}

// ----------------------------------------------------------------------------- Vérification e-mail
// function emailValide(email){
// 	if(email.length<8)
// 		 return false;
// 	var p1=email.indexOf('@');
// 	var p2 = email.indexOf('.');
// 	if(p1>=2 && p2>(p1+2))
// 	return true;
// 	else return false;
// }

// ----------------------------------------------------------------------------- Fonction vérification du code postal
// const verifCp = cp => {
// const regexCp = /^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/;
//     if(regexCp.test(cp)) etat=true;
//     else {
//     alert("Ce n'est pas un code postal (français) valide");
//     etat=false;
//     }
// return etat;
// }
