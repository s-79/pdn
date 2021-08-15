window.onload = function(){
    // -------------------------------------------------------------------------------------------------------------- Mettre en valeur le menu actif
    $("#strMenu").toggleClass("nav-link-toggle");

    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};

// On initialise la latitude et la longitude du centre de la Seine Saint-Denis
var lat = 48.91010;
var lon = 2.44580;
var macarte = null;
var structures = [];

// ----------------------------------------------------------------------------- Fonction d'initialisation de la carte
function initMap() {
    // ------------------------------------------------------------------------- Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // ------------------------------------------------------------------------- Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // --------------------------------------------------------------------- Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
        minZoom: 11,
        maxZoom: 20
    }).addTo(macarte);

    //Récupération des données GEOJSON extraite du fichier ssdgeojson et copier dans la variable ssd dans ssd.js
    const ssd_layer = L.geoJson(ssd);
    ssd_layer.addTo(macarte);
}

// ----------------------------------------------------------------------------- Récupération des coordonnées, noms et id des structures
$.ajax({
	url: "php/str_Get.php",
	dataType: 'JSON',
	data : {osm:"osm"},
	success: function(response){
        const len = response.length;
        for (let i = 0; i < len; i++) {
            const id = response[i].id;
    		const nom = response[i].nom;
            const ville = response[i].ville;
    		const lat = response[i].lat;
            const lon = response[i].lon;
            // ----------------------------------------------------------------- Ajout des marqueurs
            const marker = L.marker([lat, lon]).addTo(macarte);
            // ----------------------------------------------------------------- Ajout de la pop up
            marker.bindPopup(`<strong>${nom} - ${ville}</strong><br /><a class='popUpStr' id=${id}>+ d'infos sur la structure et ses Promeneurs du Net.</a>`, {maxWidth: 500});
        }
    }
});

// ----------------------------------------------------------------------------- Ouverture du Modal
$("body").delegate( ".popUpStr", "click", function() {
	// ------------------------------------------------------------------------- Récupération de l'id de la structure séléctionnée
	const idStr = $(this).attr('id');
	str_Get_Infos(idStr);
	str_Get_Pdn(idStr);
});
