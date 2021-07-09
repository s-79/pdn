// On créé les variables qui permettent de venir cibler les éléments
const menu = document.querySelector('.menu');

// Création de la timeLine
const tl = new TimelineMax();
tl.fromTo(menu, 4,{x: "-2000%"}, {x: '0%', ease: Back.easeOut.config(0.3)}, "-=0.5")

// Popover
$(function(){
    $('[data-bs-toggle="popover"]').popover();
})

// Liens
$("#etqPres").click(function(){
  sessionStorage.setItem("ref", "" );
  sessionStorage.setItem("ref", "1_1" );
  window.location.href="pres.php";
});

$("#etqStr").click(function(){
  window.location.href="str.php";
});

$("#etqPdn").click(function(){
  window.location.href="prdn.php";
});

$("#etqRes").click(function(){
  window.location.href="ress.php";
});
