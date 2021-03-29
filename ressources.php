<?php
session_start();
include("header.php"); ?>

<section id="sectionOut" class="container mt-4">
    <div class="row menus">
        <div class="col-12 col-sm-6 col-md-5">
            <h1 class="blue">les ressources</h1>
            <div class="orange-divider"> </div>
        </div>
    </div>

    <div id="divRessCat" class="d-flex flex-wrap mt-4 justify-content-center"></div>

    <div id="divRessThem" class="d-flex flex-wrap mt-4 justify-content-center"></div>

    <div id="divRessOut" class="d-block mt-4 mb-4"></div>

    </section>

<?php include("footer.php");?>

</body>

<script src="js/ressources.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/fonctionsajax.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
