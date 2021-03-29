// ----------------------------------------------------------------------------- getXmlBase
function getXmlBase(urlphp,nomtable,clef,valeur){
    $.ajax({
        url:urlphp,
        datatype:"xml",
        data:{nomtable:nomtable,clef:clef,valeur:valeur},
        async:false,
        success:function(resultat)
        {xml=resultat;}
    });
    return xml;
}

// ----------------------------------------------------------------------------- getXml
function getXml(urlphp,dossier){
	$.ajax({
	    url:urlphp,
		datatype:"xml",
		data:{dossier:dossier},
		async:false,
		success:function(resultat)
		{xml=resultat;}
	});
    return xml;
}

// ----------------------------------------------------------------------------- ADMINISTRATION

// ----------------------------------------------------------------------------- Vérification id et mdp admin
function admin(urlphp,email,mdp){
	$.ajax({
	    url:urlphp,
		data:{email:email,mdp:mdp},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

function existeMailAdmin(urlphp,email){
	$.ajax({
	    url:urlphp,
		data:{email:email},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- TYPE

// ----------------------------------------------------------------------------- Ajout d'un type de structure
function typeAjout(urlphp,type){
    $.ajax({
	    url:urlphp,
        data:{type:type},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Modification d'un type de structure
function typeModif(urlphp,id,type){
    $.ajax({
	    url:urlphp,
        data:{id:id,type:type},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- CATÉGORIES

// ----------------------------------------------------------------------------- Ajout d'une catégorie de ressources
function catAjout(urlphp,cat,icone){
    $.ajax({
	    url:urlphp,
        data:{cat:cat,icone:icone},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Modification d'une catégorie de ressources
function catModif(urlphp,id,cat,icone){
    $.ajax({
	    url:urlphp,
        data:{id:id,cat:cat,icone:icone},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- THEMATIQUES

// ----------------------------------------------------------------------------- Ajout d'une thématique
function themAjout(urlphp,them,cat){
    $.ajax({
	    url:urlphp,
        data:{them:them,cat:cat},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Modification d'une thématique
function themModif(urlphp,id,them,cat){
    $.ajax({
	    url:urlphp,
        data:{id:id,them:them,cat:cat},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- OUTILS
// ----------------------------------------------------------------------------- Ajout d'un outil
function outAjout(urlphp,nom,description,image,fichier,age,nom_editeur,site_editeur,valide,id_pdn){
    $.ajax({
	    url:urlphp,
        data:{nom:nom,description:description,image:image,fichier:fichier,age:age,nom_editeur:nom_editeur,site_editeur:site_editeur,valide:valide,id_pdn:id_pdn},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Modification d'un outil
function outModif(urlphp,nom,description,image,fichier,age,nom_editeur,site_editeur,valide,id_pdn,id){
    $.ajax({
	    url:urlphp,
        data:{nom:nom,description:description,image:image,fichier:fichier,age:age,nom_editeur:nom_editeur,site_editeur:site_editeur,valide:valide,id_pdn:id_pdn,id:id},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- STRUCTURES

// ----------------------------------------------------------------------------- Ajout d'une structure
function strAjout(urlphp,nom,adresse,ville,tel,site,image,presentation){
    $.ajax({
	    url:urlphp,
        data:{nom:nom,adresse:adresse,ville:ville,tel:tel,site:site,image:image,presentation:presentation},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Modification d'une structure
function strModif(urlphp,nom,adresse,ville,tel,site,image,presentation,id){
    $.ajax({
	    url:urlphp,
		data:{nom:nom,adresse:adresse,ville:ville,tel:tel,site:site,image:image,presentation:presentation,id:id},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- PDN

// ----------------------------------------------------------------------------- Ajout d'un PDN
function pdnAjout(urlphp,nom,prenom,profession,idMail,domaineMail,portablePro,facebook,snapchat,instagram,whatsApp,youtube,twitter,discord,twitch,tiktok,mdp,image,presentation,actif,structure){
    $.ajax({
	    url:urlphp,
        data:{nom:nom,prenom:prenom,profession:profession,idMail:idMail,domaineMail:domaineMail,portablePro:portablePro,facebook:facebook,snapchat:snapchat,instagram:instagram,whatsApp:whatsApp,youtube:youtube,twitter:twitter,discord:discord,twitch:twitch,tiktok:tiktok,mdp:mdp,image:image,presentation:presentation,actif:actif,structure:structure},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Modification PDN
function pdnModif(urlphp,nom,prenom,profession,idMail,domaineMail,portablePro,facebook,snapchat,instagram,whatsApp,youtube,twitter,discord,twitch,tiktok,mdp,image,presentation,actif,structure,id){
    $.ajax({
	    url:urlphp,
		data:{nom:nom,prenom:prenom,profession:profession,idMail:idMail,domaineMail:domaineMail,portablePro:portablePro,facebook:facebook,snapchat:snapchat,instagram:instagram,whatsApp:whatsApp,youtube:youtube,twitter:twitter,discord:discord,twitch:twitch,tiktok:tiktok,mdp:mdp,image:image,presentation:presentation,actif:actif,structure:structure,id:id},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}


// ----------------------------------------------------------------------------- OUTILS

// ----------------------------------------------------------------------------- Existe ?
function exist(urlphp,valeur){
	$.ajax({
	    url:urlphp,
		data:{valeur:valeur},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Recherche
function rech(urlphp,recherche,nomtable,clef){
    $.ajax({
	    url:urlphp,
		data:{recherche:recherche,nomtable:nomtable,clef:clef},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Suppression
function suppr(urlphp,id){
    $.ajax({
	    url:urlphp,
		data:{id:id},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}

// ----------------------------------------------------------------------------- Ajout ou suppression d'une association entre 2 tables
function association(urlphp,idP,idE){
    $.ajax({
	    url:urlphp,
        data:{idP:idP,idE:idE},
		async:false,
		complete:function(resultat)
		{res= resultat.responseText;}
	});
	return res;
}
