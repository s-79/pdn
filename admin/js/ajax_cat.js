// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Action pour l'outil de recherche de la page act */
const ajaxListCat = (liste, id_cat) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_cat:"v_cat"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner une catégorie</option>");
            $(liste).append(displayList(response));
            if(id_cat) {sleep(50).then(() => {$(liste).val(id_cat);});}
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche de catégorie */
const cat_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {search_cat:search},
    success: function(response){
        $("#cat_res").html(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxGetCat = (id_cat) => {
    $.ajax({
        url: 'php/ress_Get.php',
        dataType: 'JSON',
        data : {cat_Get_Infos:id_cat},
        success: function(response){
            const nom = response[0].nom;
            const icone = response[0].icone;

            $("#id_cat").val(id_cat);
            $("#nom").val(nom);
            $("#icone").val(icone);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !
const cat_Create = (nom, icone) => {
    $.ajax({
        url: "php/ress.php",
        dataType: 'JSON',
        data : {nom_cat_create:nom, icone:icone},
        complete: function(){
            $('#message_admin_cat').html("Catégorie ajoutée à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des catégories
            cat_Reset();
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
const cat_Update = (id, nom, icone) => {
    $.ajax({
        url: 'php/ress.php',
        dataType: 'JSON',
        data : {id_cat_up:id, nom_cat:nom, icone:icone},
        complete: function(){
            $('#message_admin_cat').html("Catégorie modifiée dans la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des catégories
            cat_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const cat_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression des associations
    $.ajax({
        url: "php/ress.php",
        dataType: 'JSON',
        data : {id_cat_del:id},
        complete: function(){
            //----------------------------------------------------------------  L'id de la catégorie apparait-elle encore dans la BDD ?
            $.ajax({
                url: "php/ress_Get.php",
                dataType: 'JSON',
                data : {id_cat_exist:id},
                success: function(response){
                    const res = response[0].res;
                    if(parseInt(res) === 1) $("#message_admin_cat").html(`Suppression impossible : la catégorie séléctionnée doit encore contenir des thématiques.`);
                    //---------------------------------------------------------- Envoie des infos vers la BDD
                    else {
                        $('#message_admin_cat').html("Catégorie supprimée de la base de données.");
                        //------------------------------------------------------------------ Réinitialisation de la pages des catégories
                        cat_Reset();
                    }
                }
            });
        }
    });

}
