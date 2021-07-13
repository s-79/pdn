<?php
session_start();
include("header.php"); ?>

<section id="sectionOut" class="mt-4">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-5">
            <h1 class="bleu">LES RESSOURCES</h1>
            <div class="orange-divider"> </div>
        </div>
    </div>

    <div id="divRessCat" class="d-flex flex-wrap mt-4 justify-content-center"></div>

    <div id="divRessThem" class="d-flex flex-wrap mt-3 justify-content-center"></div>

    <div id="divRessOut" class="d-block mt-4 mb-4"></div>

</section>

<footer class="text-center pt-4 pb-1 footer_absolute">
    <h5>Ligue de l'enseignement - FOL93 © <?php echo date('Y')?> / Tous droits réservés</h5>
    <a class="bleu liens" href="https://www.facebook.com/sindykolodziejczyk.coordopdn"><i class="fab fa-facebook pe-2"></i></a>
    <a class="bleu liens" href="https://twitter.com/coordopdn93"><i class="fab fa-twitter pe-2"></i></a>
    <a class="bleu liens" href="mailto:fol93.coordopdn93@gmail.com"><i class="fas fa-envelope pe-2"></i></a>
</footer>

</body>

<script src="js/ress.js"></script>
<script src="js/functions.js"></script>
<script src="js/ajax_ress.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
