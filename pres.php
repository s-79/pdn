<?php
session_start();
include("header.php"); ?>

<section id="sectionPres" class="containerPres">
    <div id="contenuPres" class="contenuPres">
        <div class="divDispositif">
            <img class="bulleDispositif" src="img/titres/bulleDispositif.png" height="140">
            <div class="titreDispositif">
                <h2 class="text-center text-uppercase font-weight-bold mt-2 bleu"><span id="fg1_1a"><i class="fas fa-arrow-alt-circle-left fa-lg pointeur liens pe-3"></i></span>Présentation de la démarche<span id="fd1_1a"><i  class="fas fa-arrow-alt-circle-right fa-lg pointeur liens ps-3"></i><span></h2><br>
            </div>
            <div class="contenuDispositif row">
                <div class="col-12 col-md-2 pt-2 pl-2 pr-2 text-center">
                    <img src="img/pres/Capture pdnD250.PNG">
                </div>
                <p id="pres1_1a" class="textPres col-12 col-md-10 m-auto" style="padding-left:5em;">
                    Cette démarche, initiée en Suède il y a une dizaine d’années, et expérimentée en France par certaines CAF, se fonde sur un constat : si les adultes professionnels de la jeunesse, éducateurs, animateurs sont présents là où se trouvent les jeunes (à l’école, dans les centres sociaux, dans la rue etc.), ils ne sont pas suffisamment présents dans la « rue numérique » d’Internet et des réseaux sociaux.</br></br>Lancé sur l'ensemble du territoire national par la CNAF en 2016, le dispositif « Promeneurs du Net, une présence éducative sur Internet » a pour objectif de poursuivre l’action éducative conduite sur les territoires par les différents acteurs engagés aux côtés des jeunes via les réseaux sociaux, et plus globalement via les outils de communication numériques.</p>
            </div>
        </div>
    </div>

<!--                                                                            MODAL DÉTAILS -->
<div class="modal fade" id="modalPres" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title fw-bold orange text-uppercase">Actions et projets dévéloppés</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center mb-2">
                <p class="m-auto" style="font-size:0.8em;line-height:1.3">
                    • Accompagner les acteurs associatifs en mobilisant les ressources et compétences disponibles grâce à son Centre de Ressources. Le travail mené dans ces différents cadres correspond également à une capacité d’accompagnement des acteurs éducatifs sur le territoire.</br></br>
                    • Une expertise pour l’accompagnement des projets de jeunes : <span class="pointeur"><i id="plusModalpres" class="fas fa-plus-circle"></i></span></p>
                    <p id="projetsModalPres" class="m-auto d-none" style="font-size:0.8em;line-height:1.3"></br>
                     ◦ Du développement et de l'accompagnement du projet “Junior association” qui s'inscrit dans une double finalité de développement de la citoyenneté active des jeunes et du renouvellement de la vie associative;</br></br>
                     ◦ Des formations des volontaires en service civique dans le département sur le champ de la citoyenneté et du volontariat;</br></br>
                     ◦ Le suivi et le double tutorat des jeunes menant une mission de service civique au sein des associations de la fédération;</br></br>
                     ◦ La réalisation de projets culturels et sportifs avec et pour les jeunes.</p>
                    <p class="m-auto"  style="font-size:0.8em;line-height:1.3"></br>
                    • Un contact direct et régulier avec des animateurs jeunesses, dont des salariés de la fédération (titulaires du BAFA, BAFD, BPJEPS, …), d'autres de notre réseau, et lors d’actions spécifiques : USEP et UFOLEP (animateurs sportifs), formations BAFA, services civiques …</br></br>
                    • Renforcer les capacités d'intervention des acteurs par des actions dans le cadre de la formation permanente </br></br>
                    • Une expérience significative en termes d’accompagnement des acteurs associatifs et des acteurs éducatifs, ( salariés, fonctionnaires et/ou bénévoles ) dans une démarche d'éducation populaire en mobilisant différents outils, ressources et compétences.</br></br>
                    • Capacité à mettre en réseau et en synergie différents acteur-ices d'horizon et de culture professionnelle diverse.</br></br>
                    • Une capacité à porter des dispositifs et d'animer des instances de pilotage composées de différents financeurs dans le but de croiser les regards sur les différents enjeux du territoire (notamment dans le cadre du portage du DLA depuis 2007, ou Coordination PDN fin 2017 ).</p>
            </div>
        </div>
    </div>
</div>

</section>

<footer id="footer_pres" class="text-center pt-4 pb-1">
    <h5>Ligue de l'enseignement - FOL93 © <?php echo date('Y')?> / Tous droits réservés</h5>
    <a class="bleu liens" href="https://www.facebook.com/sebastien.coordopdn"><i class="fab fa-facebook pe-2"></i></a>
    <a class="bleu liens" href="https://twitter.com/coordopdn93"><i class="fab fa-twitter pe-2"></i></a>
    <a class="bleu liens" href="mailto:fol93.coordopdn93@gmail.com"><i class="fas fa-envelope pe-2"></i></a>
</footer>

<script src="js/pres.js"></script>

</body>

</html>
