<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les structures</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-lg-6 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Modifier ou supprimer un type de structure</h3></br>
        <div id="rechercheStructure">
            <div>
                <label for="zoneTexte" class="d-block mx-auto control-label col-lg-8">Séléctionnez un type de structure :</label>
                <select class="d-block mx-auto col-lg-8 border-top-0" size="5" id="listeRecherche"></select></br>
            </div>
            <div class="row">
                <button type="button" id="modifType" class="d-block mx-auto btn btn-warning mb-4" data-toggle="modal" data-target="#modalModifStr">Modifier le type</button>
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
                <button type="button" id="suppType" class="d-block mx-auto btn btn-danger mb-4" data-toggle="modal" data-target="#modalSuppStr">Supprimer le type</button>
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
        <form id="formModifType" method="POST" action="" enctype="multipart/form-data">
            <div class="form-group">
                <label for="id" class="control-label col-4">Identifiant</label>
                <input type="text" class="form-control-sm col-7" id="id" placeholder="id" disabled>
            </div>
            <div class="form-group mt-3">
                <label for="type" class="control-label col-4">Nouveau nom</label>
                <input type="text" class="form-control-sm col-7" id="type" placeholder="50 caractères max">
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
<script src="js/typeModif.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
