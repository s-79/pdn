<?php
	session_start();
	// Vérifier si l'utilisateur est connecté, si non redirection vers la page de connexion
	if(!isset($_SESSION["id_pdn"], $_SESSION["prenom_pdn"], $_SESSION["nom_pdn"])){
		header("Location: connexion.php");
		exit();
	}
include("header.php");
?>

<section class=" container mt-4 d-block">

    <h1 class="blue">connexion</h1>
    <div class="orange-divider"> </div>

		<div class="text-center mt-3">
			<h2 class="mb-0">Bienvenue <?php echo $_SESSION['prenom_pdn']; ?> !</h2>
			<a href="deconnexion.php" class="orange">Se déconnecter</a>
		</div>

    <div class="bienvenuResp mx-auto col-xl-7 pt-3 mt-2 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Proposer une ressource</h3><br>

        <form id="form1">
					<div class="form-group d-none">
							<label for="idPdn" class="control-label col-4">Identifiant Pdn</label>
							<input type="text" class="form-control-sm col-1" id="idPdn" value="<?php echo $_SESSION['id_pdn']; ?>" disabled>
					</div>
            <div class="form-group">
                <label for="nomPdn" class="control-label col-4">Proposée par</label>
                <input type="text" class="form-control-sm col-7" id="nomPdn" value="<?php echo $_SESSION['prenom_pdn'].' '.$_SESSION['nom_pdn']; ?>" disabled>
            </div>
            <div class="form-group mt-3">
                <label for="nom" class="control-label col-4">Nom de la ressource *</label>
                <input type="text" class="form-control-sm col-7" id="nom" placeholder="Nom de la ressource">
            </div>
            <div class="form-group">
              <label for="cat" class="control-label col-4">Filtrer par catégorie :</label>
              <select class="form-control-sm col-7" id="cat"><option value="0">Toutes les catégories</option></select>
            </div>
            <div class="form-group">
              <label for="them" class="control-label col-4">Choisir une thématique *</label>
              <select class="form-control-sm col-7" id="them"><option value="0">Choisir une thématique</option></select>
            </div>
            <div class="form-group">
              <label class="control-label col-4"></label>
              <label class="control-label col-7 pl-0">Ajouter une 2ème thématique &nbsp;&nbsp;<span id="spanPlus2"><i id="plus2"class="fas fa-plus-circle"></i></span></label>
            </div>
            <div id="divThem2" class="d-none">
                <div class="form-group">
                  <label for="cat2" class="control-label col-4">Filtrer par catégorie :</label>
                  <select class="form-control-sm col-7" id="cat2"><option value="0">Toutes les catégories</option></select>
                </div>
                <div class="form-group">
                  <label for="them2" class="control-label col-4">Choisir une thématique</label>
                  <select class="form-control-sm col-7" id="them2"><option value="0">Choisir une thématique</option></select>
                </div>
                <div class="form-group">
                  <label class="control-label col-4"></label>
                  <label class="control-label col-7 pl-0">Ajouter une 3ème thématique &nbsp;&nbsp;<span id="spanPlus3"><i id="plus3" class="fas fa-plus-circle"></i></span></label>
                </div>
            </div>
            <div id="divThem3" class="d-none">
                <div class="form-group">
                  <label for="cat3" class="control-label col-4">Filtrer par catégorie :</label>
                  <select class="form-control-sm col-7" id="cat3"><option value="0">Toutes les catégories</option></select>
                </div>
                <div class="form-group">
                  <label for="them3" class="control-label col-4">Choisir une thématique</label>
                  <select class="form-control-sm col-7" id="them3"><option value="0">Choisir une thématique</option></select>
                </div>
                <div class="form-group">
                  <label class="control-label col-4"></label>
                  <label class="control-label col-7 pl-0">Ajouter une 4ème thématique &nbsp;&nbsp;<span id="spanPlus4"><i id="plus4" class="fas fa-plus-circle"></i></span></label>
                </div>
            </div>
            <div id="divThem4" class="d-none">
                <div class="form-group">
                  <label for="cat4" class="control-label col-4">Filtrer par catégorie :</label>
                  <select class="form-control-sm col-7" id="cat4"><option value="0">Toutes les catégories</option></select>
                </div>
                <div class="form-group">
                  <label for="them4" class="control-label col-4">Choisir une thématique</label>
                  <select class="form-control-sm col-7" id="them4"><option value="0">Choisir une thématique</option></select>
                </div>
                <div class="form-group">
                  <label class="control-label col-4"></label>
                  <label class="control-label col-7 pl-0">Ajouter une 5ème thématique &nbsp;&nbsp;<span id="spanPlus5"><i id="plus5" class="fas fa-plus-circle"></i></span></label>
                </div>
            </div>
            <div id="divThem5" class="d-none">
                <div class="form-group">
                  <label for="cat5" class="control-label col-4">Filtrer par catégorie :</label>
                  <select class="form-control-sm col-7" id="cat5"><option value="0">Toutes les catégories</option></select>
                </div>
                <div class="form-group">
                  <label for="them5" class="control-label col-4">Choisir une thématique</label>
                  <select class="form-control-sm col-7" id="them5"><option value="0">Choisir une thématique</option></select>
                </div>
            </div>
            <div class="form-group">
                <label for="description" class="control-label col-4 align-top">Description * (700 caractères max.)</label>
                <textarea class="form-control d-inline col-7" id="description" rows="5"></textarea>
            </div>
        </form>

        <form id="form2" action="php/outUpImg.php" method="post" enctype="multipart/form-data">
            <label class="control-label col-4">Image d'illustration</label>
            <div class="form-control-sm col-7 d-inline">
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixImgUrl" name="choixImg" class="custom-control-input" checked>
                    <label class="custom-control-label" for="choixImgUrl">Image sur Internet</label>
                </div>
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixImgFile" name="choixImg" class="custom-control-input">
                    <label class="custom-control-label" for="choixImgFile">Image sur l'ordinateur</label>
                </div>
            </div>
            <div class="form-group mt-1" id="imgUrl">
                <label for="imageUrl" class="control-label col-4">Image sur Internet</label>
                <input type="texte" class="form-control-sm col-7" id="imageUrl" placeholder="URL de l'image : http://... jpg, jpeg, gif ou png">
            </div>
            <div class="form-group mb-3" id="imgFile">
                <label for="imageFile" class="control-label col-4">Image sur l'ordinateur</br>jpg, gif ou png < 1Mo</label>
                <!-- 1 048 576 octets (bytes) => 1 Mo (Mégabytes) -->
                <input type="hidden" name="MAX_FILE_SIZE" value="1048576">
                <input type="file" name="nom_du_fichier" class="form-control-file-xs col-5" id="imageFile">
                <input type="submit" class="btn input-group-xs" value="OK">
                <div id=imgAff class="d-flex justify-content-center mt-2">
                </div>
            </div>
        </form>

        <form id="form3" action="php/outUpFile.php" method="post" enctype="multipart/form-data">
            <label class="control-label col-4">Fichier de la ressource</label>
            <div class="form-control-sm col-7 d-inline">
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixFileUrl" name="choixImg" class="custom-control-input" checked>
                    <label class="custom-control-label" for="choixFileUrl">Fichier sur Internet</label>
                </div>
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixLocalFile" name="choixImg" class="custom-control-input">
                    <label class="custom-control-label" for="choixLocalFile">Fichier sur l'ordinateur</label>
                </div>
            </div>
            <div class="form-group mt-1" id="fichierUrl">
                <label for="fileUrl" class="control-label col-4">Fichier sur Internet</label>
                <input type="texte" class="form-control-sm col-7" id="fileUrl" placeholder="URL du fichier : http://... pdf, doc, odt">
            </div>
            <div class="form-group mb-3" id="fichierLocal">
                <label for="localFile" class="control-label col-4">Fichier sur l'ordinateur</br>pdf, doc ou odt < 3Mo</label>
                <!-- 3 145 728 octets (bytes) => 3 Mo (Mégabytes) -->
                <input type="hidden" name="MAX_FILE_SIZE" value="3145728">
                <input type="file" name="nom_du_fichier" class="form-control-file-xs col-5" id="localFile">
                <input type="submit" class="btn input-group-xs" value="OK">
                <div id=fileAff class="d-flex justify-content-center mt-2">
                </div>
            </div>
        </form>

        <form id="form4" method="post">
            <div class="form-group mt-3">
                <label for="age" class="control-label col-4">Age du public</label>
                <input type="text" class="form-control-sm col-7" id="age" placeholder="Tout public / - de 16 ans / + de 18 ans...">
            </div>
            <div class="form-group mt-3">
                <label for="nom_editeur" class="control-label col-4">Nom de l'éditeur</label>
                <input type="text" class="form-control-sm col-7" id="nom_editeur" placeholder="Nom de l'éditeur de la ressource">
            </div>
            <div class="form-group mt-3">
                <label for="site_editeur" class="control-label col-4">Site de l'éditeur</label>
                <input type="text" class="form-control-sm col-7" id="site_editeur" placeholder="Site Internet de l'éditeur de la ressource">
            </div>
            <div class="form-group d-flex justify-content-center">
						</br><button type="submit" id="btnvalide" value="btnvalide" name="btnvalide" class="btn btn-warning mb-3">Valider</button>

						<!-- Procédure d'envoi du mail déplacé vers outAjoutPdn pour éviter d'avoir un mail à chaque actualisation et s'assurer qu'il est envoyé après les vérif JS -->
						<?php if(isset($_POST['btnvalide'])){
							// $headers ='From: "Promeneurs du Net 93"<no-reply@pdn93.fr>'."\n";
							// $headers .='Content-Type: text/html; charset="utf-8"'."\n";
							// $headers .='Content-Transfer-Encoding: 8bit';
							// $message = '<html><body> a proposé un nouvel outil sur le site Promeneurs du Net 93.</br></br><a href="http://anomalies.fr/admin/outModif.php">Se connecter à l\'interface d\'administration</a></body></html>';
							// mail('sebastien.trouve@mailo.com', 'Nouvel outil sur le site Promeneurs du Net 93', $_SESSION['prenom_pdn'].' '.$_SESSION['nom_pdn'].$message, $headers);
							}
						?>

            </div>
        </form>
    </div>

</section>

<?php include("footer.php");?>

</body>

<script src="js/bienvenue.js"></script>
<script src="js/fonctionsajax.js"></script>
<script src="js/outUpImg.js"></script>
<script src="js/outUpFile.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/sessionStorage.js"></script>

</html>
