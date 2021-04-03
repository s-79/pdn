function getXmlBase(urlphp,nomtable,clef,valeur){
    var xml = "";
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

function connexion(urlphp,nom,domaine,mdp){
	$.ajax({
	    url:urlphp,
		data:{nom:nom,domaine:domaine,mdp:mdp},
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
