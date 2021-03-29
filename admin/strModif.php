<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les structures</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-xl-7 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Modifier ou supprimer une structure</h3></br>
        <div id="rechercheStructure">
            <div>
                <label for="zoneTexte" class="d-block mx-auto control-label col-lg-8">Séléctionnez ou saisissez un nom de structure :</label>
                <input type="text" class="d-block mx-auto col-lg-8 border-bottom-0" id="zoneTexte">
                <select class="d-block mx-auto col-lg-8 border-top-0" size="5" id="listeRecherche"></select></br>
            </div>
            <div class="row">
                <button type="button" id="modifStr" class="d-block mx-auto btn btn-warning mb-4" data-toggle="modal" data-target="#modalModifStr">Modifier la structure</button>
                <!-- <div class="modal fade" id="modalModifStr" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">CONFIRMATION</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="info-modal" class="modal-body">
                            L'adoption est annulée' !
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div> -->
                <button type="button" id="suppStr" class="d-block mx-auto btn btn-danger mb-4" data-toggle="modal" data-target="#modalSuppStr">Supprimer la structure</button>
                <!-- <div class="modal fade" id="modalSuppStr" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">CONFIRMATION</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="info-modal" class="modal-body">
                            Le paiement est confirmé !
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <form id="form1">
            <div class="form-group">
                <label for="id" class="control-label col-4">Identifiant</label>
                <input type="text" class="form-control-sm col-7" id="id" placeholder="id" disabled>
            </div>
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
                <label for="presentation" class="control-label col-4">Présentation de la structure (700 caractères max.)</label>
                <textarea class="form-control d-inline col-7" id="presentation" rows="5"></textarea>
            </div>
            <div class="form-group d-flex justify-content-center">
            </br><button type="button" id="btnvalide" class="btn btn-warning mb-3">Confirmer les modifications</button>
            </div>
        </form>
    </div>

</section>

<?php include("footer.php");?>

</body>

<script src="js/strUpImg.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/strModif.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
