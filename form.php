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
				<input type="text" class="form-control" id="structure" placeholder="Structure" disabled>
				<label for="structure">Structure</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="ville" placeholder="Ville" disabled>
				<label for="ville">Ville</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-3">
				<input type="text" class="form-control" id="nb_pdn_act" placeholder="Nombre de PDN actifs" disabled>
				<label for="nb_pdn_act">Nombre de PDN actifs</label>
			</div>
			<div class="form-floating mx-3 mt-3 mb-4">
				<input type="text" class="form-control" id="nb_pdn_lab" placeholder="Nombre de PDN labelisés" disabled>
				<label for="nb_pdn_lab">Nombre de PDN labelisés</label>
			</div>
			<div class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
				<button type="button" id="pdn_modif" class="btn btn-warning m-3 px-3">Modifier</button>
				<button type="button" id="pdn_valide" class="btn btn-danger m-3">Confirmer</button>
			</div>
		</div>
	</div>
	<form id="form_form" class="d-none mt-3">
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
						<h1 class="pt-4">Présence en ligne</h1>
						<div class="form-floating mx-3 mt-3">
							<select class="form-select type_m" id="presence" aria-label="Présence en ligne par semaine">
								<option selected value="">Séléctionner le nb d'heure par semaine</option>
								<option value="Moins de 4h">Moins de 4h</option>
								<option value="De 4 à 6h">De 4 à 6h</option>
								<option value="De 6 à 10h">De 6 à 10h</option>
								<option value="Plus de 10h">Plus de 10h</option>
							</select>
							<label for="organise">Présence en ligne par semaine</label>
						</div>
						<h1 class="pt-4">Réseaux sociaux utilisés</h1>
						<div class="row mt-3 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="" id="facebook">
								<label class="form-check-label text-white" for="facebook">Facebook</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="" id="snapchat">
								<label class="form-check-label text-white" for="snapchat">Snapchat</label>
							</div>
						</div>
						<div class="row mt-2 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="" id="inst">
								<label class="form-check-label text-white" for="insta">Instagram</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="" id="whatsapp">
								<label class="form-check-label text-white" for="whatsapp">WhatsApp</label>
							</div>
						</div>
						<div class="row mt-2 mb-4 ms-3">
							<div class="col-5">
								<input class="form-check-input" type="checkbox" value="" id="autre1">
								<label class="form-check-label text-white" for="autre1">Autre 1</label>
							</div>
							<div class="col-6">
								<input class="form-check-input" type="checkbox" value="" id="autre2">
								<label class="form-check-label text-white" for="autre2">Autre 2</label>
							</div>
						</div>
					</div>
				</div>
				<!--                                                            Thématiques -->
				<div class="col-12 col-lg-6 col-xl-4">
					<div class="bg_bleu m-3 py-2 px-3 rounded rounded-3 div_bleu">
						<h1 class="pt-3">Thématiques abordées</h1>
						<div class="mb-3" style="overflow-y:scroll; overflow-x:hidden; height:125px; scrollbar-color: rgb(232, 80, 23) white ;">
							<div class="row mt-3 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="lien">
									<label class="form-check-label text-white" for="lien">Lien Social</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="vie">
									<label class="form-check-label text-white" for="vie">Vie quotidienne</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="socio_pro">
									<label class="form-check-label text-white" for="socio_pro">Acc. Socio-pro</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="mobilite">
									<label class="form-check-label text-white" for="mobilite">Mobilité</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="famille">
									<label class="form-check-label text-white" for="famille">Famille</label>
								</div>
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="sante">
									<label class="form-check-label text-white" for="autsantere1">Santé</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="addiction">
									<label class="form-check-label text-white" for="addiction">Addiction</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="sexualite">
									<label class="form-check-label text-white" for="sexualite">Sexualité</label>
								</div>
							</div>
							<div class="row mt-2 ms-3">
								<div class="col-5">
									<input class="form-check-input" type="checkbox" value="" id="violence">
									<label class="form-check-label text-white" for="violence">Violence</label>
								</div>
								<div class="col-6">
									<input class="form-check-input" type="checkbox" value="" id="e-violence">
									<label class="form-check-label text-white" for="e-violence">E-violence</label>
								</div>
							</div>
							<div class="row mt-2 mb-2 pb-3 pb-1 ms-3">
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
						<h1 class="pt-3 mb-3">Initiatives numériques</h1>
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
								<input class="form-check-input" type="radio" name="initiatives1" id="i0" value="0">
								<label class="form-check-label text-white m-0" for="i0">0</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives1" id="i1" value="1">
								<label class="form-check-label text-white m-0" for="i1">1</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives1" id="i2" value="2">
								<label class="form-check-label text-white m-0" for="i2">2</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives1" id="i3" value="3">
								<label class="form-check-label text-white m-0" for="i3">3</label>
							</div>
							<div class="form-check form-check-inline px-3 mx-3">
								<input class="form-check-input" type="radio" name="initiatives1" id="i4" value="4">
								<label class="form-check-label text-white m-0" for="i4">4</label>
							</div>
						</div>
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
						<h1 class="mb-3 pt-3 mt-4">Commentaires et difficultés</h1>
						<div class="form-floating mx-3 mt-3">
							<textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:145px;"></textarea>
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

<!--                                                                             ! ! ! - - M O D A L   R S - - ! ! ! -->

<div class="modal fade" id="modal_facebook" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fw-bold" id="exampleModalLabel">Sur l'application Facebook...</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
	  <div class="modal-body">
		  <div class="form-floating mx-3 mt-3">
			  <select class="form-select type_m" id="satisfaction" aria-label="Niveau de satisfaction par rapport à l'utilisation de cet outil">
				  <option selected value="">Niveau de satisfaction et de maîtrise du PDN</option>
				  <option value="Pauvre">Pauvre</option>
				  <option value="Moyen">Moyen</option>
				  <option value="Bon">Bon</option>
				  <option value="Excellent">Excellent</option>
			  </select>
			  <label for="satisfaction">Niveau de satisfaction et de maîtrise du PDN</label>
		  </div>
		  <div class="form-floating mx-3 mt-3">
			  <select class="form-select type_m" id="age" aria-label="Tranche d'âge principale">
				  <option selected value="">Tranche d'âge principale</option>
				  <option value="De 12 à 17 ans">De 12 à 17 ans</option>
				  <option value="De 18 à 25 ans">De 18 à 25 ans</option>
				  <option value="Plus de 25 ans">Plus de 25 ans</option>
			  </select>
			  <label for="age">Tranche d'âge principale</label>
		  </div>
		  <div class="form-floating mx-3 mt-3">
			  <select class="form-select type_m" id="followers" aria-label="Nombre de followers">
				  <option selected value="">Nombre de followers</option>
				  <option value="Moins de 4h">Moins de 10</option>
				  <option value="De 4 à 6h">De 10 à 50</option>
				  <option value="De 6 à 10h">De 50 à 100</option>
				  <option value="Plus de 10h">Plus de 100</option>
			  </select>
			  <label for="followers">Nombre de followers</label>
		  </div>

		  <div class="form-floating mx-3 mt-3">
			  <select class="form-select type_m" id="acc" aria-label="Nombre d'accompagnement ce mois-ci">
				  <option selected value="">Nombre d'accompagnement ce mois-ci</option>
				  <option value="Aucun">Aucun</option>
				  <option value="Moins de 5">Moins de 5</option>
				  <option value="De 5 à 10">De 5 à 10</option>
				  <option value="Plus de 10">Plus de 10</option>
			  </select>
			  <label for="acc">Nombre d'accompagnement ce mois-ci</label>
		  </div>
		  <div class="form-floating mx-3 mt-3">
			  <select class="form-select type_m" id="new_acc" aria-label="Nombre de nouveaux accompagnements">
				  <option selected value="">Nombre de nouveaux accompagnements</option>
				  <option value="Aucun">Aucun</option>
				  <option value="Moins de 5">Moins de 5</option>
				  <option value="De 5 à 10">De 5 à 10</option>
				  <option value="Plus de 10">Plus de 10</option>
			  </select>
			  <label for="new_acc">Nombre de nouveaux accompagnements</label>
		  </div>
		  <div class="form-floating mx-3 mt-3">
			  <select class="form-select type_m" id="new_acc" aria-label="Nb de messages courts et échanges informels">
				  <option selected value="">Nombre de messages courts et échanges informels</option>
				  <option value="Moins de 10">Moins de 10</option>
				  <option value="De 10 à 25">De 10 à 25</option>
				  <option value="De 25 à 50">De 25 à 50</option>
				  <option value="Plus de 50">Plus de 50</option>
			  </select>
			  <label for="new_acc">Nb de messages courts et échanges informels</label>
		  </div>
	  </div>
      <div class="modal-footer">
          <button id="btn_modal_facebook" type="button" class="btn btn-primary">Valider</button>
      </div>
    </div>
  </div>
</div>

<!--                                                                             ! ! ! - - M O D A L   I N I T I A T I V E S - - ! ! ! -->

<div class="modal fade" id="modal_init2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fw-bold" id="exampleModalLabel">Initiatives...</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
	  <div class="modal-body">
		  <button id="init1" class="btn btn-outline-primary mt-4" type="button">Initiative n°1</button>
  		  <button id="init2" class="btn btn-outline-primary mt-4" type="button">Initiative n°2</button>
		  <div id="div_init1" class="d-none init">
			  <h4 class="mt-3">Initiative n°1</h4>
			  <div class="form-floating mx-3 mt-3">
    			  <input type="date" class="form-control" id="date_init1" placeholder="Date de l'initiative *">
    			  <label for="date_init1">Date de l'initiative *</label>
    		  </div>
    		  <div class="form-floating mx-3 mt-3 mb-3">
    			  <input type="text" class="form-control" id="intitule_init1" placeholder="Intitulé">
    			  <label for="intitule_init1">Intitulé</label>
    		  </div>
    		  <div class="form-floating mx-3 mt-3">
    			  <select class="form-select type_m" id="them_init1" aria-label="Thématique">
    				  <option selected value="">Séléctionner la thématique</option>
    				  <option value="Lien Social (informel)">Lien Social (informel)</option>
    				  <option value="Vie quotidienne">Vie quotidienne</option>
    				  <option value="Acc. Socio-pro">Acc. Socio-pro</option>
    				  <option value="Famille">Famille</option>
    				  <option value="Mobilité">Mobilité</option>
    				  <option value="Santé">Santé</option>
    				  <option value="Addiction">Addiction</option>
    				  <option value="Violence">Violence</option>
    				  <option value="E-violence">E-violence</option>
    				  <option value="Logement">Logement</option>
    				  <option value="Sexualité">Sexualité</option>
    				  <option value="Autre">Autre</option>
    			  </select>
    			  <label for="them_init1">Thématique</label>
    		  </div>
    		  <div class="form-floating mx-3 mt-3">
    			  <input type="number" class="form-control" id="nb_jeunes_init1" placeholder="Nombre de jeunes">
    			  <label for="nb_jeunes_init1">Nombre de jeunes</label>
    		  </div>
    		  <div class="form-floating mx-3 mt-3">
    			  <select class="form-select type_m" id="age_init1" aria-label="Âge des jeunes">
    				  <option selected value="">Âge des jeunes</option>
    				  <option value="De 12 à 17 ans">De 12 à 17 ans</option>
    				  <option value="De 18 à 25 ans">De 18 à 25 ans</option>
    				  <option value="Plus de 25 ans">Plus de 25 ans</option>
    			  </select>
    			  <label for="age_init1">Âge des jeunes</label>
    		  </div>
		  </div>
		  <div id="div_init2" class="d-none init">
			  <h4 class="mt-3">Initiative n°2</h4>
			  <div class="form-floating mx-3 mt-3">
				  <input type="date" class="form-control" id="date_init2" placeholder="Date de l'initiative *">
				  <label for="date_init2">Date de l'initiative *</label>
			  </div>
			  <div class="form-floating mx-3 mt-3 mb-3">
				  <input type="text" class="form-control" id="intitule_init2" placeholder="Intitulé">
				  <label for="intitule_init2">Intitulé</label>
			  </div>
			  <div class="form-floating mx-3 mt-3">
				  <select class="form-select type_m" id="them_init2" aria-label="Thématique">
					  <option selected value="">Séléctionner la thématique</option>
					  <option value="Lien Social (informel)">Lien Social (informel)</option>
					  <option value="Vie quotidienne">Vie quotidienne</option>
					  <option value="Acc. Socio-pro">Acc. Socio-pro</option>
					  <option value="Famille">Famille</option>
					  <option value="Mobilité">Mobilité</option>
					  <option value="Santé">Santé</option>
					  <option value="Addiction">Addiction</option>
					  <option value="Violence">Violence</option>
					  <option value="E-violence">E-violence</option>
					  <option value="Logement">Logement</option>
					  <option value="Sexualité">Sexualité</option>
					  <option value="Autre">Autre</option>
				  </select>
				  <label for="them_init2">Thématique</label>
			  </div>
			  <div class="form-floating mx-3 mt-3">
				  <input type="number" class="form-control" id="nb_jeunes_init2" placeholder="Nombre de jeunes">
				  <label for="nb_jeunes_init2">Nombre de jeunes</label>
			  </div>
			  <div class="form-floating mx-3 mt-3">
				  <select class="form-select type_m" id="age_init2" aria-label="Âge des jeunes">
					  <option selected value="">Âge des jeunes</option>
					  <option value="De 12 à 17 ans">De 12 à 17 ans</option>
					  <option value="De 18 à 25 ans">De 18 à 25 ans</option>
					  <option value="Plus de 25 ans">Plus de 25 ans</option>
				  </select>
				  <label for="age_init2">Âge des jeunes</label>
			  </div>
		  </div>
	  </div>
      <div class="modal-footer">
          <button id="btn_modal_facebook" type="button" class="btn btn-primary">Valider</button>
      </div>
    </div>
  </div>
</div>

</body>

<script src="js/functions.js"></script>
<script src="js/form.js"></script>

</html>
