<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les ressources</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-lg-6 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Ajouter une thématique</h3><br>
        <!-- enctype pour l'upload de fichiers -->
        <form method="POST" action="" enctype="multipart/form-data">
            <div class="form-group">
              <label for="cat" class="control-label col-4">Catégorie</label>
              <select class="form-control-sm col-7" id="cat"> </select>
            </div>
            <div class="form-group mt-3">
                <label for="them" class="control-label col-4">Nouvelle thématique</label>
                <input type="text" class="form-control-sm col-7" id="them" placeholder="50 caractères max">
            </div>
            <div class="form-group d-flex justify-content-center">
            </br><button type="button" id="btnvalide" class="btn btn-warning mb-3">Valider</button>
            </div>
        </form>
    </div>

</section>

<?php include("footer.php");?>

</body>

<script src="js/fonctionsjs.js"></script>
<script src="js/themAjout.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
