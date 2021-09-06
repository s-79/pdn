<?php
session_start();
include("header.php"); ?>

<section class="mx-auto">
    <div class="row">
        <div class="divTitre col-12 col-sm-6">
            <h1 class="bleu">LES PROMENEURS</h1>
            <div class="orange-divider" style="width: 195px;"> </div>
        </div>
        <div class="divChoixVille col-12 col-sm-6 d-flex justify-content-end">
            <select class="form-select me-1" style="max-width:50%;" id="choixVille">
            </select>
        </div>
    </div>
    <div id="promeneurs" class="row mt-5"></div>
</section>

<!--                                                                            MODAL PDN -->

<div class="modal fade" id="modalPdn" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div id='modalPdnHeader'></div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body row">
                <div id='modalPdnContentLeft' class='col-4 d-block text-center'></div>
                <div id='modalPdnContentRight' class='col-8'></div>
            </div>
            <div id='modalPdnFooter' class="modal-footer text-center d-block">
            </div>
        </div>
    </div>
</div>

<!--                                                                            MODAL PAS DE PDN DANS LA VILLE -->
<div class="modal fade" id="modalNoPdn" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">INFORMATIONS</h2>
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

<?php include("footer.php");?>

</body>

<script src="js/pdn.js"></script>
<script src="js/functions.js"></script>
<script src="js/ajax_pdn.js"></script>
<script src="js/ajax_str.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
