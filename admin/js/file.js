// e c'est l'evenement - preventDefault annule celui-ci, ce qui signifie que chaque action par défaut se produisant normalement ne se produira pas.
$(document).ready(function (e) {
    $("#form2").on('submit',(function(e) {
        $("#message_admin_pdn").html("");
		e.preventDefault();
        $.ajax({
	        url: "php/file.php",
	        type: "POST",
	        data:  new FormData(this),
	        contentType: false,
	        cache: false,
	        processData:false,
	        success: function(data) {
                const regex = new RegExp("../img/pdn/");
                if(regex.test(data)) {
                    const imgAff = "<div class='text-center'><img src='"+data+"' height='80'></br></br>Photo ajoutée au formulaire</div>";
                    $("#message_admin_pdn").html(imgAff);
                } else { $("#message_admin_pdn").html(data); }

                $("#modalPdnAdmin").modal('show');
	        }
        });
    }));
});
