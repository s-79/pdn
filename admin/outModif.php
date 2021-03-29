<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les ressources</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-xl-7 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Modifier ou supprimer une ressource</h3></br>
        <div id="rechercheStructure">
            <div>
                <label for="zoneTexte" class="d-block mx-auto control-label col-6">Séléctionner un type de ressource</label>
                <div class="row">
                    <button type="button" id="ressourcesVal" class="d-block mx-auto btn btn-light mb-4">Ressources validées</button>
                    <button type="button" id="ressourcesAVal" class="d-block mx-auto btn btn-light mb-4">Ressources à valider</button>
                </div>
                <label for="zoneTexte" class="d-block mx-auto control-label col-7">Saisir ou séléctionner une ressource :</label>
                <input type="text" class="d-block mx-auto col-lg-8 border-bottom-0" id="zoneTexte">
                <select class="d-block mx-auto col-lg-8 border-top-0" size="5" id="listeRecherche"></select></br>
            </div>
            <div class="row">
                <button type="button" id="modifOutil" class="d-block mx-auto btn btn-warning mb-4" data-toggle="modal" data-target="#modalModifStr">Modifier la ressource</button>
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
                <button type="button" id="suppOut" class="d-block mx-auto btn btn-danger mb-4" data-toggle="modal" data-target="#modalSuppStr">Supprimer la ressource</button>
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
            <!-- Création d'une div invisible pour stocker l'ID du PDN sans l'afficher -->
            <div class="form-group d-none" id="div_pdn"><div class="d-none" id="divId_pdn"></div>
                <label for="id_pdn" class="control-label col-4">Identifiant PDN</label>
                <input type="text" class="form-control-sm col-7" id="id_pdn" placeholder="id" disabled>
            </div>
            <div class="form-group mt-3">
                <label for="nom" class="control-label col-4">Nom de la ressource *</label>
                <input type="text" class="form-control-sm col-7" id="nom" placeholder="Nom de la ressource">
            </div>
            <div id="thematiques"></div>
            <div id="choixThem"></div>
            <!-- <div class="form-group">
              <label for="them" class="control-label col-4">Modifier la thématique 1</label>
              <select class="form-control-sm col-7" id="them1"><option value="0">Choisir une thématique</option></select>
            </div>
            <div class="form-group">
              <label for="them" class="control-label col-4">Modifier la thématique 2</label>
              <select class="form-control-sm col-7" id="them2"><option value="0">Choisir une thématique</option></select>
            </div>
            <div class="form-group">
              <label for="them" class="control-label col-4">Modifier la thématique 3</label>
              <select class="form-control-sm col-7" id="them3"><option value="0">Choisir une thématique</option></select>
            </div>
            <div class="form-group">
              <label for="them" class="control-label col-4">Modifier la thématique 4</label>
              <select class="form-control-sm col-7" id="them4"><option value="0">Choisir une thématique</option></select>
            </div>
            <div class="form-group">
              <label for="them" class="control-label col-4">Modifier la thématique 5</label>
              <select class="form-control-sm col-7" id="them5"><option value="0">Choisir une thématique</option></select>
            </div> -->
            <div class="form-group">
                <label for="selectThem" class="control-label col-4 align-top text-warning">Suppr. une thématique</label>
                <select class="form-control-sm d-inline col-7" id="selectThem" rows="5">
                    <option value="0">Choisir la thématique à supprimer</option>
                    <option value="2">Thématique 2</option>
                    <option value="3">Thématique 3</option>
                    <option value="4">Thématique 4</option>
                    <option value="5">Thématique 5</option>
                </select>
            </div>

            <div class="form-group">
                <label for="description" class="control-label col-4 align-top">Description (700 caractères max.) *</label>
                <textarea class="form-control d-inline col-7" id="description" rows="5"></textarea>
            </div>
        </form>

        <form id="form2" action="php/outUpImg.php" method="post" enctype="multipart/form-data">
            <label class="control-label col-4">Image d'illustration *</label>
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

        <form id="form3" action="php/outUpFile.php" method="post" enctype="multipart/form-data">
            <label class="control-label col-4">Fichier de la ressource</label>
            <div class="form-control-sm col-7 d-inline">
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixFileUrl" name="choixImg" class="custom-control-input" checked>
                    <label class="custom-control-label" for="choixFileUrl">Fichier sur Internet</label>
                </div>
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixLocalFile" name="choixImg" class="custom-control-input">
                    <label class="custom-control-label" for="choixLocalFile">Fichier sur l'ordinateur</label>
                </div>
            </div>
            <div class="form-group mt-1" id="fichierUrl">
                <label for="fileUrl" class="control-label col-4">Fichier sur Internet</label>
                <input type="texte" class="form-control-sm col-7" id="fileUrl" placeholder="URL du fichier : http://... pdf, doc, odt">
            </div>
            <div class="form-group mb-3" id="fichierLocal">
                <label for="localFile" class="control-label col-4">Fichier sur l'ordinateur</br>pdf, doc ou odt < 3Mo</label>
                <!-- 3 145 728 octets (bytes) => 1 Mo (Mégabytes) -->
                <input type="hidden" name="MAX_FILE_SIZE" value="3145728">
                <input type="file" name="nom_du_fichier" class="form-control-file-xs col-5" id="localFile">
                <input type="submit" class="btn input-group-xs" value="OK">
                <div id=fileAff class="d-flex justify-content-center mt-2">
                </div>
            </div>
        </form>

        <form id="form4">
            <div class="form-group mt-3">
                <label for="age" class="control-label col-4">Age du public</label>
                <input type="text" class="form-control-sm col-7" id="age" placeholder="Tout public / - de 16 ans / + de 18 ans...">
            </div>
            <div class="form-group mt-3">
                <label for="nom_editeur" class="control-label col-4">Nom de l'éditeur</label>
                <input type="text" class="form-control-sm col-7" id="nom_editeur" placeholder="Nom de l'éditeur de la ressource">
            </div>
            <div class="form-group mt-3">
                <label for="site_editeur" class="control-label col-4">Site de l'éditeur</label>
                <input type="text" class="form-control-sm col-7" id="site_editeur" placeholder="Site Internet de l'éditeur de la ressource">
            </div>
            <div class="form-group">
                <label class="control-label col-4"></label>
                <input class="form-check-input col-0" type="checkbox" value="actif" id="valide">
                <label class="form-check-label col-7" for="valide" id="labelValide">Valider la ressource</label>
            </div>
            <div class="form-group d-flex justify-content-center">
                </br><button type="button" id="btnvalide" class="btn btn-warning mb-3">Valider</button>
            </div>
        </form>
    </div>

</section>

<?php include("footer.php");?>

</body>

<script src="js/outUpImg.js"></script>
<script src="js/outUpFile.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/outModif.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
