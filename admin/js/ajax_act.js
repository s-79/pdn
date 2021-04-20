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
                if(checked) res += `<input class="form-check-input" type="checkbox" value="" id="ress${id}" checked>`;
                else { res += `<input class="form-check-input" type="checkbox" value="" id="ress${id}">`}
                res += `<label class="form-check-label text-dark" for="ress${id}">${nom}</label></div>`;
                const ressId = `#ress${id}`;
                $(ressId).prop('checked', false);
                // ------------------------------------------------------------- Remplissage du tableau qui sera ensuite stocké dans une variable de session
                arrayIdRess.push(ressId);
            }
            $(liste).html(res);
            //------------------------------------------------------------------ Conversion du tableau en string Json et stockage dans la variable de session
            const jsonIdRess = JSON.stringify(arrayIdRess);
            sessionStorage.setItem('jsonIdRess', jsonIdRess);

            //------------------------------------------------------------------ Récupération et suppression d'un éventuel tableau précédemment stockée
            const jsonSelectedRess = sessionStorage.getItem('jsonSelectedRess');
            sessionStorage.removeItem('jsonSelectedRess');
            //------------------------------------------------------------------ Si des cases ont déja été cochées, on les recoche
            if(jsonSelectedRess) {
                const arraySelectedRess = JSON.parse(jsonSelectedRess);
                for(ressId of arraySelectedRess) $(ressId).prop('checked', true);
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
                if(checked) res += `<input class="form-check-input" type="checkbox" value="" id="pdn${id}" checked>`;
                else { res += `<input class="form-check-input" type="checkbox" value="" id="pdn${id}">`}
                res += `<label class="form-check-label text-dark" for="pdn${id}">${nom}</label></div>`;
                const pdnId = `#pdn${id}`;
                $(pdnId).prop('checked', false);
                // ------------------------------------------------------------- Remplissage du tableau qui sera ensuite stocké dans une variable de session
                arrayIdPdn.push(pdnId);
            }
            $(liste).html(res);
            //------------------------------------------------------------------ Conversion du tableau en string Json et stockage dans la variable de session
            const jsonIdPdn = JSON.stringify(arrayIdPdn);
            sessionStorage.setItem('jsonIdPdn', jsonIdPdn);

            //------------------------------------------------------------------ Récupération et suppression d'un éventuel tableau précédemment stockée
            const jsonSelectedPdn = sessionStorage.getItem('jsonSelectedPdn');
            sessionStorage.removeItem('jsonSelectedPdn');
            //------------------------------------------------------------------ Si des cases ont déja été cochées, on les recoche
            if(jsonSelectedPdn) {
                const arraySelectedPdn = JSON.parse(jsonSelectedPdn);
                for(pdnId of arraySelectedPdn) $(pdnId).prop('checked', true);
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
                if(checked) res += `<input class="form-check-input" type="checkbox" value="" id="part${id}" checked>`
                else { res += `<input class="form-check-input" type="checkbox" value="" id="part${id}">`}
                res += `<label class="form-check-label text-dark" for="part${id}">${nom}</label></div>`;
                const partId = `#part${id}`;
                $(partId).prop('checked', false);
                // ------------------------------------------------------------- Remplissage du tableau
                arrayIdPart.push(partId);
            }
            $(liste).html(res);
            //------------------------------------------------------------------ Conversion du tableau en string Json et stockage dans la variable de session
            const jsonIdPart = JSON.stringify(arrayIdPart);
            sessionStorage.setItem('jsonIdPart', jsonIdPart);

            //------------------------------------------------------------------ Récupération et suppression d'un éventuel tableau précédemment stockée
            const jsonSelectedPart = sessionStorage.getItem('jsonSelectedPart');
            sessionStorage.removeItem('jsonSelectedPart');
            //------------------------------------------------------------------ Si des cases ont déja été cochées, on les recoche
            if(jsonSelectedPart) {
                const arraySelectedPart = JSON.parse(jsonSelectedPart);
                for(partId of arraySelectedPart) $(partId).prop('checked', true);
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
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                res += `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="coordo${id}">
                <label class="form-check-label text-white" for="coordo${id}">${nom}</label></div>`;
                const intId = `#coordo${id}`;
                $(intId).prop('checked', false);
            }
            $(liste).html(res);
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
            const nb_outils = response[0].nb_outils;
            const duree = response[0].duree;
            const nb_pdn = response[0].nb_pdn;
            const nb_part = response[0].nb_part;
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
            $("#nb_ress").val(nb_outils);
            $("#duree").val(duree);
            $("#nb_pdn").val(nb_pdn);
            $("#nb_part").val(nb_part);
            $("#nb_pers").val(nb_pers);
            $("#commentaires").val(commentaires);
        }
    });
}

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

//----------------------------------------------------------------------------- Récupération des ressources par l'id de l'action
const ajaxGetRess = (id_act) => {
    $.ajax({
        url: "php/act_Get.php",
        dataType: 'JSON',
        data : {id_act_ress:id_act},
        success: function(response){
            let arraySelectedPart = [];
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#ress"
                id += response[i].id;
                arraySelectedPart.push(id);
            }
            //----------------------------------------------------------------- Stockage du tableau Selected
            const jsonSelectedPart = JSON.stringify(arraySelectedPart);
            sessionStorage.setItem('jsonSelectedPart', jsonSelectedPart);
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

// //----------------------------------------------------------------------------- Remplissage du tableau des jeunes en fonction de l'id de l'événement
// const ajaxActJeune = (id_act, liste) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {id_act:id_act},
//         success: function(response){
//             const len = response.length;
//             let res = "";
//             for (let i = 0; i < len; i++) {
//                 const id = response[i].id;
//                 const prenom = response[i].prenom;
//                 const nom = response[i].nom;
//                 const nom_ville = response[i].nom_ville;
//                 const acc = response[i].acc;
//                 res += `<tr style="cursor: pointer" onclick="id_jeune_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${prenom}</td><td>${nom}</td><td>${nom_ville}</td><td>${acc}</td></tr>`;
//             }
//             $(liste).append(res);
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Remplissage du tableau des pro en fonction de l'id de l'événement
// const ajaxActPro = (id_act, liste) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {id_act_pro:id_act},
//         success: function(response){
//             const len = response.length;
//             let res = "";
//             for (let i = 0; i < len; i++) {
//                 const id = response[i].id;
//                 const prenom = response[i].prenom;
//                 const nom = response[i].nom;
//                 const structure = response[i].structure;
//                 const ville = response[i].ville;
//                 res += `<tr style="cursor: pointer" onclick="id_pro_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${prenom}</td><td>${nom}</td><td>${structure}</td><td>${ville}</td></tr>`;
//             }
//             $(liste).append(res);
//         }
//     });
// }

// // ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !
//
// const act_Create = (mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
//     $.ajax({
//         url: 'php/act.php',
//         dataType: 'JSON',
//         data : {mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, uuid:uuid, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
//         complete: function(){
//             //------------------------------------------------------------------ Récupération de l'id de l'événement créé
//             //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
//             act_Get_Id(uuid);
//
//             alert("L'événement a bien été ajouté à la base de données.");
//             //------------------------------------------------------------------ Réinitialisation de la pages des événements
//             act_Reset();
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Récupération de l'id de l'événement créé
// const act_Get_Id = (uuid) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {uuid:uuid},
//         success: function(response){
//             const id_act = response[0].id;
//             act_Get_Inter(id_act);
//         }
//     });
// }
//
// //------------------------------------------------------------------------------ Récupération des intervenants et association avec l'évenemnt dans la table intervenir
// const act_Get_Inter = (id_act) => {
//     $.ajax({
//         url: "php/populate.php",
//         dataType: 'JSON',
//         data : {v_int:"v_int"},
//         success: function(response){
//             const len = response.length;
//             let checkInt = [];
//             for (let i = 0; i < len; i++) {
//                 const id = response[i].id;
//                 const nom = response[i].nom;
//                 const intId = `#int${id}`;
//                 let check =  $(intId).is(':checked');
//                 if(check) checkInt.push(id);
//             }
//             for(id_int of checkInt) {
//                 $.ajax({
//                     url: 'php/act.php',
//                     dataType: 'JSON',
//                     data : {id_int:id_int, id_act:id_act},
//                 });
//             }
//         }
//     });
// }
//
//
// // ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
//
// const act_Update = (id, mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
//     $.ajax({
//         url: 'php/act.php',
//         dataType: 'JSON',
//         data : {id:id, mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, uuid:uuid, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
//         complete: function(){
//             //------------------------------------------------------------------ Suppression des associations entre intervenants et cet événement dans la table intervenir
//             //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
//             act_Delete_Int(id);
//
//             alert("L'événement a bien été modifié.");
//             //----------------------------------------------------------------- Réinitialisation de la pages des événements
//             act_Reset();
//
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Suppression des associations entre intervenants et cet événement dans la table intervenir
// const act_Delete_Int = (id_act) => {
//     $.ajax({
//         url: "php/act.php",
//         dataType: 'JSON',
//         data : {id_act_del_int:id_act},
//         complete: function(){
//             act_Get_Inter(id_act);
//         }
//     });
// }
//
// // ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
// const act_Delete = (id) => {
//     //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
//     $.ajax({
//         url: "php/act.php",
//         dataType: 'JSON',
//         data : {id_del:id},
//         complete: function() {
//             //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
//             $.ajax({
//                 url: "php/exist.php",
//                 dataType: 'JSON',
//                 data : {id_act:id},
//                 success: function(response){
//                     const exist = parseInt(response[0].exist);
//                     if(exist === 1) alert("Suppression impossible : l'évenement est relié à des jeunes ou des intervenant.e.s dans la BDD.");
//                     else {
//                         alert("L'événement a bien été supprimé de la base de données.");
//                         //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction dans orga.js)
//                         act_Reset();
//                     }
//                 }
//             });
//         }
//     });
// }
//
// // ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !
//
// // ----------------------------------------------------------------------------- Stockage de l'id du jeune et envoie vers la page jeune (acc)
// const id_jeune_storage = (id) => {
//     sessionStorage.setItem('id_jeune', id);
//     document.location='jeune.php';
// }
//
// // ----------------------------------------------------------------------------- Stockage de l'id du pro et envoie vers la page pro
// const id_pro_storage = (id) => {
//     sessionStorage.setItem('id_pro', id);
//     document.location='pro.php';
// }
