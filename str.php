<?php
session_start();
include("header.php"); ?>

<section class="container mt-4">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <h1 class="bleu">LES STRUCTURES</h1>
            <div class="orange-divider"> </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mx-auto"><a href="osm/index.php" id="visuMap" class="btn btn-outline-secondary"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Visualiser sur une carte</a></div>
        <div class="col-12 col-6 col-sm-4 col-md-3">
            <select class="form-select ml-auto me-1" id="choixVille">
            </select>
        </div>

    </div>

    <div id="structures" class="row mt-5"></div>
</section>

<?php include("footer.php");?>

<!--                                                                            MODAL STR -->

<div class="modal fade" id="modalStr" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div id='modalStrHeader'></div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body row">
                <div id='modalStrContentLeft' class='col-4 d-block text-center'></div>
                <div id='modalStrContentRight' class='col-8'></div>
            </div>
            <div class="modal-footer text-center d-block">
                <h4 class='orange text-uppercase fw-bold mt-0 mb-0'>Les promeneurs de la structure</br></h4>
                <h5 class='bleu my-0'>(cliquer sur les photos puis sur les icônes pour + d'infos)</span></h5>
                <div id='modalStrFooter' class='text-center'></div>
            </div>
        </div>
    </div>
</div>

<!--                                                                            MODAL PAS DE STR DANS LA VILLE -->

<div class="modal fade" id="modalNoStr" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange" id="exampleModalLabel">INFORMATIONS</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="info-modal" class="modal-body text-center py-2">
                <span style="font-size:0.89em;">Il n'y a pas de PDN dans cette ville pour le moment. </br> N'hésitez pas à nous contacter si vous souhaitez nous rejoindre !</span>
            </div>
            <div class="modal-footer d-block text-center mb-1">
                <h2 class="mt-1"><i id="CoordoFacebook" class="bleu liens pointeur fab fa-facebook fa-lg me-2"></i>
                <i id="CoordoTwitter" class="bleu liens pointeur fab fa-twitter fa-lg me-2"></i>
                <i id="CoordoMail" class="bleu liens pointeur fas fa-envelope fa-lg me-2"></i></h2>
                <div id="CoordoFacebookDetails" class="mt-1 d-none infosRSCoordo"><h5><a class="bleu" href="https://www.facebook.com/sindykolodziejczyk.coordopdn" target="_blank">https://www.facebook.com/sindykolodziejczyk.coordopdn</a></h5></div>
                <div id="CoordoTwitterDetails" class="mt-1 d-none infosRSCoordo"><h5><a class="bleu" href="https://twitter.com/coordopdn93" target="_blank">https://twitter.com/coordopdn93</a></h5></div>
                <div id="CoordoMailDetails" class="mt-1 d-none infosRSCoordo"><h5><a class="bleu" href="mailto:fol93.coordopdn93@gmail.com" target="_blank">fol93.coordopdn93(at)gmail.com</a></h5></div>
            </div>
        </div>
    </div>
</div>

</body>

<script src="js/str.js"></script>
<script src="js/ajax_str.js"></script>
<script src="js/functions.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
