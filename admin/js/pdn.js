$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel dans la Navbar
    $("#menu_pdn").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id de session stocké
    let id_pdn_storage = sessionStorage.getItem("id_pdn");
    sessionStorage.removeItem('id_pdn');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    if(id_pdn_storage) pdn_Get(id_pdn_storage);

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


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON CREER UN MOT DE PASSE
    $("#new_pdn").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        pdn_Reset();
    });

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) AJOUTER UN PDN
    $("#pwd_create").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire
        $("#mdp").val(pwd(10));
        $('#message_admin_pdn').html(`Pensez à noter le mot de passe avant d'enregistrer la fiche car il sera ensuite crypté pour être stocké dans la BDD.<br><br>Si vous ne souhaitez pas le modifier, merci de vider le champ "Nouveau mot de passe".`);
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE PDN
    $('#pdn_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const date_entree = $("#date_entree").val();
        const prenom = strUpFirst($("#prenom").val());
        const nom = $("#nom").val().toUpperCase();
        let image = $("#image").val();
        if(!image) image = "img/pdn/0.jpg";
        const fonction = strUpFirst($("#fonction").val());
        const structure = $("#structure").val();
        const mail = $("#mail").val().toLowerCase();
        let mail_nom = mail.split("@");
        const mail_domaine = mail_nom[1];
        mail_nom = mail_nom[0];
        const tel = $("#tel").val();
        const facebook = $("#facebook").val().toLowerCase();
        const snapchat = $("#snapchat").val().toLowerCase();
        const instagram = $("#instagram").val().toLowerCase();
        const youtube = $("#youtube").val().toLowerCase();
        const twitter = $("#twitter").val().toLowerCase();
        const discord = $("#discord").val().toLowerCase();
        const twitch = $("#twitch").val().toLowerCase();
        const tiktok = $("#tiktok").val().toLowerCase();
        const presentation = $("#presentation").val();
        let whatsapp =  $("#whatsapp").is(':checked');
        if(whatsapp)whatsapp=1;else{whatsapp=0};
        let charte =  $("#charte").is(':checked');
        if(charte)charte=1;else{charte=0};
        let fiche_rens =  $("#fiche_rens").is(':checked');
        if(fiche_rens)fiche_rens=1;else{fiche_rens=0};
        let actif =  $("#actif").is(':checked');
        if(actif)actif=1;else{actif=0};
        const mdp = $("#mdp").val();
        const date_sortie = $("#date_sortie").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!prenom || !nom || !fonction || !structure || !mail_nom || !mail_domaine) {
            $('#message_admin_pdn').html("Merci de remplir au minimum les champs <b>Prénom, Nom, Fonction et Structure</b> et d'indiquer une <b>adresse Mail</b> correcte.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Prénom",prenom,10,"#message_admin_pdn") && vLen("Nom",nom,100,"#message_admin_pdn") && vLen("Fonction",fonction,100,"#message_admin_pdn") && vLen("Mail avant @",mail_nom,50,"#message_admin_pdn") && vLen("Mail après @",mail_domaine,50,"#message_admin_pdn") && vLen("Téléphone",tel,50,"#message_admin_pdn") && vLen("Facebook",facebook,255,"#message_admin_pdn") && vLen("Instagram",instagram,255,"#message_admin_pdn") && vLen("Snapchat",snapchat,255,"#message_admin_pdn") && vLen("Youtube",youtube,255,"#message_admin_pdn") && vLen("Twitter",twitter,255,"#message_admin_pdn") && vLen("Discord",discord,255,"#message_admin_pdn") && vLen("Twitch",twitch,255,"#message_admin_pdn") && vLen("TikTok",tiktok,255,"#message_admin_pdn") && vLen("Mot de passe",mdp,25,"#message_admin_pdn") && vLen("Image",image,255,"#message_admin_pdn") && vLen("Présentation",presentation,700,"#message_admin_pdn")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                pdn_Create(prenom, nom, fonction, mail_nom, mail_domaine, tel, facebook, snapchat, instagram, whatsapp, youtube, twitter, discord, twitch, tiktok, mdp, image, presentation, charte, fiche_rens, actif, date_entree, date_sortie, structure);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN·E PDN
    $('#pdn_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id_pdn").val();
        const date_entree = $("#date_entree").val();
        const prenom = strUpFirst($("#prenom").val());
        const nom = $("#nom").val().toUpperCase();
        let image = $("#image").val();
        if(!image) image = "img/pdn/0.jpg";
        const fonction = strUpFirst($("#fonction").val());
        const structure = $("#structure").val();
        const mail = $("#mail").val().toLowerCase();
        let mail_nom = mail.split("@");
        const mail_domaine = mail_nom[1];
        mail_nom = mail_nom[0];
        const tel = $("#tel").val();
        const facebook = $("#facebook").val().toLowerCase();
        const snapchat = $("#snapchat").val().toLowerCase();
        const instagram = $("#instagram").val().toLowerCase();
        const youtube = $("#youtube").val().toLowerCase();
        const twitter = $("#twitter").val().toLowerCase();
        const discord = $("#discord").val().toLowerCase();
        const twitch = $("#twitch").val().toLowerCase();
        const tiktok = $("#tiktok").val().toLowerCase();
        const presentation = $("#presentation").val();
        let whatsapp =  $("#whatsapp").is(':checked');
        if(whatsapp)whatsapp=1;else{whatsapp=0};
        let charte =  $("#charte").is(':checked');
        if(charte)charte=1;else{charte=0};
        let fiche_rens =  $("#fiche_rens").is(':checked');
        if(fiche_rens)fiche_rens=1;else{fiche_rens=0};
        let actif =  $("#actif").is(':checked');
        if(actif)actif=1;else{actif=0};
        const mdp = $("#mdp").val();
        const date_sortie = $("#date_sortie").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!prenom || !nom || !fonction || !structure || !mail_nom || !mail_domaine) {
            $('#message_admin_pdn').html("Merci de remplir au minimum les champs <b>Prénom, Nom, Fonction et Structure</b> et d'indiquer une <b>adresse Mail</b> correcte.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Prénom",prenom,10,"#message_admin_pdn") && vLen("Nom",nom,100,"#message_admin_pdn") && vLen("Fonction",fonction,100,"#message_admin_pdn") && vLen("Mail avant @",mail_nom,50,"#message_admin_pdn") && vLen("Mail après @",mail_domaine,50,"#message_admin_pdn") && vLen("Téléphone",tel,50,"#message_admin_pdn") && vLen("Facebook",facebook,255,"#message_admin_pdn") && vLen("Instagram",instagram,255,"#message_admin_pdn") && vLen("Snapchat",snapchat,255,"#message_admin_pdn") && vLen("Youtube",youtube,255,"#message_admin_pdn") && vLen("Twitter",twitter,255,"#message_admin_pdn") && vLen("Discord",discord,255,"#message_admin_pdn") && vLen("Twitch",twitch,255,"#message_admin_pdn") && vLen("TikTok",tiktok,255,"#message_admin_pdn") && vLen("Mot de passe",mdp,25,"#message_admin_pdn") && vLen("Image",image,255,"#message_admin_pdn") && vLen("Présentation",presentation,700,"#message_admin_pdn")) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                pdn_Update(id, prenom, nom, fonction, mail_nom, mail_domaine, tel, facebook, snapchat, instagram, whatsapp, youtube, twitter, discord, twitch, tiktok, mdp, image, presentation, charte, fiche_rens, actif, date_entree, date_sortie, structure);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN·E PDN
    $('#pdn_delete').click(function(){
        const id = $('#id_pdn').val();
        pdn_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const pdn_Get = (id_pdn) => {
    if(!id_pdn) {
        $('#message_admin_pdn').html("Aucun·e PDN n'a été séléctionné·e");
        $('#modalPdnAdmin').modal('show');

    } else {
        //---------------------------------------------------------------------- Affichage de l'action séléctionné dans l'outil de recherche lorsqu'on à vient d'une autre page'
        ajaxListPdn("#pdn_res", id_pdn);
        //---------------------------------------------------------------------- Récupération des données du PDN
        ajaxGetPdn(id_pdn);

        //---------------------------------------------------------------------- Réinitialisation du tableau action
        $("#tableau_act").html("");

        //---------------------------------------------------------------------- Remplissage du tableau
        ajaxPdnAct(id_pdn, "#tableau_act");

        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_pdn_create").addClass("d-none");
        $("#btn_pdn_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const pdn_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation des formulaires
    document.getElementById("form_pdn1").reset();
    document.getElementById("form_pdn2").reset();
    document.getElementById("form_pdn3").reset();
    document.getElementById("form_pdn4").reset();
    document.getElementById("form_pdn5").reset();
    //-------------------------------------------------------------------------- Remplissage de la liste des structures
    ajaxGetStr("#structure");
    //-------------------------------------------------------------------------- Remplissage du champs de recherche des PDN pour afficher les nouveaux
    ajaxListPdn("#pdn_res");
    $("#pdn_search").val("");
    //-------------------------------------------------------------------------- Réinitialisation du tableau action
    $("#tableau_act").html("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_pdn_update").addClass("d-none");
    $("#btn_pdn_create").removeClass("d-none");
}

// ----------------------------------------------------------------------------- FONCTION PASSWORD
const pwd = len => {
    const length = (len)?(len):(10);
    const string = "abcdefghijklmnopqrstuvwxyz";
    const numeric = '0123456789';
    const punctuation = '@#$%?';
    let password = "";
    let character = "";
    // ------------------------------------------------------------------------- Pour gérénérer 8 lettres
    while( character.length<8 ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (character.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
    }
    // ------------------------------------------------------------------------- Pour gérénérer 1 chiffre et 1 caractère spécial
    entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
    entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
    character += numeric.charAt( entity2 );
    character += punctuation.charAt( entity3 );
    password = character;
    // ------------------------------------------------------------------------- Mélanger le tout
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}
