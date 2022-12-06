<?php include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="pdn_search" placeholder="Saisir le prénom ou le nom">
                <label for="part_search" class="d-none">Saisir le prénom ou le nom</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="pdn_res">
                    <option selected value='0'>Séléctionner un·e PDN</option>
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-warning">Afficher les informations</button>
            </div>
        </div>
    </div>

    <div id="form_pdn" class="mx-auto">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              Coordonnées-->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="d-flex bd-highlight pt-3">
                            <div class="bd-highlight"><h1 style="padding-top:0.13em;">COORDONNÉES</h1></div>
                            <div class="bd-highlight"><i id="new_pdn" class="ps-3 pe-1 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Ajouter un·e PDN"></i></div>
                            <div class="ms-auto bd-highlight pe-3"><i id="go_str" class="fas fa-store-alt fa-2x text-muted pointeur" data-toggle="tooltip" data-placement="top" title="Aller vers la structure"></i></div>
                        </div>
                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <form  id="form_pdn1">
                            <input type="text" class="form-control d-none" id="id_pdn">
                            <div class="form-floating m-3 mt-4">
                                <input type="date" class="form-control" id="date_entree" placeholder="Date d'entrée">
                                <label for="date_entree">Date d'entrée</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="prenom" placeholder="Prénom">
                                <label for="prenom">Prénom *</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="nom" placeholder="Nom">
                                <label for="nom">Nom *</label>
                            </div>
                        </form>

                        <form id="form_pdn2" action="../img/pdn/file.php" method="post" enctype="multipart/form-data">
                            <div class="row m-3">
                                <div class="form-floating col-10 ps-0">
                                    <!-- 1 048 576 octets (bytes) => 1 Mo (Mégabytes) / Ici 2mo -->
                                    <input type="hidden" name="MAX_FILE_SIZE" value="2097152">
                                    <input type="file" name="nom_du_fichier" class="form-control" id="photo" placeholder="Photo">
                                    <label for="photo">Photo</label>
                                </div>
                                <div class="pt-2 col-2 px-1">
                                    <input type="submit" class="btn btn-warning" value="OK">
                                </div>
                            </div>
                        </form>
                        <form  id="form_pdn3">
                            <div class="form-floating m-3 d-none">
                                <input type="text" class="form-control" id="image">
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="fonction" placeholder="Fonction">
                                <label for="fonction">Fonction *</label>
                            </div>
                            <div class="form-floating mx-3 mt-3">
                                <select class="form-select type_m" id="structure" aria-label="Structure *">
                                    <option selected value="">Séléctionner la structure *</option>
                                </select>
                                <label for="structure">Structure</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="email" class="form-control" id="mail" placeholder="Adresse mail *">
                                <label for="mail">Adresse mail *</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="tel" placeholder="Téléphone">
                                <label for="tel">Téléphone Pro</label>
                            </div>
                        </form>
                    </div>
                </div>
                <!--                                                                                                              Réseaux sociaux -->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <h1 class="pt-3 mb-4 pb-2" style="padding-top:0.13em;">RÉSEAUX SOCIAUX</h1>
                        <form id="form_pdn4">
                            <div class="form-floating m-3 mt-4">
                                <input type="text" class="form-control" id="facebook" placeholder="Facebook">
                                <label for="facebook">Facebook</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="instagram" placeholder="Instagram">
                                <label for="instagram">Instagram</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="snapchat" placeholder="Snapchat">
                                <label for="snapchat">Snapchat</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="youtube" placeholder="Youtube">
                                <label for="youtube">Youtube</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="twitter" placeholder="Twitter">
                                <label for="twitter">Twitter</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="discord" placeholder="Discord">
                                <label for="discord">Discord</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="twitch" placeholder="Twitch">
                                <label for="twitch">Twitch</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="tiktok" placeholder="Tiktok">
                                <label for="tiktok">Tiktok</label>
                            </div>
                        </form>
                    </div>
                </div>
                <!--                                                                                                              Coordonnées -->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="d-flex justify-content-between pt-3 pe-3">
                            <h1 style="padding-top:0.13em;">PRÉSENTATION</h1>
                            <i id="postItIcon" class="ps-3 ms-1 fas fa-clipboard fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Ajouter un post-it"></i>
                        </div>
                        <form id="form_pdn5">
                            <div class="form-floating m-3 mt-4">
                                <textarea class="form-control" placeholder="Présentation (700 car.max.)" id="presentation" style="height:272px;"></textarea>
                                <label for="presentation">Présentation (700 car.max.)</label>
                            </div>
                            <div class="row mt-3 ms-3">
                                <div class="col-5">
                                    <input class="form-check-input" type="checkbox" value="" id="whatsapp">
                                    <label class="form-check-label text-white" for="whatsapp">WhatsApp</label>
                                </div>
                                <div class="col-5">
                                    <input class="form-check-input" type="checkbox" value="" id="charte">
                                    <label class="form-check-label text-white" for="charte">Charte PDN</label>
                                </div>
                            </div>
                            <div class="row mt-2 ms-3">
                                <div class="col-5">
                                    <input class="form-check-input" type="checkbox" value="" id="fiche_rens">
                                    <label class="form-check-label text-white" for="fiche_rens">Fiche rens.</label>
                                </div>
                                <div class="col-5">
                                    <input class="form-check-input" type="checkbox" value="" id="actif">
                                    <label class="form-check-label text-white" for="actif">PDN actif</label>
                                </div>
                            </div>
                            <div class="row mt-3 pt-1 me-1">
                                <div class="form-floating ms-3 col-8">
                                    <input type="text" class="form-control" id="mdp" placeholder="Nouveau mot de passe">
                                    <label for="mdp" class="ps-4">Nouveau mot de passe</label>
                                </div>
                                <div class="pt-2 col-2 px-1">
                                    <button type="button" id="pwd_create" class="btn btn-warning mx-3 mb-3 pb-2" data-bs-toggle="modal" data-bs-target="#modalPdnAdmin">Créer</button>
                                </div>
                            </div>
                            <div class="form-floating m-3 mb-4">
                                <input type="date" class="form-control" id="date_sortie" placeholder="Date de sortie">
                                <label for="date_sortie">Date de sortie</label>
                            </div>
                            <div id="btn_pdn_create" class="form-group d-flex justify-content-center mx-3">
                                <button type="button" id="pdn_create" class="btn btn-warning mx-3 mb-3 px-3 pb-2" data-bs-toggle="modal" data-bs-target="#modalPdnAdmin">Enregistrer<br>PDN</button>
                            </div>
                            <div id="btn_pdn_update" class="form-group d-flex justify-content-center mx-3 d-none">
                                <button type="button" id="pdn_update" class="btn btn-warning mx-3 mb-3 px-4" data-bs-toggle="modal" data-bs-target="#modalPdnAdmin">Modifier<br>PDN</button>
                                <button type="button" id="pdn_delete" class="btn btn-danger mx-3 mb-3" data-bs-toggle="modal" data-bs-target="#modalPdnAdmin">Supprimer <br>PDN</button>
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

<!--                                                                            MODAL POST-IT -->
<div class="modal fade" id="modalPdnPostIt" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="bg-warning py-2 fw-bold text-center fs-6">• POST-IT •</div>
            <textarea id="postit" class="bg-warning fs-6 pl-3" rows="8"></textarea>
        </div>
    </div>
</div>

<!--                                                                            MODAL MODIF INFOS -->
<div class="modal fade" id="modalPdnAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">ADMINISTRATION PDN</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="message_admin_pdn" class="modal-body py-3 bleu">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/functions.js"></script>
<script src="js/pdn.js"></script>
<script src="js/ajax_pdn.js"></script>

</body>
</html>
