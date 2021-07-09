// ---------------------------------------------------------------------------- Récupération et chargement du contenu php depuis une autre page
$(function(){
  // --------------------------------------------------------------------------- Mettre en valeur le menu actif
	$("#menuderoulantPres").toggleClass("nav-link-toggle");

    let reference = sessionStorage.getItem("ref");
    if(reference === "1_0" || reference === "") {
    $("#contenuPres").load("pres/1_1a.php");
    sessionStorage.setItem("ref", "" );
    }
    if(reference === "1_1") {
    $("#contenuPres").load("pres/1_1a.php");
    sessionStorage.setItem("ref", "" );
    }
    if(reference === "1_2") {
    $("#contenuPres").load("pres/1_2a.php");
    sessionStorage.setItem("ref", "" );
    }
    if(reference === "1_3") {
    $("#contenuPres").load("pres/1_3a.php");
    sessionStorage.setItem("ref", "" );
    }
    if(reference === "2_1") {
    $("#contenuPres").load("pres/2_1a.php");
    sessionStorage.setItem("ref", "" );
    }
    if(reference === "2_2") {
    $("#contenuPres").load("pres/2_2a.php");
    sessionStorage.setItem("ref", "" );
    }
    if(reference === "2_3") {
    $("#contenuPres").load("pres/2_3a.php");
    sessionStorage.setItem("ref", "" );
    }
    if(reference === "3_0") {
    $("#contenuPres").load("pres/3_0.php");
    sessionStorage.setItem("ref", "" );
    }
});

// ---------------------------------------------------------------------------- Clic sur le lien "Voir les actions et projets dévéloppés par la FOL93 au fil des années"
$("body").delegate( "#modalFol93", "click", function() {
    $("#modalPres").modal("show");
});

// ---------------------------------------------------------------------------- Clic sur le bouton + du modal
$("body").delegate( "#plusModalpres", "click", function() {
	$("#projetsModalPres").toggleClass("d-none");
	// $("#plus").removeClass("fa-plus-circle");
	$("#plusModalpres").toggleClass("fa-minus-circle");
	$("#plusModalpres").toggleClass("fa-plus-circle");
});

// ---------------------------------------------------------------------------- Chargement du contenu php sur cette page
$("#menupres1_0").click(function(){
    $("#contenuPres").load("pres/1_1a.php");
});

$("#menupres1_1").click(function(){
    $("#contenuPres").load("pres/1_1a.php");
});

$("#menupres1_2").click(function(){
    $("#contenuPres").load("pres/1_2a.php");
});

$("#menupres1_3").click(function(){
    $("#contenuPres").load("pres/1_3a.php");
});

$("#menupres2_0").click(function(){
    $("#contenuPres").load("pres/2_1a.php");
});

$("#menupres2_1").click(function(){
    $("#contenuPres").load("pres/2_1a.php");
});

$("#menupres2_2").click(function(){
    $("#contenuPres").load("pres/2_2a.php");
});

$("#menupres2_3").click(function(){
    $("#contenuPres").load("pres/2_3a.php");
});

$("#menupres3_0").click(function(){
    $("#contenuPres").load("pres/3_0.php");
});

// ---------------------------------------------------------------------------- Configuration des flèches suivantes et précédentes pour "Le Dispositif"
$("body").delegate( "#fg1_1a", "click", function() {
    $("#contenuPres").load("pres/3_0.php");
});

$("body").delegate( "#fd1_1a", "click", function() {
    $("#contenuPres").load("pres/1_1b.php");
});

$("body").delegate( "#fg1_1b", "click", function() {
    $("#contenuPres").load("pres/1_1a.php");
});

$("body").delegate( "#fd1_1b", "click", function() {
    $("#contenuPres").load("pres/1_2a.php");
});

$("body").delegate( "#fg1_2a", "click", function() {
    $("#contenuPres").load("pres/1_1b.php");
});

$("body").delegate( "#fd1_2a", "click", function() {
    $("#contenuPres").load("pres/1_2b.php");
});

$("body").delegate( "#fg1_2b", "click", function() {
    $("#contenuPres").load("pres/1_2a.php");
});

$("body").delegate( "#fd1_2b", "click", function() {
    $("#contenuPres").load("pres/1_2c.php");
});

$("body").delegate( "#fg1_2c", "click", function() {
    $("#contenuPres").load("pres/1_2b.php");
});

$("body").delegate( "#fd1_2c", "click", function() {
    $("#contenuPres").load("pres/1_3a.php");
});

$("body").delegate( "#fg1_3a", "click", function() {
    $("#contenuPres").load("pres/1_2c.php");
});

$("body").delegate( "#fd1_3a", "click", function() {
    $("#contenuPres").load("pres/1_3b.php");
});

$("body").delegate( "#fg1_3b", "click", function() {
    $("#contenuPres").load("pres/1_3a.php");
});

$("body").delegate( "#fd1_3b", "click", function() {
    $("#contenuPres").load("pres/2_1a.php");
});

$("body").delegate( "#fg2_1a", "click", function() {
    $("#contenuPres").load("pres/1_3b.php");
});

$("body").delegate( "#fd2_1a", "click", function() {
    $("#contenuPres").load("pres/2_1b.php");
});

$("body").delegate( "#fg2_1b", "click", function() {
    $("#contenuPres").load("pres/2_1a.php");
});

$("body").delegate( "#fd2_1b", "click", function() {
    $("#contenuPres").load("pres/2_1c.php");
});

$("body").delegate( "#fg2_1c", "click", function() {
    $("#contenuPres").load("pres/2_1b.php");
});

$("body").delegate( "#fd2_1c", "click", function() {
    $("#contenuPres").load("pres/2_1d.php");
});

$("body").delegate( "#fg2_1d", "click", function() {
    $("#contenuPres").load("pres/2_1c.php");
});

$("body").delegate( "#fd2_1d", "click", function() {
    $("#contenuPres").load("pres/2_1e.php");
});

$("body").delegate( "#fg2_1e", "click", function() {
    $("#contenuPres").load("pres/2_1d.php");
});

$("body").delegate( "#fd2_1e", "click", function() {
    $("#contenuPres").load("pres/2_2a.php");
});

$("body").delegate( "#fg2_2a", "click", function() {
    $("#contenuPres").load("pres/2_1e.php");
});

$("body").delegate( "#fd2_2a", "click", function() {
    $("#contenuPres").load("pres/2_3a.php");
});

$("body").delegate( "#fg2_3a", "click", function() {
    $("#contenuPres").load("pres/2_2a.php");
});

$("body").delegate( "#fd2_3a", "click", function() {
    $("#contenuPres").load("pres/2_3b.php");
});

$("body").delegate( "#fg2_3b", "click", function() {
    $("#contenuPres").load("pres/2_3a.php");
});

$("body").delegate( "#fd2_3b", "click", function() {
    $("#contenuPres").load("pres/3_0.php");
});

$("body").delegate( "#fg3_0", "click", function() {
    $("#contenuPres").load("pres/2_3b.php");
});

$("body").delegate( "#fd3_0", "click", function() {
    $("#contenuPres").load("pres/1_1a.php");
});
