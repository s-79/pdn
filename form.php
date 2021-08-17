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
		<!--                                                                Récupération de l'id dans un input invisible -->
		<div id="pdn_id" class="d-none"><?php echo $_SESSION['id']; ?></div>
		<h1 class="mb-0 bleu text-uppercase">Bienvenue <?php echo $_SESSION['prenom']; ?> !</h1>
		<a href="deconn.php" class="orange">Se déconnecter</a>
	</div>
	<form id="form_form" class="mt-4">
		<div class="d-flex justify-content-center formDate">
			<div class="d-inline pt-2 me-3 fw-bold bleu" style="font-size:1.1em;">
				Formulaire du mois de
			</div>
			<div class="d-inline me-3" style="max-width:10em;">
				<select class="form-select" id="mois" aria-label="Mois">
				</select>
			</div>
			<div class="d-inline" style="max-width:10em;">
				<select class="form-select" id="annee" aria-label="Année">
				</select>
			</div>
		</div>
		<div class="d-flex justify-content-center">
			<div class="row formulaires">
				<!--                                                            Outils numériques-->
				<div class="col-12 col-lg-6 col-xxl-4 form_pad">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">Types de matériel utilisés</h1>
						<div class="row mt-3 ms-3">
							<div class="col-12 col-sm-5">
								<input class="form-check-input" type="checkbox" value="" id="smart">
								<label class="form-check-label text-white" for="smart">Smartphone</label>
							</div>
							<div class="col-12 col-sm-6">
								<input class="form-check-input" type="checkbox" value="" id="ordi">
								<label class="form-check-label text-white" for="ordi">Ordinateur</label>
							</div>
						</div>
						<div class="row mt-2 ms-3">
							<div class="col-12 col-sm-5">
								<input class="form-check-input" type="checkbox" value="" id="tablette">
								<label class="form-check-label text-white" for="tablette">Tablette</label>
							</div>
							<div class="col-12 col-sm-6">
								<input class="form-check-input" type="checkbox" value="" id="console">
								<label class="form-check-label text-white" for="console">Console de jeux</label>
							</div>
						</div>
						<h1 class="pt-3 mt-4">Présence en ligne</h1>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="nb_h" aria-label="Par semaine">
								<option selected value="">Séléctionner le nb d'heure par semaine</option>
								<option value="Moins de 4h">Moins de 4h</option>
								<option value="De 4 à 6h">De 4 à 6h</option>
								<option value="De 6 à 10h">De 6 à 10h</option>
								<option value="Plus de 10h">Plus de 10h</option>
							</select>
							<label for="nb_h">Par semaine</label>
						</div>
						<h1 class="pt-3 mt-4">Réseaux sociaux utilisés</h1>
						<div class="row mt-3 ms-3">
							<div class="col-12 col-sm-5">
								<input class="form-check-input" type="checkbox" value="facebook" id="facebook">
								<label class="form-check-label text-white" for="facebook">Facebook</label>
							</div>
							<div class="col-12 col-sm-6">
								<input class="form-check-input" type="checkbox" value="snapchat" id="snapchat">
								<label class="form-check-label text-white" for="snapchat">Snapchat</label>
							</div>
						</div>
						<div class="row mt-2 ms-3">
							<div class="col-12 col-sm-5">
								<input class="form-check-input" type="checkbox" value="instagram" id="instagram">
								<label class="form-check-label text-white" for="insta">Instagram</label>
							</div>
							<div class="col-12 col-sm-6">
								<input class="form-check-input" type="checkbox" value="whatsapp" id="whatsapp">
								<label class="form-check-label text-white" for="whatsapp">WhatsApp</label>
							</div>
						</div>
						<div class="row mt-2 mb-4 ms-3">
							<div class="col-12 col-sm-5">
								<input class="form-check-input" type="checkbox" value="autre1" id="autre1">
								<label class="form-check-label text-white" for="autre1">Autre 1</label>
							</div>
							<div class="col-12 col-sm-6">
								<input class="form-check-input" type="checkbox" value="autre2" id="autre2">
								<label class="form-check-label text-white" for="autre2">Autre 2</label>
							</div>
						</div>
					</div>
				</div>
				<!--                                                            Thématiques -->
				<div class="col-12 col-lg-6 col-xxl-4 form_pad">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">Thématiques abordées</h1>
						<!-- <div class="mb-3" style="overflow-y:scroll; overflow-x:hidden; height:157px; scrollbar-color: rgb(232, 80, 23) white;"> -->
						<div class="mb-3">
							<div class="row mt-3 ms-3">
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="lien">
									<label class="form-check-label text-white" for="lien">Lien Social</label>
								</div>
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="loisirs">
									<label class="form-check-label text-white" for="loisirs">Loisirs</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="socio_pro">
									<label class="form-check-label text-white d-inline" for="socio_pro">Acc. Socio-pro</label>
								</div>
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="parentalite">
									<label class="form-check-label text-white" for="parentalite">Parentalité</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="sante">
									<label class="form-check-label text-white" for="sante">Santé</label>
								</div>
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="addiction">
									<label class="form-check-label text-white" for="addiction">Addiction</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="sexualite">
									<label class="form-check-label text-white" for="sexualite">Sexualité</label>
								</div>
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="violence">
									<label class="form-check-label text-white" for="violence">(E)-violence</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="logement">
									<label class="form-check-label text-white" for="logement">Logement</label>
								</div>
								<div class="col-12 col-sm-6">
									<input class="form-check-input" type="checkbox" value="" id="autre_them">
									<label class="form-check-label text-white" for="autre_them">Autre</label>
								</div>
							</div>
						</div>

						<!--                                                            Initiatives -->
						<h1 class="pt-2 mt-4">Initiatives numériques</h1>
						<span class="text-white fw-bold">Ateliers à distance, challenges, évènements...</span>

						<div class="row mt-3 me-3">
							<div class="col-9 text-white mt-1">
								Combien en avez-vous organisées ce mois-ci ?
							</div>
							<div class="col-3">
								<select class="form-select mt-2" id="initiatives">
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
								</select>
							</div>
						</div>

						<div class="row mt-3 me-3 mb-3">
							<div class="col-9 text-white mt-1">
								Combien pensez-vous en organiser le mois prochain ?
							</div>
							<div class="col-3">
								<select class="form-select mt-2" id="next_initiatives">
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
								</select>
							</div>
						</div>

					</div>
				</div>

				<div class="col-12 col-lg-6 col-xxl-4 form_pad">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">Souhaits de formation</h1>
							<div class="form-floating mx-3 mt-3">
								<input type="text" class="form-control" id="formation" placeholder="Souhait(s) de formation">
								<label for="formation" class="ps-4">Souhait(s) de formation</label>
							</div>
						<h1 class="mb-3 pt-4 mt-3">Commentaires</h1>
						<div class="form-floating mx-3 mt-3">
							<textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:177px;"></textarea>
							<label for="commentaires">Commentaires et difficultés rencontrées</label>
						</div>
						<div class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
							<button type="button" id="form_create" class="btn btn-warning m-3 px-3" data-bs-toggle="modal" data-bs-target="#modalFormInfos">Enregistrer</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>

<?php include("form_modal.php"); ?>

</body>

<script src="js/functions.js"></script>
<script src="js/ajax_form.js"></script>
<script src="js/form.js"></script>


</html>
