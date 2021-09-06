<?php
	session_start();
	//                                                                           Vérifier si le PDN est connecté, si non redirection vers la page de connexion
	if(!isset($_SESSION["id"], $_SESSION["prenom"])){
		header("location: conn.php");
		exit();
	}
	include("header.php");
?>

<div class="container-fluid" style="margin-top: 6em">
	<div class="text-center mt-3">
		<h1 class="mb-0 bleu text-uppercase pointeur" onclick="document.location='bienvenue.php'">Bienvenue <?php echo $_SESSION['prenom']; ?> !</h1>
		<a href="deconn.php" class="orange">Se déconnecter</a>
	</div>
	<form id="form_pdn_ress">
		<div class="d-flex justify-content-center mt-3">
			<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu" style="min-width:440px;">
				<h1 class="pt-3">Proposer une ressource</h1>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="nom" placeholder="Nom de la ressource">
					<label for="nom">Nom de la ressource *</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="lien" placeholder="Lien vers la ressource">
					<label for="lien">Lien vers la ressource *</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="img" placeholder="Lien vers une image">
					<label for="img">Lien vers une image</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="age" placeholder="Age du public">
					<label for="age">Age du public</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="editeur" placeholder="Nom de l'éditeur">
					<label for="editeur">Nom de l'éditeur</label>
				</div>
				<div class="form-floating mx-3 mt-3">
					<textarea class="form-control" placeholder="Texte de présentation de la structure" id="description" style="height:176px;"></textarea>
					<label for="description">Description (700 caractères max.)</label>
				</div>
				<div class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
					<button type="button" id="pdn_ress_valide" class="btn btn-warning m-3 px-3" data-bs-toggle="modal" data-bs-target="#modalPdnRess">Proposer</button>
				</div>
			</div>
		</div>
	</form>
	<!--                                                                            MODAL MODIF INFOS -->
	<div class="modal fade" id="modalPdnRess" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title orange">PROPOSER UNE RESSOURCE</h2>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div id="message_pdn_ress" class="modal-body py-3 bleu">
				</div>
				<div id="footer_pdn_ress" class="modal-footer">
					<button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
				</div>
			</div>
		</div>
	</div>

</body>

<script src="js/functions.js" type="text/javascript"></script>
<script src="js/pdn_ress.js" type="text/javascript"></script>
<script src="js/sessionStorage.js"></script>

</html>
