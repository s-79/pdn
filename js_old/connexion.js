$(function(){
	// -------------------------------------------------------------------------------------------------------------- Mettre en valeur le menu actif
	$("#connexMenu").toggleClass("nav-link-toggle");
});
//
// $("#ValiderConnexion").click(function(){
//     // ----------------------------------------------------------------------------------------------- Récupération des infos de connexion
//     const nom = $("#idMail").val();
//     const domaine = $("#domaineMail").val();
//     const mdp = $("#mdp").val();
//
//     // --------------------------------------------------------------------------------------------------- Création d'un jeton de session
//         const xmlPdn = getXmlBase("php/sqlxml.php","v_promeneur_structure","mail_nom_pdn",nom);
//         const idPdn=getElement(xmlPdn,"v_promeneur_structure","mail_domaine_pdn",domaine,"id_pdn");
//         sessionStorage.setItem("PdnConnect","");
//         sessionStorage.setItem("PdnConnect",idPdn);
//
//     // --------------------------------------------------------------------------------------------------Vérification et redirection si OK
//     const connex = connexion("php/connex.php",nom,domaine,mdp)
// 	if (connex==="1"){
// 		location.href='bienvenue.php';
// 	}
//     // else {
//     //     alert("Identifiant ou mot de passe incorrect");
//     // }
// });
