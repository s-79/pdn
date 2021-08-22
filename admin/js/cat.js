$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_ress").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListCat("#cat_res");

    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#cat_search").keyup(function(){
        let search = $("#cat_search").val();
        if(search) {
            cat_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
            $("#cat_res").html("<option selected value=''>Séléctionner une catégorie</option>");
            ajaxListCat("#cat_res");
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id de la catégorie
        const id_cat = $("#cat_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos de la catégorie séléctionné
        cat_Get(id_cat);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON CREER UN MOT DE PASSE
    $("#new_cat").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        cat_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE CATÉGORIE
    $('#cat_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const nom = $("#nom").val();
        const icone = $("#icone").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!nom || !icone) {
            $('#message_admin_cat').html("Merci de remplir au minimum les champs <b>Nom et Icône</b>");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,50,"#message_admin_cat") && vLen("Icône",icone,30,"#message_admin_cat")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                cat_Create(nom, icone);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UNE CATÉGORIE
    $('#cat_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id_cat").val();
        const nom = $("#nom").val();
        const icone = $("#icone").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!nom || !icone) {
            $('#message_admin_cat').html("Merci de remplir au minimum les champs <b>Nom et Icône</b>");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,50,"#message_admin_cat") && vLen("Icône",icone,30,"#message_admin_cat")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                cat_Update(id, nom, icone);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UNE CATÉGORIE
    $('#cat_delete').click(function(){
        const id = $('#id_cat').val();
        cat_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const cat_Get = (id_cat) => {
    if(!id_cat) {
        $('#message_admin_cat').html("Aucune catégorie n'a été séléctionnée");
        $('#modalCatAdmin').modal('show');

    } else {
        //---------------------------------------------------------------------- Récupération des données de la catégorie
        ajaxGetCat(id_cat);

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_cat_create").addClass("d-none");
        $("#btn_cat_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const cat_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation des formulaires
    document.getElementById("form_cat1").reset();

    //-------------------------------------------------------------------------- Remplissage du champs de recherche des catégories pour afficher les nouveaux
    ajaxListCat("#cat_res");
    $("#cat_search").val("");

    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_cat_update").addClass("d-none");
    $("#btn_cat_create").removeClass("d-none");
}
