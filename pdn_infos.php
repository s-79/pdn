<?php
	session_start();
	//                                                                           Vérifier si le PDN est connecté, si non redirection vers la page de connexion
	if(!isset($_SESSION["id"], $_SESSION["prenom"])){
		header("location: conn.php");
		exit();
	}

	if(isset($_POST['prenom'], $_POST['nom'])){
		$headers ='From: "Promeneurs du Net 93"<no-reply@pdn.ligue93.org>'."\n";
		$headers .='Content-Type: text/html; charset="utf-8"'."\n";
		$headers .='Content-Transfer-Encoding: 8bit';
		$message = '<html><body> propose des modifications de ses coordonnées.</br></br>';
		$message .= 'Prénom : '.$_POST['prenom'].'</br>';
		$message .= 'Nom : '.$_POST['nom'].'</br>';
		$message .= 'Fonction : '.$_POST['fonction'].'</br>';
		$message .= 'Téléphone : '.$_POST['tel'].'</br>';
		$message .= 'Mail : '.$_POST['mail'].'</br>';
		$message .= 'Structure : '.$_POST['structure'].'</br>';
		$message .= 'Ville : '.$_POST['ville'].'</br>'.'</br>';
		$message .= '<a href="http://pdn.ligue93.org/admin">Se connecter à l\'interface d\'administration</a></body></html>';
		mail('sebastien.trouve@mailo.com', '[pdn.ligue93.org] Modification de coordonnées', $_POST['prenom'].' '.$message, $headers);
	}

	include("header.php");
?>

<div class="container-fluid" style="margin-top: 6em">
	<div class="text-center mt-3">
		<!--                                                                     Récupération de l'id dans un input invisible -->
		<div id="pdn_id" class="d-none"><?php echo $_SESSION['id']; ?></div>
		<h1 class="mb-0 bleu text-uppercase">Bienvenue <?php echo $_SESSION['prenom']; ?> !</h1>
		<a href="deconn.php" class="orange">Se déconnecter</a>
	</div>
    <div class="d-flex justify-content-center mt-3">
		<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu" style="min-width:25em;">
			<form class="" action="" method="post">
				<h1 class="pt-3">Coordonnées</h1>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="prenom" name="prenom" placeholder="Prénom">
					<label for="prenom">Prénom</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="nom" name="nom" placeholder="Nom">
					<label for="nom">Nom</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="fonction" name="fonction" placeholder="Fonction">
					<label for="fonction">Fonction</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="tel" name="tel" placeholder="Téléphone">
					<label for="telœ">Téléphone</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="mail" name="mail" placeholder="Adresse mail">
					<label for="mail">Adresse mail</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="structure" name="structure" placeholder="Structure">
					<label for="structure">Structure</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="text" class="form-control" id="ville" name="ville" placeholder="Ville">
					<label for="ville">Ville</label>
				</div>
				<div class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
					<button type="button" class="btn btn-warning m-3 px-3" onclick="document.location='bienvenue.php'">Annuler</button>
					<button id="pdn_modif_valide" type="submit" class="btn btn-danger m-3">Enregistrer</button>
				</div>
			</form>
		</div>
	</div>

	<!--                                                                            MODAL MODIF INFOS -->
	<div class="modal fade" id="modalModifInfos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title orange" id="staticBackdropLabel">MODIFICATION DES INFOS PDN</h2>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body py-3 bleu">
					Modifications transmises à la coordination du réseau PDN93 pour validation. Merci
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
				</div>
			</div>
		</div>
	</div>

</body>

<script src="js/pdn_infos.js" type="text/javascript"></script>

</html>
