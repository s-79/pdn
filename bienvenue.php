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
<div class="d-grid gap-2 col-2 mx-auto">
  <button class="btn btn-outline-primary mt-4" type="button" onclick="document.location='form.php'">Remplir le formulaire</button>
  <button class="btn btn-outline-primary mt-4" type="button">Consulter les statistiques</button>
  <button class="btn btn-outline-primary mt-4" type="button">Partager une ressource</button>
</div>

</body>

<script src="js/functions.js"></script>

</html>
