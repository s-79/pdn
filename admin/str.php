<?php include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="str_search" placeholder="Saisir le prénom ou le nom">
                <label for="part_search" class="d-none">Saisir le nom ou la ville</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="str_res">
                    <option selected value='0'>Séléctionner une structure</option>
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-warning">Afficher les informations</button>
            </div>
        </div>
    </div>
    <div id="form_str" class="mx-auto" style="max-width:80%;">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              Coordonnées-->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="d-flex pt-3">
                            <h1>Coordonnées</h1>
                            <i id="new_str" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Ajouter une structure"></i>
                        </div>
                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <form  id="form_str1">
                            <input type="text" class="form-control d-none" id="id_str">
                            <div class="form-floating mx-3 mb-3 mt-4">
                                <select class="form-select" id="aap" aria-label="Appel à projets *">
                                    <option selected value="">Séléctionner un appel à projets *</option>
                                    <option value="Hors AAP">Hors AAP</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                                <label for="aap">Appel à projets *</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="nom" placeholder="Nom *">
                                <label for="nom">Nom *</label>
                            </div>
                            <div class="form-floating m-3">
                                <select class="form-select" id="type" aria-label="Type de structure *">
                                    <option selected value="">Type de structure *</option>
                                    <option value="Point d'accueil et d’écoute">Point d'accueil et d’écoute</option>
                                    <option value="Service Jeunesse">Service Jeunesse</option>
                                    <option value="BIJ / PIJ">BIJ / PIJ</option>
                                    <option value="Association">Association</option>
                                    <option value="Centre Socioculturel">Centre Socioculturel</option>
                                    <option value="Prévention Specialisée">Prévention Specialisée</option>
                                    <option value="Association sportive">Association sportive</option>
                                </select>
                                <label for="type">Type de structure *</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="tel" placeholder="Téléphone">
                                <label for="tel">Téléphone</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="adresse" placeholder="Adresse *">
                                <label for="adresse">Adresse *</label>
                            </div>
                            <div class="form-floating m-3">
                                <select class="form-select type_m" id="ville" aria-label="Ville *">
                                    <option selected value="">Séléctionner la ville *</option>
                                </select>
                                <label for="ville">Ville</label>
                            </div>
                            <div class="form-group row mx-0 pt-1 pb-3 mt-4 mb-3 ms-2">
                                <label class="form-check-label col-2 text-white ms-2" for="qpv">QPV</label>
                                <div class="col-1 ps-0">
                                    <input class="form-check-input" type="checkbox" value="" id="qpv">
                                </div>
                                <label class="form-check-label col-2 text-white ms-2" for="prij">PRIJ</label>
                                <div class="col-1 ps-0">
                                    <input class="form-check-input" type="checkbox" value="" id="prij">
                                </div>
                                <div class="col-4 d-flex justify-content-end">
                                    <a class="text-white" href="https://sig.ville.gouv.fr/" target="_blank">Site du SIG</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!--                                                                                                              Réseaux sociaux -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <form id="form_str2">
                            <div class="d-flex pt-3">
                                <h1>Open Street Map</h1>
                                <a href="https://www.openstreetmap.org/relation/7389#map=12/48.9148/2.5310" target="_blank"><i id="link_odm" class="ps-3 fas fa-globe fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Site Open Street Map"></i></a>
                            </div>
                            <div class="form-floating mx-3 mt-4 mb-3">
                                <input type="text" class="form-control" id="lat" placeholder="Latitude">
                                <label for="lat">Latitude (ex : 48.88076020)</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="lon" placeholder="Longitude">
                                <label for="lon">Longitude (ex : 2.41911910)</label>
                            </div>
                            <h1 class="pt-3">Responsable</h1>
                            <div class="form-floating mx-3 mt-4 mb-3">
                                <input type="text" class="form-control" id="resp_prenom" placeholder="Prénom">
                                <label for="resp_prenom">Prénom</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="resp_nom" placeholder="Nom">
                                <label for="resp_nom">Nom</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="resp_tel" placeholder="Téléphone">
                                <label for="resp_tel">Téléphone</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="email" class="form-control" id="resp_mail" placeholder="Mail">
                                <label for="resp_mail">Mail</label>
                            </div>
                        </form>
                    </div>
                </div>
                <!--                                                                                                              Coordonnées -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <h1 class="pt-3">Présentation</h1>
                        <form id="form_str3" action="../img/str/file.php" method="post" enctype="multipart/form-data">
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
                        <form id="form_str4">
                            <div class="form-floating m-3 d-none">
                                <input type="text" class="form-control" id="image">
                            </div>
                            <div class="form-floating m-3">
                                <input type="text" class="form-control" id="site" placeholder="Site Internet">
                                <label for="site">Site Internet</label>
                            </div>
                            <div class="form-floating m-3">
                                <textarea class="form-control" placeholder="Présentation (700 car.max.)" id="presentation" style="height:210px;"></textarea>
                                <label for="presentation">Présentation (700 car.max.)</label>
                            </div>
                            <div class="row my-3 mx-1">
                                <div class="form-floating col-9">
                                    <input type="number" class="form-control" id="nb_pdn_lab" placeholder="Nombre de PDN labellisé">
                                    <label for="nb_pdn_lab" class="ps-3">Nb de PDN labellisé(s)</label>
                                </div>
                                <div class="form-floating col-3">
                                    <input type="text" class="form-control" id="nb_pdn_act" placeholder="Actif(s)" disabled>
                                    <label for="nb_pdn_act" class="ps-3">Actif(s)</label>
                                </div>
                            </div>
                            <div id="btn_str_create" class="form-group d-flex justify-content-center mx-3">
                                <button type="button" id="str_create" class="btn btn-warning mx-3 mb-3 px-3 pb-2" data-bs-toggle="modal" data-bs-target="#modalStrAdmin">Enregistrer<br>la structure</button>
                            </div>
                            <div id="btn_str_update" class="form-group d-flex justify-content-center mx-3 d-none">
                                <button type="button" id="str_update" class="btn btn-warning mx-3 mb-3 px-4" data-bs-toggle="modal" data-bs-target="#modalStrAdmin">Modifier<br>la structure</button>
                                <button type="button" id="str_delete" class="btn btn-danger mx-3 mb-3" data-bs-toggle="modal" data-bs-target="#modalStrAdmin">Supprimer <br>la structure</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--                                                                            MODAL MODIF INFOS -->
<div class="modal fade" id="modalStrAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">ADMINISTRATION PDN</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="message_admin_str" class="modal-body py-3 bleu">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/functions.js"></script>
<script src="js/str.js"></script>
<script src="js/ajax_str.js"></script>

</body>
</html>
