// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Action pour l'outil de recherche de la page act */
const ajaxListPdn = (liste, id_pdn) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_pdn:"v_pdn"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un·e PDN</option>");
            $(liste).append(displayList(response));
            if(id_pdn) {sleep(50).then(() => {$(liste).val(id_pdn);});}
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche d'événement */
const pdn_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {search_pdn:search},
    success: function(response){
        $("#pdn_res").html(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxGetPdn = (id_pdn) => {
    $.ajax({
        url: 'php/pdn_Get.php',
        dataType: 'JSON',
        data : {id:id_pdn},
        success: function(response){
            const date_entree = response[0].date_entree;
            const prenom = response[0].prenom;
            const nom = response[0].nom;
            const photo = response[0].photo;
            const fonction = response[0].fonction;
            const str_id = response[0].str_id;
            const mail_nom = response[0].mail_nom;
            const mail_domaine = response[0].mail_domaine;
            const tel = response[0].tel;
            const facebook = response[0].facebook;
            const instagram = response[0].instagram;
            const snapchat = response[0].snapchat;
            const youtube = response[0].youtube;
            const twitter = response[0].twitter;
            const discord = response[0].discord;
            const twitch = response[0].twitch;
            const tiktok = response[0].tiktok;
            const whatsapp = response[0].whatsapp;
            const presentation = response[0].presentation;
            const charte = response[0].charte;
            const fiche_rens = response[0].fiche_rens;
            const actif = response[0].actif;
            const date_sortie = response[0].date_sortie;

            $("#id_pdn").val(id_pdn);
            $("#date_entree").val(date_entree);
            $("#prenom").val(prenom);
            $("#nom").val(nom);
            $("#fonction").val(fonction);
            $("#structure").val(str_id);
            const mail = `${mail_nom}@${mail_domaine}`;
            $("#mail").val(mail);
            $("#tel").val(tel);
            $("#facebook").val(facebook);
            $("#instagram").val(instagram);
            $("#snapchat").val(snapchat);
            $("#youtube").val(youtube);
            $("#twitter").val(twitter);
            $("#discord").val(discord);
            $("#twitch").val(twitch);
            $("#tiktok").val(tiktok);
            $("#presentation").val(presentation);
            $("#whatsapp,#charte,#fiche_rens,#actif").prop('checked', false);
            if (whatsapp === "1") $("#whatsapp").prop('checked', true);
            if (charte === "1") $("#charte").prop('checked', true);
            if (fiche_rens === "1") $("#fiche_rens").prop('checked', true);
            if (actif === "1") $("#actif").prop('checked', true);
            $("#date_sortie").val(date_sortie);

        }
    });
}

//----------------------------------------------------------------------------- Récupération des coordos par l'id de l'action
const ajaxGetStr = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_str:"v_str"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner la structure *</option>");
            $(liste).append(displayList(response));
        }
    });
}

// //----------------------------------------------------------------------------- Récupération des ressources par l'id de l'action
// const ajaxGetRess = (id_act) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {id_act_ress:id_act},
//         success: function(response){
//             let arraySelectedRess = [];
//             const len = response.length;
//             for (let i = 0; i < len; i++) {
//                 let id = "#ress"
//                 id += response[i].id;
//                 arraySelectedRess.push(id);
//             }
//             //----------------------------------------------------------------- Stockage du tableau Selected
//             const jsonSelectedRess = JSON.stringify(arraySelectedRess);
//             sessionStorage.setItem('jsonSelectedRess', jsonSelectedRess);
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Récupération des PDN par l'id de l'action
// const ajaxGetPdn = (id_act) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {id_act_pdn:id_act},
//         success: function(response){
//             let arraySelectedPdn = [];
//             const len = response.length;
//             for (let i = 0; i < len; i++) {
//                 let id = "#pdn"
//                 id += response[i].id;
//                 arraySelectedPdn.push(id);
//             }
//             //----------------------------------------------------------------- Stockage du tableau Selected
//             const jsonSelectedPdn = JSON.stringify(arraySelectedPdn);
//             sessionStorage.setItem('jsonSelectedPdn', jsonSelectedPdn);
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Récupération des Partenaires par l'id de l'action
// const ajaxGetPart = (id_act) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {id_act_part:id_act},
//         success: function(response){
//             let arraySelectedPart = [];
//             const len = response.length;
//             for (let i = 0; i < len; i++) {
//                 let id = "#part"
//                 id += response[i].id;
//                 arraySelectedPart.push(id);
//             }
//             //----------------------------------------------------------------- Stockage du tableau Selected
//             const jsonSelectedPart = JSON.stringify(arraySelectedPart);
//             sessionStorage.setItem('jsonSelectedPart', jsonSelectedPart);
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Remplissage du tableau des partenaires en fonction de l'id de l'événement
// const ajaxActPart = (id_act, liste) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {id_act_table_part:id_act},
//         success: function(response){
//             const len = response.length;
//             let res = "";
//             for (let i = 0; i < len; i++) {
//                 const id = response[i].id;
//                 const nom = response[i].nom;
//                 const ville = response[i].ville;
//                 const prenom_ref = response[i].prenom_ref;
//                 const nom_ref = response[i].nom_ref;
//                 res += `<tr style="cursor: pointer" onclick="id_part_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${nom}</td><td>${ville}</td><td>${prenom_ref}</td><td>${nom_ref}</td></tr>`;
//             }
//             $(liste).append(res);
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Remplissage du tableau des PDN en fonction de l'id de l'action
// const ajaxActPdn = (id_act, liste) => {
//     $.ajax({
//         url: "php/act_Get.php",
//         dataType: 'JSON',
//         data : {id_act_table_pdn:id_act},
//         success: function(response){
//             const len = response.length;
//             let res = "";
//             for (let i = 0; i < len; i++) {
//                 const id = response[i].id;
//                 const structure = response[i].structure;
//                 const ville = response[i].ville;
//                 const prenom = response[i].prenom;
//                 const nom = response[i].nom;
//                 res += `<tr style="cursor: pointer" onclick="id_jeune_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${structure}</td><td>${ville}</td><td>${prenom}</td><td>${nom}</td></tr>`;
//             }
//             $(liste).append(res);
//         }
//     });
// }
//
// // ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !
//
// const act_Create = (dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_pers, commentaires) => {
//     $.ajax({
//         url: "php/act.php",
//         dataType: 'JSON',
//         data : {dat:dat, type:type, organise:organise, intitule:intitule, uuid:uuid, lieu:lieu, ville:ville, pj:pj, support:support, facebook:facebook, whatsapp:whatsapp, twitter:twitter, site:site, nb_ress:nb_ress, duree:duree, nb_pdn:nb_pdn, nb_part:nb_part, nb_pers:nb_pers, commentaires:commentaires},
//         complete: function(){
//             //------------------------------------------------------------------ Récupération de l'id de l'événement créé
//             //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
//             act_Get_Id(uuid);
//
//             alert("L'action a bien été ajoutée à la base de données.");
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
//             // ----------------------------------------------------------------- Envoie vers la BDD
//             act_Get_Coordo(id_act);
//             act_Get_Ress(id_act);
//             act_Get_Pdn(id_act);
//             act_Get_Part(id_act);
//         }
//     });
// }
//
// //------------------------------------------------------------------------------ Récupération des coordos et association avec l'évenemnt dans la table coordonner
// const act_Get_Coordo = (id_act) => {
//     let arraySelectedCoordo = [];
//     const jsonIdCoordo = sessionStorage.getItem('jsonIdCoordo');
//     const arrayIdCoordo = JSON.parse(jsonIdCoordo);
//     for(coordoId of arrayIdCoordo) {
//         let check = $(coordoId).is(':checked');
//         if(check) arraySelectedCoordo.push(coordoId);
//     }
//     for(id_coordo of arraySelectedCoordo) {
//         const idCoordoSplit = id_coordo.split("#coordo");
//         id_coordo = idCoordoSplit[1];
//         $.ajax({
//             url: 'php/act.php',
//             dataType: 'JSON',
//             data : {id_act:id_act, id_coordo:id_coordo}
//         });
//     }
// }
//
// //------------------------------------------------------------------------------ Récupération des ressources et association avec l'évenemnt dans la table coordonner
// const act_Get_Ress = (id_act) => {
//     let arraySelectedRess = [];
//     const jsonSelectedRess = sessionStorage.getItem('jsonSelectedRess');
//     if(jsonSelectedRess) arraySelectedRess = JSON.parse(jsonSelectedRess);
//     for(id_ress of arraySelectedRess) {
//         const idRessSplit = id_ress.split("#ress");
//         id_ress = idRessSplit[1];
//         $.ajax({
//             url: 'php/act.php',
//             dataType: 'JSON',
//             data : {id_act:id_act, id_ress:id_ress}
//         });
//     }
// }
//
// //------------------------------------------------------------------------------ Récupération des PDN et association avec l'évenemnt dans la table coordonner
// const act_Get_Pdn = (id_act) => {
//     let arraySelectedPdn = [];
//     const jsonSelectedPdn = sessionStorage.getItem('jsonSelectedPdn');
//     if(jsonSelectedPdn) arraySelectedPdn = JSON.parse(jsonSelectedPdn);
//     for(id_pdn of arraySelectedPdn) {
//         const idPdnSplit = id_pdn.split("#pdn");
//         id_pdn = idPdnSplit[1];
//         $.ajax({
//             url: 'php/act.php',
//             dataType: 'JSON',
//             data : {id_act:id_act, id_pdn:id_pdn}
//         });
//     }
// }
//
// //------------------------------------------------------------------------------ Récupération des partenaires et association avec l'évenemnt dans la table coordonner
// const act_Get_Part = (id_act) => {
//     let arraySelectedPart = [];
//     const jsonSelectedPart = sessionStorage.getItem('jsonSelectedPart');
//     if(jsonSelectedPart) arraySelectedPart = JSON.parse(jsonSelectedPart);
//     for(id_part of arraySelectedPart) {
//         const idPartSplit = id_part.split("#part");
//         id_part = idPartSplit[1];
//         $.ajax({
//             url: 'php/act.php',
//             dataType: 'JSON',
//             data : {id_act:id_act, id_part:id_part}
//         });
//     }
// }
//
// // ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
//
// const act_Update = (id, dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_pers, commentaires) => {
//     $.ajax({
//         url: 'php/act.php',
//         dataType: 'JSON',
//         data : {id:id, dat:dat, type:type, organise:organise, intitule:intitule, uuid:uuid, lieu:lieu, ville:ville, pj:pj, support:support, facebook:facebook, whatsapp:whatsapp, twitter:twitter, site:site, nb_ress:nb_ress, duree:duree, nb_pdn:nb_pdn, nb_part:nb_part, nb_pers:nb_pers, commentaires:commentaires},
//         complete: function(){
//             //------------------------------------------------------------------ Suppression des associations avec les autres tables puis mis à jours des données
//             act_Maj_Asso(id);
//
//             alert("L'action a bien été modifiée.");
//             //----------------------------------------------------------------- Réinitialisation de la pages des événements
//             act_Reset();
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Suppression des associations entre coordos et cette action dans la table coordonner
// const act_Maj_Asso = (id_act) => {
//     $.ajax({
//         url: "php/act.php",
//         dataType: 'JSON',
//         data : {id_act_del_asso:id_act},
//         complete: function(){
//             act_Get_Coordo(id_act);
//             act_Get_Ress(id_act);
//             act_Get_Pdn(id_act);
//             act_Get_Part(id_act);
//         }
//     });
// }
//
// // ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
// const act_Delete = (id) => {
//     //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
//     $.ajax({
//         url: "php/act.php",
//         dataType: 'JSON',
//         data : {id_act_del_asso:id},
//         complete: function(){
//             //------------------------------------------------------------------ Envoie de l'id vers la BDD pour suppression de l'action
//             $.ajax({
//                 url: "php/act.php",
//                 dataType: 'JSON',
//                 data : {id_del:id},
//                 complete: function() {
//                     alert("L'action a bien été supprimée de la base de données.");
//                     //----------------------------------------------------------------- Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction dans orga.js)
//                     act_Reset();
//                 }
//             });
//         }
//     });
//
// }
// //
// // // ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !
// //
// // // ----------------------------------------------------------------------------- Stockage de l'id du jeune et envoie vers la page jeune (acc)
// // const id_jeune_storage = (id) => {
// //     sessionStorage.setItem('id_jeune', id);
// //     document.location='jeune.php';
// // }
// //
// // // ----------------------------------------------------------------------------- Stockage de l'id du pro et envoie vers la page pro
// // const id_pro_storage = (id) => {
// //     sessionStorage.setItem('id_pro', id);
// //     document.location='pro.php';
// // }
