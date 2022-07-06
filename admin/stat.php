<?php
include("header.php"); ?>

<div class="container-fluid" style="max-width:80%" >
<!--                                                                            C H A R T S -->
    <div class="mt-5">
        <div class="row charts">
            <div id="div_part" class="col-12 col-xl-6 mb-5">
                <h1 class="text-dark mb-4">SUPPORT</h1>
                <canvas id="support"></canvas>
            </div>
            <div id="div_pers" class="col-12 col-xl-6 mb-5">
                <h1 class="text-dark mb-4">DURÉE</h1>
                <canvas id="duree"></canvas>
            </div>
        </div>
    </div>
    <div class="mx-auto mt-5" style="max-width:80%">
        <!--                                                                            F I L E S -->
        <div class="text-center fw_bold">
            <h1 class="text-dark">COORDINATION PDN</h1>
        </div>
        <div class="row mb-5">
            <div class="col-6 col-lg-3 py-2  d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Promeneurs">
                    <button id="csv_Promeneurs" type="submit" class="btn btn-outline-primary">Promeneurs</button>
                </form>
            </div>
            <div class="col-6 col-lg-3 py-2  d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Structures">
                    <button id="csv_Structures" type="submit" class="btn btn-outline-primary">Structures</button>
                </form>
            </div>
            <div class="col-6 col-lg-3 py-2  d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Ressources">
                    <button id="csv_Ressources" type="submit" class="btn btn-outline-primary">Ressources</button>
                </form>
            </div>
            <div class="col-6 col-lg-3 py-2  d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Actions">
                    <button id="csv_Actions" type="submit" class="btn btn-outline-primary">Actions</button>
                </form>
            </div>
        </div>
        <div class="text-center fw_bold" style="margin-top:5em;">
            <h1 class="text-dark">FORMULAIRES PDN</h1>
        </div>
        <div class="row mb-5">
            <div class="col-6 col-lg-3 py-2 py-2 d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Formulaires">
                    <button id="csv_Formulaires" type="submit" class="btn btn-outline-primary">Formulaires</button>
                </form>
            </div>
            <div class="col-6 col-lg-3 py-2  d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Reseaux_Sociaux">
                    <button id="csv_Reseaux_Sociaux" type="submit" class="btn btn-outline-primary">Réseaux Sociaux</button>
                </form>
            </div>
            <div class="col-6 col-lg-3 py-2  d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Initiatives">
                    <button id="csv_Initiatives" type="submit" class="btn btn-outline-primary">Initiatives effectuées</button>
                </form>
            </div>
            <div class="col-6 col-lg-3 py-2  d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="Initiatives_Prevues">
                    <button id="csv_Initiatives_Prevues" type="submit" class="btn btn-outline-primary">Initiatives prévues</button>
                </form>
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
