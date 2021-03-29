<?php
	// Initialiser la session
	session_start();
	// Vérifier si l'utilisateur est déjà connecté, si oui redirection vers la page bienvenue
	if(isset($_SESSION["id_pdn"], $_SESSION["prenom_pdn"], $_SESSION["nom_pdn"])){
		header("Location: bienvenue.php");
		exit();
	}

require('php/base.php');

// Si les champs sont bien remplis
if (isset($_POST['login_pdn'])){
	$login_pdn = stripslashes($_REQUEST['login_pdn']);
	$login_pdn = htmlspecialchars($login_pdn);
	$login_pdn = mysqli_real_escape_string($conn, $login_pdn);
	$mdp_pdn = stripslashes($_REQUEST['mdp_pdn']);
  $query = "SELECT * FROM `v_pdn_connex` WHERE login_pdn='$login_pdn'";
	$result = mysqli_query($conn,$query) or die(mysql_error());

	// Si le résultat de la requète contient 1 ligne
	if (mysqli_num_rows($result) == 1) {
		$user = mysqli_fetch_assoc($result);

		// Si le mot de passe est le même que le mot de passe hacher
		if (password_verify($mdp_pdn, $user['mdp_pdn'])) {
				// Création des jetons de session
				$_SESSION['prenom_pdn'] = $user['prenom_pdn'];
				$_SESSION['nom_pdn'] = $user['nom_pdn'];
				$_SESSION['id_pdn'] = $user['id_pdn'];

				// Si l'utilisateur est administrateur (pas de colonne "type" actuellement dans la table "pdn")
				if ($user['type'] == 'admin') {
					header('location: admin/index.php');
				}	else {
					header('location: bienvenue.php');
				}
		}	else {
			$message = "Identifiant ou mot de passe incorrect.";
		}
	} else {
		$message = "Identifiant ou mot de passe incorrect.";
	}
}

include("header.php"); ?>

<section class="container mt-4 section_conn">

	<div class="row menus">
			<div class="col-12 col-sm-6 col-md-5">
					<h1 class="blue">Connexion PDN</h1>
					<div class="orange-divider"> </div>
			</div>
	</div>

    <div class="container form-group d-flex justify-content-center mt-3">

        <form action="" method="post" name="login">
            <div class="form-group">
                <input type="text" class="form-control-sm borderInput col-12" id="idMail" name="login_pdn" placeholder="Identifiant">
            </div>
            <div class="form-group">
                <input type="password" class="form-control-sm borderInput col-12" id="mdp" name="mdp_pdn" placeholder="Mot de passe">
            </div>
            <div class="form-group d-flex justify-content-center"></br>
                <button type="submit" name="submit" id="ValiderConnexion" class="btn btn-warning mb-2">Valider</button>
            </div>

            <?php if (! empty($message)) { ?>
                <p class="text-center"><?php echo $message; ?></p>
            <?php } ?>
        </form>
    </div>

</section>

<footer class = "text-center blue-bg footer_conn">
    <h5 class = "pt-2"><a class="text-white liens" href="https://twitter.com/coordopdn93">FOL93</a> © <?php echo date('Y')?> / Tous droits réservés</h5>
    <a class="text-white liens" href="https://www.facebook.com/sindykolodziejczyk.coordopdn"><i class="fab fa-facebook"></i></a>&nbsp;&nbsp;
    <a class="text-white liens" href="https://twitter.com/coordopdn93"><i class="fab fa-twitter"></i></a>&nbsp;&nbsp;
    <a class="text-white liens" href="mailto:fol93.coordopdn93@gmail.com"><i class="fas fa-envelope"></i></a>&nbsp;&nbsp;
</footer>

</body>

<script src="js/connexion.js"></script>
<script src="js/fonctionsajax.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
