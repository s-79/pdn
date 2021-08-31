// ----------------------------------------------------------------------------- ! ! ! - - I M G - - ! ! !

/* ---------------------------------------------------------------------------- Évenement click sur le bouton OK pour redimmensionner et enregistrer la photo */
// e c'est l'evenement - preventDefault annule celui-ci, ce qui signifie que chaque action par défaut se produisant normalement ne se produira pas.
$(document).ready(function (e) {
    $("#form_pdn2").on('submit',(function(e) {
        $("#message_admin_pdn").html("");
		e.preventDefault();
        $.ajax({
	        url: "../img/pdn/file.php",
	        type: "POST",
	        data:  new FormData(this),
	        contentType: false,
	        cache: false,
	        processData:false,
	        success: function(data) {
                const regex = new RegExp("img/pdn/");
                if(regex.test(data)) {
                    $("#image").val(data);
                    const imgAff = "<div class='text-center'><img src='../"+data+"' height='120'></br></br>Photo ajoutée au formulaire</div>";
                    $("#message_admin_pdn").html(imgAff);
                } else { $("#message_admin_pdn").html(data); }

                $("#modalPdnAdmin").modal('show');
	        }
        });
    }));
});

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

/* ---------------------------------------------------------------------------- Outil de recherche de PDN */
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
            const postit = response[0].postit;
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
            $("#image").val(photo);
            $("#fonction").val(fonction);
            sleep(200).then(() => {$("#structure").val(str_id);});
            $("#go_str").removeClass("text-muted");
            $("#go_str").addClass("text-white");
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
            if(postit) {
                $("#postItIcon").removeClass("text-white");
                $("#postItIcon").addClass("text-warning");
            }
            else {
                $("#postItIcon").removeClass("text-warning");
                $("#postItIcon").addClass("text-white");
            }
            $("#postit").val(postit);
            $("#presentation").val(presentation);
            $("#whatsapp,#charte,#fiche_rens,#actif").prop('checked', false);
            if (whatsapp === "1") $("#whatsapp").prop('checked', true);
            if (charte === "1") $("#charte").prop('checked', true);
            if (fiche_rens === "1") $("#fiche_rens").prop('checked', true);
            if (actif === "1") $("#actif").prop('checked', true);
            $("#mdp").val("");
            $("#date_sortie").val(date_sortie);
        }
    });
}

//----------------------------------------------------------------------------- Récupération de la liste des structures
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

//----------------------------------------------------------------------------- Remplissage du tableau des actions en fonction de l'id du PDN
const ajaxPdnAct = (id_pdn, liste) => {
    $.ajax({
        url: "php/pdn_Get.php",
        dataType: 'JSON',
        data : {id_pdn_tab_act:id_pdn},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const dat = response[i].dat;
                const type = response[i].type;
                const intitule = response[i].intitule;
                const commentaires = response[i].commentaires;
                res += `<tr style="cursor: pointer" onclick="id_act_storage(${id})"><th class="d-none" scope="row">${id}</th><td>${dat}</td><td>${type}</td><td>${intitule}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const pdn_Create = (prenom, nom, fonction, mail_nom, mail_domaine, tel, facebook, snapchat, instagram, whatsapp, youtube, twitter, discord, twitch, tiktok, mdp, postit, image, presentation, charte, fiche_rens, actif, date_entree, date_sortie, structure) => {
    $.ajax({
        url: "php/pdn.php",
        dataType: 'JSON',
        data : {prenom:prenom, nom:nom, fonction:fonction, mail_nom:mail_nom, mail_domaine:mail_domaine, tel:tel, facebook:facebook, snapchat:snapchat, instagram:instagram, whatsapp:whatsapp, youtube:youtube, twitter:twitter, discord:discord, twitch:twitch, tiktok:tiktok, mdp:mdp, postit:postit, image:image, presentation:presentation, charte:charte, fiche_rens:fiche_rens, actif:actif, date_entree:date_entree, date_sortie:date_sortie, structure:structure},
        complete: function(){
            $('#message_admin_pdn').html("PDN ajouté·e à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des PDN
            pdn_Reset();
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const pdn_Update = (id, prenom, nom, fonction, mail_nom, mail_domaine, tel, facebook, snapchat, instagram, whatsapp, youtube, twitter, discord, twitch, tiktok, mdp, postit, image, presentation, charte, fiche_rens, actif, date_entree, date_sortie, structure) => {
    $.ajax({
        url: 'php/pdn.php',
        dataType: 'JSON',
        data : {id:id, prenom:prenom, nom:nom, fonction:fonction, mail_nom:mail_nom, mail_domaine:mail_domaine, tel:tel, facebook:facebook, snapchat:snapchat, instagram:instagram, whatsapp:whatsapp, youtube:youtube, twitter:twitter, discord:discord, twitch:twitch, tiktok:tiktok, mdp:mdp, postit:postit, image:image, presentation:presentation, charte:charte, fiche_rens:fiche_rens, actif:actif, date_entree:date_entree, date_sortie:date_sortie, structure:structure},
        complete: function(){
            $('#message_admin_pdn').html("PDN modifié·e dans la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des PDN
            pdn_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const pdn_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/pdn.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function(){
            //----------------------------------------------------------------  L'id du de la PDN apparait-elle encore dans la BDD ?
            $.ajax({
                url: "php/pdn_Get.php",
                dataType: 'JSON',
                data : {id_pdn_exist:id},
                success: function(response){
                    const res = response[0].res;
                    if(parseInt(res) === 1) $("#message_admin_pdn").html(`Suppression impossible : le / la PDN séléctionné·e doit être encore attaché·e à une action`);
                    //---------------------------------------------------------- Envoie des infos vers la BDD
                    else {
                        $('#message_admin_pdn').html("PDN supprimé·e de la base de données.");
                        //------------------------------------------------------ Réinitialisation de la pages des PDN
                        pdn_Reset();
                    }
                }
            });
        }
    });

}
//
// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Stockage de l'id de l'action et envoie vers la page act
const id_act_storage = (id) => {
    sessionStorage.setItem('id_act', id);
    document.location='act.php';
}
