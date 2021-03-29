<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les ressources</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-lg-6 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Ajouter une catégorie de ressources</h3><br>
        <!-- enctype pour l'upload de fichiers -->
        <form method="POST" action="" enctype="multipart/form-data">
            <div class="form-group mt-3">
                <label for="cat" class="control-label col-4">Nouvelle catégorie</label>
                <input type="text" class="form-control-sm col-7" id="cat" placeholder="50 caractères max">
            </div>
            <div class="form-group mt-3">
                <label for="icone" class="control-label col-4"><a href="https://fontawesome.com/icons" class="text-warning" target="_blank">Icône Bootstrap</a></label>

                <input type="text" class="form-control-sm col-7" id="icone" placeholder='ex : fas fa-user, fa fa-toolbox ou fab fa-facebook'>
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
<script src="js/catAjout.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
