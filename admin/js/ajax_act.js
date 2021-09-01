// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Action pour l'outil de recherche de la page act */
const ajaxListAct = (liste, id_act) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_act:"v_act"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner une action</option>");
            $(liste).append(displayList(response, 1));
            if(id_act) {sleep(50).then(() => {$(liste).val(id_act);});}
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche d'événement */
const act_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {search_act:search},
    success: function(response){
        $("#act_res").html(displayList(response, 1));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste des Ressources lorsqu'on clique sur le bouton (+) */
const ajaxListRess = (liste, checked) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_ress:"v_ress"},
        success: function(response){
            const len = response.length;
            let arrayIdRess = [];
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                res += `<div class="form-check">`;
                if(checked === "checked") res += `<input class="form-check-input" type="checkbox" value="" id="ress${id}" checked>`;
                else { res += `<input class="form-check-input" type="checkbox" value="" id="ress${id}">`}
                res += `<label class="form-check-label text-dark" for="ress${id}">${nom}</label></div>`;
                const ressId = `#ress${id}`;
                $(ressId).prop('checked', false);
                // -------------------------------------------------------------  Remplissage du tableau, conversion en string Json et stockage dans la variable de session
                arrayIdRess.push(ressId);
                const jsonIdRess = JSON.stringify(arrayIdRess);
                sessionStorage.setItem('jsonIdRess', jsonIdRess);
            }
            $(liste).html(res);

            if(!checked) {
                //-------------------------------------------------------------- Récupération et suppression d'un éventuel tableau précédemment stockée
                const jsonSelectedRess = sessionStorage.getItem('jsonSelectedRess');
                //-------------------------------------------------------------- Si des cases ont déja été cochées, on les recoche
                if(jsonSelectedRess) {
                    const arraySelectedRess = JSON.parse(jsonSelectedRess);
                    for(ressId of arraySelectedRess) $(ressId).prop('checked', true);
                }
            }
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des PDN lorsqu'on clique sur le bouton (+)  */
const ajaxListPdn = (liste, checked) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_pdn:"v_pdn"},
        success: function(response){
            const len = response.length;
            let arrayIdPdn = [];
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                res += `<div class="form-check">`;
                if(checked === "checked") res += `<input class="form-check-input" type="checkbox" value="" id="pdn${id}" checked>`;
                else { res += `<input class="form-check-input" type="checkbox" value="" id="pdn${id}">`}
                res += `<label class="form-check-label text-dark" for="pdn${id}">${nom}</label></div>`;
                const pdnId = `#pdn${id}`;
                $(pdnId).prop('checked', false);
                // ------------------------------------------------------------- Remplissage du tableau, conversion en string Json et stockage dans la variable de session
                arrayIdPdn.push(pdnId);
                const jsonIdPdn = JSON.stringify(arrayIdPdn);
                sessionStorage.setItem('jsonIdPdn', jsonIdPdn);
            }
            $(liste).html(res);

            if(!checked) {
                //-------------------------------------------------------------- Récupération et suppression d'un éventuel tableau précédemment stockée
                const jsonSelectedPdn = sessionStorage.getItem('jsonSelectedPdn');
                //-------------------------------------------------------------- Si des cases ont déja été cochées, on les recoche
                if(jsonSelectedPdn) {
                    const arraySelectedPdn = JSON.parse(jsonSelectedPdn);
                    for(pdnId of arraySelectedPdn) $(pdnId).prop('checked', true);
                }
            }
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des Partenaires lorsqu'on clique sur le bouton (+)  */
const ajaxListPart = (liste, checked) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_part:"v_part"},
        success: function(response){
            const len = response.length;
            let arrayIdPart = [];
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                res += `<div class="form-check">`;
                if(checked === "checked") res += `<input class="form-check-input" type="checkbox" value="" id="part${id}" checked>`
                else { res += `<input class="form-check-input" type="checkbox" value="" id="part${id}">`}
                res += `<label class="form-check-label text-dark" for="part${id}">${nom}</label></div>`;
                const partId = `#part${id}`;
                $(partId).prop('checked', false);
                // -------------------------------------------------------------  Remplissage du tableau, conversion en string Json et stockage dans la variable de session
                arrayIdPart.push(partId);
                const jsonIdPart = JSON.stringify(arrayIdPart);
                sessionStorage.setItem('jsonIdPart', jsonIdPart);
            }
            $(liste).html(res);

            if(!checked) {
                //------------------------------------------------------------------ Récupération et suppression d'un éventuel tableau précédemment stockée
                const jsonSelectedPart = sessionStorage.getItem('jsonSelectedPart');
                //------------------------------------------------------------------ Si des cases ont déja été cochées, on les recoche
                if(jsonSelectedPart) {
                    const arraySelectedPart = JSON.parse(jsonSelectedPart);
                    for(partId of arraySelectedPart) $(partId).prop('checked', true);
                }
            }
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des Structures lorsqu'on clique sur le bouton (+)  */
const ajaxListStr = (liste, checked) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_str:"v_str"},
        success: function(response){
            const len = response.length;
            let arrayIdStr = [];
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                res += `<div class="form-check">`;
                if(checked === "checked") res += `<input class="form-check-input" type="checkbox" value="" id="str${id}" checked>`
                else { res += `<input class="form-check-input" type="checkbox" value="" id="str${id}">`}
                res += `<label class="form-check-label text-dark" for="str${id}">${nom}</label></div>`;
                const strId = `#str${id}`;
                $(strId).prop('checked', false);
                // -------------------------------------------------------------  Remplissage du tableau, conversion en string Json et stockage dans la variable de session
                arrayIdStr.push(strId);
                const jsonIdStr = JSON.stringify(arrayIdStr);
                sessionStorage.setItem('jsonIdStr', jsonIdStr);
            }
            $(liste).html(res);

            if(!checked) {
                //------------------------------------------------------------------ Récupération et suppression d'un éventuel tableau précédemment stockée
                const jsonSelectedStr = sessionStorage.getItem('jsonSelectedStr');
                //------------------------------------------------------------------ Si des cases ont déja été cochées, on les recoche
                if(jsonSelectedStr) {
                    const arraySelectedStr = JSON.parse(jsonSelectedStr);
                    for(strId of arraySelectedStr) $(strId).prop('checked', true);
                }
            }
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des Coordo */
const ajaxListCoordo = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_coordo:"v_coordo"},
        success: function(response){
            const len = response.length;
            let arrayIdCoordo = [];
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                res += `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="coordo${id}">
                <label class="form-check-label text-white" for="coordo${id}">${nom}</label></div>`;
                const coordoId = `#coordo${id}`;
                $(coordoId).prop('checked', false);
                // -------------------------------------------------------------  Remplissage du tableau, conversion en string Json et stockage dans la variable de session
                arrayIdCoordo.push(coordoId);
                const jsonIdCoordo = JSON.stringify(arrayIdCoordo);
                sessionStorage.setItem('jsonIdCoordo', jsonIdCoordo);
            }
            $(liste).html(res);
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des Coordo */
const ajaxNewCoordo = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_coordo:"v_coordo"},
        success: function(response){
            const len = response.length;
            $(liste).html("<option selected value=''>Séléctionner un·e coordo</option>");
            $(liste).append(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxGetAct = (id_act) => {
    $.ajax({
        url: 'php/act_Get.php',
        dataType: 'JSON',
        data : {id:id_act},
        success: function(response){
            const id = response[0].id;
            const dat = response[0].dat;
            const type = response[0].type;
            const organise = response[0].organise;
            const intitule = response[0].intitule;
            const lieu = response[0].lieu;
            const ville = response[0].ville;
            const pj = response[0].pj;
            const support = response[0].support;
            const facebook = response[0].facebook;
            const whatsapp = response[0].whatsapp;
            const twitter = response[0].twitter;
            const site = response[0].site;
            const nb_ress = response[0].nb_ress;
            const duree = response[0].duree;
            const nb_pdn = response[0].nb_pdn;
            const nb_part = response[0].nb_part;
            const nb_str = response[0].nb_str;
            const nb_pers = response[0].nb_pers;
            const commentaires = response[0].commentaires;

            $("#id_act").val(id);
            $("#date").val(dat);
            $("#type").val(type);
            $("#organise").val(organise);
            $("#intitule").val(intitule);
            $("#lieu").val(lieu);
            $("#ville").val(ville);
            $("#support").val(support);
            $("#facebook,#whatsapp,#twitter").prop('checked', false);
            if (facebook === "1") $("#facebook").prop('checked', true);
            if (whatsapp === "1") $("#whatsapp").prop('checked', true);
            if (twitter === "1") $("#twitter").prop('checked', true);
            if (site === "1") $("#site").prop('checked', true);
            $("#nb_ress").val(nb_ress);
            $("#duree").val(duree);
            $("#nb_pdn").val(nb_pdn);
            $("#nb_part").val(nb_part);
            $("#nb_str").val(nb_str);
            $("#nb_pers").val(nb_pers);
            $("#commentaires").val(commentaires);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C O O R D O - - ! !

//----------------------------------------------------------------------------- Récupération des coordos par l'id de l'action
const ajaxGetCoordo = (id_act) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_coordo:id_act},
        success: function(response){
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#coordo"
                id += response[i].id;
                sleep(50).then(() => $(id).prop('checked', true));
            }
        }
    });
}

//----------------------------------------------------------------------------- Récupération des coordos par l'id de l'action
const coordoGetInfos = (id_coordo) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_coordo:id_coordo},
        success: function(response){
            const id = response[0].id;
            const prenom = response[0].prenom;
            const nom = response[0].nom;
            const actif = response[0].actif;

            $("#update_id_coordo").val(id);
            $("#update_prenom_coordo").val(prenom);
            $("#update_nom_coordo").val(nom);
            $("#update_actif_coordo").prop('checked', false);
            if (parseInt(actif) === 1) $("#update_actif_coordo").prop('checked', true);
        }
    });
}

const coordo_Create = (prenom, nom, actif) => {
    $.ajax({
        url: "php/act.php",
        dataType: 'JSON',
        data : {prenom_create_coordo:prenom, nom_coordo:nom, actif_coordo:actif},
        complete: function(){
            $("#modal_coordo").modal('hide');
            $("#modal_coordo_create").modal('hide');
            //------------------------------------------------------------------ Actualisation de la liste des Coordos
            ajaxListCoordo("#coordo");
            alert("Coordo ajouté·e à la base de données.");
        }
    });
}

const coordo_Update = (id, prenom, nom, actif) => {
    $.ajax({
        url: "php/act.php",
        dataType: 'JSON',
        data : {id_up_coordo:id, prenom_coordo:prenom, nom_coordo:nom, actif_coordo:actif},
        complete: function(){
            $("#modal_coordo").modal('hide');
            $("#modal_coordo_update").modal('hide');
            //------------------------------------------------------------------ Actualisation de la liste des Coordos
            ajaxListCoordo("#coordo");
            alert("Coordo modifié·e dans la base de données.");
        }
    });
}

const coordo_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/act.php",
        dataType: 'JSON',
        data : {id_del_coordo:id},
        complete: function(){
            $("#modal_coordo").modal('hide');
            $("#modal_coordo_update").modal('hide');
            //------------------------------------------------------------------ Actualisation de la liste des Coordos
            ajaxListCoordo("#coordo");
            alert('Coordo supprimé·e de la base de données.')
        }
    });
}


//----------------------------------------------------------------------------- Récupération des ressources par l'id de l'action
const ajaxGetRess = (id_act) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_ress:id_act},
        success: function(response){
            let arraySelectedRess = [];
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#ress"
                id += response[i].id;
                arraySelectedRess.push(id);
            }
            //----------------------------------------------------------------- Stockage du tableau Selected
            const jsonSelectedRess = JSON.stringify(arraySelectedRess);
            sessionStorage.setItem('jsonSelectedRess', jsonSelectedRess);
        }
    });
}

//----------------------------------------------------------------------------- Récupération des PDN par l'id de l'action
const ajaxGetPdn = (id_act) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_pdn:id_act},
        success: function(response){
            let arraySelectedPdn = [];
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#pdn"
                id += response[i].id;
                arraySelectedPdn.push(id);
            }
            //----------------------------------------------------------------- Stockage du tableau Selected
            const jsonSelectedPdn = JSON.stringify(arraySelectedPdn);
            sessionStorage.setItem('jsonSelectedPdn', jsonSelectedPdn);
        }
    });
}

//----------------------------------------------------------------------------- Récupération des Partenaires par l'id de l'action
const ajaxGetPart = (id_act) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_part:id_act},
        success: function(response){
            let arraySelectedPart = [];
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#part"
                id += response[i].id;
                arraySelectedPart.push(id);
            }
            //----------------------------------------------------------------- Stockage du tableau Selected
            const jsonSelectedPart = JSON.stringify(arraySelectedPart);
            sessionStorage.setItem('jsonSelectedPart', jsonSelectedPart);
        }
    });
}

//----------------------------------------------------------------------------- Récupération des Structures par l'id de l'action
const ajaxGetStr = (id_act) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_str:id_act},
        success: function(response){
            let arraySelectedStr = [];
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#str"
                id += response[i].id;
                arraySelectedStr.push(id);
            }
            //----------------------------------------------------------------- Stockage du tableau Selected
            const jsonSelectedStr = JSON.stringify(arraySelectedStr);
            sessionStorage.setItem('jsonSelectedStr', jsonSelectedStr);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des partenaires en fonction de l'id de l'événement
const ajaxActPart = (id_act, liste) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_table_part:id_act},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                const ville = response[i].ville;
                const prenom_ref = response[i].prenom_ref;
                const nom_ref = response[i].nom_ref;
                res += `<tr style="cursor: pointer" onclick="id_part_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${nom}</td><td>${ville}</td><td>${prenom_ref}</td><td>${nom_ref}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des PDN en fonction de l'id de l'action
const ajaxActPdn = (id_act, liste) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_table_pdn:id_act},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const structure = response[i].structure;
                const ville = response[i].ville;
                const prenom = response[i].prenom;
                const nom = response[i].nom;
                res += `<tr style="cursor: pointer" onclick="id_pdn_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${prenom}</td><td>${nom}</td><td>${structure}</td><td>${ville}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des PDN en fonction de l'id de l'action
const ajaxActStr = (id_act, liste) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_table_str:id_act},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                const ville = response[i].ville;
                const resp_prenom = response[i].resp_prenom;
                const resp_nom = response[i].resp_nom;
                res += `<tr style="cursor: pointer" onclick="id_str_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${nom}</td><td>${ville}</td><td>${resp_prenom}</td><td>${resp_nom}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const act_Create = (dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_str, nb_pers, commentaires) => {
    $.ajax({
        url: "php/act.php",
        dataType: 'JSON',
        data : {dat:dat, type:type, organise:organise, intitule:intitule, uuid:uuid, lieu:lieu, ville:ville, pj:pj, support:support, facebook:facebook, whatsapp:whatsapp, twitter:twitter, site:site, nb_ress:nb_ress, duree:duree, nb_pdn:nb_pdn, nb_part:nb_part, nb_str:nb_str, nb_pers:nb_pers, commentaires:commentaires},
        complete: function(){
            //------------------------------------------------------------------ Récupération de l'id de l'événement créé
            //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
            act_Get_Id(uuid);

            alert("L'action a bien été ajoutée à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des événements
            act_Reset();
        }
    });
}

//----------------------------------------------------------------------------- Récupération de l'id de l'événement créé
const act_Get_Id = (uuid) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {uuid:uuid},
        success: function(response){
            const id_act = response[0].id;
            // ----------------------------------------------------------------- Envoie vers la BDD
            act_Get_Coordo(id_act);
            act_Get_Ress(id_act);
            act_Get_Pdn(id_act);
            act_Get_Part(id_act);
            act_Get_Str(id_act);
        }
    });
}

//------------------------------------------------------------------------------ Récupération des coordos et association avec l'évenemnt dans la table coordonner
const act_Get_Coordo = (id_act) => {
    let arraySelectedCoordo = [];
    const jsonIdCoordo = sessionStorage.getItem('jsonIdCoordo');
    const arrayIdCoordo = JSON.parse(jsonIdCoordo);
    for(coordoId of arrayIdCoordo) {
        let check = $(coordoId).is(':checked');
        if(check) arraySelectedCoordo.push(coordoId);
    }
    for(id_coordo of arraySelectedCoordo) {
        const idCoordoSplit = id_coordo.split("#coordo");
        id_coordo = idCoordoSplit[1];
        $.ajax({
            url: 'php/act.php',
            dataType: 'JSON',
            data : {id_act:id_act, id_coordo:id_coordo}
        });
    }
}

//------------------------------------------------------------------------------ Récupération des ressources et association avec l'évenemnt dans la table coordonner
const act_Get_Ress = (id_act) => {
    let arraySelectedRess = [];
    const jsonSelectedRess = sessionStorage.getItem('jsonSelectedRess');
    if(jsonSelectedRess) arraySelectedRess = JSON.parse(jsonSelectedRess);
    for(id_ress of arraySelectedRess) {
        const idRessSplit = id_ress.split("#ress");
        id_ress = idRessSplit[1];
        $.ajax({
            url: 'php/act.php',
            dataType: 'JSON',
            data : {id_act:id_act, id_ress:id_ress}
        });
    }
}

//------------------------------------------------------------------------------ Récupération des PDN et association avec l'évenemnt dans la table coordonner
const act_Get_Pdn = (id_act) => {
    let arraySelectedPdn = [];
    const jsonSelectedPdn = sessionStorage.getItem('jsonSelectedPdn');
    if(jsonSelectedPdn) arraySelectedPdn = JSON.parse(jsonSelectedPdn);
    for(id_pdn of arraySelectedPdn) {
        const idPdnSplit = id_pdn.split("#pdn");
        id_pdn = idPdnSplit[1];
        $.ajax({
            url: 'php/act.php',
            dataType: 'JSON',
            data : {id_act:id_act, id_pdn:id_pdn}
        });
    }
}

//------------------------------------------------------------------------------ Récupération des partenaires et association avec l'évenemnt dans la table coordonner
const act_Get_Part = (id_act) => {
    let arraySelectedPart = [];
    const jsonSelectedPart = sessionStorage.getItem('jsonSelectedPart');
    if(jsonSelectedPart) arraySelectedPart = JSON.parse(jsonSelectedPart);
    for(id_part of arraySelectedPart) {
        const idPartSplit = id_part.split("#part");
        id_part = idPartSplit[1];
        $.ajax({
            url: 'php/act.php',
            dataType: 'JSON',
            data : {id_act:id_act, id_part:id_part}
        });
    }
}

//------------------------------------------------------------------------------ Récupération des structures et association avec l'évenemnt dans la table coordonner
const act_Get_Str = (id_act) => {
    let arraySelectedStr = [];
    const jsonSelectedStr = sessionStorage.getItem('jsonSelectedStr');
    if(jsonSelectedStr) arraySelectedStr = JSON.parse(jsonSelectedStr);
    for(id_str of arraySelectedStr) {
        const idStrSplit = id_str.split("#str");
        id_str = idStrSplit[1];
        $.ajax({
            url: 'php/act.php',
            dataType: 'JSON',
            data : {id_act:id_act, id_str:id_str}
        });
    }
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const act_Update = (id, dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_str, nb_pers, commentaires) => {
    $.ajax({
        url: 'php/act.php',
        dataType: 'JSON',
        data : {id:id, dat:dat, type:type, organise:organise, intitule:intitule, uuid:uuid, lieu:lieu, ville:ville, pj:pj, support:support, facebook:facebook, whatsapp:whatsapp, twitter:twitter, site:site, nb_ress:nb_ress, duree:duree, nb_pdn:nb_pdn, nb_part:nb_part, nb_str:nb_str, nb_pers:nb_pers, commentaires:commentaires},
        complete: function(){
            //------------------------------------------------------------------ Suppression des associations avec les autres tables puis mis à jours des données
            act_Maj_Asso(id);

            alert("L'action a bien été modifiée.");
            //----------------------------------------------------------------- Réinitialisation de la pages des événements
            act_Reset();
        }
    });
}

//----------------------------------------------------------------------------- Suppression des associations entre coordos et cette action dans la table coordonner
const act_Maj_Asso = (id_act) => {
    $.ajax({
        url: "php/act.php",
        dataType: 'JSON',
        data : {id_act_del_asso:id_act},
        complete: function(){
            act_Get_Coordo(id_act);
            act_Get_Ress(id_act);
            act_Get_Pdn(id_act);
            act_Get_Part(id_act);
            act_Get_Str(id_act);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const act_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/act.php",
        dataType: 'JSON',
        data : {id_act_del_asso:id},
        complete: function(){
            //------------------------------------------------------------------ Envoie de l'id vers la BDD pour suppression de l'action
            $.ajax({
                url: "php/act.php",
                dataType: 'JSON',
                data : {id_del:id},
                complete: function() {
                    alert("L'action a bien été supprimée de la base de données.");
                    //----------------------------------------------------------------- Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction dans orga.js)
                    act_Reset();
                }
            });
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Stockage de l'id du PDN et envoie vers la page PDN
const id_pdn_storage = (id) => {
    sessionStorage.setItem('id_pdn', id);
    document.location='pdn.php';
}

// ----------------------------------------------------------------------------- Stockage de l'id du partenaire et envoie vers la page part
const id_part_storage = (id) => {
    sessionStorage.setItem('id_part', id);
    document.location='part.php';
}

// ----------------------------------------------------------------------------- Stockage de l'id de la structure et envoie vers la page str
const id_str_storage = (id) => {
    sessionStorage.setItem('id_str', id);
    document.location='str.php';
}
