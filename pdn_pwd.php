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
		<h1 class="mb-0 bleu text-uppercase">Bienvenue <?php echo $_SESSION['prenom']; ?> !</h1>
		<a href="deconn.php" class="orange">Se déconnecter</a>
	</div>
	<form id="form_pwd">
		<div class="d-flex justify-content-center mt-3">
			<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu" style="min-width:25em;">
				<h1 class="pt-3">Modifier mon mot de passe</h1>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="id_act" placeholder="Identifiant actuel">
					<label for="id_act">Identifiant actuel</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="password" class="form-control" id="mdp_act" placeholder="Mot de passe actuel">
					<label for="mdp_act">Mot de passe actuel</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="password" class="form-control" id="mdp_new" placeholder="Nouveau mot de passe">
					<label for="mdp_new">Nouveau mot de passe</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="password" class="form-control" id="mdp_repeat" placeholder="Répéter le mot de passe">
					<label for="mdp_repeat">Répéter le mot de passe</label>
				</div>
				<div class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
					<button type="button" id="pdn_pwd_valide" class="btn btn-warning m-3 px-3" data-bs-toggle="modal" data-bs-target="#modalModifPwd">Modifier</button>
				</div>
			</div>
		</div>
	</form>
	<!--                                                                            MODAL MODIF INFOS -->
	<div class="modal fade" id="modalModifPwd" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title orange">MODIFICATION DU MOT DE PASSE</h2>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div id="message_modif_pwd" class="modal-body py-3 bleu">
				</div>
				<div id="footer_modif_pwd" class="modal-footer">
					<button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
				</div>
			</div>
		</div>
	</div>

</body>

<script src="js/functions.js" type="text/javascript"></script>
<script src="js/pdn_pwd.js" type="text/javascript"></script>

</html>
