// e c'est l'evenement - preventDefault annule celui-ci, ce qui signifie que chaque action par défaut se produisant normalement ne se produira pas.
$(document).ready(function (e) {
    $("#form3").on('submit',(function(e) {
		e.preventDefault();
        $.ajax({
	        url: "php/outUpFile.php",
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
                $("#fileUrl").val("");
                $("#fileUrl").val($("#fileUrl").val() + data);
                const pdfFile = "<img src='img/logo/pdf.png' height='80'>";
                const docFile = "<img src='img/logo/doc.png' height='80'>";
                const odtFile = "<img src='img/logo/odt.png' height='80'>";
                const dataSplit = data.split(".");
                const ext = dataSplit[1];
                if (ext==="pdf") $("#fileAff").html(pdfFile);
                if (ext==="doc" || ext==="docx") $("#fileAff").html(docFile);
                if (ext==="odt") $("#fileAff").html(odtFile);
                $("#fileUrl")[0].disabled = true;
                $("#fileAff").fadeIn(1000);
	        },
	        error: function(e) {
	            alert(e);
	        }
        });
    }));
});
