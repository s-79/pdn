<?php include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="ress_search" placeholder="Saisir le nom de la ressource">
                <label for="part_search" class="d-none">Saisir le nom de la ressource</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="ress_res">
                    <option selected value='0'>Séléctionner une ressource</option>
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-warning">Afficher les informations</button>
            </div>
        </div>
    </div>

    <div id="form_ress" class="mx-auto">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              Ressources-->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="d-flex pt-3">
                            <h1 style="padding-top:0.12em;">RESSOURCES</h1>
                            <i id="new_ress" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Ajouter une ressource"></i>
                        </div>
                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <form  id="form_ress1">
                            <input type="text" class="form-control d-none" id="id_ress">
                                <div class="form-floating mx-3 mb-3 mt-4">
                                <input type="text" class="form-control" id="nom" placeholder="Nom de la ressource *">
                                <label for="nom">Nom de la ressource *</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="lien" placeholder="Lien vers la ressource *">
                                <label for="lien">Lien vers la ressource *</label>
                            </div>
                        </form>
                        <form id="form_ress2" action="../img/outil/file.php" method="post" enctype="multipart/form-data">
                            <div class="row m-3">
                                <div class="form-floating col-10 ps-0">
                                    <!-- 1 048 576 octets (bytes) => 1 Mo (Mégabytes) / Ici 2mo -->
                                    <input type="hidden" name="MAX_FILE_SIZE" value="2097152">
                                    <input type="file" name="nom_du_fichier" class="form-control" id="img" placeholder="Image">
                                    <label for="img">Image</label>
                                </div>
                                <div class="pt-2 col-2 px-1">
                                    <input type="submit" class="btn btn-warning" value="OK">
                                </div>
                            </div>
                        </form>
                        <form  id="form_ress3">
                            <div class="form-floating m-3 d-none">
                                <input type="text" class="form-control" id="image">
                            </div>
                            <input type="text" class="form-control d-none" id="id_ress">
                                <div class="form-floating m-3">
                                <input type="text" class="form-control" id="age" placeholder="Age du public">
                                <label for="age">Age du public</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="editeur" placeholder="Nom de l'éditeur">
                                <label for="editeur">Nom de l'éditeur</label>
                            </div>
                        </form>
                    </div>
                </div>
                <!--                                                                                                              Thématiques-->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu" style="min-width:350px">
                        <div class="pt-3">
                            <h1 style="padding-top:0.12em;">THÉMATIQUES</h1>
                        </div>
                        <form  id="form_ress4">
                            <div id="ressCat" class="mx-3 mt-4"></div>
                            <div id="ressThem" class="mx-3 my-3"  style="overflow-y:scroll; overflow-x:hidden; height:185px; scrollbar-color: rgb(232, 80, 23) white;"></div>
                        </form>
                    </div>
                </div>
                <!--                                                                                                              Présentation -->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="pt-3">
                            <h1 style="padding-top:0.12em;">PRÉSENTATION</h1>
                        </div>
                        <form  id="form_ress5">
                            <div class="form-floating m-3 mt-4">
                                <textarea class="form-control" placeholder="Description (700 car.max.)" id="description" style="height:252px;"></textarea>
                                <label for="description">Description (700 car.max.)</label>
                            </div>
                            <div class="m-3">
                                <label class="form-check-label text-white pe-2" for="valide">Valider la ressource</label>
                                <input class="form-check-input" type="checkbox" value="" id="valide" checked>
                            </div>
                            <div id="btn_ress_create" class="form-group d-flex justify-content-center mx-3">
                                <button type="button" id="ress_create" class="btn btn-warning mx-3 mb-3 px-3 pb-2" data-bs-toggle="modal" data-bs-target="#modalRessAdmin">Enregistrer<br>la ressource</button>
                            </div>
                            <div id="btn_ress_update" class="form-group d-flex justify-content-center mx-3 d-none">
                                <button type="button" id="ress_update" class="btn btn-warning mx-3 mb-3 px-4" data-bs-toggle="modal" data-bs-target="#modalRessAdmin">Modifier<br>la ressource</button>
                                <button type="button" id="ress_delete" class="btn btn-danger mx-3 mb-3" data-bs-toggle="modal" data-bs-target="#modalRessAdmin">Supprimer <br>la ressource</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--                                                                             Tableau ACT -->
<div id="div_tableau_act" class="container">
<div class="row justify-content-center mt-4">
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:10px">#</th>
                <th scope="col" style="width:40px">Date</th>
                <th scope="col" style="width:90px">Type</th>
                <th scope="col" style="width:270px">Intitulé</th>
            </tr>
        </thead>
        <tbody id="tableau_act">
        </tbody>
    </table>
</div>
</div>

<!--                                                                            MODAL MODIF INFOS -->
<div class="modal fade" id="modalRessAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">ADMINISTRATION PDN</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="message_admin_ress" class="modal-body py-3 bleu">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/functions.js"></script>
<script src="js/ress.js"></script>
<script src="js/ajax_ress.js"></script>

</body>
</html>
