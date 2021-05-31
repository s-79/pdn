<?php
session_start();
include("header.php"); ?>

<section class="container strCard mt-4" style="margin-top:8em !important;">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <h1 class="bleu">LES STRUCTURES</h1>
            <div class="orange-divider"> </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 osm"><a href="osm/index.php" id="visuMap" class="btn btn-outline-secondary"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Visualiser sur une carte</a></div>
        <select class="custom-select col-6 col-sm-4 col-md-3 ml-auto" id="choixVille">
        </select>
    </div>

    <div id="structures" class="row mt-5"></div>
</section>

<?php include("footer.php");?>

<!--                                                                            MODAL STR -->

<div class='modal fade' id='modalStr' tabindex='-1' role='dialog' aria-labelledby='ModalStrContent' aria-hidden='true'>
    <div class='modal-dialog' role='document'>
        <div class='modal-content'>
            <div class='modal-header modalHeaderStr'>
                <div id='modalStrHeader'></div>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
            </div>
            <div class='modal-body row'>
                <div id='modalStrContentLeft' class='col-4 d-block text-center'></div>
                <div id='modalStrContentRight' class='col-8'></div>
            </div>
            <div class='modal-footer d-block'>
                <h5 class='text-center orange text-uppercase font-weight-bold mt-0 mb-0'>Les promeneurs de la structure</br>
                    <span class='initial font-weight-normal blue'>(cliquer sur les photos puis sur les icônes pour + d'infos)</span>
                </h5>
                <div id='modalStrFooter' class='text-center'></div>
            </div>
        </div>
    </div>
</div>

<!--                                                                            MODAL PAS DE STR DANS LA VILLE -->

<div class="modal fade" id="modalNoStr" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title orange" id="exampleModalLabel">INFORMATIONS</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div id="info-modal" class="modal-body text-center"><h3 class="text-dark initial font-weight-normal">
                Pour le moment, il n'y a pas de PDN dans cette ville. </br> N'hésitez pas à nous contacter si vous souhaitez nous rejoindre !</h3>
            </div>
            <div class="modal-footer d-block text-center mb-1">
                <h4 class="mt-1"><a href"#"><i id="CoordoFacebook" class="blue liens fab fa-facebook fa-lg"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href"#"><i id="CoordoTwitter" class="blue liens fab fa-twitter fa-lg"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href"#"><i id="CoordoMail" class="blue liens fas fa-envelope fa-lg"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                <div id="CoordoFacebookDetails" class="mt-1 d-none infosRSCoordo"><h5><a class="blue" href="https://www.facebook.com/sindykolodziejczyk.coordopdn" target="_blank">https://www.facebook.com/sindykolodziejczyk.coordopdn</a></h5></div>
                <div id="CoordoTwitterDetails" class="mt-1 d-none infosRSCoordo"><h5><a class="blue" href="https://twitter.com/coordopdn93" target="_blank">https://twitter.com/coordopdn93</a></h5></div>
                <div id="CoordoMailDetails" class="mt-1 d-none infosRSCoordo"><h5><a class="blue" href="mailto:fol93.coordopdn93@gmail.com" target="_blank">fol93.coordopdn93(at)gmail.com</a></h5></div>
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
