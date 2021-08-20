// ----------------------------------------------------------------------------- ! ! ! - - I M G - - ! ! !

/* ---------------------------------------------------------------------------- Évenement click sur le bouton OK pour redimmensionner et enregistrer la photo */
// e c'est l'evenement - preventDefault annule celui-ci, ce qui signifie que chaque action par défaut se produisant normalement ne se produira pas.
$(document).ready(function (e) {
    $("#form_str3").on('submit',(function(e) {
        $("#message_admin_str").html("");
		e.preventDefault();
        $.ajax({
	        url: "../img/str/file.php",
	        type: "POST",
	        data:  new FormData(this),
	        contentType: false,
	        cache: false,
	        processData:false,
	        success: function(data) {
                const regex = new RegExp("img/str/");
                if(regex.test(data)) {
                    $("#image").val(data);
                    const imgAff = "<div class='text-center'><img src='../"+data+"' height='120'></br></br>Image ajoutée au formulaire</div>";
                    $("#message_admin_str").html(imgAff);
                } else { $("#message_admin_str").html(data); }

                $("#modalStrAdmin").modal('show');
	        }
        });
    }));
});

// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Action pour l'outil de recherche de la page act */
const ajaxListStr = (liste, id_str) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_str:"v_str"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner une stucture</option>");
            $(liste).append(displayList(response));
            if(id_str) {sleep(50).then(() => {$(liste).val(id_str);});}
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche d'événement */
const str_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {search_str:search},
    success: function(response){
        $("#str_res").html(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxGetStr = (id_str) => {
    $.ajax({
        url: 'php/str_Get.php',
        dataType: 'JSON',
        data : {id:id_str},
        success: function(response){
            const aap = response[0].aap;
            const nom = response[0].nom;
            const type = response[0].type;
            const adresse = response[0].adresse;
            const ville_id = response[0].ville_id;
            const lat = response[0].lat;
            const lon = response[0].lon;
            const qpv = response[0].qpv;
            const prij = response[0].prij;
            const tel = response[0].tel;
            const site = response[0].site;
            const image = response[0].image;
            const presentation = response[0].presentation;
            const resp_prenom = response[0].resp_prenom;
            const resp_nom = response[0].resp_nom;
            const resp_tel = response[0].resp_tel;
            const resp_mail_nom = response[0].resp_mail_nom;
            const resp_mail_domaine = response[0].resp_mail_domaine;
            const nb_pdn_lab = response[0].nb_pdn_lab;

            $("#id_str").val(id_str);
            $("#aap").val(aap);
            $("#nom").val(nom);
            $("#type").val(type);
            $("#adresse").val(adresse);
            $("#ville").val(ville_id);
            $("#lat").val(lat);
            $("#lon").val(lon);
            $("#qpv,#prij").prop('checked', false);
            if (qpv === "1") $("#qpv").prop('checked', true);
            if (prij === "1") $("#prij").prop('checked', true);
            $("#tel").val(tel);
            $("#site").val(site);
            $("#image").val(image);
            $("#presentation").val(presentation);
            $("#resp_prenom").val(resp_prenom);
            $("#resp_nom").val(resp_nom);
            $("#resp_tel").val(resp_tel);
            let resp_mail = "";
            if(resp_mail_domaine) resp_mail = `${resp_mail_nom}@${resp_mail_domaine}`;
            $("#resp_mail").val(resp_mail);
            $("#nb_pdn_lab").val(nb_pdn_lab);
        }
    });
}

//----------------------------------------------------------------------------- Récupération des coordos par l'id de l'action
const ajaxGetVille = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_ville:"v_ville"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner la ville *</option>");
            $(liste).append(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const str_Create = (aap, nom, type, adresse, ville_id, lat, lon, qpv, prij, tel, site, image, presentation, resp_prenom, resp_nom, resp_tel, resp_mail_nom, resp_mail_domaine, nb_pdn_lab) => {
    $.ajax({
        url: "php/str.php",
        dataType: 'JSON',
        data : {aap:aap, nom:nom, type:type, adresse:adresse, ville_id:ville_id, lat:lat, lon:lon, qpv:qpv, prij:prij, tel:tel, site:site, image:image, presentation:presentation, resp_prenom:resp_prenom, resp_nom:resp_nom, resp_tel:resp_tel, resp_mail_nom:resp_mail_nom, resp_mail_domaine:resp_mail_domaine, nb_pdn_lab:nb_pdn_lab},
        complete: function(){
            $('#message_admin_str').html("Structure ajoutée à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des structures
            str_Reset();
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const str_Update = (id, aap, nom, type, adresse, ville_id, lat, lon, qpv, prij, tel, site, image, presentation, resp_prenom, resp_nom, resp_tel, resp_mail_nom, resp_mail_domaine, nb_pdn_lab) => {
    $.ajax({
        url: 'php/str.php',
        dataType: 'JSON',
        data : {id:id, aap:aap, nom:nom, type:type, adresse:adresse, ville_id:ville_id, lat:lat, lon:lon, qpv:qpv, prij:prij, tel:tel, site:site, image:image, presentation:presentation, resp_prenom:resp_prenom, resp_nom:resp_nom, resp_tel:resp_tel, resp_mail_nom:resp_mail_nom, resp_mail_domaine:resp_mail_domaine, nb_pdn_lab:nb_pdn_lab},
        complete: function(){
            $('#message_admin_str').html("Structure modifiée dans la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des structures
            str_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const str_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/str.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function(){
            $('#message_admin_str').html("Structure supprimée de la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des structures
            str_Reset();
        }
    });

}
