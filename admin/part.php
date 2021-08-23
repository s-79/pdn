<?php
include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="part_search" placeholder="Saisir le nom ou la ville">
                <label for="part_search" class="d-none">Saisir le nom ou la ville</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="part_res">
                    <option selected value='0'>Séléctionner un partenaire</option>
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-warning">Afficher les informations</button>
            </div>
        </div>
    </div>

    <form id="form_part">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              État Civil-->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="d-flex pt-3">
                            <h1>Dénomination</h1>
                            <i id="new_part" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer un nouveau partenaire"></i>
                        </div>
                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <input type="text" class="form-control d-none" id="id_part">
                        <div class="form-floating m-3">
                            <input type="text" class="form-control" id="nom" placeholder="Nom de la structure *">
                            <label for="nom">Nom de la structure *</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="text" class="form-control" id="adresse" placeholder="Adresse">
                            <label for="adresse">Adresse</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="text" class="form-control" id="cp" placeholder="Code Postal">
                            <label for="cp">Code Postal</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="text" class="form-control" id="ville" placeholder="Ville">
                            <label for="ville">Ville</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <input type="text" class="form-control" id="site" placeholder="Site Internet">
                            <label for="site">Site Internet</label>
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Contact -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <h1 class="pt-3">Référent·e</h1>
                        <div class="form-floating mx-3 mt-4 mb-3">
                            <input type="text" class="form-control" id="prenom_ref" placeholder="Prénom référent·e">
                            <label for="prenom_ref">Prénom référent·e</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="text" class="form-control" id="nom_ref" placeholder="Nom référent·e">
                            <label for="nom_ref">Nom référent·e</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="text" class="form-control" id="fonction" placeholder="Fonction">
                            <label for="fonction">Fonction</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="text" class="form-control" id="tel" placeholder="Téléphone">
                            <label for="tel">Téléphone</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <input type="text" class="form-control" id="mail" placeholder="E-mail">
                            <label for="mail">E-mail</label>
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Coordonnées -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <h1 class="pt-3">Commentaires</h1>
                        <div class="form-floating m-3 mb-4">
                            <textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:285px;"></textarea>
                            <label for="commentaires">Commentaires</label>
                        </div>
                        <div id="btn_part_create" class="form-group d-flex justify-content-center mx-3">
                            <button type="button" id="part_create" class="btn btn-warning mx-3 mb-3 px-3 pb-2" data-bs-toggle="modal" data-bs-target="#modalPartAdmin">Enregistrer<br>la fiche</button>
                        </div>
                        <div id="btn_part_update" class="form-group d-flex justify-content-center mx-3 d-none">
                            <button type="button" id="part_update" class="btn btn-warning mx-3 mb-3 px-4 pb-2" data-bs-toggle="modal" data-bs-target="#modalPartAdmin">Modifier<br>la fiche</button>
                            <button type="button" id="part_delete" class="btn btn-danger mx-3 mb-3 pb-2" data-bs-toggle="modal" data-bs-target="#modalPartAdmin">Supprimer <br>la fiche</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<!--                                                                             Tableau ACT -->
<div id="div_tableau_act" class="container">
<div class="row justify-content-center mt-4">
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:130px">#</th>
                <th scope="col" style="width:130px">Date</th>
                <th scope="col" style="width:130px">Type</th>
                <th scope="col" style="width:130px">Intitulé</th>
            </tr>
        </thead>
        <tbody id="tableau_act">
        </tbody>
    </table>
</div>
</div>

<!--                                                                            MODAL MODIF INFOS -->
<div class="modal fade" id="modalPartAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">ADMINISTRATION PDN</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="message_admin_part" class="modal-body py-3 bleu">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/functions.js"></script>
<script src="js/part.js"></script>
<script src="js/ajax_part.js"></script>

</body>
</html>
