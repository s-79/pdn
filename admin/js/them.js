$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_ress").toggleClass("nav-link-toggle");

    // ---------------------------------------------------------------------------- Activation de la touche Entrée dans le champ "search"
    $("#them_search").on('keyup', function (event) {
        if (event.keyCode === 13) {
            $('#infos').click();
        }
    });

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListThem("#them_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des catégories
    ajaxGetCat("#cat");


    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#them_search").keyup(function(){
        let search = $("#them_search").val();
        if(search) {
            them_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
            $("#them_res").html("<option selected value=''>Séléctionner une thématique</option>");
            ajaxListThem("#them_res");
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id de la thématique
        const id_them = $("#them_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos de la thématique séléctionné
        them_Get(id_them);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON CREER UN MOT DE PASSE
    $("#new_them").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        them_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE THÉMATIQUE
    $('#them_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const nom = $("#nom").val();
        const cat = $("#cat").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!nom || !cat) {
            $('#message_admin_them').html("Merci de remplir au minimum les champs <b>Nom et Catégorie</b>");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,50,"#message_admin_them")) {
                //-------------------------------------------------------------  Le nom est-il déjà utilisé pour une autre ressource ?
                $.ajax({
                    url: "php/ress_Get.php",
                    dataType: 'JSON',
                    data : {nom_them_exist:nom},
                    success: function(response){
                        const res = response[0].res;
                        if(parseInt(res) === 1) $("#message_admin_them").html(`Le nom <b>${nom}</b> est déjà utilisé pour une autre thématique.`);
                        //------------------------------------------------------ Envoie des infos vers la BDD
                        else { them_Create(nom, cat);}
                    }
                });
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UNE THÉMATIQUE
    $('#them_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id_them").val();
        const nom = $("#nom").val();
        const cat = $("#cat").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!nom || !cat) {
            $('#message_admin_them').html("Merci de remplir au minimum les champs <b>Nom et Catégorie</b>");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,50,"#message_admin_them")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                them_Update(id, nom, cat);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UNE THÉMATIQUE
    $('#them_delete').click(function(){
        const id = $('#id_them').val();
        them_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const them_Get = (id_them) => {
    if(!id_them) {
        $('#message_admin_them').html("Aucune thématique n'a été séléctionnée");
        $('#modalThemAdmin').modal('show');

    } else {
        //---------------------------------------------------------------------- Récupération des données de la thématique
        ajaxGetThem(id_them);

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_them_create").addClass("d-none");
        $("#btn_them_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const them_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation des formulaires
    document.getElementById("form_them1").reset();

    //-------------------------------------------------------------------------- Remplissage de la liste des catégories
    ajaxGetCat("#cat");

    //-------------------------------------------------------------------------- Remplissage du champs de recherche des thématiques pour afficher les nouveaux
    ajaxListThem("#them_res");
    $("#them_search").val("");

    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_them_update").addClass("d-none");
    $("#btn_them_create").removeClass("d-none");
}
