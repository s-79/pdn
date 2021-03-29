<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les ressources</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-lg-6 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Modifier ou supprimer une thématique</h3></br>
        <div class="form-group d-block text-center">
          <label for="cat" class="control-label d-block mx-auto">Filtrer par catégorie :</label>
          <select class="form-control-sm col-lg-8" id="cat"><option value="0">Toutes les catégories</option></select>
        </div>
        <div id="rechercheThematique">
            <div class="d-block text-center">
                <label for="zoneTexte" class="text-center control-label col-lg-8">Séléctionner la thématique à modifier :</label>
                <!-- <input type="text" class="d-block mx-auto col-lg-8 border-bottom-0" id="zoneTexte"> -->
                <select class="d-block mx-auto col-lg-8 border-top-0" size="5" id="listeRecherche"></select></br>
            </div>
            <div class="row">
                <button type="button" id="modifThem" class="d-block mx-auto btn btn-warning mb-4" data-toggle="modal" data-target="#modalModifThem">Modifier la thématique</button>
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
                <button type="button" id="suppThem" class="d-block mx-auto btn btn-danger mb-4" data-toggle="modal" data-target="#modalSuppThem">Supprimer la thématique</button>
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
        <!-- enctype pour l'upload de fichiers -->
        <form id="formModifThem" method="POST" action="" enctype="multipart/form-data">
            <div class="form-group">
                <label for="id" class="control-label col-4">Identifiant</label>
                <input type="text" class="form-control-sm col-7" id="id" placeholder="id" disabled>
            </div>
            <div class="form-group mt-3">
                <label for="them" class="control-label col-4">Nouveau nom</label>
                <input type="text" class="form-control-sm col-7" id="them" placeholder="50 caractères max">
            </div>
            <div class="form-group">
              <label for="newCat" class="control-label col-4">Nouvelle catégorie</label>
              <select class="form-control-sm col-7" id="newCat"> </select>
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
<script src="js/themModif.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
