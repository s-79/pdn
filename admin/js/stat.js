$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel
    $("#menu_stat").toggleClass("nav-link-toggle");

    stat_Reset();
});

const stat_Reset = () => {
    ajaxStat("support", 60);
    ajaxStat("duree", 100);
}
