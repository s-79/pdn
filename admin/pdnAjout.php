<?php include("header.php"); ?>

<!-- ml-5 mr-4 à la place de container ?  -->
<section class=" container mt-4">

    <h1 class="blue">les promeneurs</h1>
    <div class="orange-divider"> </div>

    <div class="mx-auto col-lg-6 pt-3 mt-5 mb-3 blue-bg">
        <h3 class ="orange bg-white text-center pt-2 pb-2">Ajouter un promeneur</h3><br>
        <form id="form1">
            <div class="form-group">
                <label class="control-label col-4"></label>
                <input class="form-check-input col-0" type="checkbox" value="actif" id="actif">
                <label class="form-check-label col-6" for="actif" id="labelActif">Actif</label>
            </div>
            <div class="form-group mt-3">
                <label for="nom" class="control-label col-4">Nom *</label>
                <input type="text" class="form-control-sm col-7" id="nom" placeholder="Nom">
            </div>
            <div class="form-group">
                <label for="prenom" class="control-label col-4">Prénom *</label>
                <input type="text" class="form-control-sm col-7" id="prenom" placeholder="Prénom">
            </div>
            <div class="form-group">
              <label for="structure" class="control-label col-4">Structure *</label>
              <select class="form-control-sm col-7" id="structure"> </select>
            </div>
            <div class="form-group">
              <label for="profession" class="control-label col-4">Profession *</label>
              <input type="text" class="form-control-sm col-7" id="profession" placeholder="Profession">
            </div>
            <div class="form-group d-flex align-items-left">
                <label for="email" class="control-label col-4">E-mail *</label>
                <input type="text" class="form-control-sm col-3" id="idMail" placeholder="Identifiant">
                <div class="input-group d-flex">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control-sm col-8" id="domaineMail" placeholder="Nom de domaine">
                </div>
            </div>
            <div class="form-group">
              <label for="portablePro" class="control-label col-4">Portable Pro</label>
              <input type="tel" class="form-control-sm col-7" id="portablePro" placeholder="Téléphone portable professionel">
            </div>
            <div class="form-group">
                <label for="whatsApp" class="control-label col-4">WhatsApp</label>
                <input class="form-check-input col-0" type="checkbox" value="whatsApp" id="whatsApp">
                <label class="form-check-label col-6" for="actif" id="labelActif">Oui</label>
            </div>
            <div class="form-group">
                <label for="facebook" class="control-label col-4">Facebook *</label>
                <input type="text" class="form-control-sm col-7" id="facebook" placeholder="https://fr-fr.facebook.com/nomdutilisateur">
            </div>
            <div class="form-group">
                <label for="snapchat" class="control-label col-4">Snapchat</label>
                <input type="text" class="form-control-sm col-7" id="snapchat" placeholder="http://www.snapchat.com/add/nomdutilisateur">
            </div>
            <div class="form-group">
                <label for="instagram" class="control-label col-4">Instagram &nbsp;&nbsp; <a><i id="plus" class="fas fa-plus-circle"></i></a></label>
                <input type="text" class="form-control-sm col-7" id="instagram" placeholder="https://www.instagram.com/nomdutilisateur">
            </div>
        </form>
        <form id="formRS" class = "d-none">
            <div class="form-group">
                <label for="youtube" class="control-label col-4">YouTube</label>
                <input type="text" class="form-control-sm col-7" id="youtube" placeholder=" https://www.youtube.com/channel/identifiant">
            </div>
            <div class="form-group">
                <label for="twitter" class="control-label col-4">Twitter</label>
                <input type="text" class="form-control-sm col-7" id="twitter" placeholder=" https://twitter.com/nomdutilisateur">
            </div>
            <div class="form-group">
                <label for="discord" class="control-label col-4">Discord</label>
                <input type="text" class="form-control-sm col-7" id="discord" placeholder="https://discordapp.com/users/identifiant">
            </div>
            <div class="form-group">
                <label for="tiktok" class="control-label col-4">TikTok</label>
                <input type="text" class="form-control-sm col-7" id="tiktok" placeholder="https://www.tiktok.com/@nomdutilisateur">
            </div>
            <div class="form-group">
                <label for="twitch" class="control-label col-4">Twitch</label>
                <input type="text" class="form-control-sm col-7" id="twitch" placeholder="https://www.twitch.tv/nomdutilisateur">
            </div>
        </form>
        <!-- enctype pour l'upload de fichiers / id indispensable pour ajax-->
        <form id="form2" action="php/strUpImg.php" method="post" enctype="multipart/form-data">
            <label class="control-label col-4">Image</label>
            <div class="form-control-sm col-7 d-inline">
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixImgUrl" name="choixImg" class="custom-control-input" checked>
                    <label class="custom-control-label" for="choixImgUrl">Url Image</label>
                </div>
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixImgFile" name="choixImg" class="custom-control-input">
                    <label class="custom-control-label" for="choixImgFile">Fichier Image</label>
                </div>
                <div class="custom-control-sm custom-radio custom-control-inline mb-4">
                    <input type="radio" id="choixImgDefaut" name="choixImg" class="custom-control-input">
                    <label class="custom-control-label" for="choixImgDefaut">Défaut</label>
                </div>
            </div>
            <div class="form-group mt-1" id="imgUrl">
                <label for="imageUrl" class="control-label col-4">Image URL</label>
                <input type="texte" class="form-control-sm col-7" id="imageUrl" placeholder="URL de l'image : http://... jpg, jpeg, gif ou png">
            </div>
            <div class="form-group mb-3" id="imgFile">
                <label for="imageFile" class="control-label col-4">Image fichier</label>
                <input type="hidden" name="MAX_FILE_SIZE" value="2097152">
                <input type="file" name="nom_du_fichier" class="form-control-file-xs col-5" id="imageFile">
                <input type="submit" class="btn input-group-xs" value="OK">
                <div id=imgAff class="d-flex justify-content-center mt-2">
                </div>
            </div>
        </form>

        <form id="form3">
            <div class="form-group">
                <label for="presentation" class="control-label col-4">Présentation du PDN (700 caractères max.)</label>
                <textarea class="form-control d-inline col-7" id="presentation" rows="5"></textarea>
            </div>
            <div class="form-group">
                <label for="mdp" class="control-label col-4">Mot de passe</label>
                <input type="text" class="form-control-sm col-7" id="mdp" placeholder="Mot de passe du PDN sur le site">
            </div>
            <div class="form-group d-flex justify-content-center">
            </br><button type="button" id="btnvalide" class="btn btn-warning mb-3">Valider</button>
            </div>
        </form>
    </div>

</section>

<?php include("footer.php");?>

</body>

<script src="js/pdnUpImg.js"></script>
<script src="js/fonctionsjs.js"></script>
<script src="js/pdnAjout.js"></script>
<script src="js/fonctionsajax.js"></script>

</html>
