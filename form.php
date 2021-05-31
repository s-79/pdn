<?php
	session_start();
	// Vérifier si le PDN est connecté, si non redirection vers la page de connexion
	if(!isset($_SESSION["id"], $_SESSION["prenom"])){
		header("location: conn.php");
		exit();
	}
include("header.php");
?>

<div class="container-fluid" style="margin-top: 6.5em">
	<div class="text-center mt-4">
		<h2 class="mb-0">Bienvenue <?php echo $_SESSION['prenom']; ?> !</h2>
		<a href="deconn.php" class="orange">Se déconnecter</a>
	</div>
    <div id="form_coordo" class="d-flex justify-content-center mt-3">
		<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
			<!--                                                                Coordonnées-->
			<h1 class="pt-3">Coordonnées</h1>
			<!--                                                                Récupération de l'id dans un input invisible -->
			<input type="text" class="form-control d-none" id="id_pdn">

			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="prenom" placeholder="Prénom" disabled>
				<label for="prenom">Prénom</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="nom" placeholder="Nom" disabled>
				<label for="nom">Nom</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="fonction" placeholder="Fonction" disabled>
				<label for="fonction">Fonction</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="tel" placeholder="Téléphone" disabled>
				<label for="telœ">Téléphone</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="mail" placeholder="Adresse mail" disabled>
				<label for="mail">Adresse mail</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="structure" placeholder="Structure" disabled>
				<label for="structure">Structure</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="ville" placeholder="Ville" disabled>
				<label for="ville">Ville</label>
			</div>
			<div class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
				<button type="button" id="pdn_modif" class="btn btn-warning m-3 px-3">Modifier</button>
				<button type="button" id="pdn_valide" class="btn btn-danger m-3">Confirmer</button>
			</div>
		</div>
	</div>
	<form id="form_form" class="d-none mt-4">
		<div class="d-flex justify-content-center">
			<div class="row formulaires">
				<!--                                                            Outils numériques-->
				<div class="col-12 col-lg-6 col-xl-4">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">Types de matériel utilisés</h1>
						<div class="row mt-3 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="" id="smartphone">
								<label class="form-check-label text-white" for="smartphone">Smartphone</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="" id="ordinateur">
								<label class="form-check-label text-white" for="ordinateur">Ordinateur</label>
							</div>
						</div>
						<div class="row mt-2 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="" id="tablette">
								<label class="form-check-label text-white" for="tablette">Tablette</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="" id="console">
								<label class="form-check-label text-white" for="console">Console de jeux</label>
							</div>
						</div>
						<h1 class="pt-3 mt-4">Présence en ligne</h1>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select" id="presence" aria-label="Présence en ligne par semaine">
								<option selected value="">Séléctionner le nb d'heure par semaine</option>
								<option value="Moins de 4h">Moins de 4h</option>
								<option value="De 4 à 6h">De 4 à 6h</option>
								<option value="De 6 à 10h">De 6 à 10h</option>
								<option value="Plus de 10h">Plus de 10h</option>
							</select>
							<label for="organise">Présence en ligne par semaine</label>
						</div>
						<h1 class="pt-3 mt-4">Réseaux sociaux utilisés</h1>
						<div class="row mt-3 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="Facebook" id="facebook">
								<label class="form-check-label text-white" for="facebook">Facebook</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="Snapchat" id="snapchat">
								<label class="form-check-label text-white" for="snapchat">Snapchat</label>
							</div>
						</div>
						<div class="row mt-2 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="Instagram" id="instagram">
								<label class="form-check-label text-white" for="insta">Instagram</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="WhatsApp" id="whatsapp">
								<label class="form-check-label text-white" for="whatsapp">WhatsApp</label>
							</div>
						</div>
						<div class="row mt-2 mb-4 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="Autre 1" id="autre1">
								<label class="form-check-label text-white" for="autre1">Autre 1</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="Autre 2" id="autre2">
								<label class="form-check-label text-white" for="autre2">Autre 2</label>
							</div>
						</div>
					</div>
				</div>
				<!--                                                            Thématiques -->
				<div class="col-12 col-lg-6 col-xl-4">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">Thématiques abordées</h1>
						<!-- <div class="mb-3" style="overflow-y:scroll; overflow-x:hidden; height:157px; scrollbar-color: rgb(232, 80, 23) white;"> -->
						<div class="mb-3">
							<div class="row mt-3 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="lien">
									<label class="form-check-label text-white" for="lien">Lien Social</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="loisirs">
									<label class="form-check-label text-white" for="loisirs">Loisirs</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="socio_pro">
									<label class="form-check-label text-white" for="socio_pro">Acc. Socio-pro</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="parentalite">
									<label class="form-check-label text-white" for="parentalite">Parentalité</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="sante">
									<label class="form-check-label text-white" for="autsantere1">Santé</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="addiction">
									<label class="form-check-label text-white" for="addiction">Addiction</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="sexualite">
									<label class="form-check-label text-white" for="sexualite">Sexualité</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="violence">
									<label class="form-check-label text-white" for="violence">(E)-violence</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="logement">
									<label class="form-check-label text-white" for="logement">Logement</label>
								</div>
								<div class="col-6">
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
								Combien en avez-vous organisées<br>ce mois-ci ?
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
								Combien pensez-vous en organiser<br>le mois prochain ?
							</div>
							<div class="col-3">
								<select class="form-select mt-2" id="next_nitiatives">
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

						<!--                                                            Initiatives -->
						<!-- <h1 class="pt-3 mt-3 mb-3">Initiatives numériques</h1>
						<span class="text-white mt-4">Combien avez-vous organisé d'ateliers à distance, <br>challenges, animations, évènements... ce mois-ci ?</span>
						<div class="d-flex justify-content-center p-0 mt-2 mb-3">
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives" id="i0" value="0">
								<label class="form-check-label text-white m-0" for="i0">0</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives" id="i1" value="1">
								<label class="form-check-label text-white m-0" for="i1">1</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives" id="i2" value="2">
								<label class="form-check-label text-white m-0" for="i2">2</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives" id="i3" value="3">
								<label class="form-check-label text-white m-0" for="i3">3</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives" id="i4" value="4">
								<label class="form-check-label text-white m-0" for="i4">4</label>
							</div>
						</div>
						<span class="text-white">Combien pensez-vous en faire le mois prochain ?</span>
						<div class="d-flex justify-content-center p-0 mt-2 mb-3">
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="next_initiatives" id="next_i0" value="0">
								<label class="form-check-label text-white m-0" for="i0">0</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="next_initiatives" id="next_i1" value="1">
								<label class="form-check-label text-white m-0" for="i1">1</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="next_initiatives" id="next_i2" value="2">
								<label class="form-check-label text-white m-0" for="i2">2</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="next_initiatives" id="next_i3" value="3">
								<label class="form-check-label text-white m-0" for="i3">3</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="next_initiatives" id="next_i4" value="4">
								<label class="form-check-label text-white m-0" for="i4">4</label>
							</div>
						</div> -->
					</div>
				</div>

				<div class="col-12 col-lg-6 col-xl-4">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">Souhaits de formation</h1>
						<!-- <div class="row mt-3 me-1"> -->
							<!-- <div class="form-floating mx-3 col-9">	 -->
							<div class="form-floating mx-3 mt-3">
								<input type="text" class="form-control" id="souhait" placeholder="Souhait(s) de formation">
								<label for="souhait" class="ps-4">Souhait(s) de formation</label>
							</div>
							<!-- <div class="pt-2 col-1">
								<i id="info_souhait" class="fa fa-info-circle fa-2x text-white pointeur pt-1" data-bs-toggle="modal" data-bs-target="#modal_select_pdn" data-toggle="tooltip" data-placement="top" title="Quelles thématiques souhaiteriez-vous approfondir dans le cadre du réseau Promeneurs du Net ?"></i>
							</div> -->
						<!-- </div> -->
						<h1 class="mb-3 pt-4 mt-3">Commentaires</h1>
						<div class="form-floating mx-3 mt-3">
							<textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:177px;"></textarea>
							<label for="commentaires">Commentaires et difficultés rencontrées</label>
						</div>
						<div id="btn_act_create" class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
							<button type="button" id="act_create" class="btn btn-warning m-3 px-3">Enregistrer</button>
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
<script src="js/form.js"></script>

</html>
