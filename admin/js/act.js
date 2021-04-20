$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_act").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id d'action stocké
    // let id_act_storage = sessionStorage.getItem("id_act");
    // sessionStorage.removeItem('id_act');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    // if(id_act_storage) act_Get(id_act_storage);

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListAct("#act_res");


    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#act_search").keyup(function(){
        let search = $("#act_search").val();
        if(search) {
            act_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
            $("#act_res").html("<option selected value=''>Séléctionner une action</option>");
            ajaxListAct("#act_res");
        }
    });

    //-------------------------------------------------------------------------- Remplissage de la liste des Coordos
    ajaxListCoordo("#coordo");


    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON + SELECT RESSOURCES
    $("#select_ress").click(function() {
        //------------------------------------------------------------------- -- Remplissage de la liste des RESSOURCES et evt click sur les boutons "tous" et "aucun"
        ajaxListRess("#modal_list_ress");
        $("#btn_select_AllRess").click(function() {ajaxListRess("#modal_list_ress", "checked");});
        $("#btn_select_NoRess").click(function() {ajaxListRess("#modal_list_ress");});
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON + SELECT PDN
    $("#select_pdn").click(function() {
        //------------------------------------------------------------------- -- Remplissage de la liste des PDN et evt click sur les boutons "tous" et "aucun"
        ajaxListPdn("#modal_list_pdn");
        $("#btn_select_AllPdn").click(function() {ajaxListPdn("#modal_list_pdn", "checked");});
        $("#btn_select_NoPdn").click(function() {ajaxListPdn("#modal_list_pdn");});
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON + SELECT RESSOURCES
    $("#select_part").click(function() {
        //-------------------------------------------------------------------------- Remplissage de la liste des Partenaires et evt click sur les boutons "tous" et "aucun"
        ajaxListPart("#modal_list_part");
        $("#btn_select_Allpart").click(function() {ajaxListPart("#modal_list_part", "checked");});
        $("#btn_select_Nopart").click(function() {ajaxListPart("#modal_list_part");});
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SELECTIONNER" DANS LE MODAL RESS
    $("#btn_select_ress").click(function() {
        //---------------------------------------------------------------------- Récupérarion et suppression du contenu de la variable de session créé lors du click sur le (+) et qui contient le tableau de tous les ID au fomat Json
        const jsonIdRess = sessionStorage.getItem('jsonIdRess');
        sessionStorage.removeItem('jsonIdRess');
        if(jsonIdRess) {
            //------------------------------------------------------------------ Conversion du JSON stockée dans la variable de session en tableau
            const arrayIdRess = JSON.parse(jsonIdRess);
            let arraySelectedRess = [];
            //------------------------------------------------------------------ Itération sur chaque ID contenu dans le tableau
            for(ressId of arrayIdRess) {
                //---------------------------------------------------------- --- Si la case est cochée, on ajoute son ID dans le tableau Selected
                let check = $(ressId).is(':checked');
                if(check) arraySelectedRess.push(ressId);
            }
            let lenSelectedRess = arraySelectedRess.length;
            $("#nb_ress").val(lenSelectedRess);
            //------------------------------------------------------------------ Stockage du tableau Selected
            const jsonSelectedRess = JSON.stringify(arraySelectedRess);
            sessionStorage.setItem('jsonSelectedRess', jsonSelectedRess);
        }
        $("#modal_select_ress").modal('hide');
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SELECTIONNER" DANS LE MODAL PDN
    $("#btn_select_pdn").click(function() {
        //---------------------------------------------------------------------- Récupérarion et suppression du contenu de la variable de session créé lors du click sur le (+) et qui contient le tableau de tous les ID au fomat Json
        const jsonIdPdn = sessionStorage.getItem('jsonIdPdn');
        sessionStorage.removeItem('jsonIdPdn');
        if(jsonIdPdn) {
            //------------------------------------------------------------------ Conversion du JSON stockée dans la variable de session en tableau
            const arrayIdPdn = JSON.parse(jsonIdPdn);
            let arraySelectedPdn = [];
            //------------------------------------------------------------------ Itération sur chaque ID contenu dans le tableau
            for(pdnId of arrayIdPdn) {
                //---------------------------------------------------------- --- Si la case est cochée, on ajoute son ID dans le tableau Selected
                let check = $(pdnId).is(':checked');
                if(check) arraySelectedPdn.push(pdnId);
            }
            let lenSelectedPdn = arraySelectedPdn.length;
            $("#nb_pdn").val(lenSelectedPdn);
            //------------------------------------------------------------------ Stockage du tableau Selected
            const jsonSelectedPdn = JSON.stringify(arraySelectedPdn);
            sessionStorage.setItem('jsonSelectedPdn', jsonSelectedPdn);
        }
        $("#modal_select_pdn").modal('hide');
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SELECTIONNER" DANS LE MODAL PART
    $("#btn_select_part").click(function() {
        //---------------------------------------------------------------------- Récupérarion et suppression du contenu de la variable de session créé lors du click sur le (+) et qui contient le tableau de tous les ID au fomat Json
        const jsonIdPart = sessionStorage.getItem('jsonIdPart');
        sessionStorage.removeItem('jsonIdPart');
        if(jsonIdPart) {
            //------------------------------------------------------------------ Conversion du JSON stockée dans la variable de session en tableau
            const arrayIdPart = JSON.parse(jsonIdPart);
            let arraySelectedPart = [];
            //------------------------------------------------------------------ Itération sur chaque ID contenu dans le tableau
            for(partId of arrayIdPart) {
                //---------------------------------------------------------- --- Si la case est cochée, on ajoute son ID dans le tableau Selected
                let check = $(partId).is(':checked');
                if(check) arraySelectedPart.push(partId);
            }
            let lenSelectedPart = arraySelectedPart.length;
            $("#nb_part").val(lenSelectedPart);
            //------------------------------------------------------------------ Stockage du tableau Selected
            const jsonSelectedPart = JSON.stringify(arraySelectedPart);
            sessionStorage.setItem('jsonSelectedPart', jsonSelectedPart);
        }
        $("#modal_select_part").modal('hide');
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id de l'évenement séléctionné
        const id_act = $("#act_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos de l'événement séléctionné
        act_Get(id_act);
    });

    // // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!
    //
    //
    // //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UN NOUVEL ÉVÉNEMENT
    // $("#new_act").click(function(){
    //     // --------------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page événement (fonction ci-dessous)
    //     act_Reset();
    // });
    //
    // //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    // $('#act_create').click(function(){
    //     // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
    //     let mission = "";
    //     let type = "";
    //     for (let i = 0; i < 3; i++) {
    //         let m = `#m${i}`;
    //         if($(m).is(':checked')) {
    //             mission = i;
    //             let t = `#type_m${i}`;
    //             type = $(t).val();
    //         }
    //     }
    //     const dat = $("#date").val();
    //     const id_ville = $("#ville").val();
    //     // contrat_ville_Change(id_ville);
    //     let visio =  $("#visio").is(':checked');
    //     if(visio)visio=1;else{visio=0};
    //     const intitule = $("#intitule").val();
    //     const uuid = uuid_gen();
    //     const id_projet = $("#projet").val();
    //     const organise = $("#organise").val();
    //     const nb_jeunes = $("#nb_jeunes").val();
    //     const nb_pros = $("#nb_pros").val();
    //     const commentaires = $("#commentaires").val();
    //
    //     // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
    //     if(isNaN(mission) || !dat || !type || !id_ville || (!nb_jeunes && !nb_pros)) {
    //         alert("Les champs Mission, Date, Type et Ville ainsi que le nombre de jeunes ou de pros sont obligatoires.");
    //     } else {
    //         // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
    //         if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,255)) {
    //
    //             //-------------------------------------------------------------- Envoie des infos vers la BDD
    //             act_Create(mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires);
    //
    //         }
    //     }
    // })
    //
    // // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
    //
    // //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN ÉVÉNEMENT
    // $('#act_update').click(function(){
    //     // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
    //     const id = $('#id_act').val();
    //     let mission = "";
    //     let type = "";
    //     for (let i = 0; i < 3; i++) {
    //         let m = `#m${i}`;
    //         if($(m).is(':checked')) {
    //             mission = i;
    //             let t = `#type_m${i}`;
    //             type = $(t).val();
    //         }
    //     }
    //     const dat = $("#date").val();
    //     const id_ville = $("#ville").val();
    //     let visio =  $("#visio").is(':checked');
    //     if(visio)visio=1;else{visio=0};
    //     const intitule = $("#intitule").val();
    //     const uuid = uuid_gen();
    //     const id_projet = $("#projet").val();
    //     const organise = $("#organise").val();
    //     const nb_jeunes = $("#nb_jeunes").val();
    //     const nb_pros = $("#nb_pros").val();
    //     const commentaires = $("#commentaires").val();
    //
    //     if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,100)) {
    //         act_Update(id, mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires);
    //     }
    // })
    //
    // // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !
    //
    // //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN ORGANISME
    // $('#act_delete').click(function(){
    //     const id = $('#id_act').val();
    //     act_Delete(id);
    // })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const act_Get = (id_act) => {
    if(!id_act) alert("Aucune action n'a été séléctionnée")
    else {
        //---------------------------------------------------------------------- Affichage de l'action séléctionné lorsqu'on à vient des pages pdn ou part
        ajaxListAct("#act_res", id_act);
        //---------------------------------------------------------------------- Récupération des données de l'action
        ajaxGetAct(id_act);
        //---------------------------------------------------------------------- Réinitialisation de la liste de tous coordos et décochage des cases
        ajaxListCoordo("#coordo");
        //---------------------------------------------------------------------- Récupération des Coordos liés à cet événement
        ajaxGetCoordo(id_act);
        //---------------------------------------------------------------------- Récupération des Ressources liées à cet événement
        ajaxGetRess(id_act);
        //---------------------------------------------------------------------- Récupération des PDN liées à cet événement
        ajaxGetPdn(id_act);
        //---------------------------------------------------------------------- Récupération des Partenaires liées à cet événement
        ajaxGetPart(id_act);

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_act_create").addClass("d-none");
        $("#btn_act_update").removeClass("d-none");
    }
    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    // ajaxListVille("#ville");
}

// // ----------------------------------------------------------------------------- FONCTION RESET
//
// //------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
// const act_Reset = () => {
//     //-------------------------------------------------------------------------- Réinitialisation du formulaire
//     document.getElementById("form_act").reset();
//     $("#type_m1")[0].disabled = true;
//     $("#type_m2")[0].disabled = true;
//     //-------------------------------------------------------------------------- Remplissage de la liste des intervenants
//     ajaxListInter("#inter");
//     //-------------------------------------------------------------------------- Remplissage de la liste des villes
//     ajaxListVille("#ville");
//     //-------------------------------------------------------------------------- Réinitialisation du champs de recherche des événements
//     ajaxListAct("#act_res");
//     //-------------------------------------------------------------------------- Réinitialisation du tableau de jeunes
//     $("#tableau").html("");
//     //-------------------------------------------------------------------------- Inversement des boutons en bas de page
//     $("#btn_act_update").addClass("d-none");
//     $("#btn_act_create").removeClass("d-none");
// }
