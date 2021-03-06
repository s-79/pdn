<?php
include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <!--                                                                Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="act_search" placeholder="Saisir la date, le type ou le lieu">
                <label for="act_search" class="d-none">Saisir la date, le type ou l'intitulé'</label>
            </div>
            <!--                                                                Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="act_res">
                    <option selected value='0'>Séléctionner un événement</option>
                </select>
            </div>
            <!--                                                                Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-warning">Afficher les informations</button>
            </div>
        </div>
    </div>

    <form id="form_act">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                            État Civil-->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="d-flex pt-3">
                            <h1 style="padding-top:0.13em;">ACTION</h1>
                            <i id="new_act" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer une nouvelle action"></i>
                        </div>
                        <!--                                                    Récupération de l'id dans un input invisible -->
                        <input type="text" class="form-control d-none" id="id_act">

                        <div class="form-floating mx-3 mt-4">
                            <input type="date" class="form-control" id="date" placeholder="Date de l'événement *">
                            <label for="date">Date de l'événement *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select type_m" id="type" aria-label="Type d'événement *">
                                <option selected value="">Séléctionner un type d'événement *</option>
                                <option value="Publication">Publication</option>
                                <option value="Accueil nouveau PDN">Accueil nouveau PDN</option>
                                <option value="Accompagnement PDN">Accompagnement PDN</option>
                                <option value="Accompagnement structure">Accompagnement structure</option>
                                <option value="Partenariat">Partenariat</option>
                                <option value="Organisation réunion ou formation PDN">Organisation réunion ou formation PDN</option>
                                <option value="Réunion de réseau ou journée de formation PDN">Réunion de réseau ou journée de formation PDN</option>
                                <option value="Préparation ou compte-rendu COPIL / COTECH">Préparation ou compte-rendu COPIL / COTECH</option>
                                <option value="COPIL / COTECH / Réunion technique">COPIL / COTECH / Réunion technique</option>
                                <option value="Formation Coordo">Formation Coordo</option>
                                <option value="Information AAP">Information AAP</option>
                                <option value="Bilan">Bilan</option>
                            </select>
                            <label for="type">Type *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select type_m" id="organise" aria-label="Organisé par... *">
                                <option selected value="">Séléctionner la structure organisatrice</option>
                                <option value="FOL93">FOL93</option>
                                <option value="Structures PDN">Structures PDN</option>
                                <option value="Partenaires financeurs">Partenaires financeurs</option>
                                <option value="Autres">Autres</option>
                            </select>
                            <label for="organise">Organisé par... *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-3">
                            <input type="text" class="form-control" id="intitule" placeholder="Intitulé">
                            <label for="intitule">Intitulé *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-3">
                            <input type="text" class="form-control" id="lieu" placeholder="Lieu">
                            <label for="lieu">Lieu</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <input type="text" class="form-control" id="ville" placeholder="Ville">
                            <label for="ville">Ville</label>
                        </div>
                    </div>
                </div>
                <!--                                                            Modalités -->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <h1 class= "pt-3 pb-2" style="padding-top:0.13em;">MODALITÉS</h1>
                        <div class="form-floating mx-3 mt-4">
                            <select class="form-select type_m" id="support" aria-label="Support de communication *">
                                <option selected value="">Séléctionner un support *</option>
                                <option value="Présentiel">Présentiel</option>
                                <option value="E-mail">E-mail</option>
                                <option value="Téléphone">Téléphone</option>
                                <option value="Visio">Visio</option>
                                <option value="Réseaux Sociaux">Réseaux Sociaux</option>
                            </select>
                            <label for="support">Support de communication *</label>
                        </div>
                        <div class="row mt-3 ms-3">
                            <div class="col-5">
                                <input class="form-check-input" type="checkbox" value="" id="facebook">
                                <label class="form-check-label text-white" for="facebook">Facebook</label>
                            </div>
                            <div class="col-5">
                                <input class="form-check-input" type="checkbox" value="" id="whatsapp">
                                <label class="form-check-label text-white" for="whatsapp">WhatsApp</label>
                            </div>
                        </div>
                        <div class="row mt-2 ms-3">
                            <div class="col-5">
                                <input class="form-check-input" type="checkbox" value="" id="twitter">
                                <label class="form-check-label text-white" for="twitter">Twitter</label>
                            </div>
                            <div class="col-5">
                                <input class="form-check-input" type="checkbox" value="" id="site">
                                <label class="form-check-label text-white" for="site">Site Internet</label>
                            </div>
                        </div>
                        <div class="row mt-3 pt-1 me-1">
                            <div class="form-floating mx-3 col-8">
                                <input type="text" class="form-control" id="nb_ress" placeholder="Nombre de ressources">
                                <label for="nb_ress" class="ps-4">Nb d'outils partagés</label>
                            </div>
                            <div class="pt-2 col-2">
                                <i id="select_ress" class="fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_select_ress" data-toggle="tooltip" data-placement="top" title="Ajouter les ressources partagées"></i>
                            </div>
                        </div>
                        <div class="form-floating mx-3 mt-4">
                            <select class="form-select type_m" id="duree" aria-label="Durée *">
                                <option selected value="">Séléctionner une durée *</option>
                                <option value="Moins d'une heure">Moins d'une heure</option>
                                <option value="De 1h à 2h">De 1h à 2h</option>
                                <option value="1/2 journée">1/2 journée</option>
                                <option value="1 journée">1 journée</option>
                            </select>
                            <label for="duree">Durée *</label>
                        </div>
                        <div class="d-flex py-2 mt-3 mb-2">
                            <h1 class="py-1">COORDINATION</h1>
                            <i id="new_coordo" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_coordo" data-toggle="tooltip" data-placement="top" title="Ajouter / Modifier un·e coordo"></i>
                        </div>
                        <div id="coordo" class="mx-3 mt-2 mb-4" style="overflow-y:scroll; overflow-x:hidden; height:69px; scrollbar-color: rgb(232, 80, 23) white;">
                        </div>
                    </div>
                </div>
                <!--                                                            Participation -->
                <div class="col-12 col-md-6 col-xl-4 divWidth">
                    <div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
                        <div class="d-flex justify-content-between pt-3 pe-3">
                            <h1 style="padding-top:0.13em;">PARTICIPATION</h1>
                            <input type="text" class="form-control" style="max-width:92px;" id="nb_pers" placeholder="Nb autres">
                        </div>
                        <div class="row mt-4 me-1">
                            <div class="form-floating mx-3 col-8">
                                <input type="text" class="form-control" id="nb_pdn" placeholder="Nombre de promeneurs">
                                <label for="nb_pdn" class="ps-4">Nombre de promeneurs</label>
                            </div>
                            <div class="pt-2 col-2">
                                <i id="select_pdn" class="fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_select_pdn" data-toggle="tooltip" data-placement="top" title="Ajouter des PDN"></i>
                            </div>
                        </div>

                        <div class="row mt-3 me-1">
                            <div class="form-floating mx-3 col-8">
                                <input type="text" class="form-control" id="nb_part" placeholder="Nombre de partenaires">
                                <label for="nb_part" class="ps-4">Nombre de partenaires</label>
                            </div>
                            <div class="pt-2 col-2">
                                <i id="select_part" class="fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_select_part" data-toggle="tooltip" data-placement="top" title="Ajouter des partenaires"></i>
                            </div>
                        </div>

                        <div class="row mt-3 me-1">
                            <div class="form-floating mx-3 col-8">
                                <input type="text" class="form-control" id="nb_str" placeholder="Nombre de structures">
                                <label for="nb_str" class="ps-4">Nombre de structures</label>
                            </div>
                            <div class="pt-2 col-2">
                                <i id="select_str" class="fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_select_str" data-toggle="tooltip" data-placement="top" title="Ajouter des structures"></i>
                            </div>
                        </div>

                        <div class="form-floating m-3 mb-4">
                            <textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:128px;"></textarea>
                            <label for="commentaires">Commentaires</label>
                        </div>
                        <div id="btn_act_create" class="form-group d-flex justify-content-center m-3">
                            <button type="button" id="act_create" class="btn btn-warning mx-3 px-3">Enregistrer<br>la fiche</button>
                        </div>
                        <div id="btn_act_update" class="form-group d-flex justify-content-center d-none m-3">
                            <button type="button" id="act_update" class="btn btn-warning mx-3 px-4">Modifier<br>la fiche</button>
                            <button type="button" id="act_delete" class="btn btn-danger mx-3">Supprimer <br>la fiche</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<!--                                                                            Tableau Part -->
<div id="div_tableau_part" class="container">
<div class="row justify-content-center mt-5">
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:130px">#</th>
                <th scope="col" style="width:130px">Partenaire</th>
                <th scope="col" style="width:130px">Ville</th>
                <th scope="col" style="width:130px">Prénom Ref</th>
                <th scope="col" style="width:130px">Nom Ref</th>
            </tr>
        </thead>
        <tbody id="tableau_part">
        </tbody>
    </table>
</div>
</div>

<!--                                                                            Tableau PDN-->
<div id="div_tableau_pdn" class="container">
<div class="row justify-content-center mt-4">
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:130px">#</th>
                <th scope="col" style="width:130px">Prénom Pdn</th>
                <th scope="col" style="width:130px">Nom Pdn</th>
                <th scope="col" style="width:130px">Structure</th>
                <th scope="col" style="width:130px">Ville</th>
            </tr>
        </thead>
        <tbody id="tableau_pdn">
        </tbody>
    </table>
</div>
</div>

<!--                                                                            Tableau STR-->
<div id="div_tableau_str" class="container">
<div class="row justify-content-center mt-4">
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:130px">#</th>
                <th scope="col" style="width:130px">Structure</th>
                <th scope="col" style="width:130px">Ville</th>
                <th scope="col" style="width:130px">Prénom Resp</th>
                <th scope="col" style="width:130px">Nom Resp</th>
            </tr>
        </thead>
        <tbody id="tableau_str">
        </tbody>
    </table>
</div>
</div>

<?php
include("modal.php"); ?>

<!--                                                                                                               Scripts -->
<script src="js/functions.js"></script>
<script src="js/act.js"></script>
<script src="js/ajax_act.js"></script>

</body>
</html>
