$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_ress").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListRess("#ress_res");

    // ------------------------------------------------------------------------  Remplissage des catégories et thématiques valides
    cat_Get();

    // ------------------------------------------------------------------------- EVEMENT CLICK SUR UNE CATÉGORIE
    $("body").delegate( ".borderCatAdm", "click", function() {
    	$(".borderCatAdm").removeClass("bg_white");
    	$(this).addClass("bg_white");
    	const id_Cat = $(this).attr('id');
        const divCat = `#divCat${id_Cat}`;
        $(".divCat").addClass("d-none");
    	$(divCat).removeClass("d-none");
    });

    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#ress_search").keyup(function(){
        let search = $("#ress_search").val();
        if(search) {
            ress_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
            $("#ress_res").html("<option selected value=''>Séléctionner une ressource</option>");
            ajaxListRess("#ress_res");
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id de la ressource
        const id_ress = $("#ress_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos de la ressource séléctionnée
        ress_Get(id_ress);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON CREER UN MOT DE PASSE
    $("#new_ress").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        ress_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE RESSOURCE
    $('#ress_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const uuid = uuid_gen();
        const nom = $("#nom").val();
        const lien = $("#nom").val().toLowerCase();
        let image = $("#image").val();
        if(!image) image = "img/outil/0.jpg";
        const age = $("#age").val();
        const editeur = $("#editeur").val();
        const description = $("#description").val();
        let valide =  $("#valide").is(':checked');
        if(valide)valide=1;else{valide=0};

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!nom || !lien) {
            $('#message_admin_ress').html(`Merci de remplir au minimum les champs <b>Nom et Lien</b>`);
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,100,"#message_admin_ress") && vLen("Lien",lien,500,"#message_admin_ress") && vLen("Age",age,30,"#message_admin_ress") && vLen("Editeur",editeur,50,"#message_admin_ress") && vLen("Description",description,700,"#message_admin_ress")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                ress_Create(uuid, nom, lien, image, age, editeur, description, valide);
            }
        }
    })

//     // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
//
//     //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UNE RESOURCE
//     $('#ress_update').click(function(){
//         // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
//         const id = $("#id_ress").val();
//         const date_entree = $("#date_entree").val();
//         const prenom = strUpFirst($("#prenom").val());
//         const nom = $("#nom").val().toUpperCase();
//         let image = $("#image").val();
//         if(!image) image = "img/outil/0.jpg";
//         const fonction = strUpFirst($("#fonction").val());
//         const structure = $("#structure").val();
//         const mail = $("#mail").val().toLowerCase();
//         let mail_nom = mail.split("@");
//         const mail_domaine = mail_nom[1];
//         mail_nom = mail_nom[0];
//         const tel = $("#tel").val();
//         const facebook = $("#facebook").val().toLowerCase();
//         const snapchat = $("#snapchat").val().toLowerCase();
//         const instagram = $("#instagram").val().toLowerCase();
//         const youtube = $("#youtube").val().toLowerCase();
//         const twitter = $("#twitter").val().toLowerCase();
//         const discord = $("#discord").val().toLowerCase();
//         const twitch = $("#twitch").val().toLowerCase();
//         const tiktok = $("#tiktok").val().toLowerCase();
//         const presentation = $("#presentation").val();
//         let whatsapp =  $("#whatsapp").is(':checked');
//         if(whatsapp)whatsapp=1;else{whatsapp=0};
//         let charte =  $("#charte").is(':checked');
//         if(charte)charte=1;else{charte=0};
//         let fiche_rens =  $("#fiche_rens").is(':checked');
//         if(fiche_rens)fiche_rens=1;else{fiche_rens=0};
//         let actif =  $("#actif").is(':checked');
//         if(actif)actif=1;else{actif=0};
//         const mdp = $("#mdp").val();
//         const date_sortie = $("#date_sortie").val();
//
//         // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
//         if(!prenom || !nom || !fonction || !structure || !mail_nom || !mail_domaine) {
//             $('#message_admin_ress').html("Merci de remplir au minimum les champs <b>Prénom, Nom, Fonction et Structure</b> et d'indiquer une <b>adresse Mail</b> correcte.");
//         } else {
//             // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
//             if(vLen("Prénom",prenom,10,"#message_admin_ress") && vLen("Nom",nom,100,"#message_admin_ress") && vLen("Fonction",fonction,100,"#message_admin_ress") && vLen("Mail avant @",mail_nom,50,"#message_admin_ress") && vLen("Mail après @",mail_domaine,50,"#message_admin_ress") && vLen("Téléphone",tel,50,"#message_admin_ress") && vLen("Facebook",facebook,255,"#message_admin_ress") && vLen("Instagram",instagram,255,"#message_admin_ress") && vLen("Snapchat",snapchat,255,"#message_admin_ress") && vLen("Youtube",youtube,255,"#message_admin_ress") && vLen("Twitter",twitter,255,"#message_admin_ress") && vLen("Discord",discord,255,"#message_admin_ress") && vLen("Twitch",twitch,255,"#message_admin_ress") && vLen("TikTok",tiktok,255,"#message_admin_ress") && vLen("Mot de passe",mdp,25,"#message_admin_ress") && vLen("Image",image,255,"#message_admin_ress") && vLen("Présentation",presentation,700,"#message_admin_ress")) {
//                 //-------------------------------------------------------------- Envoie des infos vers la BDD
//                 ress_Update(id, prenom, nom, fonction, mail_nom, mail_domaine, tel, facebook, snapchat, instagram, whatsapp, youtube, twitter, discord, twitch, tiktok, mdp, image, presentation, charte, fiche_rens, actif, date_entree, date_sortie, structure);
//             }
//         }
//     })
//
//     // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !
//
//     //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UNE RESSOURCE
//     $('#ress_delete').click(function(){
//         const id = $('#id_ress').val();
//         ress_Delete(id);
//     })
});
//
// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const ress_Get = (id_ress) => {
    if(!id_ress) {
        $('#message_admin_ress').html("Aucune ressource n'a été séléctionnée");
        $('#modalRessAdmin').modal('show');

    } else {
        //---------------------------------------------------------------------- Récupération des données de le ressource
        ajaxGetRess(id_ress);
        //---------------------------------------------------------------------- Récupération des thématiques de le ressource
        ressGetThem(id_ress);

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_ress_create").addClass("d-none");
        $("#btn_ress_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const ress_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation des formulaires
    document.getElementById("form_ress1").reset();
    document.getElementById("form_ress2").reset();
    document.getElementById("form_ress3").reset();
    document.getElementById("form_ress4").reset();
    document.getElementById("form_ress5").reset();

    //-------------------------------------------------------------------------- Suppression des variables de session
    sessionStorage.removeItem('jsonSelectedThem');

    //-------------------------------------------------------------------------- Remplissage du champs de recherche des ressources pour afficher les nouveaux
    ajaxListRess("#ress_res");
    $("#ress_search").val("");

    // ------------------------------------------------------------------------  Remplissage des catégories et thématiques valides
    cat_Get();

    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_ress_update").addClass("d-none");
    $("#btn_ress_create").removeClass("d-none");
}
