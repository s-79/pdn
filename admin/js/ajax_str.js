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

/* ---------------------------------------------------------------------------- Outil de recherche de structure */
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

//----------------------------------------------------------------------------- Récupération de la liste des villes
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

//----------------------------------------------------------------------------- Récupération de la liste des QPV
const villeGetQpv = (liste, ville) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_ville_qpv:ville},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner le quartier QPV *</option>");
            $(liste).append(displayList(response));
        }
    });
}

//----------------------------------------------------------------------------- Récupération de la liste des QPV
const qpvGetPRIJ = (qpv) => {
    $.ajax({
        url: "php/str_Get.php",
        dataType: 'JSON',
        data : {id_qpv:qpv},
        success: function(response){
            const prij = response[0].prij;
            if (prij === "1") $("#prij").prop('checked', true);
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
            const postit = response[0].postit;
            const image = response[0].image;
            const presentation = response[0].presentation;
            const resp_prenom = response[0].resp_prenom;
            const resp_nom = response[0].resp_nom;
            const resp_tel = response[0].resp_tel;
            const resp_mail_nom = response[0].resp_mail_nom;
            const resp_mail_domaine = response[0].resp_mail_domaine;
            const autre_contact = response[0].autre_contact;
            let nb_pdn_act = response[0].nb_pdn_act;
            const nb_pdn_lab = response[0].nb_pdn_lab;
            const statut = response[0].statut;

            $("#id_str").val(id_str);
            $("#aap").val(aap);
            $("#nom").val(nom);
            $("#type").val(type);
            $("#adresse").val(adresse);
            sleep(300).then(() => {
                $("#ville").val(ville_id);
                villeGetQpv("#qpv", ville_id);
                sleep(300).then(() => {$("#qpv").val(qpv);});
            });
            $("#lat").val(lat);
            $("#lon").val(lon);
            $("#prij").prop('checked', false);
            if (prij === "1") $("#prij").prop('checked', true);
            $("#tel").val(tel);
            $("#site").val(site);
            if(postit) {
                $("#postItIcon").removeClass("text-white");
                $("#postItIcon").addClass("text-warning");
            }
            else {
                $("#postItIcon").removeClass("text-warning");
                $("#postItIcon").addClass("text-white");
            }
            $("#postit").val(postit);
            $("#image").val(image);
            $("#presentation").val(presentation);
            $("#resp_prenom").val(resp_prenom);
            $("#resp_nom").val(resp_nom);
            $("#resp_tel").val(resp_tel);
            let resp_mail = "";
            if(resp_mail_domaine) resp_mail = `${resp_mail_nom}@${resp_mail_domaine}`;
            $("#resp_mail").val(resp_mail);
            if (!nb_pdn_act) nb_pdn_act = 0;
            $("#autre_contact").val(autre_contact);
            $("#nb_pdn_act").val(nb_pdn_act);
            $("#nb_pdn_lab").val(nb_pdn_lab);
            $("#statut").val(statut);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des PDN en fonction de l'id du PDN
const ajaxStrPdn = (id_str, liste) => {
    $.ajax({
        url: "php/str_Get.php",
        dataType: 'JSON',
        data : {id_str_tab_pdn:id_str},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const prenom = response[i].prenom;
                const nom = response[i].pdn_nom;
                const actif = response[i].actif;
                const date_entree = response[i].date_entree;
                const date_sortie = response[i].date_sortie;
                if(parseInt(actif)===1) res +=`<tr style="cursor: pointer;background-color: rgba(0, 255, 0, 0.5);" onclick="id_pdn_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${date_entree}</td><td>${prenom}</td><td>${nom}</td></tr>`;
                if(date_sortie) res +=`<tr style="cursor: pointer;background-color: rgba(255, 0, 0, 0.3);" onclick="id_pdn_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${date_entree}</td><td>${prenom}</td><td>${nom}</td></tr>`;
                if(parseInt(actif)===0 && !date_sortie) res +=`<tr style="cursor: pointer;background-color: rgba(240, 255, 0, 0.5);" onclick="id_pdn_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${date_entree}</td><td>${prenom}</td><td>${nom}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des actions en fonction de l'id du PDN
const ajaxStrAct = (id_str, liste) => {
    $.ajax({
        url: "php/str_Get.php",
        dataType: 'JSON',
        data : {id_str_tab_act:id_str},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const dat = response[i].dat;
                const type = response[i].type;
                const intitule = response[i].intitule;
                const commentaires = response[i].commentaires;
                res += `<tr style="cursor: pointer" onclick="id_act_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${dat}</td><td>${type}</td><td>${intitule}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const str_Create = (aap, nom, type, adresse, ville_id, lat, lon, qpv, prij, tel, site, postit, image, presentation, resp_prenom, resp_nom, resp_tel, resp_mail_nom, resp_mail_domaine, autre_contact, nb_pdn_lab, statut) => {
    $.ajax({
        url: "php/str.php",
        dataType: 'JSON',
        data : {aap:aap, nom:nom, type:type, adresse:adresse, ville_id:ville_id, lat:lat, lon:lon, qpv:qpv, prij:prij, tel:tel, site:site, postit:postit, image:image, presentation:presentation, resp_prenom:resp_prenom, resp_nom:resp_nom, resp_tel:resp_tel, resp_mail_nom:resp_mail_nom, resp_mail_domaine:resp_mail_domaine, autre_contact:autre_contact, nb_pdn_lab:nb_pdn_lab, statut:statut},
        complete: function(){
            $('#message_admin_str').html("Structure ajoutée à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des structures
            str_Reset();
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const str_Update = (id, aap, nom, type, adresse, ville_id, lat, lon, qpv, prij, tel, site, postit, image, presentation, resp_prenom, resp_nom, resp_tel, resp_mail_nom, resp_mail_domaine, autre_contact, nb_pdn_lab, statut) => {
    $.ajax({
        url: 'php/str.php',
        dataType: 'JSON',
        data : {id:id, aap:aap, nom:nom, type:type, adresse:adresse, ville_id:ville_id, lat:lat, lon:lon, qpv:qpv, prij:prij, tel:tel, site:site, postit:postit, image:image, presentation:presentation, resp_prenom:resp_prenom, resp_nom:resp_nom, resp_tel:resp_tel, resp_mail_nom:resp_mail_nom, resp_mail_domaine:resp_mail_domaine, autre_contact:autre_contact, nb_pdn_lab:nb_pdn_lab, statut:statut},
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
            //----------------------------------------------------------------  L'id de la structure apparait-elle encore dans la BDD ?
            $.ajax({
                url: "php/str_Get.php",
                dataType: 'JSON',
                data : {id_str_exist:id},
                success: function(response){
                    const res = response[0].res;
                    if(parseInt(res) === 1) $("#message_admin_str").html(`Suppression impossible : la structure séléctionnée doit être encore attachée à une action ou contenir au moins un·e PDN.`);
                    //---------------------------------------------------------- Envoie des infos vers la BDD
                    else {
                        $('#message_admin_str').html("Structure supprimée de la base de données.");
                        //------------------------------------------------------ Réinitialisation de la pages des structures
                        str_Reset();
                    }
                }
            });
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Stockage de l'id du PDN et envoie vers la page act
const id_pdn_storage = (id) => {
    sessionStorage.setItem('id_pdn', id);
    document.location='pdn.php';
}

// ----------------------------------------------------------------------------- Stockage de l'id de l'action et envoie vers la page act
const id_act_storage = (id) => {
    sessionStorage.setItem('id_act', id);
    document.location='act.php';
}
