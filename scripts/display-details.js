// Récupérer les informations du pays depuis le localStorage
const countryDetails = JSON.parse(localStorage.getItem('countryDetails'));

// Sélectionner l'élément où afficher les informations du pays
const countryDetailsContainer = document.getElementById('country-details-container');

// Créer un élément <img> pour afficher le drapeau
const flagImg = document.createElement('img');
flagImg.src = countryDetails[0].flags.svg; // Utilisez l'URL du drapeau du pays depuis les données récupérées
flagImg.alt = `${countryDetails[0].name.common} flag`;
flagImg.classList.add('h-2/3', 'w-1/3', 'mr-4'); // Ajouter des classes pour le dimensionnement et la marge droite

// Ajouter l'élément <img> au début du conteneur des détails du pays
countryDetailsContainer.appendChild(flagImg);

// Créer un élément div pour les informations du pays
const detailsInformationDiv = document.createElement('div');
detailsInformationDiv.id = 'country-details-informations';

// Ajouter l'élément div au conteneur des détails du pays
countryDetailsContainer.appendChild(detailsInformationDiv);

// Créer des éléments <p> pour chaque propriété spécifiée
const properties = [
    { label: 'Second Alt Spellings', key: 'altSpellings', alt: 'AltSpellings' },
    { label: 'Native Name', key: 'nativeName', alt: 'Native name' },
    { label: 'Population', key: 'population' },
    { label: 'Region', key: 'region' },
    { label: 'Subregion', key: 'subregion' },
    { label: 'Capital', key: 'capital' },
    { label: 'Top Level Domain', key: 'tld' },
    { label: 'Currencies', key: 'currencies' },
    { label: 'Languages', key: 'languages' },
    { label: 'Border Countries', key: 'borders' }
];

properties.forEach(property => {
    const propertyParagraph = document.createElement('p');
    const propertyValue = countryDetails[0][property.key];

    // Si la valeur de la propriété est un tableau, convertissez-le en une chaîne de caractères séparée par des virgules
    const formattedValue = Array.isArray(propertyValue) ? propertyValue.join(', ') : propertyValue;

    // Construire le texte pour le paragraphe
    const text = `${property.label}: ${formattedValue}`;

    propertyParagraph.textContent = text;

    // Ajouter l'élément <p> au conteneur des informations du pays
    detailsInformationDiv.appendChild(propertyParagraph);
});
