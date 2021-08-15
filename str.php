<?php
session_start();
include("header.php"); ?>

<section class="mx-auto">
    <div class="row">
        <div class="divTitre col-12 col-sm-6 col-md-4">
            <h1 class="bleu">LES STRUCTURES</h1>
            <div class="orange-divider"> </div>
        </div>
        <div class="divVisuMap col-12 col-sm-6 col-md-4 text-center"><a href="osm.php" id="visuMap" class="btn btn-outline-secondary"><i class="fas fa-map-marker-alt pe-2"></i>Visualiser sur une carte</a></div>
        <div class="divChoixVille col-12 col-md-4 d-flex justify-content-end">
            <select class="form-select me-1" style="max-width:75%;" id="choixVille">
            </select>
        </div>
    </div>
    <div id="structures" class="row mt-5"></div>
</section>

<?php
include("footer.php");
include("str_modal.php");
?>

</body>

<script src="js/str.js"></script>
<script src="js/ajax_str.js"></script>
<script src="js/functions.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
