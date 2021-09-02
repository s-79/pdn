<?php
session_start();
include("header.php"); ?>

<section id="sectionOut" class="mx-auto">
    <div class="divTitre">
        <h1 class="bleu">LES RESSOURCES</h1>
    </div>
    <div class="orange-divider" style="width: 180px;"> </div>

    <div id="divRessCat" class="d-flex flex-wrap mt-4 justify-content-center"></div>

    <div id="divRessThem" class="d-flex flex-wrap mt-3 justify-content-center"></div>

    <div id="divRessOut" class="d-block mt-4 mb-4"></div>

</section>

<?php include("footer.php");?>

</body>

<script src="js/ress.js"></script>
<script src="js/functions.js"></script>
<script src="js/ajax_ress.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
