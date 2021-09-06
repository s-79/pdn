<?php include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="cat_search" placeholder="Saisir le nom de la catégorie">
                <label for="part_search" class="d-none">Saisir le nom de la catégorie</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="cat_res">
                    <option selected value='0'>Séléctionner une catégorie</option>
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-warning">Afficher les informations</button>
            </div>
        </div>
    </div>

    <div id="form_cat" class="mx-auto" style="max-width:80%;">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              Thématiques-->
                <div class="d-flex justify-content-center mt-3">
        			<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu" style="min-width:25em;">
                        <div class="d-flex pt-3">
                            <h1 style="padding-top:0.13em;">CATÉGORIES</h1>
                            <i id="new_cat" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Ajouter une catégorie"></i>
                        </div>
                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <form  id="form_cat1">
                            <input type="text" class="form-control d-none" id="id_cat">
                            <div class="form-floating mx-3 mb-3 mt-4">
                                <input type="text" class="form-control" id="nom" placeholder="Nom de la catégorie *">
                                <label for="nom">Nom de la catégorie *</label>
                            </div>
                            <div class="form-floating mx-3 mb-3 mt-4">
                                <input type="text" class="form-control" id="icone" placeholder='Icone "Font Awesome" *'>
                                <label for="icone">Icone FA *  (ex : fas fa-photo-video)</label>
                            </div>
                            <div class="m-3 text-center">
                                <a class="text-white liens_adm" href="https://fontawesome.com/" target="_blank">Site de Font Awesome</a>
                            </div>
                            <div id="btn_cat_create" class="form-group d-flex justify-content-center mx-3">
                                <button type="button" id="cat_create" class="btn btn-warning mx-3 mb-3 px-3 pb-2" data-bs-toggle="modal" data-bs-target="#modalCatAdmin">Enregistrer<br>la catégorie</button>
                            </div>
                            <div id="btn_cat_update" class="form-group d-flex justify-content-center mx-3 d-none">
                                <button type="button" id="cat_update" class="btn btn-warning mx-3 mb-3 px-4" data-bs-toggle="modal" data-bs-target="#modalCatAdmin">Modifier<br>la catégorie</button>
                                <button type="button" id="cat_delete" class="btn btn-danger mx-3 mb-3" data-bs-toggle="modal" data-bs-target="#modalCatAdmin">Supprimer <br>la catégorie</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--                                                                            MODAL MODIF INFOS -->
<div class="modal fade" id="modalCatAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">ADMINISTRATION PDN</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="message_admin_cat" class="modal-body py-3 bleu">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/functions.js"></script>
<script src="js/cat.js"></script>
<script src="js/ajax_cat.js"></script>

</body>
</html>
