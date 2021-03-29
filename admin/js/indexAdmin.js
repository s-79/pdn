$("#connexion").click(function(){
    // --------------------------------------------------------------------------------------------------------------------------------------- Récupération des infos de connexion
    const email = $("#email").val();
    const mdp = $("#mdp").val();
    const connex = admin("php/admin.php",email,mdp)
	if (connex==="1"){
		location.href='strAjout.php';
	}
    else {
        // ---------------------------------------------------------------------------------------------------- L'email est-il déjà dans la BDD ?
        const existemail = existeMailAdmin("php/existeMailAdmin.php", email);
        if(existemail==="1"){
            // alert("Email déjà utilisé. Vous pouvez nous contacter pour demander la réinitialisation du mot de passe")
            let histo  = "";
            histo +="<div class='container priorité'>"
            histo +=	"<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            histo +=		"Mot de passe incorecte."
            histo +=		"<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
            histo +=		"<span aria-hidden='true'>x</span>";
            histo +=		"</button>";
            histo +=	"</div>";
            histo +="</div></br>";

            $("#alerte").html(histo);
        }
    }
});

$("#alerte").click(function(){
    location.reload();
});
