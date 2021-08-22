// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Action pour l'outil de recherche de la page act */
const ajaxListThem = (liste, id_them) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_them:"v_them"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner une thématique</option>");
            $(liste).append(displayList(response));
            if(id_them) {sleep(50).then(() => {$(liste).val(id_them);});}
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche de thématiques */
const them_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {search_them:search},
    success: function(response){
        $("#them_res").html(displayList(response));
        }
    });
}

//----------------------------------------------------------------------------- Récupération des catégories
const ajaxGetCat = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_cat:"v_cat"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner la catégorie *</option>");
            $(liste).append(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxGetThem = (id_them) => {
    $.ajax({
        url: 'php/ress_Get.php',
        dataType: 'JSON',
        data : {them_Get_Infos:id_them},
        success: function(response){
            const nom = response[0].nom;
            const cat_id = response[0].cat_id;

            $("#id_them").val(id_them);
            $("#nom").val(nom);
            $("#cat").val(cat_id);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const them_Create = (nom, cat) => {
    $.ajax({
        url: "php/ress.php",
        dataType: 'JSON',
        data : {nom_them_create:nom, id_cat_them:cat},
        complete: function(){
            $('#message_admin_them').html("Thématique ajoutée à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des thématiques
            them_Reset();
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const them_Update = (id, nom, cat) => {
    $.ajax({
        url: 'php/ress.php',
        dataType: 'JSON',
        data : {id_them_up:id, nom_them:nom, id_cat_them:cat},
        complete: function(){
            $('#message_admin_them').html("Thématique modifiée dans la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des thématiques
            them_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const them_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/ress.php",
        dataType: 'JSON',
        data : {id_them_del:id},
        complete: function(){
            $('#message_admin_them').html("Thématique supprimée de la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des thématiques
            them_Reset();
        }
    });

}
