<?php
	session_start();
	// Vérifier si le PDN est connecté, si non redirection vers la page de connexion
	if(!isset($_SESSION["id"], $_SESSION["prenom"])){
		header("location: conn.php");
		exit();
	}
include("header.php");
?>

<div class="container-fluid" style="margin-top: 6em">
	<div class="text-center mt-3">
		<h1 class="mb-0 bleu text-uppercase">Bienvenue <?php echo $_SESSION['prenom']; ?> !</h1>
		<a href="deconn.php" class="orange">Se déconnecter</a>
	</div>
</div>

<h3 class="text-center mt-5">Que souhaites-tu faire ?</h3>
<div class="d-grid gap-2 col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 mx-auto">
  <button class="btn btn-outline-primary mt-4" type="button" onclick="document.location='form.php'">Remplir le formulaire mensuel</button>
  <button class="btn btn-outline-primary mt-4" type="button" data-bs-toggle="modal" data-bs-target="#modalBienvenueInfos">Consulter les statistiques</button>
  <button class="btn btn-outline-primary mt-4" type="button" data-bs-toggle="modal" data-bs-target="#modalBienvenueInfos">Proposer une ressource</button>
  <button class="btn btn-outline-primary mt-4" type="button" onclick="document.location='pdn_infos.php'">Modifier mes informations</button>
  <button class="btn btn-outline-primary mt-4" type="button" onclick="document.location='pdn_pwd.php'">Modifier mon mot de passe</button>
</div>

<!--                                                                             ! ! ! - - M O D A L   M E S S A G E S  D ' I N F O S - - ! ! ! -->
<div class="modal fade" id="modalBienvenueInfos" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">PROMENEURS DU NET</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body py-3 bleu">Cette fonctionnalité n'est pas disponible pour le moment.</div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
            </div>
        </div>
    </div>
</div>

</body>

</html>
