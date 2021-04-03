// On créé les variables qui permettent de venir cibler les éléments
const menu = document.querySelector('.menu');

// Création de la timeLine
const tl = new TimelineMax();

tl
.fromTo(menu, 4,{x: "-2000%"}, {x: '0%', ease: Back.easeOut.config(0.3)}, "-=0.5")

// Défilement doux vers les ancres nomées
$(function(){
    $("#menuPres a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
    });

    $('[data-toggle="popover"]').popover();
})

$("#menuProjet,#menuCoordo,#menuFinancement").click(function(){
  $("#contenuPres").removeClass("d-none");
});

$("#etqPres").click(function(){
  sessionStorage.setItem("ref", "" );
  sessionStorage.setItem("ref", "1_1" );
  window.location.href="presentation.php";
});

$("#etqStr").click(function(){
  window.location.href="structures.php";
});

$("#etqPdn").click(function(){
  window.location.href="promeneurs.php";
});

$("#etqRes").click(function(){
  window.location.href="ressources.php";
});
