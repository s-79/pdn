// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

// ----------------------------------------------------------------------------- Récupération et affichage des infos PDN
const form_Get_Pdn = pdn_id => {
    $.ajax({
		url: "php/pdn_Get.php",
		dataType: 'JSON',
		data : {idPdn:pdn_id},
		success: function(response){
			const prenom = response[0].prenom;
			const nom = response[0].nom;
			const fonction = response[0].fonction;
            const tel = response[0].portablePro;
			const mail_nom = response[0].mail_nom;
			const mail_domaine = response[0].mail_domaine;
            const str_nom = response[0].str_nom;
			const ville_nom = response[0].ville_nom;
            $("#prenom").val(prenom);
            $("#nom").val(nom);
            $("#fonction").val(fonction);
            $("#tel").val(tel);
            const mail = `${mail_nom}@${mail_domaine}`;
            $("#mail").val(mail);
            $("#structure").val(str_nom);
            $("#ville").val(ville_nom);
        }
	});
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !
const form_Create = (uuid, mois, annee, nb_h, smart, ordi, tablette, consol, lien, loisirs, socio_pro, parentalite,
    sante, addiction, sexualite, violence, logement, autre_them, formation, commentaires, pdn_id) => {
    $.ajax({
        url: 'php/form.php',
        dataType: 'JSON',
        data : {uuid:uuid, mois:mois, annee:annee, nb_h:nb_h, smart:smart, ordi:ordi, tablette:tablette, consol:consol, lien:lien, loisirs:loisirs, socio_pro:socio_pro, parentalite:parentalite, sante:sante, addiction:addiction, sexualite:sexualite, violence:violence, logement:logement, autre_them:autre_them, formation:formation, commentaires:commentaires, pdn_id:pdn_id},
        complete: function(){
            //------------------------------------------------------------------ Récupération de l'id de l'événement créé et envoies des RS et Initiatives vers la BDD
            form_Get_Id(uuid);

            alert("Le formulaire a bien été ajouté à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des événements
            document.getElementById("form_form").reset();
            // ----------------------------------------------------------------- Récupération du mois précédent et de l'année en cours (sauf en janvier) - fonction dans functions
            datSelect();
        }
    });
}

//------------------------------------------------------------------------------ Récupération de l'id de l'événement créé
const form_Get_Id = (uuid) => {
    $.ajax({
        url: "php/form_Get.php",
        dataType: 'JSON',
        data : {uuid:uuid},
        success: function(response){
            const id_form = response[0].id;

            //------------------------------------------------------------------ Récupérarion et suppression du contenu des variables de session RS crées lors du click sur valider dans un modal RS
            let facebook = "";
            let instagram = "";
            let snapchat = "";
            let whatsapp = "";
            let autre1 = "";
            let autre2 = "";

            const arrayRs = [{"n":"facebook","v":facebook}, {"n":"instagram","v":instagram}, {"n":"snapchat","v":snapchat}, {"n":"whatsapp","v":whatsapp}, {"n":"autre1","v":autre1}, {"n":"autre2","v":autre2}];
            const len_arrayRs = arrayRs.length;
            for (let i = 0; i < len_arrayRs; i++) {
                const n = arrayRs[i].n;
                let v = arrayRs[i].v;
                v = sessionStorage.getItem(n);
                v = JSON.parse(v);
                sessionStorage.removeItem(n);

                // ------------------------------------------------------------- Récup nom du contenu des variables RS
                if(v) {
                    const nom = v[0];
                    const maitrise = v[1];
                    const age = v[2];
                    const followers = v[3];
                    const messages = v[4];
                    const acc = v[5];
                    const new_acc = v[6];

                    $.ajax({
                        url: 'php/form.php',
                        dataType: 'JSON',
                        data : {nom:nom, maitrise:maitrise, age:age, followers:followers, messages:messages, acc:acc, new_acc:new_acc, id_Form_Create_Rs:id_form}
                    });
                }
            }

            //------------------------------------------------------------------ Récupérarion et suppression du contenu des variables de session init crées lors du click sur valider dans le modal init
            let init1 = "";
            let init2 = "";
            let init3 = "";
            let init4 = "";
            let init5 = "";
            let init6 = "";

            const arrayInit = [{"n":"init1","v":init1}, {"n":"init2","v":init2}, {"n":"init3","v":init3}, {"n":"init4","v":init4}, {"n":"init5","v":init5}, {"n":"init6","v":init6}];
            const len_arrayInit = arrayInit.length;
            for (let i = 0; i < len_arrayInit; i++) {
                const n = arrayInit[i].n;
                let v = arrayInit[i].v;
                v = sessionStorage.getItem(n);
                v = JSON.parse(v);
                sessionStorage.removeItem(n);

                // ------------------------------------------------------------- Récup nom du contenu des variables Initiatives
                if(v) {
                    const num = v[0];
                    const date = v[1];
                    const intitule = v[2];
                    const them = v[3];
                    const age = v[4];
                    const nb_jeunes = v[5];

                    $.ajax({
                        url: 'php/form.php',
                        dataType: 'JSON',
                        data : {num:num, date:date, intitule:intitule, them:them, nb_jeunes:nb_jeunes, age_init:age, id_Form_Create_Init:id_form}
                    });
                }
            }

            //------------------------------------------------------------------ Récupération et suppression du contenu des variables de session next_init crées lors du click sur valider dans le modal next_init
            let next_init1 = "";
            let next_init2 = "";
            let next_init3 = "";
            let next_init4 = "";
            let next_init5 = "";
            let next_init6 = "";

            const arrayNextInit = [{"n":"next_init1","v":next_init1}, {"n":"next_init2","v":next_init2}, {"n":"next_init3","v":next_init3}, {"n":"next_init4","v":next_init4}, {"n":"next_init5","v":next_init5}, {"n":"next_init6","v":next_init6}];
            const len_arrayNextInit = arrayNextInit.length;
            for (let i = 0; i < len_arrayNextInit; i++) {
                const n = arrayNextInit[i].n;
                let v = arrayNextInit[i].v;
                v = sessionStorage.getItem(n);
                v = JSON.parse(v);
                sessionStorage.removeItem(n);

                // ------------------------------------------------------------- Récup nom du contenu des variables next Init
                if(v) {
                    const next_num = v[0];
                    const next_date = v[1];
                    const next_intitule = v[2];
                    const next_them = v[3];
                    const next_age = v[4];
                    const next_nb_jeunes = v[5];

                    $.ajax({
                        url: 'php/form.php',
                        dataType: 'JSON',
                        data : {next_num:next_num, next_date:next_date, next_intitule:next_intitule, next_them:next_them, next_nb_jeunes:next_nb_jeunes, next_age_init:next_age, next_id_Form_Create_Init:id_form}
                    });
                }
            }
        }
    });
}
