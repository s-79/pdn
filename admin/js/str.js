$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_str").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListStr("#str_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des structures
    ajaxGetVille("#ville");


    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#str_search").keyup(function(){
        let search = $("#str_search").val();
        if(search) {
            str_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
            $("#str_res").html("<option selected value=''>Séléctionner une structure</option>");
            ajaxListStr("#str_res");
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id de la structure
        const id_str = $("#str_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos de la structure séléctionnée
        str_Get(id_str);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON CREER UN MOT DE PASSE
    $("#new_str").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        str_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE STRUCTURE
    $('#str_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const aap = $("#aap").val();
        const nom = $("#nom").val().toUpperCase();
        const type = $("#type").val();
        const adresse = $("#adresse").val();
        const ville_id = $("#ville").val();
        let lat = $("#lat").val();
        if(isNaN(lat) || lat%1 === 0) lat = 0;
        let lon = $("#lon").val();
        if(isNaN(lon) || lon%1 === 0) lon = 0;
        let qpv =  $("#qpv").is(':checked');
        if(qpv)qpv=1;else{qpv=0};
        let prij =  $("#prij").is(':checked');
        if(prij)prij=1;else{prij=0};
        const tel = $("#tel").val();
        const site = $("#site").val().toLowerCase();
        let image = $("#image").val();
        if(!image) image = "img/str/str.jpg";
        const presentation = $("#presentation").val();
        const resp_prenom = strUpFirst($("#resp_prenom").val());
        const resp_nom = $("#resp_nom").val().toUpperCase();
        const resp_tel = $("#resp_tel").val();
        let resp_mail = $("#resp_mail").val();
        if(!resp_mail.includes("@")) resp_mail = "@";
        let resp_mail_nom = resp_mail.split("@");
        const resp_mail_domaine = resp_mail_nom[1];
        resp_mail_nom = resp_mail_nom[0];
        const nb_pdn_lab = $("#nb_pdn_lab").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!aap || !nom || !type || !adresse || !ville_id || !nb_pdn_lab) {
            $('#message_admin_str').html("Merci de remplir au minimum les champs <b>Appel à projets, Nom, Type, Adresse, Ville</b> et d'indiquer <b>en chiffre</b> le nombre de PDN labellisé·es sur la structure.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,100,"#message_admin_str") && vLen("Adresse",adresse,100,"#message_admin_str") && vLen("Nom responsable",resp_nom,100,"#message_admin_str") && vLen("Prénom responsable",resp_prenom,100,"#message_admin_str") && vLen("Mail avant @",resp_mail_nom,50,"#message_admin_str") && vLen("Mail après @",resp_mail_domaine,50,"#message_admin_str") && vLen("Téléphone",tel,50,"#message_admin_str") && vLen("Site",site,500,"#message_admin_str") && vLen("Présentation",presentation,700,"#message_admin_str")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                str_Create(aap, nom, type, adresse, ville_id, lat, lon, qpv, prij, tel, site, image, presentation, resp_prenom, resp_nom, resp_tel, resp_mail_nom, resp_mail_domaine, nb_pdn_lab);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UNE STRUCTURE
    $('#str_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id_str").val();
        const aap = $("#aap").val();
        const nom = $("#nom").val().toUpperCase();
        const type = $("#type").val();
        const adresse = $("#adresse").val();
        const ville_id = $("#ville").val();
        let lat = $("#lat").val();
        if(isNaN(lat) || lat%1 === 0) lat = 0;
        let lon = $("#lon").val();
        if(isNaN(lon) || lon%1 === 0) lon = 0;
        let qpv =  $("#qpv").is(':checked');
        if(qpv)qpv=1;else{qpv=0};
        let prij =  $("#prij").is(':checked');
        if(prij)prij=1;else{prij=0};
        const tel = $("#tel").val();
        const site = $("#site").val().toLowerCase();
        let image = $("#image").val();
        if(!image) image = "img/structure/str.jpg";
        const presentation = $("#presentation").val();
        const resp_prenom = strUpFirst($("#resp_prenom").val());
        const resp_nom = $("#resp_nom").val().toUpperCase();
        const resp_tel = $("#resp_tel").val();
        let resp_mail = $("#resp_mail").val();
        if(!resp_mail.includes("@") && resp_mail.length < 3) resp_mail = "@";
        let resp_mail_nom = resp_mail.split("@");
        const resp_mail_domaine = resp_mail_nom[1];
        resp_mail_nom = resp_mail_nom[0];
        const nb_pdn_lab = $("#nb_pdn_lab").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!aap || !nom || !type || !adresse || !ville_id || !nb_pdn_lab) {
            $('#message_admin_str').html("Merci de remplir au minimum les champs <b>Appel à projets, Nom, Type, Adresse, Ville</b> et d'indiquer <b>en chiffre</b> le nombre de PDN labellisé·es sur la structure.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,100,"#message_admin_str") && vLen("Adresse",adresse,100,"#message_admin_str") && vLen("Nom responsable",resp_nom,100,"#message_admin_str") && vLen("Prénom responsable",resp_prenom,100,"#message_admin_str") && vLen("Mail avant @",resp_mail_nom,50,"#message_admin_str") && vLen("Mail après @",resp_mail_domaine,50,"#message_admin_str") && vLen("Téléphone",tel,50,"#message_admin_str") && vLen("Site",site,500,"#message_admin_str") && vLen("Présentation",presentation,700,"#message_admin_str")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                str_Update(id, aap, nom, type, adresse, ville_id, lat, lon, qpv, prij, tel, site, image, presentation, resp_prenom, resp_nom, resp_tel, resp_mail_nom, resp_mail_domaine, nb_pdn_lab);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN·E str
    $('#str_delete').click(function(){
        const id = $('#id_str').val();
        str_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const str_Get = (id_str) => {
    if(!id_str) {
        $('#message_admin_str').html("Aucune sructure n'a été séléctionnée");
        $('#modalStrAdmin').modal('show');

    } else {
        //---------------------------------------------------------------------- Récupération des données du str
        ajaxGetStr(id_str);

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_str_create").addClass("d-none");
        $("#btn_str_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const str_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation des formulaires
    document.getElementById("form_str1").reset();
    document.getElementById("form_str2").reset();
    document.getElementById("form_str3").reset();
    document.getElementById("form_str4").reset();
    //-------------------------------------------------------------------------- Remplissage de la liste des structures
    ajaxGetStr("#structure");
    //-------------------------------------------------------------------------- Remplissage du champs de recherche des str pour afficher les nouveaux
    ajaxListStr("#str_res");
    $("#str_search").val("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_str_update").addClass("d-none");
    $("#btn_str_create").removeClass("d-none");
}
