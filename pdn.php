<?php
session_start();
include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">
    <div class="row menus">
        <div class="col-12 col-sm-6 col-md-5">
            <h1 class="blue">les promeneurs</h1>
            <div class="orange-divider"> </div>
        </div>
        <div class="col-12 col-sm-2 col-md-4" id="divChoixVille"></div>
        <select class="custom-select col-6 col-sm-4 col-md-3 ml-auto" id="choixVille">
            <option value="0">Toutes les villes</option>
        </select>
    </div>
    <div id="promeneurs" class="card-deck mt-5"></div>

    <div class="modal fade" id="modalPdn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

</section>

<?php include("footer.php");?>

</body>

<script src="js/promeneurs.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/fonctionsajax.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
