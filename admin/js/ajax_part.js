// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Action pour l'outil de recherche de la page act */
const ajaxListPart = (liste, id_part) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_part:"v_part"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un·e partenaire</option>");
            $(liste).append(displayList(response));
            if(id_part) {sleep(50).then(() => {$(liste).val(id_part);});}
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche de partenaire */
const part_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {search_part:search},
    success: function(response){
        $("#part_res").html(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxGetPart = (id_part) => {
    $.ajax({
        url: 'php/part_Get.php',
        dataType: 'JSON',
        data : {id:id_part},
        success: function(response){
            const nom = response[0].nom;
            const adresse = response[0].adresse;
            const cp = response[0].cp;
            const ville = response[0].ville;
            const site = response[0].site;
            const prenom_ref = response[0].prenom_ref;
            const nom_ref = response[0].nom_ref;
            const fonction = response[0].fonction;
            const tel = response[0].tel;
            const mail = response[0].mail;
            const commentaires = response[0].commentaires;

            $("#id_part").val(id_part);
            $("#nom").val(nom);
            $("#adresse").val(adresse);
            $("#cp").val(cp);
            $("#ville").val(ville);
            $("#site").val(site);
            $("#prenom_ref").val(prenom_ref);
            $("#nom_ref").val(nom_ref);
            $("#fonction").val(fonction);
            $("#tel").val(tel);
            $("#mail").val(mail);
            $("#commentaires").val(commentaires);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des actions en fonction de l'id du PDN
const ajaxPartAct = (id_part, liste) => {
    $.ajax({
        url: "php/part_Get.php",
        dataType: 'JSON',
        data : {id_part_tab_act:id_part},
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

const part_Create = (nom, adresse, cp, ville, site, prenom_ref, nom_ref, fonction, tel, mail, commentaires) => {
    $.ajax({
        url: "php/part.php",
        dataType: 'JSON',
        data : {nom:nom, adresse:adresse, cp:cp, ville:ville, site:site, prenom_ref:prenom_ref, nom_ref:nom_ref, fonction:fonction, tel:tel, mail:mail, commentaires:commentaires},
        complete: function(){
            $('#message_admin_part').html("Partenaire ajouté·e à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des partenaires
            part_Reset();
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const part_Update = (id, nom, adresse, cp, ville, site, prenom_ref, nom_ref, fonction, tel, mail, commentaires) => {
    $.ajax({
        url: 'php/part.php',
        dataType: 'JSON',
        data : {id:id, nom:nom, adresse:adresse, cp:cp, ville:ville, site:site, prenom_ref:prenom_ref, nom_ref:nom_ref, fonction:fonction, tel:tel, mail:mail, commentaires:commentaires},
        complete: function(){
            $('#message_admin_part').html("Partenaire modifié·e dans la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des partenaires
            part_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const part_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/part.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function(){
            //----------------------------------------------------------------  L'id du de la PDN apparait-elle encore dans la BDD ?
            $.ajax({
                url: "php/part_Get.php",
                dataType: 'JSON',
                data : {id_part_exist:id},
                success: function(response){
                    const res = response[0].res;
                    if(parseInt(res) === 1) $("#message_admin_part").html(`Suppression impossible : le / la partenaire séléctionné·e doit être encore attaché·e à une action`);
                    //---------------------------------------------------------- Envoie des infos vers la BDD
                    else {
                        $('#message_admin_part').html("Partenaire supprimé·e de la base de données.");
                        //------------------------------------------------------------------ Réinitialisation de la pages des partenaires
                        part_Reset();
                    }
                }
            });
        }
    });

}

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Stockage de l'id de l'action et envoie vers la page act
const id_act_storage = (id) => {
    sessionStorage.setItem('id_act', id);
    document.location='act.php';
}
