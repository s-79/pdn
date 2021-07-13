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

//
// /* ---------------------------------------------------------------------------- Affiche Liste
// Procédure qui affiche dans une liste déroulante spécifiée  des informations extraites d'une chaine xml
//  . idListe => L'endroit où va s'insérer la liste dans le php / html
//  . varxml => Le nom de la variable créee (chaine) via la fonction getXmlBase en ligne 5
//  . nomtable => Le nom de la table dans la base de données
//  . valeur => nom de la colonne de filtrage dans la table - On doit filtrer sur la clef primaire !!!
//  . libellé => nom du display que l'on souhaite afficher */
//
// function afficheListe(idliste,varxml,nomtable,valeur,libelle) {
//     var chaine="";
//     $(varxml).find(nomtable).each (function() {
//         var va =$(this).find(valeur).text();
//     	var lib=$(this).find(libelle).text();
//     	chaine+="<option value='"+va+"'>"+lib+"</option>";
// 	});
//     var nomliste="#"+idliste;
//     $(nomliste).append(chaine);
// }
//
// /* ---------------------------------------------------------------------------- Get Element
// Fonction qui recherche la valeur d'une colonne d'une chaine xml à partir de la valeur de la clé primaire
// . colnom=nom de la colonne clé primaire
// . colvaleur :valeur de la clé
// . colrech : nom de la colonne recherchée */
// function getElement(xml,nomtable,colnom,colvaleur,colrech) {
//     var res="";
//     $(xml).find(nomtable).each (function() {
//     	var id=$(this).find(colnom).text();
//     	if(id==colvaleur)
//     	res=$(this).find(colrech).text();
//     });
//     return res;
// }
//
// /* ---------------------------------------------------------------------------- Nombre d'éléments
// Fonction qui retourne le nb d'éléments de la chaine xml spécifiée */
//
// function nbElements(varxml,nomtable) {
//     var n=0;
//     $(varxml).find(nomtable).each (function() {
//         n++;
//     });
//     return n;
//  }
