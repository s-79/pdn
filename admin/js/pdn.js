$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_pdn").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id d'action stocké
    // let id_act_storage = sessionStorage.getItem("id_act");
    // sessionStorage.removeItem('id_act');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    // if(id_act_storage) act_Get(id_act_storage);

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListPdn("#pdn_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des structures
    ajaxGetStr("#structure");


    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#pdn_search").keyup(function(){
        let search = $("#pdn_search").val();
        if(search) {
            pdn_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
            $("#pdn_res").html("<option selected value=''>Séléctionner un·e PDN</option>");
            ajaxListPdn("#pdn_res");
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id du PDN
        const id_pdn = $("#pdn_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos du PDN séléctionné
        pdn_Get(id_pdn);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) AJOUTER UN PDN
    $("#new_pdn").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        pdn_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE PDN
    $('#pdn_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const date_entree = $("#date_entree").val();
        const prenom = $("#prenom").val();
        const nom = $("#nom").val();
        const fonction = $("#fonction").val();
        const structure = $("#structure").val();
        const mail = $("#mail").val();
        let mail_nom = mail.split("@");
        const mail_domaine = mail_nom[1];
        mail_nom = mail_nom[0];
        const tel = $("#tel").val();
        const facebook = $("#facebook").val();
        const instagram = $("#instagram").val();
        const snapchat = $("#snapchat").val();
        const youtube = $("#youtube").val();
        const twitter = $("#twitter").val();
        const discord = $("#discord").val();
        const twitch = $("#twitch").val();
        const tiktok = $("#tiktok").val();
        const presentation = $("#presentation").val();
        let whatsapp =  $("#whatsapp").is(':checked');
        if(whatsapp)whatsapp=1;else{whatsapp=0};
        let charte =  $("#charte").is(':checked');
        if(charte)charte=1;else{charte=0};
        let fiche_rens =  $("#fiche_rens").is(':checked');
        if(fiche_rens)fiche_rens=1;else{fiche_rens=0};
        let actif =  $("#actif").is(':checked');
        if(actif)actif=1;else{actif=0};
        const date_sortie = $("#date_sortie").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!prenom || !nom || !fonction || !structure || !mail) {
            $('#message_admin_pdn').html("Merci de remplir au minimum les champs <b>Prénom, Nom, Fonction, Structure et Mail</b>");
            $('#modalPdnAdmin').modal('show');
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Lieu",lieu,100)&& vLen("Ville",ville,100)) {

                //-------------------------------------------------------------- Envoie des infos vers la BDD
                act_Create(dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_pers, commentaires);
            }
        }
    })

//     // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
//
//     //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UNE ACTION
//     $('#act_update').click(function(){
//         // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
//         const id = $("#id_act").val();
//         const dat = $("#date").val();
//         const type = $("#type").val();
//         const organise = $("#organise").val();
//         const intitule = $("#intitule").val();
//         const uuid = uuid_gen();
//         const lieu = $("#lieu").val();
//         const ville = $("#ville").val();
//         const pj = $("#pj").val();
//         const support = $("#support").val();
//         let facebook =  $("#facebook").is(':checked');
//         if(facebook)facebook=1;else{facebook=0};
//         let whatsapp =  $("#whatsapp").is(':checked');
//         if(whatsapp)whatsapp=1;else{whatsapp=0};
//         let twitter =  $("#twitter").is(':checked');
//         if(twitter)twitter=1;else{twitter=0};
//         let site =  $("#site").is(':checked');
//         if(site)site=1;else{site=0};
//         let nb_ress = $("#nb_ress").val();
//         if (!nb_ress) nb_ress = 0;
//         const duree = $("#duree").val();
//         let nb_pdn = $("#nb_pdn").val();
//         if (!nb_pdn) nb_pdn = 0;
//         let nb_part = $("#nb_part").val();
//         if (!nb_part) nb_part = 0;
//         let nb_pers = $("#nb_pers").val();
//         if (!nb_pers) nb_pers = 0;
//         const commentaires = $("#commentaires").val();
//
//         if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Lieu",lieu,100)&& vLen("Ville",ville,100)) {
//             act_Update(id, dat, type, organise, intitule, uuid, lieu, ville, pj, support, facebook, whatsapp, twitter, site, nb_ress, duree, nb_pdn, nb_part, nb_pers, commentaires);
//         }
//     })
//
//     // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !
//
//     //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UNE ACTION
//     $('#act_delete').click(function(){
//         const id = $('#id_act').val();
//         act_Delete(id);
//     })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const pdn_Get = (id_pdn) => {
    if(!id_pdn) alert("Aucun·e PDN n'a été séléctionné·e")
    else {
        // //---------------------------------------------------------------------- Affichage de l'action séléctionné lorsqu'on à vient des pages pdn ou part
        // ajaxListAct("#act_res", id_act);
        //---------------------------------------------------------------------- Récupération des données du PDN
        ajaxGetPdn(id_pdn);

        // //---------------------------------------------------------------------- Réinitialisation du tableau action
        // $("#tableau_act").html("");
        //
        // //---------------------------------------------------------------------- Remplissage du tableau
        // ajaxActPart(id_pdn, "#tableau_act");

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_pdn_create").addClass("d-none");
        $("#btn_pdn_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const pdn_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    document.getElementById("form_pdn").reset();
    //-------------------------------------------------------------------------- Remplissage de la liste des structures
    ajaxGetStr("#structure");
    //-------------------------------------------------------------------------- Remplissage du champs de recherche des PDN pour afficher les nouveaux
    ajaxListPdn("#pdn_res");
    //-------------------------------------------------------------------------- Réinitialisation du tableau action
    $("#tableau_act").html("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_pdn_update").addClass("d-none");
    $("#btn_pdn_create").removeClass("d-none");
}
