<?php
	// Initialiser la session
	session_start();
	// Vérifier si l'utilisateur est déjà connecté, si oui redirection vers la page bienvenue
	if(isset($_SESSION["id"], $_SESSION["prenom"])){
		header("location: bienvenue.php");
		exit();
	}

require('php/base.php');

// Si les champs sont bien remplis

if (isset($_POST['login']) && isset($_POST['mdp'])){

	$login = mysqli_real_escape_string($conn, $_POST['login']);
	$mdp = mysqli_real_escape_string($conn, $_POST['mdp']);
  	$query = "CALL pdn_log('$login')";
	$result = mysqli_query($conn, $query) or die(mysql_error());

	// Si le résultat de la requète contient 1 ligne
	if (mysqli_num_rows($result) == 1) {
		$user = mysqli_fetch_assoc($result);

		// Si le mot de passe est le même que le mot de passe hacher
		if (password_verify($mdp, $user['mdp'])) {
				// Création des jetons de session
				$_SESSION['id'] = $user['id'];
				$_SESSION['prenom'] = $user['prenom'];
				header('location: bienvenue.php');

		}	else {
			$message = "Identifiant ou mot de passe incorrect";
		}
	} else {
		$message = "Identifiant ou mot de passe incorrect";
	}
}

include("header.php"); ?>

<section class="mx-auto">
    <h1 class="bleu">CONNEXION PDN</h1>
    <div class="orange-divider"> </div>

	<div class="d-flex justify-content-center pt-3 mt-4">
		<div id="ident" class="bg_bleu py-1 px-3 rounded rounded-3" style="min-width:25em;">
			<!-- <h1 class="pt-2">Identification</h1> -->
			<form action="" method="post">
				<div class="form-floating mx-3 mt-4 mb-2">
					<input type="text" name="login" class="form-control" placeholder="Identifiant">
					<label for="login">Identifiant</label>
				</div>
				<div class="form-floating mx-3 mt-3 mb-3">
					<input type="password" name="mdp" class="form-control" placeholder="Mot de passe">
					<label for="mdp">Mot de passe</label>
				</div>

				<?php if (! empty($message)) { ?>
					<p class="text-center fw-bold text-warning mt-2"><?php echo $message; ?></p>
				<?php } ?>

				<div class="form-group d-flex justify-content-center mx-3">
					<button type="submit" name="submit" class="btn btn-warning m-2 mb-3">Se connecter</button>
				</div>
			</form>
		</div>
	</div>

</section>

<footer class="text-center pt-4 pb-1 footer_absolute">
    <h5>Ligue de l'enseignement - FOL93 © <?php echo date('Y')?> / Tous droits réservés</h5>
    <a class="bleu liens" href="https://www.facebook.com/sindykolodziejczyk.coordopdn"><i class="fab fa-facebook pe-2"></i></a>
    <a class="bleu liens" href="https://twitter.com/coordopdn93"><i class="fab fa-twitter pe-2"></i></a>
    <a class="bleu liens" href="mailto:fol93.coordopdn93@gmail.com"><i class="fas fa-envelope pe-2"></i></a>
</footer>

</body>

<script>
	$("#menu_conn").toggleClass("nav-link-toggle");
</script>

</html>
