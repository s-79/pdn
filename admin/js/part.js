$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_part").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id de session stocké
    let id_part_storage = sessionStorage.getItem("id_part");
    sessionStorage.removeItem('id_part');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    if(id_part_storage) part_Get(id_part_storage);

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListPart("#part_res");


    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#part_search").keyup(function(){
        let search = $("#part_search").val();
        if(search) {
            part_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
            $("#part_res").html("<option selected value=''>Séléctionner un·e partenaire</option>");
            ajaxListPart("#part_res");
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id du partenaire
        const id_part = $("#part_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos du partenaire séléctionné
        part_Get(id_part);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON CREER UN MOT DE PASSE
    $("#new_part").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        part_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE PARTENAIRE
    $('#part_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        $("#nom").val();
        $("#adresse").val();
        $("#cp").val();
        $("#ville").val();
        $("#site").val();
        $("#prenom_ref").val();
        $("#nom_ref").val();
        $("#fonction").val();
        $("#tel").val();
        $("#mail").val();
        $("#commentaires").val();

        const nom = $("#nom").val();
        const adresse = $("#adresse").val();
        let cp = $("#cp").val();
        if(!cp || isNaN(cp)) cp = 0;
        const ville = $("#ville").val().toUpperCase();
        const site = $("#site").val().toLowerCase();
        const prenom_ref = strUpFirst($("#prenom_ref").val());
        const nom_ref = $("#nom_ref").val().toUpperCase();
        const fonction = $("#fonction").val();
        const tel = $("#tel").val();
        const mail = $("#mail").val().toLowerCase();
        const commentaires = $("#commentaires").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!nom) {
            $('#message_admin_part').html("Merci de remplir au minimum le champ <b>Nom de la structure</b> et de saisir uniquement des chiffres dans le champ <b>Code Postal</b>");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom de la structure",nom,100,"#message_admin_part") && vLen("Adresse",adresse,100,"#message_admin_part") && vLen("Ville",ville,100,"#message_admin_part") && vLen("Site",site,100,"#message_admin_part") && vLen("Prénom référent·e",prenom_ref,100,"#message_admin_part") && vLen("Nom référent·e",nom_ref,100,"#message_admin_part") && vLen("Fonction",fonction,100,"#message_admin_part") && vLen("Téléphone",tel,100,"#message_admin_part") && vLen("Email",mail,100,"#message_admin_part") && vLen("Commentaires",commentaires,700,"#message_admin_part")) {
                //-------------------------------------------------------------  L'adresse mail est-elle utilisée par un·e autre PDN
                $.ajax({
                    url: "php/part_Get.php",
                    dataType: 'JSON',
                    data : {nom_part_exist:nom},
                    success: function(response){
                        const res = response[0].res;
                        if(parseInt(res) === 1) $("#message_admin_part").html(`Le nom <b>${nom}</b> est déjà utilisé pour un autre partenaire.`);
                        //------------------------------------------------------ Envoie des infos vers la BDD
                        else { part_Create(nom, adresse, cp, ville, site, prenom_ref, nom_ref, fonction, tel, mail, commentaires);}
                    }
                });
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN PARTENAIRE
    $('#part_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id_part").val()
        const nom = $("#nom").val();
        const adresse = $("#adresse").val();
        const cp = $("#cp").val();
        const ville = $("#ville").val().toUpperCase();
        const site = $("#site").val().toLowerCase();
        const prenom_ref = strUpFirst($("#prenom_ref").val());
        const nom_ref = $("#nom_ref").val().toUpperCase();
        const fonction = $("#fonction").val();
        const tel = $("#tel").val();
        const mail = $("#mail").val().toLowerCase();
        const commentaires = $("#commentaires").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!nom) {
            $('#message_admin_part').html("Merci de remplir au minimum le champ <b>Nom de la structure</b> et de saisir uniquement des chiffres dans le champ <b>Code Postal</b>");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom de la structure",nom,100,"#message_admin_part") && vLen("Adresse",adresse,100,"#message_admin_part") && vLen("Ville",ville,100,"#message_admin_part") && vLen("Site",site,100,"#message_admin_part") && vLen("Prénom référent·e",prenom_ref,100,"#message_admin_part") && vLen("Nom référent·e",nom_ref,100,"#message_admin_part") && vLen("Fonction",fonction,100,"#message_admin_part") && vLen("Téléphone",tel,100,"#message_admin_part") && vLen("Email",mail,100,"#message_admin_part") && vLen("Commentaires",commentaires,700,"#message_admin_part")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                part_Update(id, nom, adresse, cp, ville, site, prenom_ref, nom_ref, fonction, tel, mail, commentaires);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN PARTENAIRE
    $('#part_delete').click(function(){
        const id = $('#id_part').val();
        part_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const part_Get = (id_part) => {
    if(!id_part) {
        $('#message_admin_part').html("Aucun·e partenaire n'a été séléctionné·e.");
        $('#modalPartAdmin').modal('show');

    } else {
        //---------------------------------------------------------------------- Affichage de l'action séléctionné dans l'outil de recherche lorsqu'on à vient d'une autre page'
        ajaxListPart("#part_res", id_part);
        //---------------------------------------------------------------------- Récupération des données du partenaire
        ajaxGetPart(id_part);

        //---------------------------------------------------------------------- Réinitialisation du tableau action
        $("#tableau_act").html("");

        //---------------------------------------------------------------------- Remplissage du tableau
        ajaxPartAct(id_part, "#tableau_act");


        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_part_create").addClass("d-none");
        $("#btn_part_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const part_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation des formulaires
    document.getElementById("form_part").reset();
    //-------------------------------------------------------------------------- Remplissage du champs de recherche des partenaires pour afficher les nouveaux
    ajaxListPart("#part_res");
    $("#part_search").val("");
    //-------------------------------------------------------------------------- Réinitialisation du tableau action
    $("#tableau_act").html("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_part_update").addClass("d-none");
    $("#btn_part_create").removeClass("d-none");
}
