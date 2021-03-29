<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les structures</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-xl-7 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Ajouter une structure</h3><br>

        <form id="form1">
            <div class="row ml-0" id="type">
                <label class="control-label col-4">Type(s)</label>
                <label  class ="col-7" id="choixMultiple">Plusieurs choix possible : </label>
            </div>
            <div class="form-group mt-3">
                <label for="nom" class="control-label col-4">Nom de la structure</label>
                <input type="text" class="form-control-sm col-7" id="nom" placeholder="Nom">
            </div>
            <div class="form-group">
                <label for="adresse" class="control-label col-4">Adresse de la structure</label>
                <input type="text" class="form-control-sm col-7" id="adresse" placeholder="Adresse">
            </div>
            <div class="form-group">
              <label for="ville" class="control-label col-4">Ville</label>
              <select class="form-control-sm col-7" id="ville"> </select>
            </div>
            <div class="form-group">
                <label for="tel" class="control-label col-4">Téléphone</label>
                <input type="tel" class="form-control-sm col-7" id="tel" placeholder="01 23 45 67 89">
            </div>
            <div class="form-group">
                <label for="site" class="control-label col-4">Site Web</label>
                <input type="text" class="form-control-sm col-7" id="site" placeholder="Site web de la structure">
            </div>
        </form>

        <!-- enctype pour l'upload de fichiers / id indispensable pour ajax-->
        <form id="form2" action="php/strUpImg.php" method="post" enctype="multipart/form-data">
            <label class="control-label col-4">Image</label>
            <div class="form-control-sm col-7 d-inline">
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixImgUrl" name="choixImg" class="custom-control-input" checked>
                    <label class="custom-control-label" for="choixImgUrl">Image sur Internet</label>
                </div>
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixImgFile" name="choixImg" class="custom-control-input">
                    <label class="custom-control-label" for="choixImgFile">Image sur l'ordinateur</label>
                </div>
            </div>
            <div class="form-group mt-1" id="imgUrl">
                <label for="imageUrl" class="control-label col-4">Image sur Internet</label>
                <input type="texte" class="form-control-sm col-7" id="imageUrl" placeholder="URL de l'image : http://... jpg, jpeg, gif ou png">
            </div>
            <div class="form-group mb-3" id="imgFile">
                <label for="imageFile" class="control-label col-4">Image sur l'ordinateur</br>jpg, gif ou png < 1Mo</label>
                <!-- 1 048 576 octets (bytes) => 1 Mo (Mégabytes) -->
                <input type="hidden" name="MAX_FILE_SIZE" value="1048576">
                <input type="file" name="nom_du_fichier" class="form-control-file-xs col-5" id="imageFile">
                <input type="submit" class="btn input-group-xs" value="OK">
                <div id=imgAff class="d-flex justify-content-center mt-2">
                </div>
            </div>
        </form>

        <form id="form3">
            <div class="form-group">
                <label for="presentation" class="control-label col-4 align-top">Présentation de la structure (700 caractères max.)</label>
                <textarea class="form-control d-inline col-7" id="presentation" rows="5"></textarea>
            </div>
            <div class="form-group d-flex justify-content-center">
            </br><button type="button" id="btnvalide" class="btn btn-warning mb-3">Valider</button>
            </div>
        </form>
    </div>

</section>

<?php include("footer.php");?>

</body>

<script src="js/strUpImg.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/strAjout.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
