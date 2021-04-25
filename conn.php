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
			$message = "Identifiant ou mot de passe incorrect.";
		}
	} else {
		$message = "Identifiant ou mot de passe incorrect.";
	}
}

include("header.php"); ?>

<div class="container-fluid" style="margin-top: 7em !important;">
    <div class="d-flex justify-content-center">
		<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
			<h1 class="pt-3">Connexion</h1>
			<form action="" method="post">
				<div class="form-floating mx-3 mt-4 mb-3">
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

				<div class="form-group d-flex justify-content-center mx-3 mt-1">
					<button type="submit" name="submit" class="btn btn-warning m-3">Se connecter</button>
				</div>
			</form>
		</div>
	</div>
</div>

</body>

<script src="js/functions.js"></script>

</html>
