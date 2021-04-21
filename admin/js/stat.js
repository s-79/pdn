$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel
    $("#menu_stat").toggleClass("nav-link-toggle");

    stat_Reset();

    //-------------------------------------------------------------------------- EVENEMENT CLICK USR LE BOUTON AFFICHER LES STATS
    // $("#btn_stats").click(function(){
    //     const type = $("#type").val();
    //     const support = $("#support").val();
    //     const duree = $("#duree").val();
    //
    //     if(!support) {
    //         alert("La séléction d'une support est obligatoire.")
    //     } else {
    //         $("#div_pdn").html('<h2 class="marine">PDN</h2><canvas id="pdn"></canvas>');
    //         ajaxStat("pdn", 100, type, support, duree);
    //
    //         $("#div_part").html('<h2 class="marine">Partenaires</h2><canvas id="part"></canvas>');
    //         ajaxStat("part", 40, type, support, duree);
    //
    //         $("#div_pers").html('<h2 class="marine">Autres participants</h2><canvas id="pers"></canvas>');
    //         ajaxStat("pers", 100, type, support, duree);
    //
    //         $("#div_ress").html('<h2 class="marine">Ressources</h2><canvas id="ress"></canvas>');
    //         ajaxStat("ress", 20, type, support, duree);
    //     }
    // });
});

const stat_Reset = () => {

    ajaxStat("type", 100);
    ajaxStat("support", 60);
    ajaxStat("duree", 100);
    ajaxStat("nb_pdn", 20);
}
