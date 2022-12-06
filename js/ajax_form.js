// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

const form_Populate = pdn_id => {
    //------------------------------------------------------------------------- Récupération de l'id du dernier formulaire créé par ce PDN
    $.ajax({
        url: 'php/form_Get.php',
        dataType: 'JSON',
        data : {id_pdn:pdn_id},
        success: function(response){
            const id_form = response[0].id;
            if(!id_form) {
                $("#infosMess").html("Vous n'avez pas encore complété de formulaire de suivi de l'activité. Vous pourrez utilisez cette fonctionnalité après votre premier enregistrement");
                $("#modalFormInfos").modal('show');
            } else {
                //-------------------------------------------------------------- Récupération des données du dernier formulaire créé
                $.ajax({
                    url: 'php/form_Get.php',
                    dataType: 'JSON',
                    data : {id_form:id_form},
                    success: function(response){
                        const nb_h = response[0].nb_h;
                        const smart = response[0].smart;
                        const ordi = response[0].ordi;
                        const tablette = response[0].tablette;
                        const consol = response[0].console;
                        const lien = response[0].lien;
                        const loisirs = response[0].loisirs;
                        const socio_pro = response[0].socio_pro;
                        const parentalite = response[0].parentalite;
                        const sante = response[0].sante;
                        const addiction = response[0].addiction;
                        const sexualite = response[0].sexualite;
                        const violence = response[0].violence;
                        const logement = response[0].logement;
                        const autre_them = response[0].autre_them;
                        const formation = response[0].formation;
                        const commentaires = response[0].commentaires;

                        $("#nb_h").val(nb_h);
                        if (smart === "1") $("#smart").prop('checked', true);
                        if (ordi === "1") $("#ordi").prop('checked', true);
                        if (tablette === "1") $("#tablette").prop('checked', true);
                        if (consol === "1") $("#console").prop('checked', true);
                        if (lien === "1") $("#lien").prop('checked', true);
                        if (loisirs === "1") $("#loisirs").prop('checked', true);
                        if (socio_pro === "1") $("#socio_pro").prop('checked', true);
                        if (parentalite === "1") $("#parentalite").prop('checked', true);
                        if (sante === "1") $("#sante").prop('checked', true);
                        if (addiction === "1") $("#addiction").prop('checked', true);
                        if (sexualite === "1") $("#sexualite").prop('checked', true);
                        if (violence === "1") $("#violence").prop('checked', true);
                        if (logement === "1") $("#logement").prop('checked', true);
                        if (autre_them === "1") $("#autre_them").prop('checked', true);
                        $("#formation").val(formation);
                        $("#commentaires").val(commentaires);
                    }
                });
                //-------------------------------------------------------------- Récupération des données des 4 principaux RS du dernier formulaire créé
                $.ajax({
                    url: 'php/form_Get.php',
                    dataType: 'JSON',
                    data : {id_form_rs:id_form},
                    success: function(response){
            			const len = response.length;
            			for (let i = 0; i < len; i++) {
            				const nom = response[i].nom;
            				const maitrise = response[i].maitrise;
            				const age = response[i].age;
                            const followers = response[i].nb_follow;
            				const messages = response[i].nb_mess;
            				const acc = response[i].nb_acc;

                            let facebook = [];
                            let snapchat = [];
                            let instagram = [];
                            let whatsapp = [];
                            // n : name / v : variable (tableau vide)
                            const arrayRS = [{"n":"facebook","v":facebook}, {"n":"snapchat","v":snapchat}, {"n":"instagram","v":instagram}, {"n":"whatsapp","v":whatsapp}];
                            const len_arrayRS = arrayRS.length;
                            for (let i = 0; i < len_arrayRS; i++) {
                                const n = arrayRS[i].n;
                                const v = arrayRS[i].v;

                                if(n===nom.toLowerCase()) {
                                    const checkbox = `#${n}`;
                                     $(checkbox).prop('checked', true);
                                     v.push(nom);
                                     v.push(maitrise);
                                     v.push(age);
                                     v.push(followers);
                                     v.push(messages);
                                     v.push(acc);
                                     sessionStorage.setItem(n, JSON.stringify(v));
                                }
                            }
            			}
            		}
                });
            }
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

            $("#infosMess").html("Le formulaire a bien été ajouté à la base de données.");
            //------------------------------------------------------------------ Réinitialisation du formulaire
            document.getElementById("form_form1").reset();
            document.getElementById("form_form2").reset();
            // ----------------------------------------------------------------- Récupération du mois précédent et de l'année en cours (sauf en janvier) - fonction dans functions
            datSelect();
        }
    });
}

//------------------------------------------------------------------------------ Récupération de l'id du formulaire créé
const form_Get_Id = (uuid) => {
    $.ajax({
        url: "php/form_Get.php",
        dataType: 'JSON',
        data : {uuid:uuid},
        success: function(response){
            const id_form = response[0].id;

            //------------------------------------------------------------------ Récupération et suppression du contenu des variables de session RS crées lors du click sur valider dans un modal RS
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

                    $.ajax({
                        url: 'php/form.php',
                        dataType: 'JSON',
                        data : {nom:nom, maitrise:maitrise, age:age, followers:followers, messages:messages, acc:acc, id_Form_Create_Rs:id_form}
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
                    const next_them = v[2];
                    const next_acc = v[3];

                    $.ajax({
                        url: 'php/form.php',
                        dataType: 'JSON',
                        data : {next_num:next_num, next_date:next_date, next_them:next_them, next_acc:next_acc, next_id_Form_Create_Init:id_form}
                    });
                }
            }
        }
    });
}
