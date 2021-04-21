<?php
include("header.php"); ?>

<div class="container-fluid" style="max-width:80%" >
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <div class="col-12 col-sm-6 col-lg-3 py-4 pr-1 pl-3 text-center">
                <select class="form-select type_m" id="type1" aria-label="Type d'événement *">
                    <option selected value="">Séléctionner un type d'événement *</option>
                    <option value="Rencontre partenaire">Rencontre partenaire</option>
                    <option value="Accompagnement PDN">Accompagnement PDN</option>
                    <option value="Journée de formation PDN">Journée de formation PDN</option>
                    <option value="Réunion de réseau PDN">Réunion de réseau PDN</option>
                    <option value="Rencontre départementale">Rencontre départementale</option>
                    <option value="Publication">Publication</option>
                    <option value="Réunion d’information AAP">Réunion d’information AAP</option>
                    <option value="Temps de formation Coordo">Temps de formation Coordo</option>
                    <option value="Comité de pilotage">Comité de pilotage</option>
                    <option value="Comité technique">Comité technique</option>
                    <option value="Accueil">Accueil</option>
                </select>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 py-4 pr-3 pl-1 text-center">
                <select class="form-select type_m" id="support1" aria-label="Support de communication *">
                    <option selected value="">Séléctionner un support *</option>
                    <option value="Présentiel">Présentiel</option>
                    <option value="E-mail">E-mail</option>
                    <option value="Téléphone">Téléphone</option>
                    <option value="Visio">Visio</option>
                    <option value="Réseaux Sociaux">Réseaux Sociaux</option>
                </select>
            </div>
            <div class="col-12 col-lg-3 py-4 px-1 text-center">
                <select class="form-select type_m" id="duree1" aria-label="Durée *">
                    <option selected value="">Séléctionner une durée *</option>
                    <option value="Moins d'une heure">Moins d'une heure</option>
                    <option value="De 1h à 2h">De 1h à 2h</option>
                    <option value="1/2 journée">1/2 journée</option>
                    <option value="1 journée">1 journée</option>
                </select>
            </div>
            <div class="col-12 col-lg-3 py-4 px-1 text-center">
                <button type="button" id="btn_stats" class="btn btn-primary btn-bleu">Afficher les statistiques</button>
            </div>
        </div>
    </div>
<!--                                                                            C H A R T S -->
    <div class="d-flex justify-content-center mt-4">
        <div class="row charts">
            <div id="div_pdn" class="col-12 col-xl-6 mb-5">
                <h2 class="text-dark mb-4">Type</h2>
                <canvas id="type"></canvas>
            </div>
            <div id="div_part" class="col-12 col-xl-6 mb-5">
                <h2 class="text-dark mb-4">Support</h2>
                <canvas id="support"></canvas>
            </div>
            <div id="div_pers" class="col-12 col-xl-6 mb-5">
                <h2 class="text-dark mb-4">Durée</h2>
                <canvas id="duree"></canvas>
            </div>
            <div id="div_ress" class="col-12 col-xl-6 mb-5">
                <h2 class="text-dark mb-4">Nombre de PDN</h2>
                <canvas id="nb_pdn"></canvas>
            </div>
        </div>
    </div>
</div>

<!--                                                                            M O D A L-->

<div class="modal fade" id="modal_stat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Aucune donnée disponible</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                Cette combinaison de choix ne contient pas de donnée.<br><br>Les listes et les graphiques ont été réinitialisés.<br>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>
<script src="js/ajax_stat.js"></script>
<script src="js/stat.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
