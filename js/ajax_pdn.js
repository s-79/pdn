// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ----------------------------------------------------------------------------- Chargement de tous les PDN
const all_Pdn = () => {
	$("footer").removeClass('footer_absolute');
	$.ajax({
		url: "php/pdn_Get.php",
		dataType: 'JSON',
        data : {allVille:"allVille"},
		success: function(response){
            const len = response.length;
            pdn(response, len);
        }
	});
}

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

// ----------------------------------------------------------------------------- Chargement des PDN de la ville séléctionnée
const selected_Pdn = selectedVille => {
	$("footer").addClass('footer_absolute');
	// ------------------------------------------------------------------------- Récupération des infos du PDN pour affichage
    $.ajax({
		url: "php/pdn_Get.php",
		dataType: 'JSON',
		data : {selectedVille:selectedVille},
		success: function(response){
            const len = response.length;
            if (len !== 0) pdn(response, len);
            else {
                $("#modalNoPdn").modal('show');
                all_Pdn();
            }
        }
	});
}

// ----------------------------------------------------------------------------- ! ! ! - - C L I C K - - ! ! !

// ----------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LA CARTE D'UN PDN
const clicked_pdn = (id) => {
	$.ajax({
		url: "php/pdn_Get.php",
		dataType: 'JSON',
		data : {idPdn:id},
		success: function(response){
			const prenom = response[0].prenom;
			const nom = response[0].nom;
			const fonction = response[0].fonction;
			const mail_nom = response[0].mail_nom;
			const mail_domaine = response[0].mail_domaine;
			const portablePro = response[0].portablePro;
			const facebook = response[0].facebook;
			const snapchat = response[0].snapchat;
			const instagram = response[0].instagram;
			const whatsApp = response[0].whatsApp;
			const youtube = response[0].youtube;
			const twitter = response[0].twitter;
			const discord = response[0].discord;
			const twitch = response[0].twitch;
			const tiktok = response[0].tiktok;
			const image = response[0].image;
			const presentation = response[0].presentation;
			let actif = response[0].actif;
			if (actif==="1") actif = "green;' data-bs-toggle='tooltip' data-bs-placement='top' title='Actif' ></i>";
			else actif = "#e85017;' data-bs-toggle='tooltip' data-bs-placement='top' title='Inactif'></i>";
			const str_nom = response[0].str_nom;
			const str_tel = response[0].str_tel;
			const str_site = response[0].str_site;
			const str_adresse = response[0].str_adresse;
			const ville_cp = response[0].ville_cp;
			const ville_nom = response[0].ville_nom;

			// ----------------------------------------------------------------- Remplissage du modal
			$("#modalPdnHeader").html(`<h2 class='modal-title orange text-uppercase pt-2'>${prenom} ${nom} - ${fonction}&nbsp;&nbsp;&nbsp;<i class='fa fa-circle' style='color:${actif}</h2><h3 class='bleu fw-bold text-uppercase' style='margin-top:0.2em;font-weight:0.8em;'>${str_nom}&nbsp;-&nbsp${ville_nom}&nbsp;&nbsp;<a><i id='btnInfosStr' class='bleu fa fa-info-circle' data-bs-toggle='tooltip' data-bs-placement='top' title="Cliquer pour + d'infos ..."></i></a></h3>`);
			$("#modalPdnHeader").append(`<h5 class='infosStr d-none bleu'><span>${str_adresse}</br>${ville_cp} ${ville_nom}</br>${str_tel}</br><a href='${str_site}' class='bleu liens' target='_blank'>${str_site}</a></br></div></span></h5>`);
			$("#modalPdnContentLeft").html(`<img src='img/logo_promeneurs_du_net.png' height='100' class='mt-3'><br><img id='modalImg' src='${image}' height='120' class='my-3' alt='${prenom} ${fonction} ${ville_nom}' title='${prenom} ${fonction} ${ville_nom}' />`);
			$("#modalPdnContentRight").html(`<h5 class='bleu fst-italic'><blockquote><i class='fas fa-quote-left pe-2 mt-2'></i>${presentation}<i class='fas fa-quote-right ps-2'></blockquote></i></h5></div>`);

			// ----------------------------------------------------------------- Création du footer
			let footer = "<div><h6>";
			// ----------------------------------------------------------------- Fonction définies dans ajax_str
			footer += footer_rs(id, facebook, snapchat, instagram, youtube, twitter, discord, twitch, tiktok, portablePro, whatsApp, mail_nom, mail_domaine);

			// ----------------------------------------------------------------- Remplissage du footer et affichage du modal
			$("#modalPdnFooter").html(footer);
			$("#modalPdn").modal('show');

			// -----------------------------------------------------------------  Fonction click sur les réseaux sociaux
			const rs2 = ['facebook', 'instagram', 'snapchat', 'youtube', 'twitter', 'twitch', 'discord', 'tiktok', 'portablePro', 'whatsapp', 'mail'];
			// Fonction définie dans ajax_str
			for (e of rs2) clicked_rs(e);
		}
	});
}

// ----------------------------------------------------------------------------- ! ! ! - - FONCTIONS DÉFINIES - - ! ! !

// ----------------------------------------------------------------------------- Fonction d'affichage des cartes PDN
const pdn = (response, len) => {
    let res = "";
    for (let i = 0; i < len; i++) {
        const id = response[i].id;
		const prenom = response[i].prenom;
        const nom = response[i].nom;
		const fonction = response[i].fonction;
        const image = response[i].image;
		const ville = response[i].ville_nom;
        // --------------------------------------------------------------------- Création des vignettes
		res +=`<div id='${id}' class='col-6 col-md-4 col-lg-3 col-xl-2 mb-4 text-center divfigure'>`;
		res +=	`<figure class='bg-white pt-3 pl-1 pr-1 pointeur' style="padding-bottom:0.05em;">`;
		res +=		`<img style='border-radius: 15%;' src='${image}'height='120' alt='${prenom} ${nom}' title='${prenom} ${nom}'/>`;
		res +=		`<figcaption class='pt-2'><h6 class='text-uppercase fw-bold bleu'>${prenom} ${nom}</br><span class='orange'>${fonction}</span></br>${ville}</h6></figcaption>`;
		res +=	`</figure>`;
		res +=`</div>`;
    }
    $("#promeneurs").html(res);
}
