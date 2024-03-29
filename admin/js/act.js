$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_act").toggleClass("nav-link-toggle");

    // ------------------------------------------------------------------------- Activation de la touche Entrée dans le champ "search"
    $("#act_search").on('keyup', function (event) {
        if (event.keyCode === 13) {
            $('#infos').click();
        }
    });

    //-------------------------------------------------------------------------- Réinitialisation (si on vient d'une autre page et qu'on avait ouvert ou commencé à remplir une action auparavant)
    act_Reset();

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id de session stocké
    let id_act_storage = sessionStorage.getItem("id_act");
    sessionStorage.removeItem('id_act');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    if(id_act_storage) act_Get(id_act_storage);


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

    // ------------------------------------------------------------------------- ! ! ! - -  C O O R D O - - ! ! !

    //-------------------------------------------------------------------------- Remplissage de la liste des Coordos
    ajaxListCoordo("#coordo");

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON COORDO CREATE
    $("#btn_coordo_create").click(function() {
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        $("#modal_coordo").modal('hide');
        document.getElementById("form_coordo_create").reset();
        //------------------------------------------------------------------- -- Remplissage de la liste des Coordos
        ajaxNewCoordo("#select_nom_coordo");
    });
    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON COORDO UPDATE
    $("#btn_coordo_update").click(function() {
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        $("#modal_coordo").modal('hide');
        document.getElementById("form_coordo_update").reset();
        //------------------------------------------------------------------- -- Remplissage de la liste des Coordos
        ajaxNewCoordo("#select_nom_coordo");
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER" DANS LE MODAL COORDO
    $('#coordo_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const prenom = $("#create_prenom_coordo").val();
        const nom = $("#create_nom_coordo").val();
        let actif =  $("#create_actif_coordo").is(':checked');
        if(actif)actif=1;else{actif=0};

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!prenom || !nom) {
            $('#message_admin_act').html(`Les champs Prénom et Nom sont obligatoires.`);
            $('#modalActAdmin').modal('show');
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Prénom",prenom,100) && vLen("Nom",nom,100)) {

                //-------------------------------------------------------------- Envoie des infos vers la BDD
                coordo_Create(prenom, nom, actif);
            }
        }
    })

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER" DANS LE MODAL COORDO
    $('#coordo_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#update_id_coordo").val();
        const prenom = $("#update_prenom_coordo").val();
        const nom = $("#update_nom_coordo").val();
        let actif =  $("#update_actif_coordo").is(':checked');
        if(actif)actif=1;else{actif=0};

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!prenom || !nom) {
            $('#message_admin_act').html(`Les champs Prénom et Nom sont obligatoires.`);
            $('#modalActAdmin').modal('show');
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Prénom",prenom,100) && vLen("Nom",nom,100)) {

                //-------------------------------------------------------------- Envoie des infos vers la BDD
                coordo_Update(id, nom, prenom, actif);
            }
        }
    })

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UNE ACTION
    $('#coordo_delete').click(function(){
        const id = $("#update_id_coordo").val();
        coordo_Delete(id);
    })

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    // ------------------------------------------------------------------------- ÉVENEMENT CHANGE SUR LE MENU SELECT DES COORDOS
    $("#select_nom_coordo").change(function() {
        //------------------------------------------------------------------- -- Récupération des infos coordos
        id_coordo = $("#select_nom_coordo").val();
        coordoGetInfos(id_coordo);
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON + SELECT RESSOURCES
    $("#select_ress").click(function() {
        //------------------------------------------------------------------- -- Remplissage de la liste des RESSOURCES et evt click sur les boutons "tous" et "aucun"
        ajaxListRess("#modal_list_ress");
        $("#btn_select_AllRess").click(function() {ajaxListRess("#modal_list_ress", "checked");});
        $("#btn_select_NoRess").click(function() {ajaxListRess("#modal_list_ress", "unchecked");});
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON + SELECT PDN
    $("#select_pdn").click(function() {
        //------------------------------------------------------------------- -- Remplissage de la liste des PDN et evt click sur les boutons "tous" et "aucun"
        ajaxListPdn("#modal_list_pdn");
        $("#btn_select_AllPdn").click(function() {ajaxListPdn("#modal_list_pdn", "checked");});
        $("#btn_select_NoPdn").click(function() {ajaxListPdn("#modal_list_pdn", "unchecked");});
        $("#btn_select_PdnReseau").click(function() {ajaxListPdn("#modal_list_pdn", "reseau");});
        $("#btn_select_PdnActifs").click(function() {ajaxListPdn("#modal_list_pdn", "actifs");});
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON + SELECT RESSOURCES
    $("#select_part").click(function() {
        //-------------------------------------------------------------------------- Remplissage de la liste des Partenaires et evt click sur les boutons "tous" et "aucun"
        ajaxListPart("#modal_list_part");
        $("#btn_select_Allpart").click(function() {ajaxListPart("#modal_list_part", "checked");});
        $("#btn_select_Nopart").click(function() {ajaxListPart("#modal_list_part", "unchecked");});
    });

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON + SELECT RESSOURCES
    $("#select_str").click(function() {
        //-------------------------------------------------------------------------- Remplissage de la liste des Strenaires et evt click sur les boutons "tous" et "aucun"
        ajaxListStr("#modal_list_str");
        $("#btn_select_Allstr").click(function() {ajaxListStr("#modal_list_str", "checked");});
        $("#btn_select_Nostr").click(function() {ajaxListStr("#modal_list_str", "unchecked");});
        $("#btn_select_strReseau").click(function() {ajaxListStr("#modal_list_str", "reseau");});
        $("#btn_select_strActives").click(function() {ajaxListStr("#modal_list_str", "actives");});
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

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTON "SELECTIONNER" DANS LE MODAL PART
    $("#btn_select_str").click(function() {
        //---------------------------------------------------------------------- Récupérarion et suppression du contenu de la variable de session créé lors du click sur le (+) et qui contient le tableau de tous les ID au fomat Json
        const jsonIdStr = sessionStorage.getItem('jsonIdStr');
        sessionStorage.removeItem('jsonIdStr');
        if(jsonIdStr) {
            //------------------------------------------------------------------ Conversion du JSON stockée dans la variable de session en tableau
            const arrayIdStr = JSON.parse(jsonIdStr);
            let arraySelectedStr = [];
            //------------------------------------------------------------------ Itération sur chaque ID contenu dans le tableau
            for(strId of arrayIdStr) {
                //---------------------------------------------------------- --- Si la case est cochée, on ajoute son ID dans le tableau Selected
                let check = $(strId).is(':checked');
                if(check) arraySelectedStr.push(strId);
            }
            let lenSelectedStr = arraySelectedStr.length;
            $("#nb_str").val(lenSelectedStr);
            //------------------------------------------------------------------ Stockage du tableau Selected
            const jsonSelectedStr = JSON.stringify(arraySelectedStr);
            sessionStorage.setItem('jsonSelectedStr', jsonSelectedStr);
        }
        $("#modal_select_str").modal('hide');
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id de l'évenement séléctionné
        const id_act = $("#act_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos de l'événement séléctionné
        act_Get(id_act);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UNE NOUVELLE ACTION
    $("#new_act").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page événement (fonction ci-dessous)
        act_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    $('#act_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const dat = $("#date").val();
        const type = $("#type").val();
        const organise = $("#organise").val();
        const intitule = $("#intitule").val();
        const uuid = uuid_gen();
        const lieu = $("#lieu").val();
        const ville = $("#ville").val();
        const pj = $("#pj").val();
        const support = $("#support").val();
        let facebook =  $("#facebook").is(':checked');
        if(facebook)facebook=1;else{facebook=0};
        let whatsapp =  $("#whatsapp").is(':checked');
        if(whatsapp)whatsapp=1;else{whatsapp=0};
        let twitter =  $("#twitter").is(':checked');
        if(twitter)twitter=1;else{twitter=0};
        let site =  $("#site").is(':checked');
        if(site)site=1;else{site=0};
        let nb_ress = $("#nb_ress").val();
        if (!nb_ress) nb_ress = 0;
        const duree = $("#duree").val();
        let nb_pdn = $("#nb_pdn").val();
        if (!nb_pdn) nb_pdn = 0;
        let nb_part = $("#nb_part").val();
        if (!nb_part) nb_part = 0;
        let nb_str = $("#nb_str").val();
        if (!nb_str) nb_str = 0;
        let nb_pers = $("#nb_pers").val();
        if (!nb_pers) nb_pers = 0;
        const commentaires = $("#commentaires").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!dat || !type || !intitule || !support || !duree) {
            $('#message_admin_act').html(`Les champs Date, Type, Intitulé, Support, Durée sont obligatoires.`);
            $('#modalActAdmin').modal('show');
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Lieu",lieu,100)&& vLen("Ville",ville,100)) {

                //-------------------------------------------------------------- Envoie des infos vers la BDD
                act_Create(dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_str, nb_pers, commentaires);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UNE ACTION
    $('#act_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id_act").val();
        const dat = $("#date").val();
        const type = $("#type").val();
        const organise = $("#organise").val();
        const intitule = $("#intitule").val();
        const uuid = uuid_gen();
        const lieu = $("#lieu").val();
        const ville = $("#ville").val();
        const pj = $("#pj").val();
        const support = $("#support").val();
        let facebook =  $("#facebook").is(':checked');
        if(facebook)facebook=1;else{facebook=0};
        let whatsapp =  $("#whatsapp").is(':checked');
        if(whatsapp)whatsapp=1;else{whatsapp=0};
        let twitter =  $("#twitter").is(':checked');
        if(twitter)twitter=1;else{twitter=0};
        let site =  $("#site").is(':checked');
        if(site)site=1;else{site=0};
        let nb_ress = $("#nb_ress").val();
        if (!nb_ress) nb_ress = 0;
        const duree = $("#duree").val();
        let nb_pdn = $("#nb_pdn").val();
        if (!nb_pdn) nb_pdn = 0;
        let nb_part = $("#nb_part").val();
        if (!nb_part) nb_part = 0;
        let nb_str = $("#nb_str").val();
        if (!nb_str) nb_str = 0;
        let nb_pers = $("#nb_pers").val();
        if (!nb_pers) nb_pers = 0;
        const commentaires = $("#commentaires").val();

        if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Lieu",lieu,100)&& vLen("Ville",ville,100)) {
            act_Update(id, dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_str, nb_pers, commentaires);
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UNE ACTION
    $('#act_delete').click(function(){
        const id = $('#id_act').val();
        act_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const act_Get = (id_act) => {
    if(!id_act) {
        $('#message_admin_act').html(`Aucune action n'a été séléctionnée.`);
        $('#modalActAdmin').modal('show');
    } else {
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
        //---------------------------------------------------------------------- Récupération des Structures liées à cet événement
        ajaxGetStr(id_act);

        //---------------------------------------------------------------------- Réinitialisation des tableaux Partenaires et PDN
        $("#tableau_part").html("");
        $("#tableau_pdn").html("");
        $("#tableau_str").html("");
        //---------------------------------------------------------------------- Remplissage des tableaux
        ajaxActPart(id_act, "#tableau_part");
        ajaxActPdn(id_act, "#tableau_pdn");
        ajaxActStr(id_act, "#tableau_str");

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_act_create").addClass("d-none");
        $("#btn_act_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const act_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    document.getElementById("form_act").reset();
    //-------------------------------------------------------------------------- Remplissage de la liste des Coordos
    ajaxListCoordo("#coordo");
    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListAct("#act_res");
    //-------------------------------------------------------------------------- Suppression des variables de session
    sessionStorage.removeItem('jsonSelectedCoordo');
    sessionStorage.removeItem('jsonSelectedRess');
    sessionStorage.removeItem('jsonSelectedPdn');
    sessionStorage.removeItem('jsonSelectedPart');
    sessionStorage.removeItem('jsonSelectedStr');
    //-------------------------------------------------------------------------- Réinitialisation des tableaux Partenaires et PDN
    $("#tableau_part").html("");
    $("#tableau_pdn").html("");
    $("#tableau_str").html("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_act_update").addClass("d-none");
    $("#btn_act_create").removeClass("d-none");
}
