<?php
session_start();
include("header.php"); ?>

<section class="container containerPres">
    <div class="d-none">
        <h1 class="blue">Présentation</h1>
        <div class="orange-divider"> </div>
    </div>
    <div id="contenuPres" class="contenuPres">
    </div>

    <div class="modal fade" id="modalPres" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title orange text-uppercase" id="exampleModalLabel">actions et projets dévéloppés par la FOL93</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p class="text-justify m-auto" style="font-size:0.8em;line-height:1.3">
                        • Accompagner les acteurs associatifs en mobilisant les ressources et compétences disponibles grâce à son Centre de Ressources. Le travail mené dans ces différents cadres correspond également à une capacité d’accompagnement des acteurs éducatifs sur le territoire.</br></br>
                        • Une expertise pour l’accompagnement des projets de jeunes par le biais notamment du travail effectué dans le cadre : <span class="pointeur"><i id="plusModalpres" class="fas fa-plus-circle"></i></span></p>
                        <p id="projetsMoadlPres" class="text-justify m-auto d-none" style="font-size:0.8em;line-height:1.3"></br>
                         ◦ Du développement et de l'accompagnement du projet “Junior association” qui s'inscrit dans une double finalité de développement de la citoyenneté active des jeunes et du renouvellement de la vie associative;</br></br>
                         ◦ Des formations des volontaires en service civique dans le département sur le champ de la citoyenneté et du volontariat;</br></br>
                         ◦ Le suivi et le double tutorat des jeunes menant une mission de service civique au sein des associations de la fédération;</br></br>
                         ◦ La réalisation de projets culturels et sportifs avec et pour les jeunes.</p>
                        <p class="text-justify m-auto"  style="font-size:0.8em;line-height:1.3"></br>
                        • Un contact direct et régulier avec des animateurs jeunesses, dont des salariés de la fédération (titulaires du BAFA, BAFD, BPJEPS, …), d'autres de notre réseau, et lors d’actions spécifiques : USEP et UFOLEP (animateurs sportifs), formations BAFA, services civiques …</br></br>
                        • Renforcer les capacités d'intervention des acteurs par des actions dans le cadre de la formation permanente </br></br>
                        • Une expérience significative en termes d’accompagnement des acteurs associatifs et des acteurs éducatifs, ( salariés, fonctionnaires et/ou bénévoles ) dans une démarche d'éducation populaire en mobilisant différents outils, ressources et compétences.</br></br>
                        • Capacité à mettre en réseau et en synergie différents acteur-ices d'horizon et de culture professionnelle diverse.</br></br>
                        • Une capacité à porter des dispositifs et d'animer des instances de pilotage composées de différents financeurs dans le but de croiser les regards sur les différents enjeux du territoire (notamment dans le cadre du portage du DLA depuis 2007, ou Coordination PDN fin 2017 ).</p>
                </div>
                <div class="modal-footer d-block text-center mb-1">
                </div>
            </div>
        </div>
    </div>

</section>

<footer class = "text-center blue-bg footer_pres">
    <h5 class = "pt-2"><a class="text-white liens" href="https://twitter.com/coordopdn93">FOL93</a> © <?php echo date('Y')?> / Tous droits réservés</h5>
    <a class="text-white liens" href="https://www.facebook.com/sindykolodziejczyk.coordopdn"><i class="fab fa-facebook"></i></a>&nbsp;&nbsp;
    <a class="text-white liens" href="https://twitter.com/coordopdn93"><i class="fab fa-twitter"></i></a>&nbsp;&nbsp;
    <a class="text-white liens" href="mailto:fol93.coordopdn93@gmail.com"><i class="fas fa-envelope"></i></a>&nbsp;&nbsp;
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="js/presentation.js"></script>

</body>

</html>
