const displayList = (response) => {
    let res = "";
    const len = response.length;
    for (let i = 0; i < len; i++) {
        const id = response[i].id;
        let nom = "";
        if(parseInt(id) === 0) nom = "Non renseigné";
        else {nom = response[i].nom;}
        res += `<option value="${id}">${nom}</option>`;
    }
    return res;
}

// ----------------------------------------------------------------------------- Récupération du mois précédent et de l'année en cours (sauf en janvier)
const datSelect = () => {
    const d = new Date();
    let m = d.getMonth(); // Mois de 0 à 11
    let a = d.getFullYear();

    let years = "";
    const arrayYears = [2022, 2023, 2024, 2025, 2026];
    for (y of arrayYears) years +=`<option value='${y}'>${y}</option>`;
    $("#annee").html(years);

    // c : chiffres / l : lettres --- Mois
    const arrayMonth = [{"c":1,"l":"Janvier"}, {"c":2,"l":"Février"}, {"c":3,"l":"Mars"}, {"c":4,"l":"Avril"}, {"c":5,"l":"Mai"}, {"c":6,"l":"Juin"}, {"c":7,"l":"Juillet"}, {"c":8,"l":"Août"}, {"c":9,"l":"Septembre"}, {"c":10,"l":"Octobre"}, {"c":11,"l":"Novembre"}, {"c":12,"l":"Décembre"}];
    const len_am = arrayMonth.length;
    let month = "";
    for (let i = 0; i < len_am; i++) {
        const c = arrayMonth[i].c;
        const l = arrayMonth[i].l;
        month +=`<option value='${c}'>${l}</option>`;

    // en janvier "0", il propose le mois de décembre de l'année précédente
        if(m===0) {a -= 1; m = 12;}
    }
    $("#mois").html(month);
    $("#mois").val(m);
    $("#annee").val(a);
}

// ----------------------------------------------------------------------------- Fonction UUID
const uuid_gen = () => {
  const s4=()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}

// ----------------------------------------------------------------------------- Fonction de vérification de la longueur du champ présentation
const vLen = (nom, champ, nbCar, divMessageModal) => {
	if(champ.length <= nbCar) etat=true;
    else {
        $(divMessageModal).html(`La taille du champ <b>${nom}</b> ne doit pas dépasser les ${nbCar} caractères.`);
        etat=false;
    }
return etat;
}

/* ----------------------------------------------------------------------------- Mettre la 1ère lettre en majuscule */
const strUpFirst = a => {
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}
