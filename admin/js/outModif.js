// -------------------------------------------------------------------------------------------------------------- AU DÉMARRAGE
$(function(){
	$("#imgFile,#fichierLocal").hide();
	$("#imgAff,#fileAff").hide();
	// ---------------------------------------------------------------------------------------------------------- Remplissage automatique de la liste des outils
	const chaineXmlStrInput=getXmlBase("php/sqlxml.php","outil","0","0");
	afficheListe("listeRecherche",chaineXmlStrInput,"outil","id_outil","nom_outil");
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT KEYUP DANS LA ZONE DE RECHERCHE
$("#zoneTexte").keyup(function(){
	const outilRecherche = $("#zoneTexte").val();
	const resultatRecherche = rech("php/sqlRech.php",outilRecherche,"outil","nom_outil");
	$("#listeRecherche").html("");
	// id : clef primaire - permet de récupérer l'id lorsqu'on click sur une valeur dans "#listeRecherche").change
	afficheListe("listeRecherche",resultatRecherche,"outil","id_outil","nom_outil");
});
// --------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS VALIDEES OU A VALIDER
$("#ressourcesVal").click(function(){
	const chaineXmlStrInputVal=getXmlBase("php/sqlxml.php","outil","valide_outil","1");
	$("#listeRecherche").html("");
	afficheListe("listeRecherche",chaineXmlStrInputVal,"outil","id_outil","nom_outil");
});

$("#ressourcesAVal").click(function(){
	const chaineXmlStrInputAVal=getXmlBase("php/sqlxml.php","outil","valide_outil","0");
	$("#listeRecherche").html("");
	afficheListe("listeRecherche",chaineXmlStrInputAVal,"outil","id_outil","nom_outil");
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

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "MODIFIER LA STRUCTURE"
$("#modifOutil").click(function(){
		const selectedOut=$("#listeRecherche").val();

	// -------------------------------------------------------------------------------------------------------------- Vérif : Une ressource est-elle bien séléctionnée ?
		if(selectedOut===null){
			alert("Aucune ressource n'a été séléctionnée")
		}
		else {
			// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à l'outil à modifier
			const chainexmlOut=getXmlBase("php/sqlxml.php","outil","0","0");
			const id_pdnM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"id_pdn");
			const nomM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"nom_outil");
			const descriptionM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"description_outil");
			const imageM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"image_outil");
			const fichierM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"fichier_outil");
			const ageM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"age_outil");
			const nom_editeurM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"nom_editeur_outil");
			const site_editeurM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"site_editeur_outil");
			const valideM=getElement(chainexmlOut,"outil","id_outil",selectedOut,"valide_outil");

			// -------------------------------------------------------------------------------------------------------------- Récupération des infos sur le PDN qui a publié la ressource
			if (id_pdnM) {
				const chainexmlPdn=getXmlBase("php/sqlxml.php","pdn","0","0");
				const prenom_pdnM=getElement(chainexmlPdn,"pdn","id_pdn",id_pdnM,"prenom_pdn");
				const nom_pdnM=getElement(chainexmlPdn,"pdn","id_pdn",id_pdnM,"nom_pdn");
				// -------------------------------------------------------------------------------------------------------------- La div apparait uniquement si un pdn a publié la ressource
				$("#div_pdn").addClass("d-block");
				$("#id_pdn").val("");
				$("#id_pdn").val($("#id_pdn").val() + id_pdnM +" - "+prenom_pdnM+" "+nom_pdnM);
				$("#divId_pdn").val("");
				$("#divId_pdn").val($("#divId_pdn").val() + id_pdnM);
			}
			else {
				$("#div_pdn").removeClass("d-block");
				$("#id_pdn").val("");
				$("#divId_pdn").val("");
			}
			// -------------------------------------------------------------------------------------------------------------- Affichage des valeurs récupérées dans le formulaire
			$("#id").val("");
			$("#id").val($("#id").val() + selectedOut);
			$("#nom").val("");
			$("#nom").val($("#nom").val() + nomM);
			$("#description").val("");
			$("#description").val($("#description").val() + descriptionM);
			$("#imageUrl").val("");
			$("#imageUrl").val($("#imageUrl").val() + imageM);
			$("#fileUrl").val("");
			$("#fileUrl").val($("#fileUrl").val() + fichierM);
			$("#age").val("");
			$("#age").val($("#age").val() + ageM);
			$("#nom_editeur").val("");
			$("#nom_editeur").val($("#nom_editeur").val() + nom_editeurM);
			$("#site_editeur").val("");
			$("#site_editeur").val($("#site_editeur").val() + site_editeurM);
			$("#valide").prop('checked', false);
			if (valideM === "1") $("#valide").prop('checked', true);
			// -------------------------------------------------------------------------------------------------------------- Récupération des thématiques relatives à l'outil à modifier
			const chainexmlClasser=getXmlBase("php/sqlxml.php","v_outil_them","id_outil",selectedOut);
			let cpt = 0;
			let chaine = "";

			// $("#thematiques").html("");
			// -------------------------------------------------------------------------------------------------------------- Faire apparaitre les thématiques en haut des listes déroulantes
			$(chainexmlClasser).find("v_outil_them").each(function(){
				const nom_thematique = $(this).find("nom_thematique").text();
				const id_thematique = $(this).find("id_thematique").text();
				cpt++;
				// chaine +="<div class='form-group'>";
				// chaine +="<label for='themM"+cpt+"' class='control-label col-4'>Thématique "+cpt+"</label>";
				// chaine +="<input type='text' class='form-control-sm col-7 ml-1' id='themM"+cpt+"' placeholder='"+nom_thematique+"'></div>";
				chaine +="<div class='form-group'>";
				chaine +="<label for='them"+cpt+"' class='control-label col-4'>Modifier la thématique "+cpt+"</label>";
				chaine +="<select class='form-control-sm col-7 ml-1' id='them"+cpt+"'><option value='0'>"+nom_thematique+"</option></select></div>";
				// -------------------------------------------------------------------------------------------------------------- Création d'une div invisible pour stocker l'id de la thématique avant modif
				chaine +="<div class='d-none' id='themOrigin"+cpt+"'>"+id_thematique+"</div>";
			});
			$("#thematiques").html(chaine);

			let chaineChoixThem ="";
			let chaineChoixThem2="";
			let chaineChoixThem3="";
			let chaineChoixThem4="";
			let chaineChoixThem5="";

			$("#choixThem").html("");
			// -------------------------------------------------------------------------------------------------------------- Ajout de listes de choix de thématique en fonction du nombre de listes déjà créées
			if($("#them5").length===0) {
				chaineChoixThem5 += "<div class='form-group'><label for='them5' class='control-label col-4'>Choisir thématique 5</label>";
				chaineChoixThem5 += "<select class='form-control-sm col-7 ml-1' id='them5'><option value='0'>Choisir une 5ème thématique</option></select></div>";
				if($("#them4").length===0) {
					chaineChoixThem4 += "<div class='form-group'><label for='them4' class='control-label col-4'>Choisir thématique 4</label>";
					chaineChoixThem4 += "<select class='form-control-sm col-7 ml-1' id='them4'><option value='0'>Choisir une 4ème thématique</option></select></div>";
					if($("#them3").length===0) {
						chaineChoixThem3 += "<div class='form-group'><label for='them3' class='control-label col-4'>Choisir thématique 3</label>";
						chaineChoixThem3 += "<select class='form-control-sm col-7 ml-1' id='them3'><option value='0'>Choisir une 3ème thématique</option></select></div>";
						if($("#them2").length===0) {
							chaineChoixThem2 += "<div class='form-group'><label for='them2' class='control-label col-4'>Choisir thématique 2</label>";
							chaineChoixThem2 += "<select class='form-control-sm col-7 ml-1' id='them2'><option value='0'>Choisir une 2ème thématique</option></select></div>";
						}
					}
				}
			}
			chaineChoixThem += chaineChoixThem2+chaineChoixThem3+chaineChoixThem4+chaineChoixThem5;
			$("#choixThem").html(chaineChoixThem);

			// ----------------------------------------------------------------------------- Remplissage automatique des champs "thématique"
			const chaineXmlThem=getXmlBase("php/sqlxml.php","thematique","0","0");
			afficheListe("them1",chaineXmlThem,"thematique","id_thematique","nom_thematique");
			afficheListe("them2",chaineXmlThem,"thematique","id_thematique","nom_thematique");
			afficheListe("them3",chaineXmlThem,"thematique","id_thematique","nom_thematique");
			afficheListe("them4",chaineXmlThem,"thematique","id_thematique","nom_thematique");
			afficheListe("them5",chaineXmlThem,"thematique","id_thematique","nom_thematique");
		}
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SUPPRIMER LA RESSOURCE"
$("#suppOut").click(function(){
// -------------------------------------------------------------------------------------------------------------- Récupération des infos relatives à la ressource séléctionnée
	const selectedOut=$("#listeRecherche").val();
// -------------------------------------------------------------------------------------------------------------- Vérif : Une ressource est-elle bien séléctionnée ?
	if(selectedOut===null){
		alert("Aucune ressource n'a été séléctionnée")
	}
	else {
		// ------------------------------------------------------------------------------------------------------ Suppression de la ressource dans les tables outils et classer (FK)
		const supprOutil = suppr("php/outSuppr.php",selectedOut);
		// ------------------------------------------------------------------------------------------------------ Actualisation de la liste des structures
		$("#listeRecherche").html("");
		const chaineXmlOutAct=getXmlBase("php/sqlxml.php","outil","0","0");
		afficheListe("listeRecherche",chaineXmlOutAct,"outil","id_outil","nom_outil");
		// ------------------------------------------------------------------------------------------------------- Vérif : La structure a-t-elle bien été supprimé de la BDD ?
		const testSuppr = exist("php/outExistId.php",selectedOut);
		if (testSuppr === "0") {
			alert("La ressource a été correctement supprimée de la base de données.");
		}
		else {
			alert("La ressource ne peut pas être supprimée de la BDD.");
		}
	}
});

// -------------------------------------------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON VALIDER
$("#btnvalide").click(function(){

	// ---------------------------------------------------------------------------------------------------------- Récupération des valeurs dans les zones de saisie au moment du click
	id_pdn=$("#divId_pdn").val();
	// "0" remonte null dans la BDD
	if (id_pdn==="")id_pdn="0";
	id=$("#id").val();
	nom=$("#nom").val();
	them1=$("#them1").val();
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
	let etat = "";

	if(verifPres(description) && verifImage(image) && verifAge(age)){
        // ------------------------------------------------------------------------------------------------------- Ajout de la modification dans la table client
		const modifOutil = outModif("php/outModif.php",nom,description,image,fichier,age,nom_editeur,site_editeur,valide,id_pdn,id);
		// ------------------------------------------------------------------------------------------------------- Suppression des associations outil/thématique d'origine (!=="0") dans la table classer
		// ------------------------------------------------------------------------------------------------------- et ajout des nouvelles associations outil/thématique non-modifiées (!=="0") dans la table classer
		if (them1 !== "0"){
			let themOrigin1=$("#themOrigin1").html();
			association("php/classerSuppr.php",themOrigin1,id);
			association("php/classerAjout.php",them1,id);
		}
		if (them2 !== "0"){
			let themOrigin2=$("#themOrigin2").html();
			association("php/classerSuppr.php",themOrigin2,id);
			association("php/classerAjout.php",them2,id);
		}
		if (them3 !== "0"){
			let themOrigin3=$("#themOrigin3").html();
			association("php/classerSuppr.php",themOrigin3,id);
			association("php/classerAjout.php",them3,id);
		}
		if (them4 !== "0"){
			let themOrigin4=$("#themOrigin4").html();
			association("php/classerSuppr.php",themOrigin4,id);
			association("php/classerAjout.php",them4,id);
		}
		if (them5 !== "0"){
			let themOrigin5=$("#themOrigin5").html();
			association("php/classerSuppr.php",themOrigin5,id);
			association("php/classerAjout.php",them5,id);
		}

		const selectThem=$("#selectThem").val();
		if(selectThem==="2") {
			let themOrigin2=$("#themOrigin2").html();
			association("php/classerSuppr.php",themOrigin2,id);
		}
		if(selectThem==="3") {
			let themOrigin3=$("#themOrigin3").html();
			association("php/classerSuppr.php",themOrigin3,id);
		}
		if(selectThem==="4") {
			let themOrigin4=$("#themOrigin4").html();
			association("php/classerSuppr.php",themOrigin4,id);
		}
		if(selectThem==="5") {
			let themOrigin5=$("#themOrigin5").html();
			association("php/classerSuppr.php",themOrigin5,id);
		}


		// -------------------------------------------------------------------------------------------------------- Actualisation de la liste des structures
		$("#listeRecherche").html("");
		const chaineXmlOutAct=getXmlBase("php/sqlxml.php","outil","0","0");
		afficheListe("listeRecherche",chaineXmlOutAct,"outil","id_outil","nom_outil");

		alert("La ressource a été correctement modifiée !");
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

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ présentation
const verifPres = presentation => {
	lg=presentation.length;
	if(lg <=700) etat=true;
    else {
    alert("La description de la ressource ne doit pas dépasser les 700 caractères.");
    etat=false;
    }
return etat;
}

// ----------------------------------------------------------------------------- Fonction vérification de l'url image
const verifImage = image => {
	if (image) {
		// const regexImage = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/ ;
		const regexImage = /\.(?:jpg|jpeg|gif|png)$/ ;
	    if(regexImage.test(image)) etat=true;
	    else {
	    alert("Le lien vers l'image n'est pas valide.");
	    etat=false;
	    }
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
