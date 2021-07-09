// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ----------------------------------------------------------------------------- Remplissage de la liste Ville - Récup données & append */
const ajaxListVille = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_ville:"v_ville"},
        success: function(response){
            $(liste).html("<option selected value='0'>Toutes les villes</option>");
            $(liste).append(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- Chargement de toutes les structures
const all_Str = () => {
	$.ajax({
		url: "php/str_Get.php",
		dataType: 'JSON',
        data : {allVille:"allVille"},
		success: function(response){
            const len = response.length;
            structure(response, len);
        }
	});
}

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

// ----------------------------------------------------------------------------- Chargement des structures de la ville séléctionnée
const selected_Str = selectedVille => {
	// ------------------------------------------------------------------------- Récupération des infos structures
    $.ajax({
		url: "php/str_Get.php",
		dataType: 'JSON',
		data : {selectedVille:selectedVille},
		success: function(response){
            const len = response.length;
            if (len !== 0) structure(response, len);
            else {
                $("#modalNoStr").modal('show');
                all_Str();
            }
        }
	});
}

// ----------------------------------------------------------------------------- ! ! ! - - C L I C K - - ! ! !

// ----------------------------------------------------------------------------- Récupération des infos de la structure
const str_Get_Infos = idStr => {
	$.ajax({
		url: "php/str_Get.php",
		dataType: 'JSON',
		data : {idStr:idStr},
		success: function(response){
            const nom = response[0].nom;
            const adresse = response[0].adresse;
            const cp = response[0].cp;
            const ville = response[0].ville;
            const tel = response[0].tel;
            const site = response[0].site;
            const presentation = response[0].presentation;
            const image = response[0].image;
        	// ----------------------------------------------------------------- Création du modal de la structure cliquée
            $("#modalStrHeader").html(`<h2 class='modal-title orange fw-bold text-uppercase'>${nom}</h2><h4 class='bleu mb-0'>${adresse}</br>${cp} ${ville}</br>${tel}</h4>`);
            $("#modalStrContentLeft").html(`<img src='${image}' width='100%' height='120' alt='${nom} - ${ville}' title='${nom} - ${ville}' /></br></br><h4><a href='${site}' class='liens bleu' target='_blank'><i class='fas fa-globe bleu'></i></br>Site Internet</br>de la structure</a></h4>`);
            $("#modalStrContentRight").html(`<h5 class='bleu'><i class='fas fa-arrow-right pe-2'></i>${presentation}</h5>`);
        }
	});
}

// ----------------------------------------------------------------------------- Récupération des infos sur les PDN de la structure
const str_Get_Pdn = idStr => {
	$.ajax({
		url: "php/str_Get.php",
		dataType: 'JSON',
		data : {idStr_Pdn:idStr},
		success: function(response){
            // ----------------------------------------------------------------- Récupération des données des PDN de la structure cliquée
            let footerImg = "";
            let footer = "";
            const len = response.length;
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const prenom = response[i].prenom;
                const nom = response[i].nom;
                const fonction = response[i].fonction;
                const mail_nom  = response[i].mail_nom ;
                const mail_domaine = response[i].mail_domaine;
                const portablePro = response[i].portablePro;
                const facebook = response[i].facebook;
                const snapchat = response[i].snapchat;
                const instagram = response[i].instagram;
                const whatsApp = response[i].whatsApp;
                const youtube = response[i].youtube;
                const twitter = response[i].twitter;
                const discord  = response[i].discord ;
                const twitch = response[i].twitch;
                const tiktok = response[i].tiktok;
                const image = response[i].image;
                let actif = response[i].actif;
                if (actif==="1") actif = "<i class='fa fa-circle actif'></i>";
                else actif = "<i class='fa fa-circle inactif'></i>";
                // n : name / v : variable
                const rs = [{"n":"facebook","v":facebook}, {"n":"snapchat","v":snapchat}, {"n":"instagram","v":instagram}, {"n":"youtube","v":youtube}, {"n":"twitter","v":twitter}, {"n":"discord","v":discord}, {"n":"twitch","v":twitch}, {"n":"tiktok","v":tiktok}];
                const len_rs = rs.length;

                // ------------------------------------------------------------- Affichage de la photo des PDN
                footerImg += `<img id='${id}' class='pt-1 pb-1 pr-2 pl-2 pointeur photo' src='${image}' height='100' alt='${prenom} ${nom}' title='${prenom} ${nom}' />`;

                // ------------------------------------------------------------- Affichage des réseaux sociaux des PDN dans div invisible
        		footer += `<div id='infosRS${id}' class='footerRS d-none mt-0'><h6 class='mb-0 bleu interligne text-uppercase'>${prenom} ${nom} - ${fonction}&nbsp;&nbsp;&nbsp;${actif}</br>`;

                // ------------------------------------------------------------ Affichage des icones des réseaux sociaux existants dans la BDD
                for (let i = 0; i < len_rs; i++) {
                    const n = rs[i].n;
                    const v = rs[i].v;
                    if(v) footer += `<i id='${n}${id}' class='${n} bleu liens fab fa-${n} fa-lg pointeur pe-3'></i>`;
                }
                if(portablePro) footer += `<i id='portablePro${id}' class='portablePro bleu liens fas fa-mobile-alt fa-lg pointeur pe-3'></i>`;
                if(whatsApp === "1") footer += `<i id='whatsapp${id}' class='whatsapp bleu liens fab fa-whatsapp fa-lg pointeur pe-3'></i>`;
                footer += `<i id='mail${id}' class='mail bleu liens fas fa-envelope fa-lg pointeur'></i></h6></div>`;

        		// ------------------------------------------------------------ Affichage des infos relatives aux réseaux sociaux des PDN
                for (let i = 0; i < len_rs; i++) {
                    const n = rs[i].n;
                    const v = rs[i].v;
                    if(v) {
                        // Si l'appli ne permet pas de faire un lien vers le profil
                        if(n==="snapchat" || n==="discord") footer += `<div class='class${n}${id} infosRS mt-1 d-none'><h6 class='mb-0 bleu'>${v}</h6></div>`;
                        else {footer += `<div class='class${n}${id} infosRS mt-1 d-none'><h6 class='mb-0'><a class='bleu liens' href='${v}' target='_blank'>${v}</a></h6></div>`;}
                    }
                }
                if(portablePro) footer += `<div class='classportablePro${id} infosRS mt-1 d-none'><h6 class='mb-0 bleu'>${portablePro}</h6></div>`;
                if(whatsApp === "1") footer += `<div class='classwhatsapp${id} infosRS mt-1 d-none'><h6 class='mb-0 bleu'>${portablePro}</h6></div>`;
                footer += `<div class='classmail${id} infosRS mt-1 d-none'><h6 class='mb-0'><a class='bleu' href='mailto:${mail_nom}@${mail_domaine}'>${mail_nom}(at)${mail_domaine}</a></h6></div>`;
            }
            $("#modalStrFooter").html(footerImg);
            $("#modalStrFooter").append(footer);
            $("#modalStr").modal('show');

            // -----------------------------------------------------------------  Fonction click sur les réseaux sociaux
            const rs2 = ['facebook', 'instagram', 'snapchat', 'youtube', 'twitter', 'twitch', 'discord', 'tiktok', 'portablePro', 'whatsapp', 'mail'];
            for (e of rs2) clicked_rs(e);
        }
	});
}

// ----------------------------------------------------------------------------- EVEMENTS CLICK SUR LA PHOTO D'UN PDN
$("body").delegate( ".photo", "click", function() {
    $(".footerRS").addClass("d-none");
    $(".infosRS").addClass("d-none");
	// On récupère l'id de la photo sélectionnée et on fait apparaitre la div correspondante
	const idPhoto = $(this).attr('id');
	let idInfosRS = "#infosRS"+idPhoto;
	$(idInfosRS).toggleClass("d-none");
});

// ----------------------------------------------------------------------------- FONCTION CLICK SUR LES RÉSEAUX SOCIAUX
const clicked_rs = e => {
    $("body").delegate(`.${e}`, "click", function() {
        $(".infosRS").addClass("d-none");
        // On récupère l'id du RS sélectionné et on fait apparaitre la div correspondante
    	let id = $(this).attr('id');
    	const idSplit = id.split(`${e}`);
    	id = idSplit[1];
    	const details = `.class${e}${id}`;
    	$(details).toggleClass("d-none");
    });
}

// // ---------------------------------------------------------s----------------- EVEMENTS CLICK SUR LES ICONES DU MODAL "PAS DE PDN DANS LA VILLE"
$("body").delegate( "#CoordoFacebook", "click", function() {
	$(".infosRSCoordo").addClass("d-none");
  	$("#CoordoFacebookDetails").removeClass("d-none");
});

$("body").delegate( "#CoordoTwitter", "click", function() {
	$(".infosRSCoordo").addClass("d-none");
  	$("#CoordoTwitterDetails").removeClass("d-none");
});

$("body").delegate( "#CoordoMail", "click", function() {
	$(".infosRSCoordo").addClass("d-none");
  	$("#CoordoMailDetails").removeClass("d-none");
});

// ----------------------------------------------------------------------------- ! ! ! - - FONCTIONS DÉFINIES - - ! ! !

// ----------------------------------------------------------------------------- Fonction d'affichage des cartes de structures
const structure = (response, len) => {
	// ------------------------------------------------------------------------- Récupération des infos structures
    let res = "";
    for (let i = 0; i < len; i++) {
        const id = response[i].id;
        const nom = response[i].nom;
        const ville = response[i].ville;
        const image = response[i].image;
        // --------------------------------------------------------- Création des vignettes
        res += `<div class='strCard col-6 col-sm-6 col-md-4 col-lg-3 mb-4'>`;
        res += `<div id='${id}' class='card pointeur border bg_bleu'>`;
        res += `<div class='card-body text-center'>`;
        res += 		`<h2 class='card-title text-white text-uppercase'>${nom}</h2>`;
        res += 		`<h3 class='card-text text-white text-uppercase'>${ville}</h3></div>`;
        res += 		`<a data-toggle='modal' data-target='#Modal${id}'>`;
        res += 			`<img class='card-img cardHeight' src='${image}' height='180' alt='${nom} - ${ville}' title='${nom} - ${ville}'></a>`;
        res += `</div></div>`;
    }
    $("#structures").html(res);
}
