// On initialise la latitude et la longitude du centre de la Seine Saint-Denis
var lat = 48.91010;
var lon = 2.44580;
var macarte = null;

// Nous initialisons une liste de marqueurs
var villes = {
    "Ligue de l'enseignement / FOL93": { "lat": 48.91269, "lon": 2.44627 },
    "Iris Messidor": { "lat": 48.90187, "lon": 2.47996 },
    "Le Kiosque": { "lat": 48.8807602, "lon": 2.4191191 },
    "Le Cercle J": { "lat": 48.8759346, "lon": 2.4834493 },
    "ERA 93": { "lat": 48.91234, "lon": 2.33768 },
    "Maison Marianne Solidarité et Parentalité": { "lat": 48.91373, "lon": 2.48134 },
    "A.L.J.T.": { "lat": 48.91303, "lon": 2.33374 },
    "Jeunesse Feu Vert": { "lat": 48.95141, "lon": 2.32568 },
    "Point Information Jeunesse de Sevran": { "lat": 48.93802, "lon": 2.52808 },
    "Centre Socioculturel Maroc-Chatenay-Poetes": { "lat": 48.93813, "lon": 2.52789 },
    "SMJ de Noisy-le-sec": { "lat": 48.8901710, "lon": 2.4549590 },
    "Maison de Quartier et des Associations du Vieux-Pays": { "lat": 48.97986, "lon": 2.55649 },
    "A.P.C.I.S.": { "lat": 48.95238, "lon": 2.37483 },
    "De l'Autre Coté": { "lat": 48.90199, "lon": 2.38664 },
    "A Travers la Ville": { "lat": 48.90602, "lon": 2.38718 },
    "L'Espace J": { "lat": 48.89785, "lon": 2.55873 },
    "Maison de la Jeunesse": { "lat": 48.93569, "lon": 2.33927 },
    "Maison pour Tous": { "lat": 48.86182, "lon": 2.57784 },
    "Maison pour tous Cesaria Evora": { "lat": 48.9328, "lon": 2.39036 },
    "Centre Socioculturel - Alain Mimoun": { "lat": 48.88842, "lon": 2.48988 },
    "Atelier Kuso": { "lat": 48.91914, "lon": 2.38502 },
    "Centre Socioculturel Marnaudes-Bois Perrier": { "lat": 48.88182, "lon": 2.48509 },
    "Le LAJ": { "lat": 48.88463, "lon": 2.4038 },
    "Bureau Information Jeunesse de Romainville": { "lat": 48.88523, "lon": 2.43781 },
    "110 - Centre Socioculturel Cooperatif ": { "lat": 48.93986, "lon": 2.35667 },
    "Centre socioculturel Jacques Prévert": { "lat": 48.87801, "lon": 2.55094 }
};

// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
        minZoom: 11,
        maxZoom: 20
    }).addTo(macarte);

    // Nous parcourons la liste des villes
    for (ville in villes) {
        var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);

        // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
        marker.bindPopup("<strong>"+ville+"</strong><br /><a href='../structures.php'>+ d'infos sur la structure et ses Promeneurs du Net.</a>", {maxWidth: 500});
        // marker.bindPopup(ville);
    }
    // Nous ajoutons un marqueur sur la position centrale - La ligue ?
    // var marker = L.marker([lat, lon]).addTo(macarte);

    //Récupération des données GEOJSON extraite du fichier ssdgeojson et copier dans la variable ssd dans ssd.js
    var ssd_layer = L.geoJson(ssd);
    ssd_layer.addTo(macarte);
}

window.onload = function(){
    // -------------------------------------------------------------------------------------------------------------- Mettre en valeur le menu actif
    $("#strMenu").toggleClass("nav-link-toggle");
    
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};
