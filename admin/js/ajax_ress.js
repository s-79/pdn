// ----------------------------------------------------------------------------- ! ! ! - - I M G - - ! ! !

/* ---------------------------------------------------------------------------- Évenement click sur le bouton OK pour redimmensionner et enregistrer la photo */
// e c'est l'evenement - preventDefault annule celui-ci, ce qui signifie que chaque action par défaut se produisant normalement ne se produira pas.
$(document).ready(function (e) {
    $("#form_ress2").on('submit',(function(e) {
        $("#message_admin_ress").html("");
		e.preventDefault();
        $.ajax({
	        url: "../img/outil/file.php",
	        type: "POST",
	        data:  new FormData(this),
	        contentType: false,
	        cache: false,
	        processData:false,
	        success: function(data) {
                const regex = new RegExp("img/outil/");
                if(regex.test(data)) {
                    $("#image").val(data);
                    const imgAff = "<div class='text-center'><img src='../"+data+"' height='120'></br></br>Photo ajoutée au formulaire</div>";
                    $("#message_admin_ress").html(imgAff);
                } else { $("#message_admin_ress").html(data); }

                $("#modalRessAdmin").modal('show');
	        }
        });
    }));
});

// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Action pour l'outil de recherche de la page act */
const ajaxListRess = (liste, id_ress) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_ress:"v_ress"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner une ressource</option>");
            $(liste).append(displayList(response));
            if(id_ress) {sleep(50).then(() => {$(liste).val(id_ress);});}
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche de ressource */
const ress_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {search_ress:search},
    success: function(response){
        $("#ress_res").html(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- Récupération et affichage des catégories
const cat_Get = () => {
    $.ajax({
		url: "php/ress_Get.php",
		dataType: 'JSON',
		data : {ress_Get_Cat:"cat"},
		success: function(response){
			let cat = "";
            let them = "";
            let arrayIdThem = [];
			const len = response.length;
			for (let i = 0; i < len; i++) {
				const id_cat = response[i].id;
				const nom_cat = response[i].nom;
                cat += `<div id='${id_cat}' class='borderCatAdm pointeur pt-2'><h5 class='text-uppercase'>${nom_cat}</h5></div>`;
                // ------------------------------------------------------------------------  Remplissage des thématiques
                $.ajax({
                    url: "php/ress_Get.php",
                    dataType: 'JSON',
                    data : {cat_Get_Them:id_cat},
                    success: function(response){
                        const len = response.length;
                        them += `<div id="divCat${id_cat}" class="divCat d-none">`;
                        for (let i = 0; i < len; i++) {
                            const id_them = response[i].id;
                            const nom_them = response[i].nom;
                            them += `<div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="them${id_them}">
                            <label class="form-check-label text-white" for="them${id_them}"><h5 class="my-0">${nom_them}</h5</label></div>`;
                            const themId = `#them${id_them}`;
                            $(themId).prop('checked', false);
                            // ------------------------------------------------  Remplissage du tableau, conversion en string Json
                            arrayIdThem.push(themId);
                        }
                        them += `</div>`;
                        $("#ressThem").html(them);
                        $("#divCat1").removeClass("d-none");

                        // ----------------------------------------------------- Stockage dans la variable de session
                        // alert(arrayIdThem);
                        const jsonIdThem = JSON.stringify(arrayIdThem);
                        sessionStorage.setItem('jsonIdThem', jsonIdThem);

                    }
                });
            }
            $("#ressCat").html(cat);
            $("#1").addClass("bg_white");
		}
	});
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxGetRess = (id_ress) => {
    $.ajax({
        url: '../php/ress_Get.php',
        dataType: 'JSON',
        data : {id_ress:id_ress},
        success: function(response){
            const nom = response[0].nom;
            const lien = response[0].lien;
            const image = response[0].image;
            const age = response[0].age;
            const editeur = response[0].editeur;
            const description = response[0].description;
            const valide = response[0].valide;

            $("#id_ress").val(id_ress);
            $("#nom").val(nom);
            $("#lien").val(lien);
            $("#image").val(image);
            $("#age").val(age);
            $("#editeur").val(editeur);
            $("#description").val(description);
            $("#valide").prop('checked', false);
            if (valide === "1") $("#valide").prop('checked', true);
        }
    });
}

//----------------------------------------------------------------------------- Récupération des coordos par l'id de l'action
const ressGetThem = (id_ress) => {
    $.ajax({
        url: 'php/ress_Get.php',
        dataType: 'JSON',
        data : {id_ress_them:id_ress},
        success: function(response){
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#them"
                id += response[i].them_id;
                sleep(50).then(() => $(id).prop('checked', true));
            }
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des actions en fonction de l'id du PDN
const ajaxRessAct = (id_ress, liste) => {
    $.ajax({
        url: "php/ress_Get.php",
        dataType: 'JSON',
        data : {id_ress_tab_act:id_ress},
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

const ress_Create = (uuid, nom, lien, image, age, editeur, description, valide) => {
    $.ajax({
        url: "php/ress.php",
        dataType: 'JSON',
        data : {uuid:uuid, nom:nom, lien:lien, image:image, age:age, editeur:editeur, description:description, valide:valide},
        complete: function(){
            //------------------------------------------------------------------ Récupération de l'id de la ressource créée puis association des thématiques
            ress_Get_Id(uuid);
        }
    });
}

const ress_Get_Id = (uuid) => {
    $.ajax({
        url: "php/ress_Get.php",
        dataType: 'JSON',
        data : {uuid:uuid},
        success: function(response){
            const id_ress = response[0].id;
            // ----------------------------------------------------------------- Envoie vers la BDD
            ress_Get_Them(id_ress);
            $('#message_admin_ress').html("La ressource a bien été ajoutée à la base de données.");
        }
    });
}

//------------------------------------------------------------------------------ Récupération des coordos et association avec l'évenemnt dans la table coordonner
const ress_Get_Them = (id_ress) => {
    let arraySelectedThem = [];
    const jsonIdThem = sessionStorage.getItem('jsonIdThem');
    const arrayIdThem = JSON.parse(jsonIdThem);
    for(themId of arrayIdThem) {
        let check = $(themId).is(':checked');
        if(check) arraySelectedThem.push(themId);
    }
    for(id_them of arraySelectedThem) {
        const idThemSplit = id_them.split("#them");
        id_them = idThemSplit[1];
        $.ajax({
            url: 'php/ress.php',
            dataType: 'JSON',
            data : {id_ress:id_ress, id_them:id_them},
            complete: function(){
                //-------------------------------------------------------------- Réinitialisation de la pages des ressources
                ress_Reset();
            }
        });
    }
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
const ress_Update = (id, nom, lien, image, age, editeur, description, valide) => {
    $.ajax({
        url: 'php/ress.php',
        dataType: 'JSON',
        data : {id:id, nom:nom, lien:lien, image:image, age:age, editeur:editeur, description:description, valide:valide},
        complete: function(){
            //------------------------------------------------------------------ Suppression des associations entre coordos et cette action dans la table classer
            ress_Del_Them(id);
        }
    });
}

//----------------------------------------------------------------------------- Suppression des associations entre coordos et cette action dans la table classer
const ress_Del_Them = (id_ress) => {
    $.ajax({
        url: "php/ress.php",
        dataType: 'JSON',
        data : {id_Ress_Del_Them:id_ress},
        complete: function(){
            //------------------------------------------------------------------- Récupération des coordos et association avec l'évenemnt dans la table coordonner
            ress_Get_Them(id_ress);

            $('#message_admin_ress').html("Ressource modifiée dans la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des ressources
            ress_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const ress_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/ress.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function(){
            //----------------------------------------------------------------  L'id de la ressource apparait-elle encore dans la BDD ?
            $.ajax({
                url: "php/ress_Get.php",
                dataType: 'JSON',
                data : {id_ress_exist:id},
                success: function(response){
                    const res = response[0].res;
                    if(parseInt(res) === 1) $("#message_admin_ress").html(`Suppression impossible : la ressource séléctionnée doit être encore attaché à une action`);
                    //---------------------------------------------------------- Envoie des infos vers la BDD
                    else {
                        $('#message_admin_ress').html("Ressources supprimée de la base de données.");
                        //------------------------------------------------------ Réinitialisation de la pages des ressources
                        ress_Reset();
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
