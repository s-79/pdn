// e c'est l'evenement - preventDefault annule celui-ci, ce qui signifie que chaque action par défaut se produisant normalement ne se produira pas.
$(document).ready(function (e) {
    $("#form2").on('submit',(function(e) {
		e.preventDefault();
        $.ajax({
	        url: "php/strUpImg.php",
	        type: "POST",
	        data:  new FormData(this),
	        contentType: false,
	        cache: false,
	        processData:false,
	        // beforeSend : function() {
	        //     // Supprime le preview et le message d'erreur s'il y en avait
	        //     $("#preview").fadeOut();
	        //     $("#err").fadeOut();
	        // },
	        success: function(data) {
                $("#imageUrl").val("");
                $("#imageUrl").val($("#imageUrl").val() + data);
                const imgAff = "<img src='../"+data+"' height='80'>";
                $("#imgAff").html(imgAff);
                $("#imageUrl")[0].disabled = true;
                $("#imgAff").fadeIn(1000);
	        },
	        error: function(e) {
	            alert(e);
	        }
        });
    }));
});
