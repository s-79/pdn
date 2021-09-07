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
		<!--                                                                     Récupération de l'id dans un input invisible -->
		<div id="pdn_id" class="d-none"><?php echo $_SESSION['id']; ?></div>
		<h1 class="mb-0 bleu pointeur" onclick="document.location='bienvenue.php'">BIENVENUE <?php echo $_SESSION['prenom']; ?> !</h1>
		<a href="deconn.php" class="orange">Se déconnecter</a>
	</div>
	<form id="form_pdn_infos">
		<div class="d-flex justify-content-center mt-3">
			<div class="row formulaires">
				<div class="col-12 col-lg-6 col-xl-4" style="min-width:440px;">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">MODIFIER MES INFOS</h1>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="prenom" placeholder="Prénom">
							<label for="prenom">Prénom</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="nom" placeholder="Nom">
							<label for="nom">Nom</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="fonction" placeholder="Fonction">
							<label for="fonction">Fonction</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="structure" placeholder="Nom de la structure">
							<label for="structure">Nom de la structure</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="ville" placeholder="Ville">
							<label for="ville">Ville</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="mail" placeholder="Adresse mail">
							<label for="mail">Adresse mail</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-2">
							<input type="text" class="form-control" id="tel" placeholder="Téléphone">
							<label for="tel">Téléphone Pro</label>
						</div>
						<div class="mx-3 mt-3 py-1 ps-1 mb-4 pb-3 pt-2">
							<div class="form-check">
								<label class="form-check-label text-white" for="whatsapp">WhatsApp sur le téléphone pro</label>
								<input class="form-check-input" type="checkbox" value="" id="whatsapp">
							</div>
						</div>
					</div>
				</div>

				<div class="col-12 col-lg-6 col-xl-4" style="min-width:440px;">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">RÉSEAUX SOCIAUX</h1>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="facebook" placeholder="Facebook">
							<label for="facebook">Facebook</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="instagram" placeholder="Instagram">
							<label for="instagram">Instagram</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="snapchat" placeholder="Snapchat">
							<label for="snapchat">Snapchat</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="youtube" placeholder="Youtube">
							<label for="youtube">Youtube</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="twitter" placeholder="Twitter">
							<label for="twitter">Twitter</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="discord" placeholder="Discord">
							<label for="discord">Discord</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="twitch" placeholder="Twitch">
							<label for="twitch">Twitch</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="tiktok" placeholder="Tiktok">
							<label for="tiktok">Tiktok</label>
						</div>
					</div>
				</div>

				<div class="col-12 col-lg-6 col-xl-4" style="min-width:440px;">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">IMAGES ET PRÉSENTATIONS</h1>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="photo_pdn" placeholder="Lien vers une nouvelle photo du PDN">
							<label for="photo_pdn">Lien vers une nouvelle photo du PDN</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<textarea class="form-control" placeholder="Texte de présentation du PDN" id="pres_pdn" style="height:176px;"></textarea>
							<label for="pres_pdn">Présentation du PDN (700 car. max.)</label>
						</div>
						<div class="form-floating mx-3 mt-3 mb-3">
							<input type="text" class="form-control" id="image_str" placeholder="Lien vers une autre image de la structure">
							<label for="image_str">Lien vers une autre image de la structure</label>
						</div>
						<div class="form-floating mx-3 mt-3">
							<textarea class="form-control" placeholder="Texte de présentation de la structure" id="pres_str" style="height:176px;"></textarea>
							<label for="pres_str">Présentation de la structure (700 max.)</label>
						</div>
						<div class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
							<button type="button" id="pdn_modif_valide" class="btn btn-warning m-3 px-3" data-bs-toggle="modal" data-bs-target="#modalModifInfos">Modifier</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	</form>

	<!--                                                                            MODAL MODIF INFOS -->
	<div class="modal fade" id="modalModifInfos" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title orange">MODIFICATION DES INFOS PDN</h2>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div id="modifMess" class="modal-body py-3 bleu"></div>
				<div id="footer_modif_infos" class="modal-footer">
					<button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
				</div>
			</div>
		</div>
	</div>

</body>

<script src="js/functions.js" type="text/javascript"></script>
<script src="js/pdn_infos.js" type="text/javascript"></script>
<script src="js/sessionStorage.js"></script>

</html>
