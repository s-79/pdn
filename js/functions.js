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

/* ----------------------------------------------------------------------------- Mettre la 1ère lettre en majuscule */
const strUpFirst = a => {
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}
